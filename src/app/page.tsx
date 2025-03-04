import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import StarLeft from "@/assets/images/lottie-star-left.svg";
import StarRight from "@/assets/images/lottie-star-right.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[5rem] md:gap-[5rem]">
      <HeroSection />
      <div className="flex gap-2 justify-center items-center">
        <Image
          className="size-[130px] lg:size-[160px] max-sm:absolute left-[-2.5rem]"
          src={StarLeft}
          alt=""
        />
        <div className="flex flex-col gap-2 md:gap-0">
          <p className="text-center text-[0.8rem] mx-[0.9rem] lg:text-[1.7rem] text-color-1/70 font-medium leading-none">
            We are building a financial inclusive world using
            {/* We're building a financially inclusive world for all. */}
          </p>
          <div className="flex gap-1 lg:gap-2 items-center justify-center">
            <p className="text-[#5e19b3] font-bold text-[1.5rem] lg:text-[3rem] leading-none tracking-[-1px]">
              Blockchain and Ai.
            </p>
            <Image
              className="size-[30px] lg:size-[75px]"
              src="/abstract/rocket-2.webp"
              width={90}
              height={90}
              alt=""
            />
          </div>
        </div>

        <Image
          className="max-sm:absolute right-0 transform-3d rotate-180 size-[130px] lg:size-[160px]"
          src={StarRight}
          alt=""
        />
      </div>
      <Features />
      <Testimonials />
    </main>
  );
}
