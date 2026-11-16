import { InquiryForm } from "@/components/contact/inquiry-form";
import { PageShell } from "@/components/site/site-shell";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Start a project", "Talk to Askold Makrikov about a website, online shop, custom development or ongoing support. Get in touch by email or WhatsApp.", "/contact");
export default function ContactPage() {
  return <PageShell><header className="page-heading container"><h1>Let’s make<br />a start.</h1><p>A new website, a better shop or a specific problem to solve. Tell me what you have in mind.</p></header><section className="contact-layout container" aria-label="Project inquiry"><div className="contact-details"><h2>Speak directly<br />with me.</h2><a className="contact-email" href="mailto:makrikovas@gmail.com">makrikovas@gmail.com</a><a className="text-link" href="https://wa.me/37128878495">Message on WhatsApp</a><p>You do not need a finished brief. Your business, the current situation and what you would like to change are enough to start.</p><p className="muted-copy">Prefer your own email app? Use the address above. The form prepares a draft; sending happens in your email app.</p></div><InquiryForm /></section></PageShell>;
}
