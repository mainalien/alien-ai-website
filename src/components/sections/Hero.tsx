export function Hero() {
  return (
    <section className="relative px-6 md:px-10 pt-10 md:pt-24 pb-14 md:pb-32 overflow-hidden">
      <div className="paper absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="mx-auto max-w-[1320px]">
        <div className="inline-flex items-center gap-3 mb-6 md:mb-10">
          <span className="inline-flex h-2 w-2 rounded-full bg-terracotta" />
          <span className="eyebrow text-graphite">
            Custom AI software, built for production
          </span>
        </div>

        <h1 className="display-tight text-[clamp(48px,11vw,168px)] max-w-[16ch] text-ink">
          Higher order
          <br />
          intelligence.
        </h1>

        <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-end">
          <p className="md:col-span-7 text-[17px] md:text-[22px] leading-[1.5] text-graphite">
            AlienAI builds custom AI software systems that automate revenue,
            reduce operating costs, and compound the productivity of every
            team they touch. Quietly engineered. Deliberately deployed.
            Built to operate without you.
          </p>

          <div className="md:col-span-5 flex flex-col gap-3">
            <a
              href="mailto:aliens@alienai.llc"
              className="inline-flex items-center justify-between gap-3 bg-ink text-parchment rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:bg-terracotta-deep transition-colors group"
            >
              <span>Start a project</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-ink group-hover:bg-parchment group-hover:text-terracotta-deep transition-colors">
                →
              </span>
            </a>
            <a
              href="/solutions/"
              className="inline-flex items-center justify-between gap-3 border border-ink/15 text-ink rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:border-ink/40 transition-colors group"
            >
              <span>See what we build</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/8 text-ink group-hover:bg-ink group-hover:text-parchment transition-colors">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 md:gap-8 border-t border-ink/12 pt-6 md:pt-10">
          {[
            { label: "Revenue automated", value: "24 / 7" },
            { label: "Hours returned weekly", value: "120 +" },
            { label: "Cost reduction", value: "30 — 60%" },
            { label: "Time-to-production", value: "8 wks" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="metric text-[28px] md:text-[44px] text-ink">
                {s.value}
              </span>
              <span className="font-mono text-[10px] md:text-[10.5px] tracking-[0.18em] uppercase text-graphite">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
