"use client";

import { useEffect } from "react";

/**
 * Pointer effects for the exact service pages (progressive enhancement only).
 *
 * - Cards (lists, numbered steps, quick facts): sets --fx-x / --fx-y on the
 *   hovered card so the CSS spotlight follows the cursor.
 * - Hero photo: sets --fx-dx / --fx-dy (px from centre), --fx-rotate (3D tilt)
 *   and --fx-cx / --fx-cy (0–1000, used by the HUD coordinate readout).
 *
 * One passive pointermove listener, throttled to one update per frame. It does
 * nothing on touch devices or when the visitor prefers reduced motion, and the
 * page renders exactly the same without it.
 */
const CARD_SELECTOR = ".exact-service-list li, .exact-service-numbered li, .exact-service-fact";
const VISUAL_SELECTOR = ".exact-service-hero-visual";
const VISUAL_PROPS = ["--fx-dx", "--fx-dy", "--fx-cx", "--fx-cy", "--fx-rotate"];
const MAX_TILT_DEG = 3.5;

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

export function ExactServiceFx() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let lastEvent: PointerEvent | null = null;
    let activeVisual: HTMLElement | null = null;

    const resetVisual = () => {
      if (!activeVisual) return;
      activeVisual.removeAttribute("data-fx-active");
      VISUAL_PROPS.forEach((prop) => activeVisual?.style.removeProperty(prop));
      activeVisual = null;
    };

    const update = () => {
      frame = 0;
      const event = lastEvent;
      if (!event) return;

      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>(CARD_SELECTOR) ?? null;
      const visual = target?.closest<HTMLElement>(VISUAL_SELECTOR) ?? null;

      // Read layout first, then write, so a frame never forces two layouts.
      const cardRect = card?.getBoundingClientRect();
      const visualRect = visual?.getBoundingClientRect();

      if (card && cardRect) {
        card.style.setProperty("--fx-x", `${(event.clientX - cardRect.left).toFixed(1)}px`);
        card.style.setProperty("--fx-y", `${(event.clientY - cardRect.top).toFixed(1)}px`);
      }

      if (activeVisual && activeVisual !== visual) resetVisual();

      if (visual && visualRect && visualRect.width > 0 && visualRect.height > 0) {
        const px = clamp01((event.clientX - visualRect.left) / visualRect.width);
        const py = clamp01((event.clientY - visualRect.top) / visualRect.height);
        const nx = px - 0.5;
        const ny = py - 0.5;
        const tilt = Math.hypot(nx, ny) * 2 * MAX_TILT_DEG;

        visual.style.setProperty("--fx-dx", `${(nx * visualRect.width).toFixed(1)}px`);
        visual.style.setProperty("--fx-dy", `${(ny * visualRect.height).toFixed(1)}px`);
        visual.style.setProperty("--fx-cx", String(Math.round(px * 1000)));
        visual.style.setProperty("--fx-cy", String(Math.round(py * 1000)));
        visual.style.setProperty(
          "--fx-rotate",
          tilt > 0.01 ? `${(-ny).toFixed(3)} ${nx.toFixed(3)} 0 ${tilt.toFixed(2)}deg` : "0 0 1 0deg",
        );
        visual.setAttribute("data-fx-active", "");
        activeVisual = visual;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      lastEvent = event;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const onPointerLeaveWindow = () => {
      lastEvent = null;
      resetVisual();
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeaveWindow);
    window.addEventListener("blur", onPointerLeaveWindow);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeaveWindow);
      window.removeEventListener("blur", onPointerLeaveWindow);
      if (frame) window.cancelAnimationFrame(frame);
      resetVisual();
    };
  }, []);

  return null;
}
