import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "four-way-pallets", name: "Four-Way Pallets", eyebrow: "FLEXIBLE FORKLIFT ACCESS",
  summary: "Four-way pallets for faster warehouse positioning and handling flexibility.",
  description: "Four-way entry construction enables forklift access from multiple sides for busy warehouse, distribution and manufacturing environments.",
  applications: ["Warehousing", "Distribution", "Manufacturing", "Industrial shipping"],
  features: ["4-way entry", "Block or notched stringer construction", "Custom sizing", "Treatment available"],
  specs: [{ label: "Entry", value: "4-way" }, { label: "Construction", value: "Block / notched stringer" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/four-way-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
