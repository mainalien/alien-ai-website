import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/primitives/Reveal";
import { Mark } from "@/components/brand/Mark";
import { Wordmark } from "@/components/brand/Wordmark";

export const metadata: Metadata = {
  title: "Brand",
  description:
    "The AlienAI brand: voice, palette, typography, and the design system that runs everything we ship.",
};

const colors = [
  {
    name: "Ink",
    hex: "#171A22",
    role: "Primary text, dark surfaces, footer. A settled fountain-pen blue-black.",
    chipText: "text-parchment",
  },
  {
    name: "Ink-soft",
    hex: "#2B2E36",
    role: "Elevated dark surfaces, secondary navy.",
    chipText: "text-parchment",
  },
  {
    name: "Parchment",
    hex: "#F0E7D6",
    role: "Page canvas. Warm cream. Never #FFFFFF.",
    chipText: "text-ink",
  },
  {
    name: "Linen",
    hex: "#E6D7BD",
    role: "Section breaks and card backgrounds.",
    chipText: "text-ink",
  },
  {
    name: "Ember",
    hex: "#D24D2A",
    role: "Signature accent. Used sparingly.",
    chipText: "text-parchment",
  },
  {
    name: "Ember-deep",
    hex: "#A93B1F",
    role: "Ember hover state. Eyebrow-accent text.",
    chipText: "text-parchment",
  },
  {
    name: "Graphite",
    hex: "#4E5165",
    role: "Body copy.",
    chipText: "text-parchment",
  },
  {
    name: "Graphite-soft",
    hex: "#6F7287",
    role: "Tertiary copy, labels.",
    chipText: "text-parchment",
  },
];

const typeSamples = [
  {
    label: "display-tight · hero",
    className: "display-tight text-[clamp(40px,7vw,96px)] text-ink",
    text: "Higher order intelligence.",
  },
  {
    label: "display · section h2",
    className: "display text-[40px] text-ink",
    text: "Production AI systems, ready to deploy.",
  },
  {
    label: "lead · 19px",
    className: "text-[19px] leading-[1.55] text-graphite max-w-[60ch]",
    text: "AlienAI builds production AI systems for the work modern businesses run on — recruiting, support, sales, finance, knowledge work.",
  },
  {
    label: "body · 16px",
    className: "text-[16px] leading-[1.65] text-graphite max-w-[60ch]",
    text: "We do not build from scratch every time. We deploy proven AI systems, configured and connected to your reality — and then we run them for you.",
  },
];

const principles = [
  {
    title: "Editorial, not salesy.",
    body: "Plain English. Short sentences. No buzzwords, no exclamation points, no \"unleash the potential.\"",
  },
  {
    title: "Confident by understatement.",
    body: "State the result. Name the system. Move on. Headlines read as closing arguments, not opening pitches.",
  },
  {
    title: "Specific over abstract.",
    body: "\"Quote turnaround compressed from days to minutes\" beats \"transformative business outcomes.\" Numbers, durations, system names, integrations — these are our texture.",
  },
  {
    title: "Honest about scope.",
    body: "We say what we don't do as often as what we do. The first thing a prospect learns is that we are not the right firm for half of what they might ask.",
  },
];

const vocabulary = {
  use: [
    "System",
    "Deploy",
    "Configure",
    "Connect",
    "Production",
    "Quietly",
    "Operate",
    "Run",
  ],
  avoid: [
    "Custom",
    "Bespoke",
    "Solution",
    "Revolutionary",
    "Transformative",
    "Cutting-edge",
    "World-class",
    "Unlock / Empower / Leverage",
  ],
};

