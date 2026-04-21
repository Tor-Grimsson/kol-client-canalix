/**
 * Combo Lab — layout primitives.
 *
 * Every layout accepts { palette, logo } and renders its geometry with the
 * current palette's 5 role-colors. `logo` is optional — when provided, the
 * layout will try to fit it into a logo slot (some layouts ignore this).
 */
import BrandLogo from '../../components/marks/BrandLogo'
import { fgOn } from './palettes'

const FRAME = {
  borderRadius: 4,
  overflow: 'hidden',
  boxShadow: '0 1px 2px color-mix(in srgb, #000 12%, transparent)',
  transition: 'background-color 400ms ease, border-color 400ms ease',
}

const SLAB = {
  padding: 24,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: 0,
  transition: 'background-color 400ms ease, color 400ms ease',
}

const LABEL = { fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }
const NUMBER = { fontSize: 24, fontWeight: 800, letterSpacing: '0.02em' }

const LogoSlot = ({ logo, style, size = 48 }) => {
  if (!logo || logo.id === 'none' || !logo.brand) return null
  return (
    <span className="kol-combo-logo" style={{ display: 'inline-flex', width: size, color: 'currentColor', ...style }}>
      <BrandLogo brand={logo.brand} name={logo.name} />
    </span>
  )
}

const FILL = { height: '100%', minHeight: 360, width: '100%' }

/* ────────── 60 / 30 / 10 ────────── */
export function RatioBar({ palette, logo }) {
  const { primary, secondary, light } = palette
  return (
    <div className="kol-combo-stage" style={{ display: 'flex', ...FILL, ...FRAME }}>
      <div style={{ ...SLAB, flex: 1, background: primary, color: fgOn(primary) }}>
        <span style={LABEL}>Primary</span>
        <LogoSlot logo={logo} size={48} />
        <span style={NUMBER}>10</span>
      </div>
      <div style={{ ...SLAB, flex: 3, background: secondary, color: fgOn(secondary) }}>
        <span style={LABEL}>Secondary</span>
        <span style={NUMBER}>30</span>
      </div>
      <div style={{ ...SLAB, flex: 6, background: light, color: fgOn(light) }}>
        <span style={LABEL}>Neutral</span>
        <span style={NUMBER}>60</span>
      </div>
    </div>
  )
}

/* ────────── Tower — 4-band vertical ────────── */
export function Tower({ palette, logo }) {
  const { primary, secondary, light, dark } = palette
  const band = (bg, label) => (
    <div style={{ ...SLAB, flex: 1, background: bg, color: fgOn(bg), justifyContent: 'flex-end' }}>
      <span style={LABEL}>{label}</span>
    </div>
  )
  return (
    <div className="kol-combo-stage" style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', minHeight: 480, width: '100%', maxWidth: 360,
      margin: '0 auto', ...FRAME,
    }}>
      <div style={{ ...SLAB, flex: 1, background: primary, color: fgOn(primary), justifyContent: 'space-between' }}>
        <LogoSlot logo={logo} size={48} />
        <span style={LABEL}>Primary</span>
      </div>
      {band(secondary, 'Secondary')}
      {band(light, 'Light')}
      {band(dark, 'Dark')}
    </div>
  )
}

/* ────────── Quad split — 50 / 25 / 25 ────────── */
export function QuadSplit({ palette, logo }) {
  const { primary, light, dark, accent } = palette
  return (
    <div className="kol-combo-stage" style={{ display: 'flex', ...FILL, ...FRAME }}>
      <div style={{ ...SLAB, flex: 1, background: primary, color: fgOn(primary), justifyContent: 'space-between' }}>
        <LogoSlot logo={logo} size={64} />
        <span style={LABEL}>Primary · 50</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...SLAB, flex: 1, background: light, color: fgOn(light), justifyContent: 'flex-end' }}>
          <span style={LABEL}>Light · 25</span>
        </div>
        <div style={{ ...SLAB, flex: 1, background: dark, color: fgOn(dark), justifyContent: 'space-between' }}>
          <span style={{ ...LABEL, color: accent }}>Accent</span>
          <span style={LABEL}>Dark · 25</span>
        </div>
      </div>
    </div>
  )
}

