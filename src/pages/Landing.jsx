import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import useEmblaCarousel from 'embla-carousel-react'
import BrandLogo from '../components/marks/BrandLogo'
import usePageTitle from '../hooks/usePageTitle'
import { WORD, MARQUEE, GALLERY, FAQ } from './landing-data'

const GALLERY_EMBLA_OPTS = { align: 'start', dragFree: true, containScroll: 'trimSnaps' }

export default function Landing() {
  usePageTitle()
  const introRef = useRef(null)
  const [galleryRef] = useEmblaCarousel(GALLERY_EMBLA_OPTS)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (prefersReduced) {
        gsap.set('.landing-intro-bg', { opacity: 1 })
        gsap.set('.landing-mark-wipe', { '--mask-x': '0%' })
        gsap.set('.landing-mark-halo', { xPercent: -50, yPercent: -50, opacity: 0.46 })
        gsap.set('.landing-word-char', { opacity: 1, y: 0 })
        gsap.set('.landing-pullline-item', { opacity: 1, y: 0 })
        gsap.set('.landing-scroll-cue', { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to('.landing-intro-bg', { opacity: 1, duration: 1.4, ease: 'power2.out' }, 0)
      tl.fromTo('.landing-mark-halo',
        { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.6 },
        { xPercent: -50, yPercent: -50, opacity: 0.46, scale: 1, duration: 1.8, ease: 'power2.out' },
        0.3
      )
      tl.to('.landing-mark-wipe', { '--mask-x': '0%', duration: 1.4, ease: 'power2.inOut' }, 0.5)
      tl.from('.landing-word-char',     { y: 56, opacity: 0, stagger: 0.055, duration: 0.6 }, '-=0.85')
      tl.from('.landing-pullline-item', { y: 18, opacity: 0, stagger: 0.08,  duration: 0.6 }, '-=0.35')
      tl.from('.landing-scroll-cue',    { opacity: 0, y: 10, duration: 0.6 }, '-=0.3')
    }, introRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ══ Kinetic intro ══ */}
      <section ref={introRef} className="landing-intro">
        <img className="landing-intro-bg" src="/brand/canalix/mood/mood-no-logo-01.png" alt="" aria-hidden="true" />
        <div className="landing-intro-veil" aria-hidden="true" />
        <div className="landing-intro-stage">
          <div className="landing-mark-halo" aria-hidden="true" />
          <div className="landing-intro-mark">
            <div className="landing-mark-wipe">
              <BrandLogo brand="canalix" name="logomark-mono" title="Canalix" />
            </div>
          </div>
          <h1 className="landing-intro-word" aria-label="Canalix">
            {WORD.split('').map((c, i) => (
              <span key={i} className="landing-word-char">{c}</span>
            ))}
          </h1>
          <p className="landing-pullline">
            <span className="landing-pullline-item landing-pullline-serif">Branded House</span>
            <span className="landing-pullline-item landing-pullline-sep" aria-hidden="true">·</span>
            <span className="landing-pullline-item">Hugvit</span>
            <span className="landing-pullline-item landing-pullline-sep" aria-hidden="true">·</span>
            <span className="landing-pullline-item">2024</span>
          </p>
        </div>
        <div className="landing-scroll-cue kol-helper-xs-2 uppercase tracking-widest">
          <span>↓</span>
          <span>portal index</span>
        </div>
      </section>

      {/* ══ Feature: text + image ══ */}
      <section className="landing-feature">
        <div className="landing-feature-inner">
          <div className="landing-feature-text">
            <span className="landing-feature-kicker">01 · The system</span>
            <h2 className="landing-feature-pull">
              A branded house, <em>not a style guide.</em>
            </h2>
            <p className="landing-feature-body">
              Every product in the Canalix system inherits the same foundation — shared
              typography, shared color vocabulary, a shared lockup grammar. Differences are
              intentional, expression is encouraged, but products can't break the house.
            </p>
            <div className="landing-feature-meta">
              <div className="landing-feature-meta-item">
                <span className="landing-feature-meta-num">2</span>
                <span className="landing-feature-meta-label">Type families</span>
              </div>
              <div className="landing-feature-meta-item">
                <span className="landing-feature-meta-num">36</span>
                <span className="landing-feature-meta-label">Product marks</span>
              </div>
              <div className="landing-feature-meta-item">
                <span className="landing-feature-meta-num">6</span>
                <span className="landing-feature-meta-label">Palette tokens</span>
              </div>
              <div className="landing-feature-meta-item">
                <span className="landing-feature-meta-num">2024</span>
                <span className="landing-feature-meta-label">Built</span>
              </div>
            </div>
          </div>
          <div className="landing-feature-visual">
            <img src="/brand/canalix/mood/mood-no-logo-02.png" alt="" aria-hidden="true" />
            <div className="landing-feature-visual-veil" aria-hidden="true" />
            <span className="landing-feature-visual-caption">Canalix · 2024</span>
          </div>
        </div>
      </section>

      {/* ══ Customer marquee ══ */}
      <section className="landing-marquee">
        <div className="landing-marquee-head">
          <span className="landing-marquee-kicker">02 · Inside the house</span>
          <span className="landing-marquee-head-note">
            Products, services, branches — everything the Canalix system dresses.
          </span>
        </div>
        <div className="landing-marquee-track-wrap">
          <div className="landing-marquee-track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <MarqueeItem key={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ Work gallery ══ */}
      <section className="landing-gallery">
        <div className="landing-gallery-head">
          <h2 className="landing-gallery-title">
            <em>Highlights</em> across the system.
          </h2>
          <span className="landing-gallery-note">
            Seven entry points — marks, typography, color, lockups, products, and the live site.
          </span>
        </div>
        <div className="landing-gallery-viewport" ref={galleryRef}>
          <div className="landing-gallery-track">
            {GALLERY.map((card, i) => (
              <GalleryCard key={i} {...card} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ Testimonial ══ */}
      <section className="landing-testimonial">
        <div className="landing-testimonial-inner">
          <span className="landing-testimonial-kicker">Brand stewardship</span>
          <blockquote className="landing-testimonial-quote">
            A system we could grow into, not a set of rules we had to follow.
          </blockquote>
          <cite className="landing-testimonial-cite">
            Canalix brand stewards, 2024
          </cite>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="landing-faq">
        <div className="landing-faq-inner">
          <div className="landing-faq-head">
            <span className="landing-faq-kicker">03 · Questions</span>
            <h2 className="landing-faq-title">Things people ask.</h2>
          </div>
          <div className="landing-faq-list">
            {FAQ.map((item, i) => (
              <details key={i} className="landing-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <span className="landing-faq-item-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="landing-faq-item-body">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Portal index ══ */}
      <section className="landing-anchor">
        <div className="landing-anchor-inner">
          <span className="kol-helper-xs uppercase tracking-widest text-fg-48">
            Portal · index
          </span>
          <h2 className="landing-anchor-pull">
            <span>Branded house.</span>
            <em className="landing-anchor-pull-italic">One system.</em>
          </h2>
          <p className="landing-anchor-body">
            Canalix is the master brand. Casedoc is the flagship product that
            lives inside it. This portal documents the house, the flagship,
            and the shared foundations that connect them.
          </p>

          <nav className="landing-anchor-nav">
            <Link to="/canalix" className="landing-anchor-link landing-anchor-link--canalix">
              <span className="landing-anchor-link-num">01</span>
              <span className="landing-anchor-link-mark" aria-hidden="true">
                <BrandLogo brand="canalix" name="logomark-mono" />
              </span>
              <span className="landing-anchor-link-label">Canalix</span>
              <span className="landing-anchor-link-sub">Master brand · house</span>
            </Link>
            <Link to="/casedoc" className="landing-anchor-link landing-anchor-link--casedoc">
              <span className="landing-anchor-link-num">02</span>
              <span className="landing-anchor-link-mark" aria-hidden="true">
                <BrandLogo brand="casedoc" name="logomark" light />
              </span>
              <span className="landing-anchor-link-label">Casedoc</span>
              <span className="landing-anchor-link-sub">Flagship product · inside the house</span>
            </Link>
            <Link to="/foundations" className="landing-anchor-link">
              <span className="landing-anchor-link-num">03</span>
              <span className="landing-anchor-link-label">Foundations</span>
              <span className="landing-anchor-link-sub">Type · color · composition</span>
            </Link>
            <Link to="/canalix/branded-house" className="landing-anchor-link">
              <span className="landing-anchor-link-num">04</span>
              <span className="landing-anchor-link-label">Branded House</span>
              <span className="landing-anchor-link-sub">Lockup system, live</span>
            </Link>
            <Link to="/canalix/marks" className="landing-anchor-link">
              <span className="landing-anchor-link-num">05</span>
              <span className="landing-anchor-link-label">Marks</span>
              <span className="landing-anchor-link-sub">36 product icons</span>
            </Link>
            <Link to="/canalix/site" className="landing-anchor-link">
              <span className="landing-anchor-link-num">06</span>
              <span className="landing-anchor-link-label">Live site</span>
              <span className="landing-anchor-link-sub">Marketing surface</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* ══ Signature ticker ══ */}
      <section className="landing-sig">
        <div className="landing-sig-line">
          <span>Hugvit</span>
          <span className="landing-sig-sep" aria-hidden="true">×</span>
          <span>Canalix</span>
          <span className="landing-sig-sep" aria-hidden="true">×</span>
          <span>2024</span>
        </div>
        <div className="landing-sig-tokens">
          <span>Montserrat · 800</span>
          <span>PP Hatton · 500</span>
          <span className="landing-sig-hex">#142438</span>
          <span className="landing-sig-hex">#00469C</span>
        </div>
      </section>
    </>
  )
}

/* ── Subcomponents ── */

function MarqueeItem({ parent, product, descriptor }) {
  const markName = parent === 'canalix' ? 'logomark-mono' : 'logomark'
  const tint = parent === 'canalix' ? '#DEB430' : '#0075CF'
  const parentLabel = parent === 'canalix' ? 'Canalix' : 'Casedoc'
  return (
    <span className="landing-marquee-item">
      <span className="landing-marquee-item-mark" style={{ color: tint }}>
        <BrandLogo brand={parent} name={markName} light />
      </span>
      <span className="landing-marquee-item-label">
        <span className="landing-marquee-item-parent">{parentLabel}</span>
        <span>{product}</span>
        {descriptor && <span className="landing-marquee-item-descriptor">{descriptor}</span>}
      </span>
    </span>
  )
}

function GalleryCard({ to, kicker, title, desc, bg, mark, letter, letterFont, letterColor }) {
  return (
    <Link to={to} className="landing-gallery-card">
      <div className="landing-gallery-card-visual" style={{ background: bg }}>
        {mark && (
          <div className="landing-gallery-card-mark-overlay" style={{ color: mark.tint }}>
            <BrandLogo brand={mark.brand} name={mark.name} light />
          </div>
        )}
        {letter && (
          <span
            className="landing-gallery-card-letter"
            style={{ fontFamily: letterFont, color: letterColor }}
          >
            {letter}
          </span>
        )}
      </div>
      <span className="landing-gallery-card-kicker">{kicker}</span>
      <h3 className="landing-gallery-card-title">{title}</h3>
      <p className="landing-gallery-card-desc">{desc}</p>
    </Link>
  )
}
