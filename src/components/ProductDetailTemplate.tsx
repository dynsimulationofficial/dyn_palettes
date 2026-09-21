import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Clock3,
  FileText,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import type { ProductItem, ProductCategory } from "@/data/products";
import { getProductImage } from "@/data/productImages";
import { DynTicker } from "@/components/DynTicker";

function getSpec(product: ProductItem, label: string) {
  return product.specs.find((spec) => spec.label.toLowerCase() === label.toLowerCase())?.value;
}

function buildFaqs(product: ProductItem, category: Pick<ProductCategory, "name">) {
  const size = getSpec(product, "Sizing") || getSpec(product, "Dimensions") || getSpec(product, "Typical footprint");
  const treatment = getSpec(product, "Treatment");

  if (product.faq?.length) {
    return product.faq;
  }

  return [
    {
      q: `What are ${product.name.toLowerCase()} used for?`,
      a: `${product.name} are supplied for ${product.applications.slice(0, 4).join(", ").toLowerCase()}. The final construction should be selected around the actual load and handling requirement.`,
    },
    {
      q: `Can ${product.name.toLowerCase()} be supplied to a custom requirement?`,
      a: `Yes. DYN Pallets can review dimensions, load, entry or lifting method, quantity and shipment conditions before confirming the suitable ${category.name.toLowerCase()} specification.`,
    },
    {
      q: "What size options are available?",
      a: size
        ? `The current product specification includes ${size}. Share your required dimensions so compatibility with the load and handling process can be reviewed.`
        : "Sizing is confirmed against the cargo footprint, handling method and shipment requirement. Share the required dimensions for review.",
    },
    {
      q: "Is treatment available?",
      a: treatment
        ? `Treatment is listed as ${treatment.toLowerCase()}. The exact requirement should be confirmed against the shipment route and destination.`
        : "Treatment availability depends on the product, material and shipment route. Confirm the destination and required standard when requesting a quote.",
    },
    {
      q: "What information is needed for a quotation?",
      a: "Send the required dimensions, approximate cargo weight, quantity, handling method, destination and any drawing or existing specification.",
    },
  ];
}

