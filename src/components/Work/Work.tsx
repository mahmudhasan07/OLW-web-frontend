"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGetAllServicesQuery } from "@/Redux/Api/serviceApi";

const Work = () => {
    const { data: servicesData, isLoading } = useGetAllServicesQuery(undefined);
    const services = servicesData?.data || [];

    if (isLoading) {
        return (
            <section className="py-12 md:py-16 w-full overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center w-full mb-12">
                        <div className="h-10 w-48 bg-gray-800 rounded-lg animate-pulse mx-auto mb-4" />
                        <div className="h-4 w-64 bg-gray-800 rounded-lg animate-pulse mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-96 bg-[#111633] rounded-2xl border border-gray-800 animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 md:py-16 w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    className="text-center w-full mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                        Our Work
                    </h2>
                </motion.div>
                <div className="text-right md:pr-3 pr-4 mb-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href={'/work'} className="text-[#E8ECF1] text-right hover:text-[#00FFD4] transition-colors">View All</Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
                    {services.slice(0, 6).map((service: any, index: number) => (
                        <motion.div
                            key={service.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-2xl p-0 overflow-hidden border border-gray-700 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20  flex flex-col"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-64 overflow-hidden">
                                <Image
                                    src={service.image && service.image.length > 0 ? service.image[0] : "https://placehold.co/600x400/1e293b/00ffd4?text=Service"}
                                    alt={service.title}
                                    fill
                                    unoptimized
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col justify-end transition-colors duration-300">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-lg text-xs font-medium bg-[#1A2342] text-[#00D4FF] border border-[#2A3458] group-hover:border-[#00FFD4]/30 transition-colors">
                                        {service.categoryDetail?.name || "Service"}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white group-hover:text-[#00FFD4] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                {/* Optionally include description snippet if needed */}
                                {/* <p className="mt-2 text-gray-400 line-clamp-2 text-sm">{service.description}</p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile View All Button */}

            </div>
        </section>
    );
};
export default Work;
