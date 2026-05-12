import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";

const navLinks = [
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="px-6 md:px-10 pt-8 md:pt-10">
      <div className="mx-auto max-w-[1240px] flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center text-ink no-underline"
          aria-label="AlienAI — home"
        >
          <Wordmark size="md" />
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-7 md:gap-9 font-mono text-[12px] tracking-[0.14em] uppercase text-graphite">
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
      </div>
    </header>
  );
}
