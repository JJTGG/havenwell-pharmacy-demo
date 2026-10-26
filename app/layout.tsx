import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Havenwell Pharmacy | Pharmacy Website Concept",
    template: "%s | Havenwell Pharmacy"
  },
  description:
    "Havenwell Pharmacy is a fictional community-pharmacy website concept by TGG HUB, designed to demonstrate clear service information, accessible navigation and customer communication.",
  applicationName: "Havenwell Pharmacy",
  category: "health",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  },
  openGraph: {
    type: "website",
    siteName: "Havenwell Pharmacy",
    locale: "en_NG",
    title: "Havenwell Pharmacy | Pharmacy Website Concept",
    description:
      "A fictional pharmacy website concept by TGG HUB, exploring service information, customer guidance and accessible communication."
  },
  twitter: {
    card: "summary",
    title: "Havenwell Pharmacy | Pharmacy Website Concept",
    description:
      "A fictional pharmacy website concept by TGG HUB."
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f7f1"
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content" className="page-shell">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}