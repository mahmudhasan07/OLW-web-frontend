"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqsData } from "./FAQData";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-14 md:py-16">
      <div className="container bg-[#F6F6F6] mx-auto py-16 rounded-2xl md:rounded-3xl">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-3  max-w-5xl mx-auto">
          {faqsData.map((faq, index) => (
            <div
              key={faq.id}
              className=" rounded-2xl border-b border-primary overflow-hidden text-black transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <span className="text-lg md:text-xl font-medium text-black transition-colors">
                  {faq.question}
                </span>

                <span
                  style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                  className="text-2xl text-primary border rounded-full p-1 border-primary ml-4 transition-transform duration-300"
                >
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

                {openIndex === index && (
                  <div>
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;