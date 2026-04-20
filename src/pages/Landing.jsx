import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import BrandLogo from '../components/brand/BrandLogo'
import usePageTitle from '../hooks/usePageTitle'

const canalixPalette = ['#ECE8DE', '#DEB430', '#225FA6', '#0E3655', '#142438']
const casedocPalette = ['#F3CB28', '#F28813', '#E74636', '#003CA5', '#002A5E']

export default function Landing() {
  usePageTitle()
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to('.kol-home-hero__bg',    { opacity: 1, duration: 1.2 })
        .to('.kol-home-hero__mark',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .to('.kol-home-hero__title', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.kol-home-hero__lede',  { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.kol-home-hero__scroll', { opacity: 1, duration: 0.6 }, '-=0.2')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <section ref={heroRef} className="kol-home-hero">
        <img
          className="kol-home-hero__bg"
          src="/brand/canalix/mood/mood-no-logo-01.png"
          alt=""
          aria-hidden="true"
        />
        <div className="kol-home-hero__veil" aria-hidden="true" />
        <div className="kol-home-hero__stage">
          <div className="kol-home-hero__mark">
            <BrandLogo brand="canalix" name="logomark-mono" title="Canalix" />
          </div>
          <h1 className="kol-home-hero__title">Canalix</h1>
          <p className="kol-home-hero__lede">
            A branded house. Master brand, many children. Reference site for the
            identity and the flagship product that lives inside it.
          </p>
          <div className="kol-home-hero__scroll">scroll — architecture below</div>
        </div>
      </section>

      <section className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">01 — architecture</p>
          <h2 className="kol-page__section-title">The house</h2>
          <p className="kol-page__section-body">
            One master brand at the top. Products and sub-brands hang beneath
            it. Casedoc is the flagship.
          </p>
        </div>
        <img
          className="kol-figure__img"
          src="/brand/canalix/branded-house.svg"
          alt="Canalix branded house architecture"
        />
      </section>

      <section className="kol-page kol-page__section">
        <p className="kol-page__section-label">02 — pick a door</p>
        <div className="kol-doors">
          <Link to="/canalix" className="kol-door kol-door--inverse" style={{ background: 'rgba(0, 42, 94, 0.48)' }}>
            <BrandLogo brand="canalix" name="logomark-mono" className="kol-door__mark" />
            <p className="kol-door__kicker">Master brand</p>
            <h3 className="kol-door__title">Canalix</h3>
            <p className="kol-door__sub">Identity · system · architecture</p>
            <div className="kol-door__palette" aria-hidden="true">
              {canalixPalette.map((hex) => (
                <span key={hex} style={{ background: hex }} />
              ))}
            </div>
          </Link>
          <Link to="/casedoc" className="kol-door kol-door--inverse" style={{ background: 'rgba(0, 42, 94, 0.48)' }}>
            <BrandLogo brand="casedoc" name="logomark" className="kol-door__mark" />
            <p className="kol-door__kicker">Flagship product</p>
            <h3 className="kol-door__title">Casedoc</h3>
            <p className="kol-door__sub">Concept · product · application</p>
            <div className="kol-door__palette" aria-hidden="true">
              {casedocPalette.map((hex) => (
                <span key={hex} style={{ background: hex }} />
              ))}
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
