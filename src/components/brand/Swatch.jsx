export default function Swatch({ hex, name }) {
  return (
    <div className="kol-swatch">
      <div className="kol-swatch-chip border border-fg-08" style={{ background: hex }} />
      <div className="kol-swatch-meta kol-helper-xxs">
        {name && <span className="text-fg-48">{name}</span>}
        <span className="text-fg-80 font-semibold">{hex.toUpperCase()}</span>
      </div>
    </div>
  )
}
