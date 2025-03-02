"use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="outer-container w-full h-[85vh] lg:h-[98vh] [background-image:linear-gradient(151deg,_#000e4299_4%,_#fff0_80%),url('/images/hero-4.webp')] bg-cover bg-no-repeat bg-[center_bottom] px-[var(--x-padding)] flex items-center relative overflow-hidden">
      <div className="hero-text-container w-full lg:w-[55%] flex flex-col gap-8">
        <h1
          style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
          className="text-white text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-none tracking-[-0.02em]"
        >
          A financial inclusive world with everyone for everyone.
        </h1>
        <p className="text-color-main/90 text-[0.8rem] md:text-[1.1rem] font-medium mr-[20px]">
          We are the Micro-payment app that prioritizes people—individuals,
          businesses, and stores. Paying is like saying &quit;welcome!&quot;.
        </p>
        <div className="flex gap-4">
          <button
            style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.4)" }}
            className="bg-[#2467e3eb] backdrop-blur-[5px] hover:cursor-pointer py-[13px] lg:py-[17px] px-[20px] lg:px-[30px] text-[0.9rem] drop-shadow-xl rounded-md self-start text-white font-bold"
          >
            Join Our Waitlist
          </button>
          <button
            style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.4)" }}
            className="bg-[#e6e4deeb] backdrop-blur-[5px] flex items-center justify-center gap-2 hover:cursor-pointer py-[13px] lg:py-[17px] px-[20px] lg:px-[30px] text-[0.9rem] drop-shadow-xl rounded-md self-start text-black font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            Demo
          </button>
        </div>
      </div>
      <Image
        className="w-[2000px] lg:w-[4000px] object-cover absolute z-[199] bottom-0 right-0 max-w-none"
        src="/abstract/bottom-rule.svg"
        alt=""
        width={2000}
        height={50}
      />
    </div>
  );
}
