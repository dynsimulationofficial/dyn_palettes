import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DYN PALLETS",
    short_name: "DYN PALLETS",
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
