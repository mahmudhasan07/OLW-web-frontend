"use client";
import { useGetAllServicesQuery } from "@/Redux/Api/serviceApi";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AllWork = () => {
    const { data: servicesData, isLoading } = useGetAllServicesQuery(undefined);
    const services = servicesData?.data || [];

    if (isLoading) {
        return (
            <section className="py-10 w-full overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center w-full mb-12">
                        <div className="h-10 w-48 bg-gray-800 rounded-lg animate-pulse mx-auto mb-4" />
                        <div className="h-4 w-64 bg-gray-800 rounded-lg animate-pulse mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2].map((i) => (
                            <div key={i} className="h-96 bg-[#111633] rounded-2xl border border-gray-800 animate-pulse" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-10 w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    className="text-center w-full mb-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-14">
                        Our Work
                    </h2>
                </motion.div>

                {/* Projects Swiper */}
                <div className="w-full">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        className="all-work-swiper pb-12"
                    >
                        {services.map((service: any, index: number) => (
                            <SwiperSlide key={service.id || index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group rounded-2xl p-0 overflow-hidden border border-gray-700 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20  flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full h-80 overflow-hidden">
                                        <Image
                                            src={service.image && service.image.length > 0 ? service.image[0] : "https://placehold.co/600x400/1e293b/00ffd4?text=Service"}
                                            alt={service.title}
                                            fill
                                            unoptimized
                                            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col justify-end transition-colors duration-300 bg-[#111933]">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="px-3 py-1 rounded-lg text-xs font-medium bg-[#1A2342] text-[#00D4FF] border border-[#2A3458] group-hover:border-[#00FFD4]/30 transition-colors">
                                                {service.categoryDetail?.name || "Service"}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-semibold text-white group-hover:text-[#00FFD4] transition-colors duration-300 mb-4">
                                            {service.title}
                                        </h3>

                                        <Link
                                            href={`/work/${service.id}`}
                                            className="w-full"
                                        >
                                            <button className="bg-button w-full py-3 font-semibold rounded-xl text-black transition-all hover:bg-[#00FFD4] hover:shadow-[0_0_20px_rgba(0,255,212,0.4)]">
                                                Read more
                                            </button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <style jsx global>{`
                .all-work-swiper .swiper-pagination-bullet {
                    background: #374151;
                    opacity: 1;
                }
                .all-work-swiper .swiper-pagination-bullet-active {
                    background: #00D4FF;
                }
            `}</style>
        </section>
    );
};

export default AllWork;