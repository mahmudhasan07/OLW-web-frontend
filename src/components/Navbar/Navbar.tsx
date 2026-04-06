"use client";
import { useGetLogoQuery } from "@/Redux/Api/logoApi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const { data: logoData, isLoading: isFetching } = useGetLogoQuery(undefined);

  const routes = [
    { route: "/", name: "Home" },
    { route: "/work", name: "Work" },
    { route: "/#faq", name: "FAQ" },
    { route: "/privacy-policy", name: "Privacy Policy" },
    { route: "/terms-conditions", name: "Terms & Conditions" },
    { route: "/about-us", name: "About Us" },
  ];

  return (
    <section className=" border-b border-gray-700">
      <div className="relative flex justify-between items-center container mx-auto px-8 py-3 text-white">
        {/* Logo */}
        <div className="relative">
          <Link href="/" className="text-lg relative z-50 font-bold tracking-widest">
            {isFetching ? (
              <div className="w-24 h-8 bg-gray-700 rounded animate-pulse"></div>
            ) : logoData?.data?.image ? (
              <img
                src={logoData.data.image}
                alt="Logo"
                className="h-14 object-contain"
              />
            ) : (
              "LOGO"
            )}
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-5">
          {routes.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className={`px-2 py-1 ${path === item.route ? "text-textColor font-semibold" : ""
                } hover:bg-textColor hover:text-black rounded-md`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/#touch" className="bg-button text-black px-4 py-2 rounded-lg md:text-base text-sm">Get In Touch</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>

        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
        />

        {/* Right Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-primary shadow-lg transform transition-transform duration-300 z-50
            ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-5 flex flex-col gap-4">
            <button onClick={() => setOpen(false)} className="self-end text-xl">
              ✕
            </button>

            {routes.map((item) => (
              <Link
                key={item.route}
                href={item.route}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg ${path === item.route ? "text-textColor font-semibold" : ""
                  } hover:bg-textColor hover:text-black rounded-md`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
