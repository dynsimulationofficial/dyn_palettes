import type { Metadata } from "next";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "chemical-pallets" as const;
const productSlug = "cp8-pallets";
const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "CP8 1140x1140 Pallets for Big Bags & FIBCs | DYN Pallets",
  description:
    "CP8 wooden pallets in 1140x1140 mm format for Big Bags, FIBCs, Octabins and discharge-opening applications, with heavy-duty and export options.",
  alternates: { canonical: `/products/${categorySlug}/${productSlug}` },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
