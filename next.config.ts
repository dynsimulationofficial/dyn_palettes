import type { NextConfig } from "next";

/**
 * Canonical host. Everything else 308s here so Google only ever crawls one host.
 * Keep in sync with NEXT_PUBLIC_SITE_URL and src/data/config.ts.
 */
const CANONICAL_HOST = "www.dynpallets.com";
const LEGACY_HOSTS = ["dynpallets.com"];

/**
 * The product catalogue moved from flat (/products/<slug>) to nested
 * (/products/<category>/<slug>) in commit e7838fa, which deleted
 * src/app/products/[slug]/page.tsx without leaving redirects behind.
 * Google still crawls the flat URLs, so they 404 — 7.48% of all crawl requests.
 */
const LEGACY_PRODUCT_ROUTES: Record<string, string> = {
  "pinewood-pallets": "wooden-pallets",
  "euro-pallets": "wooden-pallets",
  "export-pallets": "wooden-pallets",
  "heat-treated-pallets": "wooden-pallets",
  "two-way-pallets": "wooden-pallets",
  "four-way-pallets": "wooden-pallets",
  "heavy-duty-pallets": "wooden-pallets",
  "wooden-boxes": "wooden-boxes-crates",
  "plywood-boxes": "wooden-boxes-crates",
  "wooden-crates": "wooden-boxes-crates",
};

const nextConfig: NextConfig = {
  images: {
    // Unsplash art direction used on the home, about and gallery pages.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  async redirects() {
    return [
      // Apex domain -> www. Keeps the whole site on one host so impressions,
      // links and crawl budget stop being split across two.
      ...LEGACY_HOSTS.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: `https://${CANONICAL_HOST}/:path*`,
        permanent: true,
      })),

      // Flat -> nested product URLs.
      ...Object.entries(LEGACY_PRODUCT_ROUTES).map(([slug, category]) => ({
        source: `/products/${slug}`,
        destination: `/products/${category}/${slug}`,
        permanent: true,
      })),

      // Retired route still in Google's index.
      { source: "/catalogue", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
