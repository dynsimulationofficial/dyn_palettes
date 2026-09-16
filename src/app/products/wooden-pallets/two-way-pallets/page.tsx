import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "two-way-pallets", name: "Two-Way Pallets", eyebrow: "DIRECTIONAL HANDLING",
  summary: "Two-way entry pallets for controlled forklift and pallet-truck access.",
  description: "A straightforward stringer-led pallet route where handling direction is predictable and structural simplicity is preferred.",
  applications: ["Manufacturing", "Industrial storage", "Machinery movement", "Dedicated transport routes"],
  features: ["2-way entry", "Stringer or custom construction", "Custom sizing", "Optional treatment"],
  specs: [{ label: "Entry", value: "2-way" }, { label: "Construction", value: "Stringer / custom" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/two-way-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
