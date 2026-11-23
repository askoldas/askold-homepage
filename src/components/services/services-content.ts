export const serviceDirectory = [
  { id: "brand-identity", title: "Brand identity & visual design" },
  { id: "design", title: "Web design & redesign" },
  { id: "development", title: "Custom web development" },
  { id: "ecommerce", title: "E-commerce" },
  { id: "applications", title: "Web applications" },
  { id: "seo-performance", title: "SEO & performance" },
  { id: "support", title: "Ongoing support" },
] as const;

export const identityDeliverables = ["Logo design and refinement", "Visual identity systems", "Typography and color", "Brand assets and guidelines", "Digital and print materials", "Packaging, where the project calls for it"] as const;
export const webDeliverables = ["Website structure and content priorities", "Visual direction and typography", "Responsive interface design", "Clear navigation and hierarchy", "Inquiry and purchase journeys", "Redesign of an existing website"] as const;

export const identityBrands = [
  { name: "FixMobile", images: [
    { src: "/media/work/fixmobile-business-cards.webp", width: 1338, height: 1338, alt: "FixMobile business cards carrying the redesigned identity" },
    { src: "/media/work/fixmobile-logo-showcase.webp", width: 768, height: 512, alt: "FixMobile logo and visual identity presentation" },
    { src: "/media/work/fixmobile-campaign.webp", width: 1600, height: 1000, alt: "FixMobile campaign and billboard design" },
  ] },
  { name: "SeoQuill", images: [
    { src: "/media/work/seoquill-logo.webp", width: 1024, height: 1024, alt: "SeoQuill wordmark and visual identity" },
    { src: "/media/archive/seoquill/logo-vert.webp", width: 364, height: 1024, alt: "Vertical SeoQuill brand mark" },
    { src: "/media/archive/seoquill/seoquill-fav2.webp", width: 500, height: 500, alt: "SeoQuill compact brand symbol" },
  ] },
  { name: "MasterBean", images: [
    { src: "/media/work/masterbean-logo.webp", width: 768, height: 512, alt: "MasterBean coffee brand mark embossed on a dark surface" },
    { src: "/media/archive/masterbean/burlap.webp", width: 960, height: 640, alt: "MasterBean identity applied to a burlap material presentation" },
    { src: "/media/archive/masterbean/bag-1.webp", width: 370, height: 370, alt: "MasterBean branded coffee packaging" },
  ] },
] as const;

interface ServiceProof {
  href: string;
  title: string;
  image: { src: string; width: number; height: number; alt: string };
  caseHref?: string;
}

interface TechnicalService {
  id: string; number: string; title: string; description: string; fit: string;
  deliverables: readonly string[];
  proofs: readonly ServiceProof[];
}

export const technicalServices: readonly TechnicalService[] = [
  {
    id: "development", number: "03", title: "Custom web development",
    description: "A website built around the way your business works, with control beyond a standard template.",
    fit: "Business websites, tailored functionality and planned integrations.",
    deliverables: ["Responsive implementation", "Content and integration planning", "Accessible interactions and launch preparation"],
    proofs: [
      { href: "/work/ilab", title: "iLab — repair-service website", image: { src: "/media/work/ilab-desktop.webp", width: 1440, height: 1000, alt: "iLab repair-service website" } },
      { href: "/work/frio-estrella", title: "FRIO ESTRELLA — interactive estimate", image: { src: "/media/work/frio-calculator.webp", width: 1440, height: 1000, alt: "FRIO ESTRELLA interactive estimate interface" } },
    ],
  },
  {
    id: "ecommerce", number: "04", title: "E-commerce",
    description: "Make products easier to find, understand and choose, with a shop organized around the catalog and the operation behind it.",
    fit: "A new shop, a growing catalog or a difficult product-selection journey.",
    deliverables: ["Catalog and category architecture", "Product discovery and detail pages", "Commerce integrations scoped to the operation"],
    proofs: [
      { href: "https://ilab.lv/shop", title: "iLab — product catalog and online shop", caseHref: "/work/ilab", image: { src: "/media/work/ilab-shop.webp", width: 1440, height: 1000, alt: "iLab online shop and repair-parts catalog" } },
      { href: "/work/masterbean", title: "MasterBean — WooCommerce store", image: { src: "/media/work/masterbean-cover.webp", width: 1039, height: 780, alt: "MasterBean coffee website and online shop" } },
    ],
  },
  {
    id: "applications", number: "05", title: "Web applications",
    description: "Purpose-built tools for workflows a standard website cannot handle.",
    fit: "Ordering workflows, client portals, dashboards and internal tools.",
    deliverables: ["Workflow and interface planning", "Custom interactive functionality", "Maintainable implementation and handover"],
    proofs: [{ href: "/work/seoquill", title: "SeoQuill — content ordering", image: { src: "/media/work/seoquill-order.webp", width: 1600, height: 2436, alt: "SeoQuill content-ordering page" } }],
  },
] as const;

export const improvementServices = [
  { id: "seo-performance", number: "06", title: "SEO & performance", description: "A clearer path for people and search engines, with improvements grounded in the site you have.", deliverables: ["Technical SEO, metadata and structured data", "Content architecture and internal linking", "Core Web Vitals and loading performance", "Search Console, analytics setup and data-informed improvements"] },
  { id: "support", number: "07", title: "Ongoing support", description: "A consistent partner for maintenance, new features and the next stage of your website.", deliverables: ["Maintenance, updates and troubleshooting", "Content, interface and functionality updates", "Planned improvements as the business evolves"] },
] as const;
