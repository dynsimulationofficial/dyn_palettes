import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact DYN Pallets for industrial wooden pallets, export packaging, wooden crates, boxes and custom packaging requirements.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <>
    <PageHero kicker="GET A QUOTE" title="Send the requirement. We'll shape the packaging." text="For the fastest review, include product type, size, quantity, expected load and delivery location. Drawings or reference images are useful when available." visual="pallet" />
    <section className="content-section"><div className="contact-layout">
      <aside className="contact-info"><span className="kicker">B2B ENQUIRIES</span><h2>Start with what you know.</h2><p>You do not need a complete technical specification to contact us. Basic dimensions and the shipment context are enough to begin.</p><div className="contact-details"><div className="contact-detail"><small>Email</small><a href={siteConfig.emailHref}><strong>{siteConfig.email}</strong></a></div><div className="contact-detail"><small>Phone / WhatsApp</small><a href={siteConfig.phoneHref}><strong>{siteConfig.phone}</strong></a></div><div className="contact-detail"><small>Base</small><strong>{siteConfig.location}</strong></div><div className="contact-detail"><small>Service area</small><strong>{siteConfig.serviceArea}</strong></div></div></aside>
      <form className="quote-form" action={siteConfig.emailHref} method="post" encType="text/plain"><div className="form-grid">
        <div className="field"><label htmlFor="name">Name</label><input id="name" name="Name" placeholder="Your name" required /></div>
        <div className="field"><label htmlFor="company">Company</label><input id="company" name="Company" placeholder="Company name" /></div>
        <div className="field"><label htmlFor="email">Email</label><input id="email" name="Email" type="email" placeholder="name@company.com" required /></div>
        <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="Phone" placeholder="+91 ..." /></div>
        <div className="field"><label htmlFor="type">Requirement</label><select id="type" name="Requirement"><option>Wooden pallets</option><option>Export pallets</option><option>Wooden boxes / crates</option><option>Industrial packing</option><option>Heat treatment / fumigation</option><option>Lashing / chocking</option><option>Custom solution</option></select></div>
        <div className="field"><label htmlFor="qty">Quantity</label><input id="qty" name="Quantity" placeholder="e.g. 200 pallets" /></div>
        <div className="field full"><label htmlFor="message">Size, load, delivery location & notes</label><textarea id="message" name="Details" placeholder="Example: 1200 × 1000 mm, 1,200 kg dynamic load, 250 qty, delivery to ..." required /></div>
        <div className="field full"><button className="button button-primary" type="submit">Prepare email enquiry</button><p className="form-note">This form opens your email client with the entered requirement. Replace the placeholder contact details in <code>src/data/config.ts</code> before production launch.</p></div>
      </div></form>
    </div></section>
  </>;
}
