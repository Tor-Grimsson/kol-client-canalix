import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const pillars = [
  { num: '01', title: 'Digital Court Evolution', body: 'Fluent transfer from paper to a fully digital record. Evidence, briefs, orders, hearings — one audit trail, one source of truth.' },
  { num: '02', title: 'Virtual Hearing',         body: 'A Microsoft Teams add-on that upgrades an ordinary remote meeting into a hearing room. Role presence, exhibit sharing, real-time transcript.' },
  { num: '03', title: 'Intelligent End-to-end',  body: 'Centralised evidence, data monitoring, privilege structure, people / role / location management. The infrastructure justice needs.' },
]

const features = [
  { mark: 'mono-05', title: 'Evidence locker',      body: 'Immutable custody chain. Every file timestamped, versioned, searchable.' },
  { mark: 'mono-02', title: 'Role-aware workflows', body: 'Bench, registry, counsel, clerks — each role sees what they need to act.' },
  { mark: 'mono-09', title: 'Live transcripts',     body: 'Hearing audio captured, indexed, and attached to the record automatically.' },
  { mark: 'mono-07', title: 'Scheduling',           body: 'Court calendar integration — hearing room, judge, parties, all in sync.' },
  { mark: 'mono-11', title: 'Secure messaging',     body: 'Privilege-aware communication between counsel, clerk, and registry.' },
  { mark: 'mono-01', title: 'Audit + analytics',    body: 'Every action logged. Dashboards on throughput, backlog, case-type mix.' },
]

export default function CasedocHome() {
  usePageTitle('Casedoc — bringing the power of data to justice')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      {/* ── HERO ── */}
      <section className="site-hero">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Flagship · part of the Canalix house</span>
            <h1>Bringing the power of data to justice.</h1>
            <p className="lede">
              Casedoc is the digital-court platform for the modern judiciary.
              Centralised evidence. Virtual hearings. A courtroom that runs on
              data — not paper, not silos, not guesswork.
            </p>
            <div className="site-hero__ctas">
              <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">Request a demo →</Link>
              <Link to="/canalix/site/casedoc/features" className="cta-ghost">See features</Link>
            </div>
          </div>

          <div className="site-hero__media" data-reveal>
            <div className="site-hero__media-frame">
              <img src="/brand/casedoc/product-ui/Product UI Abstractions_01.svg" alt="Casedoc product interface" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MAAT CONCEPT ── */}
      <section className="panel panel--white">
        <div className="container">
          <div className="split-row">
            <div className="split-row__media" data-reveal>
              <img src="/brand/casedoc/maat.svg" alt="Maat — Egyptian goddess of order and justice" style={{ maxWidth: 480, margin: '0 auto', background: 'transparent' }} />
            </div>
            <div className="split-row__body" data-reveal>
              <span className="eyebrow">The feather</span>
              <h2>Above as below — justice is a feather.</h2>
              <p>
                Casedoc&rsquo;s logomark is the feather of Maat — the Egyptian
                goddess of order, balance, law. In myth her feather was weighed
                against the heart to reveal truth.
              </p>
              <p>
                A neutral, cross-cultural emblem of fair adjudication. The
                product carries the metaphor: every case resolved on the
                strength of evidence, not the weight of paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="panel panel--cream">
        <div className="container">
          <div className="section-intro section-intro--left" data-reveal>
            <span className="eyebrow">Product pillars</span>
            <h2>Three capabilities. One platform.</h2>
            <p className="lede">
              Casedoc is the operational spine of the digital court. From
              intake through hearing to the record.
            </p>
          </div>
          <div className="pillars">
            {pillars.map((p) => (
              <div key={p.num} className="pillar" data-reveal>
                <span className="pillar__num">{p.num}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIRTUAL HEARING SPOTLIGHT ── */}
      <section className="panel panel--navy">
        <div className="container">
          <div className="split-row split-row--reverse">
            <div className="split-row__media" data-reveal>
              <img src="/brand/casedoc/product-ui/Product UI Abstractions_03.svg" alt="Casedoc Virtual Hearing" />
            </div>
            <div className="split-row__body" data-reveal>
              <span className="eyebrow">Virtual Hearing</span>
              <h2>Turn a Teams call into a courtroom.</h2>
              <p>
                Virtual Hearing is a Microsoft Teams add-on built for the
                bench. Judges, counsel, witnesses, and the registry join the
                same call — but each role sees the surfaces they need to act.
              </p>
              <p>
                Exhibit sharing with privilege controls. Real-time transcript
                that attaches to the record. Orders issued in the hearing
                appear in the case file before the call ends.
              </p>
              <Link to="/canalix/site/casedoc/virtual-hearing" className="cta-ghost" style={{ marginTop: 16, borderColor: 'color-mix(in srgb, var(--c-cream) 48%, transparent)', color: 'var(--c-cream)' }}>
                Read how it works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE MATRIX ── */}
      <section className="panel panel--white">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Everything the record needs</span>
            <h2>Built for the bench, the registry, and the bar.</h2>
            <p className="lede">
              Role-aware surfaces for every actor in the case — sharing one
              record without stepping on each other.
            </p>
          </div>
          <div className="feature-matrix">
            {features.map((f) => (
              <div key={f.title} className="feature-item" data-reveal>
                <div className="feature-item__icon">
                  <BrandLogo brand="canalix-marks" name={f.mark} />
                </div>
                <h4>{f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UI SHOWCASE ── */}
      <section className="panel panel--cream">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Product surfaces</span>
            <h2>Designed to disappear into the work.</h2>
            <p className="lede">
              Data-dense when it needs to be. Quiet when it doesn&rsquo;t.
              Every surface tuned to the rhythm of the court.
            </p>
          </div>
          <div className="ui-showcase">
            <figure data-reveal><img src="/brand/casedoc/product-ui/01.svg" alt="Casedoc case view" /></figure>
            <figure data-reveal><img src="/brand/casedoc/product-ui/02.svg" alt="Casedoc evidence view" /></figure>
            <figure data-reveal><img src="/brand/casedoc/product-ui/03.svg" alt="Casedoc hearing view" /></figure>
            <figure data-reveal><img src="/brand/casedoc/product-ui/04.svg" alt="Casedoc dashboard view" /></figure>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="panel panel--navy">
        <div className="container">
          <blockquote className="quote" data-reveal>
            Transparent, impartial, superior — the three words every
            judicial institution needs to live by. Casedoc is how that
            happens in practice.
            <cite>Casedoc — Canalix 2024</cite>
          </blockquote>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <h2>See Casedoc in your court.</h2>
        <p>Book a 30-minute walkthrough. We&rsquo;ll show Virtual Hearing live, and map the fit to your jurisdiction.</p>
        <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">Request a demo →</Link>
      </section>
    </main>
  )
}
