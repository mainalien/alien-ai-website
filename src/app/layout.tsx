import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { SiteFooter } from "@/components/nav/SiteFooter";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const SITE_URL = "https://www.alienai.llc";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AlienAI — Intelligence, of another order.",
    template: "%s — AlienAI",
  },
  description:
    "AlienAI builds production AI software for businesses ready to operate differently.",
  openGraph: {
    title: "AlienAI — Intelligence, of another order.",
    description:
      "AlienAI builds production AI software for businesses ready to operate differently.",
    url: SITE_URL,
    siteName: "AlienAI",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AlienAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlienAI — Intelligence, of another order.",
    description:
      "AlienAI builds production AI software for businesses ready to operate differently.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F4F1EA",
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
