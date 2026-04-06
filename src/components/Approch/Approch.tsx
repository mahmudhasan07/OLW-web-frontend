'use client';

import React from 'react';

interface ApproachStep {
  number: string;
  title: string;
  description: string;
}

const Approach: React.FC = () => {
  const steps: ApproachStep[] = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'We immerse ourselves in your business goals, market landscape, and user needs to craft a comprehensive strategy',
    },
    {
      number: '02',
      title: 'Design & Prototype',
      description:
        'High-fidelity designs and interactive prototypes bring your vision to life with precision and attention to detail',
    },
    {
      number: '03',
      title: 'Build & Deploy',
      description:
        'Robust development, testing, and deployment to production environments',
    },
    {
      number: '04',
      title: 'Optimize & Scale',
      description:
        'Performance monitoring and scaling strategies to support growth and maximize ROI',
    },
  ];

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center sm:mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-cyan-400">Approach</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8"
            >
              {/* Step Number */}
              <div className="mb-4">
                <p className="text-4xl font-bold text-cyan-400 sm:text-5xl">
                  {step.number}
                </p>
              </div>

              {/* Step Title */}
              <h3 className="mb-4 text-lg font-semibold text-white sm:text-xl">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
