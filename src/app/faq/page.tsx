import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata = { title: "FAQ" };

const faqs = [
  ["What information is needed for a pallet quote?", "Start with pallet size, required quantity, expected load and delivery location. If you have a drawing, photo, destination country or handling requirement, include that too."],
  ["Can DYN PALLETS manufacture custom sizes?", "Yes. Custom pallets, boxes, crates and skids can be reviewed against your dimensions, load and handling conditions."],
  ["Do you support export packaging?", "Yes. Export-focused wooden packaging, treatment coordination, industrial packing, VCI/vacuum protection and container lashing can be combined as required."],
  ["What is the difference between two-way and four-way pallets?", "Two-way pallets are entered from two opposite sides, while four-way pallets allow forklift access from all four sides depending on the construction."],
  ["Do you provide heat-treated pallets?", "Heat-treated wooden pallet supply can be planned for applicable export requirements. Share the destination country when requesting a quote."],
  ["Can you pack machinery onsite?", "Industrial and skid packing can be scoped for onsite execution depending on the cargo, site access and project location."],
  ["Can you work from an existing drawing or sample?", "Yes. A drawing, existing pallet specification or clear reference photos can be used as the starting point for requirement review."],
  ["Do you supply plastic pallets too?", "Yes. Plastic pallet options can be reviewed where washability, moisture resistance or reusable molded formats are preferred."],
];

export default function FAQPage() {
  return <>
    <PageHero kicker="COMMON QUESTIONS" title="What buyers usually ask first." text="A quick guide to specifications, custom manufacturing, export treatment and industrial packing requirements." visual="box" />
    <section className="content-section light-surface"><div className="faq-shell">{faqs.map(([q,a]) => <div className="faq-item" key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section>
    <QuoteBand />
  </>;
}
