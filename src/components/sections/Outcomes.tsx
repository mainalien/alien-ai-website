import { Reveal } from "@/components/primitives/Reveal";

const outcomes = [
  {
    family: "Revenue",
    headline: "More qualified pipeline, without more headcount.",
    bullets: [
      "Outbound and inbound qualification that runs continuously.",
      "Higher meeting-to-close rates via pre-call account research.",
      "Pipeline triage that surfaces the deals that actually need a human.",
    ],
    proof:
      "Typical engagement returns the cost of the project in pipeline within the first quarter.",
  },
  {
    family: "Cost",
    headline: "Lower cost-to-serve, without lower quality.",
    bullets: [
      "Resolve the long tail of tier-1 work autonomously.",
      "Cut document review and back-office hours by 40–80%.",
      "Compress the cost of every repetitive judgment your team makes.",
    ],
    proof:
      "Operating teams routinely reclaim 100+ hours per week of human attention.",
  },
  {
    family: "Speed",
    headline: "Decisions in seconds, not weeks.",
    bullets: [
      "From request → answer in a single keystroke for your most common asks.",
      "From data → decision without a meeting or a deck.",
      "From signal → action with auditable, reversible AI in the loop.",
    ],
    proof: "Most engagements are in production within 6–10 weeks of kickoff.",
  },
];

export function Outcomes() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-32 bg-linen/60 border-y border-ink/10">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ What changes</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display-tight text-[clamp(36px,6.5vw,88px)] text-ink max-w-[18ch] mb-8 md:mb-20">
            Revenue up. Cost down. Time back.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          {outcomes.map((o, i) => (
            <Reveal key={o.family} delay={0.08 + i * 0.07}>
              <article className="flex flex-col gap-6 h-full">
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2 w-2 rounded-full bg-ember" />
                  <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-graphite">
                    {o.family}
                  </span>
                </div>
                <h3 className="display text-[26px] md:text-[30px] leading-[1.1] text-ink">
                  {o.headline}
                </h3>
                <ul className="flex flex-col gap-3">
                  {o.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-[15.5px] leading-[1.55] text-graphite"
                    >
                      <span className="mt-[10px] h-px w-3 bg-ink shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto pt-4 border-t border-ember/40 text-[13.5px] leading-[1.55] text-graphite italic">
                  {o.proof}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
