"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import RegionSelector from "./RegionSelector";

export default function Header() {
    const [headerTheme, setHeaderTheme] = useState<
        "dark" | "light" | "transparent"
    >("transparent");
    const [showHeaderShadow, setShowHeaderShadow] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
        if (!isDrawerOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            setHeaderTheme("transparent");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowHeaderShadow(true);
            } else {
                setShowHeaderShadow(false);
            }
            //...
            if (window.scrollY > 100) {
                setHeaderTheme("light");
            } else {
                setHeaderTheme("transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            suppressHydrationWarning
            className={`${
                headerTheme === "light"
                    ? "[--header-color-main:rgb(255,255,255);--header-color-1:rgb(255,255,255);--header-bg:rgb(0,0,0,0.3);--header-button-color:rgb(36,103,227)]"
                    : headerTheme === "dark"
                    ? "[--header-color-main]:rgb(0,0,0);[--header-color-1]:rgb(255,255,255);--header-bg:rgb(0,0,0);--header-button-color:rgb(36,103,227)]"
                    : headerTheme === "transparent" &&
                      "[--header-color-main:rgb(255,255,255);--header-color-1:rgb(255,255,255);--header-bg:transparent;--header-button-color:rgba(0,0,0,0.05)]"
            } ${
                showHeaderShadow &&
                "shadow-[0px_0px_200px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
            }  w-full py-[0.8rem] md:py-[1rem] px-[var(--x-padding)] fixed z-[6] flex items-center justify-between bg-[var(--header-bg)] transition-all duration-700`}
        >
            <div className="left w-[250px] flex items-center">
                <div className="inner flex gap-4 items-center">
                    <Link href={"/"} className="logo">
                        <Logo theme={headerTheme} />
                    </Link>

                    <div className="cs">
                        <RegionSelector />
                    </div>
                </div>
            </div>

            <nav
                className={`${
                    isDrawerOpen
                        ? "max-lg:translate-y-0"
                        : "max-lg:translate-y-[-100%] transition-all duration-700"
                } text-color-main lg:text-[var(--header-color-1)] transition-all  duration-700 text-[15px] font-medium  absolute lg:relative z-[-1] left-0 top-0`}
            >
                <ul className="flex flex-col h-screen lg:h-auto lg:flex-row p-[1rem] pt-[100px] lg:pt-0 w-screen lg:w-auto bg-color-1 lg:bg-transparent items-start lg:items-center gap-8">
                    <Link href="/#features">Features</Link>
                    <Link href="/about">About</Link>
                    <Link href="/career">Career</Link>
                    <li className="flex gap-1.5 items-center cursor-pointer">
                        <span>Company</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                        </svg>
                    </li>
                </ul>
            </nav>
            <div className="buttons w-[250px] flex justify-end">
                <button
                    // style={{ textShadow: " 0px 0px 10px rgba(0, 0, 0, 0.4)" }}
                    className="hidden lg:block bg-[var(--header-button-color)] border-[1.5px] border-white/60 backdrop-blur-[5px] transition-all duration-700 hover:cursor-pointer py-[12px] px-[20px] text-[0.9rem] drop-shadow-xl rounded-md self-start text-white font-bold"
                >
                    Get Started - <span className="font-normal">100% free</span>
                </button>

                <div className="hamburger hidden max-lg:block">
                    <button
                        className="text-[var(--header-color-1)]"
                        onClick={handleDrawerToggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-7"
                        >
                            {!isDrawerOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
