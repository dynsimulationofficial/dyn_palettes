export function ProductVisual({ type = "pallet", compact = false }: { type?: "pallet" | "box" | "crate" | "plastic"; compact?: boolean }) {
  return (
    <div className={`product-visual ${compact ? "is-compact" : ""} ${type}`} aria-hidden="true">
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-orbit orbit-three" />
      <div className="visual-scan" />
      <div className="visual-axis axis-x" />
      <div className="visual-axis axis-y" />
      {type === "pallet" && (
        <div className="pallet-model">
          <span className="slat s1" /><span className="slat s2" /><span className="slat s3" /><span className="slat s4" /><span className="slat s5" />
          <span className="rail r1" /><span className="rail r2" /><span className="rail r3" />
          <span className="block b1" /><span className="block b2" /><span className="block b3" />
        </div>
      )}
      {type === "box" && <div className="box-model"><span className="box-face front" /><span className="box-face side" /><span className="box-face top" /><span className="box-band band-a" /><span className="box-band band-b" /></div>}
      {type === "crate" && <div className="crate-model"><span className="crate-frame cf1" /><span className="crate-frame cf2" /><span className="crate-frame cf3" /><span className="crate-frame cf4" /><span className="crate-diagonal" /></div>}
      {type === "plastic" && <div className="plastic-model"><span className="plastic-deck" /><span className="plastic-grid" /><span className="plastic-foot pf1" /><span className="plastic-foot pf2" /><span className="plastic-foot pf3" /></div>}
      <div className="visual-shadow" />
    </div>
  );
}
