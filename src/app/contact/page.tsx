import type { Metadata } from "next";
import { Reveal } from "@/components/primitives/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to AlienAI. We respond personally. Tell us what you're trying to build.",
};

export default function ContactPage() {
  return (
    <section className="px-6 md:px-10 pt-20 md:pt-28 pb-32 md:pb-40">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <p className="eyebrow mb-10">Contact</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="display text-[clamp(56px,9vw,128px)] leading-[0.95] mb-12 md:mb-16">
            Tell us
            <br />
            <span className="italic">what you&rsquo;re</span>
            <br />
            building.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-[19px] md:text-[20px] leading-[1.6] text-graphite max-w-[52ch] mb-14">
            We respond personally — usually within a day, sometimes within an
            hour. A short note about the work you have in mind is plenty to
            start. We will tell you honestly whether we are the right firm for
            it.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href="mailto:aliens@alienai.llc"
            className="group inline-flex flex-col gap-2 no-underline"
          >
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-graphite group-hover:text-ink transition-colors">
              Direct line
            </span>
            <span className="display text-[clamp(36px,6.5vw,84px)] leading-[1] italic underline decoration-1 underline-offset-[10px] decoration-ink/25 text-ink group-hover:decoration-halo group-hover:text-halo transition-colors">
              aliens@alienai.llc&nbsp;→
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-ink/15 pt-10 font-mono text-[12px] tracking-[0.14em] uppercase text-graphite">
            <div>
              <p className="text-graphite-soft text-[10px] tracking-[0.18em] mb-2">
                Inquiries
              </p>
              <p className="text-ink normal-case tracking-normal font-sans text-[15px]">
                New engagements, partnership, press.
              </p>
            </div>
            <div>
              <p className="text-graphite-soft text-[10px] tracking-[0.18em] mb-2">
                Response time
              </p>
              <p className="text-ink normal-case tracking-normal font-sans text-[15px]">
                Within one business day.
              </p>
            </div>
            <div>
              <p className="text-graphite-soft text-[10px] tracking-[0.18em] mb-2">
                Locale
              </p>
              <p className="text-ink normal-case tracking-normal font-sans text-[15px]">
                Operating remotely. Headquartered in the United States.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
