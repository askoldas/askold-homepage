"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { identityBrands } from "./services-content";
import styles from "./identity-carousel.module.css";

export function IdentityCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const selected = useRef(0);
  const [active, setActive] = useState(0);
  const move = useCallback((index: number) => {
    const element = track.current;
    if (!element) return;
    const next = (index + identityBrands.length) % identityBrands.length;
    selected.current = next;
    setActive(next);
    element.scrollTo({ left: (element.children[next] as HTMLElement).offsetLeft, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, []);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    let timer: ReturnType<typeof setTimeout>;
    const settle = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const slides = Array.from(element.children) as HTMLElement[];
        const next = slides.reduce((nearest, slide, index) => Math.abs(slide.offsetLeft - element.scrollLeft) < Math.abs(slides[nearest].offsetLeft - element.scrollLeft) ? index : nearest, 0);
        if (next !== selected.current) { selected.current = next; setActive(next); }
      }, 120);
    };
    const resize = new ResizeObserver(() => { element.scrollTo({ left: (element.children[selected.current] as HTMLElement).offsetLeft, behavior: "auto" }); });
    element.addEventListener("scroll", settle, { passive: true }); resize.observe(element);
    return () => { clearTimeout(timer); element.removeEventListener("scroll", settle); resize.disconnect(); };
  }, []);
  return <section className={styles.carousel} aria-label="Brand identity examples" aria-roledescription="carousel">
    <div className={styles.brands} role="group" aria-label="Choose a brand">{identityBrands.map((brand, index) => <button type="button" key={brand.name} aria-pressed={active === index} aria-controls="services-identity-track" onClick={() => move(index)}>{brand.name}</button>)}</div>
    <div className={styles.track} ref={track} id="services-identity-track" tabIndex={0} aria-label="Brand examples, scroll horizontally" onKeyDown={event => { if (event.target !== event.currentTarget) return; if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(selected.current + (event.key === "ArrowRight" ? 1 : -1)); } }}>
      {identityBrands.map((brand, index) => <article className={styles.slide} key={brand.name} aria-roledescription="slide" aria-label={`${index + 1} of ${identityBrands.length}: ${brand.name}`}><h3>{brand.name}</h3><div className={styles.collage}>{brand.images.map((image, position) => <figure key={image.src} className={position === 0 ? styles.dominant : undefined}><Image {...image} alt={image.alt} loading="lazy" sizes={position === 0 ? "(max-width: 760px) 85vw, 54vw" : "(max-width: 760px) 42vw, 32vw"} /></figure>)}</div></article>)}
    </div>
    <div className={styles.controls}><button type="button" onClick={() => move(selected.current - 1)} aria-controls="services-identity-track"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M20 12H4m6-6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg>Previous</button><span role="status" aria-live="polite" aria-atomic="true">{active + 1} of {identityBrands.length}</span><button type="button" onClick={() => move(selected.current + 1)} aria-controls="services-identity-track">Next<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path d="M4 12h16m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg></button></div>
    <noscript><style>{`.${styles.brands}, .${styles.controls} { display: none; }`}</style></noscript>
  </section>;
}
