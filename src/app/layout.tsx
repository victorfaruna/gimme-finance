import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

const clashDisplay = localFont({
    src: [
        {
            path: "../assets/fonts/ClashDisplay-Regular.otf",
            weight: "400",
        },
        {
            path: "../assets/fonts/ClashDisplay-Medium.otf",
            weight: "500",
        },
        {
            path: "../assets/fonts/ClashDisplay-Semibold.otf",
            weight: "600",
        },
        {
            path: "../assets/fonts/ClashDisplay-Bold.otf",
            weight: "700",
        },
    ],
    display: "swap",
    variable: "--font-clash-display",
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
    title: "Gimme - A financial inclusive world for everyone.",
    description:
        "Gimme connects users to the decentralized financial system of tomorrow, integrated with the core services industries.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-theme="light"
            className="scroll-smooth"
            suppressHydrationWarning={true}
        >
            <body
                className={`${poppins.variable} ${clashDisplay.variable} ${aeonik.variable} antialiased [--x-padding:1.2rem] lg:[--x-padding:6rem] scroll-smooth`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
