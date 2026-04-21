import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const products = [
  { slug: 'casedoc', mark: 'accent-05', name: 'Casedoc', tag: 'Flagship · digital-court platform', body: 'Centralised evidence, virtual hearings, role-aware workflows — everything the bench, registry, and bar need, in one record.', flagship: true, to: '/canalix/site/casedoc' },
  { slug: 'forum',       mark: 'accent-07', name: 'Forum',       body: 'Case-management forum for regulatory bodies, ombudsmen, and tribunals handling high volumes of structured matters.' },
  { slug: 'hearings',    mark: 'accent-02', name: 'Hearings',    body: 'Scheduling, recording, and transcript workflows for hearing rooms — purpose-built for court calendars.' },
  { slug: 'partner',     mark: 'accent-01', name: 'Partner',     body: 'Counsel-facing portal. Filings, attachments, case status, communication — everything external parties touch.' },
  { slug: 'inspection',  mark: 'accent-13', name: 'Inspection',  body: 'Field-inspection capture with chain-of-custody. Offline-first, evidence-grade, regulator-ready.' },
  { slug: 'consulting',  mark: 'accent-04', name: 'Consulting',  body: 'Implementation, training, and ongoing advisory across the suite. Jurisdiction-specific configuration and rollout.' },
]

export default function CanalixHome() {
  usePageTitle('Canalix — the branded house for judicial software')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      {/* ── HERO ── */}
      <section className="site-hero">
        <img className="site-hero__pattern" src="/brand/canalix/patterns/03.svg" alt="" aria-hidden="true" />
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">The branded house</span>
            <h1>
              Judicial software,
              <br />
              <span className="display">unified.</span>
            </h1>
            <p className="lede">
              One master brand. A family of case-management products built for
              courts, tribunals, and regulators. Casedoc is the flagship — the
              rest of the house extends the same operating model.
            </p>
            <div className="site-hero__ctas">
              <Link to="/canalix/site/casedoc" className="cta-primary">Explore Casedoc →</Link>
              <Link to="/canalix/site/solutions" className="cta-ghost">See all solutions</Link>
            </div>
          </div>

          <div className="site-hero__media" data-reveal>
            <div className="site-hero__media-frame" style={{ background: 'transparent' }}>
              <img src="/brand/canalix/mood/mood-no-logo-02.png" alt="Canalix mood" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="trust-strip">
        <div className="trust-strip__row">
          <span className="trust-strip__label">In production at</span>
          <div className="trust-strip__items">
            <span className="trust-strip__item">Icelandic Ministry of Justice</span>
            <span className="trust-strip__item">Supreme Court registries</span>
            <span className="trust-strip__item">Regulatory tribunals</span>
            <span className="trust-strip__item">Ombudsman offices</span>
          </div>
        </div>
      </section>

      {/* ── BRANDED HOUSE ── */}
      <section className="panel panel--cream">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Architecture</span>
            <h2>A family, not a lineup</h2>
            <p className="lede">
              Canalix is a branded house — every product extends one identity,
              one design system, one point of view. Features built once,
              available everywhere they apply.
            </p>
          </div>
          <div className="house-figure" data-reveal>
            <img src="/brand/canalix/branded-house/Branded House 2_01.svg" alt="Canalix branded-house architecture" />
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="panel panel--white">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Products</span>
            <h2>Six products. One operating model.</h2>
            <p className="lede">
              Each piece is shippable on its own and interoperable across the
              family. Customers start with what they need and grow into the
              rest.
            </p>
          </div>

          <div className="products-grid">
            {products.map((p) => {
              const inner = (
                <>
                  <div className="product-card__icon">
                    <BrandLogo brand="canalix-marks" name={p.mark} />
                  </div>
                  <h3>{p.name}</h3>
                  {p.tag && <p style={{ color: 'var(--c-yellow)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{p.tag}</p>}
                  <p>{p.body}</p>
                  {p.to && <span className="product-card__more">Learn more →</span>}
                </>
              )
              const cls = `product-card${p.flagship ? ' is-flagship' : ''}`
              return p.to ? (
                <Link key={p.slug} to={p.to} className={cls} data-reveal>{inner}</Link>
              ) : (
                <div key={p.slug} className={cls} data-reveal>{inner}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM ── */}
      <section className="panel panel--cream">
        <div className="container">
          <div className="split-row">
            <div className="split-row__body" data-reveal>
              <span className="eyebrow">One design language</span>
              <h2>Consistent across the bench.</h2>
              <p>
                Every product ships on the same design system — tokens,
                components, patterns, typography. Courts and counsel learn one
                interface, not six.
              </p>
              <p>
                A single operating model behind the suite means faster
                onboarding, lower training overhead, and a shared feature
                backlog — so Casedoc&rsquo;s roadmap lifts Forum and Hearings
                too.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
                <Link to="/canalix" className="cta-ghost">See the brand book →</Link>
              </div>
            </div>
            <div className="split-row__media" data-reveal>
              <img src="/brand/canalix/brand-sheet/summary.svg" alt="Canalix brand sheet summary" />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="panel panel--white">
        <div className="container">
          <blockquote className="quote" data-reveal>
            Strong, trustworthy, elegant — yet flexible enough to counter the
            rigid nature of governmental institutions.
            <cite>Canalix positioning · Hugvit · Kolkrabbi 2024</cite>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <h2>See the flagship in action</h2>
        <p>Casedoc runs the hearing, the evidence locker, and the paperwork — so the court can run justice.</p>
        <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">Request a demo →</Link>
      </section>
    </main>
  )
}
