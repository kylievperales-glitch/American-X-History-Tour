import type { Metadata } from "next";
import { Anton, Source_Serif_4, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { SITE } from "@/data/site";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  openGraph: {
    title: SITE.fullName,
    description: SITE.defaultDescription,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    // [ADD SOCIAL PREVIEW IMAGE] — see /public/images/og and README §"Image replacement guide"
    images: ["/images/og/social-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.fullName,
    description: SITE.defaultDescription,
  },
  icons: {
    icon: "/favicon.ico", // [REPLACE FAVICON] see README
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${sourceSerif.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-white">
        {/* reducedMotion="user" makes every Framer Motion animation in the
            tree (page transitions, scroll reveals) respect the OS-level
            prefers-reduced-motion setting. The CSS override in globals.css
            handles plain CSS transitions/hovers, but Framer's own tweens
            don't go through CSS `transition`, so they need this separately. */}
        <MotionConfig reducedMotion="user">
          <div className="grain-overlay" aria-hidden />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-fill focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Header />
          <PageTransition>
            <main id="main-content" className="flex-1">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
