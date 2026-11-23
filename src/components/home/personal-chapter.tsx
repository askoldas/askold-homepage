import Link from "next/link";
import { ArrowUpRight } from "@/components/site/arrow-up-right";
import styles from "./personal-chapter.module.css";

export function PersonalChapter() {
  return <section className={styles.chapter} id="about" aria-labelledby="atelier-about-heading"><div className="container">
    <h2 id="atelier-about-heading">One person.<br />Every detail.</h2>
    <div className={styles.composition}><span className={styles.identityMask} aria-hidden="true"><span className={styles.identity} data-home-reveal="identity">.ME</span></span><div className={styles.statement}><h3>Askold Makrikov</h3><p className={styles.role}>Independent designer &amp; developer.</p><p>I connect the expressive side of design with the practical work of making websites function. You work directly with me, from the first conversation through design and development.</p><p>Further improvements can follow as your business changes.</p><Link href="/about">More about me <span aria-hidden="true"><ArrowUpRight /></span></Link></div></div>
  </div></section>;
}
