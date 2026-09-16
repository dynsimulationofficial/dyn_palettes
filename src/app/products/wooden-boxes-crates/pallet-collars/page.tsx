import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "pallet-collars", name: "Pallet Collars", eyebrow: "MODULAR SIDE PROTECTION", summary: "Reusable pallet collars for modular containment above a pallet base.", description: "Pallet collars create removable side walls around compatible pallet bases for repeat handling, storage and returnable packaging systems.", applications: ["Returnable packaging", "Warehousing", "Repeat handling", "Modular containment"], features: ["Collar system", "Compatible pallet base", "Stackable height", "Returnable warehouse use"], specs: [{ label: "Format", value: "Collar system" }, { label: "Base", value: "Compatible pallet" }, { label: "Height", value: "Stackable / requirement-led" }, { label: "Use", value: "Returnable / warehouse" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/pallet-collars" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
