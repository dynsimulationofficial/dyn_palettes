import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "wooden-pallets" as const;
const productSlug = "heat-treated-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: {
    absolute: "Heat Treated Pallets for Sale | ISPM 15 Wood Pallets | DYN Pallets",
  },
  description:
    "DYN Pallets supplies heat treated wooden pallets for export and international shipping. Get HT pallets, custom sizes, ISPM 15 requirements and specification-based pricing.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
