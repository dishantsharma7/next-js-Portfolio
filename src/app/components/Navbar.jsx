"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Services",
    path: "#services",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border-b border-cyber top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 backdrop-blur-sm">
      {/* Top technical header bar */}
      <div className="w-full h-1 border-t-2 border-cyber shadow-[0_0_8px_rgba(0,255,255,0.5)]"></div>

      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="flex items-center gap-4">
          <div className="inline-block font-share text-accent drop-shadow-[0_0_5px_rgba(0,255,136,0.8)] text-xs sm:text-sm md:text-base animate-pulse">
            [ SYSTEM: ONLINE ]
          </div>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-accent text-accent hover:text-accent hover:border-accent cyber-chamfer-sm transition-all drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-accent-secondary text-accent-secondary hover:text-accent-secondary hover:border-accent-secondary cyber-chamfer-sm transition-all drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
