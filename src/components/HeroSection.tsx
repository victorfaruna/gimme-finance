"use client";

import React from "react";

export default function HeroSection() {
    return (
        <div className="outer-container w-full h-[70vh] lg:h-[100vh] bg-fixed [background-image:linear-gradient(151deg,_rgba(0,0,5,0.8)_4%,_rgba(0,14,66,0.1)_80%),url('/images/hero-14.webp')] bg-cover md:[background-size:100%] bg-no-repeat bg-[center_bottom] lg:bg-[left_top] px-[var(--x-padding)] flex items-center relative overflow-hidden">
            <div className="hero-text-container w-full lg:w-[52%] flex flex-col gap-4">
                <h1
                    style={{ textShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}
                    className="font-clash-display pr-2 lg:pr-0 text-white text-[2rem] md:text-[3.5rem] lg:text-[4rem] font-semibold leading-none tracking-[-0.02em]"
                >
                    A financial inclusive world with everyone for everyone.
                    {/* Turn your Prepaid SIM into a Virtual Debit Card. */}
                </h1>
                <p className="text-color-main/90 text-[0.9rem] md:text-[1.1rem] font-medium [text-shadow:0px_0px_10px_rgba(0,0,0,0.4)]">
                    We are the Micro-payment app that prioritizes individuals,
                    businesses, and stores. Paying is like saying
                    &quot;welcome!&quot;.
                </p>
                <div className="flex gap-4 items-center">
                    <button
                        onClick={() =>
                            window.open(
                                "https://gimme.fillout.com/waitlist",
                                "_blank"
                            )
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
                </div>
                <div className="play-button-container flex items-center gap-2 group *:transition-all *:duration-700">
                    <button className="cursor-pointer play-button size-[50px] rounded-full border border-color-main flex items-center justify-center text-color-main group-hover:bg-color-1/80 group-hover:text-color-main/50">
                        <svg
                            width="50%"
                            height="100%"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                                fill="CurrentColor"
                            ></path>
                        </svg>
                    </button>
                    <p className="text-[0.8rem] text-color-main">
                        Learn more about how <br /> Gimme works
                    </p>
                </div>
            </div>
            {/* <Image
                className="w-[2000px] lg:w-[4000px] object-cover absolute z-[4] bottom-0 right-0 max-w-none"
                src="/abstract/bottom-rule.svg"
                alt=""
                width={2000}
                height={50}
            /> */}
        </div>
    );
}
