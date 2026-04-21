import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const channels = [
  { mark: 'mono-01', title: 'Documentation',  body: 'Product docs, API reference, integration guides. Versioned alongside releases.', cta: 'Browse docs' },
  { mark: 'mono-03', title: 'Incident response', body: 'Production issues routed to Casedoc on-call, 24/7 for customers on the Judicial plan.', cta: 'Open a ticket' },
  { mark: 'mono-11', title: 'Training',        body: 'Cohort sessions for new benches. Role-based curricula for judges, clerks, counsel, IT.', cta: 'See schedule' },
  { mark: 'mono-07', title: 'Community',       body: 'Joint customer forum — other courts solving the same operational problems.', cta: 'Join the forum' },
]

export default function CasedocSupport() {
  usePageTitle('Casedoc — support')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Support</span>
            <h1>Help, docs, incident response.</h1>
            <p className="lede">
              Every Casedoc customer gets a named account team, 24/7 incident
              coverage on the Judicial plan, and unlimited access to the
              documentation and training portal.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div className="feature-matrix">
            {channels.map((c) => (
              <div key={c.title} className="feature-item" data-reveal>
                <div className="feature-item__icon">
                  <BrandLogo brand="canalix-marks" name={c.mark} />
                </div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
                <a href="#" style={{ display: 'inline-block', marginTop: 12, fontSize: 13, fontWeight: 600, color: 'var(--c-accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {c.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Need something urgent?</h2>
        <p>Customers on the Judicial plan — use the on-call channel in your workspace. Others — email support@casedoc.io.</p>
        <Link to="/canalix/site/contact" className="cta-primary">Contact Canalix →</Link>
      </section>
    </main>
  )
}
