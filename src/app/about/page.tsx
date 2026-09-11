import { PageHero } from "@/components/PageHero";
import { QuoteBand } from "@/components/QuoteBand";

export const metadata = { title: "About" };

export default function AboutPage() {
  return <>
    <PageHero kicker="ABOUT DYN PALLETS" title="Practical packaging. Engineered thinking." text="DYN PALLETS is built around a simple idea: industrial packaging should make procurement, handling and shipment easier — not add another layer of uncertainty." visual="pallet" />
    <section className="about-story"><div className="about-grid"><div><span className="kicker">OUR APPROACH</span><h2>Start with the load, not the catalogue.</h2></div><div className="about-copy"><p>Standard products are useful, but real industrial requirements rarely arrive as neat catalogue numbers. Loads vary, forklift access changes, storage environments differ and export routes add treatment and securing requirements.</p><p>Our approach is to begin with the operating condition: what is moving, how it will be lifted, where it will travel, how long it will be stored and what protection the cargo actually needs. From there, the pallet, box, crate or skid becomes part of a complete transport system.</p></div></div><div className="about-values"><div className="value-card"><span>01 · CLARITY</span><h3>Clear inputs. Clear scope.</h3><p>Size, quantity, load and delivery location create a fast starting point for commercial review.</p></div><div className="value-card"><span>02 · ENGINEERING</span><h3>Structure follows handling.</h3><p>Entry direction, member sizes and securing details are chosen around the actual movement of the cargo.</p></div><div className="value-card"><span>03 · EXECUTION</span><h3>Built for dispatch.</h3><p>Packaging is only useful when it works on the factory floor, in the warehouse and through the shipment route.</p></div></div></section>
    <QuoteBand />
  </>;
}
