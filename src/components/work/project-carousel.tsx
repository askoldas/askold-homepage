"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import type { CaseProject } from "@/content/projects";
import styles from "./project-carousel.module.css";

export function ProjectCarousel({ projects }: { projects: readonly CaseProject[] }) {
  const stage = useRef<HTMLDivElement>(null);
  const previousButton = useRef<HTMLButtonElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const cards = useRef<(HTMLElement | null)[]>([]);
  const current = useRef(0);
  const busy = useRef(false);
  const reduced = useRef(false);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const layout = useRef<(index: number) => void>(() => {});
  const gesture = useRef({ x: 0, y: 0, active: false, swiped: false });
  const [index, setIndex] = useState(0);
  const [moving, setMoving] = useState(false);
  const count = projects.length;

  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const elements = cards.current;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (active: number) => {
      const width = element.clientWidth;
      const mobile = width < 700 && window.innerWidth <= 760;
      const gap = mobile ? 18 : Math.min(64, Math.max(32, window.innerWidth * .044));
      const primary = mobile ? width * .82 : (width - gap) * 7 / 12;
      const secondary = mobile ? primary * .62 : (width - gap) * 5 / 12;
      const offset = mobile ? 36 : Math.min(144, Math.max(88, window.innerWidth * .1));
      cards.current.forEach((card, i) => {
        if (!card) return;
        const relative = (i - active + count) % count;
        const visible = relative <= 1;
        const scale = relative === 0 ? 1 : secondary / primary;
        gsap.set(card, { width: primary, x: relative === 0 ? 0 : relative === count - 1 ? -primary - gap : relative === 1 ? primary + gap : width + gap, y: relative === 0 ? 0 : offset, visibility: visible ? "visible" : "hidden" });
        gsap.set(card.querySelector("[data-carousel-image]"), { scale });
        gsap.set(card.querySelector("[data-carousel-caption]"), { y: primary * 25 / 36 * scale + 24, width: primary * scale });
      });
    };
    layout.current = apply;
    const settle = () => {
      timeline.current?.kill();
      busy.current = false;
      setMoving(false);
      reduced.current = media.matches;
      apply(current.current);
    };
    const observer = new ResizeObserver(settle);
    observer.observe(element);
    media.addEventListener("change", settle);
    settle();
    return () => { observer.disconnect(); media.removeEventListener("change", settle); timeline.current?.kill(); elements.forEach(card => { if (card) gsap.set([card, ...card.querySelectorAll("[data-carousel-image], [data-carousel-caption]")], { clearProps: "all" }); }); };
  }, [count]);

  function move(direction: number) {
    if (busy.current || count < 2 || !stage.current) return;
    if (stage.current.contains(document.activeElement)) (direction > 0 ? nextButton : previousButton).current?.focus();
    const old = current.current;
    const next = (old + direction + count) % count;
    if (reduced.current) { current.current = next; setIndex(next); layout.current(next); return; }
    busy.current = true;
    setMoving(true);
    // Read the existing and destination transforms once; GSAP owns every frame.
    const snapshot = () => cards.current.map(card => {
      if (!card) return null;
      const image = card.querySelector("[data-carousel-image]")!;
      const caption = card.querySelector("[data-carousel-caption]")!;
      return { x: Number(gsap.getProperty(card, "x")), y: Number(gsap.getProperty(card, "y")), imageScale: Number(gsap.getProperty(image, "scaleX")), captionY: Number(gsap.getProperty(caption, "y")), captionWidth: parseFloat(String(gsap.getProperty(caption, "width"))) };
    });
    const before = snapshot();
    layout.current(next);
    const after = snapshot();
    const width = stage.current.clientWidth;
    const visible = new Set([old, (old + 1) % count, next, (next + 1) % count]);
    const animation = gsap.timeline({ onComplete: () => { current.current = next; setIndex(next); busy.current = false; setMoving(false); layout.current(next); } });
    timeline.current = animation;
    cards.current.forEach((card, i) => {
      if (!card || !before[i] || !after[i] || !visible.has(i)) return;
      const start = { ...before[i]! };
      const end = { ...after[i]! };
      if (direction === 1 && i === (next + 1) % count) start.x = width + 32;
      if (direction === -1 && i === next) start.x = -Number(gsap.getProperty(card, "width")) - 32;
      if (direction === -1 && i === (old + 1) % count) end.x = width + 32;
      const image = card.querySelector("[data-carousel-image]")!;
      const caption = card.querySelector("[data-carousel-caption]")!;
      gsap.set(card, { x: start.x, y: start.y, visibility: "visible" });
      gsap.set(image, { scale: start.imageScale });
      gsap.set(caption, { y: start.captionY, width: start.captionWidth });
      const timing = { duration: .6, ease: "power2.inOut" };
      animation.to(card, { x: end.x, y: end.y, ...timing }, 0);
      animation.to(image, { scale: end.imageScale, ...timing }, 0);
      animation.to(caption, { y: end.captionY, width: end.captionWidth, ...timing }, 0);
    });
  }

  return <div className={styles.gallery} role="region" aria-roledescription="carousel" aria-label="Selected work gallery" data-testid="project-carousel" onKeyDown={event => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); } }}>
    <div className={styles.controls}><button ref={previousButton} type="button" aria-label="Previous project" onClick={() => move(-1)} aria-disabled={moving}>←</button><span className={styles.counter}>{index + 1} of {count}</span><button ref={nextButton} type="button" aria-label="Next project" onClick={() => move(1)} aria-disabled={moving}>→</button></div>
    <div ref={stage} className={styles.stage} data-testid="project-carousel-stage" onPointerDown={event => { gesture.current = { x: event.clientX, y: event.clientY, active: event.pointerType !== "mouse", swiped: false }; }} onPointerMove={event => { const drag = gesture.current; if (!drag.active) return; const x = event.clientX - drag.x; const y = event.clientY - drag.y; if (Math.abs(y) > 16 && Math.abs(y) > Math.abs(x)) drag.active = false; else if (Math.abs(x) > 40 && Math.abs(x) > Math.abs(y) * 1.4) { drag.active = false; drag.swiped = true; move(x < 0 ? 1 : -1); } }} onPointerUp={() => { gesture.current.active = false; }} onPointerCancel={() => { gesture.current.active = false; }} onClickCapture={event => { if (busy.current || (gesture.current.swiped && event.detail > 0)) { event.preventDefault(); event.stopPropagation(); } if (event.detail > 0) gesture.current.swiped = false; }}>
      {projects.map((project, position) => { const visible = position === index || position === (index + 1) % count; return <article ref={element => { cards.current[position] = element; }} className={styles.slide} key={project.id} aria-hidden={!visible} inert={!visible || moving} role="group" aria-roledescription="slide" aria-label={`${position + 1} of ${count}: ${project.title}`} data-project-id={project.id} data-slot={position === index ? "current" : visible ? "next" : "hidden"}>
        <Link className={styles.mediaLink} data-carousel-image href={`/work/${project.slug}`} draggable={false}><div className={styles.image}><Image src={project.cover.src} alt={project.cover.alt} width={project.cover.width} height={project.cover.height} sizes="(max-width: 760px) 75vw, 52vw" draggable={false} /></div></Link><div className={styles.caption} data-carousel-caption><h3><Link href={`/work/${project.slug}`} draggable={false}>{project.title}</Link></h3><p>{project.summary}</p></div>
      </article>; })}
    </div>
    <p className="visually-hidden" aria-live="polite" aria-atomic="true">{projects[index].title}, project {index + 1} of {count}</p>
  </div>;
}
