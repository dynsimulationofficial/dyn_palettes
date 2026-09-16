import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "export-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Export Pallets for Sale | Heat Treated Wooden Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies export wooden pallets for international shipping. Share size, load, heat treatment and ISPM 15 requirements for a custom pallet quote.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
