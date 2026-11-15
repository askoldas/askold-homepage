import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { getContent, defaultLocale } from "@/lib/i18n";
import "./globals.css";

const content = getContent();
export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
  // M1 is a development foundation. Change explicitly at release readiness.
  robots: { index: false, follow: false },
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
      </body>
    </html>
  );
}
