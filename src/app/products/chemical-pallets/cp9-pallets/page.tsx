import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "chemical-pallets" as const;
const productSlug = "cp9-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "CP9 1140x1140 Pallets for Drums & Bulk Containers | DYN Pallets",
  description:
    "CP9 wooden pallets in 1140x1140 mm perimeter-base format for drums, bulk containers, Big Bags and FIBCs, with heavy-duty, 4-way and export options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
