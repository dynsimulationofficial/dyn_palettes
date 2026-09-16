export type CatalogProduct = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  applications: string[];
  features: string[];
  specs: { label: string; value: string }[];
};

export type ProductCategory = {
  slug: "wooden-pallets" | "chemical-pallets" | "wooden-boxes-crates" | "plastic-pallets";
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  items: CatalogProduct[];
  standalone?: boolean;
};

const woodenDefaults = {
  applications: ["Manufacturing", "Warehousing", "Logistics", "Industrial shipping"],
  features: ["Custom sizing available", "Load-led construction", "2-way or 4-way handling options", "Treatment available where required"],
};

const chemicalDefaults = {
  applications: ["Chemical industry", "Petrochemicals", "Process manufacturing", "Industrial exports"],
  features: ["CP-series format", "Selected timber construction", "Application-led load design", "Treatment available where required"],
};

const boxDefaults = {
  applications: ["Machinery", "Engineering equipment", "Industrial exports", "Protected storage"],
  features: ["Custom internal dimensions", "Load-bearing base construction", "Blocking and securing options", "Export treatment available"],
};

const wp = (
  slug: string,
  name: string,
  eyebrow: string,
  summary: string,
  description: string,
  specs: { label: string; value: string }[],
): CatalogProduct => ({ slug, name, eyebrow, summary, description, specs, ...woodenDefaults });

const cp = (slug: string, name: string, size: string, summary: string): CatalogProduct => ({
  slug,
  name,
  eyebrow: "CP-series pallet",
  summary,
  description: `${name} are chemical-industry pallet formats designed around CP-series requirements. DYN Pallets can review timber selection, construction, treatment and load conditions for your application.`,
  specs: [
    { label: "Format", value: name.replace(" Pallets", "") },
    { label: "Typical footprint", value: size },
    { label: "Material", value: "Selected timber" },
    { label: "Treatment", value: "Available on request" },
  ],
  ...chemicalDefaults,
});

const bx = (
  slug: string,
  name: string,
  eyebrow: string,
  summary: string,
  description: string,
  specs: { label: string; value: string }[],
): CatalogProduct => ({ slug, name, eyebrow, summary, description, specs, ...boxDefaults });

