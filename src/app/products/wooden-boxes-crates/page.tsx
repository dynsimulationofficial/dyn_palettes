import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { woodenBoxesCratesItems } from "@/data/products";
import { getProductImage } from "@/data/productImages";
import { DynTicker } from "@/components/DynTicker";

export const metadata: Metadata = {
  title: "Custom Wooden Boxes & Crates Manufacturer in India | DYN Pallets",
  description:
    "DYN Pallets manufactures custom wooden boxes & crates for industrial, export and heavy-duty packing, including pinewood, plywood, heat-treated and ISPM 15 options.",
  alternates: {
    canonical: "/products/wooden-boxes-crates",
  },
};

const productFamilies = [
  {
    slug: "wooden-boxes",
    name: "Wooden Boxes",
    eyebrow: "Framed Timber Protection",
    summary:
      "Custom wooden boxes with framed timber construction for machinery, industrial products, equipment and protected transportation.",
  },
  {
    slug: "plywood-boxes",
    name: "Plywood Boxes",
    eyebrow: "Enclosed Plywood Packaging",
    summary:
      "Clean and enclosed plywood boxes for sensitive components, equipment, industrial storage and export packaging.",
  },
  {
    slug: "pinewood-boxes",
    name: "Pinewood Boxes",
    eyebrow: "Pinewood Export Packaging",
    summary:
      "Lightweight and strong pinewood boxes for machinery, engineering goods and export-ready packaging applications.",
  },
  {
    slug: "rubber-wood-boxes",
    name: "Rubber Wood Boxes",
    eyebrow: "Industrial Timber Packaging",
    summary:
      "Durable rubber wood boxes for suitable domestic, warehouse and industrial packaging applications.",
  },
  {
    slug: "wooden-crates",
    name: "Wooden Crates",
    eyebrow: "Industrial Wooden Crates",
    summary:
      "Custom wooden crates in open, semi-enclosed or enclosed formats for machinery, equipment and irregular cargo.",
  },
  {
    slug: "bolting-boxes",
    name: "Bolting Boxes",
    eyebrow: "Heavy-Duty Bolted Packaging",
    summary:
      "Bolted wooden boxes designed for strong protection and controlled opening, access or reassembly when required.",
  },
  {
    slug: "pallet-collars",
    name: "Pallet Collars",
    eyebrow: "Modular Pallet Protection",
    summary:
      "Modular pallet collars for reusable side protection, containment and flexible pallet-based storage or movement.",
  },
];

