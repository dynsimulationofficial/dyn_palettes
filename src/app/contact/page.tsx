import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/config";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact DYN Pallets for industrial wooden pallets, export packaging, wooden crates, boxes and custom packaging requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <>
    <PageHero kicker="GET A QUOTE" title="Send the requirement. We'll shape the packaging." text="For the fastest review, include product type, size, quantity, expected load and delivery location. Drawings or reference images are useful when available." visual="pallet" />
    <section className="content-section light-surface"><div className="contact-layout">
      <aside className="contact-info"><span className="kicker">B2B ENQUIRIES</span><h2>Start with what you know.</h2><p>You do not need a complete technical specification to contact us. Basic dimensions and the shipment context are enough to begin.</p><div className="contact-details"><div className="contact-detail"><small>Email</small><a href={siteConfig.emailHref}><strong>{siteConfig.email}</strong></a></div><div className="contact-detail"><small>Phone / WhatsApp</small><a href={siteConfig.phoneHref}><strong>{siteConfig.phone}</strong></a></div><div className="contact-detail"><small>Base</small><strong>{siteConfig.location}</strong></div><div className="contact-detail"><small>Service area</small><strong>{siteConfig.serviceArea}</strong></div></div></aside>
      <ContactForm />
    </div></section>
  </>;
}
