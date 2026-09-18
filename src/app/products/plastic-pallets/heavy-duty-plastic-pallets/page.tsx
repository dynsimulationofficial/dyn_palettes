import type { Metadata } from "next";

import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductCategory, getProductItem } from "@/data/products";

const categorySlug = "plastic-pallets" as const;
const productSlug = "heavy-duty-plastic-pallets";

const category = getProductCategory(categorySlug)!;
const product = getProductItem(categorySlug, productSlug)!;

export const metadata: Metadata = {
  title: "Heavy Duty Plastic Pallets Manufacturer | DYN Pallets",
  description:
    "Buy heavy duty plastic pallets for warehouses, factories and racking. HDPE, rackable, reinforced, 4-way and 1200x1000 options available to specification.",
  keywords: [
    "heavy duty plastic pallets",
    "durable plastic pallets",
    "heavy duty plastic pallets for sale",
    "heavy duty plastic pallets price",
    "heavy duty plastic pallets near me",
    "pallet plastic heavy duty",
    "heavy plastic pallets",
    "pallet plastik heavy duty",
    "heavy duty nestable pallet",
    "heavy duty plastic skids",
    "heavy duty industrial plastic pallets",
    "Heavy Duty Plastic Pallet Manufacturer",
    "HDPE Heavy Duty Plastic Pallets",
    "Heavy Duty Rackable Plastic Pallets",
    "Rackable Plastic Pallets",
    "Industrial Plastic Pallets",
    "Warehouse Plastic Pallets",
    "Steel Reinforced Plastic Pallets",
    "High Load Capacity Plastic Pallets",
    "4 Way Heavy Duty Plastic Pallets",
    "Heavy Duty Stackable Plastic Pallets",
    "Heavy Duty Export Plastic Pallets",
    "1200x1000 Heavy Duty Plastic Pallet",
    "3 Ton Plastic Pallet",
    "4 Ton Plastic Pallet",
  ],
  alternates: {
    canonical: `/products/${categorySlug}/${productSlug}`,
  },
};

export default function Page() {
  return <ProductDetailTemplate category={category} product={product} />;
}
