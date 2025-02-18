import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/*  */}
      <div className="font-bold flex text-[22px] items-center gap-[1px] text-color-3">
        <Image
          className="size-[24px] object-contain"
          src={"/images/logo.svg"}
          width={20}
          height={20}
          alt="logo"
        />
        <span className="text-black">imme.</span>
      </div>
    </div>
  );
}
