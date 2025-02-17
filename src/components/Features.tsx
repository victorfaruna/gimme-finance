import Image from "next/image";
import React, { useMemo } from "react";

export default function Features() {
  const FEATURES = useMemo(() => {
    return [
      {
        title: "Seamless Transactions",
        description:
          "Effortlessly send and receive small payments with minimal fees, making microtransactions more accessible than ever.",
        icon: (
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
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
        ),
      },

      {
        title: "Peer-to-Peer Transfers",
        description:
          "Easily send money to friends, family, or businesses without intermediaries.",
        icon: (
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
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        ),
      },

      {
        title: "Global Decentralized Marketplace",
        description:
          "Global decentralised B2B & B2C platform for merchants and the emerging digital asset economy.",
        icon: (
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
              d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
            />
          </svg>
        ),
      },

      {
        title: "Instant & Secure Payments",
        description:
          "Enjoy fast and secure transactions powered by blockchain technology, ensuring your funds reach their destination without delays.",
        icon: (
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
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        ),
      },
    ];
  }, []);
  return (
    <div className="features-container w-full flex items-center justify-center px-[7rem] max-lg:px-[2rem]">
      <div className="features-inner w-full flex justify-center items-center flex-wrap gap-10 max-lg:flex-col-reverse ">
        <div className="featues-left w-[500px] max-lg:w-[300px] flex justify-center items-center relative">
          <Image
            className="w-[500px] max-md:w-[250px] object-contain absolute z-[-1] rotate-[-40deg]"
            unoptimized
            src="/images/twirl.webp"
            width={550}
            height={550}
            alt=""
          />
          <Image
            className="w-[350px] max-md:w-[180px] object-contain"
            unoptimized
            src="/images/mockup-2.webp"
            width={400}
            height={400}
            alt=""
          />
          <Image
            className="w-[70px] max-md:w-[40px] object-contain absolute z-[-1] top-0 left-0 rotate-[20deg]"
            unoptimized
            src="/images/star.svg"
            width={70}
            height={70}
            alt=""
          />
        </div>

        <div className="features-right flex flex-1 flex-col gap-4 pt-[50px]">
          <p className="uppercase text-[15px] font-bold tracking-[2px] text-color-3 leading-none">
            * Features
          </p>
          <p className="text-[2.5rem] max-lg:text-[1.3rem] font-radhiumz font-bold leading-none">
            Gimme Finance
          </p>

          <div className="features-list flex flex-col gap-6 mt-4">
            {FEATURES.map((item, i) => (
              <div className="item flex  flex-col gap-2" key={i}>
                <div className="title font-medium text-[17px]  max-md:text-[14px] flex gap-2 items-center">
                  <span className="text-color-3">{item.icon && item.icon}</span>
                  {item.title}
                </div>
                <div className="description text-[12px] max-md:text-[10px] text-color-1/80">
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
