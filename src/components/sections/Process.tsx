import { Reveal } from "@/components/primitives/Reveal";

const steps = [
  {
    n: "01",
    title: "Match",
    duration: "Week 1",
    body: "We map the work you are trying to automate to the right system — the one that already exists, the one that already runs. No exploratory builds.",
  },
  {
    n: "02",
    title: "Configure",
    duration: "Weeks 2–3",
    body: "We tailor the system to your data, your SOPs, your edge cases, and your tone. The engine is shared; the configuration is yours.",
  },
  {
    n: "03",
    title: "Connect",
    duration: "Weeks 3–6",
    body: "We integrate the system into the stack you already use — CRM, ATS, ERP, help desk, knowledge base, data warehouse — with the security your team requires.",
  },
  {
    n: "04",
    title: "Operate",
    duration: "Ongoing",
    body: "The system runs continuously, with dashboards, audits, observability, and clear human handoffs. You subscribe; we keep it running and improving.",
  },
];

export function Process() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ How we deploy</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-20 items-end">
            <h2 className="md:col-span-7 display-tight text-[clamp(36px,6vw,80px)] text-ink">
              Four phases. One operating system.
            </h2>
            <p className="md:col-span-5 text-[16.5px] leading-[1.65] text-graphite">
              We do not build from scratch every time. We deploy proven AI
              systems, configured and connected to your reality — and then we
              run them for you.
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
