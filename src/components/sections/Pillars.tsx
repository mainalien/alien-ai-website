import { Reveal } from "@/components/primitives/Reveal";

const pillars = [
  {
    index: "01",
    title: "Decision systems",
    body: "Software that makes high-stakes judgments your business depends on — calibrated, observable, and accountable to outcomes, not benchmarks.",
  },
  {
    index: "02",
    title: "Autonomous workflows",
    body: "Long-running agents that complete work, not chat about it. Designed to operate for hours, recover from failure, and hand off to humans cleanly.",
  },
  {
    index: "03",
    title: "Domain-tuned intelligence",
    body: "Models and pipelines built for one company's reality. Trained on what you actually have, evaluated on what you actually need.",
  },
];

export function Pillars() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <p className="eyebrow mb-6">What we make</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="display text-[clamp(40px,6vw,80px)] max-w-[20ch] mb-16 md:mb-24">
            Three kinds of software,
            <br />
            <span className="italic">all of it production-grade.</span>
          </h2>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {pillars.map((p, i) => (
            <Reveal key={p.index} as="li" delay={0.1 + i * 0.08}>
              <div className="flex flex-col gap-5 border-t border-ink/15 pt-6">
                <span className="font-mono text-[12px] tracking-[0.16em] text-graphite-soft">
                  {p.index}
                </span>
                <h3 className="display text-[28px] md:text-[34px] leading-[1.05]">
                  {p.title}
                </h3>
                <p className="text-[16px] leading-[1.6] text-graphite max-w-[42ch]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