export const productCategories: ProductCategory[] = [
  {
    slug: "wooden-pallets",
    name: "Wooden Pallets",
    eyebrow: "PALLET SYSTEMS",
    summary: "Standard, export, heavy-duty and custom wooden pallet formats for industrial handling.",
    description: "Choose the pallet construction around the load, forklift entry, warehouse flow, shipment route and treatment requirement.",
    items: [
      {
        slug: "pinewood-pallets",
        name: "Pinewood Pallets",
        eyebrow: "PINE TIMBER PALLET SYSTEMS",
        summary: "Pinewood pallets for industrial handling, warehousing, transport and export, with custom sizes, 2-way, 4-way, heavy-duty and heat-treated options.",
        description: "DYN Pallets manufactures engineered pinewood pallets for industrial handling, storage, transportation, warehousing and export applications. Each pallet can be configured around cargo weight, load distribution, dimensions, handling method, storage environment and transportation conditions.",
        applications: [
          "Manufacturing material movement",
          "Warehouse storage and staging",
          "Finished goods handling",
          "Forklift and pallet truck movement",
          "Road and container transportation",
          "Export packaging requirements",
        ],
        features: [
          "Selected pine timber construction",
          "2-way or 4-way entry configurations",
          "Stringer or block construction",
          "Standard, custom and drawing-based sizing",
          "Static, dynamic and handling-specific load design",
          "Heat treatment available where required",
        ],
        specs: [
          { label: "Material", value: "Selected Pine Timber" },
          { label: "Entry", value: "2-Way / 4-Way" },
          { label: "Construction", value: "Stringer / Block" },
          { label: "Sizing", value: "Standard / Custom" },
          { label: "Treatment", value: "Natural / Heat-Treated Where Required" },
        ],
      },
      wp("hardwood-pallets", "Hardwood Pallets", "Strong timber construction", "Hardwood and jungle-wood pallets for demanding industrial loads.", "Hardwood pallet construction is suited to applications where robust timber sections, impact resistance and demanding load conditions are priorities.", [
        { label: "Material", value: "Hardwood / jungle wood" }, { label: "Load", value: "Application-specific" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Available" },
      ]),
      wp("plywood-pallets", "Plywood Pallets", "Consistent engineered panels", "Plywood pallet formats for selected clean and weight-conscious applications.", "Plywood pallet construction can be considered where dimensional consistency, lower tare weight and a clean engineered finish are useful.", [
        { label: "Material", value: "Plywood + timber members" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Custom" }, { label: "Use", value: "Domestic / export" },
      ]),
      wp("euro-pallets", "Euro Pallets", "Standardised material flow", "Euro-format wooden pallets for standardised handling and storage footprints.", "Euro pallet formats support businesses that rely on consistent dimensions and predictable forklift handling across storage and transport networks.", [
        { label: "Format", value: "Euro / EPAL-style requirement" }, { label: "Entry", value: "4-way" }, { label: "Construction", value: "Block pallet" }, { label: "Treatment", value: "HT available" },
      ]),
      wp("export-pallets", "Export Pallets", "Built for shipment routes", "Export wooden pallets developed around cargo, destination and treatment needs.", "Export pallets are configured around destination, shipment route, load and applicable timber packaging requirements.", [
        { label: "Use", value: "International shipping" }, { label: "Sizing", value: "Standard / custom" }, { label: "Treatment", value: "ISPM-15 route available" }, { label: "Marking", value: "As required" },
      ]),
      wp("heat-treated-pallets", "Heat-Treated Pallets", "Export-ready timber route", "Heat-treated wooden pallets for applicable export and compliance requirements.", "Heat-treated pallet supply supports export programs where treated timber packaging is required as part of the shipping workflow.", [
        { label: "Treatment", value: "HT" }, { label: "Material", value: "Wood" }, { label: "Sizing", value: "Standard / custom" }, { label: "Use", value: "Export / domestic" },
      ]),
      wp("two-way-pallets", "Two-Way Pallets", "Directional handling", "Two-way entry pallets for controlled forklift and pallet-truck access.", "A straightforward stringer-led pallet route where handling direction is predictable and structural simplicity is preferred.", [
        { label: "Entry", value: "2-way" }, { label: "Construction", value: "Stringer / custom" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" },
      ]),
      wp("four-way-pallets", "Four-Way Pallets", "Flexible forklift access", "Four-way pallets for faster warehouse positioning and handling flexibility.", "Four-way entry construction enables forklift access from multiple sides for busy warehouse, distribution and manufacturing environments.", [
        { label: "Entry", value: "4-way" }, { label: "Construction", value: "Block / notched stringer" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" },
      ]),
      wp("stringer-pallets", "Stringer Pallets", "Proven structural format", "Stringer pallet construction for dependable warehouse and shipping loads.", "Stringer pallets use longitudinal supporting members to create a practical, repairable and cost-efficient industrial pallet platform.", [
        { label: "Construction", value: "Stringer" }, { label: "Entry", value: "2-way / partial 4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Material", value: "Pine / hardwood" },
      ]),
      wp("block-pallets", "Block Pallets", "Four-way handling platform", "Block pallet construction for flexible forklift entry and repeat warehouse movement.", "Block pallets use supporting blocks between deck structures to enable flexible four-way handling and stable load distribution.", [
        { label: "Construction", value: "Block" }, { label: "Entry", value: "4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Treatment", value: "Available" },
      ]),
      wp("heavy-duty-pallets", "Heavy-Duty Pallets", "High-load engineered builds", "Reinforced wooden pallets for machinery and dense industrial cargo.", "Heavy-duty pallets use larger structural members, reinforced joints and application-led load paths for demanding equipment and project cargo.", [
        { label: "Load", value: "Engineered to requirement" }, { label: "Material", value: "Selected heavy sections" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Custom" },
      ]),
      wp("gma-pallets", "GMA Pallets", "48 × 40 handling format", "GMA-style pallets for common 48 × 40 inch handling requirements.", "GMA pallet formats are commonly specified for standardised handling footprints and can be reviewed around your load, timber and treatment requirements.", [
        { label: "Typical footprint", value: "48 × 40 in" }, { label: "Entry", value: "4-way / requirement-led" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available" },
      ]),
      wp("reversible-pallets", "Reversible Pallets", "Decking on both faces", "Reversible pallet builds for selected industrial handling and load conditions.", "Reversible pallet construction provides usable deck surfaces on both faces where the handling system and load application benefit from that format.", [
        { label: "Deck", value: "Reversible" }, { label: "Entry", value: "Application-led" }, { label: "Sizing", value: "Custom" }, { label: "Material", value: "Selected timber" },
      ]),
      wp("non-reversible-pallets", "Non-Reversible Pallets", "Dedicated top deck", "Non-reversible pallets for conventional warehouse and shipping use.", "Non-reversible pallets use a dedicated load deck and underside support arrangement for common industrial movement and storage requirements.", [
        { label: "Deck", value: "Non-reversible" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Standard / custom" }, { label: "Material", value: "Pine / hardwood" },
      ]),
      wp("refurbished-pallets", "Refurbished Pallets", "Reuse and recovery route", "Refurbished and used wooden pallets for suitable repeat-handling applications.", "Refurbished pallet supply can support cost-conscious applications where condition, dimensions and load requirements allow a recovered pallet route.", [
        { label: "Condition", value: "Inspected / refurbished" }, { label: "Sizing", value: "Subject to availability" }, { label: "Use", value: "Domestic / repeat handling" }, { label: "Treatment", value: "Requirement dependent" },
      ]),
      wp("custom-pallets", "Custom Wooden Pallets", "Built around the product", "Custom wooden pallets developed around unusual loads, footprints and lift points.", "Custom pallets are designed around the actual product instead of forcing non-standard equipment or cargo onto a standard pallet footprint.", [
        { label: "Sizing", value: "Fully custom" }, { label: "Load", value: "Application-specific" }, { label: "Entry", value: "2-way / 4-way / custom" }, { label: "Material", value: "Selected timber" },
      ]),
      wp("wooden-skids", "Wooden Skids", "Machinery transport bases", "Wooden skid bases for machinery, fabricated equipment and project cargo.", "Wooden skids create a strong transport foundation for equipment that needs forklift access, mechanical securing and integration with crate or barrier protection.", [
        { label: "Format", value: "Skid / machinery base" }, { label: "Sizing", value: "Custom" }, { label: "Load", value: "Engineered to requirement" }, { label: "Protection", value: "Crate / barrier compatible" },
      ]),
    ],
  },
  {
    slug: "chemical-pallets",
    name: "Chemical Pallets",
    eyebrow: "CP1–CP9 SERIES",
    summary: "CP-series wooden pallet formats for chemical and process-industry supply chains.",
    description: "Select the CP format required by the load, container, handling system and chemical-industry specification.",
    items: [
      cp("cp1-pallets", "CP1 Pallets", "1000 × 1200 mm", "CP1 pallet format for chemical-industry handling and transport requirements."),
      cp("cp2-pallets", "CP2 Pallets", "800 × 1200 mm", "CP2 pallet format for chemical and industrial material movement."),
      cp("cp3-pallets", "CP3 Pallets", "1140 × 1140 mm", "Square CP3 pallet format for selected chemical-industry loads."),
      cp("cp4-pallets", "CP4 Pallets", "1100 × 1300 mm", "CP4 pallet format for defined chemical and process-industry handling routes."),
      cp("cp5-pallets", "CP5 Pallets", "760 × 1140 mm", "CP5 pallet format for specialised chemical-industry applications."),
      cp("cp6-pallets", "CP6 Pallets", "1000 × 1200 mm", "CP6 pallet format with application-led construction for chemical supply chains."),
      cp("cp7-pallets", "CP7 Pallets", "1100 × 1300 mm", "CP7 pallet format for chemical-industry storage, handling and freight."),
      cp("cp8-pallets", "CP8 Pallets", "1140 × 1140 mm", "CP8 square pallet format for suitable drums, containers and chemical loads."),
      cp("cp9-pallets", "CP9 Pallets", "1140 × 1140 mm", "CP9 perimeter-base pallet format for selected chemical-industry requirements."),
    ],
  },
  {
    slug: "wooden-boxes-crates",
    name: "Wooden Boxes & Crates",
    eyebrow: "ENCLOSED PROTECTION",
    summary: "Boxes, crates, collars and export-ready timber packaging for protected industrial movement.",
    description: "Choose the enclosure around the product geometry, protection level, lift points, shipment route and export requirement.",
    items: [
      bx("wooden-boxes", "Wooden Boxes", "Framed timber protection", "Custom wooden boxes for protected movement of industrial products and equipment.", "Wooden boxes combine structural framing with enclosed protection for parts, assemblies, spares and machinery that need stronger transit protection.", [
        { label: "Build", value: "Custom framed box" }, { label: "Base", value: "Skid / pallet base" }, { label: "Closure", value: "Nailed / screwed" }, { label: "Treatment", value: "Available" },
      ]),
      bx("plywood-boxes", "Plywood Boxes", "Clean enclosed packaging", "Plywood boxes for clean, enclosed industrial and export protection.", "Plywood boxes pair timber framing with sheet enclosure for equipment that needs dimensional accuracy, cleaner surfaces and lower tare weight.", [
        { label: "Panels", value: "Plywood" }, { label: "Frame", value: "Timber" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "As applicable" },
      ]),
      bx("pinewood-boxes", "Pinewood Boxes", "Export-friendly timber box", "Pinewood boxes for machinery, engineering products and seaworthy packing routes.", "Pinewood box construction provides a practical timber enclosure that can be configured around product weight, shipment route and export treatment needs.", [
        { label: "Material", value: "Pinewood" }, { label: "Base", value: "Skid / pallet base" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "HT available" },
      ]),
      bx("rubber-wood-boxes", "Rubber Wood Boxes", "Domestic packing route", "Rubber wood boxes for suitable domestic and industrial packing applications.", "Rubber wood boxes can be considered for selected domestic packing requirements where robust framed timber protection is needed.", [
        { label: "Material", value: "Rubber wood" }, { label: "Use", value: "Domestic / industrial" }, { label: "Sizing", value: "Custom" }, { label: "Closure", value: "Nailed / screwed" },
      ]),
      bx("wooden-crates", "Wooden Crates", "Open or closed framing", "Wooden crates for machinery, assemblies and irregular industrial cargo.", "Crate systems provide structural protection while allowing inspection, ventilation and flexible securing for large or irregular cargo.", [
        { label: "Style", value: "Open / closed" }, { label: "Base", value: "Heavy skid" }, { label: "Lifting", value: "Forklift / crane planning" }, { label: "Sizing", value: "Custom" },
      ]),
      bx("bolting-boxes", "Bolting Boxes", "Serviceable heavy enclosure", "Bolted wooden boxes for equipment that may need controlled opening or reassembly.", "Bolting boxes use mechanical fasteners in selected structural areas to support robust protection and practical access during industrial handling.", [
        { label: "Closure", value: "Bolted / screwed" }, { label: "Frame", value: "Timber" }, { label: "Sizing", value: "Custom" }, { label: "Use", value: "Heavy / project cargo" },
      ]),
      bx("pallet-collars", "Pallet Collars", "Modular side protection", "Reusable pallet collars for modular containment above a pallet base.", "Pallet collars create removable side walls around compatible pallet bases for repeat handling, storage and returnable packaging systems.", [
        { label: "Format", value: "Collar system" }, { label: "Base", value: "Compatible pallet" }, { label: "Height", value: "Stackable / requirement-led" }, { label: "Use", value: "Returnable / warehouse" },
      ]),
    ],
  },
  {
    slug: "plastic-pallets",
    name: "Plastic Pallets",
    eyebrow: "HYGIENE + REUSE",
    summary: "Plastic pallet options for clean, moisture-sensitive and repeat-use handling environments.",
    description: "A practical alternative where washability, moisture resistance and consistent molded dimensions matter more than timber repairability.",
    standalone: true,
    items: [],
  },
];

export const woodenPalletItems = productCategories.find((category) => category.slug === "wooden-pallets")!.items;
export const chemicalPalletItems = productCategories.find((category) => category.slug === "chemical-pallets")!.items;
export const woodenBoxesCratesItems = productCategories.find((category) => category.slug === "wooden-boxes-crates")!.items;

export function getProductCategory(slug: ProductCategory["slug"]) {
  return productCategories.find((category) => category.slug === slug);
}

export function getCatalogProduct(categorySlug: ProductCategory["slug"], productSlug: string) {
  return getProductCategory(categorySlug)?.items.find((item) => item.slug === productSlug);
}

export const productCatalogRoutes = productCategories.flatMap((category) => {
  const categoryRoute = `/products/${category.slug}`;
  return [categoryRoute, ...category.items.map((item) => `${categoryRoute}/${item.slug}`)];
});
