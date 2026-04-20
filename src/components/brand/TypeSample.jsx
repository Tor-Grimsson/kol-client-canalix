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
      {label && <p className="kol-type-sample__label">{label}</p>}
      <p
        className="kol-type-sample__body"
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
