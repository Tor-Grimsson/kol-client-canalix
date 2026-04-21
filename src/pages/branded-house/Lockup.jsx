/**
 * Lockup — renders a branded-house lockup based on the Canalix system.
 *
 * Three variants:
 *   hero        — big anatomy (mark in rounded box, parent wordmark, big product, descriptors to right)
 *   horizontal  — mark + stacked column (parent wordmark on top, product + descriptor row below)
 *   wordmark    — text only (parent wordmark on top, product + descriptor below, no mark)
 *
 * Inline styles here are intentionally data-driven — sizes from `dims` (scale
 * prop), colors from `palette` (theme prop). Constants live in branded-house.css
 * under `.kol-lockup-*` classes.
 */
import BrandLogo from '../../components/marks/BrandLogo'
import { SCALE_DIMS, resolveTheme } from './lockup-data'

export default function Lockup({
  parent = 'canalix',
  product = '',
  descriptor = '',
  descriptor2 = '',
  scale = 'md',
  variant = 'horizontal',
  theme = 'brand',
}) {
  const dims = SCALE_DIMS[scale] ?? SCALE_DIMS.md
  const palette = resolveTheme(theme, parent)

  const parentLabel = parent === 'canalix' ? 'Canalix' : 'Casedoc'
  const markName = parent === 'canalix' ? 'logomark-mono' : 'logomark'

  const shellStyle = { background: palette.canvas, color: palette.ink }

  if (variant === 'hero') {
    return <HeroLockup
      dims={SCALE_DIMS.xl} parentLabel={parentLabel}
      markBrand={parent} markName={markName} product={product}
      descriptor={descriptor} descriptor2={descriptor2} shellStyle={shellStyle} />
  }
  if (variant === 'wordmark') {
    return <WordmarkLockup
      dims={dims} parentLabel={parentLabel}
      product={product} descriptor={descriptor} shellStyle={shellStyle} />
  }
  return <HorizontalLockup
    dims={dims} parentLabel={parentLabel}
    markBrand={parent} markName={markName} product={product}
    descriptor={descriptor} shellStyle={shellStyle} />
}

/* ─── Horizontal ─── */

function HorizontalLockup({ dims, markBrand, markName, parentLabel, product, descriptor, shellStyle }) {
  const effectiveProduct = product || parentLabel
  const showParentWordmark = Boolean(product)
  return (
    <div
      className="kol-lockup-shell kol-lockup-shell--horizontal"
      style={{ ...shellStyle, gap: dims.gap, padding: dims.gap * 2 }}
    >
      <MarkTile brand={markBrand} name={markName} size={dims.mark} ink={shellStyle.color} />
      <div
        className="kol-lockup-column"
        data-align-end={showParentWordmark ? undefined : ''}
        style={{ minHeight: dims.mark, gap: dims.gap / 2 }}
      >
        {showParentWordmark && (
          <span
            className="kol-lockup-parent"
            style={{ fontSize: dims.wordmark, lineHeight: `${dims.wordmarkLH}px` }}
          >
            {parentLabel}
          </span>
        )}
        <div className="kol-lockup-row" style={{ gap: dims.gap / 2 }}>
          <span className="kol-lockup-product" style={{ fontSize: dims.product }}>
            {effectiveProduct}
          </span>
          {descriptor && (
            <span
              className="kol-lockup-descriptor"
              style={{ fontSize: dims.descriptor, paddingBottom: dims.descriptor * 0.05 }}
            >
              {descriptor}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Wordmark only ─── */

function WordmarkLockup({ dims, parentLabel, product, descriptor, shellStyle }) {
  return (
    <div
      className="kol-lockup-shell kol-lockup-shell--wordmark"
      style={{ ...shellStyle, padding: dims.gap * 2, gap: dims.gap / 2 }}
    >
      <span
        className="kol-lockup-parent"
        style={{ fontSize: dims.wordmark }}
      >
        {parentLabel}
      </span>
      <div className="kol-lockup-row" style={{ gap: dims.gap / 2 }}>
        {product && (
          <span className="kol-lockup-product" style={{ fontSize: dims.product }}>
            {product}
          </span>
        )}
        {descriptor && (
          <span
            className="kol-lockup-descriptor"
            style={{ fontSize: dims.descriptor, paddingBottom: dims.descriptor * 0.05 }}
          >
            {descriptor}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Hero — big anatomy ─── */

function HeroLockup({ dims, markBrand, markName, parentLabel, product, descriptor, descriptor2, shellStyle }) {
  return (
    <div
      className="kol-lockup-shell kol-lockup-shell--hero"
      style={{ ...shellStyle, gap: dims.gap * 1.5, padding: dims.gap * 3 }}
    >
      <MarkTile brand={markBrand} name={markName} size={dims.mark} ink={shellStyle.color} framed />
      <div className="kol-lockup-column" style={{ gap: dims.gap }}>
        <span
          className="kol-lockup-parent"
          style={{ fontSize: dims.wordmark }}
        >
          {parentLabel}
        </span>
        <div className="kol-lockup-hero-body" style={{ gap: dims.gap * 0.75 }}>
          <div className="kol-lockup-column" style={{ gap: dims.gap * 0.5 }}>
            {product && (
              <span className="kol-lockup-product kol-lockup-product--hero" style={{ fontSize: dims.product }}>
                {product}
              </span>
            )}
            {descriptor && (
              <span
                className="kol-lockup-descriptor kol-lockup-descriptor--muted kol-lockup-descriptor--right"
                style={{ fontSize: dims.descriptor }}
              >
                {descriptor}
              </span>
            )}
          </div>
          {descriptor2 && (
            <span
              className="kol-lockup-descriptor kol-lockup-descriptor--muted kol-lockup-descriptor2"
              style={{ fontSize: dims.descriptor * 1.2, paddingTop: dims.gap }}
            >
              {descriptor2}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Mark tile ─── */

function MarkTile({ brand, name, size, ink, framed = false }) {
  /* mark-size is a CSS custom prop so the class handles layout math, only
     the size value crosses the boundary inline. */
  return (
    <div
      className={`kol-lockup-mark-tile${framed ? ' is-framed' : ''}`}
      style={{ '--mark-size': `${size}px`, color: ink }}
    >
      <BrandLogo brand={brand} name={name} light className="kol-lockup-mark-svg" />
    </div>
  )
}
