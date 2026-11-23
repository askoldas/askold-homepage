"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { technicalServices } from "./services-content";
import styles from "./technical-selector.module.css";

export function TechnicalSelector() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const selector = root.current;
    if (!selector) return;
    const list = selector.querySelector<HTMLElement>("[data-service-tabs]")!;
    const tabs = Array.from(list.querySelectorAll<HTMLAnchorElement>("a"));
    const panels = Array.from(selector.querySelectorAll<HTMLElement>("[data-service-panel]"));
    let active = -1;
    const hashIndex = (hash: string) => technicalServices.findIndex(service => `#${service.id}` === hash);
    function activate(index: number, updateHistory = false) {
      if (index < 0) return;
      if (active !== index) {
        const entering = active >= 0;
        if (active >= 0 && panels[active].contains(document.activeElement)) tabs[index].focus({ preventScroll: true });
        active = index;
        panels.forEach((panel, position) => { panel.dataset.active = String(position === index); panel.dataset.entering = String(position === index && entering); panel.inert = position !== index; panel.setAttribute("aria-hidden", String(position !== index)); });
      }
      tabs.forEach((tab, position) => { tab.setAttribute("aria-selected", String(position === index)); tab.tabIndex = position === index ? 0 : -1; });
      if (updateHistory) history.replaceState(history.state, "", `${location.pathname}${location.search}#${technicalServices[index].id}`);
    }
    list.setAttribute("role", "tablist"); list.setAttribute("aria-orientation", "vertical");
    tabs.forEach((tab, index) => { tab.setAttribute("role", "tab"); tab.setAttribute("aria-controls", panels[index].id); });
    panels.forEach((panel, index) => { panel.setAttribute("role", "tabpanel"); panel.setAttribute("aria-labelledby", tabs[index].id); });
    activate(Math.max(0, hashIndex(location.hash)));
    selector.dataset.enhanced = "true";
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link) return;
      const url = new URL(link.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
      const index = hashIndex(url.hash);
      if (index < 0) return;
      const tab = tabs.includes(link);
      if (tab) event.preventDefault();
      activate(index, tab);
    };
    const key = (event: KeyboardEvent) => {
      const index = tabs.indexOf(event.target as HTMLAnchorElement);
      if (index < 0) return;
      let next = index;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      else if (event.key === " ") { event.preventDefault(); activate(index, true); return; }
      else return;
      event.preventDefault();
      tabs.forEach((tab, position) => { tab.tabIndex = position === next ? 0 : -1; });
      tabs[next].focus({ preventScroll: true });
    };
    const hash = () => activate(hashIndex(location.hash));
    document.addEventListener("click", click, true);
    list.addEventListener("keydown", key);
    window.addEventListener("hashchange", hash);
    window.addEventListener("popstate", hash);
    return () => {
      document.removeEventListener("click", click, true); list.removeEventListener("keydown", key);
      window.removeEventListener("hashchange", hash); window.removeEventListener("popstate", hash);
      delete selector.dataset.enhanced; list.removeAttribute("role"); list.removeAttribute("aria-orientation");
      tabs.forEach(tab => { tab.removeAttribute("role"); tab.removeAttribute("aria-controls"); tab.removeAttribute("aria-selected"); tab.removeAttribute("tabindex"); });
      panels.forEach(panel => { panel.inert = false; delete panel.dataset.active; delete panel.dataset.entering; panel.removeAttribute("role"); panel.removeAttribute("aria-hidden"); panel.removeAttribute("aria-labelledby"); });
    };
  }, []);
  return <div className={styles.selector} ref={root}>
    <nav className={styles.tabs} aria-label="Technical services" data-service-tabs>{technicalServices.map(service => <a id={`service-tab-${service.id}`} href={`#${service.id}`} key={service.id}><span>{service.number}</span>{service.title}</a>)}</nav>
    <div className={styles.panels}>{technicalServices.map(service => <article className={styles.panel} id={service.id} key={service.id} data-service-panel>
      <h3>{service.title}</h3><p className={styles.description}>{service.description}</p><p className={styles.fit}><strong>Useful for</strong> {service.fit}</p>
      <ul>{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul>
      <div className={styles.proofs} data-count={service.proofs.length}>{service.proofs.map(proof => <figure className={styles.proof} key={proof.href}><Link className={styles.proofMedia} href={proof.href}><Image {...proof.image} alt={proof.image.alt} sizes="(max-width: 760px) 42vw, 300px" /></Link><figcaption><Link href={proof.href}>{proof.title}</Link>{proof.caseHref ? <Link className={styles.caseLink} href={proof.caseHref}>Explore the case study</Link> : null}</figcaption></figure>)}</div>
    </article>)}</div>
    <noscript><style>{`.${styles.selector} { display: block; } .${styles.tabs} { margin-bottom: 40px; } .${styles.panels} { display: block; } .${styles.panels} > .${styles.panel} { visibility: visible; pointer-events: auto; margin-top: 64px; }`}</style></noscript>
  </div>;
}
