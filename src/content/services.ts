export interface Service {
  id: string;
  title: string;
  summary: string;
  detail: string;
  deliverables: readonly string[];
  fit: string;
  project: string;
  relatedProjects?: readonly string[];
}

export const services: readonly Service[] = [
  { id: "design", title: "Web design & redesign", summary: "A clear, distinctive website that makes your business easy to understand.", detail: "Turn a new idea or an outdated site into a considered experience. Start with your audience, content and priorities, then shape the structure, typography and interfaces around them.", deliverables: ["Website structure and content priorities", "Visual direction and responsive interface design", "Clear inquiry and purchase paths"], fit: "For a new business, a changing offer or a website that no longer reflects your work.", project: "ilab" },
  { id: "brand-identity", title: "Brand identity & visual design", summary: "Create a recognizable, cohesive visual identity that brings your business to life across digital and physical touchpoints.", detail: "Shape a new identity or refine what already exists. Bring the logo, typography, color and supporting materials together so your business feels consistent across its website, packaging and everyday communications.", deliverables: ["Logo design and refinement", "Visual identity systems", "Typography and color palettes", "Brand assets and guidelines", "Digital and print marketing materials"], fit: "For a new business, a changing brand or visual materials that need a more consistent direction.", project: "masterbean", relatedProjects: ["fixmobile", "btx-outlet"] },
  { id: "development", title: "Custom web development", summary: "A website built around the way your business works.", detail: "Bring design and functionality together in a maintainable build. From service websites to tailored integrations, the implementation should support the content and the people using it.", deliverables: ["Responsive website implementation", "Content and integration planning", "Accessible interactions and launch preparation"], fit: "For businesses that need more control than a generic template can offer.", project: "frio-estrella" },
  { id: "ecommerce", title: "E-commerce", summary: "Make products easier to find, understand and choose.", detail: "Organize a complex catalog or create a focused online shop. Plan product information, category navigation and buying journeys together, with the actual business requirements guiding the scope.", deliverables: ["Catalog and category architecture", "Product discovery and detail interfaces", "Commerce integrations scoped to your operation"], fit: "For a new shop, a growing catalog or a difficult product selection process.", project: "ilab" },
  { id: "applications", title: "Web applications", summary: "Useful tools for the tasks a standard website cannot handle.", detail: "Translate a specific workflow into a usable web interface. Define the information, permissions and everyday tasks first, then build the functionality that matters.", deliverables: ["Workflow and interface planning", "Custom interactive functionality", "Maintainable implementation and handover"], fit: "For ordering tools, client portals, dashboards and internal business systems.", project: "seoquill" },
  { id: "seo-performance", title: "SEO & performance", summary: "Give people and search engines a clearer path through your website.", detail: "Improve the foundations: page hierarchy, useful content, metadata, internal links and loading behavior. Agree on a baseline and measurement plan before making claims about improvement.", deliverables: ["Technical and content structure review", "Prioritized search and speed improvements", "Measurement plan and documented changes"], fit: "For an existing site with unclear navigation, technical search issues or slow pages.", project: "ilab" },
  { id: "support", title: "Ongoing support", summary: "Keep your website useful as the business changes.", detail: "Continue beyond the first release with planned maintenance, new features and practical improvements. Priorities are agreed directly, so the work stays connected to what you need next.", deliverables: ["Maintenance and improvement planning", "Content, interface and feature updates", "Direct communication about priorities"], fit: "For businesses that need a consistent design and development partner.", project: "fixmobile" },
] as const;

export const processSteps = [
  { title: "Understand", text: "We discuss your business, audience, current website and what the next version needs to achieve. Together we agree on scope and priorities." },
  { title: "Find the direction", text: "I shape the structure and visual direction. You review the key decisions before they become a finished interface." },
  { title: "Design & build", text: "Design and development move together, with focused feedback at agreed points and real content guiding the details." },
  { title: "Prepare to launch", text: "We review the content, responsive behavior, essential functionality and launch requirements before publication." },
  { title: "Keep improving", text: "After launch, maintenance and further improvements can follow your priorities and the evidence available." },
] as const;
