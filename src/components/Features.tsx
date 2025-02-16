import Image from "next/image";
import React, { useMemo } from "react";

export default function Features() {
  const FEATURES = useMemo(() => {
    return [
      {
        title: "A Title Here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "A Title Here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ];
  }, []);
  return (
    <div className="features-container w-full flex items-center justify-center px-[7rem]">
      <div className="features-inner w-full flex justify-between gap-20">
        <div className="featues-left w-[600px] h-[600px] flex justify-center items-center relative">
          <Image
            className="w-[550px] object-contain absolute z-[-1] rotate-[-40deg]"
            unoptimized
            src="/images/twirl.webp"
            width={550}
            height={550}
            alt=""
          />
          <Image
            className="w-[400px] object-contain"
            unoptimized
            src="/images/mockup-2.webp"
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="w-[70px] object-contain absolute z-[-1] mt-[-400px] ml-[-500px] rotate-[20deg]"
            unoptimized
            src="/images/star.svg"
            width={70}
            height={70}
            alt=""
          />
        </div>

        <div className="features-right flex flex-1 flex-col gap-4 pt-[50px]">
          <p className="uppercase text-[1.1rem] font-medium tracking-[2px] text-color-3 leading-none">
            * Features
          </p>
          <p className="text-[2.5rem] font-radhiumz font-bold leading-none">
            Gimme Finance
          </p>

          <div className="features-list flex flex-col gap-4">
            {FEATURES.map((item, i) => (
              <div className="item" key={i}>
                <div className="title font-medium text-[17px]">
                  {item.title}
                </div>
                <div className="description text-color-1/80">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
}
