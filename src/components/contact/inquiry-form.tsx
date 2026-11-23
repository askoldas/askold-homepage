"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { contactLimits } from "@/lib/contact";

const email = "makrikovas@gmail.com";
export function InquiryForm({ className = "" }: { className?: string }) {
  const pending = useRef(false);
  const accepted = useRef(false);
  const confirmation = useRef<HTMLDivElement>(null);
  const submission = useRef<{ fingerprint: string; id: string } | null>(null);
  const [sending, setSending] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (successful) confirmation.current?.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [successful]);
  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || accepted.current || !event.currentTarget.reportValidity()) return;
    pending.current = true;
    setSending(true);
    setStatus("");
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      const values = new FormData(event.currentTarget);
      const payload = {
        name: String(values.get("name") ?? "").trim(),
        email: String(values.get("email") ?? "").trim(),
        message: String(values.get("message") ?? "").replace(/\r\n?/g, "\n").trim(),
        website: String(values.get("website") ?? ""),
      };
      const fingerprint = JSON.stringify(payload);
      if (submission.current?.fingerprint !== fingerprint) submission.current = { fingerprint, id: crypto.randomUUID() };
      const controller = new AbortController();
      timeout = setTimeout(() => controller.abort(), 20000);
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, submissionId: submission.current.id }), signal: controller.signal,
      });
      const result: unknown = await response.json();
      if (!response.ok || !result || typeof result !== "object" || !("success" in result) || result.success !== true) throw new Error("submission");
      accepted.current = true;
      setSuccessful(true);
      setStatus("Your message has been sent.");
    } catch {
      setStatus("Something went wrong. Please try again.");
    } finally {
      clearTimeout(timeout);
      pending.current = false;
      setSending(false);
    }
  }
  function editInquiry() {
    if (!accepted.current) return;
    accepted.current = false;
    setSuccessful(false);
    setStatus("");
  }
  return <form className={`inquiry-form ${className}`} onSubmit={sendInquiry} onInput={editInquiry} action="/api/contact" method="post" aria-busy={sending}>
    <div className="form-pair"><div><label htmlFor="inquiry-name">Your name</label><input id="inquiry-name" name="name" autoComplete="name" readOnly={sending} required maxLength={contactLimits.name} /></div><div><label htmlFor="inquiry-email">Email address</label><input id="inquiry-email" name="email" type="email" autoComplete="email" spellCheck={false} readOnly={sending} required maxLength={contactLimits.email} /></div></div>
    <label htmlFor="inquiry-message">Tell me a little about your project</label><textarea id="inquiry-message" name="message" rows={3} readOnly={sending} required maxLength={contactLimits.message} placeholder="Your business, idea and what you would like to create…" />
    <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}><label htmlFor="inquiry-website">Website</label><input id="inquiry-website" name="website" type="text" tabIndex={-1} autoComplete="off" maxLength={200} /></div>
    <p className="form-note" id="inquiry-explanation">I’ll reply using the email address you provide.</p>
    <button className="button-gold" type="submit" disabled={sending || successful} aria-describedby="inquiry-explanation">{sending ? "Sending..." : "Send inquiry"}</button>
    <div className="form-status" ref={confirmation} data-success={successful} role="status" aria-live="polite" aria-atomic="true">{successful ? <><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="m4 12 5 5L20 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg><div><strong>Your message has been sent.</strong><p>Thank you. I’ll get back to you by email.</p></div></> : status}</div>
    <noscript><style>{'.inquiry-form button[type="submit"] { display: none; }'}</style><p>This form needs JavaScript. Write directly to <a href={`mailto:${email}`}>{email}</a>.</p></noscript>
  </form>;
}
