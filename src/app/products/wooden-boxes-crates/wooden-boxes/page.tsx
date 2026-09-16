import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";

const category = { slug: "wooden-boxes-crates" as const, name: "Wooden Boxes & Crates" };
const product = { slug: "wooden-boxes", name: "Wooden Boxes", eyebrow: "FRAMED TIMBER PROTECTION", summary: "Custom wooden boxes for protected movement of industrial products and equipment.", description: "Wooden boxes combine structural framing with enclosed protection for parts, assemblies, spares and machinery that need stronger transit protection.", applications: ["Machinery", "Engineering equipment", "Industrial exports", "Protected storage"], features: ["Custom framed box", "Skid or pallet base", "Nailed or screwed closure", "Treatment available"], specs: [{ label: "Build", value: "Custom framed box" }, { label: "Base", value: "Skid / pallet base" }, { label: "Closure", value: "Nailed / screwed" }, { label: "Treatment", value: "Available" }] };

export const metadata: Metadata = {
  title: `${product.name} | DYN Pallets`, description: product.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/wooden-boxes" },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
