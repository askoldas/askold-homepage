import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteOrigin } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/work", "/services", "/about", ...projects.map(project => `/work/${project.slug}`)].map(path => ({ url: `${siteOrigin}${path}` })); }
