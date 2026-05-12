import { Reveal } from "@/components/primitives/Reveal";

const areas = [
  {
    name: "Finance & Accounting",
    body: "Close acceleration, invoice intelligence, controls & audit assistance, FP&A copilots, anomaly detection on the GL.",
  },
  {
    name: "Sales & Revenue",
    body: "Pipeline triage, account research, personalized outbound, deal scoring, forecast intelligence, pricing & quote automation.",
  },
  {
    name: "Marketing",
    body: "Lifecycle content systems, segmentation, attribution analysis, brief-to-asset generation, campaign measurement copilots.",
  },
  {
    name: "Customer Operations",
    body: "Tier-1 support resolution, billing & account agents, escalation triage, knowledge-grounded responses with audit trails.",
  },
  {
    name: "People & HR",
    body: "Recruiting screen and source, internal-mobility intelligence, policy Q&A, onboarding copilots, attrition signal modeling.",
  },
  {
    name: "Operations & Supply",
    body: "Demand forecasting, inventory optimization, procurement intelligence, logistics exception handling, vendor scoring.",
  },
  {
    name: "Legal & Compliance",
    body: "Contract abstraction, clause comparison, policy adherence checks, regulatory monitoring, redline copilots.",
  },
  {
    name: "Engineering & IT",
    body: "Internal copilots, runbook automation, ticket classification, log-anomaly detection, code-review and migration assistants.",
  },
  {
    name: "Executive Office",
    body: "Board-ready briefings, cross-functional intelligence layers, strategic scenario modeling, investor-update automation.",
  },
];

export function Areas() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-32 bg-parchment">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ Functional areas</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-20 items-end">
            <h2 className="md:col-span-8 display-tight text-[clamp(40px,6.5vw,88px)] text-ink">
              Where we build.
            </h2>
            <p className="md:col-span-4 text-[16px] leading-[1.65] text-graphite">
              Every department of a modern business has work that AI software is
              now genuinely good at. We focus on the areas where the work is
              repeatable, the data is yours, and the upside compounds.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/10">
          {areas.map((a, i) => (
            <Reveal key={a.name} as="li" delay={0.03 + (i % 3) * 0.03}>
              <article className="flex flex-col gap-3 md:gap-4 p-5 md:p-9 border-b border-r border-ink/10 h-full">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-graphite-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="inline-block h-[2px] w-7 bg-ember opacity-90" />
                </div>
                <h3 className="display text-[22px] md:text-[26px] text-ink leading-[1.1]">
                  {a.name}
                </h3>
                <p className="text-[14.5px] leading-[1.65] text-graphite">
                  {a.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
