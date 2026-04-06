"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="md:py-20 py-14">
      <div className="container px-4 mx-auto flex flex-col items-center relative z-10">

        {/* Top Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="border border-blue-500/50 bg-blue-900/20 text-blue-300 px-6 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            Digital Product Studio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-center gradient-text leading-tight max-w-5xl"
        >
          Design-first products, shipped fast.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-gray-400 text-center max-w-3xl leading-relaxed"
        >
          NexProto Inc is a C-Corp design house that builds proprietary products end-to-end. We use rapid prototyping and 3D printing to validate demand and fund growth—then scale proven designs into professional manufacturing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="#touch">
            <button className="bg-gradient-to-r from-cyan-400 to-green-400 text-black font-bold rounded-full px-8 py-4 text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/20">
              Start Your Project
            </button>
          </Link>
          <Link href="#work">
            <button className="border border-cyan-400 text-cyan-400 rounded-full px-8 py-4 text-lg font-medium hover:bg-cyan-400/10 transition-colors duration-300">
              View Our Work
            </button>
          </Link>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            "Industrial Design",
            "Mechanical Engineering",
            "Rapid Prototyping",
            "DFM for Scale",
            "3D Printing Ops"
          ].map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-full px-6 py-2 text-sm text-gray-300 backdrop-blur-md">
              {feature}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Banner;
