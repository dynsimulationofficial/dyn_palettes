import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "hardwood-pallets", name: "Hardwood Pallets", eyebrow: "STRONG TIMBER CONSTRUCTION",
  summary: "Hardwood and jungle-wood pallets for demanding industrial loads.",
  description: "Hardwood pallet construction is suited to applications where robust timber sections, impact resistance and demanding load conditions are priorities.",
  applications: ["Heavy manufacturing", "Machinery", "Engineering equipment", "Industrial exports"],
  features: ["Hardwood or jungle wood", "Application-specific load design", "Custom sizing", "Treatment available"],
  specs: [{ label: "Material", value: "Hardwood / jungle wood" }, { label: "Load", value: "Application-specific" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Available" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/hardwood-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
