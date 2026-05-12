import { Reveal } from "@/components/primitives/Reveal";

const principles = [
  {
    title: "Reliability over novelty",
    body: "We ship systems we would be willing to run on call. Demos are easy. Operating is the work.",
  },
  {
    title: "Restraint is a feature",
    body: "We remove more than we add. Every surface a user touches is one we have considered, named, and weighed.",
  },
  {
    title: "Originality, not imitation",
    body: "We do not assemble templates. The model, the prompt, the harness, the failure modes — all chosen for the problem in front of us.",
  },
  {
    title: "Edge over scale",
    body: "We compete by being correct first, not loudest. The advantage we hand our clients is precision they could not buy elsewhere.",
  },
];

export function Principles() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-32 bg-mist/60">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">How we work</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display text-[clamp(40px,5.5vw,72px)] leading-[1] max-w-[14ch]">
                Four
                <br />
                <span className="italic">non-negotiables.</span>
              </h2>
            </Reveal>
          </div>

          <ul className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-14">
            {principles.map((p, i) => (
              <Reveal key={p.title} as="li" delay={0.08 + i * 0.06}>
                <div className="flex flex-col gap-3">
                  <h3 className="display italic text-[26px] md:text-[30px] leading-[1.05]">
                    {p.title}.
                  </h3>
                  <p className="text-[15.5px] leading-[1.65] text-graphite">
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
