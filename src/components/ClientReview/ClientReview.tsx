"use client";
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    id: 1,
    name: "Jenny Wilson",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.pravatar.cc/150?img=5",
    active: false,
  },
  {
    id: 2,
    name: "Esther Howard",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.pravatar.cc/150?img=11",
    active: true,
  },
  {
    id: 3,
    name: "Robert Fox",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://i.pravatar.cc/150?img=8",
    active: false,
  }
];

const ClientReview = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden border">
      <div className="mx-auto px-4 text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          Check Our Clients <span className="text-[#FF4A7A]">Review</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full mx-auto px-4 sm:px-6 md:px-0">
        {/* We use flex with start alignment on mobile, center on desktop */}
        <div className="flex items-center justify-start xl:justify-center gap-6 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:px-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`flex-none snap-center flex items-center p-6 md:p-8 rounded-2xl w-[320px] sm:w-[380px] md:w-[460px] lg:w-[480px] transition-all duration-300
                ${
                  review.active
                    ? "bg-white shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] scale-100 z-10"
                    : "bg-[#F8F9FA] opacity-80 md:opacity-100 scale-95 md:scale-95 z-0"
                }
              `}
            >
              <div className="flex-shrink-0 mr-4 md:mr-6">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover drop-shadow-sm"
                />
              </div>

              {/* Review Content */}
              <div className="flex flex-col text-left">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2">{review.name}</h3>
                <p className="text-xs md:text-[13px] lg:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed line-clamp-3">
                  {review.text}
                </p>
                <div className="flex items-center gap-1 text-[#FFB627]">
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} />
                  <FaStar size={14} className="text-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
