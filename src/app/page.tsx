import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, Check, Factory, Gauge, PackageCheck, Ruler, ShieldCheck, Sparkles, Truck, Layers3, TimerReset, BadgeCheck, ClipboardCheck, Ship, Warehouse } from "lucide-react";
import { products, services, industries } from "@/data/site";
import { CountUp, Reveal } from "@/components/Motion";
import { ProductVisual } from "@/components/ProductVisual";
import { ProductCardMedia } from "@/components/ProductCardMedia";
import { QuoteBand } from "@/components/QuoteBand";

const fieldImages = {
  warehouse: "https://images.unsplash.com/photo-1764046155497-ad7e50737ffa?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  pallets: "https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  freight: "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  crates: "https://images.unsplash.com/photo-1772678144531-3552c0d39582?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
};

const productCardImages = [
  "https://images.unsplash.com/photo-1778830355680-b76a22f6835f?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "https://images.unsplash.com/photo-1774873396087-a8fcd266e20a?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "https://images.unsplash.com/photo-1645736315000-6f788915923b?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
  "https://images.unsplash.com/photo-1777793919056-72717077d724?auto=format&fit=crop&fm=webp&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=58&w=1800",
] as const;

const faqs = [
  ["Can you make pallets to our exact dimensions?", "Yes. Share the footprint, load, entry requirement and expected quantity. Standard and fully custom builds can both be reviewed."],
  ["Do you support export packaging?", "Yes. Export pallets, wooden boxes, crates, heat-treatment support, lashing, chocking, VCI and vacuum packing can be planned around the shipment route."],
  ["What details help you quote faster?", "Dimensions, approximate load, quantity, handling method, destination and any drawings or photographs are the best starting inputs."],
  ["Can you pack machinery at our site?", "Industrial packing requirements can be reviewed for onsite execution depending on cargo, location, access and project scope."],
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-noise" />
        <div className="hero-beam beam-a" /><div className="hero-beam beam-b" />
        <div className="hero-copy">
          {/* <div className="hero-status"><span className="pulse" /> INDUSTRIAL PACKAGING · PALLETS · EXPORT PROTECTION</div> */}
          <h1><span className="hero-line">Engineered</span><span className="hero-line hero-line-accent">to protect.</span><span className="hero-line">Built to move.</span></h1>
          <p className="hero-sub">High-performance pallets, crates and industrial packaging systems built around the load, handling method and shipment route — not a one-size-fits-all catalogue.</p>
          <div className="hero-actions"><Link href="/contact" className="button button-primary">Enquire now <ArrowUpRight size={18} /></Link><Link href="/products" className="button button-ghost">Explore products <ArrowRight size={17} /></Link></div>
          <div className="hero-proof">
            <div><ShieldCheck size={18} /><span><b>Export-ready</b> treatment support</span></div>
            <div><Ruler size={18} /><span><b>Made-to-load</b> custom builds</span></div>
            <div><Truck size={18} /><span><b>B2B-focused</b> dispatch support</span></div>
          </div>
        </div>

        <div className="hero-lab">
          <div className="lab-header"><span><i /> DYN / PACKAGING LAB</span><b>LIVE SYSTEM 01</b></div>
          <div className="lab-grid" />
          <div className="lab-corners"><i/><i/><i/><i/></div>
          <div className="lab-visual-wrap">
            <ProductVisual type="pallet" />
            <div className="load-core"><span>LOAD</span><b>02.5T</b></div>
          </div>
          <div className="lab-reading reading-a"><small>ENTRY</small><strong>4-WAY</strong><span>FORK ACCESS</span></div>
          <div className="lab-reading reading-b"><small>MATERIAL</small><strong>PINE / HW</strong><span>SELECTED TIMBER</span></div>
          <div className="lab-reading reading-c"><small>ROUTE</small><strong>EXPORT</strong><span>HT SUPPORT</span></div>
          <div className="lab-footer"><span>STRUCTURE / LOAD / ROUTE</span><span>DESIGN STATUS <b>READY</b></span></div>
        </div>

        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={18} /></div>
      </section>

      <section className="marquee-strip" aria-label="Capabilities"><div className="marquee-track">{["WOODEN PALLETS", "EXPORT CRATES", "HEAT TREATMENT", "INDUSTRIAL PACKING", "LASHING + CHOCKING", "CUSTOM SKIDS", "VCI PACKING", "VACUUM PACKING", "WOODEN PALLETS", "EXPORT CRATES", "HEAT TREATMENT"].map((item, i) => <span key={`${item}-${i}`}>{item}<i>◆</i></span>)}</div></section>

      <section className="section intro-section light-surface texture-grid">
        <Reveal className="section-heading split-heading"><div><span className="kicker">PACKAGING AS AN ENGINEERED SYSTEM</span><h2>Less guesswork.<br /><em>More control in transit.</em></h2></div><p>We study load path, lift access, storage, protection and route conditions before selecting the build. Every layer has a job — from the base pallet to the final restraint.</p></Reveal>

        <div className="field-story-grid">
          <Reveal className="field-photo field-photo-main"><div className="field-photo-bg" style={{ backgroundImage: `linear-gradient(180deg,transparent 15%,rgba(7,8,7,.72) 100%),url('${fieldImages.warehouse}')` }} /><div className="field-photo-copy"><span>01 / MATERIAL FLOW</span><strong>Packaging designed for the real handling environment.</strong></div></Reveal>
          <Reveal className="field-photo" delay={80}><div className="field-photo-bg" style={{ backgroundImage: `linear-gradient(180deg,transparent 15%,rgba(7,8,7,.70) 100%),url('${fieldImages.pallets}')` }} /><div className="field-photo-copy"><span>02 / PALLET SYSTEMS</span><strong>Repeatable builds for industrial movement.</strong></div></Reveal>
          <Reveal className="field-photo" delay={140}><div className="field-photo-bg" style={{ backgroundImage: `linear-gradient(180deg,transparent 15%,rgba(7,8,7,.70) 100%),url('${fieldImages.freight}')` }} /><div className="field-photo-copy"><span>03 / TRANSIT</span><strong>Protection that continues through dispatch.</strong></div></Reveal>
        </div>

        <div className="metric-grid light-metrics">
          <Reveal><div className="metric"><strong><CountUp value={13} suffix="+" /></strong><span>Product formats</span><p>Standard, export and heavy-duty configurations.</p></div></Reveal>
          <Reveal delay={70}><div className="metric"><strong><CountUp value={8} suffix="+" /></strong><span>Packaging services</span><p>Treatment, protection, packing and securing.</p></div></Reveal>
          <Reveal delay={140}><div className="metric"><strong><CountUp value={4} /></strong><span>Core inputs</span><p>Size, quantity, expected load and destination.</p></div></Reveal>
          <Reveal delay={210}><div className="metric metric-accent"><strong>01</strong><span>Integrated workflow</span><p>Design → Build → Protect → Dispatch.</p></div></Reveal>
        </div>
      </section>

      <section className="section products-showcase light-surface">
        <div className="section-sheen" />
        <Reveal className="section-heading split-heading"><div><span className="kicker">PRODUCT SYSTEMS</span><h2>Built from the load<br /><em>outwards.</em></h2></div><p>Choose a starting format. We tune timber sections, deck spacing, entry, reinforcement, treatment and enclosure around your real operational requirement.</p></Reveal>
        <div className="product-feature-grid">
          {products.slice(0, 6).map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 70}>
              <Link href={product.slug === "wooden-pallets" ? "/products/wooden-pallets" : "/contact"} className={`product-card textured-card ${i === 0 ? "featured" : ""}`}>
                <div className="card-index">P/{String(i + 1).padStart(2, "0")}</div>
                <div className="card-grid-overlay" />
                <ProductCardMedia image={productCardImages[i]} index={i} tag={product.eyebrow} />
                <div className="product-card-copy"><span>{product.eyebrow}</span><h3>{product.name}</h3><p>{product.summary}</p><b>{product.slug === "wooden-pallets" ? "View product" : "Enquire"} <ArrowUpRight size={15} /></b></div>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal><Link href="/products" className="wide-link textured-link"><span>Explore all product systems</span><ArrowRight size={20} /></Link></Reveal>
      </section>

      <section className="material-story">
        <div className="material-visual material-visual-static" aria-label="Wooden pallets">
          <div className="material-static-image" />
          <div className="material-static-grid" />
          <div className="material-static-label"><span>WOODEN PALLETS</span><b>ENGINEERED FOR LOAD · HANDLING · TRANSIT</b></div>
        </div>
        <Reveal className="material-copy"><span className="kicker">DESIGN LOGIC</span><h2>Strength where it matters.<br/><em>Nothing where it doesn&apos;t.</em></h2><p>Premium packaging is not about adding more material. It is about placing the right material where forces, moisture, impact and handling actually happen.</p><div className="material-points"><span><Gauge size={18}/> Load-led member sizing</span><span><Boxes size={18}/> Smart enclosure selection</span><span><Sparkles size={18}/> Cleaner, repeatable fabrication</span></div><Link href="/about" className="text-link light">How we approach packaging <ArrowUpRight size={15}/></Link></Reveal>
      </section>

      <section className="services-panel">
        <div className="services-sticky"><span className="kicker">PACKING + EXPORT SERVICES</span><h2>The pallet is only the first layer.</h2><p>Treatment, corrosion protection, blocking, lashing, vacuum sealing and industrial packing can be coordinated around the same shipment plan.</p><Link href="/services" className="text-link light">See all services <ArrowUpRight size={15} /></Link></div>
        <div className="service-list">{services.map((service, i) => <Reveal key={service.slug}><Link href={`/services/${service.slug}`} className="service-row textured-row"><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{service.name}</h3><p>{service.summary}</p></div><ArrowUpRight size={21} /></Link></Reveal>)}</div>
      </section>

      <section className="section why-section light-surface">
        <Reveal className="section-heading split-heading"><div><span className="kicker">WHY CHOOSE DYN PALLETS</span><h2>Built for clearer<br/><em>industrial procurement.</em></h2></div><p>The strongest packaging partner does more than supply a pallet. We make the requirement easier to define, the solution easier to evaluate and the shipment easier to protect.</p></Reveal>
        <div className="why-layout">
          <div className="why-cards">
            {[
              ["01", "Load-led engineering", "The build starts with weight, geometry, handling and storage — not a generic catalogue size.", Layers3],
              ["02", "One packaging route", "Pallets, boxes, crates, treatment and securing can be discussed through one requirement.", ClipboardCheck],
              ["03", "Export-ready thinking", "Treatment and transit protection are considered early when the shipment route requires them.", Ship],
              ["04", "B2B response clarity", "Give us the size, quantity, load and destination. We can route the requirement from there.", TimerReset],
            ].map(([num,title,copy,Icon], i) => { const Ico = Icon as typeof Layers3; return <Reveal key={String(num)} delay={i*55}><div className="why-card textured-card"><div><span>{String(num)}</span><Ico size={21}/></div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>; })}
          </div>
          <Reveal className="why-image-panel"><div className="why-image-bg" style={{ backgroundImage: `linear-gradient(180deg,rgba(10,11,10,.02),rgba(10,11,10,.76)),url('${fieldImages.freight}')` }} /><div className="why-image-copy"><span>REQUIREMENT SIGNAL</span><h3>Tell us what is moving.<br/>The right packaging route follows.</h3><Link href="/contact" className="button button-primary">Enquire now <ArrowUpRight size={17}/></Link></div></Reveal>
        </div>
      </section>

      <section className="section industries-section light-surface">
        <Reveal className="section-heading split-heading"><div><span className="kicker">WHO WE WORK WITH</span><h2>Different cargo.<br /><em>Different failure points.</em></h2></div><p>Every visitor should be able to recognise their operating environment quickly. Our packaging routes cover repeat warehouse flow, export freight, sensitive components and high-load project cargo.</p></Reveal>
        <div className="industry-grid">{industries.map(([name, text], i) => <Reveal key={name} delay={(i % 4) * 45}><div className="industry-card textured-card"><span>{String(i + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{text}</p><Check size={17} /></div></Reveal>)}</div>
      </section>

      <section className="section workflow-section texture-grid">
        <Reveal className="section-heading split-heading"><div><span className="kicker">HOW IT WORKS</span><h2>From requirement<br /><em>to dispatch.</em></h2></div><p>A clear B2B process inspired by the way buyers actually work: share the requirement, define the route, build the protection and prepare for handover.</p></Reveal>
        <div className="workflow-grid">
          {[["01","Share","Dimensions, quantity, load, route and drawings when available.", Ruler],["02","Engineer","Select material, structure, entry format and protection layers.", Sparkles],["03","Build","Fabricate, inspect and complete treatment where required.", Factory],["04","Secure","Pack, block, wrap, lash or seal for the shipment plan.", PackageCheck]].map(([num, title, copy, Icon]) => { const Ico = Icon as typeof Ruler; return <Reveal key={String(num)}><div className="workflow-card textured-card"><div className="workflow-top"><span>{String(num)}</span><Ico size={22} /></div><h3>{String(title)}</h3><p>{String(copy)}</p></div></Reveal>; })}
        </div>
        <Reveal className="route-cta"><div><span className="kicker">NOT SURE WHERE TO START?</span><h3>You do not need to choose a product first.</h3><p>Share the cargo, size, quantity and destination. We&apos;ll help identify whether you need a pallet, skid, crate, treatment or a combined packing route.</p></div><Link href="/contact" className="button button-primary">Share your requirement <ArrowUpRight size={17}/></Link></Reveal>
      </section>

      <section className="section dark-feature">
        <Reveal className="dark-feature-copy"><span className="kicker">CUSTOM ENGINEERED PACKAGING</span><h2>When the load is unusual,<br /><em>standard is the risk.</em></h2><p>Oversized machinery, irregular lift points, long storage cycles and complex export routes need a package designed around the shipment — not forced into a stock format.</p><Link href="/contact" className="button button-light">Discuss your load <ArrowUpRight size={18} /></Link></Reveal>
        <Reveal className="blueprint-card"><div className="bp-grid"/><div className="bp-object"><span/><span/><span/><span/></div><div className="bp-scan"/><div className="bp-note n1">LOAD PATH</div><div className="bp-note n2">LIFT ACCESS</div><div className="bp-note n3">BLOCK + BRACE</div><div className="bp-dimension d1">2400 mm</div><div className="bp-dimension d2">CUSTOM WIDTH</div></Reveal>
      </section>

      <section className="section home-faq light-surface">
        <Reveal className="section-heading split-heading"><div><span className="kicker">FREQUENTLY ASKED QUESTIONS</span><h2>Useful answers<br/><em>before you enquire.</em></h2></div><p>Quick answers for procurement teams, exporters and industrial buyers evaluating the right packaging route.</p></Reveal>
        <div className="home-faq-grid">{faqs.map(([question,answer], i) => <Reveal key={question} delay={i*45}><details className="home-faq-item"><summary><span>{String(i+1).padStart(2,"0")}</span>{question}<b>+</b></summary><p>{answer}</p></details></Reveal>)}</div>
        <Reveal className="faq-link-row"><Link href="/faq" className="wide-link textured-link"><span>View all frequently asked questions</span><ArrowRight size={20}/></Link></Reveal>
      </section>

      <QuoteBand title="Tell us what needs to move." text="Share the dimensions, quantity, approximate load and destination. You do not need to know the packaging type first — we can help route the requirement." />
    </>
  );
}
