import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { woodenPalletItems } from "@/data/productCatalog";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: 'Wooden Pallets for Sale | Manufacturer & Supplier | DYN Pallets',
  description: 'Source durable wooden pallets for storage, shipping and export from DYN Pallets. Custom, heat-treated, new and used pallet solutions built to your specifications.',
  alternates: { canonical: "/products/wooden-pallets" },
};

export default function WoodenPalletsPage() {
  return (
    <>
     <section className="page-hero texture-grid wooden-pallets-hero">
  <div className="page-hero-copy">
    <nav className="wooden-breadcrumbs" aria-label="Breadcrumb">
      <Link href="/products">Products</Link>
      <span>/</span>
      <span>Wooden Pallets</span>
    </nav>

    <h1>Wooden Pallets</h1>

    <p className="wooden-hero-description">
      Durable wooden pallets designed for reliable storage, handling,
      transportation and industrial shipping requirements.
    </p>

    <div className="hero-actions wooden-hero-actions">
      <Link href="/contact" className="button button-primary">
        Request a Quote <ArrowUpRight size={18} />
      </Link>

      <Link href="/contact" className="button button-ghost">
        Send Specification <ArrowUpRight size={17} />
      </Link>
    </div>
  </div>

  <div className="wooden-hero-image">
    <Image
      src="/wooden-pallets-performance.webp"
      alt="Wooden pallets"
      fill
      priority
      className="wooden-pallet-product-image"
    />
  </div>
</section>

    

      <section className="wooden-page-section wooden-intro-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-intro-layout">
            <span className="kicker">OVERVIEW</span>
            <div className="wooden-content-flow wooden-intro-copy">
            <p>Engineered wooden pallets for storage, handling, transportation and demanding industrial applications.</p>
            <p>DYN Pallets manufactures and supplies wooden pallets built around the actual requirements of your load, handling equipment, warehouse and shipment route.</p>
            <p>From standard wood pallets and 48x40 wooden pallets to custom wooden pallets, heavy-duty platforms and heat-treated pallets for export, every pallet can be configured for the dimensions, construction and operating conditions your application demands.</p>
            <p>Whether you require new wood pallets, used wooden pallets, hardwood pallets, pine wood pallets or specialised industrial wooden pallets, DYN Pallets provides dependable pallet solutions for recurring and project-based requirements.</p>
            </div>
          </div>
          <div className="wooden-spec-strip-inner wooden-inline-specs">
            <div><span>Material</span><p className="wooden-spec-value">Pine / Hardwood / Selected Timber</p></div>
            <div><span>Entry</span><p className="wooden-spec-value">2-Way / 4-Way</p></div>
            <div><span>Construction</span><p className="wooden-spec-value">Stringer / Block / Skid / Custom</p></div>
            <div><span>Sizing</span><p className="wooden-spec-value">Standard / 48x40 / Euro Format / Custom Dimensions</p></div>
            <div><span>Treatment</span><p className="wooden-spec-value">Untreated / Heat-Treated / Export Requirements</p></div>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Industrial Wooden Pallets Built Around Your Load</h2>
          </div>
          <div className="wooden-content-flow">
            <p>A pallet should do more than fit underneath a product.</p>
            <p>It should support the required weight, remain stable during handling, work with your warehouse equipment and protect the load through storage and transportation.</p>
            <p>DYN Pallets develops industrial wooden pallets around those operating conditions.</p>
            <p>As a wooden pallet manufacturer and wooden pallet supplier, we can configure pallet dimensions, deck-board spacing, timber selection, entry direction, block or stringer construction and treatment requirements according to the application.</p>
            <p>Solutions can be developed for:</p>
            <ul className="wooden-content-list">
              <li>Static and dynamic loads</li>
              <li>Warehouse storage</li>
              <li>Forklift and pallet-jack handling</li>
              <li>Conveyor movement</li>
              <li>Industrial equipment</li>
              <li>Machinery and engineering components</li>
              <li>Domestic shipping</li>
              <li>Containerised transport</li>
              <li>Export shipments</li>
              <li>Repeated handling cycles</li>
            </ul>
            <p>For applications where standard pallets are not sufficient, we manufacture custom wooden pallets around the product rather than forcing the product onto a standard platform.</p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Types of Wooden Pallets</h2>
          </div>
          <div className="wooden-content-flow">
            <p>DYN Pallets supplies multiple pallet constructions for manufacturing, warehousing, logistics and export applications.</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Two-Way Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>A 2-way wooden pallet is designed for forklift or handling equipment to enter from two opposite sides.</p>
                <p>This construction offers a straightforward and dependable solution for applications where movement direction is predictable and high structural stability is required.</p>
                <p>Two-way pallets can be manufactured in standard or custom dimensions using pine, hardwood or other suitable pallet lumber.</p>
                <p>Suitable for:</p>
                <ul className="wooden-content-list">
                  <li>Manufacturing facilities</li>
                  <li>Industrial storage</li>
                  <li>Machinery movement</li>
                  <li>Internal material handling</li>
                  <li>Heavy packaged products</li>
                  <li>Dedicated transport routes</li>
                </ul>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Four-Way Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>Four-way wooden pallets allow forklift access from all four sides, helping improve flexibility during warehouse handling, truck loading and pallet positioning.</p>
                <p>DYN Pallets can manufacture 4-way wood pallets, block pallets and related configurations according to load, pallet dimensions and handling requirements.</p>
                <p>Four-way entry is particularly useful where pallets move frequently between warehouses, production lines, trucks and distribution facilities.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Pine Wood Pallets</h3>
              <div className="wooden-content-flow">
                <p>Pine wood pallets provide a practical balance between strength, weight and commercial efficiency.</p>
                <p>Pine pallet wood is commonly used for general warehouse, manufacturing, logistics and shipping applications.</p>
                <p>DYN Pallets can manufacture:</p>
                <ul className="wooden-content-list">
                  <li>Pine pallets</li>
                  <li>Pine wood pallets</li>
                  <li>Standard shipping pallets</li>
                  <li>Custom-sized pine pallets</li>
                  <li>Heat-treated pine pallets</li>
                  <li>New wood pallets for recurring supply requirements</li>
                </ul>
                <p>Construction can be adjusted according to load capacity, board thickness, pallet size and entry type.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Heavy-Duty Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>Heavy machinery, engineering assemblies and dense industrial products require more than a general-purpose pallet.</p>
                <p>Our heavy-duty wooden pallets can be engineered with reinforced components, additional deck boards, larger blocks, stronger stringers and suitable hardwood or solid wood construction.</p>
                <p>Heavy-duty pallets are suitable for:</p>
                <ul className="wooden-content-list">
                  <li>Machinery</li>
                  <li>Automotive components</li>
                  <li>Engineering products</li>
                  <li>Metal products</li>
                  <li>Industrial equipment</li>
                  <li>Chemical drums</li>
                  <li>High-density loads</li>
                  <li>Large-format shipments</li>
                </ul>
                <p>DYN Pallets can also develop large wooden pallets, long wood pallets and specialised pallet skids for loads outside standard pallet dimensions.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Export Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>International shipments can involve additional treatment, documentation, handling and destination requirements.</p>
                <p>DYN Pallets manufactures export wooden pallets according to the shipment route, load and applicable packaging requirements.</p>
                <p>Options may include:</p>
                <ul className="wooden-content-list">
                  <li>Heat-treated wooden pallets</li>
                  <li>Wooden shipping pallets</li>
                  <li>Custom export pallet dimensions</li>
                  <li>Container-compatible pallet configurations</li>
                  <li>Heavy-duty export pallets</li>
                  <li>Wooden skids</li>
                  <li>Pallet crates and supporting timber packaging</li>
                </ul>
                <p>Tell us the destination country, product dimensions and shipping method so the pallet can be specified correctly before production.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Heat-Treated Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>For international shipments requiring treated timber packaging, DYN Pallets can supply heat-treated pallets and heat-treated wood pallets according to applicable export requirements.</p>
                <p>Heat treatment can help prepare wooden packaging for regulated international movement where ISPM 15 pallets or compliant timber packaging is required.</p>
                <p>Available configurations can include:</p>
                <ul className="wooden-content-list">
                  <li>Heat-treated wooden pallets</li>
                  <li>Heat-treated wooden pallets for export</li>
                  <li>Treated wood pallets</li>
                  <li>Treated pallets</li>
                  <li>Pine heat-treated pallets</li>
                  <li>Hardwood heat-treated pallets</li>
                  <li>Custom export pallets</li>
                </ul>
                <p>Where fumigated pallets for export or another treatment method is specifically requested, the shipment destination and applicable requirement should be confirmed before production.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Specifications</h2>
          </div>
          <div className="wooden-content-flow">
            <p>Every pallet specification begins with the operating requirement.</p>
            <p>DYN Pallets can configure:</p>
            <div className="wooden-table-wrap">
              <table className="wooden-spec-table">
                <thead><tr><th>Specification</th><th>Available Options</th></tr></thead>
                <tbody>
                  <tr><td>Material</td><td>Pine, hardwood, selected timber</td></tr>
                  <tr><td>Entry</td><td>2-way or 4-way</td></tr>
                  <tr><td>Construction</td><td>Stringer, block, skid or custom</td></tr>
                  <tr><td>Condition</td><td>New, recycled or used subject to requirement</td></tr>
                  <tr><td>Size</td><td>Standard or custom</td></tr>
                  <tr><td>Load</td><td>Light, medium or heavy-duty</td></tr>
                  <tr><td>Treatment</td><td>Untreated or heat-treated</td></tr>
                  <tr><td>Application</td><td>Storage, warehouse, shipping or export</td></tr>
                  <tr><td>Handling</td><td>Forklift, pallet jack, conveyor or manual process</td></tr>
                </tbody>
              </table>
            </div>
            <p>Board thickness, block configuration, stringer arrangement, deck spacing and overall construction can be adapted to the required performance.</p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Sizes & Dimensions</h2>
          </div>
          <div className="wooden-content-flow">
            <p>Choosing the correct wooden pallet size affects storage density, handling efficiency, truck utilisation and load stability.</p>
            <p>DYN Pallets manufactures standard and custom pallet dimensions for industrial applications.</p>
          </div>
          <div className="wooden-subsection-grid is-two">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Standard Sizes</h3>
              <div className="wooden-content-flow">
                <p>Common pallet requirements include:</p>
                <p>48 x 40 Wood Pallets / 48x40 Wooden Pallets</p>
                <p>The 48 x 40 wood pallet format is widely used for warehouse, distribution and industrial handling requirements.</p>
                <p>It can be manufactured in different timber grades, entry configurations and load capacities.</p>
                <p>Other formats can include:</p>
                <ul className="wooden-content-list">
                  <li>1200 x 1200 wooden pallets</li>
                  <li>Euro-format pallets</li>
                  <li>Standard wooden pallets</li>
                  <li>Small wooden pallets</li>
                  <li>Large wooden pallets</li>
                  <li>Long wooden pallets</li>
                  <li>Industrial pallet skids</li>
                </ul>
                <p>Specific Euro pallet or EPAL pallet requirements should be communicated during quotation so dimensions, construction and applicable standards can be reviewed.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Custom Sizes</h3>
              <div className="wooden-content-flow">
                <p>Not every product fits a standard pallet.</p>
                <p>DYN Pallets manufactures custom wooden pallets around your equipment, component, carton arrangement or shipment.</p>
                <p>Custom pallet dimensions can help improve:</p>
                <ul className="wooden-content-list">
                  <li>Load support</li>
                  <li>Product stability</li>
                  <li>Container utilisation</li>
                  <li>Warehouse storage</li>
                  <li>Forklift handling</li>
                  <li>Transport efficiency</li>
                  <li>Product protection</li>
                </ul>
                <p>Send the required length, width, height, weight and handling information and our team can recommend an appropriate pallet construction.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Built to Your Requirement</h2>
          </div>
          <div className="wooden-content-flow">
            <p>There is no single pallet specification that works for every industrial application.</p>
            <p>Before manufacturing, DYN Pallets considers six important requirements.</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Load</h3>
              <div className="wooden-content-flow">
                <p>Tell us the product weight and how that weight is distributed.</p>
                <p>A concentrated machinery load requires a different pallet construction from evenly distributed cartons.</p>
                <p>Static, dynamic and handling loads should all be considered.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Dimensions</h3>
              <div className="wooden-content-flow">
                <p>Provide the length, width and height of the product or required pallet.</p>
                <p>We can manufacture standard pallet sizes as well as small wooden pallets, large wooden pallets, long wood pallets and custom platforms.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Handling</h3>
              <div className="wooden-content-flow">
                <p>How will the pallet move?</p>
                <p>Forklift, pallet jack, conveyor systems and manual handling can each influence pallet entry and construction.</p>
                <p>The pallet may be configured as:</p>
                <ul className="wooden-content-list">
                  <li>2-way entry</li>
                  <li>4-way entry</li>
                  <li>Wooden skid</li>
                  <li>Block pallet</li>
                  <li>Stringer pallet</li>
                </ul>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Construction</h3>
              <div className="wooden-content-flow">
                <p>The pallet structure can be adapted according to load and operating conditions.</p>
                <p>Options may include different:</p>
                <ul className="wooden-content-list">
                  <li>Deck-board arrangements</li>
                  <li>Stringer configurations</li>
                  <li>Block constructions</li>
                  <li>Timber thicknesses</li>
                  <li>Fastening patterns</li>
                  <li>Support positions</li>
                  <li>Reinforcement requirements</li>
                </ul>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Storage Conditions</h3>
              <div className="wooden-content-flow">
                <p>Indoor, outdoor, humid, temperature-controlled or long-term storage conditions can influence timber and pallet specifications.</p>
                <p>Tell us where and how the loaded pallet will be stored.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Shipment Route</h3>
              <div className="wooden-content-flow">
                <p>Domestic transportation and international export may require different pallet specifications.</p>
                <p>For export shipments, provide:</p>
                <ul className="wooden-content-list">
                  <li>Destination</li>
                  <li>Shipping method</li>
                  <li>Container requirements</li>
                  <li>Treatment requirement</li>
                  <li>Product weight</li>
                  <li>Pallet dimensions</li>
                </ul>
                <p>This helps determine whether standard, treated or heat-treated wooden pallets for export are required.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Applications</h2>
          </div>
          <div className="wooden-content-flow">
            <p>DYN Pallets provides wooden shipping pallets, pallet skids and industrial wood pallets for a wide range of applications.</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Manufacturing</h3>
              <div className="wooden-content-flow">
                <p>Reliable pallets for raw materials, finished products, components and production-line movement.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Warehousing</h3>
              <div className="wooden-content-flow">
                <p>Wooden pallets designed for storage, racking, internal handling and distribution environments.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Engineering</h3>
              <div className="wooden-content-flow">
                <p>Heavy-duty wooden pallets and custom wooden skids for machines, components and fabricated equipment.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Automotive</h3>
              <div className="wooden-content-flow">
                <p>Pallet configurations for automotive components, assemblies, parts and repeat movement between facilities.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Pharmaceutical</h3>
              <div className="wooden-content-flow">
                <p>Structured pallet solutions for controlled product handling, warehousing and shipment requirements.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Chemical</h3>
              <div className="wooden-content-flow">
                <p>Heavy-duty pallet configurations for drums, containers and industrial chemical packaging requirements.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">07</span>
              <h3>Logistics</h3>
              <div className="wooden-content-flow">
                <p>Standard and custom shipping wood pallets designed for frequent handling through logistics and distribution operations.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">08</span>
              <h3>Export</h3>
              <div className="wooden-content-flow">
                <p>Heat-treated and export wooden pallets developed around international transport requirements and shipment routes.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>For Export Shipments</h2>
          </div>
          <div className="wooden-content-flow">
            <p>International shipping places different demands on timber packaging.</p>
            <p>DYN Pallets can manufacture wood pallets for shipping and wooden shipping pallets according to product dimensions, handling method, container type and destination requirements.</p>
            <p>Where applicable, heat-treated wooden pallets can be prepared for export requirements involving ISPM 15 treatment.</p>
            <p>Export solutions can include:</p>
            <ul className="wooden-content-list">
              <li>Export wooden pallets</li>
              <li>Heat-treated pallets</li>
              <li>Heat-treated wood pallets</li>
              <li>Wooden skids</li>
              <li>Heavy-duty wooden pallets</li>
              <li>Custom wooden pallets</li>
              <li>Wooden pallet crates</li>
              <li>Large wooden pallet crates</li>
              <li>Dunnage and supporting timber components</li>
            </ul>
            <p>Before placing an export order, send us your shipment destination and required specification so the correct treatment and construction can be confirmed.</p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Why Wooden Pallets?</h2>
          </div>
          <div className="wooden-content-flow">
            <p>Wooden pallets remain one of the most practical solutions for industrial material handling because they combine strength, repairability, flexibility and cost efficiency.</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Strong</h3>
              <div className="wooden-content-flow">
                <p>Solid timber construction can support demanding warehouse and transportation applications.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Repairable</h3>
              <div className="wooden-content-flow">
                <p>Many wooden pallet components can be replaced when damaged, extending useful service life where the pallet design allows.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Customisable</h3>
              <div className="wooden-content-flow">
                <p>Unlike fixed-format platforms, pallet wood can be configured around unusual products, machinery and non-standard dimensions.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Suitable for Heavy Loads</h3>
              <div className="wooden-content-flow">
                <p>Hardwood pallets and reinforced timber construction can support demanding industrial applications.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Available in Standard and Custom Sizes</h3>
              <div className="wooden-content-flow">
                <p>From 48x40 pallets and standard wooden pallets to oversized custom platforms, timber construction offers significant dimensional flexibility.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Suitable for Export</h3>
              <div className="wooden-content-flow">
                <p>Properly treated wooden packaging can be used for international shipments requiring applicable timber treatment standards.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">07</span>
              <h3>Reusable and Recoverable</h3>
              <div className="wooden-content-flow">
                <p>Where condition permits, pallets can be repaired, reclaimed or returned to service.</p>
                <p>Recycled wooden pallets, reclaimed pallets and used wooden pallets can also provide practical solutions for selected applications.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Why DYN Pallets?</h2>
          </div>
          <div className="wooden-content-flow">
            <p>Your pallet specification should begin with the product being moved—not with whatever pallet happens to be available.</p>
            <p>DYN Pallets focuses on matching pallet construction to real operating requirements.</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Built Around the Application</h3>
              <div className="wooden-content-flow">
                <p>We consider load, dimensions, handling, storage and transportation before recommending the pallet.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Standard and Custom Manufacturing</h3>
              <div className="wooden-content-flow">
                <p>Choose standard configurations or have custom wood pallets manufactured around your requirement.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Multiple Timber Options</h3>
              <div className="wooden-content-flow">
                <p>Specifications can include pine pallets, hardwood pallets and other suitable pallet lumber according to the application.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>New and Recycled Options</h3>
              <div className="wooden-content-flow">
                <p>Depending on specification and availability, requirements can be quoted for new wooden pallets, recycled wood pallets and used wooden pallets.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Industrial Capability</h3>
              <div className="wooden-content-flow">
                <p>From small wooden pallets to large heavy-duty pallet skids, construction can be adapted for demanding applications.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Export-Ready Options</h3>
              <div className="wooden-content-flow">
                <p>Heat-treated and export pallet requirements can be incorporated where applicable.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">07</span>
              <h3>Recurring Supply</h3>
              <div className="wooden-content-flow">
                <p>DYN Pallets can support ongoing pallet requirements for manufacturing, warehouse, logistics and industrial operations.</p>
                <p>If you need pallets for sale, new pallets for sale, wood pallets for sale or wooden pallets for sale for ongoing operations, send us your required quantity and specification.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>What We Need to Build the Right Pallet</h2>
          </div>
          <div className="wooden-content-flow">
            <p>Getting the right quotation starts with the right information.</p>
            <p>Send DYN Pallets:</p>
          </div>
          <div className="wooden-requirement-grid">
            <div className="wooden-requirement-card">
              <span>01</span>
              <h3>Product dimensions</h3>
              <p>Length × width × height.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>02</span>
              <h3>Product weight</h3>
              <p>Total load weight and whether the weight is evenly distributed.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>03</span>
              <h3>Required pallet dimensions</h3>
              <p>Provide a known size or ask us to recommend one.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>04</span>
              <h3>Quantity</h3>
              <p>One-time requirement or recurring supply.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>05</span>
              <h3>Entry requirement</h3>
              <p>2-way or 4-way forklift access.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>06</span>
              <h3>Handling equipment</h3>
              <p>Forklift, pallet jack, conveyor or other system.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>07</span>
              <h3>Storage conditions</h3>
              <p>Indoor, outdoor or special storage environment.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>08</span>
              <h3>Destination</h3>
              <p>Domestic transport or export.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>09</span>
              <h3>Treatment requirement</h3>
              <p>Heat treatment or other specified export requirement.</p>
            </div>
            <div className="wooden-requirement-card">
              <span>10</span>
              <h3>Drawing or existing pallet specification</h3>
              <p>Send an existing drawing, photograph or dimensional specification where available.</p>
            </div>
          </div>
          <div className="wooden-content-flow">
            <p>Once these details are available, we can recommend the construction and prepare your quotation.</p>
          </div>
          <div className="wooden-inline-cta">
            <Link href="/contact" className="button button-primary">Send Your Pallet Specification <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS</span>
            <h2>Related Pallet Solutions</h2>
          </div>
          <div className="wooden-content-flow">
            <p>DYN Pallets can support requirements beyond conventional standard wooden pallets.</p>
            <p>Related solutions may include:</p>
          </div>
          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Wooden Skids</h3>
              <div className="wooden-content-flow">
                <p>A wooden skid or pallet skid provides a simple support platform for machinery, equipment and industrial loads where full pallet construction is unnecessary.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Hardwood Pallets</h3>
              <div className="wooden-content-flow">
                <p>Hardwood pallets provide strong construction for demanding industrial and heavy-load applications.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Recycled and Used Wooden Pallets</h3>
              <div className="wooden-content-flow">
                <p>For suitable applications, used pallets, used wood pallets, recycled pallets and recycled wooden pallets may provide a practical alternative to new pallet construction.</p>
                <p>Availability depends on required size, condition, load and quantity.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Plywood Pallets</h3>
              <div className="wooden-content-flow">
                <p>Plywood pallet construction may be considered for selected applications where dimensional consistency and weight are important.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Pressed and Compressed Wood Pallets</h3>
              <div className="wooden-content-flow">
                <p>Pressed wood pallets, presswood pallets, molded wood pallets and compressed wood pallets may be considered where the application and supply requirement suit this type of platform.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Wooden Pallet Crates</h3>
              <div className="wooden-content-flow">
                <p>For products requiring both a supporting base and surrounding protection, wooden pallet crates can combine palletised handling with crate-style protection.</p>
              </div>
            </article>
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">07</span>
              <h3>Dunnage</h3>
              <div className="wooden-content-flow">
                <p>Timber dunnage and supporting wood components can help stabilise, separate and protect industrial products during storage and transportation.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
  {/* <section className="section wooden-category-browser">
        <div className="section-heading split-heading">
          <div><span className="kicker">WOODEN PALLET CATEGORY</span><h2>Browse wooden pallet types.</h2></div>
          <p>Explore the wooden pallet range by construction, material, handling format and shipment requirement. Each route below opens a dedicated product page.</p>
        </div>
        <div className="catalog-category-grid">
          {woodenPalletItems.map((item, index) => (
            <Link href={`/products/wooden-pallets/${item.slug}`} className="catalog-static-card" key={item.slug}>
              <div className="catalog-static-image"><ImageIcon size={22} /><span>IMAGE</span></div>
              <div className="catalog-static-body">
                <span className="kicker">{String(index + 1).padStart(2, "0")} · {item.eyebrow}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <footer><span>View product</span><ArrowUpRight size={15} /></footer>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      <section className="wooden-page-section wooden-faq-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN PALLETS FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="wooden-faq-list">
            <details>
              <summary><span>01</span><b>What type of wooden pallet should I use?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>The correct pallet depends on product weight, dimensions, handling method, storage conditions and shipment route.</p>
                <p>Send DYN Pallets your load information and we can recommend an appropriate configuration.</p>
              </div>
            </details>
            <details>
              <summary><span>02</span><b>Do you manufacture custom wooden pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes. Custom wooden pallets can be manufactured around specific dimensions, loads, forklift entry requirements and shipping conditions.</p>
                <p>They are particularly useful for machinery, engineering equipment and products that do not fit a standard pallet size.</p>
              </div>
            </details>
            <details>
              <summary><span>03</span><b>What are common wooden pallet sizes?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>A widely requested format is the 48x40 wood pallet.</p>
                <p>Other requirements can include Euro-format pallets, 1200 x 1200 wooden pallets, small wooden pallets, large pallets and completely custom dimensions.</p>
                <p>The correct pallet size should be selected according to the product and handling system rather than dimensions alone.</p>
              </div>
            </details>
            <details>
              <summary><span>04</span><b>What is the difference between two-way and four-way pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>A 2-way wooden pallet provides forklift entry from two opposite sides.</p>
                <p>A 4-way wood pallet allows access from four sides, providing greater flexibility during warehouse and logistics handling.</p>
              </div>
            </details>
            <details>
              <summary><span>05</span><b>Do you supply heat-treated pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Heat-treated wooden pallets can be supplied for applications requiring treated timber packaging.</p>
                <p>For export shipments, provide the destination and required treatment specification when requesting a quotation.</p>
              </div>
            </details>
            <details>
              <summary><span>06</span><b>Can wooden pallets be used for export?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>Export wooden pallets can be manufactured according to the load, shipment method, destination and applicable timber packaging requirements.</p>
                <p>Where required, heat-treated pallet options can be provided for export applications involving ISPM 15 requirements.</p>
              </div>
            </details>
            <details>
              <summary><span>07</span><b>Do you manufacture heavy-duty wooden pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>Heavy-duty wooden pallets can be configured using stronger materials, thicker timber, additional supports and reinforced construction depending on the load.</p>
              </div>
            </details>
            <details>
              <summary><span>08</span><b>Are hardwood pallets available?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Hardwood pallets can be manufactured for applications requiring strong timber construction.</p>
                <p>The final material selection depends on load, pallet design, availability and operating requirements.</p>
              </div>
            </details>
            <details>
              <summary><span>09</span><b>Do you supply pine wood pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>Pine wood pallets can be manufactured in standard or custom dimensions for warehouse, manufacturing, shipping and export applications.</p>
              </div>
            </details>
            <details>
              <summary><span>10</span><b>Are new and used wooden pallets available?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Requirements for new wood pallets, used wooden pallets and recycled wood pallets can be quoted according to size, quantity, condition and availability.</p>
                <p>For critical loads or export shipments, the required pallet condition and treatment should always be specified.</p>
              </div>
            </details>
            <details>
              <summary><span>11</span><b>Can I order 48x40 wooden pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>DYN Pallets can manufacture 48 x 40 wood pallets and other standard or custom sizes according to required load, construction, timber and treatment.</p>
              </div>
            </details>
            <details>
              <summary><span>12</span><b>Can you manufacture large wooden pallets?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>Large wooden pallets, long wooden pallets and custom pallet skids can be designed for machinery, engineering components and oversized industrial loads.</p>
                <p>Send the product dimensions and weight so the pallet structure can be specified correctly.</p>
              </div>
            </details>
            <details>
              <summary><span>13</span><b>How much does a wooden pallet cost?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>The wooden pallet price depends on dimensions, timber type, construction, quantity, load requirement, treatment and customisation.</p>
                <p>A standard pallet and a heavy-duty custom export pallet will have different material and production requirements.</p>
                <p>Send your specification and quantity to receive an accurate wood pallet cost.</p>
              </div>
            </details>
            <details>
              <summary><span>14</span><b>Can DYN Pallets supply recurring pallet requirements?</b><i>+</i></summary>
              <div className="wooden-content-flow">
                <p>Yes.</p>
                <p>DYN Pallets can support repeat requirements for manufacturing facilities, warehouses, logistics operations and industrial supply chains.</p>
                <p>Send the pallet specification, expected quantity and required supply frequency to discuss recurring production.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* <section className="wooden-final-cta">
        <div className="wooden-final-cta-inner">
          <span className="kicker">DYN PALLETS</span>
          <h2>Bring the load.<br /><em>We'll engineer the protection.</em></h2>
          <div className="wooden-content-flow">
            <p>From standard wooden pallets for sale to custom industrial pallets, heat-treated export pallets, pallet skids and heavy-duty timber packaging, DYN Pallets builds around the way your product is stored, handled and transported.</p>
          </div>
          <div className="wooden-final-actions">
            <Link href="/contact" className="button button-light">Request a Quote <ArrowUpRight size={17} /></Link>
            <Link href="/contact" className="button button-ghost">Send Specification <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
