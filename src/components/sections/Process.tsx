import { Reveal } from "@/components/primitives/Reveal";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    duration: "Week 1",
    body: "We start with the workflow, not the model. Where the cost sits, where the revenue leaks, where a human is doing what software should.",
  },
  {
    n: "02",
    title: "Design",
    duration: "Week 2",
    body: "We scope a single, sharp deliverable. The smallest system that can earn its way into production — and the path it takes to get there.",
  },
  {
    n: "03",
    title: "Build",
    duration: "Weeks 3–8",
    body: "We build in your environment, against your data, with the evaluations and observability the system will need to be trusted on day 100.",
  },
  {
    n: "04",
    title: "Operate",
    duration: "Ongoing",
    body: "We hand off a working system — with the dashboards, the failure modes, and the runbooks. Or we stay on and run it ourselves.",
  },
];

export function Process() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ How we engage</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-20 items-end">
            <h2 className="md:col-span-7 display-tight text-[clamp(36px,6vw,80px)] text-ink">
              Four phases. One outcome.
            </h2>
            <p className="md:col-span-5 text-[16.5px] leading-[1.65] text-graphite">
              We do not bill for slideware, discovery cycles, or strategy decks.
              Every engagement is a path from a real problem to a system that
              quietly does the work.
            </p>
          </div>
        </Reveal>

        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={0.06 + i * 0.06}>
              <article className="flex flex-col gap-3 md:gap-5 p-5 md:p-7 rounded-2xl border border-ink/12 h-full bg-parchment">
                <div className="flex items-baseline justify-between">
                  <span className="metric text-[44px] text-ember-deep">
                    {s.n}
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                    {s.duration}
                  </span>
                </div>
                <h3 className="display text-[22px] md:text-[24px] leading-[1.1] text-ink">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-graphite">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
