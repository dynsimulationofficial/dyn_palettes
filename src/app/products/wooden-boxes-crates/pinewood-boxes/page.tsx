import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getCatalogProduct, getProductCategory } from "@/data/productCatalog";

const category = getProductCategory("wooden-boxes-crates");
const product = getCatalogProduct("wooden-boxes-crates", "pinewood-boxes");

export const metadata: Metadata = {
  title: product ? `${product.name} | DYN Pallets` : "Product | DYN Pallets",
  description: product?.summary,
  alternates: { canonical: "/products/wooden-boxes-crates/pinewood-boxes" },
};

export default function Page() {
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