export function ProductDetailTemplate({
  category,
  product,
}: {
  category: ProductCategory;
  product: ProductItem;
}) {
  const heroImage = getProductImage(product.slug, category.slug);
  const related = product.relatedProductSlugs?.length
    ? product.relatedProductSlugs
        .map((slug) => category.items.find((item) => item.slug === slug))
        .filter((item): item is ProductItem => Boolean(item))
        .slice(0, 4)
    : category.items.filter((item) => item.slug !== product.slug).slice(0, 4);
  const faqs = buildFaqs(product, category);
  const variants = product.variants ?? [];
  const highlights = product.highlights ?? [];
  const benefits = product.benefits ?? [];
  const customRequirementFields = product.customRequirementFields ?? [
    "Length × Width × Height",
    "Approx. cargo weight",
    "Quantity",
    "Handling / entry",
    "Destination",
    "Drawing if available",
  ];

  return (
    <>
      <section className="product-detail-shell texture-grid">
        <span className="exact-fx-hero-timber" aria-hidden="true" />
        <nav className="product-detail-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">Products</Link><span>/</span>
          <Link href={`/products/${category.slug}`}>{category.name}</Link><span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-commerce-grid">
          <div className="product-gallery-panel product-enter product-enter-a">
            <div className="product-main-image" style={{ backgroundImage: `url('${heroImage}')` }} role="img" aria-label={product.name}>
              <div className="product-image-grid" />
              <span className="product-image-badge">DYN / PRODUCT VIEW</span>
              <span className="product-image-caption">Product-specific DYN visual</span>
              <span className="exact-fx-glare" aria-hidden="true" />
              <span className="exact-fx-ruler exact-fx-ruler-y" aria-hidden="true" />
              <span className="exact-fx-ruler exact-fx-ruler-x" aria-hidden="true" />
              <span className="exact-fx-reticle" aria-hidden="true" />
            </div>
            <div className="product-thumbnails" aria-label={`${product.name} image previews`}>
              {["Front", "Build", "Handling", "Detail"].map((label, index) => (
                <div className={index === 0 ? "active" : ""} key={label}>
                  <span style={{ backgroundImage: `url('${heroImage}')` }} />
                  <b>{label}</b>
                </div>
              ))}
            </div>
          </div>

          <div className="product-buy-panel product-enter product-enter-b">
            <span className="kicker">{product.eyebrow}</span>
            <h1>{product.name}</h1>
            <p className="product-buy-summary">{product.summary}</p>

            <div className="product-buy-meta">
              <div><span>Category</span><strong>{category.name}</strong></div>
              <div><span>Availability</span><strong className="product-availability"><i /> Made to Order</strong></div>
              <div><span>Price</span><strong>Request Quote</strong></div>
              <div><span>Supply</span><strong>Standard / Custom</strong></div>
            </div>

            <div className="product-quick-specs">
              {product.specs.slice(0, 5).map((spec) => (
                <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>
              ))}
            </div>

            <div className="product-buy-actions">
              <Link href="/contact" className="button button-primary">Request a Quote <ArrowUpRight size={18} /></Link>
              <Link href="/contact" className="product-secondary-action"><FileText size={16} /> Send Specification</Link>
            </div>

            <div className="product-procurement-note">
              <Clock3 size={16} />
              <p>Lead time, quantity and final construction are confirmed after the requirement is reviewed.</p>
            </div>
          </div>
        </div>
      </section>

      <DynTicker items={category.items.map((item) => ({ key: item.slug, label: item.name }))} current={product.slug} />

      <section className="product-detail-section light-surface product-information-section">
        <div className="product-info-grid">
          <div>
            <span className="kicker">TECHNICAL SPECIFICATIONS</span>
            <h2>Technical Specifications</h2>
            <div className="product-spec-table">
              {product.specs.map((spec) => <div key={spec.label}><span>{spec.label}</span><strong>{spec.value}</strong></div>)}
              <div><span>Availability</span><strong>Made to Order</strong></div>
              <div><span>Quotation</span><strong>Specification Based</strong></div>
            </div>
          </div>

          <article className="product-about-card">
            <span className="kicker">SPECIFICATION BASIS</span>
            <h2>Built around the application.</h2>
            <p>{product.technicalNote || "The final product specification should be reviewed around the actual load, handling method, dimensions and shipment conditions before production."}</p>
          </article>
        </div>
      </section>
         {highlights.length > 0 && (
        <section className="product-detail-section product-highlight-section">
          <div className="product-highlight-grid">
            {highlights.map((item) => (
              <div key={item.title}><Ruler size={21} /><h3>{item.title}</h3><p>{item.description}</p></div>
            ))}
          </div>
        </section>
      )}
      {variants.length > 0 && (
        <section className="product-detail-section light-surface product-options-section">
          <div className="product-detail-heading">
            <div><span className="kicker">AVAILABLE TYPES</span><h2>Available {product.name} Types</h2></div>
            <p>Different applications require different pallet structures. Final construction is reviewed around the load, handling method, treatment requirement and shipment route.</p>
          </div>
          <div className="product-option-grid">
            {variants.map((variant, index) => (
              <article className="product-option-card product-option-card-text-only" key={variant.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{variant.title}</h3>
                <p>{variant.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

   


      <section className="product-detail-section product-information-section product-about-dark-section">
        <div className="product-info-grid">
          <article className="product-about-card product-about-card-dark">
            <span className="kicker">ABOUT THIS PRODUCT</span>
            <h2>{product.name}</h2>
            <p>{product.about || product.description}</p>
          </article>

          <div>
            <span className="kicker">REQUIREMENT REVIEW</span>
            <h2>Confirmed against the load.</h2>
            <p>DYN Pallets reviews the requirement using the product dimensions, approximate load, handling method, quantity and shipment conditions before finalising the build.</p>
            {highlights.length === 0 && (
              <div className="product-feature-list">
                {product.features.map((feature) => <div key={feature}><Check size={15} /><span>{feature}</span></div>)}
              </div>
            )}
          </div>
        </div>
      </section>

      {benefits.length > 0 && (
        <section className="product-detail-section light-surface product-highlight-section product-benefits-section">
          <div className="product-detail-heading">
            <div><span className="kicker">PRODUCT BENEFITS</span><h2>Why choose this format.</h2></div>
          </div>
          <div className="product-highlight-grid">
            {benefits.map((benefit) => (
              <div key={benefit.title}><ShieldCheck size={21} /><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
            ))}
          </div>
        </section>
      )}

      <section className="product-detail-section product-applications-section">
        <div className="product-detail-heading product-detail-heading-dark">
          <div><span className="kicker">APPLICATIONS</span><h2>Where {product.name.toLowerCase()} fit.</h2></div>
          <p>{product.applicationIntro || "Typical applications from the current product specification. Suitability should be confirmed against the real load and operating environment."}</p>
        </div>
        <div className="product-application-grid">
          {product.applications.map((application, index) => (
            <article key={application}><span>{String(index + 1).padStart(2, "0")}</span><strong>{application}</strong><ArrowUpRight size={15} /></article>
          ))}
        </div>
      </section>

      <section className="product-detail-section light-surface product-requirement-section">
        <div className="product-requirement-card">
          <div className="product-requirement-visual" style={{ backgroundImage: `url('${heroImage}')` }}>
            <span>CUSTOM REQUIREMENT</span>
          </div>
          <div className="product-requirement-copy">
            <span className="kicker">BUILT AROUND YOUR LOAD</span>
            <h2>Send the specification first.</h2>
            <p>For a useful quotation, share the practical inputs below. This keeps the product page concise while still giving procurement teams the information they need.</p>
            <div className="product-requirement-fields">
              {customRequirementFields.map((item) => <span key={item}>{item}</span>)}
            </div>
            <Link href="/contact" className="button button-primary">Send Requirement <ArrowUpRight size={17} /></Link>
          </div>
        </div>
      </section>

      {product.treatment && (
        <section className="product-treatment-band">
          <div><span className="kicker">{product.treatment.kicker || "TREATMENT + EXPORT"}</span><h2>{product.treatment.heading}</h2><p>{product.treatment.description}</p></div>
          <div className="product-treatment-links">
            <Link href={product.treatment.primaryLink.href}>{product.treatment.primaryLink.label} <ArrowUpRight size={15} /></Link>
            <Link href={product.treatment.secondaryLink.href}>{product.treatment.secondaryLink.label} <ArrowUpRight size={15} /></Link>
          </div>
        </section>
      )}

      {product.pricing && (
        <section className="product-detail-section light-surface product-information-section">
          <div className="product-info-grid">
            <div>
              <span className="kicker">PRICING</span>
              <h2>{product.pricing.heading || (product.name === "Hardwood Pallets" ? "Hardwood Pallet Pricing" : `${product.name} Pricing`)}</h2>
              <p>{product.pricing.description}</p>
              <div className="product-feature-list">
                {product.pricing.factors.map((factor) => <div key={factor}><Check size={15} /><span>{factor}</span></div>)}
              </div>
            </div>
            <div className="product-about-card">
              <span className="kicker">QUOTE FACTORS</span>
              <h2>Flexible supply.</h2>
              <p>Project pricing is shaped by the actual specification, quantity and destination requirement. A final quotation is confirmed after the detailed requirement is reviewed.</p>
              <Link href="/contact" className="button button-primary" style={{ marginTop: 18 }}>Request Pricing <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="product-detail-section light-surface product-related-section">
          <div className="product-detail-heading">
            <div><span className="kicker">RELATED PRODUCTS</span><h2>Other {category.name.toLowerCase()}.</h2></div>
            <Link href={`/products/${category.slug}`} className="product-inline-link">View category <ArrowUpRight size={15} /></Link>
          </div>
          <div className="product-related-grid">
            {related.map((item) => (
              <Link href={`/products/${category.slug}/${item.slug}`} key={item.slug}>
                <div className="product-related-image" style={{ backgroundImage: `url('${getProductImage(item.slug, category.slug)}')` }} />
                <span>{item.eyebrow}</span>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <b>View product <ArrowUpRight size={14} /></b>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="product-detail-section product-faq-new-section">
        <div className="product-detail-heading product-detail-heading-dark">
          <div><span className="kicker">PRODUCT FAQ</span><h2>Frequently Asked Questions</h2></div>
          <p>Short answers only. Detailed technical confirmation happens against the actual requirement.</p>
        </div>
        <div className="product-faq-new-list">
          {faqs.map((faq, index) => (
            <details key={faq.q}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.q}</strong><b>+</b></summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* <section className="product-final-cta">
        <div>
          <span className="kicker">INDUSTRIAL PACKAGING, WITHOUT THE GUESSWORK.</span>
          <h2>Bring the load.<br />We&apos;ll engineer the protection.</h2>
        </div>
        <div>
          <p>Share the dimensions, quantity, approximate cargo weight, handling method and destination so DYN Pallets can review the appropriate product configuration.</p>
          <div className="product-final-actions">
            <Link href="/contact" className="button button-primary">Request a Quote <ArrowUpRight size={17} /></Link>
            <Link href="/contact" className="product-final-secondary"><FileText size={16} /> Send Specification</Link>
          </div>
        </div>
      </section> */}
    </>
  );
}
