import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { services } from "@/data/site";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return <>
    <PageHero kicker="PACKING + EXPORT SERVICES" title="Protection beyond the pallet." text="Coordinate treatment, industrial packing, corrosion protection and container securing around one shipment requirement." visual="crate" />
    <section className="cards-page"><div className="cards-shell">
      <div className="cards-intro"><h2>One shipment. Multiple protection layers.</h2><p>Use individual services or combine them into a complete packing and securing workflow for industrial and export cargo.</p></div>
      <div className="service-card-grid">{services.map((service, i) => <Link className="service-card-large" href={`/services/${service.slug}`} key={service.slug}><span>{String(i + 1).padStart(2, "0")} · {service.eyebrow}</span><h3>{service.name}</h3><p>{service.summary}</p><footer><span>Explore service</span><ArrowUpRight size={18} /></footer></Link>)}</div>
    </div></section>
    <QuoteBand />
  </>;
}
