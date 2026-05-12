import type { Metadata } from "next";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "AlienAI is a software firm building AI applications for businesses — quietly, deliberately, and at production grade.",
};

export default function AboutPage() {
  return (
    <article className="px-6 md:px-10 pt-20 md:pt-28 pb-24">
      <div className="mx-auto max-w-[820px]">
        <Reveal>
          <p className="eyebrow mb-10">About</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="display text-[clamp(48px,7vw,96px)] leading-[1] mb-14 md:mb-20">
            A small firm,
            <br />
            <span className="italic">unusually serious</span>
            <br />
            about software.
          </h1>
        </Reveal>

        <div className="flex flex-col gap-14 md:gap-16 text-[18px] md:text-[19px] leading-[1.65] text-graphite">
          <Reveal delay={0.1}>
            <section>
              <h2 className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink mb-5">
                What we are
              </h2>
              <p>
                AlienAI is a software firm. We build artificial-intelligence
                applications for businesses — applications that have to keep
                running, keep answering, keep deciding, long after the launch.
                We are deliberately small, deliberately quiet, and deliberately
                careful about what we agree to build.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.14}>
            <section>
              <h2 className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink mb-5">
                What we believe
              </h2>
              <p className="mb-5">
                Most of what is called &ldquo;AI&rdquo; in 2026 is a demo. A
                short, brilliant, unaccountable demo. We are not interested in
                demos. We are interested in software that operates — in the
                building where the work happens, on the days when nothing is
                going right, against the inputs no one anticipated.
              </p>
              <p>
                The gap between a working prototype and a system a business can
                actually rely on is the entire job. That is the gap we close.
              </p>
            </section>
          </Reveal>

          <Reveal delay={0.18}>
            <section>
              <h2 className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink mb-5">
                What we don&rsquo;t do
              </h2>
              <ul className="flex flex-col gap-3">
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] text-graphite-soft mt-[6px]">
                    —
                  </span>
                  <span>Consulting hours. We deliver software, not slide decks.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] text-graphite-soft mt-[6px]">
                    —
                  </span>
                  <span>
                    &ldquo;AI strategy.&rdquo; If a business has the right
                    problem, it does not need a strategy to recognize it.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] text-graphite-soft mt-[6px]">
                    —
                  </span>
                  <span>
                    Generic chatbots. The world has enough of them.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="font-mono text-[12px] text-graphite-soft mt-[6px]">
                    —
                  </span>
                  <span>
                    Work we cannot make ourselves proud of.
                  </span>
                </li>
              </ul>
            </section>
          </Reveal>

          <Reveal delay={0.22}>
            <section>
              <h2 className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink mb-5">
                The name
              </h2>
              <p>
                <span className="italic">Alien</span> — adjective, from the Latin{" "}
                <span className="italic">alienus</span>, &ldquo;belonging to
                another.&rdquo; Foreign in kind. Of a different order than what
                came before. That is the only sense in which we use it.
              </p>
            </section>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
