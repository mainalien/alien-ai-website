import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";
import { systems } from "@/lib/systems";

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
          {systems.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={0.06 + (i % 3) * 0.05}>
              <Link
                href={`/systems/${s.slug}/`}
                className="card rounded-2xl p-5 md:p-8 h-full flex flex-col gap-4 md:gap-5 transition-colors hover:border-ink/25 no-underline group"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-ember-deep">
                    {s.short}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-graphite-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display text-[24px] md:text-[28px] leading-[1.1] text-ink">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-graphite flex-1">
                  {s.tagline}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {s.chips.map((c) => (
                    <li
                      key={c}
                      className="font-mono text-[10.5px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full bg-ink/6 text-ink-soft"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.18em] uppercase text-ink mt-1 group-hover:text-ember-deep transition-colors">
                  <span>Explore</span>
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
