'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { useGetAllBrandsQuery } from '@/Redux/Api/brandApi';

const SubBrand = () => {
    const { data: brandsData, isLoading } = useGetAllBrandsQuery(undefined);
    const brands = brandsData?.data || [];



    if (isLoading) {
        return (
            <section className="w-full py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center gap-4 overflow-hidden md:gap-8">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div
                                key={i}
                                className="h-12 w-24 animate-pulse rounded-lg bg-gray-800/30 md:h-16 md:w-40"
                            />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    console.log(brands);

    // Return null if no brands data to avoid empty section
    if (brands.length === 0) return null;

    return (
        <section className="w-full py-12">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.div
                    className="mb-10 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl gradient-text font-bold">
                        Sub-brand
                    </h2>
                </motion.div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={2}
                    loop={brands.length >= 5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    className="w-full max-w-6xl"
                >
                    {brands.map((brand: any, index: number) => (
                        <SwiperSlide key={brand._id || index} className="flex items-center justify-center">
                            <motion.div
                                className="flex h-20 w-full items-center justify-center opacity-70 transition-opacity hover:opacity-100"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                            >
                                <Image
                                    src={brand.image}
                                    alt={brand.brandName}
                                    width={160}
                                    height={60}
                                    className="max-h-12 w-auto object-contain"
                                    unoptimized // Use unoptimized if the backend doesn't provide width/height info for optimization or if it's a direct URL
                                />
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SubBrand;
