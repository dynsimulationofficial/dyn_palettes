import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Boxes, ClipboardCheck, Route, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { services } from "@/data/site";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: `${service.summary} DYN PALLETS coordinates industrial packing, treatment and shipment protection for commercial and export requirements.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);

  return <>
    <PageHero kicker={service.eyebrow} title={service.name} text={service.summary} back={{ href: "/services", label: "All services" }} visual="crate" />
    <section className="content-section"><div className="content-shell">
      <div className="content-grid"><h2>Integrated into the shipment plan.</h2><div><p className="lead">{service.description}</p><p>Final scope depends on cargo dimensions, handling conditions, route, destination and any customer or regulatory requirements. Share the available information and we’ll identify what needs to be confirmed before execution.</p></div></div>
      <div className="list-columns"><div className="list-block"><h3>How the service runs</h3><ul className="check-list">{service.steps.map((x, i) => <li key={x}>{String(i + 1).padStart(2, "0")} · {x}</li>)}</ul></div><div className="list-block"><h3>What it helps achieve</h3><ul className="check-list">{service.benefits.map(x => <li key={x}>{x}</li>)}</ul></div></div>
    </div></section>

    <section className="section detail-decision-section">
      <div className="section-heading split-heading"><div><span className="kicker">SCOPE REVIEW</span><h2>The service follows<br/><em>the shipment condition.</em></h2></div><p>Before execution, four groups of inputs help define the practical service scope and the packaging layers that need to work together.</p></div>
      <div className="detail-decision-grid">
        <div><Boxes size={20}/><span>01</span><h3>Cargo</h3><p>Dimensions, weight, geometry, material and the sensitivity of the equipment or goods.</p></div>
        <div><ClipboardCheck size={20}/><span>02</span><h3>Site condition</h3><p>Available access, handling equipment, packing location and any execution constraints.</p></div>
        <div><Route size={20}/><span>03</span><h3>Route</h3><p>Domestic or export movement, transit duration, storage and freight conditions.</p></div>
        <div><ShieldCheck size={20}/><span>04</span><h3>Risk</h3><p>Movement, moisture, corrosion, impact and other protection requirements that shape the service mix.</p></div>
      </div>
    </section>

    <section className="section detail-enquiry-section light-surface">
      <div className="detail-enquiry-panel">
        <div><span className="kicker">BEFORE WE START</span><h2>Share what you already know.</h2><p>You do not need a finished method statement to begin the discussion. We can identify the missing inputs after the first review.</p></div>
        <div className="detail-input-list">{["Cargo dimensions","Approximate weight","Quantity / number of units","Packing location","Destination","Shipment mode","Photos or drawings","Required timeline"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b></div>)}</div>
      </div>
    </section>

    <section className="section related-section">
      <div className="section-heading split-heading"><div><span className="kicker">RELATED SERVICES</span><h2>Build the complete<br/><em>protection route.</em></h2></div><p>A shipment may need more than one service. These adjacent routes can be combined when the cargo condition calls for it.</p></div>
      <div className="related-link-grid">{related.map((item,i)=><Link key={item.slug} href={`/services/${item.slug}`}><span>{String(i+1).padStart(2,"0")}</span><div><small>{item.eyebrow}</small><h3>{item.name}</h3><p>{item.summary}</p></div><ArrowUpRight size={18}/></Link>)}</div>
    </section>

    <QuoteBand title={`Planning ${service.name.toLowerCase()}?`} text="Share the cargo, dimensions, route and delivery timeline. We’ll help define the scope." />
  </>;
}
