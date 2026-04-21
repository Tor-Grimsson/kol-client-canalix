import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const groups = [
  {
    title: 'Case record',
    body: 'Every document, every hearing, every order — in one searchable spine.',
    items: [
      { mark: 'mono-05', title: 'Evidence locker',     body: 'Immutable custody chain. Versioning, timestamps, hash-verified originals.' },
      { mark: 'mono-02', title: 'Filings + orders',    body: 'Structured filing templates. Orders auto-populate from hearing outcomes.' },
      { mark: 'mono-09', title: 'Live transcripts',    body: 'Every hearing transcribed in real time, attached to the case file.' },
      { mark: 'mono-11', title: 'Privilege controls',  body: 'Scope every document by role, party, or phase of proceedings.' },
    ],
  },
  {
    title: 'Hearings + scheduling',
    body: 'Calendars, rooms, roles — aligned to the rhythm of the court.',
    items: [
      { mark: 'mono-07', title: 'Court calendar',      body: 'Hearing rooms, judges, parties, availability — visible in one grid.' },
      { mark: 'mono-12', title: 'Virtual Hearing',     body: 'Teams add-on. Role presence, exhibit sharing, order issuance.' },
      { mark: 'mono-08', title: 'Conflicts engine',    body: 'Automated conflict-of-interest screening across the roster.' },
      { mark: 'mono-03', title: 'Notifications',       body: 'Party, counsel, witness — each reminded on their schedule.' },
    ],
  },
  {
    title: 'Operations + insight',
    body: 'Run the registry. Measure throughput. Answer the legislature.',
    items: [
      { mark: 'mono-01', title: 'Audit log',           body: 'Every action, every actor, every timestamp — queryable and exportable.' },
      { mark: 'mono-14', title: 'Analytics',           body: 'Dashboards on caseload, backlog, case-type mix, hearing throughput.' },
      { mark: 'mono-06', title: 'Retention + purge',   body: 'Jurisdiction-specific retention rules, auto-enforced on closed matters.' },
      { mark: 'mono-10', title: 'Data sovereignty',    body: 'Hosted where your jurisdiction requires. On-prem, regional, hybrid.' },
    ],
  },
]

export default function CasedocFeatures() {
  usePageTitle('Casedoc — features')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Features</span>
            <h1>Everything the digital court needs.</h1>
            <p className="lede">
              Three capability groups, one platform. Customers pick the
              modules that match their caseload and grow into the rest.
            </p>
          </div>
        </div>
      </section>

      {groups.map((g, i) => (
        <section key={g.title} className={`panel ${i % 2 ? 'panel--cream' : 'panel--white'}`}>
          <div className="container">
            <div className="section-intro section-intro--left" data-reveal>
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <h2>{g.title}</h2>
              <p className="lede">{g.body}</p>
            </div>
            <div className="feature-matrix">
              {g.items.map((f) => (
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
      ))}

      <section className="cta-band">
        <h2>See the features in your caseload.</h2>
        <p>We tailor the demo to your jurisdiction and case mix. Book a 30-minute walkthrough.</p>
        <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">Request a demo →</Link>
      </section>
    </main>
  )
}
