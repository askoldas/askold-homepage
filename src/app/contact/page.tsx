import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Start a project", "Talk to Askold Makrikov about brand identity, a website, online shop, custom development or ongoing support. Get in touch by email or WhatsApp.", "/");

export default function ContactPage() {
  redirect("/#contact");
}
