import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "euro-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Euro Pallets for Sale | EPAL & Custom Wooden Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies Euro pallets, EPAL-style pallets and custom export pallets in standard sizes. Get new, heat treated and heavy-duty options with competitive pricing.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
