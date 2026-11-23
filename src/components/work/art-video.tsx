"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./art-video.module.css";

interface ArtVideoProps { src: string; poster: string; label: string; width?: number; height?: number; variant?: "hero" | "passage"; logo?: string; playback?: "scroll" | "on-view" | "loop" }

function loopOnView(element: HTMLVideoElement, container: HTMLDivElement, src: string) {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let disposed = false;
  let nearby = false;
  let visible = false;
  let failed = false;
  let blocked = false;
  let attempting = false;
  let generation = 0;
  const poster = () => { delete container.dataset.scrubReady; };
  const allowed = () => {
    const bounds = container.getBoundingClientRect();
    return !disposed && !failed && !blocked && !motion.matches && visible && document.visibilityState === "visible" && bounds.bottom > 0 && bounds.top < innerHeight && bounds.right > 0 && bounds.left < innerWidth;
  };
  const pause = () => { generation++; attempting = false; element.pause(); };
  const update = () => {
    if (disposed || failed || motion.matches || document.visibilityState !== "visible") return;
    if (nearby && !element.getAttribute("src")) { element.preload = "auto"; element.src = src; element.load(); }
    if (!allowed() || attempting || element.readyState < 2) return;
    if (!element.paused) { container.dataset.scrubReady = "true"; return; }
    attempting = true;
    const request = ++generation;
    void element.play().then(() => {
      if (disposed) return;
      if (request !== generation) { if (!allowed()) element.pause(); return; }
      attempting = false;
      if (allowed()) container.dataset.scrubReady = "true";
      else element.pause();
    }).catch(() => {
      if (disposed || request !== generation) return;
      attempting = false; blocked = true; element.pause(); poster();
    });
  };
  const visibility = () => { if (document.visibilityState !== "visible") pause(); else update(); };
  const preference = () => {
    pause(); poster(); blocked = false;
    if (motion.matches) { element.removeAttribute("src"); element.preload = "none"; element.load(); }
    else update();
  };
  const error = () => { failed = true; pause(); poster(); container.dataset.failed = "true"; };
  const nearObserver = new IntersectionObserver(entries => { nearby = entries[0].isIntersecting; update(); }, { rootMargin: "200px" });
  const viewObserver = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting && entries[0].intersectionRatio > 0;
    if (visible) update();
    else { pause(); blocked = false; }
  }, { threshold: .001 });
  nearObserver.observe(container); viewObserver.observe(container);
  element.addEventListener("loadeddata", update); element.addEventListener("canplay", update); element.addEventListener("error", error);
  document.addEventListener("visibilitychange", visibility); motion.addEventListener("change", preference);
  return () => {
    disposed = true; pause(); nearObserver.disconnect(); viewObserver.disconnect();
    element.removeEventListener("loadeddata", update); element.removeEventListener("canplay", update); element.removeEventListener("error", error);
    document.removeEventListener("visibilitychange", visibility); motion.removeEventListener("change", preference);
    element.removeAttribute("src"); element.preload = "none"; element.load(); poster();
  };
}

function playOnView(element: HTMLVideoElement, container: HTMLDivElement, src: string) {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let disposed = false;
  let nearby = false;
  let entered = false;
  let completed = false;
  let restart = true;
  let attempting = false;
  let blocked = false;
  let failed = false;
  let generation = 0;
  const poster = () => { delete container.dataset.scrubReady; };
  const visible = () => {
    const bounds = container.getBoundingClientRect();
    return { pixels: bounds.right <= 0 || bounds.left >= innerWidth ? 0 : Math.max(0, Math.min(bounds.bottom, innerHeight) - Math.max(bounds.top, 0)), threshold: Math.min(bounds.height, innerHeight) * .22 };
  };
  const allowed = () => !disposed && !failed && !blocked && !motion.matches && entered && !completed && document.visibilityState === "visible" && visible().pixels > 0;
  const pause = () => { generation++; attempting = false; element.pause(); };
  const update = () => {
    if (disposed || failed || motion.matches) return;
    const view = visible();
    if (view.pixels <= 0) {
      if (entered) { pause(); entered = false; completed = false; restart = true; blocked = false; poster(); }
      return;
    }
    if (!entered && view.pixels >= view.threshold) entered = true;
    if (nearby && document.visibilityState === "visible" && !element.getAttribute("src")) {
      element.preload = "auto"; element.src = src; element.load();
    }
    if (!allowed() || attempting || element.readyState < 2 || element.seeking) return;
    if (restart) {
      restart = false;
      if (element.currentTime > .01) { element.currentTime = 0; return; }
    }
    if (!element.paused) return;
    attempting = true;
    const request = ++generation;
    void element.play().then(() => {
      if (disposed) return;
      if (request !== generation) { if (!allowed()) element.pause(); return; }
      attempting = false;
      if (!allowed()) element.pause();
      else container.dataset.scrubReady = "true";
    }).catch(() => {
      if (disposed || request !== generation) return;
      attempting = false; blocked = true; poster(); element.pause();
    });
  };
  const ended = () => {
    if (disposed || !entered || visible().pixels <= 0) return;
    completed = true; attempting = false; container.dataset.scrubReady = "true";
  };
  const error = () => { failed = true; pause(); poster(); container.dataset.failed = "true"; };
  const visibility = () => { if (document.visibilityState !== "visible") pause(); else update(); };
  const preference = () => {
    pause(); poster(); entered = false; completed = false; restart = true; blocked = false;
    if (motion.matches) { element.removeAttribute("src"); element.preload = "none"; element.load(); }
    else update();
  };
  const observer = new IntersectionObserver(entries => { nearby = entries[0].isIntersecting; if (nearby) {
    if (!motion.matches && document.visibilityState === "visible" && !element.getAttribute("src")) { element.preload = "auto"; element.src = src; element.load(); }
    update();
  } }, { rootMargin: "200px" });
  const resize = new ResizeObserver(update);
  observer.observe(container); resize.observe(container);
  const main = container.closest("main");
  if (main) resize.observe(main);
  for (const event of ["loadedmetadata", "loadeddata", "canplay", "seeked"]) element.addEventListener(event, update);
  element.addEventListener("ended", ended);
  element.addEventListener("error", error);
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  document.addEventListener("visibilitychange", visibility);
  motion.addEventListener("change", preference);
  void document.fonts.ready.then(update);
  return () => {
    disposed = true; pause(); observer.disconnect(); resize.disconnect();
    for (const event of ["loadedmetadata", "loadeddata", "canplay", "seeked"]) element.removeEventListener(event, update);
    element.removeEventListener("ended", ended); element.removeEventListener("error", error);
    window.removeEventListener("scroll", update); window.removeEventListener("resize", update);
    document.removeEventListener("visibilitychange", visibility); motion.removeEventListener("change", preference);
    element.removeAttribute("src"); element.preload = "none"; element.load(); poster();
  };
}

