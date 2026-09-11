import Link from "next/link";
import { ArrowUpRight, Boxes, ClipboardCheck, Factory, PackageCheck, Ruler, ShieldCheck, Ship, Truck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";
import { Reveal } from "@/components/Motion";

export const metadata = { title: "About" };

const aboutImage = "https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000";

const routes = [
  ["01", "Pallet systems", "Standard, custom, export and high-load pallet formats designed around handling and movement.", Boxes],
  ["02", "Boxes & crates", "Enclosed and framed protection for parts, assemblies, machinery and project cargo.", PackageCheck],
  ["03", "Export treatment", "Heat treatment and applicable shipment-treatment coordination for wooden packaging routes.", Ship],
  ["04", "Packing & securing", "Industrial packing, skid packing, VCI, vacuum packing, lashing and chocking around the shipment.", ShieldCheck],
] as const;

const principles = [
  ["LF", "Load first", "We start with weight, geometry, handling and route before selecting a packaging format."],
  ["CC", "Clear communication", "Dimensions, quantity, load and destination are organised early so the commercial route stays clear."],
  ["PE", "Practical engineering", "Material and structure are placed where handling forces, impact, moisture and storage actually matter."],
  ["RE", "Reliable execution", "The solution must work on the factory floor, in the warehouse and through dispatch — not only on a drawing."],
  ["LP", "Long-term partnership", "Repeat requirements become easier when specifications, expectations and packaging logic remain consistent."],
] as const;

export default function AboutPage() {
  return <>
    <PageHero
      kicker="ABOUT DYN PALLETS"
      title="Practical packaging. Engineered thinking."
      text="DYN PALLETS is built around a simple idea: industrial packaging should make procurement, handling and shipment easier — not add another layer of uncertainty."
      image={aboutImage}
      imageLabel="PALLET + CRATE OPERATIONS"
      imageMeta="DESIGN · BUILD · PROTECT"
    />

    <section className="about-story">
      <div className="about-grid">
        <Reveal><span className="kicker">OUR APPROACH</span><h2>Start with the load, not the catalogue.</h2></Reveal>
        <Reveal className="about-copy"><p>Standard products are useful, but real industrial requirements rarely arrive as neat catalogue numbers. Loads vary, forklift access changes, storage environments differ and export routes add treatment and securing requirements.</p><p>Our approach is to begin with the operating condition: what is moving, how it will be lifted, where it will travel, how long it will be stored and what protection the cargo actually needs. From there, the pallet, box, crate or skid becomes part of a complete transport system.</p></Reveal>
      </div>
      <div className="about-values">
        <div className="value-card"><span>01 · CLARITY</span><h3>Clear inputs. Clear scope.</h3><p>Size, quantity, load and delivery location create a fast starting point for commercial review.</p></div>
        <div className="value-card"><span>02 · ENGINEERING</span><h3>Structure follows handling.</h3><p>Entry direction, member sizes and securing details are chosen around the actual movement of the cargo.</p></div>
        <div className="value-card"><span>03 · EXECUTION</span><h3>Built for dispatch.</h3><p>Packaging is only useful when it works on the factory floor, in the warehouse and through the shipment route.</p></div>
      </div>
    </section>

    <section className="section company-routes-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">OUR BUSINESS</span><h2>One packaging partner.<br/><em>Four connected routes.</em></h2></div><p>Product supply and packing services sit in one system, so a requirement can start with a pallet and expand into treatment, enclosure, corrosion protection or container securing when needed.</p></Reveal>
      <div className="company-route-grid">
        {routes.map(([num,title,copy,Icon], i) => <Reveal key={num} delay={i*55}><div className="company-route-card"><div><span>{num}</span><Icon size={21}/></div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}
      </div>
    </section>

    <section className="section about-process-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">HOW WE WORK</span><h2>Clear requirements.<br/><em>Appropriate protection.</em></h2></div><p>Industrial packaging becomes easier to procure when the route is structured from the beginning. We use four practical checkpoints from first enquiry to dispatch.</p></Reveal>
      <div className="about-process-line">
        {[
          ["01","Understand","Review cargo dimensions, approximate load, quantity, handling method, storage and destination.",Ruler],
          ["02","Engineer","Select the pallet, skid, box or crate route and define entry, reinforcement and protection layers.",ClipboardCheck],
          ["03","Build","Fabricate the packaging and coordinate treatment or protective materials where required.",Factory],
          ["04","Dispatch","Pack, secure, inspect and prepare the unit for warehouse handling or shipment handover.",Truck],
        ].map(([num,title,copy,Icon], i) => { const I = Icon as typeof Ruler; return <Reveal key={String(num)} delay={i*60}><div className="about-process-step"><div className="about-process-icon"><I size={20}/><span>{String(num)}</span></div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>; })}
      </div>
    </section>

    <section className="section purpose-section light-surface">
      <Reveal className="section-heading split-heading"><div><span className="kicker">OUR PURPOSE</span><h2>Making industrial movement<br/><em>more dependable.</em></h2></div><p>Good packaging is invisible when it works: the load is easier to lift, easier to store, easier to secure and arrives with fewer surprises.</p></Reveal>
      <div className="purpose-grid">
        <Reveal className="purpose-card purpose-card-dark"><span>VISION</span><h3>A clearer standard for industrial packaging partnerships.</h3><p>To build DYN PALLETS into a dependable packaging partner for manufacturers, warehouses, exporters and project teams that need practical, engineered protection.</p></Reveal>
        <Reveal className="purpose-card"><span>MISSION</span><h3>Connect the right packaging route to the real operating condition.</h3><p>To simplify how businesses define, source and coordinate pallets, boxes, crates, treatment and industrial packing through one structured conversation.</p></Reveal>
      </div>
    </section>

    <section className="section principles-section">
      <Reveal className="section-heading split-heading"><div><span className="kicker">PRINCIPLES</span><h2>What shapes every<br/><em>packaging decision.</em></h2></div><p>The way a requirement is understood and communicated matters as much as the final timber build.</p></Reveal>
      <div className="principle-grid">
        {principles.map(([code,title,copy],i)=><Reveal key={code} delay={i*45}><div className="principle-card"><span>{code}</span><h3>{title}</h3><p>{copy}</p></div></Reveal>)}
      </div>
      <Reveal className="about-next-step"><div><span className="kicker">START WITH THE REQUIREMENT</span><h3>You do not need to know the exact pallet or packing type first.</h3><p>Share the cargo, size, quantity, approximate weight and destination. We can help identify the right product and service route.</p></div><Link href="/contact" className="button button-primary">Discuss your requirement <ArrowUpRight size={17}/></Link></Reveal>
    </section>

    <QuoteBand />
  </>;
}
