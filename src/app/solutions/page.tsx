import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Production AI systems for recruiting, customer operations, documents, sales, knowledge, and workflow. Built once. Deployed to your stack.",
};

const families = [
  {
    family: "Recruiting",
    accent: "ember",
    headline: "The AI Recruiting System.",
    body: "Source, screen, schedule, and onboard at scale. The same proven system that runs continuously across your roles — configured to your hiring bar, your tone, and your stack. We plug it into your ATS, calendar, and inbox; it handles the rest.",
    deliverables: [
      "Continuous sourcing across channels",
      "Screening against your role criteria",
      "Auto-scheduling with calendar integration",
      "Candidate-grounded interview prep for hiring managers",
      "Pipeline analytics and bias-monitoring dashboards",
    ],
    connectors: "ATS · Google Calendar / Outlook · Email · LinkedIn · Greenhouse / Lever / Workday",
    ideal: "Recruiting teams that need to fill more roles faster — without growing the recruiting team.",
  },
  {
    family: "Customer Operations",
    accent: "ink",
    headline: "The AI Customer Operations System.",
    body: "Tier-1 support, billing inquiries, account changes, and escalation triage — running 24/7 in the help desk you already use. Same engine, trained on your SOPs, your tone, and your edge cases.",
    deliverables: [
      "Tier-1 resolution and deflection",
      "Billing, returns, and account-change automation",
      "Internal helpdesk and IT triage",
      "Escalation classification with full context",
      "Audit-grade logging of every action taken",
    ],
    connectors: "Zendesk · Intercom · Salesforce Service · Slack · Stripe · custom REST/SOAP",
    ideal: "Operations leaders whose cost-to-serve is rising faster than revenue.",
  },
  {
    family: "Documents",
    accent: "ember",
    headline: "The AI Document Intelligence System.",
    body: "Extract, classify, and reason over the documents your business runs on — contracts, claims, invoices, SOPs, RFPs, regulatory filings — with confidence scores and source citations on every output.",
    deliverables: [
      "Contract abstraction and clause extraction",
      "Claims and invoice processing",
      "RFP, RFI, and questionnaire response drafting",
      "Compliance and policy checks",
      "Document-grounded Q&A with citations",
    ],
    connectors: "S3 / GCS / Azure Blob · SharePoint · NetDocuments · iManage · DocuSign · ERP",
    ideal: "Legal, finance, claims, and procurement teams drowning in PDFs.",
  },
  {
    family: "Sales",
    accent: "ember",
    headline: "The AI Sales Automation System.",
    body: "Pipeline triage, account research, personalized outbound, and pre-call briefs — running continuously in your CRM. The same engine that builds your prospecting machine, configured to your ICP and tone.",
    deliverables: [
      "Continuous prospecting and ICP scoring",
      "Personalized outbound at human quality",
      "Inbound qualification and routing in seconds",
      "Pre-call account briefs for every meeting",
      "Pipeline triage that surfaces the right deals",
    ],
    connectors: "Salesforce · HubSpot · Outreach · Apollo · LinkedIn · Gong · email",
    ideal: "Revenue teams whose reps spend more time researching than selling.",
  },
  {
    family: "Knowledge",
    accent: "ink",
    headline: "The AI Knowledge Copilot System.",
    body: "A private answer engine wired into the systems your team already uses — Slack, email, Notion, your data warehouse — so the right answer reaches the right person without another meeting. Permissions, citations, and audit trails baked in.",
    deliverables: [
      "Domain-grounded answer engine",
      "Slack, email, and IDE copilots",
      "Search across docs, meetings, and tickets",
      "Privacy-respecting RAG over your corpus",
      "Role-aware permissions and access controls",
    ],
    connectors: "Slack · Notion · Confluence · Google Drive · SharePoint · Snowflake / BigQuery",
    ideal: "Knowledge-work teams whose institutional memory is locked in tribal channels.",
  },
  {
    family: "Workflow",
    accent: "ember",
    headline: "The AI Workflow Engine.",
    body: "Long-running agents that complete multi-step work end-to-end — researching, calling tools, executing, recovering from failure, handing back results with a full audit trail. Built to operate for hours, not seconds.",
    deliverables: [
      "Multi-step agent orchestration",
      "Tool use across your internal APIs",
      "Robust retries, fallbacks, and human-in-the-loop",
      "Full audit trail and replayability",
      "Cost, latency, and quality observability",
    ],
    connectors: "Any REST / GraphQL / gRPC service · webhooks · queue / pub-sub",
    ideal: "Teams replacing whole workflows, not individual tasks.",
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
            <p className="eyebrow-accent mb-6">/ Systems</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-ink max-w-[18ch]">
              Production AI systems, ready to deploy.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              Six systems we have built, hardened in production, and license
              to the businesses that need them. The engine is the same. The
              configuration is yours. We connect it to your stack, train it
              on your reality, and keep it running.
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
                  <div className="flex flex-col gap-1 pt-2">
                    <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                      Standard connectors
                    </span>
                    <p className="text-[13.5px] leading-[1.55] text-ink">
                      {f.connectors}
                    </p>
                  </div>
                  <p className="text-[13.5px] leading-[1.55] text-graphite-soft italic">
                    Ideal for: {f.ideal}
                  </p>
                </div>
                <div className="md:col-span-7">
                  <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft mb-4">
                    What the system does
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
                / Need something else?
              </p>
              <h2 className="display text-[28px] md:text-[40px] leading-[1.1] text-parchment max-w-[24ch]">
                Don&rsquo;t see your work yet? Our roadmap is open.
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
