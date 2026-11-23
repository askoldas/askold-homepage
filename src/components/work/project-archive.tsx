import Image from "next/image";
import type { CaseProject } from "@/content/projects";
import { projectArchive } from "@/content/project-archive";
import styles from "./project-archive.module.css";

export function ProjectArchive({ project }: { project: CaseProject }) {
  const used = new Set<string>();
  if (project.introPlacement !== "hero" || !project.introVideo) used.add((project.caseHero || project.cover).src);
  project.sections.forEach(section => { if (section.image) used.add(section.image.src); section.gallery?.forEach(image => used.add(image.src)); });
  const groups = (projectArchive[project.id] || []).map(group => ({ ...group, images: group.images.filter(image => { if (used.has(image.src)) return false; used.add(image.src); return true; }) })).filter(group => group.images.length);
  const count = groups.reduce((total, group) => total + group.images.length, 0);
  if (!count) return null;
  return <section className={`container ${styles.archive}`} aria-label="More project imagery"><details><summary><span>More from this project</span><span className={styles.count}>{count} images</span><span className={styles.indicator} aria-hidden="true"><span>+</span><span>−</span></span></summary><div className={styles.content}>{groups.map(group => <section className={styles.group} key={group.title}><h2>{group.title}</h2><div className={styles.grid}>{group.images.map(image => <figure key={image.src}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 600px) 90vw, (max-width: 1000px) 44vw, 29vw" style={{ width: "100%", maxWidth: image.width, height: "auto" }} loading="lazy" /><figcaption>{image.caption}</figcaption></figure>)}</div></section>)}</div></details></section>;
}
