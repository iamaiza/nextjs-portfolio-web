import { navLinks } from "@/lib";
import { MobileMenuProps, NavLinks } from "@/types/types";
import Link from "next/link";
import React from "react";
import { CloseIcon, DribbleIcon, FacebookIcon, InstagramIcon, TikTokIcon, TwitterIcon } from "../icons";

const MobileMenu = (props: MobileMenuProps) => {
    const { setMobileMenu, mobileMenu } = props;
  return (
    <div className={`absolute inset-0 bg-black text-white z-30 w-full h-screen p-4 transition-all duration-1000 ${mobileMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
      <div className="flex items-center justify-end gap-1 cursor-pointer" onClick={() => setMobileMenu(false)}>
        <span className="text-lg">Close</span>
        <CloseIcon />
      </div>
      <div className="flex flex-col justify-center items-center gap-7 mt-5 max-h-[70vh] h-full">
        <ul className="flex flex-col gap-7 text-center">
          {navLinks.map((link: NavLinks) => (
            <li key={link.id} className="text-2xl">
              <Link href={`/${link.id}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="border-2 border-gray-300 py-2 px-7 text-lg">Buy Now</button>
        <div className="flex items-center gap-4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <DribbleIcon />
            <TikTokIcon />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
