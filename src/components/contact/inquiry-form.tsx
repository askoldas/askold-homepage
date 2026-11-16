"use client";

import { useRef, useState, type FormEvent } from "react";
const email = "makrikovas@gmail.com";
export function InquiryForm() {
  const form = useRef<HTMLFormElement>(null);
  const draft = useRef<HTMLTextAreaElement>(null);
  const [prepared, setPrepared] = useState("");
  const [status, setStatus] = useState("");
  function makeDraft() {
    if (!form.current?.reportValidity()) return null;
    const values = new FormData(form.current);
    return `Name: ${String(values.get("name")).trim()}\nEmail: ${String(values.get("email")).trim()}\nProject: ${String(values.get("service"))}\n\n${String(values.get("message")).trim()}`;
  }
  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = makeDraft();
    if (!text) return;
    setPrepared(text);
    setStatus("Your email app should open. Review and send the draft there. If it does not open, use the draft below.");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Website project inquiry")}&body=${encodeURIComponent(text)}`;
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(prepared); setStatus("Draft copied. Paste it into an email to makrikovas@gmail.com."); }
    catch { draft.current?.focus(); draft.current?.select(); setStatus("Select and copy the draft below, then paste it into your email."); }
  }
  return <form className="inquiry-form" ref={form} onSubmit={openDraft} action={`mailto:${email}`} method="post" encType="text/plain">
    <div className="form-pair"><div><label htmlFor="inquiry-name">Your name</label><input id="inquiry-name" name="name" autoComplete="name" required maxLength={100} /></div><div><label htmlFor="inquiry-email">Email address</label><input id="inquiry-email" name="email" type="email" autoComplete="email" spellCheck={false} required maxLength={254} /></div></div>
    <label htmlFor="inquiry-service">What do you need?</label><select id="inquiry-service" name="service" defaultValue="Not sure yet"><option>Not sure yet</option><option>Web design or redesign</option><option>Custom development</option><option>E-commerce</option><option>Web application</option><option>SEO and performance</option><option>Ongoing support</option></select>
    <label htmlFor="inquiry-message">Tell me a little about your project</label><textarea id="inquiry-message" name="message" rows={5} required maxLength={3000} placeholder="Your business, current website and what you would like to improve…" />
    <p className="form-note" id="draft-explanation">This opens a draft in your email app. Review and send it there. Your inquiry is not submitted through this website.</p>
    <button className="button-gold" type="submit" aria-describedby="draft-explanation">Open email draft</button>
    <p className="form-status" role="status">{status}</p>
    {prepared ? <div className="draft-fallback"><label htmlFor="email-draft">Your email draft</label><textarea ref={draft} id="email-draft" value={prepared} readOnly rows={8} /><button type="button" className="text-link" onClick={copyDraft}>Copy draft</button></div> : null}
    <noscript><p>You can also write directly to <a href={`mailto:${email}`}>{email}</a>. The form uses your email application; it does not send through this website.</p></noscript>
  </form>;
}
