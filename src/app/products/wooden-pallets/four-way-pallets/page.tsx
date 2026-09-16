import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "four-way-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Four Way Pallets for Sale | 4 Way Wooden Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies four way wooden pallets for warehouses, forklifts and export. Get 4 way block, heavy-duty, heat-treated and custom pallet options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
