import type { CSSProperties } from "react";

type TickerItem = { key: string; label: string };

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

/**
 * Decorative kraft-tape ticker (used under page heroes).
 * aria-hidden and label-only: the item names are drawn by CSS from data-label,
 * so the ticker adds no text to the page and never changes the SEO copy.
 * Short lists are repeated so the strip always covers wide screens.
 */
export function DynTicker({ items, current }: { items: TickerItem[]; current?: string }) {
  if (!items.length) return null;

  const repeats = Math.max(1, Math.ceil(10 / items.length));
  const set = Array.from({ length: repeats }, (_, repeat) => items.map((item, index) => ({ ...item, index, repeat }))).flat();
  const style = { "--exact-fx-ticker-duration": `${Math.max(28, set.length * 5.5)}s` } as CSSProperties;

  return (
    <div className="exact-fx-ticker" aria-hidden="true" style={style}>
      <div className="exact-fx-ticker-track">
        {[0, 1].map((loop) => (
          <div className="exact-fx-ticker-set" key={loop}>
            {set.map((item) => (
              <span
                key={`${item.repeat}-${item.key}`}
                data-no={pad2(item.index + 1)}
                data-label={item.label}
                data-current={item.key === current ? "true" : undefined}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
