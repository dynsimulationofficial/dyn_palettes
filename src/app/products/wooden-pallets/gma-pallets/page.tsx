import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "gma-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "GMA Pallets for Sale | 48x40 Standard Wood Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies 48x40 GMA wooden pallets for warehousing, food distribution, shipping and export, with standard, 4-way and heat-treated options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
