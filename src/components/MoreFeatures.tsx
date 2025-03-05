import React from "react";
import Logo from "./Logo";

export default function MoreFeatures() {
  return (
    <div className="w-full pl-[var(--x-padding)] py-[3rem] mb-[-1rem] rounded-b-[1rem] bg-white">
      <div className="py-[0.4rem] px-[0.7rem] rounded-lg bg-color-1 inline-block">
        <Logo theme="dark" className="size-[2rem]" />
      </div>
      <p className="text-[2rem] md:text-[4rem] font-bold leading-none mb-[2rem]">
        More than just a <br />
        payment app
      </p>
      <div className="w-full slider-container flex gap-4 overflow-x-auto whitespace-nowrap">
        <div className="slider-item min-w-[300px] md:min-w-[750px] h-[180px] md:h-[500px] bg-neutral-300 rounded-lg flex-[0_0_auto]"></div>

        <div className="slider-item min-w-[300px] md:min-w-[750px] h-[180px] md:h-[500px] bg-neutral-300 rounded-lg flex-[0_0_auto]"></div>

        <div className="slider-item min-w-[300px] md:min-w-[750px] h-[180px] md:h-[500px] bg-neutral-300 rounded-lg flex-[0_0_auto]"></div>
      </div>
    </div>
  );
}
