import { Reveal } from "@/components/primitives/Reveal";

const principles = [
  {
    title: "Production over demos",
    body: "If a system cannot run on call, it does not ship. Demos are easy. Operating is the work.",
  },
  {
    title: "Outcomes over output",
    body: "We are paid when the dollar is saved, the deal is opened, the hour is reclaimed. Not when the deck is delivered.",
  },
  {
    title: "Calibration over confidence",
    body: "We measure where our software is wrong before we measure where it is right. Trust comes from the evaluation, not the demo.",
  },
  {
    title: "Edge over scale",
    body: "We compete by being correct first, not loudest. The advantage we hand our clients is precision they could not buy elsewhere.",
  },
];

export function Principles() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-ink text-parchment">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-terracotta mb-5">
                / How we work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-tight text-[clamp(40px,5.5vw,72px)] text-parchment leading-[1] max-w-[14ch]">
                Four non-negotiables.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 text-[15.5px] leading-[1.65] text-parchment/70 max-w-[44ch]">
                Every team has a way it operates. Ours is built so the software
                we ship is software the business can actually rely on.
              </p>
            </Reveal>
          </div>

          <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-12">
            {principles.map((p, i) => (
              <Reveal key={p.title} as="li" delay={0.1 + i * 0.06}>
                <div className="flex flex-col gap-3">
                  <h3 className="display text-[24px] md:text-[28px] leading-[1.1] text-parchment">
                    {p.title}.
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-parchment/70">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
