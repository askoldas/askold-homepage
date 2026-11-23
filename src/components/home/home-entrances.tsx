"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const motion = {
  intro: { y: 30, duration: .65 },
  copy: { y: 22, duration: .55 },
  main: { y: 36, duration: .8 },
  shop: { y: 32, duration: .75 },
  selected: { y: 32, duration: .65 },
  services: { y: 34, duration: .65 },
  identity: { y: 36, duration: .8 },
  closing: { y: 28, duration: .65 },
  action: { y: 20, duration: .6 },
} as const;

// Offset metrics describe normal layout, unaffected by an entrance's transform.
function layoutTop(element: HTMLElement) {
  let top = 0;
  for (let node: HTMLElement | null = element; node; node = node.offsetParent as HTMLElement | null) top += node.offsetTop;
  return top;
}

export function HomeEntrances({ children, className }: { children: ReactNode; className: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = root.current;
    if (!container) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        let disposed = false;
        let frame = 0;
        let refreshTimer: ReturnType<typeof setTimeout>;
        const entries: { anchor: HTMLElement; targets: HTMLElement[]; finish: () => void; refresh: () => void; cleanup: () => void }[] = [];
        const initialize = () => {
          if (disposed) return;
          container.querySelectorAll<HTMLElement>("[data-home-reveal]").forEach(element => {
            const kind = element.dataset.homeReveal as keyof typeof motion;
            if (!(kind in motion)) return;
            const settings = motion[kind];
            const targets = [element];
            const anchor = kind === "main" || kind === "shop" || kind === "identity" || kind === "selected" ? element.parentElement! : element;
            let animation: gsap.core.Tween | undefined;
            let prepared = false;
            const fraction = kind === "identity" ? .65 : .74;
            const bounds = () => { const top = layoutTop(anchor) - window.scrollY; return { top, bottom: top + anchor.offsetHeight }; };
            const finish = () => { prepared = false; animation?.kill(); gsap.set(targets, { clearProps: "opacity,transform" }); };
            const prepare = () => {
              const view = bounds();
              const painted = element.getBoundingClientRect();
              if ((view.bottom > 0 && view.top < innerHeight) || (painted.bottom > 0 && painted.top < innerHeight)) return;
              animation?.kill();
              const image = kind === "main" || kind === "shop";
              gsap.set(element, { y: view.bottom <= 0 ? -settings.y : settings.y, opacity: image || kind === "action" ? 1 : .2 });
              prepared = true;
            };
            const enter = () => {
              const view = bounds();
              // Live layout guards stale callbacks during upstream hero measurement.
              if (!prepared || document.body.style.position === "fixed" || view.top >= innerHeight * fraction + 1 || view.bottom <= innerHeight * (1 - fraction) - 1) return;
              prepared = false;
              animation?.kill();
              if (targets.some(target => target === document.activeElement || target.contains(document.activeElement))) { finish(); return; }
              animation = gsap.to(element, { y: 0, opacity: 1, duration: settings.duration, ease: "power2.out", clearProps: "opacity,transform" });
            };
            // Initial visible content stays final; only unseen targets are prepared.
            prepare();
            const entry = ScrollTrigger.create({ start: () => layoutTop(anchor) - innerHeight * fraction, end: () => layoutTop(anchor) + anchor.offsetHeight - innerHeight * (1 - fraction), onEnter: enter, onEnterBack: enter });
            const exit = ScrollTrigger.create({ start: () => layoutTop(anchor) - innerHeight - settings.y - 2, end: () => layoutTop(anchor) + anchor.offsetHeight + settings.y + 2, onLeave: prepare, onLeaveBack: prepare });
            entries.push({ anchor, targets, finish, refresh: () => {
              const view = bounds();
              if (prepared && view.top < innerHeight * .6 && view.bottom > innerHeight * .4) finish();
              else prepare();
              entry.refresh(); exit.refresh();
            }, cleanup: () => { animation?.kill(); entry.kill(); exit.kill(); gsap.set(targets, { clearProps: "opacity,transform" }); } });
          });
        };
        const focus = (event: FocusEvent) => {
          const target = event.target;
          if (!(target instanceof HTMLElement)) return;
          const section = target.closest("section");
          entries.forEach(entry => { if (entry.anchor.contains(target) || entry.targets.some(item => item === target || item.contains(target)) || section?.contains(entry.anchor)) entry.finish(); });
        };
        const refresh = () => {
          clearTimeout(refreshTimer);
          refreshTimer = setTimeout(() => {
            if (!disposed && document.body.style.position !== "fixed") entries.forEach(entry => entry.refresh());
          }, 120);
        };
        // Let the hero's initial layout effect and responsive measurement settle.
        frame = requestAnimationFrame(() => { frame = requestAnimationFrame(initialize); });
        const observer = new ResizeObserver(refresh);
        const main = container.closest("main");
        observer.observe(container);
        if (main) { observer.observe(main); if (main.firstElementChild) observer.observe(main.firstElementChild); }
        container.addEventListener("focusin", focus);
        void document.fonts.ready.then(() => { if (!disposed) refresh(); });
        return () => {
          disposed = true; clearTimeout(refreshTimer); cancelAnimationFrame(frame); observer.disconnect();
          container.removeEventListener("focusin", focus);
          entries.forEach(entry => entry.cleanup());
        };
      });
    }, container);
    return () => { media.revert(); context.revert(); };
  }, []);
  return <div ref={root} className={className}>{children}</div>;
}
