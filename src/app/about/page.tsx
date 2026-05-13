import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "AlienAI is a software firm building production AI applications for businesses — quietly, deliberately, and at production grade.",
};

const beliefs = [
  {
    title: "AI is not a strategy. It is software.",
    body: "If a business has the right problem, it does not need a strategy deck to recognize it. It needs the software written. We are here to write the software.",
  },
  {
    title: "Production is the entire job.",
    body: "Most of what is called &ldquo;AI&rdquo; today is a demo. A short, brilliant, unaccountable demo. The gap between a working prototype and a system a business can actually rely on is the entire job — and that is the gap we close.",
  },
  {
    title: "Outcomes, not output.",
    body: "We are paid when the dollar is saved, the deal is opened, or the hour is reclaimed. Not when the slideware is delivered. Every deployment is anchored to a measurable result the business cares about.",
  },
  {
    title: "Living at the cutting edge.",
    body: "We work where AI and innovation meet — closer to the frontier than to the consensus. The models, frameworks, and infrastructure we build on are the same ones reshaping the field; we ship them in production while most firms are still reading the papers.",
  },
];

const facts = [
  { k: "Founded", v: "2024" },
  { k: "Operating", v: "United States, remote-first" },
  { k: "Business model", v: "Productized AI systems, licensed as SaaS" },
  { k: "Time-to-production", v: "Median 8 weeks from kickoff" },
  { k: "What we deliver", v: "Production software, configured to your stack" },
  { k: "What we don’t do", v: "AI strategy decks, generic chatbots, custom builds-from-scratch" },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-ember/35 bg-ember/8 pl-3 pr-4 py-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
              <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ember">
                The intersection of AI &amp; innovation
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-ink max-w-[20ch]">
              Unusually serious about software.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              AlienAI builds production AI systems for the work modern
              businesses run on. We operate where AI and innovation meet —
              shipping systems that wouldn&rsquo;t have been possible last
              year, on infrastructure still being invented this year. Each
              system is built once, hardened in production, and licensed to
              the businesses that need it. The engine is the same. The
              configuration is yours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="mx-auto max-w-[1320px] grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
          <div className="lg:col-span-7 flex flex-col gap-10 md:gap-12">
            {beliefs.map((b, i) => (
              <Reveal key={b.title} delay={0.06 + i * 0.05}>
                <article className="flex flex-col gap-3">
                  <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ember-deep">
                    {String(i + 1).padStart(2, "0")} · Belief
                  </span>
                  <h2 className="display text-[26px] md:text-[34px] leading-[1.1] text-ink">
                    {b.title}
                  </h2>
                  <p
                    className="text-[15.5px] leading-[1.7] text-graphite"
                    dangerouslySetInnerHTML={{ __html: b.body }}
                  />
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-5">
            <Reveal>
              <div className="sticky top-28 rounded-2xl border border-ink/12 bg-linen/60 p-8 md:p-10">
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-graphite-soft mb-6">
                  / The short version
                </p>
                <dl className="flex flex-col divide-y divide-ink/10">
                  {facts.map((f) => (
                    <div key={f.k} className="grid grid-cols-12 gap-4 py-3">
                      <dt className="col-span-5 font-mono text-[11px] tracking-[0.14em] uppercase text-graphite">
                        {f.k}
                      </dt>
                      <dd className="col-span-7 text-[14px] text-ink">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 pt-6 border-t border-ink/10">
                  <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-graphite-soft mb-3">
                    / The name
                  </p>
                  <p className="text-[14px] leading-[1.6] text-graphite">
                    &ldquo;Alien&rdquo; — adjective, from the Latin{" "}
                    <span className="italic">alienus</span>: belonging to another,
                    of a different order. The only sense in which we use it.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 md:py-28 bg-ink text-parchment">
        <div className="mx-auto max-w-[1320px] flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <Reveal>
            <h2 className="display-tight text-[clamp(36px,5.5vw,72px)] leading-[1] text-parchment max-w-[18ch]">
              The firm we wanted to hire, so we built it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-between gap-3 bg-parchment text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember transition-colors group whitespace-nowrap"
            >
              <span>Work with us</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-parchment">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
