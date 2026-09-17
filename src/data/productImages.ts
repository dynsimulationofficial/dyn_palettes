import type { ProductCategory } from "@/data/products";

export const categoryImages: Record<ProductCategory["slug"], string> = {
  "wooden-pallets": "/product-photos/wooden-pallets.webp",
  "chemical-pallets": "/product-photos/chemical-pallets.webp",
  "wooden-boxes-crates": "/product-photos/wooden-boxes-crates.webp",
  "plastic-pallets": "/product-photos/plastic-pallets.webp",
};

export const productImages: Record<string, string> = {
  "pinewood-pallets": "/product-photos/pinewood-pallets.webp",
  "hardwood-pallets": "/product-photos/hardwood-pallets.webp",
  "plywood-pallets": "/product-photos/plywood-pallets.webp",
  "euro-pallets": "/product-photos/euro-pallets.webp",
  "export-pallets": "/product-photos/export-pallets.webp",
  "heat-treated-pallets": "/product-photos/heat-treated-pallets.webp",
  "two-way-pallets": "/product-photos/two-way-pallets.webp",
  "four-way-pallets": "/product-photos/four-way-pallets.webp",
  "stringer-pallets": "/product-photos/stringer-pallets.webp",
  "block-pallets": "/product-photos/block-pallets.webp",
  "heavy-duty-pallets": "/product-photos/heavy-duty-pallets.webp",
  "gma-pallets": "/product-photos/gma-pallets.webp",
  "reversible-pallets": "/product-photos/reversible-pallets.webp",
  "non-reversible-pallets": "/product-photos/non-reversible-pallets.webp",
  "refurbished-pallets": "/product-photos/refurbished-pallets.webp",
  "custom-pallets": "/product-photos/custom-pallets.webp",
  "wooden-skids": "/product-photos/wooden-skids.webp",
  "cp1-pallets": "/product-photos/cp1-pallets.webp",
  "cp2-pallets": "/product-photos/cp2-pallets.webp",
  "cp3-pallets": "/product-photos/cp3-pallets.webp",
  "cp4-pallets": "/product-photos/cp4-pallets.webp",
  "cp5-pallets": "/product-photos/cp5-pallets.webp",
  "cp6-pallets": "/product-photos/cp6-pallets.webp",
  "cp7-pallets": "/product-photos/cp7-pallets.webp",
  "cp8-pallets": "/product-photos/cp8-pallets.webp",
  "cp9-pallets": "/product-photos/cp9-pallets.webp",
  "wooden-boxes": "/product-photos/wooden-boxes.webp",
  "plywood-boxes": "/product-photos/plywood-boxes.webp",
  "pinewood-boxes": "/product-photos/pinewood-boxes.webp",
  "rubber-wood-boxes": "/product-photos/rubber-wood-boxes.webp",
  "wooden-crates": "/product-photos/wooden-crates.webp",
  "bolting-boxes": "/product-photos/bolting-boxes.webp",
  "pallet-collars": "/product-photos/pallet-collars.webp",
  "plastic-pallets": "/product-photos/plastic-pallets.webp",
};

export function getProductImage(slug: string, categorySlug?: ProductCategory["slug"]) {
  return productImages[slug] || (categorySlug ? categoryImages[categorySlug] : categoryImages["wooden-pallets"]);
}
