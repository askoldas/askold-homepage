import Link from "next/link";
import { services, type Service } from "@/content/services";
import { getProject } from "@/content/projects";

export function serviceById(id: string): Service {
  return services.find(service => service.id === id)!;
}

export function ServiceDeliverables({ service, level = 3 }: { service: Service; level?: 3 | 4 }) {
  const Heading = level === 4 ? "h4" : "h3";
  return <><Heading>What we can work on</Heading><ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul><p>{service.fit}</p></>;
}

export function ServiceReferences({ service }: { service: Service }) {
  return <p>Related work: {[service.project, ...(service.relatedProjects || [])].map((slug, index, items) => <span key={slug}>{index ? index === items.length - 1 ? " and " : ", " : ""}<Link href={`/work/${slug}`}>{getProject(slug)?.title}</Link></span>)}.</p>;
}
