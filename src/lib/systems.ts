export type SystemAccent = "ember" | "ink";

export type SystemDeploymentStep = {
  week: string;
  title: string;
  body: string;
};

export type SystemFAQ = {
  q: string;
  a: string;
};

export type System = {
  slug: string;
  family: string;
  short: string;
  title: string;
  tagline: string;
  body: string;
  accent: SystemAccent;
  ideal: string;
  capabilities: string[];
  outcomes: { value: string; label: string }[];
  connectors: { category: string; tools: string[] }[];
  deployment: SystemDeploymentStep[];
  faqs: SystemFAQ[];
  chips: string[];
};

export const systems: System[] = [
  {
    slug: "recruiting",
    family: "Recruiting",
    short: "Recruiting",
    title: "The AI Recruiting System",
    tagline: "Source, screen, schedule, and onboard at scale.",
    body: "The same proven system that runs continuously across your roles — configured to your hiring bar, your tone, and your stack. We plug it into your ATS, calendar, and inbox; it handles the rest. Your recruiters spend their time on the conversations that matter, not the work that scales.",
    accent: "ember",
    ideal: "Recruiting teams that need to fill more roles faster — without growing the recruiting team.",
    capabilities: [
      "Continuous sourcing across LinkedIn, GitHub, and channels you specify",
      "Screening against your role criteria, your culture signals, your seniority bar",
      "Auto-scheduling with multi-calendar coordination",
      "Candidate-grounded interview prep packets for hiring managers",
      "Personalized outreach in your voice, queued for recruiter approval",
      "Pipeline analytics and bias-monitoring dashboards",
      "Onboarding checklist automation across HRIS and tooling",
      "Diversity reporting with cohort tracking",
    ],
    outcomes: [
      { value: "3x", label: "Roles per recruiter per quarter" },
      { value: "−45%", label: "Time-to-first-interview" },
      { value: "24 / 7", label: "Sourcing motion" },
    ],
    connectors: [
      { category: "ATS", tools: ["Greenhouse", "Lever", "Workday", "Ashby", "Recruitee"] },
      { category: "Calendar", tools: ["Google Calendar", "Outlook", "Cronofy"] },
      { category: "Email", tools: ["Gmail", "Outlook", "SendGrid"] },
      { category: "Channels", tools: ["LinkedIn", "GitHub", "AngelList", "custom job boards"] },
      { category: "HRIS", tools: ["Rippling", "Gusto", "BambooHR", "Workday HCM"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We map your hiring funnel, ICP for each role, and the channels you already use." },
      { week: "Weeks 2–3", title: "Configure", body: "We tailor the screening criteria, voice, and approval workflow to your team." },
      { week: "Weeks 3–6", title: "Connect", body: "We integrate the system into your ATS, calendars, and outreach channels with SSO and SCIM." },
      { week: "Ongoing", title: "Operate", body: "The system runs continuously. We tune weekly, ship improvements monthly, and stay on call." },
    ],
    faqs: [
      { q: "Will candidates know it's AI?", a: "Yes — we never deceive. Every outreach message is approved by a recruiter, and the system identifies itself when it interacts directly with a candidate." },
      { q: "How does it handle DEI requirements?", a: "Bias monitoring is built into the screening layer. Demographic data is never used in decisioning; we audit for adverse impact and surface the data your team needs to defend its hiring." },
      { q: "Can it handle executive roles?", a: "Yes, but the value is largest at higher volume. For executive search we typically run a hybrid mode — system does the upstream work, human takes the conversation." },
      { q: "What if our ATS isn't in the standard connector list?", a: "We've connected to most ATSes via API or webhooks. Add a week to deployment for a non-standard connector." },
    ],
    chips: ["Sourcing", "Screening", "Scheduling", "Onboarding"],
  },
  {
    slug: "customer-operations",
    family: "Customer Operations",
    short: "Customer Ops",
    title: "The AI Customer Operations System",
    tagline: "Tier-1 support, billing, and escalation triage — 24/7, in your help desk.",
    body: "Domain-tuned support, billing inquiries, account changes, and escalation triage running continuously in the help desk you already use. Same engine, trained on your SOPs, your tone, and your edge cases. Resolves the long tail autonomously, and hands off to humans cleanly when judgment is required.",
    accent: "ink",
    ideal: "Operations leaders whose cost-to-serve is rising faster than revenue.",
    capabilities: [
      "Tier-1 resolution across email, chat, and ticket queues",
      "Billing, returns, and account-change automation",
      "Escalation classification with full conversational context",
      "Internal helpdesk and IT triage",
      "Audit-grade logging of every action and citation",
      "Customer sentiment + churn-risk flagging in real time",
      "Multilingual support with consistent voice across languages",
      "Side-by-side mode: AI drafts, human approves",
    ],
    outcomes: [
      { value: "60–80%", label: "Tier-1 deflection rate" },
      { value: "< 2 m", label: "Median first response" },
      { value: "−50%", label: "Cost-to-serve" },
    ],
    connectors: [
      { category: "Help desk", tools: ["Zendesk", "Intercom", "Salesforce Service Cloud", "Freshdesk", "Help Scout"] },
      { category: "CRM", tools: ["Salesforce", "HubSpot", "Pipedrive"] },
      { category: "Billing", tools: ["Stripe", "Chargebee", "Recurly", "NetSuite"] },
      { category: "Messaging", tools: ["Slack", "Microsoft Teams", "Discord"] },
      { category: "Telephony", tools: ["Twilio", "Amazon Connect", "RingCentral"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We map your support workflows, SOPs, and current escalation patterns." },
      { week: "Weeks 2–3", title: "Configure", body: "We train the system on your tone, your historical tickets, and your policies." },
      { week: "Weeks 3–6", title: "Connect", body: "We integrate to your help desk, CRM, and billing systems with audit logging end-to-end." },
      { week: "Ongoing", title: "Operate", body: "We monitor resolution quality, retrain weekly, and adjust escalation thresholds based on outcomes." },
    ],
    faqs: [
      { q: "What happens when the system isn't confident?", a: "It hands off to a human with the full conversational context, suggested response, and confidence score. No customer gets an ambiguous answer." },
      { q: "Will it sound like our brand?", a: "Yes. We train on a corpus of your historical responses and your style guide; we audit every output against tone before launch." },
      { q: "How do you handle PII and regulated data?", a: "PII is redacted before any model call; HIPAA, SOC 2 Type 2, and ISO 27001 deployments available. Data residency is configurable per customer." },
      { q: "Can it close the loop on actions, not just answers?", a: "Yes — issuing refunds, updating accounts, applying credits, swapping shipping addresses. Each action is logged and reversible." },
    ],
    chips: ["Tier-1", "Billing", "Escalations", "Audit"],
  },
  {
    slug: "documents",
    family: "Documents",
    short: "Documents",
    title: "The AI Document Intelligence System",
    tagline: "Extract, classify, and reason over the documents your business runs on.",
    body: "Contracts, claims, invoices, RFPs, SOPs, regulatory filings — read at machine speed with confidence scores and source citations on every output. The same engine, configured to your forms, your taxonomies, your edge cases. We deploy it where the documents already live.",
    accent: "ember",
    ideal: "Legal, finance, claims, and procurement teams drowning in PDFs.",
    capabilities: [
      "Contract abstraction and clause-by-clause comparison",
      "Claims processing with confidence-scored field extraction",
      "Invoice automation with three-way match",
      "RFP, RFI, and questionnaire response drafting",
      "Compliance and policy adherence checks",
      "Document-grounded Q&A with full source citations",
      "Redline and amendment detection across versions",
      "Multi-language document handling at native quality",
    ],
    outcomes: [
      { value: "−65%", label: "Review hours on routine documents" },
      { value: "< 30 s", label: "Per-document turnaround" },
      { value: "≤ baseline", label: "Material-error rate" },
    ],
    connectors: [
      { category: "Storage", tools: ["S3", "Google Cloud Storage", "Azure Blob", "Box", "Dropbox"] },
      { category: "Document management", tools: ["SharePoint", "NetDocuments", "iManage", "M-Files"] },
      { category: "Contract lifecycle", tools: ["DocuSign", "Ironclad", "ContractPodAi", "Agiloft"] },
      { category: "ERP", tools: ["SAP", "NetSuite", "Oracle", "Sage"] },
      { category: "Custom", tools: ["REST", "SFTP", "email ingestion"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We catalog the document types, volumes, and downstream systems where outputs land." },
      { week: "Weeks 2–4", title: "Configure", body: "We train extractors on your taxonomies and evaluate against your historical decisions." },
      { week: "Weeks 4–8", title: "Connect", body: "We integrate to your storage and downstream systems; every extraction carries a citation back to the source." },
      { week: "Ongoing", title: "Operate", body: "We monitor extraction quality, flag drift, and ship model improvements as the document landscape changes." },
    ],
    faqs: [
      { q: "How do you handle handwriting and scans?", a: "Native — the system handles OCR, handwriting, and mixed-quality scans with confidence scores per field." },
      { q: "What if our forms change?", a: "The system tolerates schema drift; major template changes are flagged and re-trained within a week." },
      { q: "Can we audit every extraction?", a: "Yes — every output carries a citation back to the source document, page, and bounding box. Audit-friendly by design." },
      { q: "What about hallucination?", a: "Outputs are grounded in source. We never let the system free-generate where extraction is expected. Hallucination is structurally prevented, not just monitored." },
    ],
    chips: ["Contracts", "Claims", "Invoices", "Compliance"],
  },
  {
    slug: "sales",
    family: "Sales",
    short: "Sales",
    title: "The AI Sales Automation System",
    tagline: "Pipeline that fills itself, briefs that write themselves.",
    body: "Pipeline triage, account research, personalized outbound, and pre-call briefs — running continuously in your CRM. The same engine that builds your prospecting machine, configured to your ICP, your voice, and your sales cycle.",
    accent: "ember",
    ideal: "Revenue teams whose reps spend more time researching than selling.",
    capabilities: [
      "Continuous prospecting and ICP scoring",
      "Personalized outbound at human quality, queued for rep approval",
      "Inbound qualification and routing in seconds",
      "Pre-call account briefs for every meeting",
      "Pipeline triage surfacing deals that need a human",
      "Pricing and proposal generation",
      "Call summarization and CRM hygiene",
      "Forecast intelligence and pipeline anomaly detection",
    ],
    outcomes: [
      { value: "2x", label: "Reply rate vs. templated" },
      { value: "−40%", label: "Time on non-selling work" },
      { value: "24 / 7", label: "Pipeline coverage" },
    ],
    connectors: [
      { category: "CRM", tools: ["Salesforce", "HubSpot", "Pipedrive", "Close"] },
      { category: "Outbound", tools: ["Outreach", "Salesloft", "Apollo", "Smartlead"] },
      { category: "Research", tools: ["LinkedIn Sales Navigator", "ZoomInfo", "Clearbit", "Crunchbase"] },
      { category: "Conversation", tools: ["Gong", "Chorus", "Fireflies"] },
      { category: "Email", tools: ["Gmail", "Outlook"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We map your ICP, your sequence library, and the data you already collect." },
      { week: "Weeks 2–3", title: "Configure", body: "We train the system on your top reps' voice and your highest-converting plays." },
      { week: "Weeks 3–6", title: "Connect", body: "We integrate to CRM, outbound, and research tools with approval queues for reps." },
      { week: "Ongoing", title: "Operate", body: "We tune messaging weekly, retire what stops working, and surface plays that scale." },
    ],
    faqs: [
      { q: "Is this just another sequencer?", a: "No. A sequencer sends what you wrote. This system writes what your top rep would write, given the prospect — and queues it for approval." },
      { q: "How does it handle deliverability?", a: "We integrate with your existing infrastructure (Outreach, Salesloft, etc.) and respect their sending limits and reputation tooling. The system never spams." },
      { q: "Can reps still personalize?", a: "Yes — every draft is a starting point. Reps edit in the same tools they already use. Most reps end up sending 80% of drafts unedited within a month." },
      { q: "What about regulated industries?", a: "We support attorney advertising rules, financial services compliance reviews, and pharma MLR workflows with configurable approval gates." },
    ],
    chips: ["Pipeline", "Outbound", "Research", "Forecasts"],
  },
  {
    slug: "knowledge",
    family: "Knowledge",
    short: "Knowledge",
    title: "The AI Knowledge Copilot System",
    tagline: "A private answer engine for the work your team actually does.",
    body: "A private copilot wired into the systems your team already uses — Slack, email, Notion, your data warehouse — so the right answer reaches the right person without another meeting. Every answer cited. Every permission respected.",
    accent: "ink",
    ideal: "Knowledge-work teams whose institutional memory is locked in tribal channels.",
    capabilities: [
      "Domain-grounded answer engine across your corpus",
      "Slack, email, and IDE copilots",
      "Search across docs, meetings, tickets, and code",
      "Privacy-respecting RAG with role-aware permissions",
      "Citation-first answers — every claim sourced",
      "Meeting summarization and action-item extraction",
      "Onboarding companion for new hires",
      "Institutional memory across team transitions",
    ],
    outcomes: [
      { value: "−70%", label: "Time finding internal answers" },
      { value: "100%", label: "Cited responses" },
      { value: "+40%", label: "Onboarding speed" },
    ],
    connectors: [
      { category: "Messaging", tools: ["Slack", "Microsoft Teams", "Discord"] },
      { category: "Docs", tools: ["Notion", "Confluence", "Google Drive", "SharePoint", "Coda"] },
      { category: "Code", tools: ["GitHub", "GitLab", "Bitbucket"] },
      { category: "Data", tools: ["Snowflake", "BigQuery", "Databricks", "Looker"] },
      { category: "Meetings", tools: ["Gong", "Zoom", "Otter", "Fireflies"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We catalog your knowledge sources, permission boundaries, and the queries your team asks today." },
      { week: "Weeks 2–3", title: "Configure", body: "We index your corpus, train the system on your terminology, and define role-aware access." },
      { week: "Weeks 3–6", title: "Connect", body: "We integrate with Slack, your docs platforms, and your data warehouse. SSO, SCIM, audit logging end-to-end." },
      { week: "Ongoing", title: "Operate", body: "We monitor answer quality, reindex on a cadence, and tune retrieval based on feedback." },
    ],
    faqs: [
      { q: "Where does the data live?", a: "In your cloud or ours — your choice. We support SOC 2 Type 2 and ISO 27001 deployments. Nothing is used to train base models." },
      { q: "How do permissions work?", a: "The system respects the permissions of every source. If you can't see a doc in Confluence, the system won't surface it for you either." },
      { q: "What if it doesn't know the answer?", a: "It says so, and offers to escalate to a human expert. Hallucinated certainty is the worst failure mode — we prevent it structurally." },
      { q: "Can it write, not just retrieve?", a: "Yes — it drafts onboarding docs, summarizes meetings, writes weekly updates. All grounded in your sources and cited." },
    ],
    chips: ["Copilots", "RAG", "Search", "Meetings"],
  },
  {
    slug: "workflow",
    family: "Workflow",
    short: "Workflow",
    title: "The AI Workflow Engine",
    tagline: "Autonomous systems that close the loop end-to-end.",
    body: "Long-running agents that complete multi-step work — researching, calling tools, executing, recovering from failure, handing back results with a full audit trail. Built to operate for hours, not seconds. Built to be trusted, not just impressive.",
    accent: "ember",
    ideal: "Teams replacing whole workflows, not just individual tasks.",
    capabilities: [
      "Multi-step agent orchestration across systems",
      "Tool use across your internal APIs and external services",
      "Robust retries, fallbacks, and human-in-the-loop checkpoints",
      "Full audit trail and replayability of every decision",
      "Cost, latency, and quality observability per step",
      "Side-effect isolation: sandbox first, commit second",
      "Versioned playbooks with rollback",
      "Compliance-aware execution with approval gates",
    ],
    outcomes: [
      { value: "10x", label: "Throughput on routine workflows" },
      { value: "100%", label: "Replayable decisions" },
      { value: "≤ minutes", label: "Workflow completion (was days)" },
    ],
    connectors: [
      { category: "Internal APIs", tools: ["REST", "GraphQL", "gRPC", "webhooks"] },
      { category: "Queues", tools: ["SQS", "Pub/Sub", "Kafka", "Rabbit"] },
      { category: "Identity", tools: ["Okta", "Azure AD", "Auth0", "Workforce IAM"] },
      { category: "Observability", tools: ["Datadog", "New Relic", "Honeycomb", "Grafana"] },
      { category: "Workflow infra", tools: ["Temporal", "Airflow", "Prefect", "Custom"] },
    ],
    deployment: [
      { week: "Week 1", title: "Match", body: "We trace the workflow end-to-end, identify side-effect boundaries, and define approval gates." },
      { week: "Weeks 2–4", title: "Configure", body: "We codify the playbook, train the agents, and run it in shadow mode against historical data." },
      { week: "Weeks 4–8", title: "Connect", body: "We integrate with your APIs, queues, and identity stack. Audit trails are wired before go-live." },
      { week: "Ongoing", title: "Operate", body: "We monitor success rates, latency, and cost per workflow. Improvements ship monthly." },
    ],
    faqs: [
      { q: "How do you prevent the agent from going rogue?", a: "Three layers: scoped tool access, side-effect sandboxing, and human-in-the-loop checkpoints at every irreversible step. Everything is replayable." },
      { q: "Can it call third-party APIs?", a: "Yes — with rate-limit awareness, credential scoping, and full logging. We support OAuth flows, API key rotation, and webhook callbacks." },
      { q: "What about long-running work?", a: "Built for it. Agents can run for hours, persist state, recover from failures, and resume from checkpoints — without losing context or audit trail." },
      { q: "How is this different from an LLM workflow tool?", a: "Workflow tools assemble LLM calls. We engineer agents — with evaluation, observability, and accountability. The difference is whether you'd be willing to put it on call." },
    ],
    chips: ["Agents", "Tools", "Orchestration", "Audit"],
  },
];

export const systemBySlug = (slug: string): System | undefined =>
  systems.find((s) => s.slug === slug);
