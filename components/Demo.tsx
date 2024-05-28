"use client";

import React, { useEffect } from "react";
import { PlayIcon } from "./icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Demo = () => {
  useEffect(() => {
    gsap.fromTo(".play-btn", { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".play-btn",
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
        // pin: true,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    });
    gsap.fromTo('.demo-title', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".demo-title",
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
        // pin: true,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    });
    gsap.fromTo(".demo-btn", { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".demo-btn",
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
        // pin: true,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    })
  }, [])
  return (
    <section
      className="relative flex items-center justify-center w-full h-screen max-[1040px]:h-[80vh] max-md:h-[60vh] max-sm:h-[80vh] bg-cover bg-no-repeat max-sm:bg-center before:absolute before:inset-0 before:bg-[#00000080] py-14 px-4"
      id="demo"
      style={{
        backgroundImage:
          "url('https://shanereact.ibthemespro.com/img/video/1.jpg')",
      }}
    >
      <div className="z-10 text-center">
        <span className="bg-white w-24 h-24 max-[993px]:w-16 max-[993px]:h-16 mx-auto rounded-full flex items-center justify-center hover:scale-[1.2] hover:transition-all hover:duration-1000 play-btn">
          <PlayIcon className="w-10 h-10 max-[993px]:w-7 max-[993px]:h-7 fill-black" />
        </span>
        <h3 className="text-3xl max-sm:text-[1.7rem] font-extrabold text-white max-w-[30rem] w-full mt-9 mb-12 demo-title">I am delivering beautiful digital products for my clients</h3>
        <button className="border-2 border-white text-white py-3.5 px-14 max-md:py-3 max-md:px-7 hover:bg-white hover:text-black hover:transition-all hover:duration-1000 demo-btn">Watch Video</button>
      </div>
    </section>
  );
};

export default Demo;
