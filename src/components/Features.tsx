import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <div className="features-container w-full h-[500px] flex items-center justify-center px-[7rem]">
      <div className="features-inner w-full flex justify-between items-center gap-20">
        <div className="featues-left bg-blue-300 flex flex-[1] justify-center items-center relative">
          <Image
            className="w-[550px] object-contain absolute z-[-1] rotate-[-40deg]"
            unoptimized
            src="/images/twirl.webp"
            width={550}
            height={550}
            alt=""
          />
          <Image
            className="w-[400px] object-contain"
            unoptimized
            src="/images/mockup-2.webp"
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="w-[70px] object-contain absolute z-[-1] mt-[-400px] ml-[-500px] rotate-[20deg]"
            unoptimized
            src="/images/star.svg"
            width={70}
            height={70}
            alt=""
          />
        </div>

        <div className="features-right flex flex-[1] flex-col gap-2">
          <p className="uppercase text-[1.1rem] font-medium tracking-[2px] text-color-3">
            * Features
          </p>
          <p className="text-[2.5rem] font-radhiumz font-bold leading-none">
            Gimme Finance
          </p>
        </div>
      </div>
    </div>
  );
}
