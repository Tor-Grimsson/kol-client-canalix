/**
 * Color Tokens — reference tables in sheet.png format.
 * Two tables:
 *   1. Primitives (brand contributions, luminance-ordered)
 *   2. Feedback pairs (success/warning/error/info) — BG + FG together
 */
import PageSection from '../../components/cards/PageSection'

const PRIMITIVES = [
  { name: 'white',       hex: '#FFFFFF', brand: 'casedoc', use: 'Casedoc marketing surface' },
  { name: 'cream-50',    hex: '#FAF9F5', brand: 'canalix', use: 'Canalix default surface' },
  { name: 'slate-100',   hex: '#F2F4F7', brand: 'casedoc', use: 'Casedoc UI container tint' },
  { name: 'cream-300',   hex: '#ECE8DE', brand: 'canalix', use: 'Canalix warm surface, secondary' },
  { name: 'yellow-500',  hex: '#DEB430', brand: 'canalix', use: 'Canalix brand accent (identity)' },
  { name: 'red-500',     hex: '#B5523F', brand: 'canalix', use: 'Canalix editorial signal (rare)' },
  { name: 'navy-100',    hex: '#0075CF', brand: 'casedoc', use: 'Casedoc interactive light' },
  { name: 'hugvit-blue', hex: '#00469C', brand: 'casedoc', use: 'Casedoc brand anchor' },
  { name: 'navy-deep',   hex: '#0E3655', brand: 'canalix', use: 'Canalix depth, on-cream contrast' },
  { name: 'hugvit-deep', hex: '#002A5E', brand: 'casedoc', use: 'Casedoc deep surface, nav' },
  { name: 'navy',        hex: '#142438', brand: 'canalix', use: 'Canalix anchor, type on cream' },
  { name: 'slate-900',   hex: '#141C32', brand: 'casedoc', use: 'Casedoc product dark, body on UI' },
]

const FEEDBACK = [
  {
    pair: 'success',
    bg: { token: 'success-surface', hex: '#E8F3EC' },
    fg: { token: 'success-fg',      hex: '#1B6B3C' },
    usage: 'confirmation, completion state',
  },
  {
    pair: 'warning',
    bg: { token: 'warning-surface', hex: '#FBEFD4' },
    fg: { token: 'warning-fg',      hex: '#8A5A10' },
    usage: 'caution, attention required',
  },
  {
    pair: 'error',
    bg: { token: 'error-surface',   hex: '#F4DEDA' },
    fg: { token: 'error-fg',        hex: '#8A2218' },
    usage: 'destructive, blocking, invalid',
  },
  {
    pair: 'info',
    bg: { token: 'info-surface',    hex: '#DEE9F6' },
    fg: { token: 'info-fg',         hex: '#0E3D78' },
    usage: 'neutral system message, tip',
  },
]

const PAIR_COPY = {
  success: { title: 'Confirmed',         body: 'Order submitted successfully.' },
  warning: { title: 'Attention needed',  body: 'Two fields require review.' },
  error:   { title: 'Submission blocked', body: 'Invalid signature on record.' },
  info:    { title: 'Tip',               body: 'Transcripts attach automatically.' },
}

const SwatchDot = ({ hex }) => (
  <span aria-hidden="true" className="kol-color-swatch-dot" style={{ background: hex }} />
)

const BrandBadge = ({ brand }) => (
  <span className="kol-anatomy-brand-dot" data-brand={brand} title={brand}>
    {brand === 'canalix' ? 'CN' : 'CD'}
  </span>
)

function PairSample({ bg, fg, pair }) {
  const copy = PAIR_COPY[pair] ?? { title: 'Sample', body: 'The quick brown fox.' }
  /* background + color are data-driven (BG/FG hex); border derives from color
     via currentColor inside the class rule, so it tracks the inline color. */
  return (
    <div className="kol-color-pair-sample" style={{ background: bg, color: fg }}>
      <span className="kol-color-pair-title">{copy.title}</span>
      <span className="kol-color-pair-body">{copy.body}</span>
    </div>
  )
}

export default function ColorTokens() {
  return (
    <PageSection
      id="color-tokens"
      label="color · tokens"
      title="Tokens, pairs, usage"
      body="Flat reference. First table is the primitives inventory across both brands. Second is the feedback pair set — each row is a background/foreground combination designed to pass contrast together."
    >
      {/* Primitives table */}
      <div className="kol-color-section" data-reveal>
        <div className="kol-color-section-title kol-helper-xs-2 uppercase tracking-widest text-auto">
          Primitives
        </div>
        <div className="kol-color-table-wrap">
          <table className="kol-color-table">
            <thead>
              <tr>
                <th>Token</th>
                <th>Swatch</th>
                <th>Hex</th>
                <th>Brand</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {PRIMITIVES.map((p) => (
                <tr key={p.name}>
                  <td className="kol-color-table-mono">{p.name}</td>
                  <td><SwatchDot hex={p.hex} /></td>
                  <td className="kol-color-table-mono">{p.hex.toUpperCase()}</td>
                  <td><BrandBadge brand={p.brand} /></td>
                  <td className="text-fg-80">{p.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Feedback table */}
      <div data-reveal>
        <div className="kol-color-section-title kol-helper-xs-2 uppercase tracking-widest text-auto">
          Feedback pairs
        </div>
        <div className="kol-color-table-wrap">
          <table className="kol-color-table">
            <thead>
              <tr>
                <th>Pair</th>
                <th>Sample</th>
                <th>Background</th>
                <th>Foreground</th>
                <th>Use</th>
              </tr>
            </thead>
            <tbody>
              {FEEDBACK.map((f) => (
                <tr key={f.pair}>
                  <td className="kol-color-table-mono kol-color-pair-name">{f.pair}</td>
                  <td><PairSample bg={f.bg.hex} fg={f.fg.hex} pair={f.pair} /></td>
                  <td>
                    <SwatchDot hex={f.bg.hex} />
                    <span className="kol-color-table-mono">{f.bg.hex.toUpperCase()}</span>
                    <span className="kol-helper-xxs text-fg-48 kol-color-token-name">{f.bg.token}</span>
                  </td>
                  <td>
                    <SwatchDot hex={f.fg.hex} />
                    <span className="kol-color-table-mono">{f.fg.hex.toUpperCase()}</span>
                    <span className="kol-helper-xxs text-fg-48 kol-color-token-name">{f.fg.token}</span>
                  </td>
                  <td className="text-fg-80">{f.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageSection>
  )
}
