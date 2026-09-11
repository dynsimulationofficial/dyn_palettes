import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { services } from "@/data/site";

export function generateStaticParams() { return services.map(s => ({ slug: s.slug })); }

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <>
    <PageHero kicker={service.eyebrow} title={service.name} text={service.summary} back={{ href: "/services", label: "All services" }} visual="crate" />
    <section className="content-section"><div className="content-shell">
      <div className="content-grid"><h2>Integrated into the shipment plan.</h2><div><p className="lead">{service.description}</p><p>Final scope depends on cargo dimensions, handling conditions, route, destination and any customer or regulatory requirements. Share the available information and we’ll identify what needs to be confirmed before execution.</p></div></div>
      <div className="list-columns"><div className="list-block"><h3>How the service runs</h3><ul className="check-list">{service.steps.map((x, i) => <li key={x}>{String(i + 1).padStart(2, "0")} · {x}</li>)}</ul></div><div className="list-block"><h3>What it helps achieve</h3><ul className="check-list">{service.benefits.map(x => <li key={x}>{x}</li>)}</ul></div></div>
    </div></section>
    <QuoteBand title={`Planning ${service.name.toLowerCase()}?`} text="Share the cargo, dimensions, route and delivery timeline. We’ll help define the scope." />
  </>;
}
