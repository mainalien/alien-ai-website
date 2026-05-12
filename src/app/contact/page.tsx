import type { Metadata } from "next";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to AlienAI. We respond personally, usually within a day. Tell us what you are trying to build.",
};

const expectations = [
  {
    k: "Response time",
    v: "Within one business day. Often within the hour.",
  },
  {
    k: "Who answers",
    v: "A principal. Not a sales chatbot, not a BDR sequence.",
  },
  {
    k: "What to send",
    v: "A few sentences on the problem. Diagrams, docs, and details welcome.",
  },
  {
    k: "What we send back",
    v: "An honest read on fit, a rough shape for the engagement, and next steps.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-20 md:pt-28 pb-20">
        <div className="mx-auto max-w-[1320px] grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal>
              <p className="eyebrow-accent">/ Contact</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="display-tight text-[clamp(56px,9vw,144px)] text-ink leading-[0.95] max-w-[14ch]">
                Tell us what you&rsquo;re building.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="max-w-[58ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
                A short note about the work you have in mind is plenty to start.
                We will read it carefully, and reply with an honest sense of
                whether we are the right firm for it — and what it would take
                to ship.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href="mailto:aliens@alienai.llc?subject=New%20project%20inquiry"
                className="inline-flex items-center justify-between gap-3 bg-ink text-parchment rounded-full pl-7 pr-3 py-3.5 text-[16px] md:text-[18px] font-medium no-underline hover:bg-ember-deep transition-colors group w-fit"
              >
                <span>aliens@alienai.llc</span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-parchment text-ink group-hover:text-ember-deep transition-colors">
                  →
                </span>
              </a>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-ink/12 bg-linen/60 p-8 md:p-10">
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-graphite-soft mb-6">
                  / What to expect
                </p>
                <dl className="flex flex-col divide-y divide-ink/10">
                  {expectations.map((f) => (
                    <div key={f.k} className="grid grid-cols-12 gap-4 py-4">
                      <dt className="col-span-5 font-mono text-[11px] tracking-[0.14em] uppercase text-graphite">
                        {f.k}
                      </dt>
                      <dd className="col-span-7 text-[14px] leading-[1.5] text-ink">
                        {f.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-3xl bg-ink text-parchment p-10 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ember mb-3">
                  / Direct
                </p>
                <p className="display text-[20px] md:text-[24px] leading-[1.2] text-parchment">
                  aliens@alienai.llc
                </p>
                <p className="text-[13.5px] leading-[1.55] text-parchment/70 mt-2">
                  All inquiries: new projects, partnership, press.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ember mb-3">
                  / Locale
                </p>
                <p className="display text-[20px] md:text-[24px] leading-[1.2] text-parchment">
                  United States · Remote
                </p>
                <p className="text-[13.5px] leading-[1.55] text-parchment/70 mt-2">
                  Engagements available globally.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-ember mb-3">
                  / Office hours
                </p>
                <p className="display text-[20px] md:text-[24px] leading-[1.2] text-parchment">
                  Mon — Fri, 9 — 6 CT
                </p>
                <p className="text-[13.5px] leading-[1.55] text-parchment/70 mt-2">
                  Replies often arrive sooner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
