import React from 'react';
import Image from 'next/image';
import brand1 from "@/assists/Group.svg";
import brand2 from "@/assists/Clip path group (1).svg";
import brand3 from "@/assists/Clip path group.svg";
import brand4 from "@/assists/Group (1).svg";
import brand5 from "@/assists/Group 39931.svg";
import brand6 from "@/assists/Group 39932.svg";
import brand7 from "@/assists/layer1.svg";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
// Duplicate array 4 times to ensure it covers even the widest screens without gap
const marqueeItems = [...brands, ...brands, ...brands, ...brands];

const TrustIndustries = () => {
    return (
        <section className=" overflow-hidden w-full py-16 md:py-24">
            <h3 className="text-center text-lg md:text-xl font-bold mb-8">Trusted by leaders in 50+ industries</h3>
            <div className="bg-[#F8F9FA] py-6 md:py-8 relative flex overflow-x-hidden w-full group">
                <div className="flex w-max animate-marquee whitespace-nowrap items-center">
                    {marqueeItems.map((brand, index) => (
                        <div key={index} className="flex-shrink-0 px-8 md:px-14 flex items-center justify-center">
                            <Image
                                src={brand}
                                alt={`Trusted Brand ${index + 1}`}
                                className="h-6 md:h-8 lg:h-10 w-auto object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustIndustries;