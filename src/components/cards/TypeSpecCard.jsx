/**
 * TypeSpecCard — meta panel on the left, live sample on the right.
 * Sample is rendered inline-styled so the typography values are driven by data.
 */
export default function TypeSpecCard({ label, meta = [], children }) {
  return (
    <div className="kol-type-spec border-t border-fg-08">
      {label && (
        <span className="kol-type-spec-label kol-helper-xs-2 uppercase tracking-widest text-fg-48">
          {label}
        </span>
      )}
      <div className="kol-type-spec-row">
        <div className="kol-type-spec-meta">
          {meta.map(([key, value]) => (
            <div key={key} className="kol-type-spec-meta-row">
              <span className="kol-helper-xxs text-fg-48">{key}</span>
              <span className="kol-helper-xxs text-fg-80">{value}</span>
            </div>
          ))}
        </div>
        <div className="kol-type-spec-sample">
          {children}
        </div>
      </div>
    </div>
  )
}
