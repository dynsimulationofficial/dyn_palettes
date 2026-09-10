"use client";

import React, { useState } from "react";
import { X, Copy, Check, Download, Share2 } from "lucide-react";
import confetti from "canvas-confetti";
import { ColorItem } from "../types/palette";
import { hexToRgb, rgbToHsl } from "../utils/colorUtils";

interface ExportModalProps {
  isOpen: boolean;
  colors: ColorItem[];
  onClose: () => void;
}

type ExportType = "tailwind" | "css" | "scss" | "json" | "url" | "svg";

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  colors,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<ExportType>("tailwind");
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getTailwindCode = () => {
    const obj: Record<string, string> = {};
    colors.forEach((c, idx) => {
      const key = (c.name || "color-" + (idx + 1))
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-");
      obj[key] = c.hex;
    });
    return `// tailwind.config.js / tailwind.config.ts\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: ${JSON.stringify(obj, null, 8)}\n    }\n  }\n};`;
  };

  const getCssCode = () => {
    const vars = colors
      .map((c, idx) => {
        const name = (c.name || "color-" + (idx + 1))
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-");
        return `  --${name}: ${c.hex};`;
      })
      .join("\n");
    return `:root {\n${vars}\n}`;
  };

  const getScssCode = () => {
    return colors
      .map((c, idx) => {
        const name = (c.name || "color-" + (idx + 1))
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-");
        return `$${name}: ${c.hex};`;
      })
      .join("\n");
  };

  const getJsonCode = () => {
    const arr = colors.map((c) => {
      const { r, g, b } = hexToRgb(c.hex);
      const { h, s, l } = rgbToHsl(r, g, b);
      return {
        hex: c.hex,
        name: c.name,
        rgb: { r, g, b },
        hsl: { h, s, l },
      };
    });
    return JSON.stringify(arr, null, 2);
  };

  const getShareableUrl = () => {
    if (typeof window === "undefined") return "";
    const hexCodes = colors.map((c) => c.hex.replace("#", "")).join("-");
    return `${window.location.origin}${window.location.pathname}#${hexCodes}`;
  };

  const getSvgCode = () => {
    const width = 800;
    const height = 400;
    const colWidth = width / colors.length;

    const rects = colors
      .map(
        (c, idx) =>
          `  <rect x="${idx * colWidth}" y="0" width="${colWidth}" height="${height}" fill="${c.hex}" />\n  <text x="${idx * colWidth + 20}" y="${height - 30}" fill="#ffffff" font-family="monospace" font-size="16" font-weight="bold">${c.hex}</text>`
      )
      .join("\n");

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n${rects}\n</svg>`;
  };

  const getCurrentCode = () => {
    switch (activeTab) {
      case "tailwind":
        return getTailwindCode();
      case "css":
        return getCssCode();
      case "scss":
        return getScssCode();
      case "json":
        return getJsonCode();
      case "url":
        return getShareableUrl();
      case "svg":
        return getSvgCode();
      default:
        return "";
    }
  };

  const handleCopy = () => {
    const code = getCurrentCode();
    navigator.clipboard.writeText(code);
    setCopied(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {}
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSvg = () => {
    const svgCode = getSvgCode();
    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dyn_palette.svg";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-400" />
            <h2 className="text-base font-bold text-white">Export Palette</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4 flex gap-1 border-b border-slate-800 overflow-x-auto">
          {[
            { id: "tailwind", label: "Tailwind CSS" },
            { id: "css", label: "CSS Variables" },
            { id: "scss", label: "SCSS" },
            { id: "json", label: "JSON" },
            { id: "url", label: "Share Link" },
            { id: "svg", label: "SVG Image" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as ExportType)}
              className={`px-3 py-2 text-xs font-semibold rounded-t-lg border-b-2 transition ${
                activeTab === tab.id
                  ? "border-indigo-500 text-indigo-400 bg-slate-800/60"
                  : "border-transparent text-slate-400 hover:text-white hover:bg-slate-800/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-y-auto">
          <div className="relative bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs text-slate-300 overflow-x-auto max-h-72">
            <pre className="whitespace-pre">{getCurrentCode()}</pre>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400">Ready to drop into your codebase</p>

          <div className="flex items-center gap-2">
            {activeTab === "svg" && (
              <button
                onClick={handleDownloadSvg}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                <Download className="w-4 h-4" />
                <span>Download SVG</span>
              </button>
            )}

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
