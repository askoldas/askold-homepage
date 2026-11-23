"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function AboutMark({ className }: { className: string }) {
  const mark = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(mark.current, { opacity: .65, y: 12 }, { opacity: 1, y: 0, duration: .6, ease: "power2.out" });
    });
    return () => media.revert();
  }, []);
  return <span className={className} ref={mark} aria-hidden="true">.ME</span>;
}
