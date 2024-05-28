"use client";

import { portfolio } from "@/lib";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PortfolioImages from "./PortfolioImages";

gsap.registerPlugin(ScrollTrigger);
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    const imgs = gsap.utils.toArray(".portfolio-img_container");
    imgs.forEach((img: any) => {
      gsap.fromTo(
        img,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1000,
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            end: "top 80%",
            scrub: 1.5,
            toggleActions: "play none none reverse",
          },
          ease: "power2.in",
          
        }
      );
    });
  
  }, [activeTab]);
  const portfolioItems = activeTab === "all" ? portfolio : portfolio.filter(item => item.type == activeTab)
  const clickTabHandler = (tab: string) => {
    switch (tab) {
      case "all":
        setActiveTab("all");
        break;
      case "design":
        setActiveTab("design");
        break;
      case "branding":
        setActiveTab("branding");
        break;
      case "photography":
        setActiveTab("photography");
        break;
      default:
        setActiveTab("all");
        break;
    }
  };
  return (
    <section
      className="bg-[#F9F9F9] mt-32 max-lg:mt-14 padding py-32 max-lg:pt-14 max-lg:pb-20 max-md:pb-16 max-sm:pb-14"
      id="portfolio"
    >
      <span className="uppercase text-xs bg-[#F2F2F2] py-2.5 px-2.5">
        portfolio
      </span>
      <div className="flex max-md:flex-col items-center max-md:items-start justify-between gap-5 mt-7">
        <h3 className="font-extrabold text-3xl max-sm:text-2xl">
          Creative Portfolio
        </h3>
        <ul className="flex items-center gap-4 max-md:gap-2 max-md:flex-wrap font-semibold text-sm max-md:mt-5">
          <li
            className={`py-1.5 px-3 max-md:px-2 ${activeTab === "all" ? "bg-black text-white" : "bg-transparent text-black"} cursor-pointer`}
            onClick={() => clickTabHandler("all")}
          >
            All
          </li>
          <li
            className={`py-1.5 px-3 max-md:px-2 ${activeTab === "design" ? "bg-black text-white" : "bg-transparent text-black"} cursor-pointer`}
            onClick={() => clickTabHandler("design")}
          >
            Design
          </li>
          <li
            className={`py-1.5 px-3 max-md:px-2 ${activeTab === "branding" ? "bg-black text-white" : "bg-transparent text-black"} cursor-pointer`}
            onClick={() => clickTabHandler("branding")}
          >
            Branding
          </li>
          <li
            className={`py-1.5 px-3 max-md:px-2 ${activeTab === "photography" ? "bg-black text-white" : "bg-transparent text-black"} cursor-pointer`}
            onClick={() => clickTabHandler("photography")}
          >
            Photography
          </li>
        </ul>
      </div>
      <div className="mt-24 max-lg:mt-10">
        <div className="grid grid-cols-3 max-[1040px]:grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-5 portfolio-img_container">
          {portfolioItems.slice(0, 3).map((el) => (
            <PortfolioImages
              id={el.id}
              title={el.title}
              img={el.img}
              type={el.type}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 max-[1040px]:grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-5 mt-12 max-md:mt-5 portfolio-img_container">
          {portfolioItems.slice(3, 6).map((el) => (
            <PortfolioImages
              id={el.id}
              title={el.title}
              img={el.img}
              type={el.type}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
