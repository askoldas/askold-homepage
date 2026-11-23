"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/content/services";
import styles from "./process-timeline.module.css";

export function ProcessTimeline() {
  const chapter = useRef<HTMLElement>(null);
  const number = useRef<HTMLSpanElement>(null);
  const progress = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const root = chapter.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const stages = Array.from(root.querySelectorAll<HTMLElement>("[data-process-stage]"));
        const numeral = number.current;
        if (!numeral || !progress.current || !stages.length) return;
        root.dataset.enhanced = "true";
        let active = -1;
        const showStage = (index: number) => {
          if (active === index) return;
          active = index;
          gsap.killTweensOf(numeral);
          gsap.to(numeral, { opacity: 0, y: -8, duration: .08, onComplete: () => {
            numeral.textContent = String(index + 1).padStart(2, "0");
            gsap.fromTo(numeral, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .16, overwrite: true });
          } });
        };
        let thresholds: number[] = [];
        const measureStages = () => {
          thresholds = stages.map(stage => window.scrollY + stage.getBoundingClientRect().top - window.innerHeight * .5);
        };
        const selectStage = (scroll: number) => {
          showStage(thresholds.reduce((selected, threshold, index) => scroll >= threshold ? index : selected, 0));
        };
        measureStages();
        const animation = gsap.fromTo(progress.current, { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: {
          trigger: stages[0], start: "top 65%", endTrigger: stages[stages.length - 1], end: "top 45%", scrub: true,
          onUpdate: self => selectStage(self.scroll()),
          onRefresh: self => { measureStages(); selectStage(self.scroll()); },
        } });
        let frame = 0;
        let disposed = false;
        const scheduleRefresh = () => {
          if (disposed) return;
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            // A modal temporarily fixes the body; measure the restored page instead.
            if (disposed || document.body.style.position === "fixed") return;
            animation.scrollTrigger?.refresh();
          });
        };
        const observer = new ResizeObserver(scheduleRefresh);
        const main = root.closest("main");
        observer.observe(root);
        if (main) {
          observer.observe(main);
          if (main.firstElementChild) observer.observe(main.firstElementChild);
        }
        void document.fonts.ready.then(scheduleRefresh);
        scheduleRefresh();
        selectStage(window.scrollY);
        return () => {
          disposed = true;
          cancelAnimationFrame(frame);
          observer.disconnect();
          gsap.killTweensOf(numeral);
          gsap.set(numeral, { clearProps: "opacity,transform" });
          delete root.dataset.enhanced;
        };
      });
    }, root);
    return () => { media.revert(); context.revert(); };
  }, []);
  return <section className={styles.chapter} ref={chapter} aria-labelledby="atelier-process-heading">
    <div className="container"><header className={styles.heading}><h2 id="atelier-process-heading">How we get there.</h2><p>Clear decisions, focused feedback and room for good ideas.</p></header>
      <div className={styles.story}><div className={styles.counter} aria-hidden="true"><span ref={number}>01</span><span className={styles.total}>of 5</span></div>
        <div className={styles.stagesWrap}><span className={styles.track} aria-hidden="true"><span ref={progress} /></span><ol className={styles.stages}>{processSteps.map((step, index) => <li key={step.title} data-process-stage><span className={styles.stageNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol></div>
      </div>
    </div>
  </section>;
}
