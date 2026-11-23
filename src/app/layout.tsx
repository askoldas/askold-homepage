import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getContent, defaultLocale } from "@/lib/i18n";
import "./globals.css";
import "./commercial.css";
import { siteIndexable, siteOrigin } from "@/lib/seo";
import { ContactFinale } from "@/components/home/contact-finale";

const content = getContent();
export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  metadataBase: new URL(siteOrigin),
  manifest: "/site.webmanifest",
  robots: { index: siteIndexable, follow: siteIndexable },
};
export const viewport: Viewport = {
  width: "device-width", initialScale: 1, viewportFit: "cover",
  themeColor: "#000000", colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang={defaultLocale}>
      <body>
        <a className="skip-link" href="#main-content">{content.accessibility.skipToContent}</a>
        {children}
        <ContactFinale />
      </body>
    </html>
  );
}
