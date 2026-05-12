"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden">
      <div className="paper absolute inset-0 -z-10 opacity-60" aria-hidden />

      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-terracotta" />
          <span className="eyebrow text-graphite">
            Custom AI software, built for production
          </span>
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.05 }}
          className="display-tight text-[clamp(56px,11vw,168px)] max-w-[16ch] text-inkwell"
        >
          Higher order
          <br />
          intelligence.
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"
        >
          <p className="md:col-span-7 text-[19px] md:text-[22px] leading-[1.5] text-graphite">
            AlienAI builds custom AI software that automates revenue,
            reduces operating costs, and compounds the productivity of every
            team it touches. Quietly engineered. Deliberately deployed.
            Engineered to operate without you.
          </p>

          <div className="md:col-span-5 flex flex-col gap-3">
            <a
              href="mailto:aliens@alienai.llc"
              className="inline-flex items-center justify-between gap-3 bg-inkwell text-parchment rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:bg-terracotta-deep transition-colors group"
            >
              <span>Start a project</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-inkwell group-hover:bg-parchment group-hover:text-terracotta-deep transition-colors">
                →
              </span>
            </a>
            <a
              href="/solutions/"
              className="inline-flex items-center justify-between gap-3 border border-inkwell/15 text-inkwell rounded-full pl-6 pr-3 py-3 text-[15px] font-medium no-underline hover:border-inkwell/40 transition-colors group"
            >
              <span>See what we build</span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-inkwell/8 text-inkwell group-hover:bg-inkwell group-hover:text-parchment transition-colors">
                ↗
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-inkwell/12 pt-10"
        >
          {[
            { label: "Revenue automated", value: "24 / 7" },
            { label: "Hours returned weekly", value: "120 +" },
            { label: "Cost reduction", value: "30 — 60%" },
            { label: "Time-to-production", value: "8 wks" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="metric text-[34px] md:text-[44px] text-inkwell">
                {s.value}
              </span>
              <span className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
