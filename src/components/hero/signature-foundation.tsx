"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./signature-foundation.module.css";

const EMAIL = "/contact";
const WORK = "/work";
const SCULPTURE = "/media/hero/sculpture-poster.webp";
const BONSAI = "/media/hero/bonsai-poster.webp";

// Active travel in viewport heights; the sticky stage adds one more viewport.
export const HERO_SCROLL = { desktop: 3.5, mobile: 2.5 } as const;

export function Header() {
  const disclosure = useRef<HTMLDetailsElement>(null);
  const summary = useRef<HTMLElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key !== "Escape" || !disclosure.current?.open) return;
      disclosure.current.open = false;
      summary.current?.focus();
    }
    function outside(event: PointerEvent) {
      if (disclosure.current?.open && event.target instanceof Node && !header.current?.contains(event.target)) disclosure.current.open = false;
    }
    document.addEventListener("keydown", escape);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", escape);
      document.removeEventListener("pointerdown", outside);
    };
  }, []);
  function links() {
    const close = () => { if (disclosure.current) disclosure.current.open = false; };
    return <>
      <a href={WORK} onClick={close}>Work</a>
      <a href="/services" onClick={close}>Services</a>
      <a href={EMAIL} onClick={close}>Contact <span aria-hidden="true">&#8599;</span></a>
    </>;
  }
  return <header className={styles.header} ref={header}>
    <Link className={styles.brand} href="/" aria-label={"Askold \u2014 homepage"}>Askold</Link>
    <nav className={`${styles.navigation} ${styles.desktopNavigation}`} aria-label="Main navigation">{links()}</nav>
    <details className={styles.mobileNavigation} ref={disclosure}>
      <summary className={styles.menu} ref={summary}>Menu <span aria-hidden="true">+</span></summary>
      <nav className={styles.navigation} aria-label="Main navigation">{links()}</nav>
    </details>
  </header>;
}

