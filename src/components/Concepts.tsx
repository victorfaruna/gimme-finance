"use client";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

const DATA = [
    {
        title: "Engage",
        description:
            "Swap, Withdraw, Send money, and make payments with ease using your favourite currency and stable coins.",
        image: "/images/concepts/1.webp",
    },
    {
        title: "Level Up",
        description:
            "Global decentralised B2B & B2C platform for merchants and the emerging digital asset economy.",
        image: "/images/concepts/2.webp",
    },
    {
        title: "Optimized",
        description:
            "Optimized and innovative technology insure no delays, reliable and low cost ultra-fast transactions.",
        image: "/images/concepts/3.webp",
    },
    {
        title: "Secure",
        description:
            "Gimme uses security measures such as tokinization and NFT to protect customer data and prevent fraud.",
        image: "/images/concepts/4.webp",
    },
];
const Concepts = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <div className="w-screen drop-shadow-2xl overflow-hidden bg-color-main px-[1rem] py-[2rem] lg:px-[6rem] lg:py-[7rem] pb-[10rem] flex flex-col lg:flex-row gap-10 items-center justify-between">
            <div className="left flex flex-col gap-4">
                <p className="w-full lg:w-[500px] text-[2rem] lg:text-[4rem] leading-none uppercase font-clash-display font-bold">
                    Enabling Cross Border Payments
                </p>
                <div className="buttons flex gap-3">
                    <button
                        ref={prevRef}
                        className="cursor-pointer size-[3rem] lg:size-[4rem] rounded-full border-[0.5px] lg:border border-color-1 flex items-center justify-center"
                    >
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
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </button>
                    <button
                        ref={nextRef}
                        className="cursor-pointer size-[3rem] lg:size-[4rem] rounded-full border-[0.5px] lg:border border-color-1 flex items-center justify-center"
                    >
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
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="right flex-[1] w-full lg:w-[80svw] relative">
                <div className="absolute left-0 top-0 fader w-[100px] h-full bg-gradient-to-r from-color-main/70 via-color-main/20 to-transparent z-[2]"></div>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={10}
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    loop={true}
                    slidesPerView={1}
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    slidesPerGroup={1}
                    onAfterInit={(swiper) => {
                        // Ensure navigation picks up the custom elements (type-safe)
                        if (
                            swiper.params.navigation &&
                            typeof swiper.params.navigation !== "boolean"
                        ) {
                            const navigation = swiper.params
                                .navigation as NavigationOptions;
                            navigation.prevEl = prevRef.current;
                            navigation.nextEl = nextRef.current;
                        }
                    }}
                    onSwiper={(swiper) => {
                        // Ensure navigation picks up the custom elements
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                >
                    {DATA.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="item w-full bg-color-3/5 rounded-[2rem] p-[1.5rem] lg:p-[2.5rem] flex flex-col gap-5">
                                <div className="">
                                    <p className="text-[1.5rem] lg:text-[2rem] font-bold font-clash-display">
                                        {item.title}
                                    </p>
                                    <p className="text-[0.7rem] lg:text-[1rem] text-color-1/70">
                                        {item.description}
                                    </p>
                                </div>

                                <div>
                                    <Image
                                        className="w-full rounded-[2rem]"
                                        width={500}
                                        height={500}
                                        src={item.image ?? ""}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Concepts;
