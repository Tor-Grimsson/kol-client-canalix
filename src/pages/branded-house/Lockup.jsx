/**
 * Lockup — renders a branded-house lockup based on the Canalix system.
 *
 * Three variants:
 *   hero        — big anatomy (mark in rounded box, parent wordmark, big product, descriptors to right)
 *   horizontal  — mark + stacked column (parent wordmark on top, product + descriptor row below)
 *   wordmark    — text only (parent wordmark on top, product + descriptor below, no mark)
 */
import BrandLogo from '../../components/marks/BrandLogo'
import { SCALE_DIMS, resolveTheme } from './lockup-data'

const MONT = '"Montserrat", sans-serif'
// Descriptor slot — Montserrat Medium uppercase with tighter tracking.
// A proper condensed face (e.g. PP Right Grotesk Narrow) could be swapped in
// later if the brand spec calls for it.
const COND = '"Montserrat", sans-serif'

export default function Lockup({
  parent = 'canalix',
  product = '',
  descriptor = '',
  descriptor2 = '',
  scale = 'md',
  variant = 'horizontal',
  theme = 'brand',
  style,
}) {
  const dims = SCALE_DIMS[scale] ?? SCALE_DIMS.md
  const palette = resolveTheme(theme, parent)

  const parentLabel = parent === 'canalix' ? 'Canalix' : 'Casedoc'
  const markBrand = parent
  // Canalix uses logomark-mono; Casedoc uses logomark; both get the light=true currentColor swap
  const markName = parent === 'canalix' ? 'logomark-mono' : 'logomark'

  const baseStyle = {
    background: palette.canvas,
    color: palette.ink,
    transition: 'background 300ms ease, color 300ms ease',
    ...style,
  }

  if (variant === 'hero') {
    return <HeroLockup dims={SCALE_DIMS.xl} parent={parent} parentLabel={parentLabel}
      markBrand={markBrand} markName={markName} product={product}
      descriptor={descriptor} descriptor2={descriptor2} baseStyle={baseStyle} />
  }
  if (variant === 'wordmark') {
    return <WordmarkLockup dims={dims} parentLabel={parentLabel}
      product={product} descriptor={descriptor} baseStyle={baseStyle} />
  }
  return <HorizontalLockup dims={dims} parent={parent} parentLabel={parentLabel}
    markBrand={markBrand} markName={markName} product={product}
    descriptor={descriptor} baseStyle={baseStyle} />
}

/* ─── Horizontal ─── */

function HorizontalLockup({ dims, markBrand, markName, parentLabel, product, descriptor, baseStyle }) {
  const effectiveProduct = product || parentLabel
  const showParentWordmark = Boolean(product)
  return (
    <div style={{ ...baseStyle, display: 'inline-flex', alignItems: 'flex-end', gap: dims.gap, padding: dims.gap * 2, borderRadius: 4 }}>
      <MarkTile brand={markBrand} name={markName} size={dims.mark} ink={baseStyle.color} />
      <div style={{
        display: 'flex', flexDirection: 'column',
        justifyContent: showParentWordmark ? 'space-between' : 'flex-end',
        minHeight: dims.mark, gap: dims.gap / 2,
      }}>
        {showParentWordmark && (
          <span style={{
            fontFamily: MONT, fontWeight: 700, fontSize: dims.wordmark, lineHeight: `${dims.wordmarkLH}px`,
            color: baseStyle.color,
          }}>
            {parentLabel}
          </span>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: dims.gap / 2 }}>
          <span style={{
            fontFamily: MONT, fontWeight: 700, fontSize: dims.product, lineHeight: 1,
            color: baseStyle.color, letterSpacing: '-0.01em',
          }}>
            {effectiveProduct}
          </span>
          {descriptor && (
            <span style={{
              fontFamily: COND, fontWeight: 400, fontSize: dims.descriptor, lineHeight: 1,
              color: baseStyle.color, textTransform: 'uppercase', letterSpacing: '0.01em',
              paddingBottom: dims.descriptor * 0.05,
            }}>
              {descriptor}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Wordmark only ─── */

function WordmarkLockup({ dims, parentLabel, product, descriptor, baseStyle }) {
  return (
    <div style={{ ...baseStyle, display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', padding: dims.gap * 2, borderRadius: 4, gap: dims.gap / 2 }}>
      <span style={{
        fontFamily: MONT, fontWeight: 700, fontSize: dims.wordmark, lineHeight: 1,
        color: baseStyle.color,
      }}>
        {parentLabel}
      </span>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: dims.gap / 2 }}>
        {product && (
          <span style={{
            fontFamily: MONT, fontWeight: 700, fontSize: dims.product, lineHeight: 1,
            color: baseStyle.color, letterSpacing: '-0.01em',
          }}>
            {product}
          </span>
        )}
        {descriptor && (
          <span style={{
            fontFamily: COND, fontWeight: 400, fontSize: dims.descriptor, lineHeight: 1,
            color: baseStyle.color, textTransform: 'uppercase', letterSpacing: '0.01em',
            paddingBottom: dims.descriptor * 0.05,
          }}>
            {descriptor}
          </span>
        )}
      </div>
    </div>
  )
}

/* ─── Hero — big anatomy ─── */

function HeroLockup({ dims, markBrand, markName, parentLabel, product, descriptor, descriptor2, baseStyle }) {
  return (
    <div style={{
      ...baseStyle,
      display: 'inline-flex', alignItems: 'flex-start', gap: dims.gap * 1.5,
      padding: dims.gap * 3, borderRadius: 8,
    }}>
      <MarkTile brand={markBrand} name={markName} size={dims.mark} ink={baseStyle.color} framed />
      <div style={{ display: 'flex', flexDirection: 'column', gap: dims.gap }}>
        <span style={{
          fontFamily: MONT, fontWeight: 700, fontSize: dims.wordmark, lineHeight: 1,
          color: baseStyle.color,
        }}>
          {parentLabel}
        </span>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: dims.gap * 0.75 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: dims.gap * 0.5 }}>
            {product && (
              <span style={{
                fontFamily: MONT, fontWeight: 700, fontSize: dims.product, lineHeight: 1,
                color: baseStyle.color, letterSpacing: '-0.015em',
              }}>
                {product}
              </span>
            )}
            {descriptor && (
              <span style={{
                fontFamily: COND, fontWeight: 500, fontSize: dims.descriptor, lineHeight: 1,
                color: baseStyle.color, opacity: 0.4,
                textTransform: 'uppercase', letterSpacing: '0.01em', textAlign: 'right',
              }}>
                {descriptor}
              </span>
            )}
          </div>
          {descriptor2 && (
            <span style={{
              fontFamily: COND, fontWeight: 400, fontSize: dims.descriptor * 1.2, lineHeight: 1,
              color: baseStyle.color, opacity: 0.4,
              textTransform: 'uppercase', letterSpacing: '0.01em',
              alignSelf: 'flex-start', paddingTop: dims.gap,
            }}>
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
  const padding = framed ? size * 0.12 : 0
  return (
    <div
      style={{
        width: size, height: size, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: ink,
        padding,
        border: framed ? `1px solid color-mix(in srgb, ${ink} 16%, transparent)` : 'none',
        borderRadius: framed ? Math.max(4, size * 0.08) : 0,
        boxSizing: 'border-box',
      }}
    >
      <BrandLogo brand={brand} name={name} light style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
