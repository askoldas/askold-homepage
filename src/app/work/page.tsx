import Image from "next/image";
import Link from "next/link";
import { workProjects } from "@/content/projects";
import { workCategories } from "@/content/work-categories";
import { ArtPageHeading } from "@/components/work/art-page-heading";
import { PageShell } from "@/components/site/site-shell";
import { PageInquiry } from "@/components/interior/page-inquiry";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata("Selected work", "Explore websites, e-commerce, brand identities and creative projects by independent designer and developer Askold Makrikov.", "/work");

export default async function WorkPage({ searchParams }: { searchParams: Promise<{ discipline?: string }> }) {
  const query = await searchParams;
  const category = workCategories.find(item => item.id === query.discipline) || workCategories[0];
  const selected = category.id === "all" ? workProjects : workProjects.filter(project => (category.projects as readonly string[]).includes(project.id));
  const flagship = selected.find(project => project.id === "ilab");
  const collection = selected.filter(project => project.id !== flagship?.id);
  return <PageShell><ArtPageHeading kind="work" /><section className={`container ${styles.index}`} id="project-index" aria-label="Project collection">
    <nav className={styles.navigation} aria-label="Project categories">{workCategories.map(item => <Link key={item.id} href={item.id === "all" ? "/work#project-index" : `/work?discipline=${item.id}#project-index`} aria-current={category.id === item.id ? "page" : undefined}>{item.title}</Link>)}</nav>
    {flagship ? <article className={styles.flagship}><div className={styles.flagshipHeading}><h2>{flagship.title}</h2><p>{flagship.summary}</p></div><div className={styles.diptych}><Link href="/work/ilab" aria-label="Explore the iLab service website"><Image src={flagship.cover.src} alt={flagship.cover.alt} width={1440} height={1000} sizes="(max-width: 760px) 90vw, 60vw" /></Link><Link href="/work/ilab" aria-label="Explore the iLab parts catalog"><Image src="/media/work/ilab-shop.webp" alt="iLab repair-parts catalog and shop" width={1440} height={1000} sizes="(max-width: 760px) 75vw, 30vw" /></Link></div><div className={styles.flagshipCaption}><p>{flagship.scope}</p><Link href="/work/ilab">Explore the iLab case study</Link></div></article> : null}
    <ul className={styles.collection}>{collection.map(project => <li key={project.id}><Link href={`/work/${project.slug}`} className={styles.project}><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 760px) 90vw, 60vw" loading="lazy" /><h2>{project.title}</h2><p>{project.scope}</p></Link></li>)}</ul>
    {!selected.length ? <p className={styles.empty}>Explore <Link href="/work#project-index">all selected projects</Link>.</p> : null}
  </section><PageInquiry /></PageShell>;
}
