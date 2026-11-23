"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { services } from "@/content/services";
import styles from "./services-workbench.module.css";

const groups = [
  { word: "Brand", title: "Brand identity & visual design", description: "A recognizable identity, from your logo and typography to digital and print materials.", ids: ["brand-identity"] },
  { word: "Web", title: "Web design & redesign", description: "A distinctive website shaped around your audience, content and next step.", ids: ["design"] },
  { word: "Build", title: "Custom development & e-commerce", description: "Websites, online shops and web applications built around how your business works.", ids: ["development", "ecommerce", "applications"] },
  { word: "Improve", title: "SEO, optimization & ongoing support", description: "Clearer structure, better performance and practical improvements as your business changes.", ids: ["seo-performance", "support"] },
] as const;

export function ServicesWorkbench() {
  const [active, setActive] = useState<number | null>(0);
  const disclosures = useRef<(HTMLDetailsElement | null)[]>([]);
  const tweens = useRef<gsap.core.Tween[]>([]);
  useLayoutEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    disclosures.current.forEach((element, index) => {
      if (!element) return;
      element.removeAttribute("name");
      const height = element.getBoundingClientRect().height;
      const wasAnimating = tweens.current[index]?.isActive();
      tweens.current[index]?.kill();
      const expanded = active === index;
      const summary = element.querySelector("summary")!;
      const description = element.querySelector<HTMLElement>(`#home-service-${index}`)!;
      if (!expanded && element.contains(document.activeElement) && document.activeElement !== summary) summary.focus({ preventScroll: true });
      summary.setAttribute("aria-expanded", String(expanded));
      description.inert = !expanded;
      if (element.open === expanded && !wasAnimating) {
        element.style.removeProperty("height"); element.style.removeProperty("overflow"); return;
      }
      if (reduced) { element.open = expanded; element.style.removeProperty("height"); element.style.removeProperty("overflow"); return; }
      element.style.height = "auto";
      element.open = true;
      const target = expanded ? element.getBoundingClientRect().height : summary.getBoundingClientRect().height;
      element.style.height = `${height}px`;
      element.style.overflow = "hidden";
      tweens.current[index] = gsap.to(element, { height: target, duration: .28, ease: "power2.out", onComplete: () => {
        element.open = expanded;
        element.style.removeProperty("height"); element.style.removeProperty("overflow");
      } });
    });
  }, [active]);
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      if (!motion.matches) return;
      disclosures.current.forEach((element, index) => {
        tweens.current[index]?.kill();
        if (element) { element.open = active === index; element.style.removeProperty("height"); element.style.removeProperty("overflow"); }
      });
    };
    motion.addEventListener("change", settle);
    return () => motion.removeEventListener("change", settle);
  }, [active]);
  useEffect(() => () => {
    tweens.current.forEach(tween => tween.kill());
    disclosures.current.forEach(element => { element?.style.removeProperty("height"); element?.style.removeProperty("overflow"); });
  }, []);
  return <section className={styles.chapter} aria-labelledby="atelier-services-heading">
    <div className="container"><h2 id="atelier-services-heading" data-home-reveal="services">Made for your business.</h2><p className={styles.introduction}>From the first impression to the way it works.</p>
      <div className={styles.explorer}>{groups.map((group, index) => <details className={styles.disclosure} key={group.word} name="home-services" open={index === 0} ref={element => { disclosures.current[index] = element; }} data-expanded={active === index}>
        <summary aria-controls={`home-service-${index}`} onClick={event => { event.preventDefault(); setActive(current => current === index ? null : index); }}><span className={styles.verb}>{group.word}</span><span className={styles.name}>{group.title}</span><span className={styles.toggle} aria-hidden="true"><span>+</span><span>−</span></span></summary>
        <div className={styles.description} id={`home-service-${index}`}><p>{group.description}</p><ul>{group.ids.map(id => { const service = services.find(item => item.id === id)!; return <li key={id}><Link href={`/services#${id}`}>{service.title}</Link></li>; })}</ul></div>
      </details>)}</div>
      <Link className={styles.allServices} href="/services">Explore services and deliverables</Link>
    </div>
  </section>;
}
