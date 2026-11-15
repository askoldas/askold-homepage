export type ProjectDiscipline = "design" | "development" | "ecommerce" | "seo" | "optimization";

export interface ProjectEvidence {
  title: string;
  source: string;
  verifiedOn: string;
  note?: string;
}
export interface VerifiedProjectResult {
  metricDefinition: string;
  unit: string;
  label: string;
  value: string;
  baseline?: string;
  period: string;
  evidence: ProjectEvidence;
  publicationApproved: true;
}
export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}
export interface Project {
  /** Stable identifier independent of translated URL slugs. */
  id: string;
  slug: string;
  title: string;
  summary: string;
  disciplines: readonly ProjectDiscipline[];
  websiteUrl?: string;
  cover?: ProjectImage;
  evidence?: readonly ProjectEvidence[];
  // Omit results until evidence, reporting dates and publication approval exist.
  results?: readonly VerifiedProjectResult[];
}
