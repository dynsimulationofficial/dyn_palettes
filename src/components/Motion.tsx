"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react";

type RevealCallback = () => void;

let sharedObserver: IntersectionObserver | null = null;
const revealCallbacks = new WeakMap<Element, RevealCallback>();

function getRevealObserver() {
  if (typeof window === "undefined") return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = revealCallbacks.get(entry.target);
          callback?.();
          sharedObserver?.unobserve(entry.target);
          revealCallbacks.delete(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -7% 0px",
      },
    );
  }

  return sharedObserver;
}

/**
 * Lightweight scroll reveal. A single shared IntersectionObserver is reused by
 * every Reveal instance, so sections can slide/fade in without scroll handlers
 * or requestAnimationFrame loops.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = getRevealObserver();
    if (!observer) {
      setVisible(true);
      return;
    }

    revealCallbacks.set(node, () => setVisible(true));
    observer.observe(node);

    return () => {
      observer.unobserve(node);
      revealCallbacks.delete(node);
    };
  }, []);

  const style: CSSProperties = visible && delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

export function AmbientEffects() {
  return null;
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  return <span>{value}{suffix}</span>;
}
