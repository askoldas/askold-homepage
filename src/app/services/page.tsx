import Link from "next/link";
import { services, processSteps } from "@/content/services";
import { getProject } from "@/content/projects";
import { PageShell, ContactInvitation } from "@/components/site/site-shell";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Web design, development & support services", "Web design, custom development, e-commerce, web applications, SEO and ongoing support. Work directly with Askold Makrikov.", "/services");
export default function ServicesPage() {
  return <PageShell><header className="page-heading container"><h1>A website with<br />a clear purpose.</h1><p>Design, development and improvement, connected from the start. Work with me on a complete project or a focused part of your website.</p></header><nav className="service-anchors container" aria-label="Services">{services.map(service => <a href={`#${service.id}`} key={service.id}>{service.title}</a>)}</nav><div className="service-details container">{services.map(service => <section id={service.id} key={service.id}><h2>{service.title}</h2><div><p className="lead-copy">{service.summary}</p><p>{service.detail}</p><h3>What we can work on</h3><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul><p>{service.fit}</p><Link className="text-link" href={`/work/${service.project}`}>See the {getProject(service.project)?.title} project</Link><Link className="text-link" href="/contact">Discuss this service</Link></div></section>)}</div><section className="process-section container"><h2>How we work together.</h2><ol className="process-list">{processSteps.map(step => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></section><ContactInvitation /></PageShell>;
}
