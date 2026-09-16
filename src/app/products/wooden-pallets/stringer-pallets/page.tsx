import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "stringer-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Stringer Pallets for Sale | 2 & 4 Way Wood Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies wooden stringer pallets for warehousing, shipping and export. Get 2-way, 4-way, heavy-duty, heat-treated and custom stringer pallet options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
