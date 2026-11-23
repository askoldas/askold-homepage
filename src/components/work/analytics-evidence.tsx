import Image from "next/image";
import type { AnalyticsEvidence } from "@/content/projects";
import styles from "./analytics-evidence.module.css";

export function AnalyticsEvidencePanels({ items }: { items: readonly AnalyticsEvidence[] }) {
  return <div className={styles.panels} aria-label="Analytics evidence">{items.map(item => <figure className={styles.item} key={item.title} style={item.image ? { maxWidth: item.image.width } : undefined}>
    <h3>{item.title}</h3>
    {item.image ? <a className={styles.report} href={item.image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size report: ${item.title} (opens in a new tab)`}><Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} sizes={`(max-width: 1140px) 90vw, ${item.image.width}px`} loading="lazy" /></a> : <div className={styles.placeholder}><p>Report not yet provided</p></div>}
    <figcaption>{item.period ? <p>Period: {item.period}</p> : null}{item.caption ? <p>{item.caption}</p> : null}{item.capturedOn ? <p>Captured: {item.capturedOn}</p> : null}{item.image ? <a href={item.image.src} target="_blank" rel="noopener noreferrer" aria-label={`View full-size report: ${item.title} (opens in a new tab)`}>View full-size report</a> : null}</figcaption>
  </figure>)}</div>;
}
