"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaLock, FaBullseye } from 'react-icons/fa6';

const ChooseNexus = () => {
    const features = [
        {
            icon: <FaBolt className="text-white text-3xl mb-4" />,
            title: "Lightning Fast",
            description: "Optimized performance with sub-second load times and real-time responsiveness"
        },
        {
            icon: <FaLock className="text-white text-3xl mb-4" />,
            title: "Enterprise Security",
            description: "Military-grade encryption and compliance with global security standards"
        },
        {
            icon: <FaBullseye className="text-white text-3xl mb-4" />,
            title: "Precision Engineered",
            description: "Pixel-perfect design with meticulous attention to every detail"
        }
    ];

    return (
        <section className="w-full py-12 md:py-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl gradient-text font-bold">
                        Why Choose Nexus
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)' }}
                            className="group rounded-lg border border-gray-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8"
                        >
                            <div className="flex flex-col items-start">
                                {feature.icon}
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseNexus;
