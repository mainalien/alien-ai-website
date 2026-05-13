import { Reveal } from "@/components/primitives/Reveal";

const solutions = [
  {
    index: "01",
    family: "Recruiting",
    title: "The AI Recruiting System",
    body: "Source, screen, schedule, and onboard at scale. Plugs into your ATS, calendar, and inbox. The same system, configured to your roles and your bar.",
    chips: ["Sourcing", "Screening", "Scheduling"],
  },
  {
    index: "02",
    family: "Customer Ops",
    title: "The AI Customer Operations System",
    body: "Tier-1 support, billing inquiries, and escalation triage — running 24/7 in your help desk. The same system, trained on your SOPs and your tone.",
    chips: ["Tier-1", "Billing", "Escalations"],
  },
  {
    index: "03",
    family: "Documents",
    title: "The AI Document Intelligence System",
    body: "Contracts, claims, invoices, RFPs — extracted, classified, and reasoned over at machine speed, with confidence scores and source citations on every output.",
    chips: ["Contracts", "Claims", "Invoices"],
  },
  {
    index: "04",
    family: "Sales",
    title: "The AI Sales Automation System",
    body: "Pipeline triage, account research, personalized outbound, pre-call briefs. The same system that runs your prospecting, configured to your ICP and your CRM.",
    chips: ["Pipeline", "Outbound", "Research"],
  },
  {
    index: "05",
    family: "Knowledge",
    title: "The AI Knowledge Copilot System",
    body: "A private answer engine wired into the stack your team already uses — Slack, email, your docs, your warehouse. Every answer cited. Every permission respected.",
    chips: ["RAG", "Copilots", "Search"],
  },
  {
    index: "06",
    family: "Workflow",
    title: "The AI Workflow Engine",
    body: "Long-running agents that complete multi-step work end-to-end — calling tools, recovering from failure, handing back results with a full audit trail.",
    chips: ["Agents", "Tools", "Audit trail"],
  },
];

export function Solutions() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-32 bg-parchment">
      <div className="mx-auto max-w-[1320px]">
        <Reveal>
          <p className="eyebrow-accent mb-5">/ Our systems</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-20 items-end">
            <h2 className="md:col-span-8 display-tight text-[clamp(36px,6.5vw,88px)] text-ink">
              Six production AI systems, ready to deploy.
            </h2>
            <p className="md:col-span-4 text-[16px] leading-[1.65] text-graphite">
              Each system is built once, hardened in production, and licensed
              to the businesses that need it. We handle the integration to your
              stack. The same proven engine, deployed to your reality.
            </p>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.index} as="li" delay={0.06 + (i % 3) * 0.05}>
              <article className="card rounded-2xl p-5 md:p-8 h-full flex flex-col gap-4 md:gap-5 transition-colors hover:border-ink/20">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ember-deep">
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
