"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const styles = {
  outerContainer: {
    opacity: "1",
    backgroundImage:
      "linear-gradient(151deg, #000e4299 4%, #fff0 80%), url('/images/hero-4.jpg')",
    // backgroundPosition: "0 0, 70% 45%",
    backgroundPosition: "right top",
    backgroundRepeat: "repeat, no-repeat",
    backgroundSize: "auto, cover",
    backgroundAttachment: "scroll, scroll",
    inset: "0% 0% auto",
  },
};

export default function HeroSection() {
  return (
    <div
      style={styles.outerContainer}
      className="outer-container w-full h-[95vh] px-[var(--x-padding)] flex items-center relative overflow-hidden"
    >
      <div className="hero-text-container w-[55%] flex flex-col gap-8">
        <h1
          style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
          className="text-white text-[4.5rem] font-bold leading-none tracking-[-0.02em]"
        >
          A financial inclusive world with everyone for everyone.
        </h1>
        <p className="text-color-main/90 text-[1.1rem] font-medium mr-[20px]">
          We are the Micro-payment app that prioritizes people—individuals,
          businesses, and stores. Paying is like saying "welcome!".
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
