import { useRef } from 'react'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

export default function CanalixContact() {
  usePageTitle('Canalix — contact')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Contact</span>
            <h1>Talk to the team.</h1>
            <p className="lede">
              We reply to every inbound within two business days. Tell us about
              the caseload, the roles, and where you are in procurement.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <form className="form-card" data-reveal onSubmit={(e) => e.preventDefault()}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label htmlFor="org">Organisation</label>
              <input id="org" type="text" placeholder="Court, ministry, firm…" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="you@organisation.gov" />
            </div>
            <div className="form-field">
              <label htmlFor="topic">Topic</label>
              <select id="topic" defaultValue="">
                <option value="" disabled>Select…</option>
                <option>Casedoc demo</option>
                <option>Virtual Hearing pilot</option>
                <option>Forum / Hearings / Partner</option>
                <option>Implementation + consulting</option>
                <option>Partnership / integration</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="note">A few sentences</label>
              <textarea id="note" rows="4" placeholder="Caseload, jurisdiction, timeline…" />
            </div>
            <button type="submit" className="cta-primary" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
              Send →
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: 48, color: 'var(--c-ink-muted)', fontSize: 14 }} data-reveal>
            <p>Or email <a href="mailto:hello@canalix.io" style={{ color: 'var(--c-ink)', textDecoration: 'underline' }}>hello@canalix.io</a> directly.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
