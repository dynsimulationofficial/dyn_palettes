import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Boxes, ClipboardCheck, Factory, PackageCheck, ShieldCheck, Ship, Truck, Wind } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { Reveal } from "@/components/Motion";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore DYN Pallets services including heat treatment, fumigation, industrial packing, VCI packing, vacuum packing and container lashing for industrial shipments.",
  alternates: { canonical: "/services" },
};

const servicesImage = "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

const supportItems = [
  ["01","Packaging design","Choose the base, enclosure and protection route around cargo and handling."],
  ["02","Heat treatment","Coordinate applicable treatment for wooden export packaging."],
  ["03","Fumigation","Plan treatment support where destination or cargo requirements call for it."],
  ["04","Industrial packing","Pack machinery, equipment and components around their transit risk."],
  ["05","Skid packing","Create strong machinery bases with lift access and positive securing."],
  ["06","VCI protection","Add corrosion protection for metal components and machinery."],
  ["07","Vacuum packing","Use barrier-film protection for moisture-sensitive or long-duration routes."],
  ["08","Lashing & chocking","Control cargo movement inside containers through blocking and restraint."],
] as const;

const serviceFaqs = [
  ["Can multiple services be combined for one shipment?", "Yes. A requirement can combine pallet or skid supply, industrial packing, VCI or vacuum protection, treatment and container lashing/chocking as one coordinated route."],
  ["Do you support machinery and heavy equipment packing?", "Yes. Industrial and skid packing can be reviewed around equipment dimensions, weight, lift points, fragility and shipment method."],
  ["When is VCI or vacuum packing useful?", "These protection methods are useful when metal corrosion, moisture exposure, long storage or extended export transit creates additional risk."],
  ["What information should we share first?", "Cargo dimensions, approximate weight, quantity, destination, shipment mode and photographs or drawings help define the service route quickly."],
] as const;