/* ────────── Card row — 4 discrete cards ────────── */
export function CardRow({ palette, logo }) {
  const { primary, secondary, light, dark } = palette
  const card = (bg, label, withLogo = false) => (
    <div style={{
      ...SLAB, ...FRAME,
      flex: 1, minHeight: 240, background: bg, color: fgOn(bg),
      padding: 20, justifyContent: withLogo ? 'space-between' : 'flex-end',
    }}>
      {withLogo && <LogoSlot logo={logo} size={40} />}
      <span style={LABEL}>{label}</span>
    </div>
  )
  return (
    <div className="kol-combo-stage" style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16, height: '100%', minHeight: 360, width: '100%',
    }}>
      {card(primary, 'Primary', true)}
      {card(secondary, 'Secondary')}
      {card(light, 'Light')}
      {card(dark, 'Dark')}
    </div>
  )
}

/* ────────── Stripe row — Method 01 / 02 bars ────────── */
export function StripeRow({ palette }) {
  const { primary, secondary, light, dark, accent } = palette
  return (
    <div className="kol-combo-stage" style={{
      ...FRAME, padding: 'clamp(24px, 3vw, 48px)', background: light,
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 32,
      height: '100%', minHeight: 360, width: '100%',
    }}>
      {/* Method 01 — single-row proportion bar */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
        <div style={{ display: 'flex', flex: 1, height: 96 }}>
          <div style={{ flex: 6, background: primary, transition: 'background-color 400ms ease' }} />
          <div style={{ flex: 3, background: light, borderTop: `1px solid ${dark}20`, borderBottom: `1px solid ${dark}20`, transition: 'background-color 400ms ease' }} />
          <div style={{ flex: 1, background: accent, transition: 'background-color 400ms ease' }} />
        </div>
        <span style={{ ...LABEL, color: fgOn(light), minWidth: 96 }}>Method 01</span>
      </div>
      {/* Method 02 — split-row */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24 }}>
        <div style={{ display: 'flex', flex: 1, height: 64 }}>
          <div style={{ flex: 3, display: 'flex' }}>
            <div style={{ flex: 1, background: primary }} />
            <div style={{ flex: 1, background: secondary }} />
          </div>
          <div style={{ flex: 3, display: 'flex' }}>
            <div style={{ flex: 1, background: light, borderTop: `1px solid ${dark}20`, borderBottom: `1px solid ${dark}20` }} />
            <div style={{ flex: 1, background: light, border: `1.73px solid ${accent}` }} />
          </div>
          <div style={{ flex: 1, display: 'flex' }}>
            <div style={{ flex: 1, background: accent }} />
            <div style={{ flex: 1, background: dark }} />
          </div>
        </div>
        <span style={{ ...LABEL, color: fgOn(light), minWidth: 96 }}>Method 02</span>
      </div>
    </div>
  )
}

/* ────────── Applied card — brand-applied tile (card + logo + swatches) ────────── */
export function AppliedCard({ palette, logo }) {
  const { primary, secondary, light, dark, accent } = palette
  return (
    <div className="kol-combo-stage" style={{
      ...FRAME, background: light, display: 'flex',
      height: '100%', minHeight: 360, width: '100%',
    }}>
      {/* Main logo plate */}
      <div style={{
        flex: 2, background: primary, color: fgOn(primary),
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 32,
      }}>
        <LogoSlot logo={logo} size={72} />
        <span style={LABEL}>Front</span>
      </div>
      {/* Right swatch column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ ...SLAB, flex: 3, background: light, color: fgOn(light), justifyContent: 'space-between' }}>
          <span style={LABEL}>Surface</span>
          <div style={{ display: 'flex', gap: 8 }}>
            <span style={{ width: 20, height: 20, background: secondary, borderRadius: 2 }} />
            <span style={{ width: 20, height: 20, background: accent, borderRadius: 2 }} />
          </div>
        </div>
        <div style={{ flex: 2, background: secondary }} />
        <div style={{ flex: 1, background: dark }} />
      </div>
    </div>
  )
}

export const LAYOUT_COMPONENTS = {
  'ratio-603010': RatioBar,
  'tower':        Tower,
  'quad-split':   QuadSplit,
  'card-row':     CardRow,
  'stripe-row':   StripeRow,
  'applied-card': AppliedCard,
}
