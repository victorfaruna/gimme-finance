"use client";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

export default function RegionSelector() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Popover
      onOpenChange={() => setIsModalOpen(!isModalOpen)}
      open={isModalOpen}
    >
      <PopoverTrigger asChild>
        <div className="logo-container flex hover:cursor-pointer border border-[var(--header-color-1)]/40 items-center gap-1 bg-[var(--header-color-1)]/[0.04] text-[var(--header-color-1)] backdrop-blur-xs self-start rounded-full p-1 pr-2">
          <div className="country-logo">
            <Image
              className="size-[22px] md:size-[25px]"
              src="/logos/usd.svg"
              alt="Country Flag"
              width={25}
              height={25}
            />
          </div>
          <div className="region-label text-[10px] md:text-[14px] font-medium font-poppins">
            EN
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="size-3 shadow-2xl text-[var(--header-color-1)]"
            style={{ textShadow: "0 0 2px rgba(0,0,0,0.4)" }}
          >
            {!isModalOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            )}
          </svg>
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        side="bottom"
        className="w-[200px] md:w-[400px] mt-2 border-color-1/[0.05] border-[2px] rounded-[8px] lg:rounded-[10px] flex flex-col gap-4"
      >
        <p className="text-[0.8rem] uppercase text-color-1/60 font-medium ">
          Select your region
        </p>
        <div>
          <p className="text-[0.8rem]">
            Sorry we don&apos;t have any data for your region!
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
