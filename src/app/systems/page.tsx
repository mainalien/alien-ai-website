import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";
import { systems } from "@/lib/systems";

export const metadata: Metadata = {
  title: "Systems",
  description:
    "Production AI systems for recruiting, customer operations, documents, sales, knowledge, and workflow. Built once. Deployed to your stack.",
};

const accentClass: Record<string, string> = {
  ember: "text-ember-deep",
  ink: "text-ink",
};

const accentBg: Record<string, string> = {
  ember: "bg-ember",
  ink: "bg-ink",
};

export default function SystemsPage() {
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
          {systems.map((s, i) => (
            <Reveal key={s.slug} delay={0.04 + i * 0.04}>
              <Link
                href={`/systems/${s.slug}/`}
                className="group block no-underline"
              >
                <article className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 p-8 md:p-12 rounded-3xl bg-linen/60 border border-ink/10 transition-colors group-hover:border-ink/25">
                  <div className="md:col-span-5 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span className={`inline-block h-2 w-2 rounded-full ${accentBg[s.accent]}`} />
                      <span className={`font-mono text-[11px] tracking-[0.2em] uppercase ${accentClass[s.accent]}`}>
                        {s.family} · 0{i + 1}
                      </span>
                    </div>
                    <h2 className="display text-[30px] md:text-[40px] leading-[1.05] text-ink">
                      {s.title}
                    </h2>
                    <p className="text-[15.5px] leading-[1.65] text-graphite">
                      {s.tagline}
                    </p>
                    <p className="text-[13.5px] leading-[1.55] text-graphite-soft italic">
                      Ideal for: {s.ideal}
                    </p>
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-ink mt-2 group-hover:text-ember-deep transition-colors">
                      <span>Explore the system</span>
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                  <div className="md:col-span-7">
                    <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft mb-4">
                      What the system does
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {s.capabilities.slice(0, 6).map((d) => (
                        <li key={d} className="flex gap-3 text-[14.5px] leading-[1.5] text-ink">
                          <span className={`mt-[10px] h-px w-3 ${accentBg[s.accent]} shrink-0`} />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
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
