"use client";

import { partners } from "@/lib";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import useWindowWidth from "./window";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = () => {
  const windowWidth = useWindowWidth();
  const [autoPlay, setAutoplay] = useState(false)
  useEffect(() => {
    gsap.fromTo('.partners', { opacity: 0 }, {
      opacity: 1,
      duration: 1000,
      scrollTrigger: {
        trigger: ".partners",
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
  let items = 4;
 if (windowWidth < 420) {
    items = 2;
  } else if (windowWidth < 640) {
    items = 3;
  } else {
    items = 4;
  }
  return (
    <section className="py-20 max-lg:py-10 max-sm:py-7 padding partners" id="partners">
      <OwlCarousel
        className="owl-theme owl-carousel"
        id="partners-carousel"
        loop
        margin={10}
        items={items}
        nav={false}
        dots={false}
        autoplay={autoPlay}
        autoplayTimeout={2000}
        autoplaySpeed={900}
        dragEndSpeed={800}
      >
        {partners.map((el) => (
          <div
            className="item w-9/12 max-[1040px]:w-10/12 max-[900px]:w-11/12 max-md:w-full opacity-65 transition-all duration-1000 hover:opacity-100"
            key={el.id}
          >
            <img
              className="w-full h-full object-cover"
              src={el.img}
              alt={el.title}
            />
          </div>
        ))}
      </OwlCarousel>
    </section>
  );
};

export default Partners;
