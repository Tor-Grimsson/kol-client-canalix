import { useRef } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../../components/marks/BrandLogo'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const flow = [
  { step: '01', title: 'The call starts in Teams',     body: 'Judges, counsel, witnesses, and the registry join the scheduled hearing via their usual Teams client — no new app to install.' },
  { step: '02', title: 'Roles light up',               body: 'Casedoc recognises each participant and configures their surface: judge gets the bench view; counsel gets exhibits + filings.' },
  { step: '03', title: 'Exhibits share with privilege', body: 'Counsel drags a document into the hearing. It appears for the bench and the opposing side — never for sealed-off parties.' },
  { step: '04', title: 'Transcript attaches',          body: 'Speech is transcribed live and streamed into the case record. Counsel can cite-and-link on the fly.' },
  { step: '05', title: 'Orders issue in-session',      body: 'The judge issues an order — it populates the case file before the call ends. Parties notified automatically.' },
]

const capabilities = [
  { mark: 'mono-12', title: 'Role-aware surfaces', body: 'Each participant sees only what their role permits. Privilege boundaries enforced by the add-on.' },
  { mark: 'mono-09', title: 'Live transcript',     body: 'ASR optimised for legal terminology. Corrections propagate to the record.' },
  { mark: 'mono-05', title: 'Evidence pass-through',body: 'Exhibits shared in-hearing attach to the case, versioned and timestamped.' },
  { mark: 'mono-02', title: 'Order issuance',      body: 'Structured orders populated from hearing outcomes. Court seal applied server-side.' },
  { mark: 'mono-11', title: 'Recording + retention', body: 'Audio, video, and transcript stored per jurisdiction retention rules. Nothing in the Teams cloud by default.' },
  { mark: 'mono-01', title: 'Audit coverage',      body: 'Every action inside the hearing logged as first-class events in the Casedoc audit log.' },
]

export default function CasedocVirtualHearing() {
  usePageTitle('Casedoc — Virtual Hearing')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Virtual Hearing · Teams add-on</span>
            <h1>Turn a call into a courtroom.</h1>
            <p className="lede">
              Virtual Hearing is the Casedoc add-on for Microsoft Teams. An
              ordinary remote meeting becomes a fully functioning hearing —
              role-aware, privilege-aware, record-ready.
            </p>
            <div className="site-hero__ctas">
              <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">See it live →</Link>
              <Link to="/canalix/site/casedoc/features" className="cta-ghost">All features</Link>
            </div>
          </div>
          <div className="site-hero__media" data-reveal>
            <div className="site-hero__media-frame">
              <img src="/brand/casedoc/product-ui/Product UI Abstractions_03.svg" alt="Virtual Hearing interface" />
            </div>
          </div>
        </div>
      </section>

      <section className="panel panel--cream">
        <div className="container">
          <div className="section-intro section-intro--left" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2>Five steps. One session. A full record.</h2>
          </div>
          <div style={{ display: 'grid', gap: 32 }}>
            {flow.map((s) => (
              <div key={s.step} className="split-row" data-reveal style={{ padding: '32px 0', borderTop: '1px solid var(--c-hairline)' }}>
                <div>
                  <span className="eyebrow" style={{ fontSize: 18, letterSpacing: '0.08em' }}>{s.step}</span>
                </div>
                <div>
                  <h3 style={{ marginBottom: 12 }}>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div className="section-intro" data-reveal>
            <span className="eyebrow">Capabilities</span>
            <h2>What ships with the add-on.</h2>
          </div>
          <div className="feature-matrix">
            {capabilities.map((c) => (
              <div key={c.title} className="feature-item" data-reveal>
                <div className="feature-item__icon">
                  <BrandLogo brand="canalix-marks" name={c.mark} />
                </div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>See Virtual Hearing in session.</h2>
        <p>Live demo, including exhibit share, transcript, and order issuance. Bring your bench, your registry, and your questions.</p>
        <Link to="/canalix/site/casedoc/get-demo" className="cta-primary">Book a walkthrough →</Link>
      </section>
    </main>
  )
}
