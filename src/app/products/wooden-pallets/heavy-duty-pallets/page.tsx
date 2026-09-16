import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "heavy-duty-pallets", name: "Heavy-Duty Pallets", eyebrow: "HIGH-LOAD ENGINEERED BUILDS",
  summary: "Reinforced wooden pallets for machinery and dense industrial cargo.",
  description: "Heavy-duty pallets use larger structural members, reinforced joints and application-led load paths for demanding equipment and project cargo.",
  applications: ["Machinery", "Engineering equipment", "Project cargo", "Dense industrial loads"],
  features: ["Engineered to requirement", "Selected heavy timber sections", "2-way or 4-way entry", "Custom sizing"],
  specs: [{ label: "Load", value: "Engineered to requirement" }, { label: "Material", value: "Selected heavy sections" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Custom" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/heavy-duty-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
