import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 md:px-10 pt-32 pb-40">
      <div className="mx-auto max-w-[820px]">
        <p className="eyebrow-accent mb-8">/ 404</p>
        <h1 className="display-tight text-[clamp(56px,9vw,120px)] leading-[1] mb-10 text-inkwell">
          Off the map.
        </h1>
        <p className="text-[18px] leading-[1.6] text-graphite max-w-[44ch] mb-10">
          The page you tried to reach is not here. It may have been renamed, or
          it may have never existed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-between gap-3 bg-inkwell text-parchment rounded-full pl-7 pr-3 py-3 text-[15px] font-medium no-underline hover:bg-terracotta-deep transition-colors group w-fit"
        >
          <span>Return home</span>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-parchment text-inkwell">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
