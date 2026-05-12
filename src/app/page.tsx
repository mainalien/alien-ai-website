import { Hero } from "@/components/sections/Hero";
import { Pillars } from "@/components/sections/Pillars";
import { Principles } from "@/components/sections/Principles";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Principles />
      <ClosingCTA />
    </>
  );
}
