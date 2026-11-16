import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/hero/signature-foundation";

export function Footer() {
  return <footer className="site-footer container">
    <Link className="footer-name" href="/">Askold Makrikov</Link>
    <nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/#about">About</Link><Link href="/contact">Contact</Link></nav>
    <div><a href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a><a href="https://wa.me/37128878495">WhatsApp</a></div>
    <p>Independent web design &amp; development.</p>
  </footer>;
}
export function PageShell({ children }: { children: ReactNode }) {
  return <div className="interior-site"><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></div>;
}
export function ContactInvitation({ title = "What would you like to build?" }: { title?: string }) {
  return <section className="contact-invitation container"><h2>{title}</h2><div><p>Tell me about your business, your website and what you need next. We can start with a conversation.</p><Link className="button-gold" href="/contact">Discuss your project</Link><a className="text-link" href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a></div></section>;
}
