"use client";

import React from "react";
import { X, CheckSquare, AlertTriangle, CheckCircle2 } from "lucide-react";
import { ColorItem } from "../types/palette";
import { getContrastRatio, getWCAGRating } from "../utils/colorUtils";

interface ContrastMatrixProps {
  isOpen: boolean;
  colors: ColorItem[];
  onClose: () => void;
}

export const ContrastMatrix: React.FC<ContrastMatrixProps> = ({
  isOpen,
  colors,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <CheckSquare className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold text-white">
                WCAG 2.1 Contrast Matrix & Accessibility
              </h2>
              <p className="text-xs text-slate-400">
                Ensuring readable foreground & background combinations
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid Matrix */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-emerald-950/40 border border-emerald-800/40 rounded-xl flex items-center gap-2 text-emerald-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold">AAA (7.0+)</span>
                <p className="text-[11px] text-emerald-400/80">Optimal contrast for all text sizes</p>
              </div>
            </div>
            <div className="p-3 bg-sky-950/40 border border-sky-800/40 rounded-xl flex items-center gap-2 text-sky-300">
              <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
              <div>
                <span className="font-bold">AA (4.5+)</span>
                <p className="text-[11px] text-sky-400/80">Standard compliance for normal text</p>
              </div>
            </div>
            <div className="p-3 bg-rose-950/40 border border-rose-800/40 rounded-xl flex items-center gap-2 text-rose-300">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <div>
                <span className="font-bold">Fail (&lt;3.0)</span>
                <p className="text-[11px] text-rose-400/80">Insufficient contrast, avoid pair</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-800 rounded-xl">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-950 text-slate-400 font-mono">
                <tr>
                  <th className="p-3 border-b border-slate-800">BG \ FG</th>
                  {colors.map((c) => (
                    <th key={c.id} className="p-3 border-b border-slate-800 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span
                          className="w-3 h-3 rounded-full border border-white/20 inline-block"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.hex}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {colors.map((bg) => (
                  <tr key={bg.id} className="hover:bg-slate-800/30">
                    <td className="p-3 font-mono font-semibold text-slate-300 bg-slate-950/50 flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full border border-white/20 inline-block"
                        style={{ backgroundColor: bg.hex }}
                      />
                      <span>{bg.hex}</span>
                    </td>
                    {colors.map((fg) => {
                      if (bg.id === fg.id) {
                        return (
                          <td key={fg.id} className="p-3 text-center text-slate-600 bg-slate-950/30">
                            ?
                          </td>
                        );
                      }
                      const ratio = getContrastRatio(bg.hex, fg.hex);
                      const rating = getWCAGRating(ratio);
                      const badgeBg =
                        rating.score === "AAA"
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                          : rating.score === "AA"
                          ? "bg-sky-500/20 text-sky-300 border-sky-500/30"
                          : rating.score === "AA+"
                          ? "bg-amber-500/20 text-amber-300 border-amber-500/30"
                          : "bg-rose-500/20 text-rose-300 border-rose-500/30";

                      return (
                        <td key={fg.id} className="p-3 text-center">
                          <div
                            className="p-2 rounded-lg border font-mono flex flex-col items-center gap-1"
                            style={{ backgroundColor: bg.hex, color: fg.hex }}
                          >
                            <span className="font-bold text-xs">Sample Text</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded font-bold border ${badgeBg}`}>
                              {ratio}:1 ({rating.score})
                            </span>
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
