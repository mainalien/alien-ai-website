import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-6 md:px-10 pb-12 pt-24 md:pt-32 bg-linen/50 border-t border-ink/10">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5 flex flex-col gap-4">
            <Wordmark size="md" />
            <p className="display text-[22px] md:text-[26px] max-w-[20ch] leading-[1.1] text-ink">
              Higher order intelligence for business.
            </p>
            <p className="text-[14.5px] leading-[1.6] text-graphite max-w-[40ch]">
              We live at the intersection of AI and innovation — building
              production systems that quietly compound and earn back the
              hours, dollars, and attention your business deserves to keep.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-graphite-soft">
                Site
              </p>
              <Link href="/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                Home
              </Link>
              <Link href="/systems/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                Systems
              </Link>
              <Link href="/results/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                Results
              </Link>
              <Link href="/about/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                About
              </Link>
              <Link href="/contact/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                Contact
              </Link>
              <Link href="/brand/" className="text-ink hover:text-ember-deep no-underline text-[14.5px]">
                Brand
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-graphite-soft">
                Contact
              </p>
              <a
                href="mailto:aliens@alienai.llc"
                className="text-ink hover:text-ember-deep no-underline text-[14.5px]"
              >
                aliens@alienai.llc
              </a>
              <p className="text-graphite text-[13px]">
                Replies within one business day.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-graphite-soft">
                Operating
              </p>
              <p className="text-ink text-[14.5px]">United States &amp; remote.</p>
              <p className="text-graphite text-[13px]">
                Engagements available globally.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10.5px] tracking-[0.18em] uppercase text-graphite-soft">
          <span>© {year} AlienAI LLC. All rights reserved.</span>
          <span>Higher order intelligence — engineered to operate.</span>
        </div>
      </div>
    </footer>
  );
}
