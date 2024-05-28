"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-img_container",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1000,
        scrollTrigger: {
          trigger: ".about-img_container",
          start: "top 100%",
          end: "top 100%",
          scrub: 2,
          // pin: true,
          toggleActions: "play none none reverse",
        },
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      ".about-title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1000,
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 100%",
          end: "top 100%",
          scrub: 2,
          // pin: true,
          toggleActions: "play none none reverse",
        },
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      ".about-desc",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1000,
        scrollTrigger: {
          trigger: ".about-desc",
          start: "top 100%",
          end: "top 100%",
          scrub: 2,
          // pin: true,
          toggleActions: "play none none reverse",
        },
        ease: "power2.in",
      }
    );
    gsap.fromTo(
      ".about-btn",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1000,

        // delay: 0,
        scrollTrigger: {
          trigger: ".about-btn",
          start: "top 100%",
          end: "top 100%",
          scrub: 2,
          // pin: true,
          toggleActions: "play none none reverse",
        },
        ease: "power2.in",
      }
    );
  }, []);
  return (
    <section
      className="padding pt-32 max-[1040px]:pt-0 bg-white max-[1040px]:-mt-16 max-md:mt-0 max-md:pt-10"
      id="about"
    >
      <div className="flex items-center gap-5 max-[1040px]:flex-col max-[1040px]:gap-14">
        <div
          className="flex-1 h-[80vh] w-full about-img_container"
          style={{ boxShadow: "0 0 40px rgba(0,0,0,.2)" }}
        >
          <img
            className="object-cover w-full h-full"
            src="https://shanereact.ibthemespro.com/img/about/1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 pl-28 max-[1040px]:pl-0">
          <div className="about-title">
            <span className="uppercase text-xs bg-[#F2F2F2] py-2.5 px-2.5">
              about me
            </span>
            <h3 className="font-extrabold text-3xl max-sm:text-2xl pt-8 pb-10 max-[1040px]:pb-8">
              Creative Independent Web Developer based in USA
            </h3>
          </div>

          <p className="text-[#767676] text-[15px] leading-8 about-desc">
            I'm web designer, and I'm very passionate and dedicated to my work.
            With 20 years experience as a professional web developer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>
          <button className="border-2 border-black bg-black py-3.5 px-9 text-white mt-10  hover:text-black hover:bg-transparent hover:transition-all hover:duration-500 about-btn">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
