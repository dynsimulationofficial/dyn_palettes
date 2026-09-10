"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Header } from "../components/Header";
import { PaletteBar } from "../components/PaletteBar";
import { ShadesModal } from "../components/ShadesModal";
import { ImageExtractor } from "../components/ImageExtractor";
import { ContrastMatrix } from "../components/ContrastMatrix";
import { PreviewModal } from "../components/PreviewModal";
import { ExportModal } from "../components/ExportModal";
import { SavedPalettesModal } from "../components/SavedPalettesModal";
import { ColorItem, HarmonyMode, VisionMode, SavedPalette } from "../types/palette";
import { generatePalette, getInitialPalette, getColorName } from "../utils/colorUtils";

const LOCAL_STORAGE_KEY = "dyn_palettes_saved_v1";

export default function Home() {
  const [colors, setColors] = useState<ColorItem[]>([]);
  const [history, setHistory] = useState<ColorItem[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [harmony, setHarmony] = useState<HarmonyMode>("random");
  const [visionMode, setVisionMode] = useState<VisionMode>("normal");
  const [colorCount, setColorCount] = useState<number>(5);

  // Modals state
  const [activeShadeHex, setActiveShadeHex] = useState<string | null>(null);
  const [isImageExtractorOpen, setIsImageExtractorOpen] = useState(false);
  const [isContrastOpen, setIsContrastOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSavedOpen, setIsSavedOpen] = useState(false);

  // Saved Palettes
  const [savedPalettes, setSavedPalettes] = useState<SavedPalette[]>([]);

  // Load from URL hash or LocalStorage on mount
  useEffect(() => {
    let initial: ColorItem[] = [];

    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const hexList = hash.split("-").map((h) => "#" + h);
      if (hexList.length >= 3 && hexList.every((h) => /^#[0-9A-Fa-f]{6}$/.test(h))) {
        initial = hexList.map((hex, idx) => ({
          id: "url_col_" + idx,
          hex: hex.toUpperCase(),
          isLocked: false,
          name: getColorName(hex),
        }));
      }
    }

    if (initial.length === 0) {
      initial = getInitialPalette();
    }

    setColors(initial);
    setColorCount(initial.length);
    setHistory([initial]);
    setHistoryIndex(0);

    try {
      const local = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (local) {
        setSavedPalettes(JSON.parse(local));
      }
    } catch {}
  }, []);

  const pushToHistory = (newColors: ColorItem[]) => {
    const nextHistory = history.slice(0, historyIndex + 1);
    nextHistory.push(newColors);
    setHistory(nextHistory);
    setHistoryIndex(nextHistory.length - 1);
    setColors(newColors);
  };

  const handleGenerate = useCallback(() => {
    const nextColors = generatePalette(colorCount, harmony, colors);
    pushToHistory(nextColors);
  }, [colorCount, harmony, colors, history, historyIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (e.code === "Space") {
        e.preventDefault();
        handleGenerate();
      } else if (e.ctrlKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        handleUndo();
      } else if (e.ctrlKey && e.key.toLowerCase() === "y") {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleGenerate]);

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prev = history[historyIndex - 1];
      setHistoryIndex(historyIndex - 1);
      setColors(prev);
      setColorCount(prev.length);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const next = history[historyIndex + 1];
      setHistoryIndex(historyIndex + 1);
      setColors(next);
      setColorCount(next.length);
    }
  };

  const handleToggleLock = (id: string) => {
    setColors((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isLocked: !c.isLocked } : c))
    );
  };

  const handleColorChange = (id: string, newHex: string) => {
    const updated = colors.map((c) =>
      c.id === id ? { ...c, hex: newHex, name: getColorName(newHex) } : c
    );
    pushToHistory(updated);
  };

  const handleMoveColor = (index: number, direction: "left" | "right") => {
    const targetIndex = direction === "left" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= colors.length) return;
    const next = [...colors];
    const [moved] = next.splice(index, 1);
    next.splice(targetIndex, 0, moved);
    pushToHistory(next);
  };

  const handleRemoveColor = (id: string) => {
    if (colors.length <= 3) return;
    const next = colors.filter((c) => c.id !== id);
    setColorCount(next.length);
    pushToHistory(next);
  };

  const handleColorCountChange = (count: number) => {
    setColorCount(count);
    if (count > colors.length) {
      const next = generatePalette(count, harmony, colors);
      pushToHistory(next);
    } else if (count < colors.length) {
      const next = colors.slice(0, count);
      pushToHistory(next);
    }
  };

  const handleApplyPalette = (newColors: ColorItem[]) => {
    setColorCount(newColors.length);
    pushToHistory(newColors);
  };

  const handleSaveCurrent = (name: string) => {
    const newSaved: SavedPalette = {
      id: "saved_" + Date.now(),
      name,
      colors: colors.map((c) => c.hex),
      createdAt: Date.now(),
    };
    const updated = [newSaved, ...savedPalettes];
    setSavedPalettes(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleDeleteSaved = (id: string) => {
    const updated = savedPalettes.filter((p) => p.id !== id);
    setSavedPalettes(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch {}
  };

  const handleRestoreSaved = (palette: SavedPalette) => {
    const restored: ColorItem[] = palette.colors.map((hex, idx) => ({
      id: "restored_" + idx + "_" + Date.now(),
      hex,
      isLocked: false,
      name: getColorName(hex),
    }));
    setColorCount(restored.length);
    pushToHistory(restored);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden">
      {/* Top Navigation Bar */}
      <Header
        harmony={harmony}
        onHarmonyChange={setHarmony}
        colorCount={colorCount}
        onColorCountChange={handleColorCountChange}
        visionMode={visionMode}
        onVisionModeChange={setVisionMode}
        onGenerate={handleGenerate}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onOpenImageExtractor={() => setIsImageExtractorOpen(true)}
        onOpenPreview={() => setIsPreviewOpen(true)}
        onOpenContrast={() => setIsContrastOpen(true)}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Main Interactive Palette Canvas */}
      <main className="flex-1 flex w-full h-[calc(100vh-65px)] overflow-hidden">
        <PaletteBar
          colors={colors}
          visionMode={visionMode}
          onToggleLock={handleToggleLock}
          onColorChange={handleColorChange}
          onMoveColor={handleMoveColor}
          onRemoveColor={handleRemoveColor}
          onOpenShades={(hex) => setActiveShadeHex(hex)}
        />
      </main>

      {/* Modals & Tools */}
      <ShadesModal
        isOpen={Boolean(activeShadeHex)}
        baseHex={activeShadeHex}
        onClose={() => setActiveShadeHex(null)}
        onSelectColor={(hex) => {
          if (colors.length > 0) {
            handleColorChange(colors[0].id, hex);
          }
          setActiveShadeHex(null);
        }}
      />

      <ImageExtractor
        isOpen={isImageExtractorOpen}
        onClose={() => setIsImageExtractorOpen(false)}
        onApplyPalette={handleApplyPalette}
      />

      <ContrastMatrix
        isOpen={isContrastOpen}
        colors={colors}
        onClose={() => setIsContrastOpen(false)}
      />

      <PreviewModal
        isOpen={isPreviewOpen}
        colors={colors}
        onClose={() => setIsPreviewOpen(false)}
      />

      <ExportModal
        isOpen={isExportOpen}
        colors={colors}
        onClose={() => setIsExportOpen(false)}
      />

      <SavedPalettesModal
        isOpen={isSavedOpen}
        savedPalettes={savedPalettes}
        currentColors={colors}
        onClose={() => setIsSavedOpen(false)}
        onSaveCurrent={handleSaveCurrent}
        onRestorePalette={handleRestoreSaved}
        onDeletePalette={handleDeleteSaved}
      />
    </div>
  );
}
