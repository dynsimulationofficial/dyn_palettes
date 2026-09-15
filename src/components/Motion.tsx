import type { ReactNode } from "react";

/**
 * Performance-first wrappers.
 * Existing wrapper classes are preserved for layout compatibility, but content
 * renders immediately with no IntersectionObserver, scroll listener, pointer
 * tracking or requestAnimationFrame work.
 */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string; delay?: number }) {
  return <div className={`reveal is-visible ${className}`}>{children}</div>;
}

export function AmbientEffects() {
  return null;
}

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  return <span>{value}{suffix}</span>;
}
