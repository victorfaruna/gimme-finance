import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import Concepts from "@/components/Concepts";
import Randit from "@/components/Randit";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col">
            <HeroSection />
            <WhatWeDo />
            <Concepts />
            <Randit />
            {/* <Testimonials />
            <GoingLiveSoon />
            <MoreFeatures /> */}
            <Footer />
        </main>
    );
}
