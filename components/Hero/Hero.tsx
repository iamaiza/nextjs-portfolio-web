"use client";
import React, { useEffect, useState } from "react";
import BgParticles from "./Particles";
import { useTransition, animated } from "react-spring";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative h-screen padding" id="home">
      <BgParticles />
      <div
        className="absolute inset-0 -z-10 w-full h-screen max-[1040px]:h-[80vh] max-[1040px]:bg-bottom max-md:mt-14 max-md:h-[88vh] bg-cover bg-no-repeat max-md:bg-cover max-md:bg-[70%] max-md:before:bg-[#0000009a] max-md:before:absolute max-md:before:inset-0 max-md:before:z-10"
        style={{
          backgroundImage:
            "url('https://shanereact.ibthemespro.com/img/slider/3.jpg')",
        }}
      />
      <HeroContent />
    </section>
  );
};

export default Hero;
