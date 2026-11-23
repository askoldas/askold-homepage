import Link from "next/link";
import { carouselProjects } from "@/content/projects";
import { FeaturedProject } from "@/components/work/featured-project";
import { ProjectCarousel } from "@/components/work/project-carousel";
import { LowerHome } from "@/components/home/lower-home";
import { HomeEntrances } from "@/components/home/home-entrances";
import styles from "./home-content.module.css";

export function HomeContent() {
  return <HomeEntrances className={styles.homeContent}>
    <div className={styles.statement}>
    <section className="value-section container" id="approach" tabIndex={-1}><h2 data-home-reveal="intro">Good design has<br />a job to do.</h2><div><p className="lead-copy" data-home-reveal="copy" data-reveal-order="0">Help people understand your business. Make the next step clear. Give you a website you can keep building on.</p><p data-home-reveal="copy" data-reveal-order="1">I bring design and development together, from the first structure to the finished website. One person to work with, and a considered approach to the whole experience.</p><Link className="text-link" href="/services">Find the right service</Link></div></section>
    </div>
    <div className={styles.proof}>
    <FeaturedProject />
    <section className="selected-work container" aria-labelledby="selected-heading"><div className="section-intro"><h2 id="selected-heading" data-home-reveal="selected">More work,<br />different challenges.</h2><Link className="text-link" href="/work">View all selected work</Link></div><ProjectCarousel projects={carouselProjects} /></section>
    </div>
    <LowerHome />
  </HomeEntrances>;
}