export default function BrandPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-16 md:pt-28 pb-12 md:pb-20">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-ember/35 bg-ember/8 pl-3 pr-4 py-1.5">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-ember" />
              <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-ember">
                Brand &amp; design system
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display-tight text-[clamp(48px,8vw,120px)] text-ink max-w-[18ch]">
              The brand, in one place.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 max-w-[64ch] text-[18px] md:text-[20px] leading-[1.6] text-graphite">
              The visual, verbal, and component vocabulary for everything
              AlienAI ships — site, product UIs, marketing materials, decks,
              outbound. Versioned in the same repo as the site, kept current
              by the same team that uses it.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://github.com/mainalien/alien-ai-website/tree/main/design-system"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between gap-3 bg-ink text-parchment rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:bg-ember-deep transition-colors group"
              >
                <span>Read the design system</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-ink group-hover:text-ember-deep transition-colors">
                  ↗
                </span>
              </a>
              <a
                href="mailto:aliens@alienai.llc?subject=Brand%20inquiry"
                className="inline-flex items-center justify-between gap-3 border border-ink/15 text-ink rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:border-ink/40 transition-colors group"
              >
                <span>Press &amp; partnership</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/8 text-ink group-hover:bg-ink group-hover:text-parchment transition-colors">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-28 bg-linen/60 border-y border-ink/10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Identity</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,6vw,72px)] text-ink max-w-[20ch] mb-10 md:mb-16">
              Mark + wordmark.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="card rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center gap-8">
              <div className="text-ink">
                <Mark size={140} />
              </div>
              <div className="text-center">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                  Mark
                </p>
                <p className="text-[14px] text-graphite mt-2 max-w-[36ch]">
                  An ink tile carrying a parchment-stroked &ldquo;A&rdquo; — a chevron with a crossbar. Used as favicon and standalone glyph.
                </p>
              </div>
            </div>
            <div className="card rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center gap-8">
              <Wordmark size="lg" />
              <div className="text-center">
                <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
                  Wordmark
                </p>
                <p className="text-[14px] text-graphite mt-2 max-w-[36ch]">
                  Lowercase &ldquo;alienai&rdquo; in Geist Black with tight tracking. Mark + wordmark is the default lockup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Palette</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-10 md:mb-16 items-end">
              <h2 className="md:col-span-7 display-tight text-[clamp(36px,6vw,72px)] text-ink">
                Two colors. One signature accent.
              </h2>
              <p className="md:col-span-5 text-[16px] leading-[1.65] text-graphite">
                The brand is monochromatic — ink on parchment — with{" "}
                <span className="text-ember-deep font-medium">one</span>{" "}
                signature accent. Discipline reads as confidence; variety reads
                as uncertainty.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {colors.map((c) => (
              <Reveal key={c.name} as="li">
                <article className="rounded-2xl border border-ink/10 overflow-hidden flex flex-col">
                  <div
                    className={`h-32 flex items-end p-4 ${c.chipText}`}
                    style={{ backgroundColor: c.hex }}
                  >
                    <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase">
                      {c.hex}
                    </span>
                  </div>
                  <div className="p-4 md:p-5 bg-parchment flex flex-col gap-1">
                    <p className="display text-[18px] text-ink">{c.name}</p>
                    <p className="text-[13px] leading-[1.55] text-graphite">
                      {c.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32 bg-linen/60 border-y border-ink/10">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Typography</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 mb-10 md:mb-16 items-end">
              <h2 className="md:col-span-7 display-tight text-[clamp(36px,6vw,72px)] text-ink">
                Geist Sans + Geist Mono.
              </h2>
              <p className="md:col-span-5 text-[16px] leading-[1.65] text-graphite">
                Two families. Clean, modern, software-native. We do not pair a
                serif display with an italic tagline — that combination is
                over-used in 2026 AI marketing.
              </p>
            </div>
          </Reveal>

          <ul className="flex flex-col divide-y divide-ink/10">
            {typeSamples.map((t) => (
              <Reveal key={t.label} as="li" delay={0.04}>
                <article className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 py-6 md:py-8">
                  <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft md:w-[200px] md:flex-shrink-0">
                    {t.label}
                  </span>
                  <p className={t.className}>{t.text}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 md:px-10 py-14 md:py-32">
        <div className="mx-auto max-w-[1320px]">
          <Reveal>
            <p className="eyebrow-accent mb-5">/ Voice</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,6vw,72px)] text-ink max-w-[20ch] mb-10 md:mb-16">
              How we write.
            </h2>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-16 md:mb-24">
            {principles.map((p, i) => (
              <Reveal key={p.title} as="li" delay={0.04 + i * 0.04}>
                <article className="flex flex-col gap-3">
                  <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ember-deep">
                    {String(i + 1).padStart(2, "0")} · Principle
                  </p>
                  <h3 className="display text-[22px] md:text-[26px] leading-[1.15] text-ink">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-graphite">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <article className="rounded-2xl border border-ink/12 bg-parchment p-7 md:p-9">
                <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-ember-deep mb-5">
                  Words we use
                </p>
                <ul className="flex flex-wrap gap-2">
                  {vocabulary.use.map((w) => (
                    <li
                      key={w}
                      className="font-mono text-[12px] tracking-[0.06em] px-3 py-1.5 rounded-full bg-ink/6 text-ink"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.05}>
              <article className="rounded-2xl border border-ink/12 bg-parchment p-7 md:p-9">
                <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-graphite-soft mb-5">
                  Words we don&rsquo;t
                </p>
                <ul className="flex flex-wrap gap-2">
                  {vocabulary.avoid.map((w) => (
                    <li
                      key={w}
                      className="font-mono text-[12px] tracking-[0.06em] px-3 py-1.5 rounded-full bg-ink/4 text-graphite-soft line-through"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="rounded-3xl bg-ink text-parchment p-10 md:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-ember mb-4">
                / The whole system
              </p>
              <h2 className="display text-[28px] md:text-[40px] leading-[1.1] text-parchment max-w-[24ch]">
                Tokens, voice guide, components — all in the repo.
              </h2>
            </div>
            <Link
              href="/systems/"
              className="inline-flex items-center justify-between gap-3 bg-parchment text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember hover:text-ink transition-colors group whitespace-nowrap"
            >
              <span>See it in production</span>
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
