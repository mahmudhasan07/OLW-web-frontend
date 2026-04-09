"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

import image1 from "@/assists/Group 39908.png";
import image2 from "@/assists/Group 39911.png";
import image3 from "@/assists/Group 39910.png";
import image4 from "@/assists/Group 39909.png";

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[500px] md:min-h-[650px] flex items-center justify-center pt-24 md:pt-32 pb-16">
      <div className="absolute top-0 left-0 right-0 h-32 md:h-96 bg-gradient-to-b from-primary/10 to-transparent opacity-50 z-0 pointer-events-none" />
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)", 
          backgroundSize: "64px 64px" 
        }} 
      />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[3%] md:top-[10%] lg:top-[20%] left-[10%] md:left-[15%] w-3 h-3 bg-indigo-500 rounded-full" />
        <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[15%] left-[50%] w-3.5 h-3.5 bg-emerald-400 rounded-full" />
        <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[60%] left-[15%] md:left-[20%] w-3 h-3 bg-red-400 rounded-full" />
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[35%] right-[15%] md:right-[10%] lg:right-[20%] w-3.5 h-3.5 bg-yellow-400 rounded-full" />
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[8%] md:left-[20%] w-2 h-2 bg-yellow-500 rounded-full" />
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[8%] left-[50%] w-3 h-3 bg-cyan-400 rounded-full" />
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] right-[10%] md:right-[15%] w-2 h-2 bg-blue-900 rounded-full" />
      </div>

      
      <div className="absolute inset-0 z-0 pointer-events-none max-w-7xl mx-auto w-full h-full">
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [-10, -5, -10] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[9%] md:top-[15%] lg:top-[18%] left-[5%] md:left-[10%] lg:left-[12%] w-14 md:w-20 lg:w-24 opacity-95 md:opacity-100 drop-shadow-xl"
        >
          <Image src={image1} alt="Airbnb" className="w-full h-auto" />
        </motion.div>

        {/* Bottom Left Icon (Vrbo) */}
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [-15, -20, -15] }} 
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[70%] md:top-[65%] left-[5%] md:left-[12%] w-14 md:w-16 lg:w-[70px] opacity-95 md:opacity-100 drop-shadow-xl"
        >
          <Image src={image3} alt="Vrbo" className="w-full h-auto" />
        </motion.div>

        {/* Top Right Icon (Booking.com) */}
        <motion.div 
          animate={{ y: [0, 10, 0], rotate: [15, 20, 15] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[9%] md:top-[10%] lg:top-[20%] right-[5%] md:right-[14%] w-14 md:w-20 lg:w-24 opacity-95 md:opacity-100 drop-shadow-xl"
        >
          <Image src={image2} alt="Booking" className="w-full h-auto" />
        </motion.div>

        {/* Bottom Right Icon (TripAdvisor) */}
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [10, 5, 10] }} 
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[70%] right-[5%] md:right-[14%] w-14 md:w-16 lg:w-[80px] opacity-95 md:opacity-100 drop-shadow-xl"
        >
          <Image src={image4} alt="TripAdvisor" className="w-full h-auto" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-black leading-[1.1] mb-6 tracking-tight"
        >
          Airbnb Assistants For <br className="" /> <span className="font-normal text-2xl md:text-[38px] shadow-white">Property Management</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-sm md:text-[15px] lg:text-base leading-relaxed max-w-[700px] mx-auto mb-10"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <Link href="#meeting">
            <button className="bg-[#fb4172] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-lg md:rounded-xl font-medium hover:bg-[#e03a66] hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 flex items-center justify-center gap-2 text-[15px] md:text-base">
              Schedule A Meeting <span><FiArrowRight /></span>
            </button>
          </Link>
          <Link href="#pricing" className="text-gray-900 font-semibold underline underline-offset-4 decoration-black/30 hover:decoration-black text-sm md:text-[15px] transition-all duration-300">
            See Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
