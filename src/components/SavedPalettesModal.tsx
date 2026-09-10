"use client";

import React, { useState } from "react";
import { X, Bookmark, Trash2, Check, ArrowRight, Download } from "lucide-react";
import { SavedPalette, ColorItem } from "../types/palette";

interface SavedPalettesModalProps {
  isOpen: boolean;
  savedPalettes: SavedPalette[];
  currentColors: ColorItem[];
  onClose: () => void;
  onSaveCurrent: (name: string) => void;
  onRestorePalette: (palette: SavedPalette) => void;
  onDeletePalette: (id: string) => void;
}

export const SavedPalettesModal: React.FC<SavedPalettesModalProps> = ({
  isOpen,
  savedPalettes,
  currentColors,
  onClose,
  onSaveCurrent,
  onRestorePalette,
  onDeletePalette,
}) => {
  const [newPaletteName, setNewPaletteName] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newPaletteName.trim() || "Palette #" + (savedPalettes.length + 1);
    onSaveCurrent(name);
    setNewPaletteName("");
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleExportAll = () => {
    const dataStr = JSON.stringify(savedPalettes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dyn_palettes_library.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-pink-400" />
            <h2 className="text-base font-bold text-white">Palette Library & Favorites</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Save Current Section */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/40">
          <form onSubmit={handleSave} className="flex gap-2">
            <input
              type="text"
              placeholder="Name for active palette..."
              value={newPaletteName}
              onChange={(e) => setNewPaletteName(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-xs font-semibold shadow flex items-center gap-1.5 transition"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save Current</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Saved List */}
        <div className="p-6 overflow-y-auto space-y-3">
          {savedPalettes.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              No saved palettes yet. Save your favorite color combinations above!
            </div>
          ) : (
            savedPalettes.map((item) => (
              <div
                key={item.id}
                className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-3.5 flex items-center justify-between gap-4 hover:border-slate-600 transition"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                    <span className="text-[10px] text-slate-400">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Swatches Bar */}
                  <div className="flex h-8 rounded-lg overflow-hidden border border-slate-700 shadow-inner">
                    {item.colors.map((hex, idx) => (
                      <div
                        key={idx}
                        className="flex-1 hover:opacity-90 transition"
                        style={{ backgroundColor: hex }}
                        title={hex}
                      />
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      onRestorePalette(item);
                      onClose();
                    }}
                    title="Load this palette"
                    className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1 transition"
                  >
                    <span>Load</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onDeletePalette(item.id)}
                    title="Delete palette"
                    className="p-2 rounded-lg bg-slate-700/50 hover:bg-rose-900/40 text-slate-400 hover:text-rose-400 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {savedPalettes.length} saved palette{savedPalettes.length !== 1 ? "s" : ""}
          </span>
          {savedPalettes.length > 0 && (
            <button
              onClick={handleExportAll}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Library JSON</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
