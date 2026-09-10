"use client";

import React, { useState } from "react";
import {
  X,
  Layout,
  BarChart3,
  Users,
  CreditCard,
  Bell,
  Search,
  ArrowUpRight,
  Sparkles,
  Smartphone,
  Play,
  Heart,
} from "lucide-react";
import { ColorItem } from "../types/palette";

interface PreviewModalProps {
  isOpen: boolean;
  colors: ColorItem[];
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  colors,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "landing" | "mobile">("dashboard");

  if (!isOpen || colors.length === 0) return null;

  const primary = colors[0]?.hex || "#4F46E5";
  const secondary = colors[1]?.hex || "#06B6D4";
  const accent = colors[2]?.hex || "#EC4899";
  const neutral1 = colors[3]?.hex || "#F3F4F6";
  const neutral2 = colors[4]?.hex || "#1E293B";

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Layout className="w-5 h-5 text-sky-400" />
            <div>
              <h2 className="text-base font-bold text-white">Live UI Mockup Playground</h2>
              <p className="text-xs text-slate-400">See your active palette applied in real interfaces</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab("dashboard")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === "dashboard" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab("landing")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === "landing" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                Landing Page
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === "mobile" ? "bg-indigo-600 text-white shadow" : "text-slate-400 hover:text-white"
                }`}
              >
                Mobile App
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mockup Canvas */}
        <div className="p-6 overflow-y-auto bg-slate-950 flex items-center justify-center min-h-[460px]">
          {activeTab === "dashboard" && (
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md"
                    style={{ backgroundColor: primary }}
                  >
                    D
                  </div>
                  <span className="font-bold text-sm text-white">DynAnalytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-lg border border-slate-700">
                    <Search className="w-3.5 h-3.5" />
                    <span>Search metrics...</span>
                  </div>
                  <button
                    className="p-1.5 rounded-lg text-white"
                    style={{ backgroundColor: secondary }}
                  >
                    <Bell className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-5 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>Total Revenue</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                        style={{ backgroundColor: primary }}
                      >
                        +24.5%
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white mt-2">$84,320</div>
                    <p className="text-[11px] text-slate-500 mt-1">vs. last month ($67,700)</p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>Active Subscribers</span>
                      <Users className="w-4 h-4" style={{ color: secondary }} />
                    </div>
                    <div className="text-2xl font-black text-white mt-2">12,840</div>
                    <p className="text-[11px] text-slate-500 mt-1">+1,200 new today</p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/60 p-4 rounded-xl flex flex-col justify-between">
                    <div className="flex items-center justify-between text-slate-400 text-xs font-medium">
                      <span>Conversion Rate</span>
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-bold text-white"
                        style={{ backgroundColor: accent }}
                      >
                        4.8%
                      </span>
                    </div>
                    <div className="text-2xl font-black text-white mt-2">32.4%</div>
                    <p className="text-[11px] text-slate-500 mt-1">Above target goal</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" style={{ color: primary }} />
                      <span>Unlock Advanced Palette Insights</span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      Export styles directly to React, Vue, Svelte, or Figma tokens with 1 click.
                    </p>
                  </div>
                  <button
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white shadow-md flex items-center gap-1.5 transition hover:opacity-90"
                    style={{ backgroundColor: primary }}
                  >
                    <span>Upgrade Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "landing" && (
            <div className="w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-12 text-center relative">
              <div
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: primary }}
              />

              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/80 text-xs font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: accent }} />
                  <span>Next Generation Color Harmonies</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Design Better Products with{" "}
                  <span
                    className="bg-clip-text text-transparent bg-gradient-to-r"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${primary}, ${secondary}, ${accent})`,
                    }}
                  >
                    Dynamic Colors
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-slate-300">
                  Generate, test, analyze WCAG contrast, simulate color blindness, and export directly to
                  Tailwind CSS in seconds.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    className="px-6 py-3 rounded-xl text-sm font-bold text-white shadow-lg shadow-indigo-500/20 hover:scale-105 transition"
                    style={{ backgroundColor: primary }}
                  >
                    Get Started Free
                  </button>
                  <button
                    className="px-6 py-3 rounded-xl text-sm font-semibold border border-slate-700 bg-slate-800 text-white hover:bg-slate-700 transition"
                  >
                    View Components
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mobile" && (
            <div className="w-72 bg-slate-900 border-4 border-slate-800 rounded-[2.5rem] p-4 shadow-2xl flex flex-col gap-4">
              <div
                className="rounded-2xl p-4 text-white shadow-lg relative overflow-hidden flex flex-col justify-between h-40"
                style={{
                  background: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                }}
              >
                <div className="flex justify-between items-center text-xs opacity-90">
                  <span className="font-semibold tracking-wider uppercase">DynPay Card</span>
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-mono text-sm tracking-widest">???? 8942</div>
                  <div className="flex justify-between items-end mt-2">
                    <div>
                      <div className="text-[9px] opacity-75 uppercase">Cardholder</div>
                      <div className="text-xs font-bold">ALEX DEV</div>
                    </div>
                    <div className="text-sm font-black">$14,250.00</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: accent }}
                  >
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white truncate max-w-[100px]">Neon Wave</div>
                    <div className="text-[10px] text-slate-400">Electronic</div>
                  </div>
                </div>
                <button
                  className="p-2 rounded-full text-white shadow"
                  style={{ backgroundColor: primary }}
                >
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Active Theme:</span>
            {colors.map((c) => (
              <span
                key={c.id}
                className="w-4 h-4 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: c.hex }}
                title={c.hex}
              />
            ))}
          </div>
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
