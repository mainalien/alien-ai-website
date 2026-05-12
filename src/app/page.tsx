import { Hero } from "@/components/sections/Hero";
import { Solutions } from "@/components/sections/Solutions";
import { Areas } from "@/components/sections/Areas";
import { Outcomes } from "@/components/sections/Outcomes";
import { Process } from "@/components/sections/Process";
import { Principles } from "@/components/sections/Principles";
import { ClosingCTA } from "@/components/sections/ClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Solutions />
      <Areas />
      <Outcomes />
      <Process />
      <Principles />
      <ClosingCTA />
    </>
  );
}
