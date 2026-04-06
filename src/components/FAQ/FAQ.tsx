"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useGetAllFaqsQuery } from "@/Redux/Api/faqApi";

const FAQ = () => {
    const { data: faqsData, isLoading } = useGetAllFaqsQuery(undefined);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = faqsData?.data || [];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (isLoading) {
        return (
            <section id="faq" className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="h-20 animate-pulse bg-[#111633] rounded-2xl border border-gray-800" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (faqs.length === 0) return null;

    return (
        <section className="my-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold gradient-text">
                        Frequently Asked Questions
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq: any, index: number) => (
                        <motion.div
                            key={faq._id || index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-[#111633] rounded-2xl border border-gray-800 overflow-hidden text-white transition-all duration-300 hover:border-[#00FFD4]/30"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg md:text-xl font-medium text-gray-100 group-hover:text-white transition-colors">
                                    {faq.question}
                                </span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-2xl text-white ml-4"
                                >
                                    <FiPlus />
                                </motion.span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed text-base md:text-lg border-t border-gray-800 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
