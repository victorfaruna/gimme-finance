import React from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-[2rem] px-[7rem] flex items-center justify-between">
      <div className="logo w-[250px] flex justify-start">
        <Logo />
      </div>

      <nav>
        <ul className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/career">Career</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>
      <div className="buttons w-[250px] flex justify-end">
        <div className="inner flex bg-black rounded-full py-[0.12rem] px-[0.1rem] ">
          <button className="px-6 py-[0.4rem] bg-color-main text-color-1 rounded-full">
            Login
          </button>
          <button className="px-3 py-[0.4rem] text-color-main">Signup</button>
        </div>
      </div>
    </header>
  );
}
