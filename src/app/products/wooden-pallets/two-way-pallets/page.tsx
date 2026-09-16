import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "two-way-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Two Way Pallets for Sale | 2 Way Wooden Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies two way pallets and 2 way wooden pallets for warehousing, forklifts and export. Get custom, heavy-duty and stringer options with pricing.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
