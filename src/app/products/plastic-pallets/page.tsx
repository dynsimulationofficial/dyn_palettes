import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { plasticPalletItems } from "@/data/products";
import { getProductImage } from "@/data/productImages";
import { DynTicker } from "@/components/DynTicker";

export const metadata: Metadata = {
  title: "Plastic Pallets Manufacturer in India | DYN Pallets",
  description:
    "DYN Pallets supplies durable plastic pallets for warehouses, export, food, pharmaceutical, rackable and heavy-duty industrial applications.",
  alternates: { canonical: "/products/plastic-pallets" },
};

const productFamilies = [
  {
    slug: "heavy-duty-plastic-pallets",
    name: "Heavy Duty Plastic Pallets",
    eyebrow: "Industrial Strength",
    summary:
      "High-capacity plastic pallets designed for repeated handling, warehouse movement and demanding industrial operations.",
  },
  {
    slug: "hdpe-plastic-pallets",
    name: "HDPE Plastic Pallets",
    eyebrow: "Moisture & Chemical Resistant",
    summary:
      "Durable HDPE pallet solutions chosen for hygiene-sensitive, wet, clean and repeat-use industrial applications.",
  },
  {
    slug: "rackable-plastic-pallets",
    name: "Rackable Plastic Pallets",
    eyebrow: "Warehouse Racking",
    summary:
      "Rackable pallet systems for pallet racking, organized storage, stable stacking and efficient warehouse movement.",
  },
  {
    slug: "nestable-plastic-pallets",
    name: "Nestable Plastic Pallets",
    eyebrow: "Space Saving Return Logistics",
    summary:
      "Lightweight nestable pallets designed for efficient empty storage, export movement and returnable logistics.",
  },
  {
    slug: "reusable-plastic-pallets",
    name: "Reusable Plastic Pallets",
    eyebrow: "Closed-Loop Logistics",
    summary:
      "Reusable pallet solutions built for repeated warehouse, factory and distribution circulation.",
  },
  {
    slug: "export-plastic-pallets",
    name: "Export Plastic Pallets",
    eyebrow: "Shipping & Distribution",
    summary:
      "Export-ready plastic pallets for container loading, shipping, distribution and international movement.",
  },
  {
    slug: "hygienic-plastic-pallets",
    name: "Hygienic Plastic Pallets",
    eyebrow: "Food & Pharma",
    summary:
      "Hygienic plastic pallets developed for food processing, pharma handling and clean, controlled material movement.",
  },
  {
    slug: "1200x1000-plastic-pallets",
    name: "1200x1000 Plastic Pallets",
    eyebrow: "Industrial Standard Size",
    summary:
      "Popular 1200x1000 pallet formats for distribution centers, warehouse operations and industrial material flow.",
  },
  {
    slug: "48x40-plastic-pallets",
    name: "48x40 Plastic Pallets",
    eyebrow: "Logistics Standard Size",
    summary:
      "48x40 plastic pallet configurations for warehouse operations, retail distribution and industrial handling.",
  },
];

