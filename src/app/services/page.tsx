import Image from "next/image";
import Link from "next/link";
import { ArtPageHeading } from "@/components/work/art-page-heading";
import { PageShell } from "@/components/site/site-shell";
import { PageInquiry } from "@/components/interior/page-inquiry";
import { TechnicalSelector } from "@/components/services/technical-selector";
import { IdentityCarousel } from "@/components/services/identity-carousel";
import { identityDeliverables, improvementServices, serviceDirectory, webDeliverables } from "@/components/services/services-content";
import { getProject, ilabSearchEvidence } from "@/content/projects";
import { pageMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = pageMetadata("Brand identity, web design & development services", "Brand identity, web design, custom development, e-commerce, web applications, SEO and ongoing support by independent designer and developer Askold Makrikov.", "/services");

export default function ServicesPage() {
  const webExamples = [
    { project: getProject("ilab")!, caption: "iLab — repair-service website" },
    { project: getProject("fixmobile")!, caption: "FixMobile — e-commerce design" },
  ];
  return <PageShell><div className={styles.page}>
    <ArtPageHeading kind="services" />
    <nav className={`container ${styles.directory}`} aria-labelledby="services-directory-heading">
      <h2 id="services-directory-heading">Services</h2>
      <ol>{serviceDirectory.map((service, index) => <li key={service.id}><a href={`#${service.id}`}><span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><span className={styles.serviceName}>{service.title}</span><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M12 4v16m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg></a></li>)}</ol>
    </nav>
    <section className={`${styles.chapter} ${styles.brand}`} aria-labelledby="brand-identity">
      <div className="container"><div className={styles.brandIntroduction}><h2 id="brand-identity">Brand identity &amp; visual design</h2><p>A recognizable identity, carried consistently from your website to the materials people hold.</p><ul className={styles.deliverables}>{identityDeliverables.map(item => <li key={item}>{item}</li>)}</ul></div>
        <IdentityCarousel />
        <Link className={styles.workLink} href="/work?discipline=brand-identity#project-index">Explore identity work</Link>
      </div>
    </section>
    <section className={`${styles.chapter} ${styles.web}`} aria-labelledby="design">
      <div className="container"><h2 id="design">Web design &amp; redesign</h2><p className={styles.webStatement}>Designed to make an impression.<br />Built to make a difference.</p><p className={styles.webDescription}>Clear structure, considered typography and responsive interfaces that help people understand your offer and take the next step.</p>
        <ul className={styles.deliverables}>{webDeliverables.map(item => <li key={item}>{item}</li>)}</ul>
        <div className={styles.webProof}>{webExamples.map(({ project, caption }) => <figure key={project.id}><Link className={styles.webPreview} href={`/work/${project.slug}`} aria-label={`Explore the ${project.title} website case study`}><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 760px) 42vw, 300px" loading="lazy" /></Link><figcaption><Link href={`/work/${project.slug}`}>{caption}</Link></figcaption></figure>)}</div>
      </div>
    </section>
    <section className={`${styles.chapter} ${styles.technical}`} aria-labelledby="technical-heading"><div className="container"><h2 id="technical-heading">Built around your business.</h2><p className={styles.technicalIntroduction}>A website, a shop or a tailored tool — shaped around what the business needs to do.</p><TechnicalSelector /></div></section>
    <section className={`${styles.chapter} ${styles.improve}`} aria-labelledby="improve-heading"><div className="container"><h2 id="improve-heading">Good work doesn’t end at launch.</h2><div className={styles.improvementRows}>{improvementServices.map(service => <article className={styles.improvementRow} key={service.id} aria-labelledby={service.id}><div className={styles.improvementTitle}><span className={styles.number} aria-hidden="true">{service.number}</span><h3 id={service.id}>{service.title}</h3></div><div><p>{service.description}</p><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>{service.id === "seo-performance" ? <figure className={styles.seoEvidence}><a href={ilabSearchEvidence.image.src} target="_blank" rel="noopener noreferrer" aria-label="View full-size iLab Search Console report (opens in a new tab)"><Image src={ilabSearchEvidence.image.src} alt={ilabSearchEvidence.image.alt} width={ilabSearchEvidence.image.width} height={ilabSearchEvidence.image.height} sizes="(max-width: 900px) 90vw, 720px" loading="lazy" /></a><figcaption><p>{ilabSearchEvidence.period}</p><p>{ilabSearchEvidence.caption}</p><div className={styles.evidenceLinks}><a href={ilabSearchEvidence.image.src} target="_blank" rel="noopener noreferrer" aria-label="View full-size iLab Search Console report (opens in a new tab)">View full-size report</a><Link href="/work/ilab">Explore the iLab case study</Link></div></figcaption></figure> : null}</div></article>)}</div></div></section>
    <PageInquiry flush />
  </div></PageShell>;
}
