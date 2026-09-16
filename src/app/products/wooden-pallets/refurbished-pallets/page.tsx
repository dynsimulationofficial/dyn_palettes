import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "refurbished-pallets", name: "Refurbished Pallets", eyebrow: "REUSE AND RECOVERY ROUTE",
  summary: "Refurbished and used wooden pallets for suitable repeat-handling applications.",
  description: "Refurbished pallet supply can support cost-conscious applications where condition, dimensions and load requirements allow a recovered pallet route.",
  applications: ["Domestic movement", "Repeat handling", "Warehouse staging", "Cost-conscious supply"],
  features: ["Inspected or refurbished condition", "Subject to availability", "Application-led selection", "Requirement-dependent treatment"],
  specs: [{ label: "Condition", value: "Inspected / refurbished" }, { label: "Sizing", value: "Subject to availability" }, { label: "Use", value: "Domestic / repeat handling" }, { label: "Treatment", value: "Requirement dependent" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/refurbished-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
