/**
 * Color Anatomy — shared system, two contributors.
 * One spectrum, brand attribution on each chip. Not a split.
 */
import PageSection from '../../components/cards/PageSection'

const CANALIX_COLORS = [
  { name: 'cream-50',   hex: '#FAF9F5' },
  { name: 'cream',      hex: '#ECE8DE' },
  { name: 'yellow-500', hex: '#DEB430', role: 'accent' },
  { name: 'red-500',    hex: '#B5523F', role: 'signal' },
  { name: 'navy-deep',  hex: '#0E3655' },
  { name: 'navy',       hex: '#142438', role: 'anchor' },
]

const CASEDOC_COLORS = [
  { name: 'white',       hex: '#FFFFFF' },
  { name: 'slate-100',   hex: '#F2F4F7' },
  { name: 'navy-100',    hex: '#0075CF' },
  { name: 'hugvit-blue', hex: '#00469C', role: 'anchor' },
  { name: 'hugvit-deep', hex: '#002A5E' },
  { name: 'slate-900',   hex: '#141C32' },
]

function luminance(hex) {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16) / 255
  const g = parseInt(h.slice(2, 4), 16) / 255
  const b = parseInt(h.slice(4, 6), 16) / 255
  return 0.299 * r + 0.587 * g + 0.114 * b
}

const ALL = [
  ...CANALIX_COLORS.map((c) => ({ ...c, brand: 'canalix' })),
  ...CASEDOC_COLORS.map((c) => ({ ...c, brand: 'casedoc' })),
].sort((a, b) => luminance(b.hex) - luminance(a.hex))

const textOn = (hex) => (luminance(hex) > 0.55 ? '#0E0E11' : '#FAFAFA')

const SpectrumChip = ({ item }) => (
  <div className="kol-anatomy-chip" style={{ background: item.hex, color: textOn(item.hex) }}>
    <div className="kol-anatomy-chip-head">
      <span className="kol-helper-xxs" style={{ fontWeight: 600, letterSpacing: '0.06em' }}>
        {item.name}
      </span>
      {item.role && (
        <span className="kol-helper-xxs" style={{ opacity: 0.64, textTransform: 'uppercase', fontSize: 9 }}>
          {item.role}
        </span>
      )}
    </div>
    <div className="kol-anatomy-chip-foot">
      <span style={{ fontFamily: 'var(--kol-font-family-mono, monospace)', fontSize: 10 }}>
        {item.hex.toUpperCase()}
      </span>
      <span className="kol-anatomy-brand-dot" data-brand={item.brand}>
        {item.brand === 'canalix' ? 'CN' : 'CD'}
      </span>
    </div>
  </div>
)

const BrandStrip = ({ label, colors, tone }) => (
  <div style={{ marginBottom: 24 }} data-reveal>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
      <span className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600 }}>
        {label}
      </span>
      <span className="kol-helper-xxs text-fg-48">{tone}</span>
    </div>
    <div className="kol-anatomy-strip">
      {colors.map((c) => (
        <div
          key={c.name}
          className="kol-anatomy-strip-cell"
          style={{ background: c.hex, color: textOn(c.hex) }}
        >
          <span className="kol-helper-xxs" style={{ fontWeight: 600, letterSpacing: '0.06em' }}>
            {c.name}
          </span>
          <span style={{ fontFamily: 'var(--kol-font-family-mono, monospace)', fontSize: 10, opacity: 0.72 }}>
            {c.hex.toUpperCase()}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default function ColorAnatomy() {
  return (
    <PageSection
      id="color-anatomy"
      label="color · anatomy"
      title="One system, two contributors"
      body="Color is a shared primitive, not a brand-owned set. Every tone below lives on one luminance spectrum — Canalix contributes the warm, editorial end; Casedoc contributes the bright, clinical end. Both brands use the full range."
    >
      <div data-reveal style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <span className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600 }}>
            Shared spectrum · luminance sort
          </span>
          <span className="kol-helper-xxs text-fg-48">
            <span className="kol-anatomy-legend-dot" data-brand="canalix">CN</span> Canalix
            &nbsp;·&nbsp;
            <span className="kol-anatomy-legend-dot" data-brand="casedoc">CD</span> Casedoc
          </span>
        </div>
        <div className="kol-anatomy-spectrum">
          {ALL.map((item) => <SpectrumChip key={`${item.brand}-${item.name}`} item={item} />)}
        </div>
      </div>

      <BrandStrip label="Canalix contributes" colors={CANALIX_COLORS} tone="cream · navy · yellow · red" />
      <BrandStrip label="Casedoc contributes" colors={CASEDOC_COLORS} tone="white · hugvit-blue · slate" />
    </PageSection>
  )
}
