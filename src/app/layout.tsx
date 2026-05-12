import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SiteFooter } from "@/components/nav/SiteFooter";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  axes: ["opsz", "wdth"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://www.alienai.llc";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AlienAI — Higher order intelligence for business",
    template: "%s — AlienAI",
  },
  description:
    "AlienAI builds custom AI software that automates revenue, reduces operating costs, and compounds the productivity of every team it touches.",
  openGraph: {
    title: "AlienAI — Higher order intelligence for business",
    description:
      "Custom AI software that automates revenue, reduces operating costs, and compounds the productivity of every team it touches.",
    url: SITE_URL,
    siteName: "AlienAI",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AlienAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlienAI — Higher order intelligence for business",
    description:
      "Custom AI software that automates revenue, reduces operating costs, and compounds the productivity of every team it touches.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#EDE8E2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${interTight.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
