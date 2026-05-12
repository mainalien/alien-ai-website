import { Reveal } from "@/components/primitives/Reveal";

const solutions = [
  {
    index: "01",
    family: "Revenue",
    title: "Pipeline & deal automation",
    body: "AI that researches accounts, drafts outbound, qualifies inbound, and triages your pipeline 24/7 — so reps wake up to a pre-prioritized day instead of a blank CRM.",
    chips: ["Outbound", "Lead scoring", "Deal triage"],
  },
  {
    index: "02",
    family: "Cost",
    title: "Support & operations agents",
    body: "Domain-tuned support, billing, and back-office agents that resolve the first 60–80% of tickets before a human sees them, with a clean human handoff for the rest.",
    chips: ["Tier-1 support", "Back-office", "Escalations"],
  },
  {
    index: "03",
    family: "Knowledge",
    title: "Document & contract intelligence",
    body: "Extract, classify, and reason over the documents your business runs on — contracts, claims, invoices, SOPs — at a fraction of the time and cost of human review.",
    chips: ["Contracts", "Claims", "Audit"],
  },
  {
    index: "04",
    family: "Decisions",
    title: "Forecasting & risk systems",
    body: "Calibrated decision systems for pricing, demand, fraud, and risk — built on your data, evaluated against your outcomes, deployed with the observability you need to trust them.",
    chips: ["Forecasting", "Pricing", "Risk scoring"],
  },
  {
    index: "05",
    family: "People",
    title: "Internal copilots & search",
    body: "Private copilots and answer engines wired into the systems your team actually uses — so the right answer reaches the right person without another meeting.",
    chips: ["Copilots", "Search", "RAG"],
  },
  {
    index: "06",
    family: "Workflow",
    title: "Autonomous workflows",
    body: "Long-running agents that complete multi-step work end-to-end — recovering from failure, calling tools, and handing back results with a full audit trail.",
    chips: ["Agents", "Tools", "Audit trail"],
  },
];

export function Solutions() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-parchment">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ What we build</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 items-end">
            <h2 className="md:col-span-8 display-tight text-[clamp(40px,6.5vw,88px)] text-ink">
              Six families of software, all engineered to operate.
            </h2>
            <p className="md:col-span-4 text-[16px] leading-[1.65] text-graphite">
              Every engagement is bespoke, but the shapes recur. These are the
              categories of system we are unusually good at shipping into
              production — and keeping there.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.index} as="li" delay={0.06 + (i % 3) * 0.05}>
              <article className="card rounded-2xl p-7 md:p-8 h-full flex flex-col gap-5 transition-colors hover:border-ink/20">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-terracotta-deep">
                    {s.family}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-soft">
                    {s.index}
                  </span>
                </div>
                <h3 className="display text-[24px] md:text-[28px] leading-[1.1] text-ink">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-graphite flex-1">
                  {s.body}
                </p>
                <ul className="flex flex-wrap gap-1.5 pt-2">
                  {s.chips.map((c) => (
                    <li
                      key={c}
                      className="font-mono text-[10.5px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-ink/6 text-ink-soft"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
