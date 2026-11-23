"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./signature-foundation.module.css";

const EMAIL = "/#contact";
const WORK = "/work";
const SCULPTURE = "/media/hero/sculpture-poster.webp";
const BONSAI = "/media/hero/bonsai-poster.webp";
const GREETING = "Hello, I'm\nAskold.";
const IDEA = "Let's make your\nideas visible.";
const FINAL_MESSAGE = "Then make them work\nfor your business.";

// Active travel in viewport heights; the sticky stage adds one more viewport.
export const HERO_SCROLL = { desktop: 4, compact: 2.5, mobile: .9 } as const;
const PHASE = {
  greetingErase: 0.14, ideaType: 0.23, transformStart: 0.18,
  transformAccelerate: 0.42, ideaErase: 0.63, finalType: 0.72,
  finalTyped: 0.85, release: 1,
} as const;
// Conservative crown/canopy bound from the decoded 480 × 720 original.
const ARTWORK_SOURCE_TOP = 49;

function focusApproachHeading(destination: HTMLElement) {
  const heading = destination.querySelector<HTMLElement>("h2");
  if (!heading || document.activeElement === heading) return;
  const previousTabIndex = heading.getAttribute("tabindex");
  heading.tabIndex = -1;
  heading.addEventListener("blur", () => {
    if (previousTabIndex === null) heading.removeAttribute("tabindex");
    else heading.setAttribute("tabindex", previousTabIndex);
  }, { once: true });
  heading.focus({ preventScroll: true });
}

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
    <Link className={styles.brand} href="/" aria-label="ASKOLD.ME homepage">ASKOLD.ME</Link>
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
  const composition = useRef<HTMLDivElement>(null);
  const viewportMeasure = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const controls = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const firstLine = useRef<HTMLSpanElement>(null);
  const secondLine = useRef<HTMLSpanElement>(null);
  const artwork = useRef<HTMLDivElement>(null);
  const artworkMotion = useRef<HTMLDivElement>(null);
  const initialDescription = useRef<HTMLParagraphElement>(null);
  const finalDescription = useRef<HTMLParagraphElement>(null);
  const initialHash = useRef<string | null>(null);
  const initialAnchorRestored = useRef(false);
  const [mobileMode, setMobileMode] = useState(false);
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
    const breakpoint = window.matchMedia("(max-width: 760px)");
    const update = () => { setMobileMode(breakpoint.matches); setDecoded(false); };
    update();
    breakpoint.addEventListener("change", update);
    return () => breakpoint.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#approach") return;
    function transferAnchorFocus() {
      const destination = document.getElementById("approach");
      if (window.location.hash === "#approach" && destination &&
        (document.activeElement === destination || document.activeElement === document.body)) {
        focusApproachHeading(destination);
      }
    }
    const request = requestAnimationFrame(transferAnchorFocus);
    window.addEventListener("load", transferAnchorFocus, { once: true });
    return () => {
      cancelAnimationFrame(request);
      window.removeEventListener("load", transferAnchorFocus);
    };
  }, []);

  useEffect(() => {
    const media = video.current;
    const wrapper = section.current;
    const panel = stage.current;
    const grid = composition.current;
    const ruler = viewportMeasure.current;
    if (!wrapper || !panel || !grid || !ruler) return;
    if (initialHash.current === null) initialHash.current = window.location.hash;
    const compact = window.matchMedia("(max-width: 760px), (max-height: 620px)");
    const header = document.querySelector<HTMLElement>("header");
    let disposed = false;
    let layoutRequest = 0;
    let anchorRequest = 0;
    let refreshRequest = 0;
    let resizeTimer: ReturnType<typeof setTimeout>;
    const controller: { trigger?: ScrollTrigger; timeline?: gsap.core.Timeline; departure?: gsap.core.Tween } = {};
    const lineOne = firstLine.current;
    const lineTwo = secondLine.current;
    const artFrame = artworkMotion.current;
    const framing = { openingScale: 1, openingY: 0, centerX: 0 };
    let mobileCopy = window.innerWidth <= 760;
    // Probe every displayed headline, independently of the currently typed substring.
    const widthProbe = document.createElement("span");
    widthProbe.textContent = (mobileCopy ? [GREETING, IDEA] : [GREETING, IDEA, FINAL_MESSAGE]).join("\n");
    widthProbe.setAttribute("aria-hidden", "true");
    widthProbe.style.cssText = "position:absolute;visibility:hidden;white-space:pre;width:max-content;max-width:none;pointer-events:none";
    lineOne?.parentElement?.appendChild(widthProbe);
    let runDistance = 0;
    let sceneViewportHeight = 0;

    function renderArtwork() {
      if (!artFrame || wrapper!.dataset.framing !== "cinematic") return;
      // One scrubbed time drives typing, film and upward travel through release.
      const time = controller.timeline?.time() ?? 0;
      const ascent = Math.max(0, (time - PHASE.finalType) / (PHASE.release - PHASE.finalType));
      const departurePixels = Math.max(0, time - PHASE.release) * runDistance;
      const departureRamp = Math.min(96, sceneViewportHeight * 0.1);
      // Ramp extra exit velocity smoothly; pinned composition remains unchanged.
      const rampedDeparture = departurePixels < departureRamp
        ? departurePixels * departurePixels / (2 * departureRamp)
        : departurePixels - departureRamp / 2;
      const departureOffset = (compact.matches ? 0.4 : 0.55) * rampedDeparture;
      const ascentY = mobileCopy ? 0 : sceneViewportHeight * (compact.matches ? 0.06 : 0.12) * ascent + departureOffset;
      artFrame.style.transform = `translate(-50%, -50%) translate3d(${framing.centerX * framing.openingScale}px, ${framing.openingY - ascentY}px, 0) scale(${framing.openingScale})`;
    }

    function measureLayout() {
      layoutRequest = 0;
      if (disposed) return;
      mobileCopy = window.innerWidth <= 760;
      widthProbe.textContent = (mobileCopy ? [GREETING, IDEA] : [GREETING, IDEA, FINAL_MESSAGE]).join("\n");
      const viewportHeight = ruler!.getBoundingClientRect().height;
      sceneViewportHeight = viewportHeight;
      panel!.style.setProperty("--hero-header-clearance", `${(header?.getBoundingClientRect().height ?? 0) + 16}px`);
      const title = lineOne?.closest<HTMLElement>(`.${styles.title}`);
      title?.style.removeProperty("font-size");
      const availableWidth = copy.current?.clientWidth ?? Infinity;
      const widestLine = widthProbe.getBoundingClientRect().width;
      if (title && widestLine > availableWidth) {
        title.style.fontSize = `${Math.max(24, parseFloat(getComputedStyle(title).fontSize) * availableWidth / widestLine)}px`;
      }
      const computed = getComputedStyle(grid!);
      const padding = parseFloat(computed.paddingTop) + parseFloat(computed.paddingBottom);
      const copyHeight = copy.current?.getBoundingClientRect().height ?? 0;
      const controlsHeight = controls.current?.getBoundingClientRect().height ?? 0;
      const vertical = window.matchMedia("(max-width: 760px) and (min-height: 521px)").matches;
      const required = vertical ? copyHeight + controlsHeight + 144 + padding + 16 : Math.max(copyHeight + controlsHeight + 12, 144) + padding;
      const textTooWide = widthProbe.getBoundingClientRect().width > (copy.current?.clientWidth ?? Infinity) + 1;
      const overflow = required > viewportHeight || textTooWide;
      const nextDistance = motion && !failed && !overflow ? viewportHeight * (mobileMode ? HERO_SCROLL.mobile : compact.matches ? HERO_SCROLL.compact : HERO_SCROLL.desktop) : 0;
      const changed = nextDistance !== runDistance || wrapper!.dataset.overflow !== String(overflow);
      runDistance = nextDistance;
      wrapper!.dataset.overflow = String(overflow);
      wrapper!.style.setProperty("--scene-scroll-px", `${runDistance}px`);
      if (artFrame && artwork.current) {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && !failed && !overflow) {
          const area = artwork.current.getBoundingClientRect();
          const desktop = window.innerWidth >= 1024;
          const finalHeight = Math.min(area.height * (desktop ? 1.08 : 1), area.width * 1.5);
          const finalWidth = finalHeight * 2 / 3;
          const openingHeight = desktop
            ? area.height * (window.innerHeight < 620 ? 1.35 : 1.65)
            : Math.min(finalHeight * 1.38, area.width * 720 / 340 * 0.94);
          framing.openingScale = finalHeight > 0 ? openingHeight / finalHeight : 1;
          const openingHeadroom = desktop && !compact.matches
            ? Math.min(viewportHeight * 0.12, Math.max(48, Math.min(96, 156 - viewportHeight * 0.06)))
            : viewportHeight * (compact.matches ? 0.06 : 0.12);
          const canopyClearance = compact.matches ? 12 : 24;
          const currentTopGap = openingHeight * (ARTWORK_SOURCE_TOP / 720 - 0.06);
          const framingOffset = Math.max(0, openingHeadroom + canopyClearance - currentTopGap);
          framing.openingY = openingHeight * 0.44 - area.height * 0.5 + framingOffset;
          // Center the source's visible x=80..420 artwork, not its black frame.
          framing.centerX = -finalWidth * 10 / 480;
          artFrame.style.width = `${finalWidth}px`;
          artFrame.style.height = `${finalHeight}px`;
          wrapper!.dataset.framing = "cinematic";
          const poster = artFrame.querySelector("img");
          if (poster?.getAttribute("src") !== SCULPTURE) poster?.setAttribute("src", SCULPTURE);
        } else {
          artFrame.style.removeProperty("width");
          artFrame.style.removeProperty("height");
          artFrame.style.removeProperty("transform");
          delete wrapper!.dataset.framing;
          const poster = artFrame.querySelector("img");
          if (poster?.getAttribute("src") !== BONSAI) poster?.setAttribute("src", BONSAI);
        }
      }
      controller.departure?.duration(runDistance > 0 ? sceneViewportHeight / runDistance : 1);
      if (changed) {
        controller.trigger?.refresh();
      }
      else if (controller.timeline) controller.timeline.eventCallback("onUpdate")?.();
      renderArtwork();
    }
    function scheduleLayout() { if (!disposed && !layoutRequest) layoutRequest = requestAnimationFrame(measureLayout); }
    function resize() { clearTimeout(resizeTimer); resizeTimer = setTimeout(scheduleLayout, 120); }
    const layoutObserver = new ResizeObserver(scheduleLayout);
    if (copy.current) layoutObserver.observe(copy.current);
    if (controls.current) layoutObserver.observe(controls.current);
    if (header) layoutObserver.observe(header);
    window.addEventListener("resize", resize);
    compact.addEventListener("change", scheduleLayout);
    document.fonts.ready.then(scheduleLayout);
    measureLayout();
    function cleanupLayout() {
      disposed = true;
      cancelAnimationFrame(layoutRequest);
      clearTimeout(resizeTimer);
      layoutObserver.disconnect();
      widthProbe.remove();
      window.removeEventListener("resize", resize);
      compact.removeEventListener("change", scheduleLayout);
      panel!.style.removeProperty("--hero-header-clearance");
      lineOne?.closest<HTMLElement>(`.${styles.title}`)?.style.removeProperty("font-size");
      wrapper!.style.removeProperty("--scene-scroll-px");
      delete wrapper!.dataset.overflow;
      delete wrapper!.dataset.framing;
      artFrame?.style.removeProperty("width");
      artFrame?.style.removeProperty("height");
      artFrame?.style.removeProperty("transform");
    }
    if (!motion || failed || !media) return cleanupLayout;

    media.pause();
    media.playbackRate = 1;
    gsap.registerPlugin(ScrollTrigger);
    let shown = false;
    let visible = true;
    let ready = media.readyState >= HTMLMediaElement.HAVE_METADATA;
    let raf = 0;
    let lastMobileTarget: number | null = null;
    const greeting = GREETING;
    const idea = IDEA;
    const finalMessage = FINAL_MESSAGE;
    const playhead = { frame: 0, greeting: greeting.length, idea: 0, final: 0, hold: 0 };

    function reveal() {
      if (shown || disposed) return;
      shown = true;
      setDecoded(true);
    }
    function pump() {
      raf = 0;
      if (disposed || wrapper!.dataset.overflow === "true" || !ready || !visible || document.hidden || media!.seeking || media!.readyState < HTMLMediaElement.HAVE_CURRENT_DATA || !Number.isFinite(media!.duration)) return;
      // Verified 67 fps original: this point remains inside its final frame.
      const endpoint = Math.max(0, media!.duration - 0.005);
      const rawTarget = playhead.frame * endpoint;
      const target = mobileCopy ? playhead.frame >= 1 ? endpoint : Math.min(endpoint, Math.round(rawTarget * 67) / 67) : rawTarget;
      if (mobileCopy && target === lastMobileTarget) { reveal(); return; }
      if (Math.abs(media!.currentTime - target) < 0.003) { reveal(); return; }
      try { media!.currentTime = target; if (mobileCopy) lastMobileTarget = target; } catch { /* Readiness events retry exact seeks once data becomes available. */ }
    }
    function schedule() { if (!disposed && !raf) raf = requestAnimationFrame(pump); }
    function metadata() { ready = true; schedule(); }
    function seeked() { reveal(); schedule(); }
    function error() { setFailed(true); setDecoded(false); }

    function updateScene() {
      const progress = wrapper!.dataset.overflow === "true" ? 0 : controller.timeline?.time() ?? 0;
      const message = mobileCopy && progress >= PHASE.ideaType ? idea : progress >= PHASE.finalType ? finalMessage : progress >= PHASE.ideaType ? idea : greeting;
      const count = wrapper!.dataset.overflow === "true" ? greeting.length : Math.round(mobileCopy && progress >= PHASE.ideaType ? progress >= PHASE.ideaErase ? idea.length : playhead.idea : progress >= PHASE.finalType ? playhead.final : progress >= PHASE.ideaType ? playhead.idea : playhead.greeting);
      const lines = message.slice(0, count).split("\n");
      if (lineOne && lineOne.textContent !== (lines[0] ?? "")) lineOne.textContent = lines[0] ?? "";
      if (lineTwo && lineTwo.textContent !== (lines[1] ?? "")) lineTwo.textContent = lines[1] ?? "";
      renderArtwork();
      schedule();
    }
    // Numeric scrub drives this timeline; its onUpdate drives BOTH video and text.
    controller.timeline = gsap.timeline({ paused: true, defaults: { ease: "none" }, onUpdate: updateScene });
    controller.timeline.addLabel("introduction", 0)
      .addLabel("transformation", PHASE.transformStart)
      .addLabel("finalMessage", PHASE.finalType)
      .addLabel("release", PHASE.release)
      .to(playhead, { greeting: 0, duration: PHASE.ideaType - PHASE.greetingErase }, PHASE.greetingErase)
      .to(playhead, { idea: idea.length, duration: 0.17 }, PHASE.ideaType)
      .to(playhead, { idea: 0, duration: PHASE.finalType - PHASE.ideaErase }, PHASE.ideaErase)
      .to(playhead, { final: finalMessage.length, duration: PHASE.finalTyped - PHASE.finalType }, PHASE.finalType)
      .to(playhead, { frame: 0.18, duration: PHASE.transformAccelerate - PHASE.transformStart }, PHASE.transformStart)
      .to(playhead, { frame: 1, duration: PHASE.finalType - PHASE.transformAccelerate }, PHASE.transformAccelerate)
      .to(initialDescription.current, { autoAlpha: 0, duration: 0.05 }, 0.8)
      .fromTo(finalDescription.current, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.05 }, 0.8)
      .to(playhead, { hold: 1, duration: PHASE.release - PHASE.finalTyped }, PHASE.finalTyped);

    controller.timeline.to(playhead, {
      hold: 2,
      duration: runDistance > 0 ? sceneViewportHeight / runDistance : 1,
    }, PHASE.release);
    controller.departure = controller.timeline.recent() as gsap.core.Tween;

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

    function reconcileRefresh() {
      cancelAnimationFrame(refreshRequest);
      refreshRequest = requestAnimationFrame(() => {
        refreshRequest = 0;
        if (disposed) return;
        ScrollTrigger.update();
        // Reconcile once after geometry/scroll restoration, then resume scrub.
        controller.trigger?.getTween()?.progress(1);
        controller.timeline?.progress(controller.trigger?.progress ?? 0);
      });
    }
    controller.trigger = ScrollTrigger.create({
      trigger: wrapper,
      animation: controller.timeline,
      start: "top top",
      end: () => `+=${Math.max(1, runDistance + sceneViewportHeight)}`,
      scrub: mobileMode ? true : 0.3,
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
          if (id === "approach") focusApproachHeading(destination);
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
  }, [motion, failed, mobileMode]);

  function continueHero(event: MouseEvent<HTMLAnchorElement>) {
    const destination = document.getElementById("approach");
    if (!destination || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    focusApproachHeading(destination);
    destination.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }

  return (
    <section className={styles.hero} ref={section} data-motion={motion && !failed} data-failed={failed} aria-labelledby="hero-heading">
      <div className={styles.viewportMeasure} ref={viewportMeasure} aria-hidden="true" />
      <div className={styles.stage} ref={stage}>
        <div className={styles.composition} ref={composition}>
        <div className={styles.copy} ref={copy}>
          <h1 id="hero-heading" className={styles.srOnly}>Askold Makrikov — independent web designer and developer.</h1>
          <div className={styles.title} aria-hidden="true">
            <div className={styles.intro}><span ref={firstLine}>Hello, I&apos;m</span><span ref={secondLine}>Askold.</span></div>
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
        </div>
        <a className={styles.skipAnimation} href="#approach" onClick={continueHero} aria-label="Continue to website content"><svg viewBox="0 0 24 36" width="24" height="36" aria-hidden="true" focusable="false"><path d="M12 4v27m-6-6 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
        <div className={styles.artwork} ref={artwork} aria-hidden="true">
          <div className={styles.artworkMotion} ref={artworkMotion}>
          <picture>
            <source media="(prefers-reduced-motion: reduce)" srcSet={BONSAI} />
            {/* Native picture selects the correct static artwork before JS. */}
            <img className={styles.poster} src={failed ? BONSAI : SCULPTURE} alt="" width="480" height="720" fetchPriority="high" decoding="async" />
          </picture>
          {motion && !failed ? <video ref={video} className={styles.video} data-decoded={decoded} src="/media/hero/intro-original.mp4" poster={SCULPTURE} preload="auto" muted playsInline disablePictureInPicture tabIndex={-1} /> : null}
          </div>
          <div className={styles.openAccents} aria-hidden="true"><span className={styles.verticalAccent} /><span className={styles.horizontalAccent} /></div>
        </div>
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
