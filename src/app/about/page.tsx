import Link from "next/link";
import { career, education, expertise, languages } from "@/content/about";
import { PageShell } from "@/components/site/site-shell";
import { PageInquiry } from "@/components/interior/page-inquiry";
import { AboutMark } from "@/components/interior/about-mark";
import { jsonLd, pageMetadata, siteOrigin } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata("About Askold — design, development & experience", "Meet Askold Makrikov, an independent web designer, developer and visual identity designer in Riga. Explore professional experience, expertise and education.", "/about");

export default function AboutPage() {
  const person = { "@context": "https://schema.org", "@type": "Person", name: "Askold Makrikov", url: `${siteOrigin}/about`, jobTitle: "Independent web designer, developer and visual identity designer", homeLocation: { "@type": "City", name: "Riga, Latvia" }, knowsLanguage: languages.map(language => language.code) };
  return <PageShell><div className={styles.page}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(person) }} />
    <header className={`container ${styles.hero}`}><h1>Experience<br />meets curiosity.</h1><div className={styles.heroComposition}><AboutMark className={styles.monogram} /><div className={styles.identity}><h2>Askold Makrikov</h2><p>Independent web designer, developer<br />and visual identity designer.</p><p>Riga, Latvia</p><a href="/CV.pdf" download>Download CV (PDF)</a></div></div></header>
    <section className={`${styles.story} ${styles.chapter}`} aria-labelledby="story-heading"><div className={`container ${styles.storyComposition}`}><h2 id="story-heading">A practical mind.<br />A creative approach.</h2><div><p>My path connects business operations, customer experience and creative work. It gives me a practical starting point for design: understand the people, the offer and the work a website needs to support.</p><p>Today I bring visual identity, interface design and development together. The aim is a coherent experience, from how a business introduces itself to how its website works in everyday use.</p><Link href="/work">See that thinking in the work</Link></div></div></section>
    <section className={`container ${styles.experience}`} aria-labelledby="experience-heading"><header className={styles.sectionHeading}><h2 id="experience-heading">Work that shaped<br />the way I work.</h2><p>Professional experience across design, development, customer support and business operations.</p></header><ol className={styles.timeline}>{career.map(item => <li key={`${item.role}-${item.dates}`}><p className={styles.dates}>{item.dates}</p><div><h3>{item.role}</h3><p className={styles.organization}>{item.organization}{"location" in item ? ` · ${item.location}` : ""}</p><ul>{item.responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}</ul></div></li>)}</ol></section>
    <section className={`${styles.expertise} ${styles.chapter}`} aria-labelledby="expertise-heading"><div className="container"><h2 id="expertise-heading">Different skills.<br />One practice.</h2><div className={styles.expertiseGrid}>{expertise.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p><p className={styles.tools}>{item.tools}</p></article>)}</div></div></section>
    <section className={`container ${styles.education}`} aria-labelledby="education-heading"><h2 id="education-heading">Learning, in practice.</h2><ul>{education.map(item => <li key={item.title}><p className={styles.dates}>{item.dates}</p><div><h3>{item.title}</h3><p>{item.institution} · {item.location}</p></div></li>)}</ul></section>
    <section className={`${styles.profile} ${styles.chapter}`} aria-labelledby="profile-heading"><div className={`container ${styles.profileComposition}`}><h2 id="profile-heading">In Riga.<br />Within reach.</h2><div><dl><div><dt>Location</dt><dd>Riga, Latvia</dd></div><div><dt>Languages</dt><dd>{languages.map(language => language.name).join(", ")}</dd></div></dl><a href="/CV.pdf" download>Download CV (PDF)</a><p className={styles.documentNote}>Original CV document, June 2025.</p></div></div></section>
    <PageInquiry />
  </div></PageShell>;
}
