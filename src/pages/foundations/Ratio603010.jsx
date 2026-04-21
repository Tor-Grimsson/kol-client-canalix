/**
 * 60 / 30 / 10 — static composition reference (Frame 1 from AA ref).
 * Uses the "balanced" palette so both brand primaries are represented.
 */
import PageSection from '../../components/cards/PageSection'
import { PALETTES } from './palettes'
import { RatioBar } from './layouts'

const balanced = PALETTES.find((p) => p.id === 'balanced')

export default function Ratio603010() {
  return (
    <PageSection
      id="color-603010"
      label="color · 60 · 30 · 10"
      title="The composition rule"
      body="Sixty percent surface, thirty percent support, ten percent signature. The classic interior-design ratio maps cleanly to UI — it keeps compositions from going flat or shouting. Every Combo Lab output below respects some variation of it."
    >
      <div style={{ maxWidth: 960 }} data-reveal>
        <RatioBar palette={balanced} logo={{ id: 'none' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
          <Legend label="60% Neutral" hex={balanced.light}
                  note="Surface, page canvas. Does most of the work you don't notice." />
          <Legend label="30% Secondary" hex={balanced.secondary}
                  note="Support. Blocks, containers, structural chrome." />
          <Legend label="10% Primary" hex={balanced.primary}
                  note="Signature. Brand moment, CTA, identity plate." />
        </div>
      </div>
    </PageSection>
  )
}

const Legend = ({ label, hex, note }) => (
  <div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
      <span style={{
        width: 16, height: 16, background: hex, borderRadius: 3,
        border: '1px solid color-mix(in srgb, var(--kol-surface-on-primary) 12%, transparent)',
      }} />
      <span className="kol-helper-xs-2 text-auto" style={{ fontWeight: 600 }}>{label}</span>
    </div>
    <p className="kol-helper-xxs text-fg-48" style={{ margin: 0, lineHeight: 1.5 }}>{note}</p>
  </div>
)
