"use client";

import React from "react";
import { motion } from "framer-motion";
import { useGetAllCategoriesQuery } from "@/Redux/Api/categoryApi";

const Build = () => {
    const { data: categoriesData, isLoading } = useGetAllCategoriesQuery(undefined);
    const categories = categoriesData?.data || [];

    if (isLoading) {
        return (
            <section className="py-12 md:py-16 w-full overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center w-full mb-16 sm:mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                            What We Build
                        </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-6xl mx-auto">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                            <div key={i} className="h-6 w-24 md:w-32 animate-pulse bg-gray-800/30 rounded-md" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (categories.length === 0) return null;

    return (
        <section className="py-12 md:py-16 w-full overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center w-full mb-16 sm:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                        What We Build
                    </h2>
                </div>

                {/* Tags Cloud */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-12 max-w-6xl mx-auto">
                    {categories.map((category: any, index: number) => (
                        <motion.div
                            key={category._id || index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, textShadow: "0 0 8px rgb(0, 212, 255)" }}
                            className="cursor-default"
                        >
                            <span className="text-lg md:text-xl font-medium text-[#00FFD4] hover:text-white transition-colors duration-300">
                                {category.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Build;
