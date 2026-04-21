/**
 * Composition methods — Frame 6 from AA ref.
 * Shows two ways (single-row, split-row) of expressing the same palette
 * as a proportion bar. Runs on a fixed palette for stability — the Combo
 * Lab below lets you swap through palettes on the same methods.
 */
import PageSection from '../../components/cards/PageSection'
import { PALETTES } from './palettes'
import { StripeRow } from './layouts'

const canalix = PALETTES.find((p) => p.id === 'canalix')
const casedoc = PALETTES.find((p) => p.id === 'casedoc')

export default function Methods() {
  return (
    <PageSection
      id="methods"
      label="composition · methods"
      title="Two ways to express a palette"
      body="Method 01 lays tones out in a single proportional row — easy to read as a palette bar. Method 02 splits each band to show how a token can further subdivide into its own lighter / darker partner. Same data, two levels of resolution."
    >
      <div style={{ display: 'grid', gap: 48 }}>
        <div data-reveal>
          <div className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600, marginBottom: 12 }}>
            Canalix palette · methods
          </div>
          <StripeRow palette={canalix} />
        </div>
        <div data-reveal>
          <div className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600, marginBottom: 12 }}>
            Casedoc palette · methods
          </div>
          <StripeRow palette={casedoc} />
        </div>
      </div>
    </PageSection>
  )
}
