"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import logo from "@/assists/Google-Logo.wine 1.png"
import Image from "next/image";

const Navbar = () => {
  const path = usePathname();
  const [activeRoute, setActiveRoute] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setActiveRoute(`${window.location.pathname}${window.location.hash}` || "/");
    const handleHashChange = () => {
      setActiveRoute(`${window.location.pathname}${window.location.hash}`);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [path]);

  const routes = [
    { route: "/", name: "Home" },
    { route: "/#about", name: "About" },
    { route: "/#services", name: "Services" },
    { route: "/#pricing", name: "Pricing" },
    { route: "/#blog", name: "Blog" },
    { route: "/#resources", name: "Resources" },
  ];

  return (
    <section className="container">
      <div className="relative flex justify-between items-center  mx-auto py-3">
        {/* Logo */}
        <div className="relative">
          <Link href="/" className="text-lg relative z-50 font-bold tracking-widest">
            <Image src={logo} className="md:w-32 w-24" alt="" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-5">
          {routes.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              onClick={() => setActiveRoute(item.route)}
              className={`px-2 text-lg py-1 ${activeRoute === item.route ? "text-primary font-semibold" : ""
                } hover:bg-primary hover:text-white rounded-md`}
            >
              {item.name}
              {
                activeRoute === item.route ?
                  <div className=" w-full border border-primary">

                  </div>
                  :
                  null
              }

            </Link>
          ))}
        </div>
        <div>
          <Link href="" className="bg-primary text-white md:px-6 md:py-4 px-4 py-3 rounded-lg md:text-[14px] text-xs flex items-center gap-4">Schedule A Meeting <FaArrowRight />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden z-50"
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
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
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
                onClick={() => {
                  setOpen(false)
                  setActiveRoute(item.route)
                }}
                className={`px-3 w-fit py-2 rounded-lg ${activeRoute === item.route ? "text-primary font-semibold" : ""
                  } hover:bg-primary hover:text-black rounded-md`}
              >
                {item.name}
                {
                  activeRoute === item.route ?
                    <div className=" w-full border border-primary">

                    </div>
                    :
                    null
                }
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
