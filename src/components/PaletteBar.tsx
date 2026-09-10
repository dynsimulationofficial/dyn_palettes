"use client";

import React, { useState } from "react";
import {
  Lock,
  Unlock,
  Copy,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Trash2,
  Check,
  Palette,
} from "lucide-react";
import { ColorItem, VisionMode } from "../types/palette";
import {
  isDark,
  simulateColorBlindness,
  hexToRgb,
  rgbToHsl,
  getColorName,
} from "../utils/colorUtils";

interface PaletteBarProps {
  colors: ColorItem[];
  visionMode: VisionMode;
  onToggleLock: (id: string) => void;
  onColorChange: (id: string, newHex: string) => void;
  onMoveColor: (index: number, direction: "left" | "right") => void;
  onRemoveColor: (id: string) => void;
  onOpenShades: (hex: string) => void;
}

export const PaletteBar: React.FC<PaletteBarProps> = ({
  colors,
  visionMode,
  onToggleLock,
  onColorChange,
  onMoveColor,
  onRemoveColor,
  onOpenShades,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="flex-1 flex flex-col md:flex-row w-full h-full min-h-[500px] overflow-hidden select-none">
      {colors.map((color, index) => {
        const displayHex = simulateColorBlindness(color.hex, visionMode);
        const dark = isDark(displayHex);
        const textColorClass = dark ? "text-white" : "text-slate-900";
        const subTextColorClass = dark ? "text-white/75" : "text-slate-900/75";
        const btnBgClass = dark
          ? "bg-white/10 hover:bg-white/20 active:bg-white/30"
          : "bg-black/10 hover:bg-black/20 active:bg-black/30";

        const { r, g, b } = hexToRgb(color.hex);
        const { h, s, l } = rgbToHsl(r, g, b);

        return (
          <div
            key={color.id}
            className="relative flex-1 group transition-all duration-300 flex flex-col justify-between p-4 md:p-6 border-b md:border-b-0 md:border-r border-black/5 last:border-0"
            style={{ backgroundColor: displayHex }}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between opacity-90 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {/* Order Controls */}
              <div className="flex items-center gap-1">
                {index > 0 && (
                  <button
                    onClick={() => onMoveColor(index, "left")}
                    title="Move left"
                    className={`p-1.5 rounded-full ${btnBgClass} ${textColorClass} transition`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                )}
                {index < colors.length - 1 && (
                  <button
                    onClick={() => onMoveColor(index, "right")}
                    title="Move right"
                    className={`p-1.5 rounded-full ${btnBgClass} ${textColorClass} transition`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Action Buttons: Shades & Remove */}
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onOpenShades(color.hex)}
                  title="View tint & shade scale"
                  className={`p-1.5 rounded-full ${btnBgClass} ${textColorClass} transition`}
                >
                  <Sliders className="w-4 h-4" />
                </button>

                {colors.length > 3 && (
                  <button
                    onClick={() => onRemoveColor(color.id)}
                    title="Remove color"
                    className={`p-1.5 rounded-full ${btnBgClass} text-rose-500 hover:text-rose-600 transition`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Center Lock Button */}
            <div className="flex items-center justify-center my-auto py-2">
              <button
                onClick={() => onToggleLock(color.id)}
                title={color.isLocked ? "Unlock color" : "Lock color"}
                className={`p-3.5 rounded-full transition transform active:scale-95 shadow-md ${
                  color.isLocked
                    ? "bg-slate-950 text-white shadow-xl ring-2 ring-white/40 opacity-100 scale-105"
                    : `${btnBgClass} ${textColorClass} opacity-70 md:opacity-0 group-hover:opacity-100`
                }`}
              >
                {color.isLocked ? (
                  <Lock className="w-5 h-5 text-amber-400" />
                ) : (
                  <Unlock className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Bottom Info: Hex, Name, Picker, Quick Copy */}
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <div className="flex-1 min-w-0">
                  {/* Color Name */}
                  <p className={`text-xs font-semibold tracking-wide uppercase truncate ${subTextColorClass}`}>
                    {color.name || getColorName(color.hex)}
                  </p>

                  {/* Hex Code (Click to copy) */}
                  <button
                    onClick={() => handleCopy(color.hex, color.id)}
                    title="Click to copy HEX"
                    className={`text-xl md:text-2xl font-black tracking-wider uppercase flex items-center gap-2 group/hex truncate ${textColorClass}`}
                  >
                    <span>{color.hex}</span>
                    {copiedId === color.id ? (
                      <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 opacity-0 group-hover/hex:opacity-100 transition" />
                    )}
                  </button>
                </div>

                {/* Color Picker trigger */}
                <label
                  title="Choose custom color"
                  className={`relative p-2.5 rounded-xl cursor-pointer shadow-sm ${btnBgClass} ${textColorClass} transition hover:scale-105`}
                >
                  <Palette className="w-4 h-4" />
                  <input
                    type="color"
                    value={color.hex}
                    onChange={(e) => onColorChange(color.id, e.target.value.toUpperCase())}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </label>
              </div>

              {/* RGB / HSL Sub values */}
              <div className={`text-[11px] font-mono flex justify-between gap-1 pt-1.5 border-t border-black/10 dark:border-white/10 ${subTextColorClass}`}>
                <span>rgb({r},{g},{b})</span>
                <span>hsl({h}?,{s}%,{l}%)</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
