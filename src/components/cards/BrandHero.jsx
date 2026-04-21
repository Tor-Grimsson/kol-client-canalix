export default function BrandHero({ id = 'hero', label, title, lede, mark }) {
  return (
    <section id={id} className="kol-page-hero">
      {label && (
        <p className="kol-helper-xs uppercase tracking-widest text-fg-48 m-0 mb-4">
          {label}
        </p>
      )}
      <div className="kol-hero-row">
        {mark}
        <div className="kol-hero-copy">
          <h1 className="kol-display-lg text-auto m-0 mb-6">{title}</h1>
          {lede && (
            <p className="kol-text-lg text-fg-64 m-0 max-w-[60ch]">{lede}</p>
          )}
        </div>
      </div>
    </section>
  )
}
