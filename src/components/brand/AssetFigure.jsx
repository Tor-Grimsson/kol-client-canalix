export default function AssetFigure({ src, alt, caption, dark = false, backdrop, className = '' }) {
  const frameStyle = backdrop ? { background: backdrop, borderColor: 'transparent' } : undefined
  const darkFrame = dark && !backdrop
  const frameCls = darkFrame
    ? 'kol-asset-figure-frame bg-surface-inverse'
    : backdrop
      ? 'kol-asset-figure-frame'
      : 'kol-asset-figure-frame bg-fg-04 border border-fg-08'

  return (
    <figure className={`kol-asset-figure ${className}`.trim()}>
      <div className={frameCls} style={frameStyle}>
        <img src={src} alt={alt || ''} loading="lazy" />
      </div>
      {caption && (
        <figcaption className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
