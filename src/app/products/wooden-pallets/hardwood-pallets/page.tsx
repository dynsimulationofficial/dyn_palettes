import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "hardwood-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Hardwood Pallets for Sale | Custom Wood Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets offers strong hardwood pallets for shipping, storage and export. Choose custom sizes, heat treated options, reliable supply and competitive pallet pricing.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
