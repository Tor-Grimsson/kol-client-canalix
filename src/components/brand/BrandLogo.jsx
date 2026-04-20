const svgModules = import.meta.glob('./svg/**/*.svg', { eager: true, query: '?raw', import: 'default' })

const LOGO_CACHE = Object.entries(svgModules).reduce((acc, [path, svg]) => {
  const [brand, file] = path.replace('./svg/', '').split('/')
  const name = file.replace('.svg', '')
  if (!acc[brand]) acc[brand] = {}
  acc[brand][name] = svg
  return acc
}, {})

export const BRAND_LOGOS = Object.fromEntries(
  Object.entries(LOGO_CACHE).map(([brand, logos]) => [brand, Object.keys(logos).sort()])
)

export default function BrandLogo({ brand, name = 'logomark', className = '', style, title }) {
  const markup = LOGO_CACHE[brand]?.[name]
  if (!markup) {
    if (import.meta.env.DEV) console.warn(`BrandLogo: ${brand}/${name} not found`)
    return null
  }
  return (
    <span
      className={`kol-brand-logo ${className}`.trim()}
      style={style}
      role={title ? 'img' : undefined}
      aria-label={title}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
