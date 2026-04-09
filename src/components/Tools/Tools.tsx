import React from 'react';
import Image from 'next/image';

// Assuming the images in assets correspond to these logos
import img1 from '@/assists/image 11.png';
import img2 from '@/assists/image 12.png';
import img3 from '@/assists/image 13.png';
import img4 from '@/assists/image 14.png';
import img5 from '@/assists/image 15.png';
import img6 from '@/assists/image.png';

const toolsData = [
  { id: 1, name: 'PriceLabs', logo: img1 },
  { id: 2, name: 'Wheelhouse', logo: img2 },
  { id: 3, name: 'Beyond Pricing', logo: img3 },
  { id: 4, name: 'Hostfully', logo: img4 },
  { id: 5, name: 'Guesty', logo: img5 },
  { id: 6, name: 'LODGIFY', logo: img6 },
  { id: 7, name: 'Hostfully', logo: img4 },
  { id: 8, name: 'Guesty', logo: img5 },
  { id: 9, name: 'LODGIFY', logo: img6 },
];

const Tools = () => {
  return (
    <section className="w-full py-14 md:py-16">
      {/* Top Section with Title and Description */}
      <div className="container">
        <div className="mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Our <span className="text-primary">Tools</span>
          </h2>
          <p className="text-gray-800 mb-5 text-sm md:text-base leading-relaxed md:px-12 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>

      {/* Bottom Section with Grid */}
      <div className="bg-[#F6F6F6] pt-10 md:pt-12 pb-16 md:pb-24">
        <div className="mx-auto max-w-5xl container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              {toolsData.map((tool) => (
                <div
                key={tool.id}
                className="bg-white rounded-xl shadow-sm hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(255,100,100,0.25)] duration-300 flex items-center justify-center p-8 h-32 md:h-40"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    className="max-h-12 md:max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
