import React from 'react';
import Image from 'next/image';
import step1Icon from '@/assists/Group 39879.png';
import step2Icon from '@/assists/Group 39878.png';
import step3Icon from '@/assists/Group 39881.png';
import step4Icon from '@/assists/Layer_1.png';
import Reason from './Reason';


const startSteps = [
  {
    id: '01',
    icon: step1Icon,
    title: 'Add requirements\n& sign up today',
  },
  {
    id: '02',
    icon: step2Icon,
    title: 'Connect with your CSM &\nonboarding team',
  },
  {
    id: '03',
    icon: step3Icon,
    title: 'Meet your STR\nAssistant next week',
  },
];

const Started = () => {
  return (
    <section className="w-full container py-14 md:py-16">
      <div className="mx-auto px-4 max-w-5xl">

        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-black">
            Getting Started is <span className="text-primary">Easy</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 mt-12 pl-4 pr-4 sm:pl-8 sm:pr-8 md:px-0">
          {startSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div className="relative w-full max-w-[320px] md:max-w-none">
                <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-primary bg-white flex items-center justify-center text-xl md:text-2xl font-semibold text-black shadow-sm z-10">
                  {step.id}
                </div>

                <div className="border border-pink-100 rounded-xl bg-white flex flex-col items-center justify-center h-48 lg:h-56 w-full relative z-0">
                  <Image
                    src={step.icon}
                    alt={`Step ${step.id} icon`}
                    className="max-h-24 relative w-auto object-contain"
                  />
                  {
                    step.id === "03" ?
                      <Image
                        src={step4Icon}
                        alt={`Step ${step.id} icon`}
                        className="w-8 absolute object-contain"
                      />
                      :
                      null
                  }
                </div>
              </div>

              <div className="mt-8 text-center text-black">
                <p className="font-semibold text-base md:text-lg whitespace-pre-line leading-snug">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className=''>
        <Reason></Reason>
      </div>
    </section>
  );
};

export default Started;
