export default function Swatch({ hex, name }) {
  return (
    <div className="kol-swatch">
      <div className="kol-swatch__chip" style={{ background: hex }} />
      <div className="kol-swatch__meta">
        {name && <span>{name}</span>}
        <span>{hex.toUpperCase()}</span>
      </div>
    </div>
  )
}
