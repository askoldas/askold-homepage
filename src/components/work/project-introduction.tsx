import type { CaseProject } from "@/content/projects";
import { ArtVideo } from "./art-video";
import styles from "./art-video.module.css";

export function ProjectIntroduction({ project, context = "passage" }: { project: CaseProject; context?: "hero" | "passage" }) {
  if (!project.introVideo) return null;
  return <div className={styles.introduction}><ArtVideo {...project.introVideo} variant={context} playback="on-view" label={`${project.title} brand film`} /></div>;
}
