import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

const navLinks = [
  { href: "/solutions/", label: "Solutions" },
  { href: "/results/", label: "Results" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-parchment/80 border-b border-ink/8">
      <div className="px-6 md:px-10 py-4 md:py-5">
        <div className="mx-auto max-w-[1320px] flex items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center text-ink no-underline"
            aria-label="AlienAI — home"
          >
            <Wordmark size="md" />
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7 font-mono text-[11.5px] tracking-[0.14em] uppercase text-graphite">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-ink transition-colors no-underline"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="mailto:aliens@alienai.llc"
            className="inline-flex items-center gap-2 rounded-full bg-ink text-parchment px-4 md:px-5 py-2 md:py-2.5 font-mono text-[11px] tracking-[0.16em] uppercase no-underline hover:bg-terracotta-deep transition-colors"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
