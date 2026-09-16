import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryPage } from "@/components/ProductCategoryPage";
import { getProductCategory } from "@/data/products";

const category = getProductCategory("wooden-boxes-crates");

export const metadata: Metadata = {
  title: "Wooden Boxes & Crates | DYN Pallets",
  description: "Browse wooden boxes, plywood boxes, pinewood boxes, wooden crates, bolting boxes and pallet collars for industrial packaging.",
  alternates: { canonical: "/products/wooden-boxes-crates" },
};

export default function WoodenBoxesCratesPage() {
  if (!category) notFound();
  return <ProductCategoryPage category={category} />;
}
