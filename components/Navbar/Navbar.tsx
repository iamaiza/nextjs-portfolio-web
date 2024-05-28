"use client";

import { navLinks } from "@/lib";
import { NavLinks } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { MenuIcon } from "../icons";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("home");
  const showMobileMenuHandler = () => {
    setMobileMenu(true);
  };
  useEffect(() => {
    const addBgHandler = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          setActiveNavLink(section.id);
        }
      });
    };
    window.addEventListener("scroll", addBgHandler);
    return () => {
      window.removeEventListener("scroll", addBgHandler);
    };
  }, [isScrolled, activeNavLink]);

  return (
    <nav className="max-[1040px]:bg-white text-white max-lg:text-black px-11 max-[1050px]:px-0 h-[5.5rem] max-md:h-20 fixed top-0 left-0 w-full z-20">
      <div
        className={`max-[1040px]:bg-transparent flex items-center justify-between gap-5 h-full px-14 max-[1040px]:px-12 max-md:px-4 transition-all ${
          isScrolled ? "bg-black duration-700" : "bg-transparent duration-500"
        }`}
      >
        <Link href="/">
          <img
            className="w-[5.5rem] invert max-[1040px]:invert-0"
            src="/assets/dark.png"
            alt="Logo"
          />
        </Link>
        <button
          className="hidden max-[1040px]:block"
          onClick={showMobileMenuHandler}
        >
          <MenuIcon />
        </button>
        <div className="flex items-center gap-10 max-[1040px]:hidden">
          <ul className="flex items-center gap-5">
            {navLinks.map((link: NavLinks) => (
              <li
                key={link.id}
                id={link.id}
                className={`nav-link relative overflow-hidden text-[1.1rem] font-semibold transition-all duration-300 ${
                  activeNavLink === link.id ? "active-link" : ""
                }`}
              >
                <Link href={`#${link.id}`}>{link.name}</Link>
              </li>
            ))}
          </ul>
          <button className="border-2 border-gray-300 py-2 px-5 transition-all duration-500 hover:bg-white hover:border-white hover:text-black">
            Buy Now
          </button>
        </div>
        <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
