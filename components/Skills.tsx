"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useEffect(() => {
    gsap.fromTo('.skill-container', { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".skill-container",
        start: "top 70%",
        end: "top 70%",
        scrub: 2,
        // pin: true,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    })
  }, [])
  return (
    <section className="padding py-32 max-[1040px]:py-16" id="skills">
      <div className="flex items-center justify-center max-[1040px]:flex-col gap-[6.5rem] max-[1050px]:gap-20 max-[1040px]:gap-12 skill-container">
        <div className="flex-1">
          <h3 className="font-extrabold text-[2rem] max-sm:text-3xl max-[350px]:text-[1.65rem]">I have high skills in developing and programming</h3>
          <p className="mt-6 text-[#767676] leading-loose text-[15px]">
            I am working on a professional, visually sophisticated and
            technologically proficient, responsive and multi-functional personal
            portfolio template Shane.
          </p>
        </div>
        <div className="flex-1 max-[1040px]:w-full">
          <div className="pb-8">
            <div className="flex items-center justify-between gap-2 pb-3">
              <span>Web Development</span>
              <span>95%</span>
            </div>
            <div className="w-full h-1 bg-[#f2f2f2]">
              <div className="w-[95%] h-full bg-black" />
            </div>
          </div>
          <div className="pb-8">
            <div className="flex items-center justify-between gap-2 pb-3">
              <span>Brand Identity</span>
              <span>80%</span>
            </div>
            <div className="w-full h-1 bg-[#f2f2f2]">
              <div className="w-[80%] h-full bg-black" />
            </div>
          </div>
          <div className="pb-8">
            <div className="flex items-center justify-between gap-2 pb-3">
              <span>Logo Design</span>
              <span>90%</span>
            </div>
            <div className="w-full h-1 bg-[#f2f2f2]">
              <div className="w-[90%] h-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
