import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-10 pb-10 pt-24 md:pt-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="rule mb-10" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Wordmark size="md" />
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-graphite">
              Intelligence, of another order.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 font-mono text-[12px] tracking-[0.12em] uppercase text-graphite">
            <div className="flex flex-col gap-1">
              <span className="text-graphite-soft text-[10px] tracking-[0.18em]">
                Inquiries
              </span>
              <a
                href="mailto:aliens@alienai.llc"
                className="text-ink hover:text-halo transition-colors no-underline normal-case tracking-normal font-sans text-[14px]"
              >
                aliens@alienai.llc
              </a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-graphite-soft text-[10px] tracking-[0.18em]">
                Pages
              </span>
              <div className="flex gap-5 normal-case tracking-normal font-sans text-[14px]">
                <Link href="/" className="text-ink hover:text-halo no-underline">
                  Home
                </Link>
                <Link href="/about/" className="text-ink hover:text-halo no-underline">
                  About
                </Link>
                <Link href="/contact/" className="text-ink hover:text-halo no-underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-graphite-soft">
          <span>© {year} AlienAI LLC</span>
          <span>Built with intent.</span>
        </div>
      </div>
    </footer>
  );
}
