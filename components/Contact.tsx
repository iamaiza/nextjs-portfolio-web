"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    gsap.fromTo('.contact-title', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".contact-title",
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    });
    gsap.fromTo('.contact-btn', { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".contact-btn",
        start: "top 100%",
        end: "top 100%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
    })
  }, [])
  return (
    <section
      className="pt-8 px-4 h-screen max-[1040px]:h-[80vh] max-md:h-[70vh] bg-cover bg-no-repeat bg-center relative before:absolute before:inset-0 before:bg-[#00000094]"
      style={{ backgroundImage: "url('/assets/contact-bg.jpg')" }}
      id="contact"
    >
      <div className="absolute -top-1 left-0 -rotate-180">
        <img
          src="https://shanereact.ibthemespro.com/img/svg/paper.svg"
          alt=""
        />
      </div>
      <div className="h-full flex flex-col items-center justify-center">
        <div className="z-10 text-center">
            <h3 className="text-white text-7xl max-lg:text-6xl max-[500px]:text-5xl font-extrabold contact-title">Let's work together!</h3>
            <button className="contact-btn bg-white border-2 border-white py-3.5 px-14 max-md:px-8 mt-12 hover:bg-transparent hover:text-white hover:transition-all hover:duration-700">Make an enquiry</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

