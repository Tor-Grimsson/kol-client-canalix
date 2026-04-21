import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const solutions = [
  {
    mark: 'accent-05',
    audience: 'Courts + tribunals',
    title: 'Digital courtrooms, end to end.',
    body: 'Casedoc for the case file, Virtual Hearing for the room, Partner for counsel. A full-stack judicial platform.',
    link: '/canalix/site/casedoc',
  },
  {
    mark: 'accent-13',
    audience: 'Regulators',
    title: 'Inspection, enforcement, adjudication.',
    body: 'Inspection for the field, Casedoc for the case, Forum for the hearing. One chain of custody from site visit to final order.',
  },
  {
    mark: 'accent-07',
    audience: 'Ombudsman offices',
    title: 'Complaints to resolutions.',
    body: 'Forum handles intake and routing, Casedoc the investigation, Hearings the review. Transparent to complainants, auditable to government.',
  },
  {
    mark: 'accent-02',
    audience: 'Counsel + firms',
    title: 'Filings without the fax.',
    body: 'Partner is the external-facing portal. Privilege-aware document exchange, hearing schedules, case status — no paper, no portal sprawl.',
  },
]

export default function CanalixSolutions() {
  usePageTitle('Canalix — solutions')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Solutions</span>
            <h1>One house, four ways in.</h1>
            <p className="lede">
              Canalix products cluster into the shapes of justice work. Most
              customers start with one product and grow into the family as
              needs surface.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          {solutions.map((s, i) => (
            <div key={s.title} className={`split-row ${i % 2 ? 'split-row--reverse' : ''}`} style={{ marginBottom: 96 }} data-reveal>
              <div className="split-row__body">
                <span className="eyebrow">{s.audience}</span>
                <h2 style={{ marginTop: 16 }}>{s.title}</h2>
                <p>{s.body}</p>
                {s.link && (
                  <Link to={s.link} className="cta-ghost" style={{ marginTop: 16 }}>
                    Learn more →
                  </Link>
                )}
              </div>
              <div className="split-row__media" style={{ background: 'var(--c-cream)', padding: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 140, height: 140, color: 'var(--c-navy)' }}>
                  <BrandLogo brand="canalix-marks" name={s.mark} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>Not sure where to start?</h2>
        <p>We map the fit. Tell us about the caseload, the roles, and the rollout timeline — we come back with a phased proposal.</p>
        <Link to="/canalix/site/contact" className="cta-primary">Talk to us →</Link>
      </section>
    </main>
  )
}
