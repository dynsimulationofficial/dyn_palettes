import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "gma-pallets", name: "GMA Pallets", eyebrow: "48 × 40 HANDLING FORMAT",
  summary: "GMA-style pallets for common 48 × 40 inch handling requirements.",
  description: "GMA pallet formats are commonly specified for standardised handling footprints and can be reviewed around your load, timber and treatment requirements.",
  applications: ["Warehousing", "Distribution", "Manufacturing", "Shipping"],
  features: ["48 × 40 inch footprint", "4-way or requirement-led entry", "Selected timber construction", "Treatment available"],
  specs: [{ label: "Typical footprint", value: "48 × 40 in" }, { label: "Entry", value: "4-way / requirement-led" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/gma-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
