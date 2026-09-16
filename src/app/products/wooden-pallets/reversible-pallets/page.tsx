import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "reversible-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Reversible Pallets for Sale | Double Deck Wood Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies reversible wooden pallets for industrial handling and export. Get 2-way, 4-way, heavy-duty, heat-treated and custom double-deck options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
