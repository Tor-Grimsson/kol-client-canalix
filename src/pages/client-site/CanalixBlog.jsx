import { useRef } from 'react'
import { Link } from 'react-router-dom'
import usePageTitle from '../../hooks/usePageTitle'
import useReveal from '../../hooks/useReveal'

const posts = [
  { date: '2026-02-14', tag: 'Product',       title: 'Virtual Hearing 2.0 — real-time transcript, live exhibits', body: 'The second-gen Teams add-on ships: concurrent transcript, exhibit-share with privilege controls, auto-filed into the case record.' },
  { date: '2026-01-22', tag: 'Case study',    title: 'Iceland Ministry of Justice — 90 days to paperless', body: 'How a 40-year-old regional registry moved the full docket to Casedoc in a single fiscal quarter.' },
  { date: '2025-12-02', tag: 'Design system', title: 'Tokens, components, and why every product feels the same', body: 'A look inside the Canalix design system and how it lets Forum, Hearings, and Casedoc ship at the same pace.' },
  { date: '2025-10-18', tag: 'Perspective',   title: 'Justice runs on data — but whose data?', body: 'Sovereignty, audit, privilege, retention. The four questions every digital-court program has to answer.' },
]

export default function CanalixBlog() {
  usePageTitle('Canalix — blog')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <section className="site-hero site-hero--centered">
        <div className="site-hero__inner">
          <div className="site-hero__body" data-reveal>
            <span className="eyebrow">Notes</span>
            <h1>From the bench, the registry, and the studio.</h1>
            <p className="lede">
              Product updates, customer stories, and design-system notes from
              the team building Canalix.
            </p>
          </div>
        </div>
      </section>

      <section className="panel panel--white">
        <div className="container">
          <div style={{ display: 'grid', gap: 0, maxWidth: 880, margin: '0 auto' }}>
            {posts.map((p) => (
              <article key={p.title} data-reveal style={{ padding: '48px 0', borderBottom: '1px solid var(--c-hairline)' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
                  <span className="eyebrow">{p.tag}</span>
                  <span style={{ color: 'var(--c-ink-muted)', fontSize: 13 }}>{new Date(p.date).toLocaleDateString('en', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 style={{ marginBottom: 12 }}>
                  <Link to="#" style={{ color: 'var(--c-ink)' }}>{p.title}</Link>
                </h3>
                <p style={{ color: 'var(--c-ink-muted)', maxWidth: '62ch' }}>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
