import { useState } from 'react'
import { Link } from 'react-router-dom'
import AssetFigure from '../components/brand/AssetFigure'
import FullscreenOverlay from '../components/molecules/FullscreenOverlay'
import usePageTitle from '../hooks/usePageTitle'

const comps = [
  { src: '/brand/casedoc/website/Virtual_Hearing.svg',       caption: 'Virtual Hearing' },
  { src: '/brand/casedoc/website/Solutions_4-on-one-page.svg', caption: 'Solutions' },
  { src: '/brand/casedoc/website/Features.svg',              caption: 'Features' },
  { src: '/brand/casedoc/website/Beneftis.svg',              caption: 'Benefits' },
  { src: '/brand/casedoc/website/About.svg',                 caption: 'About' },
  { src: '/brand/casedoc/website/Get-demo.svg',              caption: 'Get demo' },
  { src: '/brand/casedoc/website/Support.svg',               caption: 'Support' },
  { src: '/brand/casedoc/website/Blog-home.svg',             caption: 'Blog home' },
  { src: '/brand/casedoc/website/Blog-read.svg',             caption: 'Blog — read' },
  { src: '/brand/casedoc/website/Cookies_Policy.svg',        caption: 'Cookies policy' },
  { src: '/brand/casedoc/website/Product-Page.svg',          caption: 'Product page' },
  { src: '/brand/casedoc/website/ws-01.svg',                 caption: 'ws-01' },
  { src: '/brand/casedoc/website/ws-02.svg',                 caption: 'ws-02' },
]

export default function CasedocWebsites() {
  usePageTitle('Casedoc · websites')
  const [fullscreen, setFullscreen] = useState(null)

  return (
    <>
      <section className="kol-page__hero" id="hero">
        <Link to="/casedoc" className="kol-back-link">← back to casedoc</Link>
        <p className="kol-page__section-label">casedoc · websites</p>
        <div className="kol-hero__copy">
          <h1 className="kol-page__title">casedoc.io</h1>
          <p className="kol-page__lede">
            Home family + Product detail + loose screens. Click a comp to open
            fullscreen.
          </p>
        </div>
      </section>

      <section className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">01 — pages</p>
          <h2 className="kol-page__section-title">Desktop pages</h2>
        </div>
        <div>
          {comps.map((f) => (
            <div
              key={f.src}
              className="kol-website-preview"
              onClick={() => setFullscreen(f)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setFullscreen(f) }}
            >
              <AssetFigure src={f.src} alt={f.caption} caption={f.caption} />
            </div>
          ))}
        </div>
      </section>

      <FullscreenOverlay open={!!fullscreen} onClose={() => setFullscreen(null)}>
        {fullscreen && <img src={fullscreen.src} alt={fullscreen.caption} />}
      </FullscreenOverlay>
    </>
  )
}
