import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-container w-full h-[550px] flex items-center justify-center px-[8rem]">
      <div className="hero-inner w-full flex justify-between items-center gap-20">
        <div className="hero-left flex flex-[1] flex-col gap-4">
          <p className="text-[2.4rem] font-bold font-radhiumz">
            Redefining Microtransactions with Decentralized Finance.
          </p>
          <p className="text-[1.1rem] text-color-1/80">
            Effortless, secure, and borderless microtransactions—powered by
            blockchain. Experience the future of digital payments with a
            decentralized marketplace built for seamless transactions.
          </p>

          <div className="hero-buttons">
            <button className="px-8 py-3 rounded-full bg-color-1 text-white flex gap-2 items-center">
              <span>Get started</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hero-right flex flex-[1] justify-center items-center relative">
          <Image
            className="w-[500px] object-contain absolute z-[-1] mr-[-90px] rotate-[10deg]"
            unoptimized
            src="/images/twirl.webp"
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="w-[500px] object-contain"
            unoptimized
            src="/images/mockup-1.webp"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-[90px] object-contain absolute z-[-1] mb-[-400px] ml-[-400px]"
            unoptimized
            src="/images/star.svg"
            width={90}
            height={90}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
