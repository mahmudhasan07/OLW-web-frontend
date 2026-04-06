"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCreateContactUsMutation } from "@/Redux/Api/contactApi";
import { useGetAllCategoriesQuery } from "@/Redux/Api/categoryApi";
import { toast, ToastContainer } from "react-toastify";
// import { MoveRight } from "lucide-react"; // Assuming lucide-react is available, or we can use another icon or simple text

const Touch = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        categoryId: "",
        message: "",
    });

    const [createContactUs, { isLoading: isSubmitting }] = useCreateContactUsMutation();
    const { data: categoryData, isLoading: isCategoriesLoading } = useGetAllCategoriesQuery(undefined);
    const categories = categoryData?.data || [];

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await createContactUs({
                name: formData.name,
                email: formData.email,
                categoryId: formData.categoryId,
                message: formData.message
            }).unwrap();

            if (result?.success) {
                toast.success(result?.message || "Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    categoryId: "",
                    message: "",
                });
            } else {
                toast.error(result?.message || "Something went wrong. Please try again.");
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to send message. Please try again later.");
        }
    };

    return (
        <section className="py-12 md:py-16 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Header */}
                <motion.div
                    className="text-center w-full mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold gradient-text ">
                        Let's Work Together
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Section: Contact Info */}
                    <motion.div
                        className="lg:w-1/3 flex flex-col space-y-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-[#00D4FF] mb-6">
                                Get in Touch
                            </h3>
                            <p className="text-gray-400 mb-8">
                                Have a project in mind? We'd love to hear from you. Let's create something amazing together.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-semibold mb-1">Email</h4>
                                <a
                                    href="mailto:hello@nexusai.com"
                                    className="text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                                >
                                    hello@nexusai.com
                                </a>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-1">Phone</h4>
                                <a
                                    href="tel:+1234567890"
                                    className="text-[#00D4FF] hover:text-[#00D4FF]/80 transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </div>

                            <div>
                                <h4 className="text-white font-semibold mb-1">Address</h4>
                                <p className="text-gray-400">
                                    123 Tech Boulevard
                                    <br />
                                    Silicon Valley, CA 94025
                                    <br />
                                    United States
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section: Form */}
                    <motion.div
                        className="lg:w-1/2"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A2342] border border-[#2A3458] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                                    required
                                />
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A2342] border border-[#2A3458] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors"
                                    required
                                />
                            </motion.div>

                            {/* Service Selection */}
                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                            >
                                <select
                                    name="categoryId"
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                    className="w-full bg-[#1A2342] border border-[#2A3458] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00D4FF] transition-colors appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" disabled className="text-gray-500">
                                        {isCategoriesLoading ? "Loading Services..." : "Select a Service"}
                                    </option>
                                    {categories.map((category: { id: string; name: string }) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#00D4FF]">
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1.5L6 6.5L11 1.5"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            </motion.div>

                            {/* Message Textarea */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            >
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full bg-[#1A2342] border border-[#2A3458] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                                    required
                                />
                            </motion.div>

                            {/* Submit Button */}
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-button text-[#0A0E27] font-bold py-4 px-8 rounded-full transition-all duration-300 transform shadow-[0_0_20px_rgba(0,255,212,0.3)] hover:shadow-[0_0_30px_rgba(0,255,212,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
                <ToastContainer />
            </div>
        </section>
    );
};

export default Touch;
