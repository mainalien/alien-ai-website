import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom AI systems for revenue, cost reduction, knowledge work, decisions, copilots, and autonomous workflows.",
};

const families = [
  {
    family: "Revenue",
    accent: "ember",
    headline: "Pipeline that fills itself.",
    body: "AI that researches accounts, drafts personalized outbound, qualifies inbound, and triages your pipeline continuously — so your reps wake up to a pre-prioritized day instead of a blank CRM.",
    deliverables: [
      "Continuous prospecting and ICP scoring",
      "Personalized outbound at human quality",
      "Inbound qualification and routing in seconds",
      "Pre-call account briefs for every meeting",
      "Pipeline triage that surfaces the right deals",
    ],
    ideal: "Revenue and growth teams whose reps spend more time researching than selling.",
  },
  {
    family: "Cost",
    accent: "ember",
    headline: "A 24/7 first line for the work no one wants to do.",
    body: "Domain-tuned support, billing, and back-office agents that resolve 60–80% of repetitive work autonomously, with a clean human handoff for the rest. Built around your systems and your SOPs — not a generic chatbot.",
    deliverables: [
      "Tier-1 support resolution and deflection",
      "Billing, returns, and account-change agents",
      "Internal helpdesk and IT triage",
      "Escalation classification with full context",
      "Audit-grade logging of every action taken",
    ],
    ideal: "Operations leaders whose cost-to-serve is rising faster than revenue.",
  },
  {
    family: "Knowledge",
    accent: "ink",
    headline: "The documents your business runs on, read at machine speed.",
    body: "Extract, classify, and reason over contracts, claims, invoices, SOPs, RFPs, and regulatory filings — at a fraction of the time and cost of human review, with confidence scores and source citations on every output.",
    deliverables: [
      "Contract abstraction and clause extraction",
      "Claims and invoice processing",
      "RFP, RFI, and questionnaire response drafting",
      "Compliance and policy checks",
      "Document-grounded Q&A with citations",
    ],
    ideal: "Legal, finance, claims, and procurement teams drowning in PDFs.",
  },
  {
    family: "Decisions",
    accent: "ember",
    headline: "Calibrated judgment on the choices that compound.",
    body: "Forecasting, pricing, and risk systems built on your data and evaluated against your outcomes — not against benchmarks. Deployed with the observability and rollback tooling your business actually needs to trust them in production.",
    deliverables: [
      "Demand and revenue forecasting",
      "Dynamic pricing and discount intelligence",
      "Fraud, churn, and risk scoring",
      "What-if simulators for planning teams",
      "Model evaluation and drift monitoring",
    ],
    ideal: "Finance, supply chain, and risk teams making millions of small calls a year.",
  },
  {
    family: "People",
    accent: "ember",
    headline: "A private copilot that knows your business.",
    body: "Internal answer engines and copilots wired into the systems your team actually uses — Slack, email, your data warehouse, your knowledge base — so the right answer reaches the right person without another meeting.",
    deliverables: [
      "Domain-grounded answer engine",
      "Slack, email, and IDE copilots",
      "Document and meeting search across your stack",
      "Privacy-respecting RAG over your corpus",
      "Role-aware permissions and access controls",
    ],
    ideal: "Knowledge-work teams whose institutional memory is locked in tribal channels.",
  },
  {
    family: "Workflow",
    accent: "ink",
    headline: "Autonomous systems that close the loop.",
    body: "Long-running agents that complete multi-step work end-to-end — researching, calling tools, executing, recovering from failure, and handing back results with a full audit trail. Built to operate for hours, not seconds.",
    deliverables: [
      "Multi-step agent orchestration",
      "Tool use across your internal APIs",
      "Robust retries, fallbacks, and human-in-the-loop",
      "Full audit trail and replayability",
      "Cost, latency, and quality observability",
    ],
    ideal: "Teams replacing whole workflows, not just individual tasks.",
  },
];

const accentClass: Record<string, string> = {
  ember: "text-ember-deep",
  ink: "text-ink",
};

const accentBg: Record<string, string> = {
  ember: "bg-ember",
  ink: "bg-ink",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-6">/ Solutions</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-ink max-w-[18ch]">
              Custom AI systems, by category.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              Every engagement is bespoke, but the shapes recur. Below are six
              families of system we are unusually good at shipping into
              production and keeping there. If your problem looks like one of
              these — or doesn&rsquo;t — write to us.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1320px] flex flex-col gap-8 md:gap-10">
          {families.map((f, i) => (
            <Reveal key={f.family} delay={0.04 + i * 0.04}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-linen/60 border border-ink/10">
                <div className="md:col-span-5 flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className={`inline-block h-2 w-2 rounded-full ${accentBg[f.accent]}`} />
                    <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accentClass[f.accent]}`}>
                      {f.family} · 0{i + 1}
                    </span>
                  </div>
                  <h2 className="display text-[30px] md:text-[40px] leading-[1.05] text-ink">
                    {f.headline}
                  </h2>
                  <p className="text-[15.5px] leading-[1.65] text-graphite">
                    {f.body}
                  </p>
                  <p className="text-[13.5px] leading-[1.55] text-graphite-soft italic">
                    Ideal for: {f.ideal}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft mb-4">
                    Typical deliverables
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {f.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-[14.5px] leading-[1.5] text-ink">
                        <span className={`mt-[10px] h-px w-3 ${accentBg[f.accent]} shrink-0`} />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-3xl bg-ink text-parchment p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ember mb-4">
                / Doesn&rsquo;t fit?
              </p>
              <h2 className="display text-[28px] md:text-[40px] leading-[1.1] text-parchment max-w-[24ch]">
                The best engagements are the ones that don&rsquo;t match a category yet.
              </h2>
            </div>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-between gap-3 bg-parchment text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember hover:text-ink transition-colors group whitespace-nowrap"
            >
              <span>Tell us what you need</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-parchment group-hover:bg-ink">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
