import { SignatureFoundation } from "@/components/hero/signature-foundation";
import { HomeContent } from "@/components/site/home-content";
import { Footer } from "@/components/site/site-shell";
import { jsonLd, pageMetadata, siteOrigin } from "@/lib/seo";

export const metadata = pageMetadata("Independent web design & development", "Distinctive websites, custom development, e-commerce and ongoing support by independent designer and developer Askold Makrikov.", "/");

export default function HomePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@type": "Person", name: "Askold Makrikov", url: siteOrigin, jobTitle: "Independent web designer and developer" }) }} /><SignatureFoundation><HomeContent /></SignatureFoundation><Footer /></>;
}
