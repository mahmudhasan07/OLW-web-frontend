'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CapabilityCard {
  title: string;
  subtitle?: string;
  description: string;
}

const Capabilities: React.FC = () => {
  const topCards: CapabilityCard[] = [
    {
      title: 'Frontend',
      subtitle: 'Mastery',
      description:
        'Responsive, performant interfaces with cutting-edge frameworks and technologies',
    },
    {
      title: 'Backend',
      subtitle: 'Engineering',
      description:
        'Robust, scalable server architecture built for millions of transactions',
    },
    {
      title: 'DevOps',
      subtitle: 'Excellence',
      description:
        'Automated deployment pipelines and infrastructure management',
    },
    {
      title: 'AI & ML',
      subtitle: 'Integration',
      description:
        'Intelligent systems powered by machine learning and neural networks',
    },
    {
      title: 'Data',
      subtitle: 'Strategy',
      description:
        'Data-driven insights with real-time analytics and visualization',
    },
    {
      title: 'Security &',
      subtitle: 'Compliance',
      description:
        'Enterprise-grade security with regulatory compliance',
    },
  ];

  const CapabilityCardComponent: React.FC<{
    card: CapabilityCard;
    index: number;
  }> = ({ card, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)' }}
      className="group rounded-lg border border-gray-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8"
    >
      <h3 className="text-base font-semibold text-white sm:text-lg">
        {card.title}
      </h3>
      {card.subtitle && (
        <h4 className="mb-3 text-base font-semibold text-cyan-400 sm:text-lg">
          {card.subtitle}
        </h4>
      )}
      <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
        {card.description}
      </p>
    </motion.div>
  );

  return (
    <section className="w-full px-4 py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-10 text-center sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl gradient-text font-bold">
            Our Capabilities
          </h2>
        </motion.div>

        {/* Top Cards Grid - 4 columns */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {topCards.map((card, index) => (
            <CapabilityCardComponent key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
