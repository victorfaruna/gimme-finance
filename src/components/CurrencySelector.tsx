import Image from "next/image";

export default function CurrecySelector() {
  return (
    <button className="logo-container flex hover:cursor-pointer border border-[var(--header-color-1)]/40 items-center gap-1 bg-[var(--header-color-1)]/[0.04] text-[var(--header-color-1)] backdrop-blur-xs self-start rounded-full p-1 pr-2">
      <div className="country-logo">
        <Image
          className="size-[22px] md:size-[25px]"
          src="/logos/usd.svg"
          alt="Country Flag"
          width={25}
          height={25}
        />
      </div>
      <div className="currency-label text-[12px] md:text-[14px] font-medium font-poppins">
        USD
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="size-4 shadow-2xl text-[var(--header-color-1)]"
        style={{ textShadow: "0 0 2px rgba(0,0,0,0.4)" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </button>
  );
}
