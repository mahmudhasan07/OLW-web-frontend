import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';
import groupImage from '../../assists/Group 39928.png';

const features = [
  "Brilliant Client Service",
  "Flexibility & Adaptibility",
  "We make it Personal",
  "We have expart in our team"
];

const Reason = () => {
  return (
    <section className="w-full container mx-auto py-12 md:py-24">
      <div className="bg-[#FDEBF0] rounded-[3rem] w-full flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 lg:p-20 relative overflow-hidden">
        
        <div className="lg:w-1/2 flex flex-col items-start z-10 w-full mb-12 lg:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Few Reasons Why you
            <br className="hidden lg:block" /> Choose us?
          </h2>
          
          <p className="text-gray-800 text-sm md:text-base max-w-lg font-medium leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation
          </p>

          <ul className="flex flex-col gap-5 w-full mb-10">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#FCCEDF] flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-[#EB3F6A] text-sm" />
                </div>
                <span className="font-bold text-gray-800 text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <button className="bg-[#E44669] hover:bg-[#CC3C5C] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 transition-colors duration-300 shadow-md">
            Schedule A Meeting
            <FaArrowRight className="text-sm font-light ml-1" />
          </button>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative z-10">
          <div className="w-full max-w-[700px]">
            <Image
              src={groupImage}
              alt="Why Choose Us"
              className="w-full h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reason;
