import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "block-pallets",
  name: "Block Pallets",
  eyebrow: "FOUR-WAY HANDLING PLATFORM",
  summary: "Block pallet construction for flexible forklift entry and repeat warehouse movement.",
  description: "Block pallets use supporting blocks between deck structures to enable flexible four-way handling and stable load distribution for industrial movement.",
  applications: ["Warehousing", "Manufacturing", "Logistics", "Industrial shipping"],
  features: ["Block construction", "4-way entry", "Standard or custom sizing", "Treatment available where required"],
  specs: [{ label: "Construction", value: "Block" }, { label: "Entry", value: "4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Treatment", value: "Available" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`,
  description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/block-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
