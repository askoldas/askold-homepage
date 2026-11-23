import Link from "next/link";
import styles from "./page-inquiry.module.css";

export function PageInquiry({ title = "What could we create together?", flush = false }: { title?: string; flush?: boolean }) {
  return <section className={`${styles.chapter}${flush ? ` ${styles.flush}` : ""}`}><div className={`container ${styles.composition}`}><h2 data-home-reveal="closing">{title}</h2><div><p>A first idea or a specific challenge. Tell me where you want to go.</p><Link className="button-gold" href="/#contact" data-home-reveal="action">Talk about your project</Link></div></div></section>;
}
