import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <Features />
    </main>
  );
}
