import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { PageShell, ContactInvitation } from "@/components/site/site-shell";
import { ProjectMedia, VerifiedResults } from "@/components/work/project-media";
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
  const related = projects.filter(item => item.id !== project.id).slice(0, 2);
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "CreativeWork", name: `${project.title} website project`, description: project.summary, url: `${siteOrigin}/work/${project.slug}`, creator: { "@type": "Person", name: "Askold Makrikov", url: siteOrigin }, image: `${siteOrigin}${project.cover.src}` },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteOrigin }, { "@type": "ListItem", position: 2, name: "Work", item: `${siteOrigin}/work` }, { "@type": "ListItem", position: 3, name: project.title, item: `${siteOrigin}/work/${project.slug}` }] },
  ] };
  return <PageShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} /><article className="case-study"><header className="case-heading container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/work">Work</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav><h1>{project.title}</h1><p className="case-summary">{project.summary}</p>{project.websiteUrl ? <a className="text-link" href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Visit {project.title}<span className="visually-hidden"> (opens in a new tab)</span></a> : null}</header><div className="container"><ProjectMedia image={project.cover} priority /><div className="case-overview"><p className="lead-copy">{project.introduction}</p><dl><div><dt>Industry</dt><dd>{project.industry}</dd></div><div><dt>Scope</dt><dd>{project.scope}</dd></div></dl></div></div><div className="case-sections container">{project.sections.map((section, index) => <section className={`case-section ${section.image && section.image.height > section.image.width * 1.5 ? "portrait-section" : ""}`} key={section.title}><div className="case-text"><h2>{section.title}</h2><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>{section.image ? <ProjectMedia image={section.image} className={index % 2 ? "media-offset" : ""} /> : null}</section>)}<VerifiedResults results={project.results} />{project.id === "ilab" ? <p className="case-evidence">Public interface captures: November 2026. Screens shown are public pages; private administration and customer data are excluded.</p> : null}</div></article><section className="related-work container"><h2>Keep exploring.</h2><div>{related.map(item => <Link href={`/work/${item.slug}`} key={item.id}><span>{item.title}</span><span>{item.industry}</span></Link>)}</div><Link className="text-link" href="/services">Explore relevant services</Link></section><ContactInvitation title="Have a similar challenge?" /></PageShell>;
}
