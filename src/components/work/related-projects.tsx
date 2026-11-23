import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import styles from "./related-projects.module.css";

export function RelatedProjects({ currentId }: { currentId: string }) {
  const related = projects.filter(project => project.id !== currentId);
  return <section className="related-work container" aria-labelledby="related-projects-heading">
    <header className={styles.heading}><h2 id="related-projects-heading">Keep exploring.</h2><Link className="text-link" href="/work">View all work</Link></header>
    <ul className={styles.grid}>{related.map(project => <li key={project.id}><Link className={styles.project} href={`/work/${project.slug}`}><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 359px) calc(100vw - 48px), (max-width: 1023px) 44vw, 22vw" loading="lazy" /><h3>{project.title}</h3><p>{project.industry}</p></Link></li>)}</ul>
    <Link className="text-link" href="/services">Explore relevant services</Link>
  </section>;
}
