import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Results",
  description:
    "What AlienAI engagements typically deliver — measured in revenue, cost, hours, and time-to-production.",
};

const metrics = [
  { value: "30 — 60%", label: "Reduction in cost-to-serve", note: "Across tier-1 support and back-office work." },
  { value: "120 +", label: "Human-hours returned weekly", note: "Reclaimed from repetitive judgments and document review." },
  { value: "8 wks", label: "Median time-to-production", note: "From kickoff to a system carrying real load." },
  { value: "24 / 7", label: "Always-on revenue motion", note: "Outbound, qualification, and pipeline triage that does not sleep." },
  { value: "< 1 s", label: "Decisions to action", note: "From data signal to executed step, with full audit trail." },
  { value: "100%", label: "Production-grade by default", note: "Every engagement ships with evals, observability, and rollback." },
];

const stories = [
  {
    sector: "Industrial distribution",
    system: "AI Document Intelligence System",
    accent: "ember",
    title: "Quote turnaround compressed from days to minutes.",
    summary:
      "A B2B distributor deployed our Document Intelligence System against tens of thousands of SKUs, configured with their pricing rules, inventory feeds, and freight tables. Customer-ready quotes now draft in under 30 seconds.",
    impact: [
      "Quote turnaround compressed from days to minutes.",
      "Win-rate on quotes responded to within 1 hour rose meaningfully.",
      "Reclaimed roughly two full-time desks worth of hours per week.",
    ],
  },
  {
    sector: "Financial services",
    system: "AI Document Intelligence System",
    accent: "ember",
    title: "Claims-review hours cut in half, error rate held.",
    summary:
      "A regional insurer deployed our Document Intelligence System against the claims queue — extracting fields, scoring risk, routing ambiguous cases to the right human. Same engine, configured to their forms, their policies, and their regulator.",
    impact: [
      "Manual review hours reduced by more than half on routine claims.",
      "Material-error rate held below the prior human baseline.",
      "Every decision auditable, with the model that made it preserved.",
    ],
  },
  {
    sector: "B2B SaaS",
    system: "AI Sales Automation System",
    accent: "ink",
    title: "Outbound that finally sounded like a person.",
    summary:
      "A growth team replaced a templated sequence engine with our Sales Automation System — researching prospects, drafting personalized outbound, queueing it for human approval. The same engine, configured to their ICP, voice, and CRM.",
    impact: [
      "Reply rates doubled vs. the prior templated baseline.",
      "Reps moved more time into conversations and less into research.",
      "Pipeline coverage rose without adding headcount.",
    ],
  },
];

const accentBg: Record<string, string> = {
  ember: "bg-ember",
  ink: "bg-ink",
};
const accentText: Record<string, string> = {
  ember: "text-ember-deep",
  ink: "text-ink",
};

export default function ResultsPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-6">/ Results</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-ink max-w-[20ch]">
              Measured in revenue, cost, and hours returned.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              These are the ranges our engagements typically land in. They are
              not promises — every business is different — but they are the
              outcomes we orient every project toward, and the standard we hold
              ourselves to before we declare a system done.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {metrics.map((m, i) => (
              <Reveal key={m.label} as="li" delay={0.04 + (i % 3) * 0.04}>
                <article className="card rounded-2xl p-7 md:p-8 h-full flex flex-col gap-4">
                  <span className="metric text-[56px] md:text-[68px] text-ink">{m.value}</span>
                  <span className="display text-[18px] md:text-[20px] text-ink leading-[1.2]">
                    {m.label}
                  </span>
                  <span className="text-[13.5px] leading-[1.55] text-graphite">{m.note}</span>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32 bg-linen/60 border-y border-ink/10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Deployments</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,5.5vw,72px)] text-ink max-w-[22ch] mb-14 md:mb-20">
              Deployments, by sector and system.
            </h2>
          </Reveal>

          <div className="flex flex-col gap-8 md:gap-12">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={0.06 + i * 0.06}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-ink/10 last:border-0 last:pb-0">
                  <div className="md:col-span-5 flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`inline-block h-2 w-2 rounded-full ${accentBg[s.accent]}`} />
                      <span className={`font-mono text-[11px] tracking-[0.18em] uppercase ${accentText[s.accent]}`}>
                        {s.sector}
                      </span>
                    </div>
                    <h3 className="display text-[26px] md:text-[34px] leading-[1.1] text-ink">
                      {s.title}
                    </h3>
                    <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                      Deployed: {s.system}
                    </p>
                  </div>
                  <div className="md:col-span-7 flex flex-col gap-5">
                    <p className="text-[15.5px] leading-[1.65] text-graphite">{s.summary}</p>
                    <ul className="flex flex-col gap-2.5">
                      {s.impact.map((b) => (
                        <li key={b} className="flex gap-3 text-[14.5px] leading-[1.55] text-ink">
                          <span className={`mt-[10px] h-px w-3 ${accentBg[s.accent]} shrink-0`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-14 text-[13px] text-graphite-soft italic max-w-[80ch]">
              Note: deployments are anonymized and generalized for
              confidentiality. Specifics, reference customers, and signed case
              studies are available under NDA at the diligence stage.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-3xl bg-ink text-parchment p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <h2 className="display text-[28px] md:text-[40px] leading-[1.1] text-parchment max-w-[28ch]">
              Curious what a system like this would look like in your business?
            </h2>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-between gap-3 bg-parchment text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember hover:text-ink transition-colors group whitespace-nowrap"
            >
              <span>Start a conversation</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-parchment">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
