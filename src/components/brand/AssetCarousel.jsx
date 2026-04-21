import { useState } from 'react'
import Carousel from '../ui/Carousel'
import FullscreenOverlay from '../ui/FullscreenOverlay'
import BrandLogo from '../marks/BrandLogo'

export default function AssetCarousel({ items, className = '', options }) {
  const [current, setCurrent] = useState(null)

  return (
    <>
      <Carousel className={`kol-asset-carousel ${className}`.trim()} {...(options ? { options } : {})}>
        {items.map((item, i) => (
          <AssetCard key={item.src ?? i} item={item} onOpen={() => setCurrent(item)} />
        ))}
      </Carousel>
      <FullscreenOverlay open={!!current} onClose={() => setCurrent(null)}>
        {current && <img src={current.src} alt={current.caption ?? current.alt ?? ''} />}
      </FullscreenOverlay>
    </>
  )
}

function AssetCard({ item, onOpen }) {
  const { src, alt, caption, brand, logo = 'logomark', fit = 'contain' } = item
  return (
    <figure className="kol-asset-card">
      <button
        type="button"
        className={`kol-asset-card-frame${fit === 'cover' ? ' is-cover' : ''}`}
        onClick={onOpen}
        aria-label={caption ? `Open ${caption} fullscreen` : 'Open fullscreen'}
      >
        <img src={src} alt={alt ?? ''} loading="lazy" />
        {brand && (
          <span className="kol-asset-card-overlay" aria-hidden="true">
            <BrandLogo brand={brand} name={logo} />
          </span>
        )}
      </button>
      {caption && (
        <figcaption className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
