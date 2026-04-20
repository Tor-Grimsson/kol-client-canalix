import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <section className="kol-page__hero">
        <p className="kol-page__section-label">01 — hello</p>
        <h1 className="kol-page__title">Canalix</h1>
        <p className="kol-page__lede">
          A branded house. Master brand, many children. This site is a
          reference for the identity and the flagship product that lives
          inside it.
        </p>
      </section>

      <section className="kol-page">
        <p className="kol-page__section-label">02 — architecture</p>
        <h2 className="kol-page__section-title">The house</h2>
        <p className="kol-page__section-body">
          One master brand at the top. Products and sub-brands hang beneath
          it. Casedoc is the flagship. Full diagrams forthcoming in the
          Canalix page.
        </p>
      </section>

      <section className="kol-page">
        <p className="kol-page__section-label">03 — pick a door</p>
        <div className="kol-doors">
          <Link to="/canalix" className="kol-door">
            <p className="kol-door__kicker">Master brand</p>
            <h3 className="kol-door__title">Canalix</h3>
            <p className="kol-door__sub">Identity · system · architecture</p>
          </Link>
          <Link to="/casedoc" className="kol-door">
            <p className="kol-door__kicker">Flagship product</p>
            <h3 className="kol-door__title">Casedoc</h3>
            <p className="kol-door__sub">Concept · product · application</p>
          </Link>
        </div>
      </section>
    </>
  )
}
