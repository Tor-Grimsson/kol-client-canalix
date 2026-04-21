import BrandLogo from '../marks/BrandLogo'

export default function MoodTile({ src, alt = '', brand, logo = 'logomark', overlay = true, caption }) {
  return (
    <figure className="kol-mood-tile">
      <div className="kol-mood-tile-frame">
        <img src={src} alt={alt} loading="lazy" />
        {overlay && brand && (
          <div className="kol-mood-tile-overlay">
            <BrandLogo brand={brand} name={logo} />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
