import { PortfolioProps } from "@/types/types";
import React from "react";

const PortfolioImages = (props: PortfolioProps) => {
    const { id, img, title, type } = props;
    return (
    <div className="relative info-container overflow-y-hidden" key={id}>
      <figure className="w-full h-full">
        <img
          className="object-cover aspect-square"
          src={img}
          alt={title}
        />
      </figure>
      <div className="flex items-center justify-between gap-2 absolute bottom-0 w-full bg-[#ffffff91] p-3 info-content">
        <span className="text-lg font-semibold">{title}</span>
        <span className="capitalize">{type}</span>
      </div>
    </div>
  );
};

export default PortfolioImages;
