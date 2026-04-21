import { useRef } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const timeline = [
  { year: '1993', title: 'Hugvit founded', body: 'Hugvit ehf. starts building case-management software in Iceland. GoPro is the first product.' },
  { year: '2020', title: 'The rebrand begins', body: 'Hugvit approaches Kolkrabbi Vinnustofa to give a decade-old government tool commercial life under a new brand — GoPro becomes Casedoc.' },
  { year: '2024', title: 'Canalix arrives', body: 'Kolkrabbi delivers the master brand and design system. Casedoc becomes the flagship; Forum, Hearings, Partner, Inspection, Consulting follow.' },
  { year: 'Today', title: 'A house of six', body: 'Canalix serves courts, regulators, and ombudsmen across multiple jurisdictions — with a shared design system and a single operating model.' },
]

export default function CanalixAbout() {
  usePageTitle('Canalix — about')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">About</span>
            <h1>Three decades in the case file.</h1>
            <p className="lede">
              Canalix is the brand that grew up inside Hugvit — thirty years
              of case-management software, now organised as a single house
              with a single identity.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--cream">
        <div className="container">
          <div className="section-intro section-intro--left" data-reveal>
            <span className="eyebrow">Timeline</span>
            <h2>From GoPro to Canalix.</h2>
          </div>
          <div style={{ display: 'grid', gap: 48 }}>
            {timeline.map((t) => (
              <div key={t.year} className="split-row" data-reveal>
                <div>
                  <span className="eyebrow">{t.year}</span>
                </div>
                <div>
                  <h3 style={{ marginBottom: 12 }}>{t.title}</h3>
                  <p>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div className="split-row">
            <div className="split-row__body" data-reveal>
              <span className="eyebrow">The brief</span>
              <h2>A branded house, not a product lineup.</h2>
              <p>
                Kolkrabbi&rsquo;s 2024 brief was precise: build a master brand
                that works the same way the software does. Strong enough to
                anchor a family. Flexible enough to suit a regulator, a
                magistrate, and a constitutional court.
              </p>
              <p>
                The outcome is Canalix — one identity, one design system, six
                products. Casedoc carries the flagship, and every other
                product extends the same language.
              </p>
            </div>
            <div className="split-row__media" data-reveal>
              <img src="/brand/canalix/branded-house/Branded House 2_04.svg" alt="Canalix branded-house sub-brand tier" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Work with us.</h2>
        <p>Implementations take weeks, not quarters. We ship configuration, run training, and stay on as advisors through year one.</p>
        <Link to="/canalix/site/contact" className="cta-primary">Get in touch →</Link>
      </section>
    </main>
  )
}
