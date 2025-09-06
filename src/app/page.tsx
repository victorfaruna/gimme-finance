import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import Concepts from "@/components/Concepts";
import Randit from "@/components/Randit";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhatWeDo />
            <Concepts />
            <Randit />

            <Footer />
        </main>
    );
}
