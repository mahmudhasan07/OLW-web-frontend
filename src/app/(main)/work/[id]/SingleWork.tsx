"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow"
import { useGetSingleServiceQuery } from "@/Redux/Api/serviceApi";
import { useParams } from "next/navigation";

const SingleWork = () => {
    const { id } = useParams();
    const { data: serviceData, isLoading } = useGetSingleServiceQuery(id as string);
    const service = serviceData?.data;

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0A0E27] py-10 px-4 md:px-10">
                <div className="container mx-auto max-w-7xl">
                    <div className="h-16 w-64 bg-gray-800 rounded-lg animate-pulse mb-6" />
                    <div className="h-8 w-96 bg-gray-800 rounded-lg animate-pulse mb-12" />
                    <div className="h-[500px] w-full bg-gray-800 rounded-2xl animate-pulse shadow-2xl" />
                </div>
            </div>
        )
    }

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0A0E27] flex items-center justify-center text-white">
                <p className="text-xl">Service not found</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0A0E27] text-white py-6 md:py-12 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">Details</h1>
                    <p className="text-gray-400 text-xl font-medium tracking-wide">
                        {service.title}
                    </p>
                </motion.div>

                {/* Image Slider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-16 relative"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        effect={'coverflow'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,

                        }}
                        grabCursor={true}
                        // pagination={{ clickable: true }}
                        centeredSlides={true}
                        // slidesPerView={1.5}
                        autoplay={{ delay: 2500 }}
                        breakpoints={
                            {
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 2,
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 10
                                },
                                1024: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 50,
                                },
                            }
                        }
                        className=""
                    >
                        {service.image?.map((img: string, idx: number) => (
                            <SwiperSlide key={idx} className="">
                                <div className="relative w-full h-52 md:h-96 rounded-2xl overflow-hidden">
                                    <Image
                                        src={img}
                                        alt={`${service.title} - ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width:768px) 320px, 500px"
                                        priority={idx === 0}
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* Categories */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <span className="px-6 py-2 rounded-xl text-sm font-semibold bg-[#111933] text-[#00D4FF] border border-[#1E294B] shadow-lg shadow-cyan-500/10">
                        {service.categoryDetail?.name}
                    </span>
                </motion.div>

                {/* Content Sections */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="border-t border-gray-800/50 pt-0"
                >
                    <div
                        className="service-content prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: service.description }}
                    />
                </motion.div>
            </div>

            <style jsx global>{`
                .service-swiper .swiper-slide {
                    transition: all 0.5s ease;
                    opacity: 0.4;
                    filter: blur(2px);
                }
                .service-swiper .swiper-slide-active {
                    opacity: 1;
                    filter: blur(0);
                    transform: scale(1.1);
                    z-index: 10;
                }
                
                .service-content h2 {
                    font-size: 2.25rem;
                    font-weight: 700;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    color: white;
                    letter-spacing: -0.025em;
                }
                .service-content p {
                    color: #9CA3AF;
                    font-size: 1.125rem;
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }
                .service-content ul {
                    list-style-type: none;
                    padding-left: 0;
                    margin-bottom: 2rem;
                }
                .service-content li {
                    position: relative;
                    padding-left: 1.5rem;
                    color: #9CA3AF;
                    font-size: 1.125rem;
                    line-height: 1.8;
                    margin-bottom: 0.75rem;
                }
                .service-content li::before {
                    content: "•";
                    color: #00D4FF;
                    font-weight: bold;
                    position: absolute;
                    left: 0;
                }
                
                .service-swiper .swiper-pagination-bullet {
                    background: #00D4FF;
                    opacity: 0.3;
                    width: 10px;
                    height: 10px;
                    transition: all 0.3s ease;
                }
                .service-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 25px;
                    border-radius: 5px;
                    background: #00D4FF;
                    box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
                }
                .service-swiper .swiper-pagination {
                    bottom: -5px !important;
                }
            `}</style>
        </div>
    );
};

export default SingleWork;
