import Image from "next/image";
import type { ProjectImage, VerifiedProjectResult } from "@/types/project";

export function ProjectMedia({ image, priority = false, className = "" }: { image: ProjectImage; priority?: boolean; className?: string }) {
  return <figure className={`project-media ${className}`}><Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1440px) 90vw, 1312px" priority={priority} /></figure>;
}
export function VerifiedResults({ results }: { results?: readonly VerifiedProjectResult[] }) {
  const approved = results?.filter(result => result.publicationApproved && result.value && result.period && result.evidence.source);
  if (!approved?.length) return null;
  return <section className="verified-results"><h2>Measured results</h2><dl>{approved.map(result => <div key={`${result.label}-${result.period}`}><dt>{result.label}</dt><dd className="result-value">{result.value} {result.unit}</dd><dd>{result.metricDefinition}</dd><dd>{result.period}{result.baseline ? ` · Baseline: ${result.baseline}` : ""}</dd><dd><a href={result.evidence.source}>{result.evidence.title}</a></dd></div>)}</dl></section>;
}
