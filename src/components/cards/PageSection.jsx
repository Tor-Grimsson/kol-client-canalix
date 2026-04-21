export default function PageSection({ id, label, title, body, children, className = '', fullbleed = false }) {
  const hasHead = label || title || body
  const cls = [
    'kol-page',
    'kol-page-section',
    'border-t',
    'border-fg-08',
    fullbleed && 'kol-page--fullbleed',
    className,
  ].filter(Boolean).join(' ')
  return (
    <section id={id} className={cls}>
      {hasHead && (
        <div className={`kol-section-head${fullbleed ? ' kol-section-head--wide' : ''}`}>
          {label && (
            <p className="kol-helper-xs uppercase tracking-widest text-fg-48 m-0 mb-4">
              {label}
            </p>
          )}
          {title && (
            <h2 className="kol-heading-xl text-auto m-0 mb-6">{title}</h2>
          )}
          {body && (
            <p className="kol-text-md text-fg-80 m-0 max-w-[70ch]">{body}</p>
          )}
        </div>
      )}
      {children}
    </section>
  )
}
