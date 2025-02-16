import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-container w-full flex items-center justify-center px-[7rem]">
      <div className="hero-inner w-full flex justify-center items-center flex-wrap gap-10">
        <div className="hero-left flex flex-1 flex-col gap-4">
          <p className="text-[0.9rem] text-color-3 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            168+ universities in Nigeria
          </p>
          <p className="text-[34px] font-bold font-radhiumz">
            Redefining Microtransactions with Decentralized Finance.
          </p>
          <p className="text-[14px] text-color-1/80">
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
        <div className="hero-right w-[500px] h-[500px] flex justify-center items-center relative">
          <Image
            className="w-[500px] object-contain absolute z-[-1] mr-[-90px] rotate-[10deg] hidden"
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
            className="w-[90px] object-contain absolute mb-[-410px] ml-[-500px]"
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
