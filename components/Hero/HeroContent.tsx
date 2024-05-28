"use client";

import React, { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import useWindowWidth from "../window";

const HeroContent = () => {
  const [currentItem, setCurrentItem] = useState(0);
  const windowWidth = useWindowWidth();

  const items = ["Web Developer", "UI/UX Designer.", "Content Creator."];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % items.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  const transitions = useTransition(currentItem, {
    from: {
      opacity: 0,
      transform: windowWidth <= 1040 ? "translateY(100%)" : "translateY(50%)",
    },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: {
      opacity: 0,
      transform: windowWidth <= 1040 ? "translateY(-100%)" : "translateY(-55%)",
    },
    config: { duration: 300 },
    // onRest: () => setIsComplete(true),
  });
  return (
    <div className="absolute top-1/4 max-[1040px]:top-[20%] max-md:z-10 max-md:top-1/3">
      <div className="title-container w-[37rem] max-[1040px]:w-80 max-md:w-96 max-sm:w-72 max-[350px]:w-60">
        <div className="title-content">
          <span className="text-stroke font-[900] text-7xl max-[1040px]:text-4xl uppercase text-transparent">
            bostami
          </span>
          <div className="relative text-white text-[4.7rem] h-28 max-[1040px]:h-10 max-md:h-14 max-sm:h-9 max-[1040px]:text-4xl max-md:text-5xl font-extrabold max-[1040px]:mt-6 max-sm:text-4xl max-sm:mt-6 max-[350px]:text-[2rem] max-[350px]:h-10">
            {transitions((style, index) => (
              <animated.div
                style={style}
                className="absolute left-0 w-full text-nowrap"
              >
                {items[index]}
              </animated.div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white w-64 max-lg:w-56 max-sm:w-48 max-[350px]:w-44 text-4xl max-[1040px]:text-3xl font-bold mt-4 max-[1040px]:mt-6 max-sm:mt-8 max-sm:text-2xl job-content">
        <span>based in USA</span>
      </div>
      <button className="border-2 border-gray-300 p-3.5 w-56 mt-12 text-white text-lg max-sm:mt-10 max-sm:w-48 max-sm:py-2.5 hover:bg-white hover:text-black transition-all duration-500 hero-btn">
        <span>See Portfolio</span>
      </button>
    </div>
  );
};

export default HeroContent;
