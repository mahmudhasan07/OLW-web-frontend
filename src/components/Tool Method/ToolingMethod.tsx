'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ToolCard {
  title: string;
  description: string;
  features: string[];
}

const ToolingMethod: React.FC = () => {
  const toolCards: ToolCard[] = [
    {
      title: 'CAD + mechanisms',
      description:
        'Assemblies, kinematics, fast iteration, and design intent preserved through revisions',
      features: [
        'Sketch Methodology',
        'Feature Based',
        'GUID Pipeline',
      ],
    },
    {
      title: 'Modern Stack',
      description:
        'Cutting-edge technologies that scale. Built with React, Node.js, and cloud-native architecture for maximum performance.',
      features: [
        'React & Vue',
        'Node.js & Databases',
        'Docker & Kubernetes',
      ],
    },
    {
      title: 'Design System',
      description:
        'Consistent, scalable UI components. Our design system ensures coherence across all platforms and devices.',
      features: [
        'Components Library',
        'Design Tokens',
        'Accessibility Standards',
      ],
    },
  ];

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
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Tooling & Methods
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {toolCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 200, 255, 0.2)' }}
              className="group rounded-lg border border-gray-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 sm:p-8"
            >
              {/* Card Title */}
              <h3 className="mb-4 text-lg font-semibold text-cyan-400 sm:text-xl">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                {card.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {card.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400 sm:text-base"
                  >
                    <span className="mr-3 text-cyan-400">→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolingMethod;
