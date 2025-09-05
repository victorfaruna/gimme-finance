import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import GoingLiveSoon from "@/components/GoingLiveSoon";
import MoreFeatures from "@/components/MoreFeatures";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
    return (
        <main className="flex flex-col z-[-1]">
            <HeroSection />
            <WhatWeDo />
            <Features />
            <Testimonials />
            <GoingLiveSoon />
            <MoreFeatures />
        </main>
    );
}
