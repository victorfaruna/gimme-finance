import Image from "next/image";
import React from "react";

export default function Logo({ theme }: { theme: string }) {
  return (
    <div className="flex items-center gap-[1px]">
      <Image
        className="drop-shadow-xl"
        src={`${
          theme === "transparent" ? "/logos/logo.svg" : "/logos/logo-dark.svg"
        }`}
        alt="Gimme Logo"
        width={45}
        height={45}
        layout="fixed"
      />

      {/* <div className="font-bold leading-none flex text-[22px] items-end text-color-3">
        <span className="text-color-3 text-[23px]">G</span>
        <span className="text-black">imme.</span>
      </div> */}
    </div>
  );
}
