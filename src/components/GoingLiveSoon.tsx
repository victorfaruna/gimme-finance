import Image from "next/image";
import React from "react";

export default function GoingLiveSoon() {
  return (
    <div className="w-full  text-color-1 px-[var(--x-padding)] py-[3rem] mb-[-1rem] rounded-b-[1rem] bg-white">
      <div className="inner bg-[grey]/5 p-[1.2rem] md:p-[5rem] flex flex-col md:flex-row gap-5 justify-center items-center rounded-[1rem]">
        <div className="left w-full lg:w-[50%] flex flex-col gap-4">
          <p className="text-[2rem] md:text-[4rem] font-bold leading-none">
            We're going live soon...
          </p>
          <p className="text-[0.7rem] md:text-[1.3rem] font-medium">
            By offering a comprehensive financial system with an emphasis on
            maximizing accessibility and convenience of use, the Gimme Ecosystem
            offers a number of advantages to its customers.
          </p>
        </div>
        <div className="right flex-[1]">
          <Image
            className="w-full rounded-[1.5rem] object-cover"
            src="/images/gls-1.webp"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
