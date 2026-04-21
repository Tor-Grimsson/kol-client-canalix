import { useRef } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const expectations = [
  { title: '30 minutes',    body: 'Focused walkthrough — we respect calendars.' },
  { title: 'Your case mix', body: 'Tell us what you handle; we demo against it.' },
  { title: 'No pitch deck', body: 'Live product, questions welcome, jurisdiction-specific.' },
]

export default function CasedocGetDemo() {
  usePageTitle('Casedoc — request a demo')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Get a demo</span>
            <h1>See Casedoc in your court.</h1>
            <p className="lede">
              A 30-minute walkthrough tailored to your jurisdiction. We&rsquo;ll
              show Virtual Hearing live and map the fit to your caseload.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div className="split-row">
            <div data-reveal>
              <span className="eyebrow">What to expect</span>
              <h2 style={{ marginTop: 16, marginBottom: 32 }}>A 30-minute walkthrough.</h2>
              <div style={{ display: 'grid', gap: 24 }}>
                {expectations.map((e) => (
                  <div key={e.title} style={{ paddingTop: 20, borderTop: '1px solid var(--c-hairline)' }}>
                    <h4 style={{ marginBottom: 8 }}>{e.title}</h4>
                    <p style={{ color: 'var(--c-ink-muted)' }}>{e.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <form className="form-card" data-reveal onSubmit={(e) => e.preventDefault()}>
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your full name" />
              </div>
              <div className="form-field">
                <label htmlFor="role">Role</label>
                <input id="role" type="text" placeholder="Judge, registrar, IT director…" />
              </div>
              <div className="form-field">
                <label htmlFor="org">Organisation</label>
                <input id="org" type="text" placeholder="Court, ministry, tribunal…" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Work email</label>
                <input id="email" type="email" placeholder="you@organisation.gov" />
              </div>
              <div className="form-field">
                <label htmlFor="caseload">Caseload + jurisdiction</label>
                <textarea id="caseload" rows="3" placeholder="Roughly how many matters per year, and where you operate" />
              </div>
              <button type="submit" className="cta-primary" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
                Request a demo →
              </button>
              <p style={{ marginTop: 16, fontSize: 13, color: 'var(--c-ink-muted)', textAlign: 'center' }}>
                We&rsquo;ll be in touch within two business days.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
