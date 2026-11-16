import type { Metadata } from "next";

export const siteOrigin = "https://askold.me";
export const siteIndexable = process.env.SITE_INDEXABLE === "true";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: `${title} | Askold Makrikov`, description,
    alternates: { canonical: `${siteOrigin}${path}` },
    openGraph: { title, description, url: `${siteOrigin}${path}`, siteName: "Askold Makrikov", locale: "en_US", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Askold — independent web design and development" }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}
export function jsonLd(value: unknown) { return JSON.stringify(value).replace(/</g, "\\u003c"); }
