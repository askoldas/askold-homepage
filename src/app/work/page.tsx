import Link from "next/link";
import { projects } from "@/content/projects";
import { PageShell, ContactInvitation } from "@/components/site/site-shell";
import { ProjectMedia } from "@/components/work/project-media";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Selected work", "Explore iLab, FRIO ESTRELLA, LATVIR and selected original design and development work by Askold Makrikov.", "/work");
export default function WorkPage() {
  return <PageShell><div className="page-heading container"><h1>Work you can<br />look into.</h1><p>Different businesses, different requirements. Selected websites and interfaces, with the thinking and scope behind them.</p></div><section className="work-index container" aria-label="Selected projects">{projects.map((project, index) => <article key={project.id} className={index === 0 ? "work-feature" : ""}><Link className="media-link" href={`/work/${project.slug}`}><ProjectMedia image={project.cover} priority={index === 0} /></Link><div className="project-caption"><h2><Link href={`/work/${project.slug}`}>{project.title}</Link></h2><div><p>{project.summary}</p><p className="muted-copy">{project.scope}</p><Link className="text-link" href={`/work/${project.slug}`}>View project</Link></div></div></article>)}</section><ContactInvitation /></PageShell>;
}
