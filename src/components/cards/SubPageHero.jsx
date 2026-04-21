import { Link } from 'react-router-dom'

export default function SubPageHero({ backTo, backLabel, label, title, lede }) {
  return (
    <section className="kol-page-hero" id="hero">
      {backTo && (
        <Link
          to={backTo}
          className="kol-back-link kol-helper-xs uppercase tracking-widest text-fg-64 hover:text-auto no-underline"
        >
          {backLabel}
        </Link>
      )}
      {label && (
        <p className="kol-helper-xs uppercase tracking-widest text-fg-48 m-0 mb-4">
          {label}
        </p>
      )}
      <div className="kol-hero-copy">
        <h1 className="kol-display-lg text-auto m-0 mb-6">{title}</h1>
        {lede && (
          <p className="kol-text-lg text-fg-64 m-0 max-w-[60ch]">{lede}</p>
        )}
      </div>
    </section>
  )
}
