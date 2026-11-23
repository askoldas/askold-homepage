import Link from "next/link";
import { ArrowUpRight } from "./arrow-up-right";
import styles from "./mobile-home-actions.module.css";

export function MobileHomeActions() {
  return <nav className={styles.bar} aria-label="Project actions">
    <Link className={styles.primary} href="/#contact">Let&apos;s talk <ArrowUpRight /></Link>
    <Link className={styles.secondary} href="/work">View work <ArrowUpRight /></Link>
  </nav>;
}
