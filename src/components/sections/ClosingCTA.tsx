import { Reveal } from "@/components/primitives/Reveal";

export function ClosingCTA() {
  return (
    <section className="px-6 md:px-10 py-14 md:py-36 bg-parchment">
      <div className="mx-auto max-w-[1320px]">
        <div className="rounded-3xl bg-linen border border-ink/12 p-7 md:p-16 lg:p-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(closest-side, var(--color-ember), transparent 70%)" }}
          />
          <Reveal>
            <p className="eyebrow-accent mb-5 md:mb-8">/ Start a project</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="display-tight text-[clamp(36px,8vw,120px)] leading-[0.95] max-w-[18ch] text-ink">
              The work you have in mind deserves to be done well.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-[58ch] text-[18px] md:text-[19px] leading-[1.6] text-graphite">
              Tell us what is on your roadmap. We will tell you honestly whether
              we are the right firm for it, and what it would take to ship it.
              Replies are personal, and quick.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="mailto:aliens@alienai.llc"
                className="inline-flex items-center justify-between gap-3 bg-ink text-parchment rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:bg-ember-deep transition-colors group"
              >
                <span>aliens@alienai.llc</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-parchment text-ink group-hover:text-ember-deep transition-colors">
                  →
                </span>
              </a>
              <a
                href="/solutions/"
                className="inline-flex items-center justify-between gap-3 border border-ink/20 text-ink rounded-full pl-7 pr-3 py-3.5 text-[15.5px] font-medium no-underline hover:border-ink/50 transition-colors group"
              >
                <span>Browse solutions</span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/8 text-ink group-hover:bg-ink group-hover:text-parchment transition-colors">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
