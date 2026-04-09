import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-14 md:py-16 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Description (takes up more space) */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block mb-2">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                alt="Logo" 
                className="h-8 object-contain" 
              />
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam dictum aliquet accumsan porta lectus ridiculus in 
              mattis. Netus sodales in volutpat ullamcorper amet 
              adipiscing fermentum.
            </p>
            
            <div className="flex items-center gap-5 pt-2">
              <Link href="#" className="text-gray-800 hover:text-blue-500 transition-colors">
                <FaTwitter size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-blue-700 transition-colors">
                <FaFacebookF size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-pink-600 transition-colors">
                <FaInstagram size={18} />
              </Link>
              <Link href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                <FaGithub size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-gray-900 font-bold text-base">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Career
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-bold text-base">Help</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-6">
            <h3 className="text-gray-900 font-bold text-base">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Free eBooks
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Development Tutorial
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  How to - Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#64748B] hover:text-gray-900 transition-colors text-sm font-medium">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
