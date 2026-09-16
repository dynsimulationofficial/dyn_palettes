import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "heat-treated-pallets", name: "Heat-Treated Pallets", eyebrow: "EXPORT-READY TIMBER ROUTE",
  summary: "Heat-treated wooden pallets for applicable export and compliance requirements.",
  description: "Heat-treated pallet supply supports export programs where treated timber packaging is required as part of the shipping workflow.",
  applications: ["International shipping", "Export packaging", "Container freight", "Industrial logistics"],
  features: ["Heat-treated timber route", "Wood construction", "Standard or custom sizing", "Export and domestic use"],
  specs: [{ label: "Treatment", value: "HT" }, { label: "Material", value: "Wood" }, { label: "Sizing", value: "Standard / custom" }, { label: "Use", value: "Export / domestic" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/heat-treated-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
