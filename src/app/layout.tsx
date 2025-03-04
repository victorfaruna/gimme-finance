import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const aeonik = localFont({
  src: [
    {
      path: "../assets/fonts/Aeonik-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Aeonik-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Aeonik-Bold.otf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "GIMME - A financial inclusive world for everyone.",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${poppins.variable} ${aeonik.variable} antialiased [--x-padding:1.2rem] lg:[--x-padding:6rem]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
