import BrandLogo from '../marks/BrandLogo'

export default function LogoCard({ brand, name, caption, backdrop, light = false }) {
  const style = backdrop ? { background: backdrop } : undefined
  const frameExtras = backdrop ? '' : 'bg-fg-02 border border-fg-04'
  return (
    <figure className="kol-logo-card">
      <div className={`kol-logo-card-frame ${frameExtras}`.trim()} style={style}>
        <BrandLogo brand={brand} name={name} title={caption} light={light} />
      </div>
      {caption && (
        <figcaption className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
