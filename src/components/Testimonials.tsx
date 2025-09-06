"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const TESTIMONIALS = [
    {
        name: "James B",
        image: "/images/user-1.webp",
        text: "I’ve tried other payment apps, but Gimme makes it incredibly easy to pay small amounts without hassle. The security and speed are impressive. Highly recommend!",
    },
    {
        name: "Jumola Joseph",
        image: "/images/user-2.webp",
        text: "I like the idea of frictionless payments, and Gimme does a good job, but I’d love to see more integrations with other apps.",
    },
    {
        name: "Andrew Doe",
        image: "/images/user-3.webp",
        text: "I love how smooth the payments are. No delays, no hidden fees just simple microtransactions that actually work. Highly recommended!",
    },
    {
        name: "James B",
        image: "/images/user-1.webp",
        text: "I’ve tried other payment apps, but Gimme makes it incredibly easy to pay small amounts without hassle. The security and speed are impressive. Highly recommend!",
    },
];

const Testimonials = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    return (
        <div className="w-full over-x-hidden testimonials-container px-[2rem] py-[4rem] lg:px-[4rem] lg:py-[5rem] bg-color-main flex flex-col items-center gap-5">
            <p className="font-clash-display text-[2.7rem] lg:text-[4rem] text-center font-bold leading-none">
                10,000+ people on our waitlist!
            </p>
            <div className="inner w-[80vw]">
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
                >
                    {TESTIMONIALS.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full flex flex-col gap-2 testimonial-card rounded-[2.5rem] bg-color-1/2 p-[2rem]">
                                <Image
                                    className="border size-[3rem] p-[0.5rem] border-dashed border-color-3/30 rounded-full"
                                    src={testimonial.image}
                                    alt="testimonial"
                                    width={100}
                                    height={100}
                                />
                                <p className="text-[1rem] text-color-1/70">
                                    {testimonial.text}
                                </p>
                                <div>
                                    <p className="text-[12px] font-medium text-color-1/90">
                                        {testimonial.name}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="buttons flex justify-center flex-wrap gap-3">
                <button
                    ref={prevRef}
                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                    className="hover:bg-color-1 hover:text-color-main cursor-pointer size-[3rem] lg:size-[4rem] rounded-full border-[0.5px] lg:border border-color-1 flex items-center justify-center"
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
                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                    className="hover:bg-color-1 hover:text-color-main cursor-pointer size-[3rem] lg:size-[4rem] rounded-full border-[0.5px] lg:border border-color-1 flex items-center justify-center"
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
    );
};

export default Testimonials;
