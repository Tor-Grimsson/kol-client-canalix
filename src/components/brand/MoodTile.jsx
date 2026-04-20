import BrandLogo from './BrandLogo'

export default function MoodTile({ src, alt = '', brand, logo = 'logomark', overlay = true, caption }) {
  return (
    <figure className="kol-mood-tile">
      <div className="kol-mood-tile__frame">
        <img src={src} alt={alt} loading="lazy" />
        {overlay && brand && (
          <div className="kol-mood-tile__overlay">
            <BrandLogo brand={brand} name={logo} />
          </div>
        )}
      </div>
      {caption && <figcaption className="kol-mood-tile__caption">{caption}</figcaption>}
    </figure>
  )
}
