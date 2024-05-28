"use client";

import { NewsProps } from "@/types/types";
import Link from "next/link";
import React from "react";

const NewsContent = (props: NewsProps) => {
  const { id, key, img, title, author, date } = props;
  return (
    <div key={key} className="container max-w-full h-fit" id={id}>
      <div className="w-full h-3/4 max-md:h-[90%] overflow-hidden">
        <img className="w-full h-full object-cover img" src={img} alt={title} />
      </div>
      <h3 className="text-lg font-extrabold leading-6 mt-8 mb-5">{title}</h3>
      <p className="text-xs italic text-[#767676]">
        By{" "}
        <Link
          href="/"
          className="uppercase hover:text-black transition-all duration-300"
        >
          {author}
        </Link>{" "}
        / <span className="uppercase">{date}</span>
      </p>
    </div>
  );
};

export default NewsContent;
