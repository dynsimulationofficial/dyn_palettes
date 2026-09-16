import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "chemical-pallets" as const, name: "Chemical Pallets" };
const product = { slug: "cp5-pallets", name: "CP5 Pallets", eyebrow: "CP-SERIES PALLET", summary: "CP5 pallet format for specialised chemical-industry applications.", description: "CP5 pallets can be reviewed around specialised chemical-industry cargo, handling and transportation requirements.", applications: ["Chemical industry", "Process manufacturing", "Industrial exports"], features: ["CP5-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"], specs: [{ label: "Format", value: "CP5" }, { label: "Typical footprint", value: "760 × 1140 mm" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available on request" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/chemical-pallets/cp5-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
