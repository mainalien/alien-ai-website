import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/primitives/Reveal";
import { systems, systemBySlug } from "@/lib/systems";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return systems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sys = systemBySlug(slug);
  if (!sys) return { title: "System not found" };
  return {
    title: sys.title,
    description: `${sys.tagline} ${sys.body.slice(0, 110)}…`,
    openGraph: {
      title: `${sys.title} — AlienAI`,
      description: sys.tagline,
    },
  };
}

const accentBg: Record<string, string> = {
  ember: "bg-ember",
  ink: "bg-ink",
};
const accentText: Record<string, string> = {
  ember: "text-ember-deep",
  ink: "text-ink",
};

export default async function SystemDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const sys = systemBySlug(slug);
  if (!sys) notFound();

  return (
    <>
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-12 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/systems/"
                className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite hover:text-ink no-underline"
              >
                / Systems
              </Link>
              <span className="font-mono text-[10.5px] text-graphite-soft">·</span>
              <span className={`font-mono text-[10.5px] tracking-[0.18em] uppercase ${accentText[sys.accent]}`}>
                {sys.family}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(44px,7.5vw,112px)] text-ink max-w-[18ch]">
              {sys.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 md:mt-8 display text-[clamp(22px,3vw,32px)] text-ink max-w-[28ch]">
              {sys.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-8 max-w-[64ch] text-[17px] md:text-[19px] leading-[1.65] text-graphite">
              {sys.body}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:aliens@alienai.llc?subject=Inquiry%20about%20the%20AI%20Recruiting%20System"
                className="inline-flex items-center justify-between gap-3 bg-ink text-parchment rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:bg-ember-deep transition-colors group"
              >
                <span>Start a project</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-ink group-hover:text-ember-deep transition-colors">
                  →
                </span>
              </a>
              <Link
                href="/systems/"
                className="inline-flex items-center justify-between gap-3 border border-ink/15 text-ink rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:border-ink/40 transition-colors group"
              >
                <span>See all systems</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/8 text-ink group-hover:bg-ink group-hover:text-parchment transition-colors">
                  ↗
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 border-t border-ink/12 pt-8 md:pt-10">
              {sys.outcomes.map((o) => (
                <div key={o.label} className="flex flex-col gap-1">
                  <span className="metric text-[34px] md:text-[44px] text-ink">
                    {o.value}
                  </span>
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">
                    {o.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32 bg-linen/60 border-y border-ink/10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Capabilities</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,6vw,72px)] text-ink max-w-[20ch] mb-8 md:mb-16">
              What the system does, end-to-end.
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {sys.capabilities.map((c, i) => (
              <Reveal key={c} as="li" delay={0.05 + (i % 3) * 0.04}>
                <article className="card rounded-2xl p-5 md:p-7 h-full flex gap-4">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-soft pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-[1.55] text-ink">{c}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Standard connectors</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-8 md:mb-14 items-end">
              <h2 className="md:col-span-8 display-tight text-[clamp(36px,6vw,72px)] text-ink">
                Plugs into the stack you already use.
              </h2>
              <p className="md:col-span-4 text-[16px] leading-[1.65] text-graphite">
                These are the integrations we ship with. Anything else
                connects via REST, GraphQL, webhooks, or SFTP — typically in a
                week.
              </p>
            </div>
          </Reveal>

          <div className="border-t border-l border-ink/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {sys.connectors.map((c, i) => (
              <Reveal key={c.category} delay={0.04 + (i % 3) * 0.03}>
                <div className="p-6 md:p-8 border-b border-r border-ink/10 h-full flex flex-col gap-3">
                  <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ember-deep">
                    {c.category}
                  </p>
                  <ul className="flex flex-wrap gap-1.5">
                    {c.tools.map((t) => (
                      <li
                        key={t}
                        className="font-mono text-[11px] tracking-[0.06em] px-2.5 py-1 rounded-full bg-ink/6 text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32 bg-linen/60 border-y border-ink/10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Deployment</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,6vw,72px)] text-ink max-w-[24ch] mb-8 md:mb-14">
              From kickoff to production in eight weeks.
            </h2>
          </Reveal>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {sys.deployment.map((s, i) => (
              <Reveal key={s.title} as="li" delay={0.05 + i * 0.06}>
                <article className="flex flex-col gap-3 md:gap-5 p-5 md:p-7 rounded-2xl border border-ink/12 h-full bg-parchment">
                  <div className="flex items-baseline justify-between">
                    <span className="metric text-[40px] text-ember-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                      {s.week}
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

      <section className="px-6 md:px-10 py-14 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Common questions</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,6vw,72px)] text-ink max-w-[18ch] mb-10 md:mb-14">
              The questions buyers ask.
            </h2>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {sys.faqs.map((f, i) => (
              <Reveal key={f.q} as="li" delay={0.05 + i * 0.05}>
                <article className="flex flex-col gap-3">
                  <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-graphite-soft">
                    Q · 0{i + 1}
                  </p>
                  <h3 className="display text-[22px] md:text-[26px] leading-[1.15] text-ink">
                    {f.q}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-graphite">{f.a}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-3xl bg-ink text-parchment p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ember mb-4">
                / Start with this system
              </p>
              <h2 className="display text-[28px] md:text-[44px] leading-[1.1] text-parchment max-w-[20ch]">
                Want to see {sys.title.toLowerCase().replace("the ", "")} in your stack?
              </h2>
            </div>
            <a
              href={`mailto:aliens@alienai.llc?subject=${encodeURIComponent(
                "Inquiry about " + sys.title
              )}`}
              className="inline-flex items-center justify-between gap-3 bg-parchment text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember hover:text-ink transition-colors group whitespace-nowrap"
            >
              <span>Start a project</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-parchment">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
