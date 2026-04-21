export default function TypeSample({
  family = 'Montserrat',
  weight = 400,
  italic = false,
  size = 32,
  lineHeight,
  label,
  children,
}) {
  return (
    <div className="kol-type-sample">
      {label && (
        <p className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 m-0 mb-3">
          {label}
        </p>
      )}
      <p
        className="kol-type-sample-body m-0 text-auto"
        style={{
          fontFamily: `"${family}", sans-serif`,
          fontWeight: weight,
          fontStyle: italic ? 'italic' : 'normal',
          fontSize: `${size}px`,
          lineHeight: lineHeight ? `${lineHeight}px` : '1.2',
        }}
      >
        {children}
      </p>
    </div>
  )
}
