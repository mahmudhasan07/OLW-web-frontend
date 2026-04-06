"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 justify-center">
          {/* Column 1: Logo & Description */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <div className="grid grid-cols-2 gap-1 w-8 h-8">
                <div className="w-full h-full rounded-full bg-[#00FFD4]"></div>
                <div className="w-full h-full rounded-full bg-[#00FF88]"></div>
                <div className="w-full h-full rounded-full bg-[#FF00D4]"></div>
                <div className="w-full h-full rounded-full bg-[#7000FF]"></div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Iterative sprints with continuous feedback loops. We adapt quickly
              to changing requirements and deliver value at every iteration.
              Iterative sprints with continuous feedback loops. We adapt quickly
              to changing requirements and deliver value at every iteration.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  Our Approach
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Link */}
          <div>
            <h3 className="text-white font-semibold mb-6">Social Link</h3>
            <ul className="space-y-4">
              <li>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                  >
                    Twitter
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#00FFD4] transition-colors text-sm"
                  >
                    LinkedIn
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Nexus AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
