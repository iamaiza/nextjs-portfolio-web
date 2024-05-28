"use client";

import React, { Fragment, useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { testimonials } from "@/lib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
const Testimonials = () => {
  const [autoplay, setAutoplay] = useState(false)
  useEffect(() => {
    gsap.fromTo(".testimonial", { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1000,
      scrollTrigger: {
        trigger: ".testimonial",
        start: "top 70%",
        end: "top 70%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in",
      onComplete: () => {
        setAutoplay(true)
      }
    })
  }, [])
  return (
    <section className="padding bg-[#f9f9f9] py-32 max-lg:py-14 testimonial" id="testimonial">
      <div className="flex justify-between max-[1040px]:flex-col gap-[6.5rem] max-[1040px]:gap-12">
        <div className="flex-1">
          <span className="bg-[#f2f2f2] uppercase text-xs py-2 px-3">
            testimonials
          </span>
          <h3 className="font-extrabold text-3xl max-[350px]:text-[1.7rem] mt-5">
            What clients say about my portfolio template
          </h3>
        </div>
        <div className="flex-1 overflow-x-hidden">
          <OwlCarousel
            className="owl-theme"
            margin={50}
            items={1}
            loop
            autoplay={autoplay}
            autoplaySpeed={600}
            autoplayTimeout={3000}
            dots={false}
            dragEndSpeed={700}
            
          >
            {testimonials.map((el) => (
              <div key={el.id}>
                <p className="text-[#767676] leading-loose text-[15px]">
                  {el.desc}
                </p>
                <div className="flex items-center gap-6 max-[350px]:gap-4 mt-7">
                  <div
                    className="w-16 h-16 bg-cover bg-no-repeat rounded-full"
                    style={{ backgroundImage: `url('${el.img}')` }}
                  />

                  <div className="flex flex-col">
                    <span className="font-semibold text-lg ">{el.author}</span>
                    <span className="text-sm capitalize">{el.job}</span>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