const faqs = [
  {
    question: "Can DYN Pallets manufacture custom wooden boxes?",
    answer:
      "Yes. Custom wooden boxes can be manufactured around required dimensions, cargo weight, handling method and protection requirements.",
  },
  {
    question: "Do you manufacture custom wooden crates?",
    answer:
      "Yes. DYN Pallets manufactures custom wooden crates for machinery, components, equipment and industrial cargo.",
  },
  {
    question: "Can you manufacture large wooden crates?",
    answer:
      "Yes. Large wooden crates, big wooden crates and extra large wooden crates can be developed for suitable industrial and project-cargo applications.",
  },
  {
    question: "Do you supply export wooden crates?",
    answer:
      "Yes. We manufacture export wooden crates and wooden crates for export according to cargo and shipment requirements.",
  },
  {
    question: "Are heat-treated wooden crates available?",
    answer:
      "Yes. Heat treated wooden crates and heat treated wooden boxes can be supplied where the shipment specification requires them.",
  },
  {
    question: "Do you provide ISPM 15 wooden boxes and crates?",
    answer:
      "Suitable ISPM 15 wooden boxes and ISPM 15 wooden crates can be provided for applicable export requirements.",
  },
  {
    question: "Can plywood be used for packaging boxes?",
    answer:
      "Yes. Plywood boxes and plywood packaging boxes are suitable for many enclosed industrial and export-packaging applications.",
  },
  {
    question: "Can the crate include forklift access?",
    answer:
      "Yes. Forklift-entry requirements can be incorporated into the base design depending on the load and handling method.",
  },
  {
    question: "Do you manufacture heavy duty wooden crates?",
    answer:
      "Yes. Heavy duty wooden crates can be reinforced according to cargo weight, dimensions and handling conditions.",
  },
  {
    question: "What information should I provide for a quotation?",
    answer:
      "Send cargo dimensions, approximate weight, quantity, handling method, delivery location, destination country for export and any drawings or photographs available.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WoodenBoxesCratesPage() {
  return (
    <div className="product-category-layout">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="page-hero texture-grid wooden-pallets-hero">
        <div className="page-hero-copy">
          <nav className="wooden-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>Wooden Boxes &amp; Crates</span>
          </nav>

          <span className="kicker">ENCLOSED PROTECTION</span>
          <h1>Wooden Boxes &amp; Crates</h1>

          <div className="wooden-content-flow wooden-hero-description">
            <p>
              Protect machinery, equipment, components and export cargo with{" "}
              <strong>custom Wooden Boxes &amp; Crates</strong> engineered around
              your load, dimensions, handling method and shipment route.
            </p>
            <p>
              DYN Pallets manufactures <strong>wooden packing boxes</strong>,{" "}
              <strong>wooden packing crates</strong>, industrial wooden boxes,
              industrial wooden crates and custom wooden crates for demanding
              storage, handling and transportation requirements.
            </p>
            <p>
              Whether you require a compact solid wood crate, a reinforced large
              wooden crate, plywood packaging, pinewood boxes or heavy-duty export
              protection, every solution can be configured around the product
              being packed.
            </p>
          </div>

          <div className="hero-actions wooden-hero-actions">
            <Link href="/contact" className="button button-primary">
              Request a Quote <ArrowUpRight size={18} />
            </Link>
            <Link href="/contact" className="button button-ghost">
              Share Your Requirement <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="wooden-hero-image">
          <Image
            src="/product-photos/wooden-boxes-crates.webp"
            alt="Custom wooden boxes and crates manufactured by DYN Pallets"
            fill
            priority
            className="wooden-pallet-product-image"
          />
        </div>
      </section>

      <DynTicker items={woodenBoxesCratesItems.map((item) => ({ key: item.slug, label: item.name }))} />

      <section className="wooden-page-section wooden-intro-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-intro-layout">
            <span className="kicker">OVERVIEW</span>
            <div className="wooden-content-flow wooden-intro-copy">
              <h2>Wooden Boxes &amp; Crates Built Around Your Cargo</h2>
              <p>
                Industrial packaging works best when the enclosure is designed
                around the actual product rather than forcing the product into a
                standard box.
              </p>
              <p>
                DYN Pallets develops custom wooden boxes and custom wooden crates
                according to cargo dimensions, weight distribution, lifting
                points, handling equipment, storage conditions and shipment
                destination.
              </p>
              <p>
                Our range includes wooden crate boxes, wooden packaging boxes,
                wooden shipping crates, plywood boxes, pinewood boxes and heavy
                duty wooden crates for applications ranging from engineering
                components to machinery and export cargo.
              </p>
              <p>
                For international shipments, suitable packaging can also be
                supplied as heat treated wooden boxes, heat treated wooden crates,
                ISPM 15 wooden boxes and ISPM 15 wooden crates, depending on the
                destination and applicable packaging requirement.
              </p>
            </div>
          </div>

          <div className="wooden-spec-strip-inner wooden-inline-specs">
            <div>
              <span>Materials</span>
              <p className="wooden-spec-value">
                Solid Timber / Pinewood / Plywood / Rubber Wood
              </p>
            </div>
            <div>
              <span>Protection</span>
              <p className="wooden-spec-value">
                Open / Semi-Enclosed / Fully Enclosed
              </p>
            </div>
            <div>
              <span>Handling</span>
              <p className="wooden-spec-value">
                Forklift / Pallet Truck / Crane / Custom
              </p>
            </div>
            <div>
              <span>Sizing</span>
              <p className="wooden-spec-value">
                Standard / Large / Oversized / Custom Dimensions
              </p>
            </div>
            <div>
              <span>Export</span>
              <p className="wooden-spec-value">
                Heat-Treated / ISPM 15 / Shipment-Specific
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">INDUSTRIAL PACKAGING</span>
            <h2>Industrial Wooden Packaging for Storage, Shipping &amp; Export</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              From warehouse movement to international freight, the packaging
              structure must protect the product throughout handling, loading,
              storage and transportation.
            </p>
            <p>DYN Pallets provides industrial wooden packaging designed for:</p>
            <ul className="wooden-content-list">
              <li>Machinery and engineering equipment</li>
              <li>Automotive components</li>
              <li>Electrical and electronic equipment</li>
              <li>Industrial assemblies</li>
              <li>Metal components</li>
              <li>Pharmaceutical equipment</li>
              <li>Chemical-industry equipment</li>
              <li>Export cargo</li>
              <li>Project cargo</li>
              <li>Warehouse storage</li>
              <li>Container shipments</li>
              <li>Long-distance transportation</li>
            </ul>
            <p>
              Our wooden packaging manufacturer capabilities allow dimensions,
              timber sections, reinforcement, base construction and enclosure type
              to be selected around the application.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">CUSTOM WOODEN BOXES</span>
            <h2>Custom Wooden Boxes for Industrial Packaging</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Custom wooden boxes provide enclosed protection for products
              requiring stronger structural support than standard cartons or
              lightweight packaging.
            </p>
            <p>
              Depending on the load, DYN Pallets can manufacture heavy duty
              wooden boxes, export wooden boxes, pinewood boxes, plywood boxes and
              industrial wooden boxes in custom dimensions.
            </p>
          </div>

          <div className="wooden-subsection-grid is-two">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Custom Sizes</h3>
              <div className="wooden-content-flow">
                <p>
                  Packaging can be produced according to the exact length, width
                  and height of the equipment or product.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Load-Based Construction</h3>
              <div className="wooden-content-flow">
                <p>
                  Timber sections and structural members can be selected
                  according to cargo weight and support requirements.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Forklift &amp; Handling Access</h3>
              <div className="wooden-content-flow">
                <p>
                  Bases can be designed around forklift, pallet truck, crane or
                  other handling requirements.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Export Packaging Options</h3>
              <div className="wooden-content-flow">
                <p>
                  Where required, export packaging can incorporate suitable
                  treated timber and additional transit-protection layers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN CRATES</span>
            <h2>Wooden Crates for Machinery, Equipment &amp; Industrial Cargo</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Our wooden crates are suitable for products requiring structural
              protection while retaining flexibility around ventilation,
              visibility, weight and access.
            </p>
            <p>
              Applications can include large wooden crates, wooden pallet crates,
              sturdy wooden crates and strong wooden crates for machinery,
              fabricated equipment and industrial components.
            </p>
            <p>
              Open-frame, partially enclosed and fully enclosed configurations
              can be developed depending on the cargo and required protection
              level.
            </p>
            <p>
              For oversized loads, DYN Pallets can manufacture an extra large
              wooden crate or reinforced large wooden pallet crates around the
              actual equipment dimensions.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">EXPORT CRATING</span>
            <h2>Wooden Packing Crates for Export Shipments</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Export cargo can encounter repeated lifting, container movement,
              vibration, stacking and long storage periods.
            </p>
            <p>
              Our wooden packing crates, export wooden crates and wooden crates
              for export can be designed around these conditions.
            </p>
            <p>Depending on the shipment specification, solutions may include:</p>
            <ul className="wooden-content-list">
              <li>Heat-treated timber</li>
              <li>ISPM 15-compliant timber where applicable</li>
              <li>Reinforced crate bases</li>
              <li>Internal blocking and bracing</li>
              <li>Bolted access panels</li>
              <li>Moisture protection</li>
              <li>VCI protection</li>
              <li>Vacuum packing</li>
              <li>Container lashing and chocking</li>
              <li>Palletised crate bases</li>
            </ul>
            <p>
              This allows the crate, internal protection and shipment securing
              method to operate as one packaging system.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">EXPORT WOODEN BOXES</span>
            <h2>Export Wooden Boxes for International Shipping</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              DYN Pallets manufactures wooden boxes for export for machinery,
              equipment, industrial parts and sensitive components.
            </p>
            <p>
              Our export packaging boxes can be configured according to cargo
              dimensions, load, shipping route, container limitations and
              handling requirements.
            </p>
            <p>
              Where treated timber is specified, we can evaluate suitable heat
              treated wooden boxes, fumigated wooden boxes and ISPM 15 wooden
              boxes according to the required shipment conditions.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">HEAVY-DUTY PROTECTION</span>
            <h2>Heavy Duty Wooden Boxes &amp; Crates</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Dense, valuable or oversized industrial products often require
              additional structural reinforcement.
            </p>
            <p>
              DYN Pallets can manufacture heavy duty wooden boxes and heavy duty
              wooden crates with reinforced bases, stronger framing and
              load-focused member sizing.
            </p>
          </div>

          <div className="wooden-subsection-grid is-two">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Heavy Machinery</h3>
              <div className="wooden-content-flow">
                <p>Reinforced packaging for industrial machines and assemblies.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Engineering Equipment</h3>
              <div className="wooden-content-flow">
                <p>
                  Custom structures around irregular dimensions and lifting
                  points.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Project Cargo</h3>
              <div className="wooden-content-flow">
                <p>
                  Large-format packaging for equipment that cannot use standard
                  packaging dimensions.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>High-Value Components</h3>
              <div className="wooden-content-flow">
                <p>
                  Enclosed packaging combined with internal restraint and
                  additional protection where required.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">MATERIAL OPTIONS</span>
            <h2>Pinewood Boxes &amp; Pinewood Crates</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Pinewood boxes and pinewood crates provide a versatile packaging
              option for industrial and export applications.
            </p>
            <p>
              Pine timber can offer predictable machining, relatively low weight
              and clean construction, making it useful for engineered packaging
              and custom export enclosures.
            </p>
            <p>
              DYN Pallets can manufacture pinewood packaging according to cargo
              size, handling method and required structural performance.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">PLYWOOD PACKAGING</span>
            <h2>Plywood Boxes for Clean Enclosed Packaging</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              For applications where a cleaner, enclosed surface is preferred,
              plywood boxes and plywood packaging boxes provide an effective
              industrial packaging format.
            </p>
            <p>
              Plywood panels can be combined with suitable structural framing to
              create packaging for instruments, components, machinery and export
              cargo.
            </p>
            <p>
              They are particularly useful where enclosure, dimensional
              consistency and a clean external surface are important.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">EXPORT COMPLIANCE</span>
            <h2>Heat-Treated &amp; ISPM 15 Wooden Packaging</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              International shipments using solid timber packaging may require
              treatment depending on the destination and applicable regulations.
            </p>
            <p>
              DYN Pallets can provide appropriate heat treated wooden crates,
              heat treated wooden boxes, ISPM 15 wooden crates and ISPM 15 wooden
              boxes where required.
            </p>
            <p>
              Treatment requirements should be confirmed according to shipment
              destination and packaging specification before production.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">REAL HANDLING CONDITIONS</span>
            <h2>Wooden Shipping Crates Designed for Real Handling Conditions</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              A good wooden shipping crate must protect the load not only while
              stationary but throughout the complete handling cycle.
            </p>
            <p>Before finalising the construction, important factors include:</p>
          </div>

          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Cargo Dimensions</h3>
              <div className="wooden-content-flow">
                <p>
                  Length, width, height and centre of gravity influence the
                  structure.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Approximate Load</h3>
              <div className="wooden-content-flow">
                <p>
                  Weight determines base strength, member sizing and
                  reinforcement.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Handling Method</h3>
              <div className="wooden-content-flow">
                <p>
                  Forklift entry, pallet truck movement, crane lifting and
                  container handling can affect the design.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Shipment Route</h3>
              <div className="wooden-content-flow">
                <p>
                  Domestic road transport and international export routes may
                  need different protection.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Storage Duration</h3>
              <div className="wooden-content-flow">
                <p>
                  Short-term warehouse storage and extended transit storage can
                  require different moisture and enclosure strategies.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Protection Level</h3>
              <div className="wooden-content-flow">
                <p>
                  Choose between open-frame crates, partially enclosed crates and
                  fully enclosed wooden boxes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">NON-STANDARD LOADS</span>
            <h2>Custom Wooden Crates for Non-Standard Loads</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Standard crate sizes are not always suitable for industrial
              equipment.
            </p>
            <p>
              DYN Pallets can develop a custom wooden crate around oversized
              machinery, unusual geometry, projecting components or specific lift
              points.
            </p>
            <p>
              Available configurations can include big wooden crates, extra large
              wooden crates, tall wooden crates, long wooden crates, square wood
              crates and large wooden storage crates, subject to the engineering
              requirements of the load.
            </p>
            <p>
              Instead of starting with a fixed catalogue size, the crate can be
              configured around the actual cargo.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">REPEATED HANDLING</span>
            <h2>Strong Wooden Crates for Repeated Industrial Handling</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              For equipment that undergoes repeated warehouse or project-site
              movement, structural durability becomes especially important.
            </p>
            <p>
              Our sturdy wooden crates and strong wooden crates can incorporate
              suitable framing, base reinforcement and fastening arrangements
              according to the application.
            </p>
            <p>
              Where repeated access is required, bolted or removable sections can
              also be considered.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">INTEGRATED HANDLING</span>
            <h2>Wooden Pallet Crates for Integrated Handling</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              A wooden pallet crate combines the handling advantages of a pallet
              base with the protection of an enclosure.
            </p>
            <p>
              These configurations can help simplify forklift handling while
              providing additional side and top protection around the product.
            </p>
            <p>
              Wooden pallet crates are suitable for industrial components,
              machinery, assemblies and export shipments requiring
              straightforward handling throughout the logistics chain.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WHY DYN PALLETS</span>
            <h2>Why Choose DYN Pallets for Wooden Boxes &amp; Crates?</h2>
          </div>

          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Cargo-Led Engineering</h3>
              <div className="wooden-content-flow">
                <p>
                  The packaging starts with cargo weight, dimensions, geometry
                  and handling conditions.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Custom Manufacturing</h3>
              <div className="wooden-content-flow">
                <p>
                  Standard and custom wooden boxes and crates can be produced
                  around specific requirements.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Industrial Packaging Expertise</h3>
              <div className="wooden-content-flow">
                <p>
                  Pallets, boxes, crates and related packing services can be
                  planned as one coordinated solution.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Export Packaging Support</h3>
              <div className="wooden-content-flow">
                <p>
                  Heat treatment and applicable export-packaging requirements can
                  be incorporated into the project.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Heavy-Duty Capability</h3>
              <div className="wooden-content-flow">
                <p>
                  Reinforced solutions can be developed for machinery, equipment
                  and demanding industrial loads.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Multiple Material Options</h3>
              <div className="wooden-content-flow">
                <p>
                  Available formats include solid timber, pinewood and plywood
                  packaging configurations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">PACKAGING SPECIFICATION</span>
            <h2>How We Define Your Wooden Packaging Specification</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              The same wooden boxes &amp; crates category can require very
              different construction depending on the application.
            </p>
          </div>

          <div className="wooden-requirement-grid">
            <div className="wooden-requirement-card">
              <span>01</span>
              <h3>Dimensions</h3>
              <p>
                Share the cargo length, width and height along with any clearance
                requirements.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>02</span>
              <h3>Weight</h3>
              <p>
                Approximate cargo weight allows the structural base and support
                members to be evaluated.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>03</span>
              <h3>Quantity</h3>
              <p>
                Required quantity helps determine the most practical
                manufacturing route.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>04</span>
              <h3>Handling</h3>
              <p>
                Tell us whether the packaging will be moved by forklift, pallet
                truck, crane or another method.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>05</span>
              <h3>Delivery Location</h3>
              <p>
                The delivery and shipment route influence logistics and packaging
                requirements.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>06</span>
              <h3>Destination Country</h3>
              <p>
                For export packaging, the destination helps identify any relevant
                treatment requirements.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>07</span>
              <h3>Drawings or Reference Images</h3>
              <p>
                Technical drawings or photographs help us understand geometry
                and support points.
              </p>
            </div>

            <div className="wooden-requirement-card">
              <span>08</span>
              <h3>Additional Protection</h3>
              <p>
                Mention requirements such as moisture protection, VCI, vacuum
                packing, blocking, bracing or container securing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN CRATES NEAR YOU</span>
            <h2>Need Wooden Crates Near You?</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              If you are searching for wooden crates near me, wooden crates for
              sale, wood crates for sale near me or large wooden crates for sale,
              DYN Pallets can manufacture industrial crates according to your
              exact cargo specification rather than limiting your project to
              generic stock dimensions.
            </p>
            <p>
              Share the dimensions, approximate load, required quantity and
              delivery location to receive a suitable packaging recommendation.
            </p>
            <p>
              This gives you a more relevant solution than selecting a crate based
              only on external dimensions.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">REQUEST A QUOTE</span>
            <h2>Request a Quote for Wooden Boxes &amp; Crates</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Need wooden packing boxes, industrial wooden crates, wooden
              shipping crates, export wooden boxes or custom wooden crates?
            </p>
            <p>Send DYN Pallets your:</p>
            <p>
              <strong>
                Dimensions → Approximate Weight → Quantity → Handling Method →
                Delivery Location → Export Destination → Drawing or Reference
                Image
              </strong>
            </p>
            <p>
              We will evaluate the requirement and recommend an appropriate
              wooden packaging format.
            </p>
          </div>

          <div className="wooden-inline-cta">
            <Link href="/contact" className="button button-primary">
              Request a Quote <ArrowUpRight size={17} />
            </Link>
            <Link href="/contact" className="button button-ghost">
              Share Your Requirement <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section wooden-category-browser">
        <div className="section-heading split-heading">
          <div>
            <span className="kicker">WOODEN BOXES &amp; CRATES CATEGORY</span>
            <h2>Types of Wooden Boxes &amp; Crates</h2>
          </div>
          <p>
            Explore the wooden packaging range by material, enclosure,
            construction and handling format. Each route below opens a dedicated
            product page.
          </p>
        </div>

        <div className="catalog-category-grid">
          {productFamilies.map((item, index) => (
            <Link
              href={`/products/wooden-boxes-crates/${item.slug}`}
              className="catalog-static-card"
              key={item.slug}
            >
              <div
                className="catalog-static-image catalog-static-image-photo"
                style={{
                  backgroundImage: `url('${getProductImage(
                    item.slug,
                    "wooden-boxes-crates"
                  )}')`,
                }}
              >
                <span>PRODUCT FAMILY</span>
              </div>

              <div className="catalog-static-body">
                <span className="kicker">
                  {String(index + 1).padStart(2, "0")} · {item.eyebrow}
                </span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <footer>
                  <span>View product</span>
                  <ArrowUpRight size={15} />
                </footer>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wooden-page-section wooden-faq-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WOODEN BOXES &amp; CRATES FAQ</span>
            <h2>Frequently Asked Questions About Wooden Boxes &amp; Crates</h2>
          </div>

          <div className="wooden-faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{faq.question}</b>
                  <i>+</i>
                </summary>
                <div className="wooden-content-flow">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
