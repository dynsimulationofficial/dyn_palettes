"use client";

import React, { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import { generateShades, isDark } from "../utils/colorUtils";

interface ShadesModalProps {
  isOpen: boolean;
  baseHex: string | null;
  onClose: () => void;
  onSelectColor: (hex: string) => void;
}

export const ShadesModal: React.FC<ShadesModalProps> = ({
  isOpen,
  baseHex,
  onClose,
  onSelectColor,
}) => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const [copiedConfig, setCopiedConfig] = useState(false);

  if (!isOpen || !baseHex) return null;

  const shades = generateShades(baseHex);

  const handleCopyHex = (hex: string, step: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 1500);
  };

  const handleCopyTailwindConfig = () => {
    const configObj = shades.reduce((acc, s) => {
      acc[s.step] = s.hex;
      return acc;
    }, {} as Record<number, string>);
    const configStr = JSON.stringify(configObj, null, 2);
    navigator.clipboard.writeText(configStr);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="w-5 h-5 rounded-md border border-white/20 shadow-sm"
              style={{ backgroundColor: baseHex }}
            />
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Shade Scale for</span>
              <span className="font-mono text-indigo-400">{baseHex}</span>
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list of shades */}
        <div className="p-6 overflow-y-auto space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
            {shades.map((shade) => {
              const dark = isDark(shade.hex);
              return (
                <div
                  key={shade.step}
                  className="relative rounded-xl p-3 flex flex-col justify-between h-24 border border-black/10 transition-transform hover:scale-[1.02] shadow-sm cursor-pointer"
                  style={{ backgroundColor: shade.hex }}
                  onClick={() => handleCopyHex(shade.hex, shade.step)}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold font-mono px-1.5 py-0.5 rounded ${
                        dark ? "bg-black/30 text-white" : "bg-white/40 text-black"
                      }`}
                    >
                      {shade.step} {shade.isBase ? "(Base)" : ""}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectColor(shade.hex);
                      }}
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shadow-sm opacity-80 hover:opacity-100 transition ${
                        dark ? "bg-white text-slate-900" : "bg-slate-900 text-white"
                      }`}
                    >
                      Use
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className={`font-mono text-sm font-bold ${
                        dark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {shade.hex}
                    </span>
                    {copiedStep === shade.step ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy
                        className={`w-3.5 h-3.5 opacity-60 ${
                          dark ? "text-white" : "text-slate-900"
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400">Click any swatch to copy HEX code</p>
          <button
            onClick={handleCopyTailwindConfig}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition"
          >
            {copiedConfig ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copied Tailwind JSON!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Tailwind Scale</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
