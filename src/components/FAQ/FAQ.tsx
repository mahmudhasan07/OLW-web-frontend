"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqsData } from "./FAQData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqsData.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className=" rounded-2xl border-b border-primary overflow-hidden text-black transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-medium text-black transition-colors">
                  {faq.question}
                </span>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-primary border rounded-full p-1 border-primary ml-4"
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
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
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed text-base md:text-lg border-t border-primary/60 pt-4">
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

export default FAQSection;