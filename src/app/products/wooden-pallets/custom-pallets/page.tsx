import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-pallets" as const, name: "Wooden Pallets" };
const product = {
  slug: "custom-pallets",
  name: "Custom Wooden Pallets",
  eyebrow: "BUILT AROUND THE PRODUCT",
  summary: "Custom wooden pallets developed around unusual loads, footprints and lift points.",
  description: "Custom pallets are designed around the actual product instead of forcing non-standard equipment or cargo onto a standard pallet footprint.",
  applications: ["Machinery", "Engineering equipment", "Project cargo", "Industrial exports"],
  features: ["Fully custom sizing", "Application-specific load design", "2-way, 4-way or custom entry", "Selected timber construction"],
  specs: [{ label: "Sizing", value: "Fully custom" }, { label: "Load", value: "Application-specific" }, { label: "Entry", value: "2-way / 4-way / custom" }, { label: "Material", value: "Selected timber" }],
};

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`,
  description: product.summary,
  alternates: { canonical: "/products/wooden-pallets/custom-pallets" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
