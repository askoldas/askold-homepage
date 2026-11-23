import Image from "next/image";
import Link from "next/link";
import type { CaseProject } from "@/content/projects";
import { ProjectIntroduction } from "./project-introduction";
import { VerifiedResults } from "./project-media";
import { AnalyticsEvidencePanels } from "./analytics-evidence";
import { ProjectArchive } from "./project-archive";
import styles from "./project-case-study.module.css";

export function ProjectCaseStudy({ project }: { project: CaseProject }) {
  const mode = project.id === "ilab" ? "systems" : ["masterbean", "fixmobile", "btx-outlet"].includes(project.id) ? "identity" : project.id === "stefanel-riga" ? "creative" : "business";
  const hero = project.caseHero || project.cover;
  const placement = project.introPlacement ?? "after-overview";
  return <article className={`${styles.caseStudy} ${styles[mode]}`}>
    <header className={`container ${styles.heading}`}><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/work">Work</Link><span aria-hidden="true">/</span><span aria-current="page">{project.title}</span></nav><h1>{project.title}</h1>
      <div className={styles.introduction}><div><p>{project.summary}</p>{project.websiteUrl ? <a className={styles.link} href={project.websiteUrl} target="_blank" rel="noopener noreferrer">Visit {project.title}<span className="visually-hidden"> (opens in a new tab)</span></a> : null}</div><dl><div><dt>Industry</dt><dd>{project.industry}</dd></div><div><dt>Scope</dt><dd>{project.scope}</dd></div></dl></div>
    </header>
    <div className="container">{placement === "hero" && project.introVideo ? <div className={styles.heroFilm}><ProjectIntroduction project={project} context="hero" /></div> : <figure className={`${styles.cover} ${hero.height > hero.width * 2 ? styles.tallCover : ""}`} style={hero.height > hero.width * 2 ? { maxWidth: hero.width } : undefined}><Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes="90vw" priority /></figure>}<p className={styles.overview}>{project.introduction}</p>{placement === "after-overview" ? <ProjectIntroduction project={project} /> : null}</div>
    <div className={styles.sections}>{project.sections.map((section, index) => {
      const portrait = section.image && section.image.height > section.image.width * 1.5;
      const hasMedia = section.image || section.gallery?.length;
      const layout = portrait ? styles.portrait : hasMedia ? styles.visual : styles.essay;
      const panel = hasMedia && index % 3 === 0 ? styles.panel : "";
      return <section className={`${styles.section} ${layout} ${panel}`} key={section.title}><div className={`container ${styles.sectionInner}`}><div className={styles.text}><h2>{section.title}</h2><div>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>{section.image ? <figure className={index % 2 ? styles.offset : ""} style={portrait ? { maxWidth: Math.min(section.image.width, 420) } : undefined}><Image src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} sizes={portrait ? "(max-width: 760px) 80vw, 420px" : "90vw"} loading="lazy" /></figure> : null}{section.gallery?.length ? <div className={styles.gallery} data-count={section.gallery.length}>{section.gallery.map(image => <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 90vw, 44vw" style={{ maxWidth: image.width }} loading="lazy" />{image.caption ? <figcaption>{image.caption}</figcaption> : null}</figure>)}</div> : null}{section.analyticsEvidence?.length ? <AnalyticsEvidencePanels items={section.analyticsEvidence} /> : null}{placement === index ? <div className={styles.chapterFilm}><ProjectIntroduction project={project} /></div> : null}</div></section>;
    })}</div>
    <div className="container"><VerifiedResults results={project.results} />{project.id === "ilab" ? <p className={styles.evidence}>Public interface captures: November 2026. Analytics and Search Console reports were supplied by the project owner. Private administration and customer data are excluded.</p> : null}</div>
    <ProjectArchive project={project} />
  </article>;
}
