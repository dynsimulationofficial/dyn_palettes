import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className}>
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
