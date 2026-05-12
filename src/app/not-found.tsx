import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 md:px-10 pt-32 pb-40">
      <div className="mx-auto max-w-[820px]">
        <p className="eyebrow mb-8">404</p>
        <h1 className="display text-[clamp(56px,9vw,120px)] leading-[1] mb-10">
          Off the <span className="italic">map.</span>
        </h1>
        <p className="text-[18px] leading-[1.6] text-graphite max-w-[44ch] mb-10">
          The page you tried to reach is not here. It may have been renamed, or
          it may have never existed.
        </p>
        <Link
          href="/"
          className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink hover:text-halo no-underline"
        >
          ← Return home
        </Link>
      </div>
    </section>
  );
}
