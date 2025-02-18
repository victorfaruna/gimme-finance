import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/*  */}
      <div className="font-bold leading-none flex text-[22px] items-end gap-[1px] text-color-3">
        <Image
          className="size-[24px] object-contain"
          src={"/images/logo.svg"}
          width={20}
          height={20}
          alt="logo"
        />
        <p className="text-black">imme.</p>
      </div>
    </div>
  );
}
