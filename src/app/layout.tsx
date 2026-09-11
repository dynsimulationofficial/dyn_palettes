import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AmbientEffects } from "@/components/Motion";

export const metadata: Metadata = {
  title: { default: "DYN PALLETS | Industrial Wooden Packaging", template: "%s | DYN PALLETS" },
  description: "Industrial pallets, wooden boxes, crates, export packing, heat treatment, lashing and custom packaging solutions for B2B requirements.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AmbientEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
