const chapters = [
  { n: '01', label: 'hero', title: 'Casedoc — above as below.' },
  { n: '02', label: 'concept', title: 'The feather of Maat' },
  { n: '03', label: 'logo', title: 'The mark' },
  { n: '04', label: 'typography', title: 'Montserrat · Paragraphs' },
  { n: '05', label: 'color', title: 'Product palette' },
  { n: '06', label: 'product-ui', title: 'UI abstractions' },
  { n: '07', label: 'devices', title: 'Devices' },
  { n: '08', label: 'graphics', title: 'Marketing graphics' },
  { n: '09', label: 'website', title: 'casedoc.io' },
  { n: '10', label: 'branded-product', title: 'A product in the house' },
  { n: '11', label: 'close', title: 'Brand sheet' },
]

export default function Casedoc() {
  return (
    <>
      <section className="kol-page__hero">
        <p className="kol-page__section-label">/ casedoc</p>
        <h1 className="kol-page__title">Casedoc</h1>
        <p className="kol-page__lede">
          Flagship product. Digital court evolution. Justice is a feather.
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
