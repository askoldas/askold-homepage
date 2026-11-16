import type { MetadataRoute } from "next";
import { siteIndexable, siteOrigin } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots { return { rules: siteIndexable ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" }, sitemap: `${siteOrigin}/sitemap.xml` }; }
