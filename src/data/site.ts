export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specs: { label: string; value: string }[];
  visual: "pallet" | "box" | "crate" | "plastic";
};

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  steps: string[];
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "wooden-pallets",
    name: "Wooden Pallets",
    eyebrow: "Reliable everyday handling",
    summary: "Industrial wooden pallets engineered for repeat movement, storage and dispatch.",
    description: "Built around your load, handling method and storage environment, our wooden pallets balance structural strength, repairability and cost for regular industrial use.",
    features: ["Custom footprints", "2-way or 4-way entry", "Load-focused member sizing", "Nail and joint quality checks"],
    applications: ["Manufacturing", "Warehousing", "Domestic dispatch", "Distribution"],
    specs: [{ label: "Material", value: "Pine / mixed hardwood" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Build", value: "Stringer / block" }, { label: "Finish", value: "Natural / heat-treated" }],
    visual: "pallet",
  },
  {
    slug: "pinewood-pallets",
    name: "Pinewood Pallets",
    eyebrow: "Clean, precise, export-friendly",
    summary: "Pinewood pallets with predictable weight, machining quality and finish.",
    description: "A versatile pallet option for businesses that value clean fabrication, lower tare weight and consistent timber dimensions across recurring purchase orders.",
    features: ["Selected pine sections", "Smooth machine finish", "Low tare weight", "Custom load design"],
    applications: ["Exports", "FMCG", "Engineering", "General industry"],
    specs: [{ label: "Material", value: "Pinewood" }, { label: "Moisture", value: "As per order requirement" }, { label: "Treatment", value: "HT available" }, { label: "Sizing", value: "Standard / custom" }],
    visual: "pallet",
  },
  {
    slug: "euro-pallets",
    name: "Euro Pallets",
    eyebrow: "Standardized material flow",
    summary: "Euro-format pallets for standardized racking, handling and supply-chain footprints.",
    description: "Euro-format pallet builds support operations that rely on consistent dimensions and predictable forklift handling across warehouses and cross-border supply chains.",
    features: ["Standard footprint options", "Block pallet construction", "Forklift-friendly access", "Export treatment available"],
    applications: ["Warehouses", "Automotive", "Export logistics", "Retail distribution"],
    specs: [{ label: "Footprint", value: "Euro-format / custom" }, { label: "Construction", value: "Block pallet" }, { label: "Entry", value: "4-way" }, { label: "Treatment", value: "Optional ISPM-15 HT" }],
    visual: "pallet",
  },
  {
    slug: "chemical-pallets",
    name: "Chemical Pallets",
    eyebrow: "CP-series ready",
    summary: "Chemical-industry pallet formats designed around defined CP-series requirements.",
    description: "CP-format pallet requirements can be reviewed against the required CP type, load condition and handling environment for safe industrial movement.",
    features: ["CP-format options", "Application-led selection", "Heavy-duty joinery", "Treatment on request"],
    applications: ["Chemicals", "Petrochemicals", "Process plants", "Industrial exports"],
    specs: [{ label: "Format", value: "CP-series / custom" }, { label: "Entry", value: "Application dependent" }, { label: "Material", value: "Selected timber" }, { label: "Treatment", value: "Available" }],
    visual: "pallet",
  },
  {
    slug: "export-pallets",
    name: "Export Pallets",
    eyebrow: "Built for border-ready shipments",
    summary: "Export pallets designed around destination, cargo and treatment requirements.",
    description: "We engineer export pallets with the shipment route in mind, aligning timber treatment, construction and securing details with cargo and destination requirements.",
    features: ["Export-focused design", "ISPM-15 treatment support", "Documentation-ready workflow", "Optimized for freight"],
    applications: ["International export", "Air cargo", "Sea freight", "Project cargo"],
    specs: [{ label: "Treatment", value: "Heat treatment / fumigation as applicable" }, { label: "Design", value: "Custom" }, { label: "Load", value: "Application-specific" }, { label: "Marking", value: "As required" }],
    visual: "pallet",
  },
  {
    slug: "heat-treated-pallets",
    name: "Heat-Treated Pallets",
    eyebrow: "ISPM-15 aligned solutions",
    summary: "Heat-treated wooden pallets for applicable export and compliance requirements.",
    description: "Heat-treated pallets support export programs where timber packaging treatment is required, with process controls built into the supply workflow.",
    features: ["Heat-treatment option", "Export support", "Traceable order flow", "Standard or custom builds"],
    applications: ["Export shipments", "Pharma", "Engineering", "Food machinery"],
    specs: [{ label: "Treatment", value: "HT" }, { label: "Material", value: "Wood" }, { label: "Sizing", value: "Standard / custom" }, { label: "Use", value: "Export / domestic" }],
    visual: "pallet",
  },
  {
    slug: "two-way-pallets",
    name: "Two-Way Pallets",
    eyebrow: "Simple, strong, efficient",
    summary: "Two-way entry pallets for directional forklift and pallet-truck handling.",
    description: "A robust, straightforward construction for operations where handling direction is controlled and maximum structural simplicity is preferred.",
    features: ["Directional entry", "Strong stringer design", "Cost-efficient construction", "Custom deck spacing"],
    applications: ["Factory movement", "Storage", "Heavy cartons", "Domestic dispatch"],
    specs: [{ label: "Entry", value: "2-way" }, { label: "Construction", value: "Stringer" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" }],
    visual: "pallet",
  },
  {
    slug: "four-way-pallets",
    name: "Four-Way Pallets",
    eyebrow: "Faster warehouse access",
    summary: "Four-way entry pallets that improve forklift access and floor efficiency.",
    description: "Designed for fast warehouse movement, four-way entry formats allow flexible lift access and smoother placement in busy handling environments.",
    features: ["4-side forklift access", "Warehouse-friendly", "Block or notched stringer builds", "Custom load design"],
    applications: ["3PL", "Distribution", "Automotive", "Warehousing"],
    specs: [{ label: "Entry", value: "4-way" }, { label: "Construction", value: "Block / notched stringer" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "Optional" }],
    visual: "pallet",
  },
  {
    slug: "heavy-duty-pallets",
    name: "Heavy-Duty Pallets",
    eyebrow: "High-load engineered builds",
    summary: "Reinforced pallets for machinery, dense cargo and demanding industrial loads.",
    description: "Heavy-duty pallet designs use larger structural members, reinforced joints and application-led load paths for demanding equipment and project cargo.",
    features: ["Reinforced members", "High-load construction", "Custom blocking", "Machine-base integration"],
    applications: ["Heavy machinery", "Engineering equipment", "Project cargo", "Metal components"],
    specs: [{ label: "Load", value: "Engineered to requirement" }, { label: "Material", value: "Selected heavy sections" }, { label: "Entry", value: "2-way / 4-way" }, { label: "Sizing", value: "Custom" }],
    visual: "pallet",
  },
  {
    slug: "plastic-pallets",
    name: "Plastic Pallets",
    eyebrow: "Cleanable and moisture-resistant",
    summary: "Plastic pallet options for hygiene-sensitive or moisture-exposed applications.",
    description: "Plastic pallets are a practical fit where washability, moisture resistance or repeatable molded dimensions are important to the handling process.",
    features: ["Washable surfaces", "No timber treatment", "Consistent dimensions", "Reusable formats"],
    applications: ["Pharma", "Food", "Cold chain", "Clean warehousing"],
    specs: [{ label: "Material", value: "Industrial polymer" }, { label: "Entry", value: "Model dependent" }, { label: "Type", value: "Nestable / rackable options" }, { label: "Sizing", value: "Standard formats" }],
    visual: "plastic",
  },
  {
    slug: "wooden-boxes",
    name: "Wooden Boxes",
    eyebrow: "Protected enclosed packaging",
    summary: "Custom wooden boxes for protected movement of industrial products and equipment.",
    description: "Wooden boxes combine structural framing with enclosed protection for parts, assemblies, spares and equipment that require stronger transit protection.",
    features: ["Custom internal sizing", "Base skid integration", "Reinforced framing", "Blocking and cushioning options"],
    applications: ["Machinery parts", "Spares", "Electrical equipment", "Exports"],
    specs: [{ label: "Build", value: "Custom framed box" }, { label: "Base", value: "Skid / pallet base" }, { label: "Closure", value: "Nailed / screwed" }, { label: "Treatment", value: "Available" }],
    visual: "box",
  },
  {
    slug: "plywood-boxes",
    name: "Plywood Boxes",
    eyebrow: "Clean finish, lower tare weight",
    summary: "Plywood packaging for clean, enclosed protection with a refined industrial finish.",
    description: "Plywood boxes pair a framed base with sheet enclosure for equipment that needs cleaner surfaces, dimensional accuracy and lower tare weight.",
    features: ["Smooth panel finish", "Custom framing", "Lower tare weight", "Branding / stencil ready"],
    applications: ["Electronics", "Precision parts", "Export equipment", "Medical devices"],
    specs: [{ label: "Panels", value: "Plywood" }, { label: "Frame", value: "Timber" }, { label: "Sizing", value: "Custom" }, { label: "Treatment", value: "As applicable" }],
    visual: "box",
  },
  {
    slug: "wooden-crates",
    name: "Wooden Crates",
    eyebrow: "Ventilated heavy protection",
    summary: "Open and closed wooden crates for machinery, assemblies and industrial cargo.",
    description: "Crate systems provide strong structural protection while allowing inspection, ventilation and flexible securing for large or irregular industrial cargo.",
    features: ["Open / closed styles", "Heavy framed construction", "Custom blocking", "Lift-point planning"],
    applications: ["Machinery", "Fabrications", "Project cargo", "Industrial exports"],
    specs: [{ label: "Style", value: "Open / closed" }, { label: "Base", value: "Heavy skid" }, { label: "Lifting", value: "Forklift / crane planning" }, { label: "Sizing", value: "Custom" }],
    visual: "crate",
  },
];

export const services: Service[] = [
  { slug: "heat-treatment", name: "Heat Treatment", eyebrow: "Export compliance support", summary: "Heat-treatment support for applicable wooden export packaging.", description: "A controlled treatment workflow for wooden packaging used in export programs where phytosanitary requirements apply.", steps: ["Confirm destination and packaging type", "Schedule treatment batch", "Treat and verify process", "Prepare packaging for dispatch"], benefits: ["Export readiness", "Process consistency", "Reduced compliance friction", "Integrated pallet supply"] },
  { slug: "fumigation", name: "Fumigation", eyebrow: "Shipment treatment coordination", summary: "Fumigation services for applicable export and cargo requirements.", description: "Coordinated fumigation support based on cargo, destination and regulatory requirements, integrated with industrial packing when needed.", steps: ["Requirement review", "Treatment planning", "Controlled execution", "Shipment handover"], benefits: ["Single-point coordination", "Export support", "Onsite planning", "Documentation workflow"] },
  { slug: "industrial-packing", name: "Industrial Packing", eyebrow: "Protection engineered around the load", summary: "Onsite and factory industrial packing for machinery, equipment and components.", description: "We plan the base, protective layers, enclosure and securing method around the product’s weight, geometry, fragility and shipping route.", steps: ["Site / drawing review", "Packing design", "Material preparation", "Pack, secure and inspect"], benefits: ["Reduced transit risk", "Custom protection", "Onsite capability", "Integrated crate and skid build"] },
  { slug: "container-lashing-chocking", name: "Container Lashing & Chocking", eyebrow: "Cargo secured for transit", summary: "Container securing with lashing, blocking and chocking for industrial shipments.", description: "A practical cargo-securing service that controls movement inside containers using blocking, chocking and lashing arrangements suited to the load.", steps: ["Cargo and container review", "Positioning plan", "Block, chock and lash", "Final movement check"], benefits: ["Controlled cargo movement", "Container-ready execution", "Heavy-load support", "Site coordination"] },
  { slug: "palletisation", name: "Palletisation", eyebrow: "Unit loads built for movement", summary: "Palletisation for cartons, bags, drums and industrial components.", description: "We convert loose or mixed cargo into stable unit loads using the right pallet footprint, stacking pattern and restraint method.", steps: ["Review SKU and load", "Select pallet format", "Stack and protect", "Wrap / strap and label"], benefits: ["Faster handling", "Stable unit loads", "Warehouse efficiency", "Damage reduction"] },
  { slug: "skid-packing", name: "Skid Packing", eyebrow: "Heavy equipment foundations", summary: "Custom skid bases and securing for machinery and fabricated equipment.", description: "Skid packing creates a strong transport base for equipment that needs forklift access, lifting stability and positive mechanical securing.", steps: ["Measure equipment", "Engineer skid layout", "Mount and block", "Protect and secure"], benefits: ["Heavy-load stability", "Forklift access", "Custom mounting", "Crate-ready base"] },
  { slug: "vci-packing", name: "VCI Packing", eyebrow: "Corrosion protection", summary: "VCI protection for metal components and machinery during storage and transport.", description: "VCI materials help protect ferrous and non-ferrous components from corrosion during enclosed storage and shipment cycles.", steps: ["Assess metal and duration", "Prepare dry surfaces", "Apply VCI barrier", "Seal and pack"], benefits: ["Corrosion control", "Clean protection", "Export suitability", "Works with crates and boxes"] },
  { slug: "vacuum-packing", name: "Vacuum Packing", eyebrow: "Barrier protection for long routes", summary: "Moisture-barrier vacuum packing for sensitive machinery and industrial equipment.", description: "Barrier-film vacuum packing reduces moisture exposure for equipment shipped or stored for extended periods, often combined with desiccants and crate protection.", steps: ["Prepare equipment", "Apply barrier and desiccant", "Vacuum and heat seal", "Inspect and crate"], benefits: ["Moisture protection", "Long-duration storage", "Export packing integration", "Sensitive equipment support"] },
];

export const industries = [
  ["Engineering & Machinery", "Skids, crates and high-load pallet systems for fabricated and machined equipment."],
  ["Automotive", "Repeatable pallet footprints and returnable handling solutions for components and assemblies."],
  ["Pharmaceutical", "Clean, controlled packaging options for equipment, materials and distribution environments."],
  ["Chemical", "CP-format and application-led wooden pallet solutions for chemical supply chains."],
  ["Logistics & 3PL", "Fast-handling 4-way pallets, palletisation and cargo-securing support."],
  ["Exporters", "Heat-treated timber packaging, crates and container securing for international shipments."],
  ["Electronics", "Plywood boxes, VCI and barrier packing for sensitive equipment and instruments."],
  ["Heavy Industry", "Reinforced bases, skids and crates for project cargo and dense industrial loads."],
];

export const navProducts = products.filter(({ slug }) => slug === "wooden-pallets").map(({ slug, name }) => ({ slug, name }));
export const navServices = services.map(({ slug, name }) => ({ slug, name }));
