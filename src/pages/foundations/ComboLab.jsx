import { useState } from 'react'
import ViewToggle from '../../components/ui/ViewToggle'
import { PALETTES, LAYOUTS, LOGOS } from './palettes'
import { LAYOUT_COMPONENTS } from './layouts'

const toOptions = (items) => items.map((i) => ({ value: i.id, label: i.label }))

function Row({ label, children }) {
  return (
    <div className="kol-combo-row">
      <span className="kol-combo-row-label kol-helper-xs-2 uppercase tracking-widest text-fg-48">
        {label}
      </span>
      <div className="kol-combo-row-controls">{children}</div>
    </div>
  )
}

function SwatchRow({ label, hex }) {
  return (
    <div className="kol-combo-swatch-row">
      <span className="kol-combo-swatch-chip" style={{ background: hex }} />
      <span className="kol-combo-swatch-label kol-helper-xs-2 text-auto">{label}</span>
      <span className="kol-combo-swatch-hex kol-helper-xxs text-fg-48">{hex}</span>
    </div>
  )
}

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
          <ViewToggle viewMode={layoutId} onViewChange={setLayoutId} options={toOptions(LAYOUTS)} />
        </Row>
        <Row label="Palette">
          <ViewToggle viewMode={paletteId} onViewChange={setPaletteId} options={toOptions(PALETTES)} />
        </Row>
        <Row label="Logo">
          <ViewToggle viewMode={logoId} onViewChange={setLogoId} options={toOptions(LOGOS)} />
        </Row>

        <div className="kol-combo-footer">
          <button
            type="button"
            className="kol-combo-randomize kol-helper-xs-2 uppercase tracking-widest"
            onClick={randomize}
          >
            ↻ randomize
          </button>
          <span className="kol-combo-footer-desc kol-helper-xxs text-fg-48">
            {palette.description}
          </span>
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

      <p className="kol-combo-summary kol-helper-xxs text-fg-48">
        <span className="text-fg-80">{layout.label}</span>
        {' × '}
        <span className="text-fg-80">{palette.label}</span>
        {' × '}
        <span className="text-fg-80">{logo.label}</span>
      </p>
    </div>
  )
}
