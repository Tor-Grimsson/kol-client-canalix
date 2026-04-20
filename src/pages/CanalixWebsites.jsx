import { useState } from 'react'
import { Link } from 'react-router-dom'
import AssetFigure from '../components/brand/AssetFigure'
import AssetGrid from '../components/brand/AssetGrid'
import FullscreenOverlay from '../components/molecules/FullscreenOverlay'
import usePageTitle from '../hooks/usePageTitle'

const desktopPreviews = ['canalix-01', 'canalix-02', 'canalix-03', 'canalix-04', 'canalix-05', 'canalix-06', 'canalix-07']
const mobileMocks = ['website-mocks-01', 'website-mocks-02', 'website-mocks-03', 'website-mocks-04', 'website-mocks-05', 'website-mocks-06', 'website-mocks-07', 'website-mocks-08']

export default function CanalixWebsites() {
  usePageTitle('Canalix · websites')
  const [fullscreen, setFullscreen] = useState(null)

  return (
    <>
      <section className="kol-page__hero" id="hero">
        <Link to="/canalix" className="kol-back-link">← back to canalix</Link>
        <p className="kol-page__section-label">canalix · websites</p>
        <div className="kol-hero__copy">
          <h1 className="kol-page__title">canalix.io</h1>
          <p className="kol-page__lede">
            Marketing-site comps — desktop pages stacked for scroll context,
            mobile mocks follow in a tighter grid. Click any comp to open
            fullscreen.
          </p>
        </div>
      </section>

      <section className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">01 — desktop</p>
          <h2 className="kol-page__section-title">Desktop pages</h2>
        </div>
        <div>
          {desktopPreviews.map((f) => {
            const src = `/brand/canalix/website/${f}.svg`
            return (
              <div
                key={f}
                className="kol-website-preview"
                onClick={() => setFullscreen({ src, caption: f })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setFullscreen({ src, caption: f }) }}
              >
                <AssetFigure src={src} alt={f} caption={f} />
              </div>
            )
          })}
        </div>
      </section>

      <section className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">02 — mobile</p>
          <h2 className="kol-page__section-title">Mobile mocks</h2>
        </div>
        <AssetGrid cols={4}>
          {mobileMocks.map((f) => {
            const src = `/brand/canalix/website/${f}.png`
            return (
              <div
                key={f}
                onClick={() => setFullscreen({ src, caption: f })}
                role="button"
                tabIndex={0}
                style={{ cursor: 'zoom-in' }}
                onKeyDown={(e) => { if (e.key === 'Enter') setFullscreen({ src, caption: f }) }}
              >
                <AssetFigure src={src} alt={f} caption={f} />
              </div>
            )
          })}
        </AssetGrid>
      </section>

      <FullscreenOverlay open={!!fullscreen} onClose={() => setFullscreen(null)}>
        {fullscreen && <img src={fullscreen.src} alt={fullscreen.caption} />}
      </FullscreenOverlay>
    </>
  )
}