const faqs = [
  {
    question: "What are plastic pallets?",
    answer:
      "Plastic pallets are reusable material-handling platforms used for storing, stacking and transporting goods in warehouses, factories, logistics centers and export operations. DYN Pallets offers plastic pallets in different sizes, load capacities and configurations for industrial requirements.",
  },
  {
    question: "What are the advantages of plastic pallets?",
    answer:
      "Plastic pallets offer several advantages, including consistent dimensions, moisture resistance, easy cleaning, durability and suitability for repeated use. They are commonly used in warehouse, food, pharmaceutical, manufacturing and export applications.",
  },
  {
    question: "What is the plastic pallet price?",
    answer:
      "The plastic pallet price depends on pallet size, material, load capacity, design, quantity and whether the pallet is rackable, nestable, stackable or heavy duty. Contact DYN Pallets with your requirements for accurate plastic pallet pricing.",
  },
  {
    question: "Which plastic pallets are best for warehouse use?",
    answer:
      "The right plastic pallet for warehouse use depends on the storage system and load requirements. Rackable plastic pallets are suitable for pallet racking, while stackable and heavy duty plastic pallets are commonly used for floor storage and repeated warehouse handling.",
  },
  {
    question: "What are rackable plastic pallets?",
    answer:
      "Rackable plastic pallets are designed to support loads while stored on warehouse racking systems. DYN Pallets offers rackable pallets in different sizes, including solid top rackable pallets and heavy duty rackable plastic pallets.",
  },
  {
    question: "What are nestable plastic pallets?",
    answer:
      "Nestable plastic pallets are designed so empty pallets can fit inside one another. This helps save storage space and can reduce return transportation volume. They are commonly used for export, distribution and lightweight logistics operations.",
  },
  {
    question: "What are heavy duty plastic pallets?",
    answer:
      "Heavy duty plastic pallets are designed for demanding industrial applications and repeated handling. They are suitable for manufacturing facilities, warehouses, logistics centers and operations requiring higher load capacities.",
  },
  {
    question: "What are HDPE plastic pallets?",
    answer:
      "HDPE plastic pallets are made using high-density polyethylene and are commonly selected for industrial applications because of their durability, moisture resistance and ease of cleaning.",
  },
  {
    question: "Are plastic pallets suitable for export?",
    answer:
      "Yes. Export plastic pallets are widely used for international shipping because they are lightweight, consistent in size and suitable for containerized cargo, air freight and industrial export packaging.",
  },
  {
    question: "What is a 1200x1000 plastic pallet?",
    answer:
      "A 1200x1000 plastic pallet is a commonly used industrial pallet size for warehouses, manufacturing facilities, logistics operations and distribution centers. DYN Pallets offers different 1200x1000 plastic pallet configurations based on load requirements.",
  },
  {
    question: "Do you provide 48x40 plastic pallets?",
    answer:
      "Yes. DYN Pallets can provide 48x40 plastic pallets for warehouse, distribution and industrial applications. Different configurations may include rackable, stackable, nestable, solid top and heavy duty models.",
  },
  {
    question: "Are plastic pallets reusable?",
    answer:
      "Yes. Reusable plastic pallets are designed for repeated movement between factories, warehouses, distribution centers and other locations. Their service life depends on pallet design, operating conditions and load handling.",
  },
  {
    question: "Are plastic pallets suitable for food industries?",
    answer:
      "Yes. Food grade plastic pallets are suitable for environments where hygiene and easy cleaning are important. They are commonly used in food manufacturing, beverage production, cold storage and food distribution facilities.",
  },
  {
    question: "Are plastic pallets suitable for pharmaceutical industries?",
    answer:
      "Yes. Pharmaceutical plastic pallets can be used in pharmaceutical manufacturing, healthcare distribution, medicine warehouses and other controlled material-handling environments where cleanliness and consistent pallet dimensions are important.",
  },
  {
    question: "What is the difference between rackable and stackable plastic pallets?",
    answer:
      "Rackable plastic pallets are designed for use on warehouse racking systems, while stackable plastic pallets are designed primarily for stacking on floors or on top of other pallets. The correct option depends on the storage method and load requirements.",
  },
  {
    question: "Do you provide solid top plastic pallets?",
    answer:
      "Yes. DYN Pallets offers solid top plastic pallets for applications requiring a continuous upper surface. These pallets can be suitable for bags, cartons, containers, pharmaceutical products and industrial components.",
  },
  {
    question: "Do you provide four way plastic pallets?",
    answer:
      "Yes. Four way plastic pallets allow forklift or pallet truck entry from four directions, providing greater flexibility during warehouse handling, loading and unloading.",
  },
  {
    question: "What sizes of plastic pallets are available?",
    answer:
      "Plastic pallet sizes can include 1200x1000, 48x40, 48x48, 40x40, 36x36, 43x43, half pallets and other application-specific sizes. Availability depends on pallet type and load requirements.",
  },
  {
    question: "Are black plastic pallets available?",
    answer:
      "Yes. Black plastic pallets are available for various warehouse, industrial and returnable logistics applications depending on the selected model and specifications.",
  },
  {
    question: "Are blue plastic pallets available?",
    answer:
      "Yes. Blue plastic pallets may be available for warehouse, manufacturing, food and pharmaceutical applications. Different colors can also support internal identification and operational segregation.",
  },
  {
    question: "What are plastic spill pallets?",
    answer:
      "Plastic spill pallets are containment platforms designed to hold drums or liquid containers while helping contain accidental leaks or spills. They are commonly used in warehouses, factories and chemical handling areas.",
  },
  {
    question: "What is a 2 drum spill pallet?",
    answer:
      "A 2 drum spill pallet is designed to support two drums while providing secondary containment underneath. It can be used in industrial storage, maintenance and chemical handling environments.",
  },
  {
    question: "Do you provide plastic pallets with sides?",
    answer:
      "Depending on the required application, plastic pallets with sides or pallet box-type configurations may be available for handling products that need additional containment during storage and transportation.",
  },
  {
    question: "Are collapsible plastic pallets available?",
    answer:
      "Collapsible plastic pallet solutions may be suitable for operations that need to reduce return storage volume. Availability depends on the required dimensions, load capacity and application.",
  },
  {
    question: "Can plastic pallets be used with forklifts?",
    answer:
      "Yes. Many plastic pallets are designed for forklift handling. Four-way entry models allow access from multiple directions, while specific designs may also support pallet trucks and automated handling systems.",
  },
  {
    question: "Can plastic pallets be used in pallet racking?",
    answer:
      "Rackable plastic pallets are specifically designed for pallet racking systems. The required rack load capacity should always be confirmed before selecting a pallet.",
  },
  {
    question: "What load capacity should I choose for a plastic pallet?",
    answer:
      "The required load capacity depends on static load, dynamic load and rack load conditions. DYN Pallets can help identify an appropriate pallet based on product weight, warehouse system and handling method.",
  },
  {
    question: "Do you supply industrial plastic pallets?",
    answer:
      "Yes. DYN Pallets supplies industrial plastic pallets for manufacturing plants, warehouses, logistics facilities, distribution centers and various material-handling applications.",
  },
  {
    question: "Do you provide reusable plastic pallets?",
    answer:
      "Yes. Reusable plastic pallets are suitable for closed-loop logistics, manufacturing, automotive supply chains, FMCG distribution and repeated internal warehouse movement.",
  },
  {
    question: "Are recycled plastic pallets available?",
    answer:
      "Recycled plastic pallets may be available depending on product specifications and application requirements. They can be considered for operations looking for reusable material-handling solutions.",
  },
  {
    question: "How do I choose the right plastic pallet?",
    answer:
      "When selecting a plastic pallet, consider pallet size, product weight, static load, dynamic load, rack load, forklift entry, storage method, warehouse conditions and whether the pallet will be used for export or repeated internal circulation.",
  },
  {
    question: "How can I get a quote for plastic pallets?",
    answer:
      "Share your required pallet size, quantity, load capacity and application with DYN Pallets. Our team can recommend a suitable plastic pallet type and provide pricing based on your requirements.",
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

export default function PlasticPalletsPage() {
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
            <span>Plastic Pallets</span>
          </nav>

          <span className="kicker">HYGIENE + REUSE</span>
          <h1>Plastic Pallets</h1>

          <div className="wooden-content-flow wooden-hero-description">
            <p>
              Looking for durable, hygienic and reusable <strong>plastic pallets</strong> for
              warehousing, logistics, manufacturing or export operations? <strong>DYN Pallets</strong> provides high-performance plastic pallet solutions engineered for demanding industrial applications.
            </p>
            <p>
              Our range includes <strong>heavy duty plastic pallets</strong>, <strong>HDPE plastic pallets</strong>, <strong>rackable plastic pallets</strong>, <strong>nestable plastic pallets</strong>, <strong>reusable plastic pallets</strong>, <strong>export plastic pallets</strong>, <strong>warehouse plastic pallets</strong>, <strong>hygienic plastic pallets</strong> and multiple standard pallet sizes.
            </p>
            <p>
              Designed for long service life and consistent performance, DYN Pallets help businesses improve material handling, warehouse organization, product movement and supply-chain efficiency.
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
            src={getProductImage("plastic-pallets", "plastic-pallets")}
            alt="Plastic pallets for warehouse and industrial applications"
            fill
            priority
            className="wooden-pallet-product-image"
          />
        </div>
      </section>

      <DynTicker items={plasticPalletItems.map((item) => ({ key: item.slug, label: item.name }))} />

      <section className="wooden-page-section wooden-intro-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-intro-layout">
            <span className="kicker">OVERVIEW</span>
            <div className="wooden-content-flow wooden-intro-copy">
              <h2>High-Quality Plastic Pallets for Industrial Applications</h2>
              <p>
                Plastic pallets are increasingly used across modern warehouses and manufacturing facilities because they offer a clean, consistent and reusable alternative for handling goods.
              </p>
              <p>
                Unlike conventional pallet materials that can absorb moisture or become difficult to clean, <strong>industrial plastic pallets</strong> provide a durable surface suitable for repeated material handling.
              </p>
              <p>
                DYN Pallets offers plastic pallet options for warehousing, manufacturing, logistics, export, pharmaceutical operations, food processing, FMCG distribution, automotive industries, chemical industries, cold storage, retail distribution and packaging operations.
              </p>
              <p>
                Our <strong>plastic pallets for warehouse</strong> applications are available in different constructions, dimensions and load-bearing configurations.
              </p>
            </div>
          </div>

          <div className="wooden-spec-strip-inner wooden-inline-specs">
            <div>
              <span>Material</span>
              <p className="wooden-spec-value">HDPE / Industrial Polymer / Reusable Plastics</p>
            </div>
            <div>
              <span>Entry</span>
              <p className="wooden-spec-value">2-Way / 4-Way / Rackable / Custom</p>
            </div>
            <div>
              <span>Construction</span>
              <p className="wooden-spec-value">Solid Top / Open Deck / Nestable / Stackable</p>
            </div>
            <div>
              <span>Sizing</span>
              <p className="wooden-spec-value">1200x1000 / 48x40 / 48x48 / Custom</p>
            </div>
            <div>
              <span>Application</span>
              <p className="wooden-spec-value">Warehouse / Export / Food / Pharma / Industrial</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">PLASTIC PALLETS</span>
            <h2>Plastic Pallets for Warehouse Storage and Material Handling</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Efficient warehouses depend on standardized pallets that can be repeatedly handled by forklifts, pallet trucks and automated material handling equipment.
            </p>
            <p>
              DYN Pallets offers <strong>warehouse plastic pallets</strong> designed to support organized storage, internal transportation and distribution operations.
            </p>
            <p>Our pallet designs are suitable for:</p>
            <ul className="wooden-content-list">
              <li>Floor stacking</li>
              <li>Warehouse racking</li>
              <li>Forklift movement</li>
              <li>Pallet truck handling</li>
              <li>Conveyor systems</li>
              <li>Distribution centers</li>
              <li>Automated warehouses</li>
              <li>Returnable logistics systems</li>
            </ul>
            <p>
              For businesses requiring reliable <strong>plastic floor pallets</strong>, stackable pallets or rackable solutions, our team can recommend suitable specifications based on your warehouse layout.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">PLASTIC PALLET TYPES</span>
            <h2>Popular Plastic Pallet Formats</h2>
          </div>

          <div className="wooden-subsection-grid is-two">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Heavy Duty Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  For demanding warehouse and industrial operations, <strong>heavy duty plastic pallets</strong> provide the strength required for repeated handling and high-load applications.
                </p>
                <p>
                  These pallets can be selected according to static load, dynamic load and racking requirements.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>HDPE Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  Our <strong>HDPE plastic pallets</strong> are manufactured for strength, durability and repeated industrial use.
                </p>
                <p>
                  An HDPE pallet is suitable for applications that require resistance to moisture, chemicals and frequent cleaning.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Rackable Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  Warehouses using pallet racking systems require pallets capable of maintaining stability while supporting loads in elevated rack positions.
                </p>
                <p>
                  Available options include open deck rackable pallets, solid top rackable pallets and reinforced rackable pallets.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Stackable Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  <strong>Stackable plastic pallets</strong> are suitable for operations where loaded or empty pallets need to be stacked efficiently.
                </p>
                <p>
                  Their structured design helps improve pallet stability while supporting repeated warehouse circulation.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Nestable Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  <strong>Nestable plastic pallets</strong> are designed to fit inside one another when empty, helping reduce storage space and return transportation volume.
                </p>
                <p>
                  They are particularly useful for export shipments, distribution centers and lightweight industrial applications.
                </p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Reusable Plastic Pallets</h3>
              <div className="wooden-content-flow">
                <p>
                  Businesses operating closed-loop logistics systems can benefit from <strong>reusable plastic pallets</strong> designed for repeated circulation.
                </p>
                <p>
                  Instead of using a pallet for one movement, reusable pallets can travel repeatedly between warehouses, factories and suppliers.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">EXPORT PALLETS</span>
            <h2>Export Plastic Pallets for Domestic and International Shipping</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              DYN Pallets provides <strong>export plastic pallets</strong> for businesses that require lightweight, clean and durable pallet solutions for shipping.
            </p>
            <p>
              Plastic pallets are widely used for export applications because they provide consistent dimensions and do not absorb moisture like many traditional packaging materials.
            </p>
            <p>Our <strong>plastic shipping pallets</strong> are suitable for:</p>
            <ul className="wooden-content-list">
              <li>International shipments</li>
              <li>Containerized cargo</li>
              <li>Air freight</li>
              <li>Export packaging</li>
              <li>Industrial equipment shipments</li>
              <li>FMCG transportation</li>
              <li>Pharmaceutical shipments</li>
            </ul>
            <p>
              Businesses looking for <strong>export pallets for sale</strong> can select lightweight, nestable or heavy-duty configurations depending on shipment weight and handling requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">STANDARD SIZES</span>
            <h2>1200x1000, 48x40 &amp; Other Common Plastic Pallet Dimensions</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              The <strong>1200x1000 plastic pallet</strong> is a commonly required industrial pallet size for warehouse, manufacturing and distribution applications.
            </p>
            <p>
              DYN Pallets offers <strong>plastic pallets 1200 x 1000</strong> in different constructions including heavy duty, rackable, stackable, nestable, solid top, open deck and reusable configurations.
            </p>
            <p>
              For operations requiring standardized dimensions, DYN Pallets can provide <strong>48x40 plastic pallets</strong> suitable for industrial storage, transportation and distribution applications.
            </p>
            <p>
              Additional common sizes can include <strong>48x48</strong>, <strong>36x36</strong>, <strong>40x40</strong>, <strong>43x43</strong>, <strong>plastic half pallets</strong> and specialist small or mini pallet formats.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">HYGIENIC APPLICATIONS</span>
            <h2>Hygienic Plastic Pallets for Food and Pharmaceutical Industries</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Industries with strict hygiene requirements require pallet surfaces that can be cleaned efficiently.
            </p>
            <p>
              DYN Pallets offers <strong>hygienic plastic pallets</strong> designed for controlled environments and cleanliness-sensitive applications.
            </p>
            <p>
              Our <strong>food grade plastic pallets</strong> are suitable for food manufacturing, beverage production, cold storage and food distribution.
            </p>
            <p>
              We also supply <strong>pharmaceutical plastic pallets</strong> for medicine warehouses, clean handling environments and controlled distribution operations.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">REUSABLE SYSTEMS</span>
            <h2>Reusable and Recycled Plastic Pallets</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Businesses operating closed-loop logistics systems can benefit from <strong>reusable plastic pallets</strong> designed for repeated circulation.
            </p>
            <p>
              Instead of using a pallet for a single movement, reusable pallets can travel repeatedly between warehouses, factories, suppliers and distribution centers.
            </p>
            <p>
              DYN Pallets also offers options suitable for organizations considering <strong>recycled plastic pallets</strong> as part of their material handling strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">SPECIALIST FORMS</span>
            <h2>Solid Top, Four Way, Spill &amp; Containment Pallets</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              <strong>Solid top plastic pallets</strong> provide a continuous upper surface for applications where smaller products, cartons, bags or containers require stable support.
            </p>
            <p>
              <strong>Four way plastic pallets</strong> allow forklift or pallet handling access from four directions, providing greater flexibility during loading, unloading and warehouse handling.
            </p>
            <p>
              For industrial environments handling drums, oils, chemicals or liquids, <strong>plastic spill pallets</strong> can provide secondary containment beneath stored containers.
            </p>
            <p>
              DYN Pallets can supply <strong>2 drum spill pallets</strong>, <strong>55 gallon drum spill pallets</strong> and related containment solutions for industrial applications.
            </p>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">WHY DYN PALLETS</span>
            <h2>Why Choose DYN Pallets for Plastic Pallets?</h2>
          </div>

          <div className="wooden-subsection-grid">
            <article className="wooden-subsection-card">
              <span className="wooden-card-index">01</span>
              <h3>Multiple Plastic Pallet Sizes</h3>
              <div className="wooden-content-flow">
                <p>Available dimensions include 1200x1000, 48x40, 48x48, 40x40 and several special formats.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">02</span>
              <h3>Industrial Load Support</h3>
              <div className="wooden-content-flow">
                <p>Heavy-duty and rackable solutions can be reviewed around static, dynamic and racking requirements.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">03</span>
              <h3>Hygienic Options</h3>
              <div className="wooden-content-flow">
                <p>Food and pharmaceutical sectors can select pallets designed for simpler cleaning and controlled handling.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">04</span>
              <h3>Reusable Logistics</h3>
              <div className="wooden-content-flow">
                <p>Closed-loop and returnable systems can be matched with pallet types suited to repeated movement.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">05</span>
              <h3>Export Packaging Support</h3>
              <div className="wooden-content-flow">
                <p>Export and shipping requirements can be reviewed along with suitable pallet dimensions and load handling conditions.</p>
              </div>
            </article>

            <article className="wooden-subsection-card">
              <span className="wooden-card-index">06</span>
              <h3>Application-Led Selection</h3>
              <div className="wooden-content-flow">
                <p>The right pallet depends on storage system, load capacity, handling method and operating environment.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="wooden-page-section light-surface">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">PALLET SPECIFICATION</span>
            <h2>How We Define the Right Plastic Pallet</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              When selecting plastic pallets, important considerations include load capacity, dimension, warehouse flow and operating environment.
            </p>
          </div>

          <div className="wooden-requirement-grid">
            <div className="wooden-requirement-card">
              <span>01</span>
              <h3>Pallet Size</h3>
              <p>Share the required dimensions such as 1200x1000, 48x40, 48x48 or another custom format.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>02</span>
              <h3>Load Capacity</h3>
              <p>Provide static load, dynamic load and rack load requirements to guide the design.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>03</span>
              <h3>Warehouse System</h3>
              <p>Tell us whether the pallet will be used for racking, floor stacking or distribution operations.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>04</span>
              <h3>Handling Method</h3>
              <p>Forklift access, pallet truck entry and material flow conditions affect the correct pallet construction.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>05</span>
              <h3>Environment</h3>
              <p>Moisture, temperature, cleaning needs and hygiene standards should be confirmed before final selection.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>06</span>
              <h3>Application</h3>
              <p>Warehouse, food, pharma, export or industrial use can influence the best plastic pallet format.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>07</span>
              <h3>Repeat Use</h3>
              <p>Reusable and returnable logistics systems may require a stronger design than one-way transport formats.</p>
            </div>

            <div className="wooden-requirement-card">
              <span>08</span>
              <h3>Quantity</h3>
              <p>Volume requirements help determine the practical manufacturing and delivery arrangement.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wooden-page-section wooden-page-section-alt">
        <div className="wooden-content-shell">
          <div className="wooden-section-heading">
            <span className="kicker">REQUEST A QUOTE</span>
            <h2>Get the Right Plastic Pallets from DYN Pallets</h2>
          </div>

          <div className="wooden-content-flow">
            <p>
              Improve your warehouse, manufacturing, export and logistics operations with reliable <strong>Plastic Pallets from DYN Pallets</strong>.
            </p>
            <p>
              From lightweight export pallets to <strong>heavy duty plastic pallets</strong>, hygienic HDPE pallets and <strong>solid top rackable pallets</strong>, our product range is designed to serve different industrial requirements.
            </p>
            <p>Tell us your required:</p>
            <p>
              <strong>
                Pallet Size → Quantity → Product Weight → Static Load → Dynamic Load → Rack Load → Warehouse Application → Export Requirement → Preferred Pallet Type
              </strong>
            </p>
            <p>
              DYN Pallets will help identify the right plastic pallet solution for your business.
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
            <span className="kicker">PLASTIC PALLETS CATEGORY</span>
            <h2>Types of Plastic Pallets</h2>
          </div>
          <p>
            Explore the most common plastic pallet formats for industrial handling, export, hygiene-sensitive workspaces and returnable logistics programs.
          </p>
        </div>

        <div className="catalog-category-grid">
          {productFamilies.map((item, index) => (
            <Link
              href={`/products/plastic-pallets/${item.slug}`}
              className="catalog-static-card"
              key={item.slug}
            >
              <div
                className="catalog-static-image catalog-static-image-photo"
                style={{
                  backgroundImage: `url('${getProductImage(
                    "plastic-pallets",
                    "plastic-pallets"
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
                  <span>Industrial application</span>
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
            <span className="kicker">PLASTIC PALLETS FAQ</span>
            <h2>Frequently Asked Questions About Plastic Pallets</h2>
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
