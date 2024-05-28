"use client";

import { news } from "@/lib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import NewsContent from "./NewsContent";

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  useEffect(() => {
    gsap.fromTo("#news-content_container", { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#news-content_container",
        start: "top 80%",
        end: "top 80%",
        scrub: true,
        toggleActions: "play none none reverse"
      },
      ease: "power2.in"
    })
    gsap.fromTo("#content-1", { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#content-1",
        start: "top 80%",
        end: "top 80%",
        scrub: 1,
        toggleActions: "play none none reverse"
      },
      ease: "power2.in"
    });
    gsap.fromTo("#content-2", { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      // delay: 1,
      scrollTrigger: {
        trigger: "#content-2",
        start: "top 80%",
        end: "top 80%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in"
    });
    gsap.fromTo("#content-3", { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      // delay: 1,
      scrollTrigger: {
        trigger: "#content-3",
        start: "top 80%",
        end: "top 80%",
        scrub: 2,
        toggleActions: "play none none reverse",
      },
      ease: "power2.in"
    })
  }, []);
  return (
    <section className="padding py-32 max-lg:py-14" id="news">
      <div className="mb-20 max-[1040px]:mb-10">
        <span className="uppercase text-xs bg-[#F2F2F2] py-2 px-3 font-semibold">
          news
        </span>
        <h3 className="font-extrabold text-3xl max-sm:text-2xl mt-7">
          Latest News
        </h3>
      </div>
      <div className="grid grid-cols-3 max-[1040px]:grid-cols-2 max-md:grid-cols-1 gap-12" id="news-content_container">
        <NewsContent
          id="content-1"
          title={news[0].title}
          img={news[0].img}
          date={news[0].date}
          author={news[0].author}
          key={news[0].id}
        />
        <NewsContent
          id="content-2"
          title={news[1].title}
          img={news[1].img}
          date={news[1].date}
          author={news[1].author}
          key={news[1].id}
        />
        <NewsContent
          id="content-3"
          title={news[2].title}
          img={news[2].img}
          date={news[2].date}
          author={news[2].author}
          key={news[2].id}
        />
      </div>
    </section>
  );
};

export default News;
