import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "plywood-boxes";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Plywood Box Manufacturer | Export Packing Cases | DYN Pallets",
  description:
    "Custom plywood packing boxes for industrial, export and seaworthy applications, including heavy-duty, nailless, collapsible and reusable plywood box designs.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
