import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

const SITE_URL = "https://www.alienai.llc";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AlienAI — Higher order intelligence for business",
    template: "%s — AlienAI",
  },
  description:
    "AlienAI builds custom AI software systems that automate revenue, reduce operating costs, and compound the productivity of every team they touch.",
  openGraph: {
    title: "AlienAI — Higher order intelligence for business",
    description:
      "Custom AI software systems that automate revenue, reduce operating costs, and compound the productivity of every team they touch.",
    url: SITE_URL,
    siteName: "AlienAI",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AlienAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlienAI — Higher order intelligence for business",
    description:
      "Custom AI software systems that automate revenue, reduce operating costs, and compound the productivity of every team they touch.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
