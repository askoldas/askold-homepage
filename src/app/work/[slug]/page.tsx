import { RelatedProjects } from "@/components/work/related-projects";
import { ProjectCaseStudy } from "@/components/work/project-case-study";
import { PageInquiry } from "@/components/interior/page-inquiry";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { PageShell } from "@/components/site/site-shell";
import { jsonLd, pageMetadata, siteOrigin } from "@/lib/seo";
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  return project ? pageMetadata(`${project.title} — ${project.industry}`, project.summary, `/work/${project.slug}`) : {};
}
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "CreativeWork", name: `${project.title} project`, description: project.summary, url: `${siteOrigin}/work/${project.slug}`, creator: { "@type": "Person", name: "Askold Makrikov", url: siteOrigin }, image: `${siteOrigin}${project.cover.src}` },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteOrigin }, { "@type": "ListItem", position: 2, name: "Work", item: `${siteOrigin}/work` }, { "@type": "ListItem", position: 3, name: project.title, item: `${siteOrigin}/work/${project.slug}` }] },
  ] };
  return <PageShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} /><ProjectCaseStudy project={project} /><RelatedProjects currentId={project.id} /><PageInquiry /></PageShell>;
}
