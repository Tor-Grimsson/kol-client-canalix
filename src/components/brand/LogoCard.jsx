import BrandLogo from './BrandLogo'

export default function LogoCard({ brand, name, caption, backdrop }) {
  const style = backdrop ? { background: backdrop } : undefined
  return (
    <figure className="kol-logo-card">
      <div className="kol-logo-card__frame" style={style}>
        <BrandLogo brand={brand} name={name} title={caption} />
      </div>
      {caption && <figcaption className="kol-logo-card__caption">{caption}</figcaption>}
    </figure>
  )
}
