import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { JsonLd, faqPageSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Pallet & Packaging FAQ",
  description:
    "Answers on pallet sizing, custom manufacturing, heat-treated export pallets, plastic pallet options and onsite industrial packing from DYN Pallets.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "What information is needed for a pallet quote?", a: "Start with pallet size, required quantity, expected load and delivery location. If you have a drawing, photo, destination country or handling requirement, include that too." },
  { q: "Can DYN PALLETS manufacture custom sizes?", a: "Yes. Custom pallets, boxes, crates and skids can be reviewed against your dimensions, load and handling conditions." },
  { q: "Do you support export packaging?", a: "Yes. Export-focused wooden packaging, treatment coordination, industrial packing, VCI/vacuum protection and container lashing can be combined as required." },
  { q: "What is the difference between two-way and four-way pallets?", a: "Two-way pallets are entered from two opposite sides, while four-way pallets allow forklift access from all four sides depending on the construction." },
  { q: "Do you provide heat-treated pallets?", a: "Heat-treated wooden pallet supply can be planned for applicable export requirements. Share the destination country when requesting a quote." },
  { q: "Can you pack machinery onsite?", a: "Industrial and skid packing can be scoped for onsite execution depending on the cargo, site access and project location." },
  { q: "Can you work from an existing drawing or sample?", a: "Yes. A drawing, existing pallet specification or clear reference photos can be used as the starting point for requirement review." },
  { q: "Do you supply plastic pallets too?", a: "Yes. Plastic pallet options can be reviewed where washability, moisture resistance or reusable molded formats are preferred." },
];

export default function FAQPage() {
  return <>
    <JsonLd data={faqPageSchema(faqs)} />
    <PageHero kicker="COMMON QUESTIONS" title="What buyers usually ask first." text="A quick guide to specifications, custom manufacturing, export treatment and industrial packing requirements." visual="box" />
    <section className="content-section light-surface"><div className="faq-shell">{faqs.map(({ q, a }) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section>
    <QuoteBand />
  </>;
}
