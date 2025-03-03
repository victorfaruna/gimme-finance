"use client";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="outer-container w-full h-[80vh] lg:h-[98vh] [background-image:linear-gradient(151deg,_rgba(0,14,66,0.7)_4%,_rgba(0,14,66,0.1)_80%),url('/images/hero-6.webp')] bg-cover md:[background-size:120%] bg-no-repeat bg-[10%_bottom] lg:bg-[left_top] px-[var(--x-padding)] flex items-center relative overflow-hidden">
      <div className="hero-text-container w-full lg:w-[55%] flex flex-col gap-8">
        <h1
          style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
          className="text-white text-[2.2rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-none tracking-[-0.02em]"
        >
          {/* A financial inclusive world with everyone for everyone. */}
          Turn your Prepaid SIM into a Virtual Debit Card.
        </h1>
        <p className="text-color-main/90 text-[0.9rem] md:text-[1.1rem] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.4)]">
          We are the Micro-payment app that prioritizes people—individuals,
          businesses, and stores. Paying is like saying &quot;welcome!&quot;.
        </p>
        <div className="flex gap-4 items-center">
          <button
            onClick={() =>
              window.open("https://gimme.fillout.com/waitlist", "_blank")
            }
            className="bg-[#2467e3fe] flex items-center justify-center hover:cursor-pointer py-[12px] lg:py-[15px] px-[20px] lg:px-[30px] text-[0.7rem] md:text-[0.9rem] rounded-lg self-start text-white font-bold"
          >
            <span>Join Our Waitlist</span>
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
          <button className="bg-white flex items-center justify-center gap-2 hover:cursor-pointer py-[12px] lg:py-[15px] px-[20px] lg:px-[30px] text-[0.7rem] md:text-[0.9rem] rounded-lg self-start text-[#2467e3fe] font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="orange"
              className="bi bi-play-circle-fill size-4 m-[3px]"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
            </svg>
            Demo
          </button>
        </div>
      </div>
      <Image
        className="w-[2000px] lg:w-[4000px] object-cover absolute z-[4] bottom-0 right-0 max-w-none"
        src="/abstract/bottom-rule.svg"
        alt=""
        width={2000}
        height={50}
      />
    </div>
  );
}
