import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-boxes-crates" as const;
const productSlug = "pallet-collars";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Wooden Pallet Collar Manufacturer | Foldable Euro Collars | DYN Pallets",
  description:
    "Foldable wooden pallet collars for reusable storage, logistics and export use, including Euro 1200x800, hinged, collapsible and custom collar systems.",
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
