import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-[2rem] px-[7rem] max-lg:px-[2rem] flex items-center justify-between">
      <div className="logo w-[250px] flex justify-start">
        <Logo />
      </div>

      <nav className="max-lg:hidden">
        <ul className="flex items-center gap-6">
          <Link href="/" className="active">
            Home
          </Link>
          <Link href="/about">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
      <div className="buttons w-[250px] flex justify-end">
        <div className="inner flex bg-black rounded-full py-[0.12rem] px-[0.1rem] max-lg:hidden">
          <button className="px-6 py-[0.4rem] bg-color-main text-color-1 rounded-full">
            Login
          </button>
          <button className="px-3 py-[0.4rem] text-color-main">Signup</button>
        </div>

        <div className="hamburger hidden max-lg:block">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