function SignatureHero() {
  const section = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const viewportMeasure = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const typedTitle = useRef<HTMLDivElement>(null);
  const firstLine = useRef<HTMLSpanElement>(null);
  const secondLine = useRef<HTMLSpanElement>(null);
  const finalTitle = useRef<HTMLDivElement>(null);
  const initialDescription = useRef<HTMLParagraphElement>(null);
  const finalDescription = useRef<HTMLParagraphElement>(null);
  const initialHash = useRef<string | null>(null);
  const initialAnchorRestored = useRef(false);
  const [motion, setMotion] = useState(false);
  const [decoded, setDecoded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setMotion(!preference.matches); setDecoded(false); };
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const media = video.current;
    const wrapper = section.current;
    const panel = stage.current;
    const ruler = viewportMeasure.current;
    if (!wrapper || !panel || !ruler) return;
    if (initialHash.current === null) initialHash.current = window.location.hash;
    const compact = window.matchMedia("(max-width: 760px), (max-height: 620px)");
    const header = document.querySelector<HTMLElement>("header");
    let disposed = false;
    let layoutRequest = 0;
    let anchorRequest = 0;
    let refreshRequest = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const controller: { trigger?: ScrollTrigger; timeline?: gsap.core.Timeline } = {};
    const lineOne = firstLine.current;
    const lineTwo = secondLine.current;
    let runDistance = 0;

    function measureLayout() {
      layoutRequest = 0;
      if (disposed) return;
      const viewportHeight = ruler!.getBoundingClientRect().height;
      panel!.style.setProperty("--hero-header-clearance", `${(header?.getBoundingClientRect().height ?? 0) + 16}px`);
      const computed = getComputedStyle(panel!);
      const padding = parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom);
      const copyHeight = copy.current?.getBoundingClientRect().height ?? 0;
      const controlsHeight = controls.current?.getBoundingClientRect().height ?? 0;
      const vertical = window.matchMedia("(max-width: 760px) and (min-height: 521px)").matches;
      const required = vertical ? copyHeight + controlsHeight + 144 + padding + 16 : Math.max(copyHeight + controlsHeight + 12, 144) + padding;
      const overflow = required > viewportHeight;
      const nextDistance = motion && !failed && !overflow ? viewportHeight * (compact.matches ? HERO_SCROLL.mobile : HERO_SCROLL.desktop) : 0;
      const changed = nextDistance !== runDistance || wrapper!.dataset.overflow !== String(overflow);
      runDistance = nextDistance;
      wrapper!.dataset.overflow = String(overflow);
      wrapper!.style.setProperty("--scene-scroll-px", `${runDistance}px`);
      if (changed) controller.trigger?.refresh();
    }
    function scheduleLayout() { if (!disposed && !layoutRequest) layoutRequest = requestAnimationFrame(measureLayout); }
    function resize() { clearTimeout(resizeTimer); resizeTimer = setTimeout(scheduleLayout, 120); }
    const layoutObserver = new ResizeObserver(scheduleLayout);
    if (copy.current) layoutObserver.observe(copy.current);
    if (controls.current) layoutObserver.observe(controls.current);
    if (header) layoutObserver.observe(header);
    window.addEventListener("resize", resize);
    compact.addEventListener("change", scheduleLayout);
    measureLayout();
    function cleanupLayout() {
      disposed = true;
      cancelAnimationFrame(layoutRequest);
      clearTimeout(resizeTimer);
      layoutObserver.disconnect();
      window.removeEventListener("resize", resize);
      compact.removeEventListener("change", scheduleLayout);
      panel!.style.removeProperty("--hero-header-clearance");
      wrapper!.style.removeProperty("--scene-scroll-px");
      delete wrapper!.dataset.overflow;
    }
    if (!motion || failed || !media) return cleanupLayout;

    gsap.registerPlugin(ScrollTrigger);
    let shown = false;
    let visible = true;
    let ready = media.readyState >= HTMLMediaElement.HAVE_METADATA;
    let raf = 0;
    const greeting = "Hello, I'm\nAskold.";
    const idea = "Make your ideas\nvisible.";
    const playhead = { frame: 0, greeting: greeting.length, idea: 0, hold: 0 };

    function reveal() {
      if (shown || disposed) return;
      shown = true;
      setDecoded(true);
    }
    function pump() {
      raf = 0;
      if (disposed || !ready || !visible || document.hidden || media!.seeking || media!.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(media!.duration)) return;
      // Verified 67 fps original: this point remains inside its final frame.
      const target = playhead.frame * Math.max(0, media!.duration - 0.005);
      if (Math.abs(media!.currentTime - target) < 0.003) { reveal(); return; }
      try { media!.currentTime = target; } catch { /* Readiness events retry exact seeks once data becomes available. */ }
    }
    function schedule() { if (!disposed && !raf) raf = requestAnimationFrame(pump); }
    function metadata() { ready = true; schedule(); }
    function seeked() { reveal(); schedule(); }
    function error() { setFailed(true); setDecoded(false); }

    function updateScene() {
      const typingIdea = (controller.timeline?.time() ?? 0) >= 0.25;
      const count = Math.round(typingIdea ? playhead.idea : playhead.greeting);
      const lines = (typingIdea ? idea : greeting).slice(0, count).split("\n");
      if (lineOne && lineOne.textContent !== (lines[0] ?? "")) lineOne.textContent = lines[0] ?? "";
      if (lineTwo && lineTwo.textContent !== (lines[1] ?? "")) lineTwo.textContent = lines[1] ?? "";
      schedule();
    }
    // Numeric scrub drives this timeline; its onUpdate drives BOTH video and text.
    controller.timeline = gsap.timeline({ paused: true, defaults: { ease: "none" }, onUpdate: updateScene });
    controller.timeline.to(playhead, { greeting: 0, duration: 0.1 }, 0.15)
      .to(playhead, { idea: idea.length, duration: 0.2 }, 0.25)
      .to(playhead, { frame: 0.2, duration: 0.3 }, 0.15)
      .to(playhead, { frame: 1, duration: 0.35 }, 0.45)
      .to(typedTitle.current, { autoAlpha: 0, duration: 0.05 }, 0.8)
      .fromTo(finalTitle.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.8)
      .to(initialDescription.current, { autoAlpha: 0, duration: 0.05 }, 0.8)
      .fromTo(finalDescription.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.8)
      .to(playhead, { hold: 1, duration: 0.15 }, 0.85);

    media.addEventListener("loadedmetadata", metadata);
    media.addEventListener("loadeddata", schedule);
    media.addEventListener("canplay", schedule);
    media.addEventListener("seeked", seeked);
    media.addEventListener("error", error);
    document.addEventListener("visibilitychange", schedule);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    }, { rootMargin: "100px" });
    observer.observe(wrapper);

    function reconcileRefresh(self: ScrollTrigger) {
      cancelAnimationFrame(refreshRequest);
      refreshRequest = requestAnimationFrame(() => {
        refreshRequest = 0;
        if (disposed) return;
        ScrollTrigger.update();
        // Reconcile once after geometry/scroll restoration, then resume scrub.
        self.getTween()?.progress(1);
        controller.timeline?.progress(self.progress);
      });
    }
    controller.trigger = ScrollTrigger.create({
      trigger: wrapper,
      animation: controller.timeline,
      start: "top top",
      end: () => `+=${Math.max(1, wrapper.dataset.overflow === "true" ? wrapper.offsetHeight * 0.6 : runDistance)}`,
      scrub: 0.3,
      onRefresh: reconcileRefresh,
    });
    controller.timeline.progress(controller.trigger.progress);
    updateScene();
    schedule();
    if (!initialAnchorRestored.current) {
      initialAnchorRestored.current = true;
      const hash = initialHash.current;
      if (hash && hash !== "#") {
        anchorRequest = requestAnimationFrame(() => {
          if (disposed) return;
          let id: string;
          try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
          const destination = document.getElementById(id);
          if (!destination) return;
          destination.scrollIntoView({ behavior: "instant", block: "start" });
          controller.trigger?.update();
        });
      }
    }

    return () => {
      cleanupLayout();
      cancelAnimationFrame(anchorRequest);
      cancelAnimationFrame(refreshRequest);
      cancelAnimationFrame(raf);
      observer.disconnect();
      controller.trigger?.kill();
      controller.timeline?.revert();
      if (lineOne) lineOne.textContent = "Hello, I'm";
      if (lineTwo) lineTwo.textContent = "Askold.";
      media.removeEventListener("loadedmetadata", metadata);
      media.removeEventListener("loadeddata", schedule);
      media.removeEventListener("canplay", schedule);
      media.removeEventListener("seeked", seeked);
      media.removeEventListener("error", error);
      document.removeEventListener("visibilitychange", schedule);
    };
  }, [motion, failed]);

  return (
    <section className={styles.hero} ref={section} data-motion={motion && !failed} aria-labelledby="hero-heading">
      <div className={styles.viewportMeasure} ref={viewportMeasure} aria-hidden="true" />
      <div className={styles.stage} ref={stage}>
        <div className={styles.copy} ref={copy}>
          <h1 id="hero-heading" className={styles.srOnly}>Askold Makrikov — independent web designer and developer.</h1>
          <div className={styles.title} aria-hidden="true">
            <div ref={typedTitle} className={styles.intro}><span ref={firstLine}>Hello, I&apos;m</span><span ref={secondLine}>Askold.</span></div>
            <div ref={finalTitle} className={styles.outro}><span>Make them</span><span>work.</span></div>
          </div>
          <div className={styles.description}>
            <p ref={initialDescription}>Independent web design &amp; development.</p>
            <p ref={finalDescription} className={styles.finalDescription}>Websites built for your business.</p>
          </div>
        </div>
        <div className={styles.controls} ref={controls}>
          <div className={styles.actions}>
            <a className={styles.primary} href={EMAIL}>Let&apos;s talk <span aria-hidden="true">&#8599;</span></a>
            <a className={styles.link} href={WORK}>View work <span aria-hidden="true">&#8599;</span></a>
          </div>
          <a className={styles.skipAnimation} href="#approach">Skip animation <span aria-hidden="true">&#8595;</span></a>
        </div>
        <div className={styles.artwork} aria-hidden="true">
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={BONSAI} />
            {/* Native picture selects the correct static artwork before JS. */}
            <img className={styles.poster} src={failed ? BONSAI : SCULPTURE} alt="" width="480" height="720" fetchPriority="high" decoding="async" />
          </picture>
          {motion && !failed ? <video ref={video} className={styles.video} data-decoded={decoded} src="/media/hero/intro.mp4" poster={SCULPTURE} preload="auto" muted playsInline disablePictureInPicture tabIndex={-1} /> : null}
        </div>
      </div>
    </section>
  );
}

export function SignatureFoundation({ children }: { children?: ReactNode }) {
  return (
    <div className={styles.site} id="top">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <SignatureHero />
        {children ?? <section className={styles.bridge} id="approach" aria-labelledby="approach-heading" tabIndex={-1}>
          <h2 id="approach-heading">Good design has a job to do.</h2>
          <div className={styles.bridgeCopy}>
            <p>I bring design and development together to make clear, distinctive websites — from custom builds and e-commerce to ongoing optimization.</p>
            <div className={styles.actions}>
              <a className={styles.link} href={WORK}>Explore my current portfolio <span aria-hidden="true">↗</span></a>
              <a className={styles.link} href={EMAIL}>Discuss your project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>}
      </main>
    </div>
  );
}
