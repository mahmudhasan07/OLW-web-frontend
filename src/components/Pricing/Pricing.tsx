"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheck, FaTimes } from 'react-icons/fa';
import arrowImage from '../../assists/Arrow 2.png';

const featuresList = [
  "20,000+ of PNG & SVG graphics",
  "Access to 100 million stock images",
  "Upload custom icons and fonts",
  "Unlimited Sharing",
  "Upload graphics & video in up to 4k",
  "Unlimited Projects",
  "Instant Access to our design system",
  "Create teams to collaborate on designs"
];

const pricingPlans = [
  {
    name: "Freebie",
    desc: "Ideal for individuals who need quick access to basic features.",
    price: 0,
    features: [true, true, false, false, false, false, false, false],
    isPopular: false,
  },
  {
    name: "Professional",
    desc: "Ideal for individuals who need advanced features and tools for client work.",
    price: 25,
    features: [true, true, true, true, true, true, false, false],
    isPopular: true,
  },
  {
    name: "Enterprise",
    desc: "Ideal for businesses who need personalized services and security for large teams.",
    price: 100,
    features: [true, true, true, true, true, true, true, true],
    isPopular: false,
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="w-full bg-white py-16 md:py-24 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airnbn Assistent <span className="text-primary">pricing</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium mb-10">
            Choose a plan that&apos;s right for you
          </p>
          
          {/* Toggle Switch */}
          <div className="flex items-center justify-center max-w-fit mx-auto relative mt-2 mb-12">
            <span className={`transition-colors text-sm md:text-base font-semibold mr-4 ${!isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Pay Monthly</span>
            
            <button 
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${isYearly ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle pricing period"
            >
              <span 
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-sm ${isYearly ? 'translate-x-[26px]' : 'translate-x-[4px]'}`}
              />
            </button>
            
            <span className={`transition-colors text-sm md:text-base font-semibold ml-4 ${isYearly ? 'text-gray-900' : 'text-gray-400'}`}>Pay Yearly</span>
            
            {/* Image Arrow for "Save 25%" */}
            <div className="absolute left-full top-1/2 -translate-y-[40%] ml-2 md:ml-2 hidden md:flex items-center">
              <Image src={arrowImage} alt="Arrow" className="w-[90px] object-contain flex-shrink-0 -mr-2" />
              <span className="text-primary font-medium ml-3 whitespace-nowrap pt-7">Save 25%</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const active = plan.isPopular;
            return (
              <div 
                key={index}
                className={`rounded-2xl transition-all duration-300 w-full flex flex-col p-8 sm:p-10
                  ${active 
                    ? 'bg-primary text-white md:scale-105 shadow-2xl py-12 md:py-14 border border-primary z-10' 
                    : 'bg-white text-gray-900 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]'
                  }
                `}
              >
                <h3 className={`text-xl md:text-2xl font-bold mb-3 ${active ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 min-h-[40px] leading-relaxed ${active ? 'text-white/90' : 'text-gray-500'}`}>
                  {plan.desc}
                </p>
                
                <div className="flex items-end gap-1 mb-8">
                  <span className={`text-4xl md:text-5xl font-bold tracking-tight ${active ? 'text-white' : 'text-gray-900'}`}>
                    ${isYearly ? plan.price * 12 * 0.75 : plan.price}
                  </span>
                  <span className={`text-sm mb-2 font-medium ${active ? 'text-white/80' : 'text-gray-500'}`}>/ Month</span>
                </div>

                <button 
                  className={`w-full py-3 px-6 rounded-md font-semibold transition-colors duration-300 mb-10
                    ${active 
                      ? 'bg-white text-primary hover:bg-gray-50' 
                      : 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
                    }
                  `}
                >
                  Get Started Now
                </button>

                <ul className="flex flex-col gap-5">
                  {featuresList.map((feature, fIdx) => {
                    const hasFeature = plan.features[fIdx];
                    return (
                      <li key={fIdx} className="flex items-center gap-4">
                        <div 
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors
                            ${hasFeature 
                              ? (active ? 'bg-white' : 'bg-pink-100') 
                              : (active ? 'bg-white' : 'bg-transparent')
                            }
                          `}
                        >
                          {hasFeature ? (
                            <FaCheck className={`text-[10px] ${active ? 'text-primary' : 'text-primary'}`} />
                          ) : (
                            <FaTimes className={`text-[12px] ${active ? 'text-primary' : 'text-gray-300'}`} />
                          )}
                        </div>
                        <span 
                          className={`text-sm font-medium leading-tight
                            ${hasFeature 
                              ? (active ? 'text-white' : 'text-gray-800') 
                              : (active ? 'text-white' : 'text-gray-400')
                            }
                          `}
                        >
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
