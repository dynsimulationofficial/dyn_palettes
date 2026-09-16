import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "non-reversible-pallets", name: "Non-Reversible Pallets", eyebrow: "DEDICATED TOP DECK",
  summary: "Non-reversible pallets for conventional warehouse and shipping use.",
  description: "Non-reversible pallets use a dedicated load deck and underside support arrangement for common industrial movement and storage requirements.",
  applications: ["Warehousing", "Manufacturing", "Shipping", "Distribution"],
  features: ["Dedicated top deck", "2-way or 4-way entry", "Standard or custom sizing", "Pine or hardwood material"],
  specs: [{ label: "Deck", value: "Non-reversible" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Material", value: "Pine / hardwood" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/non-reversible-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
