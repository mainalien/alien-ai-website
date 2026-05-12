import { Reveal } from "@/components/primitives/Reveal";

export function ClosingCTA() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-40">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="eyebrow mb-10">Begin</p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="display text-[clamp(48px,8vw,120px)] leading-[1.0] max-w-[16ch]">
            If the work you have <span className="italic">in mind</span> is the
            kind that should be done <span className="italic">well</span>,
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href="mailto:aliens@alienai.llc"
            className="group mt-14 inline-flex items-baseline gap-4 no-underline"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-graphite group-hover:text-ink transition-colors">
              Write to us
            </span>
            <span className="display italic text-[clamp(32px,5vw,64px)] underline decoration-1 underline-offset-[10px] decoration-ink/25 text-ink group-hover:decoration-halo group-hover:text-halo transition-colors">
              aliens@alienai.llc →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
