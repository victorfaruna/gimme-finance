import React from "react";
import { ClassNameValue } from "tailwind-merge";

export default function Logo({
  theme,
  className,
}: {
  theme: string;
  className?: ClassNameValue;
}) {
  const color = { dark: "#374BFB", light: "#fff" };
  return (
    <div
      className={`flex items-center gap-[1px] *:transition-all *:duration-700 ${className}`}
    >
      <svg
        className="size-[2.2rem] md:size-[3rem]"
        viewBox="0 0 100 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 37.4999C0 16.7892 16.7893 0 37.4999 0H71.0523C72.5057 0 73.6839 1.17819 73.6839 2.63157V14.2543C73.6839 18.1905 70.493 21.3815 66.5568 21.3815H42.3682C38.2261 21.3815 34.8683 24.7393 34.8683 28.8815V44.8025C34.8683 48.9446 38.2261 52.3024 42.3683 52.3024H66.184C70.3261 52.3024 73.6839 55.6603 73.6839 59.8024V72.3681C73.6839 73.8215 72.5057 74.9997 71.0523 74.9997H37.4999C16.7893 74.9997 0 58.2105 0 37.4999Z"
          fill={theme === "light" ? color.dark : color.light}
        />
        <rect
          x="77.6328"
          width="22.3683"
          height="22.3683"
          rx="7.49997"
          fill={theme === "light" ? color.dark : color.light}
        />
        <path
          d="M77.6325 25H92.5008C96.6429 25 100.001 28.3579 100.001 32.5V67.4998C100.001 71.6419 96.6429 74.9998 92.5008 74.9998H85.1324C80.9903 74.9998 77.6325 71.6419 77.6325 67.4998V55.5262C77.6325 51.3841 74.2746 48.0262 70.1325 48.0262H45.6589C41.5168 48.0262 38.1589 44.6684 38.1589 40.5263V32.5C38.1589 28.3578 41.5168 25 45.6589 25H77.6325Z"
          fill={theme === "light" ? color.dark : color.light}
        />
      </svg>

      {/* <div className="font-bold leading-none flex text-[22px] items-end text-color-3">
        <span className="text-color-3 text-[23px]">G</span>
        <span className="text-black">imme.</span>
      </div> */}
    </div>
  );
}
