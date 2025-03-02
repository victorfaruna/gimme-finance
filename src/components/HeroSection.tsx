"use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="outer-container w-full h-[95vh] [background-image:linear-gradient(151deg,_#000e4299_4%,_#fff0_80%),url('/images/hero-4.jpg')] bg-cover bg-center lg:bg-right-bottom px-[var(--x-padding)] flex items-center relative overflow-hidden">
      <div className="hero-text-container w-full lg:w-[55%] flex flex-col gap-8">
        <h1
          style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
          className="text-white text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-none tracking-[-0.02em]"
        >
          A financial inclusive world with everyone for everyone.
        </h1>
        <p className="text-color-main/90 text-[0.8rem] md:text-[1.1rem] font-medium mr-[20px]">
          We are the Micro-payment app that prioritizes people—individuals,
          businesses, and stores. Paying is like saying &quit;welcome!&quot;.
        </p>
        <button
          style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.4)" }}
          className="bg-[#2467e3eb] backdrop-blur-[5px] hover:cursor-pointer py-[17px] px-[30px] text-[0.9rem] drop-shadow-xl rounded-md self-start text-white font-bold"
        >
          Join Our Waitlist
        </button>
      </div>
      <Image
        className="w-[4000px] object-cover absolute z-[199] bottom-0 right-0 max-w-none"
        src="/abstract/bottom-rule.svg"
        alt=""
        width={4000}
        height={116}
      />
    </div>
  );
}
