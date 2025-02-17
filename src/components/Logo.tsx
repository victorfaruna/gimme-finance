// import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* <Image
        className="w-[150px] object-contain"
        src={"/images/logo.webp"}
        width={180}
        height={58}
        alt="logo"
      /> */}
      <p className="font-bold text-[24px] text-color-3">
        G<span className="text-black">imme.</span>
      </p>
    </div>
  );
}