export function ArtVideo({ src, poster, label, width = 480, height = 480, variant = "hero", logo, playback = "scroll" }: ArtVideoProps) {
  const root = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const element = video.current;
    const container = root.current;
    if (!element || !container) return;
    delete container.dataset.failed;
    if (playback === "loop") return loopOnView(element, container, src);
    if (playback === "on-view") return playOnView(element, container, src);
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let nearby = false;
    let disposed = false;
    let unavailable = false;
    let frame = 0;
    let target = 0;
    let pending = false;
    const staticFrame = () => { delete container.dataset.scrubReady; };
    const update = () => {
      frame = 0;
      if (disposed || unavailable || motion.matches || document.visibilityState !== "visible" || !nearby || document.body.style.position === "fixed") return;
      if (!element.getAttribute("src")) { element.preload = "auto"; element.src = src; element.load(); }
      const bounds = container.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;
      const travel = variant === "hero" ? -bounds.top / Math.max(1, bounds.height * .7) : (window.innerHeight * .9 - bounds.top) / Math.max(1, window.innerHeight * .9 + bounds.height * .45);
      if (!Number.isFinite(element.duration) || element.duration <= 0 || element.readyState < 1) return;
      const end = Math.max(0, element.duration - Math.min(.02, element.duration * .01));
      target = Math.max(0, Math.min(1, travel)) * end;
      if (element.seeking || pending) return;
      if (Math.abs(element.currentTime - target) > .015) {
        try { pending = true; element.currentTime = target; } catch { pending = false; }
      } else if (element.readyState >= 2) container.dataset.scrubReady = "true";
    };
    const schedule = () => { if (!disposed && nearby && !frame && !motion.matches && document.visibilityState === "visible") frame = requestAnimationFrame(update); };
    const ready = () => { pending = element.seeking; schedule(); };
    const seeked = () => { pending = false; schedule(); };
    const preference = () => {
      staticFrame();
      element.pause();
      if (motion.matches) {
        cancelAnimationFrame(frame); frame = 0; pending = false;
        element.removeAttribute("src"); element.preload = "none"; element.load();
      } else schedule();
    };
    const visibility = () => {
      if (document.visibilityState !== "visible") { cancelAnimationFrame(frame); frame = 0; element.pause(); }
      else schedule();
    };
    const error = () => { unavailable = true; pending = false; staticFrame(); container.dataset.failed = "true"; element.pause(); };
    const observer = new IntersectionObserver(entries => { nearby = entries[0].isIntersecting; if (nearby) schedule(); else { cancelAnimationFrame(frame); frame = 0; } }, { rootMargin: "200px" });
    const resize = new ResizeObserver(schedule);
    observer.observe(container);
    resize.observe(container);
    const main = container.closest("main");
    if (main) resize.observe(main);
    element.addEventListener("loadedmetadata", ready);
    element.addEventListener("loadeddata", ready);
    element.addEventListener("canplay", ready);
    element.addEventListener("seeked", seeked);
    element.addEventListener("error", error);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    document.addEventListener("visibilitychange", visibility);
    motion.addEventListener("change", preference);
    void document.fonts.ready.then(schedule);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect(); resize.disconnect();
      element.removeEventListener("loadedmetadata", ready);
      element.removeEventListener("loadeddata", ready);
      element.removeEventListener("canplay", ready);
      element.removeEventListener("seeked", seeked);
      element.removeEventListener("error", error);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      motion.removeEventListener("change", preference);
      element.pause(); element.removeAttribute("src"); element.preload = "none"; element.load(); staticFrame();
    };
  }, [src, variant, playback]);
  return <div className={styles.media} ref={root} style={{ aspectRatio: width + " / " + height }} role="img" aria-label={label} data-testid={logo ? "project-intro-video" : "ambient-art-video"}>
    <Image className={styles.poster} src={poster} alt="" width={width} height={height} sizes={logo || variant === "passage" ? "90vw" : "(max-width: 760px) 300px, 520px"} />
    <video ref={video} width={width} height={height} muted playsInline loop={playback === "loop"} preload="none" aria-hidden="true" />
    {logo ? <Image className={styles.logo} src={logo} alt="" width={220} height={96} /> : null}
  </div>;
}
