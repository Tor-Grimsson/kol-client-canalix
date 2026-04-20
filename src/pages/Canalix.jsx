const chapters = [
  { n: '01', label: 'hero', title: 'Canalix — a branded house.' },
  { n: '02', label: 'concept', title: 'The Hugvit / Kolkrabbi brief' },
  { n: '03', label: 'logo', title: 'The mark' },
  { n: '04', label: 'typography', title: 'Montserrat · PP Hatton' },
  { n: '05', label: 'color', title: 'Identity palette' },
  { n: '06', label: 'patterns', title: 'Three tileable patterns' },
  { n: '07', label: 'mood', title: 'Mood imagery' },
  { n: '08', label: 'house', title: 'Branded House architecture' },
  { n: '09', label: 'stationery', title: 'Collateral' },
  { n: '10', label: 'website', title: 'canalix.io' },
  { n: '11', label: 'close', title: 'Brand sheet' },
]

export default function Canalix() {
  return (
    <>
      <section className="kol-page__hero">
        <p className="kol-page__section-label">/ canalix</p>
        <h1 className="kol-page__title">Canalix</h1>
        <p className="kol-page__lede">
          Master brand. Branded house. Identity-first.
        </p>
      </section>

      {chapters.slice(1).map((c) => (
        <section key={c.n} id={c.label} className="kol-page kol-page__section">
          <p className="kol-page__section-label">
            {c.n} — {c.label}
          </p>
          <h2 className="kol-page__section-title">{c.title}</h2>
          <p className="kol-page__section-body">
            Chapter stub. Content lands next pass.
          </p>
        </section>
      ))}
    </>
  )
}
