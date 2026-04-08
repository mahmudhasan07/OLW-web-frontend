"use client"
import Image from "next/image";
import { servicesData } from "./ServiceData";

const ServiceSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Our <span className="text-primary">Service</span>
        </h2>

        <p className="mt-4 md:max-w-3xl max-w-full mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => {

            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-10 text-left shadow-sm border border-gray-100 hover:border-pink-400 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Image src={service.icon} alt="icon" width={84} height={84} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-4">
                  {service.description}
                </p>

                {/* Button */}
                <button className="text-sm px-4 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition">
                  Read More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;