import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "@/components/hero/signature-foundation";
import { ContactActions } from "@/components/contact/contact-actions";
import styles from "./site-shell.module.css";

export function Footer() {
  return <footer className={`${styles.footer} container`}>
    <div className={styles.top}><Link className={styles.name} href="/">Askold Makrikov</Link><nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link><Link href="/#contact">Contact</Link></nav></div>
    <div className={styles.bottom}><div className={styles.contactGroup}><ContactActions className={styles.channels} phoneLabel="+371 28878495" /><a className={styles.email} href="mailto:makrikovas@gmail.com"><span>makrikovas@gmail.com</span><span aria-hidden="true">&#8599;</span></a></div><p>Independent web design &amp; development.</p></div>
  </footer>;
}
export function PageShell({ children }: { children: ReactNode }) {
  return <div className="interior-site"><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /></div>;
}
export function ContactInvitation({ title = "What would you like to build?" }: { title?: string }) {
  return <section className="contact-invitation container"><h2>{title}</h2><div><p>Tell me about your business, your website and what you need next. We can start with a conversation.</p><Link className="button-gold" href="/#contact">Discuss your project</Link><a className="text-link" href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a></div></section>;
}
