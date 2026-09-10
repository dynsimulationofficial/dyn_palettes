"use client";

import React, { useState, useRef } from "react";
import { X, Upload, Sparkles, Check, Image as ImageIcon } from "lucide-react";
import { rgbToHex, getColorName } from "../utils/colorUtils";
import { ColorItem } from "../types/palette";

interface ImageExtractorProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyPalette: (colors: ColorItem[]) => void;
}

const SAMPLE_IMAGES = [
  {
    name: "Neon Cyberpunk",
    url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=80",
  },
  {
    name: "Golden Sunset",
    url: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&q=80",
  },
  {
    name: "Misty Forest",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80",
  },
  {
    name: "Pastel Ocean",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  },
];

export const ImageExtractor: React.FC<ImageExtractorProps> = ({
  isOpen,
  onClose,
  onApplyPalette,
}) => {
  const [imageUrl, setImageUrl] = useState<string>(SAMPLE_IMAGES[0].url);
  const [extractedHexes, setExtractedHexes] = useState<string[]>([]);
  const [isExtracting, setIsExtracting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const extractColorsFromImage = (src: string) => {
    setIsExtracting(true);
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsExtracting(false);
        return;
      }

      const sampleSize = 64;
      canvas.width = sampleSize;
      canvas.height = sampleSize;
      ctx.drawImage(img, 0, 0, sampleSize, sampleSize);

      const imgData = ctx.getImageData(0, 0, sampleSize, sampleSize).data;
      const colorCounts: Record<string, { count: number; r: number; g: number; b: number }> = {};

      for (let i = 0; i < imgData.length; i += 16) {
        const r = imgData[i];
        const g = imgData[i + 1];
        const b = imgData[i + 2];
        const a = imgData[i + 3];

        if (a < 128) continue;

        const qr = Math.round(r / 32) * 32;
        const qg = Math.round(g / 32) * 32;
        const qb = Math.round(b / 32) * 32;
        const key = `${qr},${qg},${qb}`;

        if (!colorCounts[key]) {
          colorCounts[key] = { count: 1, r, g, b };
        } else {
          colorCounts[key].count += 1;
        }
      }

      const sorted = Object.values(colorCounts)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5)
        .map((c) => rgbToHex(c.r, c.g, c.b).toUpperCase());

      while (sorted.length < 5) {
        sorted.push(sorted[0] || "#3B82F6");
      }

      setExtractedHexes(sorted);
      setIsExtracting(false);
    };

    img.onerror = () => {
      setIsExtracting(false);
    };
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const url = event.target?.result as string;
        setImageUrl(url);
        extractColorsFromImage(url);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = () => {
    if (extractedHexes.length === 0) return;
    const newPalette: ColorItem[] = extractedHexes.map((hex, idx) => ({
      id: "extracted_" + idx + "_" + Date.now(),
      hex,
      isLocked: false,
      name: getColorName(hex),
    }));
    onApplyPalette(newPalette);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-emerald-400" />
            <h2 className="text-base font-bold text-white">Extract Palette from Image</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Choose Sample Image or Upload Your Own
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
              {SAMPLE_IMAGES.map((sample) => (
                <button
                  key={sample.name}
                  onClick={() => {
                    setImageUrl(sample.url);
                    extractColorsFromImage(sample.url);
                  }}
                  className={`relative rounded-xl overflow-hidden aspect-video border-2 transition ${
                    imageUrl === sample.url ? "border-indigo-500 shadow-md ring-2 ring-indigo-500/30" : "border-slate-700 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={sample.url} alt={sample.name} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[10px] font-medium text-white px-1.5 py-0.5 truncate">
                    {sample.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 py-3 px-4 border-2 border-dashed border-slate-700 hover:border-indigo-500 rounded-xl bg-slate-800/40 hover:bg-slate-800 flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 transition"
              >
                <Upload className="w-4 h-4 text-indigo-400" />
                <span>Upload Custom Image</span>
              </button>
              <button
                onClick={() => extractColorsFromImage(imageUrl)}
                disabled={isExtracting}
                className="px-4 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-white text-xs font-semibold flex items-center gap-1.5 shadow transition disabled:opacity-50"
              >
                <Sparkles className="w-4 h-4" />
                <span>{isExtracting ? "Extracting..." : "Re-sample"}</span>
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-2">
              Extracted Colors
            </label>
            {extractedHexes.length > 0 ? (
              <div className="grid grid-cols-5 h-20 rounded-xl overflow-hidden border border-slate-700 shadow-inner">
                {extractedHexes.map((hex, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-2 text-center"
                    style={{ backgroundColor: hex }}
                  >
                    <span className="text-[11px] font-mono font-bold px-1 py-0.5 rounded bg-black/40 text-white shadow">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-20 rounded-xl border border-slate-800 bg-slate-950 flex items-center justify-center text-xs text-slate-500">
                Select an image above to extract dominant colors
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={extractedHexes.length === 0}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white text-xs font-semibold shadow transition"
          >
            <Check className="w-4 h-4" />
            <span>Apply to Active Palette</span>
          </button>
        </div>
      </div>
    </div>
  );
};