export default function ServicesPage() {
  return <>
    <PageHero
      kicker="PACKING + EXPORT SERVICES"
      title="Protection beyond the pallet."
      text="Coordinate treatment, industrial packing, corrosion protection and container securing around one shipment requirement."
      image={servicesImage}
      imageLabel="PACKING + SHIPMENT SUPPORT"
      imageMeta="PROTECT · SECURE · DISPATCH"
    />

    <section className="section service-overview-section light-surface">
      <Reveal className="section-heading split-heading"><div><span className="kicker">01 · OVERVIEW</span><h2>One shipment.<br/><em>Multiple protection layers.</em></h2></div><p>DYN PALLETS supports businesses that need more than a product. Treatment, packing, corrosion control and cargo securing can be coordinated around the same industrial shipment.</p></Reveal>
      <div className="service-signal-grid">
        <div><strong>08</strong><span>Service routes</span><p>Treatment, packing and securing support.</p></div>
        <div><strong>01</strong><span>Requirement entry</span><p>Start with the cargo, not the service name.</p></div>
        <div><strong>360°</strong><span>Protection view</span><p>Load, moisture, movement and route considered together.</p></div>
        <div><strong>B2B</strong><span>Industrial focus</span><p>Built around procurement and project requirements.</p></div>
      </div>
    </section>

    <section className="section one-roof-section light-surface">
      <Reveal className="section-heading split-heading"><div><span className="kicker">02 · ONE ROOF</span><h2>Complete packaging support<br/><em>around one requirement.</em></h2></div><p>Industrial shipments often need several protection decisions at once. Keeping those routes connected reduces unnecessary handoffs and makes the final scope easier to understand.</p></Reveal>
      <div className="support-item-grid">{supportItems.map(([num,title,copy],i)=><Reveal key={num} delay={(i%4)*40}><div className="support-item"><span>{num}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight size={17}/></div></Reveal>)}</div>
    </section>

    <section className="section service-process-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">03 · HOW IT WORKS</span><h2>From cargo condition<br/><em>to shipment-ready protection.</em></h2></div><p>Some requirements need a single treatment step. Others need a complete skid, barrier, crate and securing route. The process stays structured either way.</p></Reveal>
      <div className="service-process-grid">
        {[
          ["01","Review","Cargo size, weight, fragility, route and site conditions are reviewed first.",ClipboardCheck],
          ["02","Plan","The right pallet, skid, enclosure, treatment and protective layers are selected.",Boxes],
          ["03","Prepare","Materials, treatment requirements and site execution are coordinated.",Factory],
          ["04","Protect","VCI, barrier packing, blocking, wrapping or enclosure is applied as required.",ShieldCheck],
          ["05","Secure","The unit is checked for handling, movement and final shipment handover.",Truck],
        ].map(([num,title,copy,Icon],i)=>{ const I=Icon as typeof ClipboardCheck; return <Reveal key={String(num)} delay={i*50}><div className="service-process-step"><div><span>{String(num)}</span><I size={20}/></div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>; })}
      </div>
    </section>

    <section className="cards-page service-catalog-section light-surface"><div className="cards-shell">
      <Reveal className="cards-intro"><h2>Eight focused service routes.</h2><p>Use a single service or combine several into a complete packing and securing workflow for industrial and export cargo.</p></Reveal>
      <div className="service-card-grid">{services.map((service, i) => <Reveal key={service.slug} delay={(i%2)*45}><Link className="service-card-large" href={`/services/${service.slug}`}><span>{String(i + 1).padStart(2, "0")} · {service.eyebrow}</span><h3>{service.name}</h3><p>{service.summary}</p><footer><span>Explore service</span><ArrowUpRight size={18} /></footer></Link></Reveal>)}</div>
    </div></section>

    <section className="section service-model-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">04 · FLEXIBLE SERVICE MODEL</span><h2>No single packing route<br/><em>fits every shipment.</em></h2></div><p>The final service mix depends on cargo, storage, route, material, duration and the level of movement control required.</p></Reveal>
      <div className="service-model-panel">
        <div className="service-model-copy"><span>REQUIREMENT REVIEW</span><h3>We evaluate the full shipment condition.</h3><p>A single heavy machine may need a skid, VCI barrier, crate and container chocking. A repeat warehouse load may only need palletisation. The right scope follows the risk.</p><Link href="/contact" className="button button-primary">Discuss your shipment <ArrowUpRight size={17}/></Link></div>
        <div className="service-model-list">
          {["Cargo geometry","Approx. weight","Fragility","Handling method","Storage duration","Moisture / corrosion risk","Domestic or export","Container / freight route"].map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b><i>{i<4?"LOAD SIGNAL":"ROUTE SIGNAL"}</i></div>)}
        </div>
      </div>
    </section>

    <section className="section service-use-section light-surface">
      <Reveal className="section-heading split-heading"><div><span className="kicker">05 · WHO THESE SERVICES SUPPORT</span><h2>Different cargo.<br/><em>One clear starting point.</em></h2></div><p>Manufacturers, exporters, project teams and logistics operators can all enter through the same requirement-led conversation.</p></Reveal>
      <div className="service-use-grid">
        <div><Factory size={23}/><span>MANUFACTURING</span><h3>Machinery & components</h3><p>Skids, industrial packing, corrosion protection and crates for factory dispatch.</p></div>
        <div><Ship size={23}/><span>EXPORT</span><h3>International shipments</h3><p>Treatment, barrier packing, export timber packaging and container securing.</p></div>
        <div><PackageCheck size={23}/><span>PROJECT CARGO</span><h3>Irregular or high-value loads</h3><p>Custom packing routes around unusual geometry, lift points and long transit cycles.</p></div>
        <div><Wind size={23}/><span>STORAGE</span><h3>Moisture-sensitive equipment</h3><p>VCI and vacuum barrier solutions for extended storage and sensitive metal surfaces.</p></div>
      </div>
      <Reveal className="service-route-cta"><div><span className="kicker">NOT SURE WHERE TO START?</span><h3>You do not need to choose a service first.</h3><p>Tell us what is moving, where it is going and what risks concern you. We can identify the most appropriate packing route.</p></div><Link href="/contact" className="button button-primary">Share your requirement <ArrowUpRight size={17}/></Link></Reveal>
    </section>

    <section className="section service-faq-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">06 · FREQUENTLY ASKED QUESTIONS</span><h2>Answers before<br/><em>the service enquiry.</em></h2></div><p>Common questions from industrial buyers coordinating packing, treatment and export protection.</p></Reveal>
      <div className="product-faq-grid">{serviceFaqs.map(([q,a],i)=><Reveal key={q} delay={i*40}><details><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details></Reveal>)}</div>
      <Reveal><Link href="/contact" className="wide-link textured-link"><span>Need help routing a service requirement?</span><span>Talk to us <ArrowRight size={17}/></span></Link></Reveal>
    </section>

    <QuoteBand />
  </>;
}
