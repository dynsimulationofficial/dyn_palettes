"use client";

import React from "react";
import {
  Sparkles,
  Layers,
  Eye,
  Image as ImageIcon,
  Layout,
  CheckSquare,
  Bookmark,
  Share2,
  Undo2,
  Redo2,
  Plus,
  Minus,
} from "lucide-react";
import { HarmonyMode, VisionMode } from "../types/palette";

interface HeaderProps {
  harmony: HarmonyMode;
  onHarmonyChange: (mode: HarmonyMode) => void;
  colorCount: number;
  onColorCountChange: (count: number) => void;
  visionMode: VisionMode;
  onVisionModeChange: (mode: VisionMode) => void;
  onGenerate: () => void;
  onUndo: () => void;
  onRedo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  onOpenImageExtractor: () => void;
  onOpenPreview: () => void;
  onOpenContrast: () => void;
  onOpenSaved: () => void;
  onOpenExport: () => void;
}

const HARMONY_OPTIONS: { label: string; value: HarmonyMode }[] = [
  { label: "Random / Dynamic", value: "random" },
  { label: "Analogous", value: "analogous" },
  { label: "Monochromatic", value: "monochromatic" },
  { label: "Complementary", value: "complementary" },
  { label: "Split Complementary", value: "split-complementary" },
  { label: "Triadic", value: "triadic" },
  { label: "Tetradic", value: "tetradic" },
  { label: "Pastel Dream", value: "pastel" },
  { label: "Cyberpunk Neon", value: "neon" },
  { label: "Warm Sunset", value: "warm" },
  { label: "Cool Ocean", value: "cool" },
  { label: "Earthy Forest", value: "earthy" },
];

const VISION_OPTIONS: { label: string; value: VisionMode }[] = [
  { label: "Normal Vision", value: "normal" },
  { label: "Protanopia (Red-Blind)", value: "protanopia" },
  { label: "Deuteranopia (Green-Blind)", value: "deuteranopia" },
  { label: "Tritanopia (Blue-Blind)", value: "tritanopia" },
  { label: "Achromatopsia (Monochrome)", value: "achromatopsia" },
];

export const Header: React.FC<HeaderProps> = ({
  harmony,
  onHarmonyChange,
  colorCount,
  onColorCountChange,
  visionMode,
  onVisionModeChange,
  onGenerate,
  onUndo,
  onRedo,
  canUndo,
  canRedo,
  onOpenImageExtractor,
  onOpenPreview,
  onOpenContrast,
  onOpenSaved,
  onOpenExport,
}) => {
  return (
    <header className="bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 px-4 py-3 flex flex-wrap items-center justify-between gap-3 sticky top-0 z-30 shadow-lg">
      {/* Brand & Title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-md shadow-purple-500/20">
          <Layers className="w-5 h-5 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
            DynPalettes
          </h1>
          <p className="text-xs text-slate-400 hidden sm:block">
            Intelligent Color Palette Generator
          </p>
        </div>
      </div>

      {/* Center Controls: Harmony, Count, Vision, Generate */}
      <div className="flex items-center flex-wrap gap-2">
        {/* Undo / Redo */}
        <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition"
          >
            <Undo2 className="w-4 h-4" />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-transparent transition"
          >
            <Redo2 className="w-4 h-4" />
          </button>
        </div>

        {/* Harmony Mode Dropdown */}
        <div className="relative">
          <select
            value={harmony}
            onChange={(e) => onHarmonyChange(e.target.value as HarmonyMode)}
            className="bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700 rounded-lg px-3 py-2 pr-7 appearance-none hover:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition"
          >
            {HARMONY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-800 text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
            ?
          </div>
        </div>

        {/* Color Count Stepper */}
        <div className="flex items-center bg-slate-800 rounded-lg border border-slate-700 px-1.5 py-0.5 gap-1">
          <button
            onClick={() => onColorCountChange(Math.max(3, colorCount - 1))}
            disabled={colorCount <= 3}
            title="Remove color swatch"
            className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 transition"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-semibold px-1 text-indigo-300 min-w-[20px] text-center">
            {colorCount}
          </span>
          <button
            onClick={() => onColorCountChange(Math.min(8, colorCount + 1))}
            disabled={colorCount >= 8}
            title="Add color swatch"
            className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 transition"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Vision Mode Simulator */}
        <div className="relative hidden md:block">
          <select
            value={visionMode}
            onChange={(e) => onVisionModeChange(e.target.value as VisionMode)}
            className="bg-slate-800 text-xs font-medium text-slate-200 border border-slate-700 rounded-lg px-3 py-2 pr-7 appearance-none hover:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition"
          >
            {VISION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-slate-800 text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <Eye className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
        </div>

        {/* Big Generate Button */}
        <button
          onClick={onGenerate}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg shadow-md shadow-indigo-500/25 active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generate</span>
          <span className="hidden sm:inline-block bg-white/20 text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider">
            Space
          </span>
        </button>
      </div>

      {/* Right Tools: Image Extractor, UI Mockup, Contrast, Saved, Export */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={onOpenImageExtractor}
          title="Extract palette from image"
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-medium transition"
        >
          <ImageIcon className="w-4 h-4 text-emerald-400" />
          <span className="hidden lg:inline">Image</span>
        </button>

        <button
          onClick={onOpenPreview}
          title="Preview palette on live UI mockups"
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-medium transition"
        >
          <Layout className="w-4 h-4 text-sky-400" />
          <span className="hidden lg:inline">Mockup</span>
        </button>

        <button
          onClick={onOpenContrast}
          title="WCAG Contrast & Accessibility Matrix"
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-medium transition"
        >
          <CheckSquare className="w-4 h-4 text-amber-400" />
          <span className="hidden lg:inline">WCAG</span>
        </button>

        <button
          onClick={onOpenSaved}
          title="Saved Palettes & Favorites"
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white flex items-center gap-1.5 text-xs font-medium transition"
        >
          <Bookmark className="w-4 h-4 text-pink-400" />
          <span className="hidden lg:inline">Library</span>
        </button>

        <button
          onClick={onOpenExport}
          title="Export palette as Tailwind, CSS, JSON, SVG"
          className="p-2 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white flex items-center gap-1.5 text-xs font-semibold shadow-sm transition"
        >
          <Share2 className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>
    </header>
  );
};
