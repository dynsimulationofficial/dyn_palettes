import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DYN Pallets",
    short_name: "DYN Pallets",
    start_url: "/",
    display: "standalone",
    background_color: "#0d130f",
    theme_color: "#d98643",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
