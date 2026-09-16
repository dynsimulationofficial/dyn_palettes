import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "rubber-wood-boxes", name: "Rubber Wood Boxes", eyebrow: "DOMESTIC PACKING ROUTE", summary: "Rubber wood boxes for suitable domestic and industrial packing applications.", description: "Rubber wood boxes can be considered for selected domestic packing requirements where robust framed timber protection is needed.", applications: ["Domestic packing", "Industrial products", "Warehouse movement"], features: ["Rubber wood construction", "Domestic or industrial use", "Custom sizing", "Nailed or screwed closure"], specs: [{ label: "Material", value: "Rubber wood" }, { label: "Use", value: "Domestic / industrial" }, { label: "Sizing", value: "Custom" }, { label: "Closure", value: "Nailed / screwed" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/rubber-wood-boxes" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
