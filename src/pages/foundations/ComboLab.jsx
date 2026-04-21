import { useState } from 'react'
import { PALETTES, LAYOUTS, LOGOS } from './palettes'
import { LAYOUT_COMPONENTS } from './layouts'

const chipBase = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  padding: '6px 12px', fontSize: 12, fontFamily: 'var(--kol-font-family-mono, monospace)',
  letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 500,
  border: '1px solid color-mix(in srgb, var(--kol-surface-on-primary) 16%, transparent)',
  borderRadius: 4, cursor: 'pointer', background: 'transparent', color: 'inherit',
  transition: 'border-color 150ms ease, background 150ms ease, color 150ms ease',
}

const chipActive = {
  ...chipBase,
  borderColor: 'color-mix(in srgb, var(--kol-surface-on-primary) 80%, transparent)',
  background: 'color-mix(in srgb, var(--kol-surface-on-primary) 8%, transparent)',
  color: 'var(--kol-surface-on-primary)',
}

const Chip = ({ active, children, onClick, swatch }) => (
  <button type="button" style={active ? chipActive : chipBase} onClick={onClick}>
    {swatch && <span style={{ width: 10, height: 10, borderRadius: 2, background: swatch, display: 'inline-block' }} />}
    {children}
  </button>
)

const Row = ({ label, children }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 12 }}>
    <span className="kol-helper-xs-2 uppercase tracking-widest text-fg-48" style={{ minWidth: 72 }}>
      {label}
    </span>
    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{children}</div>
  </div>
)

export default function ComboLab() {
  const [layoutId, setLayoutId] = useState(LAYOUTS[0].id)
  const [paletteId, setPaletteId] = useState(PALETTES[2].id) // balanced
  const [logoId, setLogoId] = useState(LOGOS[1].id) // canalix

  const layout = LAYOUTS.find((l) => l.id === layoutId) ?? LAYOUTS[0]
  const palette = PALETTES.find((p) => p.id === paletteId) ?? PALETTES[0]
  const logo = LOGOS.find((l) => l.id === logoId) ?? LOGOS[0]
  const LayoutComponent = LAYOUT_COMPONENTS[layoutId]

  const randomize = () => {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)]
    setLayoutId(pick(LAYOUTS).id)
    setPaletteId(pick(PALETTES).id)
    setLogoId(pick(LOGOS).id)
  }

  return (
    <div className="kol-combo-lab">
      <div className="kol-combo-controls" data-reveal>
        <Row label="Layout">
          {LAYOUTS.map((l) => (
            <Chip key={l.id} active={l.id === layoutId} onClick={() => setLayoutId(l.id)}>
              {l.label}
            </Chip>
          ))}
        </Row>
        <Row label="Palette">
          {PALETTES.map((p) => (
            <Chip key={p.id} active={p.id === paletteId} onClick={() => setPaletteId(p.id)} swatch={p.primary}>
              {p.label}
            </Chip>
          ))}
        </Row>
        <Row label="Logo">
          {LOGOS.map((l) => (
            <Chip key={l.id} active={l.id === logoId} onClick={() => setLogoId(l.id)}>
              {l.label}
            </Chip>
          ))}
        </Row>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8 }}>
          <button type="button" style={{ ...chipBase, padding: '8px 16px', fontWeight: 600 }} onClick={randomize}>
            ↻ randomize
          </button>
          <span className="kol-helper-xxs text-fg-48" style={{ flex: 1 }}>{palette.description}</span>
        </div>
      </div>

      <div className="kol-combo-stage-wrap" data-reveal>
        <div key={layoutId} className="kol-combo-stage-anim">
          <LayoutComponent palette={palette} logo={logo} />
        </div>
      </div>

      <div className="kol-combo-readout" data-reveal>
        <SwatchRow label="Primary"   hex={palette.primary} />
        <SwatchRow label="Secondary" hex={palette.secondary} />
        <SwatchRow label="Light"     hex={palette.light} />
        <SwatchRow label="Dark"      hex={palette.dark} />
        <SwatchRow label="Accent"    hex={palette.accent} />
      </div>

      <p className="kol-helper-xxs text-fg-48" style={{ marginTop: 16 }}>
        <span className="text-fg-80">{layout.label}</span>
        {' × '}
        <span className="text-fg-80">{palette.label}</span>
        {' × '}
        <span className="text-fg-80">{logo.label}</span>
      </p>
    </div>
  )
}

const SwatchRow = ({ label, hex }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
    <span style={{ width: 24, height: 24, background: hex, borderRadius: 3, flexShrink: 0, transition: 'background 400ms ease' }} />
    <span className="kol-helper-xs-2 text-auto" style={{ minWidth: 88, fontWeight: 600 }}>{label}</span>
    <span className="kol-helper-xxs text-fg-48" style={{ fontFamily: 'var(--kol-font-family-mono, monospace)', textTransform: 'uppercase' }}>{hex}</span>
  </div>
)
