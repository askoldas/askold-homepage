"use client";

import { useEffect, useRef } from "react";
import { InquiryForm } from "@/components/contact/inquiry-form";
import { ContactActions } from "@/components/contact/contact-actions";
import styles from "./contact-finale.module.css";

interface ModalHistory { token: string; returnUrl: string }

export function ContactFinale() {
  const panel = useRef<HTMLDialogElement>(null);
  const dismiss = useRef<() => void>(() => {});
  useEffect(() => {
    const dialog = panel.current;
    if (!dialog) return;
    let opened = false;
    let opener: HTMLElement | null = null;
    let entry: ModalHistory | null = null;
    let restorePage: (() => void) | null = null;
    const localUrl = () => window.location.pathname + window.location.search + window.location.hash;
    let previousUrl = localUrl();
    const lockPage = () => {
      const root = document.documentElement;
      const body = document.body;
      const rootStyle = root.getAttribute("style");
      const bodyStyle = body.getAttribute("style");
      const x = window.scrollX;
      const y = window.scrollY;
      const gap = window.innerWidth - root.clientWidth;
      const padding = parseFloat(getComputedStyle(body).paddingRight) || 0;
      root.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.top = "-" + y + "px";
      body.style.left = "-" + x + "px";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      if (gap) body.style.paddingRight = padding + gap + "px";
      return () => {
        if (rootStyle === null) root.removeAttribute("style"); else root.setAttribute("style", rootStyle);
        if (bodyStyle === null) body.removeAttribute("style"); else body.setAttribute("style", bodyStyle);
        window.scrollTo({ left: x, top: y, behavior: "instant" });
      };
    };
    const closePanel = () => {
      if (!opened) return;
      opened = false;
      if (dialog.open) dialog.close();
      restorePage?.();
      restorePage = null;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
      opener = null;
    };
    const showPanel = (source?: HTMLElement) => {
      if (opened) return;
      opener = source || (document.activeElement instanceof HTMLElement ? document.activeElement : null);
      restorePage = lockPage();
      opened = true;
      dialog.showModal();
      dialog.scrollTop = 0;
      dialog.focus({ preventScroll: true });
    };
    const dismissPanel = () => {
      if (!opened) return;
      const ownEntry = entry && window.history.state?.askoldContact?.token === entry.token;
      const returnUrl = entry?.returnUrl || window.location.pathname + window.location.search;
      closePanel();
      entry = null;
      if (ownEntry) window.history.back();
      else {
        const state = { ...window.history.state };
        delete state.askoldContact;
        window.history.replaceState(state, "", returnUrl);
        previousUrl = returnUrl;
      }
    };
    const synchronize = () => {
      if (window.location.hash === "#contact") {
        const saved = window.history.state?.askoldContact as ModalHistory | undefined;
        entry = saved?.token ? saved : null;
        showPanel();
      } else {
        closePanel();
        entry = null;
        previousUrl = localUrl();
      }
    };
    const handleClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
      const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
      if (!link || link.target || link.hasAttribute("download")) return;
      const destination = new URL(link.href, window.location.href);
      if (destination.origin !== window.location.origin || destination.pathname !== "/" || destination.hash !== "#contact") return;
      event.preventDefault();
      if (opened) return;
      entry = { token: String(Date.now()) + Math.random().toString(36).slice(2), returnUrl: localUrl() };
      previousUrl = entry.returnUrl;
      window.history.pushState({ ...window.history.state, askoldContact: entry }, "", window.location.pathname + window.location.search + "#contact");
      showPanel(link);
    };
    const handleCancel = (event: Event) => { event.preventDefault(); dismissPanel(); };
    const handleClose = () => { if (opened) dismissPanel(); };
    const handleHash = () => {
      if (window.location.hash === "#contact" && !opened && previousUrl !== localUrl() && !window.history.state?.askoldContact) {
        entry = { token: String(Date.now()), returnUrl: previousUrl };
        window.history.replaceState({ ...window.history.state, askoldContact: entry }, "", localUrl());
      }
      synchronize();
    };
    dismiss.current = dismissPanel;
    synchronize();
    document.addEventListener("click", handleClick, true);
    window.addEventListener("hashchange", handleHash);
    window.addEventListener("popstate", synchronize);
    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);
    return () => {
      document.removeEventListener("click", handleClick, true);
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("popstate", synchronize);
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
      closePanel();
      dismiss.current = () => {};
    };
  }, []);
  return <><dialog className={styles.contact} ref={panel} tabIndex={-1} aria-labelledby="atelier-contact-heading">
    <button className={styles.close} type="button" onClick={() => dismiss.current()}>Close <span aria-hidden="true">&#215;</span></button>
    <div className="container"><h2 id="atelier-contact-heading">Have an idea?<br />Let&apos;s make it real.</h2>
      <div className={styles.composition}><div className={styles.details}><p>A new website, a better shop or a specific problem to solve. Tell me what you have in mind.</p><a className={styles.email} href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a><ContactActions /></div><InquiryForm className={styles.form} /></div>
    </div>
  </dialog><noscript><p className={styles.noScript}>Start a project: <a href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a>, <a href="tel:+37128878495">Phone</a>, <a href="https://wa.me/37128878495">WhatsApp</a> or <a href="https://t.me/Askoldas">Telegram</a>.</p></noscript></>;
}
