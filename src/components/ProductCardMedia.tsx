export function ProductCardMedia({ image, index, tag }: { image: string; index: number; tag: string }) {
  return (
    <div className="product-photo-media">
      <div className="product-photo-bg" style={{ backgroundImage: `url('${image}')` }} />
      <div className="product-photo-grid" />
      <div className="product-photo-scan" />
      <div className="product-photo-meta">
        <span>P/{String(index + 1).padStart(2, "0")}</span>
        <b>{tag}</b>
      </div>
      <div className="product-photo-axis axis-one" />
      <div className="product-photo-axis axis-two" />
    </div>
  );
}
