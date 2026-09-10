import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DynPalettes - Dynamic Color Palette Generator",
  description: "Generate, customize, analyze and export dynamic color palettes with Tailwind CSS support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-slate-950 text-slate-100 min-h-screen select-none">
        {children}
      </body>
    </html>
  );
}
