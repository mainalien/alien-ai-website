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
    body: "We are paid when the dollar is saved, the deal is opened, or the hour is reclaimed. Not when the slideware is delivered. Every engagement is anchored to a measurable result the business cares about.",
  },
  {
    title: "Small firms ship better software.",
    body: "We are deliberately small. Fewer hands. Fewer handoffs. Senior people on every part of the work. The kind of firm we would want to hire ourselves.",
  },
];

const facts = [
  { k: "Founded", v: "2024" },
  { k: "Operating", v: "United States, remote-first" },
  { k: "Engagement length", v: "6 weeks to ongoing" },
  { k: "Time-to-production", v: "Median 8 weeks" },
  { k: "What we deliver", v: "Production software, not slideware" },
  { k: "What we don’t do", v: "AI strategy, generic chatbots, retainers without outcomes" },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-6">/ About</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-inkwell max-w-[20ch]">
              A small firm, unusually serious about software.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              AlienAI builds production AI applications for businesses. We are
              deliberately small, deliberately quiet, and deliberately careful
              about the work we agree to take on. We do one thing — write
              software that makes our clients quietly more capable — and we
              orient everything else around doing it well.
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
                  <span className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-terracotta-deep">
                    {String(i + 1).padStart(2, "0")} · Belief
                  </span>
                  <h2 className="display text-[26px] md:text-[34px] leading-[1.1] text-inkwell">
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
              <div className="sticky top-28 rounded-2xl border border-inkwell/12 bg-linen/60 p-8 md:p-10">
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-graphite-soft mb-6">
                  / The short version
                </p>
                <dl className="flex flex-col divide-y divide-inkwell/10">
                  {facts.map((f) => (
                    <div key={f.k} className="grid grid-cols-12 gap-4 py-3">
                      <dt className="col-span-5 font-mono text-[11px] tracking-[0.14em] uppercase text-graphite">
                        {f.k}
                      </dt>
                      <dd className="col-span-7 text-[14px] text-inkwell">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 pt-6 border-t border-inkwell/10">
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

      <section className="px-6 md:px-10 py-24 md:py-28 bg-inkwell text-parchment">
        <div className="mx-auto max-w-[1320px] flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <Reveal>
            <h2 className="display-tight text-[clamp(36px,5.5vw,72px)] leading-[1] text-parchment max-w-[18ch]">
              The firm we wanted to hire, so we built it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/contact/"
              className="inline-flex items-center justify-between gap-3 bg-parchment text-inkwell rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-terracotta transition-colors group whitespace-nowrap"
            >
              <span>Work with us</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-inkwell text-parchment">
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
