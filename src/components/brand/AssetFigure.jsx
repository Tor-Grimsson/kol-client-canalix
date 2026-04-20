export default function AssetFigure({ src, alt, caption, dark = false, backdrop, className = '' }) {
  const frameStyle = backdrop ? { background: backdrop, borderColor: 'transparent' } : undefined
  return (
    <figure
      className={`kol-asset-figure${dark && !backdrop ? ' kol-asset-figure--dark' : ''} ${className}`.trim()}
    >
      <div className="kol-asset-figure__frame" style={frameStyle}>
        <img src={src} alt={alt || ''} loading="lazy" />
      </div>
      {caption && <figcaption className="kol-asset-figure__caption">{caption}</figcaption>}
    </figure>
  )
}
