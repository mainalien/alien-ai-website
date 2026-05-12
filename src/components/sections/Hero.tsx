"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="px-6 md:px-10 pt-20 md:pt-32 pb-24 md:pb-32 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full opacity-[0.10] blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, var(--color-halo), transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px"
          style={{ background: "color-mix(in oklab, var(--color-ink) 10%, transparent)" }}
        />
      </div>

      <div className="mx-auto max-w-[1240px]">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="eyebrow mb-10"
        >
          AlienAI&nbsp;LLC — Est. 2024
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.05 }}
          className="display text-[clamp(56px,9vw,128px)] max-w-[14ch]"
        >
          Intelligence,
          <br />
          <span className="italic">of another order.</span>
        </motion.h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <p className="max-w-[44ch] text-[18px] md:text-[20px] leading-[1.5] text-graphite">
            AlienAI builds production AI software for businesses ready to
            operate differently. Quietly engineered, deliberately deployed,
            built to run.
          </p>

          <a
            href="mailto:aliens@alienai.llc"
            className="group inline-flex items-center gap-3 text-ink no-underline self-start md:self-end"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-graphite group-hover:text-ink transition-colors">
              Begin a conversation
            </span>
            <span className="display italic text-[22px] underline decoration-1 underline-offset-[6px] decoration-ink/30 group-hover:decoration-halo group-hover:text-halo transition-colors">
              aliens@alienai.llc&nbsp;→
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
