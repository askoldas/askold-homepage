import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/content/projects";
import styles from "./featured-project.module.css";

export function FeaturedProject() {
  const project = getProject("ilab")!;
  return <section className="featured-project container" aria-labelledby="featured-heading">
    <div className="section-intro"><h2 id="featured-heading">Built around<br />the real business.</h2><div><h3>{project.title}</h3><p>{project.summary}</p></div></div>
    <div className={styles.composition}>
      <Link className={styles.main} href="/work/ilab" aria-label="Explore the iLab repair website case study"><Image data-home-reveal="main" src={project.cover.src} alt={project.cover.alt} width={1440} height={1000} sizes="(max-width: 760px) calc(100vw - 48px), 75vw" /></Link>
      <Link className={styles.shop} href="/work/ilab" aria-label="Explore the iLab parts catalog case study"><Image data-home-reveal="shop" src="/media/work/ilab-shop.webp" alt="iLab repair-parts shop and product catalog" width={1440} height={1000} sizes="(max-width: 760px) 78vw, 40vw" /></Link>
    </div>
    <div className="feature-note"><p>Repair services. Device navigation. A parts catalog.</p><p>Two related experiences, with a clear path for each visitor.</p></div>
    <Link className={`button-gold ${styles.caseAction}`} href="/work/ilab">Explore the iLab case study</Link>
  </section>;
}
