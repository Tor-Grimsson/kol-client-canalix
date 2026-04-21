export default function AssetGrid({ cols = 3, children, className = '' }) {
  return (
    <div className={`kol-asset-grid kol-asset-grid-${cols}col ${className}`.trim()}>
      {children}
    </div>
  )
}
