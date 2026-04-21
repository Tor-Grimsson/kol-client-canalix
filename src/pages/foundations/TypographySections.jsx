/**
 * Typography sections — consolidated from the archived Typography page.
 *
 * One overview, one specimens section (with family toggle Mont/Hatton),
 * one rich-text section. Section ids: type-overview, type-specimens,
 * type-richtext.
 */
import { useState } from 'react'
import PageSection from '../../components/cards/PageSection'
import TypeSpecCard from '../../components/cards/TypeSpecCard'
import CodeBlock from '../../components/ui/CodeBlock'

const MONT = '"Montserrat", sans-serif'
const HATTON = '"PP Hatton", serif'
const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id orci in velit cursus consequat.'

/* ── Specimen scales ── */

const mont = {
  id: 'mont',
  label: 'Montserrat',
  family: MONT,
  display: [
    { token: 'D1', size: 80, lh: 88, weight: 700, sample: 'The innovative path we have chosen' },
    { token: 'D2', size: 72, lh: 80, weight: 700, sample: 'The innovative path we have chosen' },
    { token: 'D3', size: 64, lh: 72, weight: 700, sample: 'The innovative path we have chosen' },
  ],
  heading: [
    { token: 'H1', size: 56, lh: 64, weight: 800, sample: 'Wave front — justice resolved on evidence, not paperwork.' },
    { token: 'H2', size: 48, lh: 56, weight: 800, sample: 'Manual sweep across the registry.' },
    { token: 'H3', size: 44, lh: 52, weight: 800, sample: 'Evasive manoeuvres inside the hearing.' },
    { token: 'H4', size: 40, lh: 48, weight: 800, sample: 'Scanning frequencies of the docket.' },
    { token: 'H5', size: 36, lh: 44, weight: 800, sample: 'Attack, decay, sustain, release.' },
    { token: 'H6', size: 32, lh: 40, weight: 800, sample: 'A last, quieter beat at the close.' },
  ],
  subheading: [
    { token: 'S1', weight: 400 },
    { token: 'S2', weight: 500 },
    { token: 'S3', weight: 600 },
    { token: 'S4', weight: 700 },
    { token: 'S5', weight: 600, italic: true },
    { token: 'S6', weight: 400, italic: true },
  ],
  text: [
    { token: 'T1', size: 24, lh: 36, weight: 400 },
    { token: 'T2', size: 20, lh: 32, weight: 400 },
    { token: 'T3', size: 18, lh: 28, weight: 400 },
    { token: 'T4', size: 16, lh: 24, weight: 400 },
    { token: 'T5', size: 14, lh: 20, weight: 400 },
    { token: 'T6', size: 12, lh: 16, weight: 400 },
  ],
}

const hatton = {
  id: 'hatton',
  label: 'PP Hatton',
  family: HATTON,
  heading: [
    { token: 'H1', size: 56, lh: 64, weight: 500, sample: 'Wave front' },
    { token: 'H2', size: 48, lh: 56, weight: 500, sample: 'Manual sweep' },
    { token: 'H3', size: 44, lh: 52, weight: 500, sample: 'Evasive manoeuvres' },
    { token: 'H4', size: 40, lh: 48, weight: 500, sample: 'Scanning frequencies' },
    { token: 'H5', size: 36, lh: 44, weight: 500, sample: 'Attack decay sustain release' },
  ],
}

const FAMILIES = { mont, hatton }

const weightName = (w) => ({
  100: '100 · Thin', 200: '200 · ExtraLight', 300: '300 · Light', 400: '400 · Regular',
  500: '500 · Medium', 600: '600 · SemiBold', 700: '700 · Bold', 800: '800 · ExtraBold', 900: '900 · Black',
}[w] ?? String(w))

const StyleCard = ({ family, weightNum, weightLabel, label }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 16,
    background: 'color-mix(in srgb, var(--kol-surface-on-primary) 4%, transparent)',
    border: '1px solid color-mix(in srgb, var(--kol-surface-on-primary) 8%, transparent)',
    borderRadius: 4, padding: '12px 16px',
  }}>
    <span style={{ fontFamily: family, fontWeight: weightNum, fontSize: 20, width: 32 }}>Aa</span>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span className="kol-helper-xs-2 text-auto" style={{ fontWeight: 600 }}>{label}</span>
      <span className="kol-helper-xxs text-fg-48">{weightLabel}</span>
    </div>
  </div>
)

const ToggleButton = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      padding: '10px 20px',
      border: '1px solid color-mix(in srgb, var(--kol-surface-on-primary) ' + (active ? '80' : '16') + '%, transparent)',
      background: active ? 'color-mix(in srgb, var(--kol-surface-on-primary) 8%, transparent)' : 'transparent',
      color: active ? 'var(--kol-surface-on-primary)' : 'color-mix(in srgb, var(--kol-surface-on-primary) 64%, transparent)',
      borderRadius: 4, cursor: 'pointer',
      fontFamily: 'var(--kol-font-family-mono, monospace)',
      fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
      transition: 'all 180ms ease',
    }}
  >
    {children}
  </button>
)

function SubsectionLabel({ label, count }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '32px 0 12px', marginTop: 16,
      borderBottom: '1px solid color-mix(in srgb, var(--kol-surface-on-primary) 8%, transparent)',
    }}>
      <span className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600 }}>
        {label}
      </span>
      <span className="kol-helper-xxs text-fg-48">{count} specimens</span>
    </div>
  )
}

function DisplaySpec({ family, fontFamily, spec, italic }) {
  return (
    <TypeSpecCard
      key={`${spec.token}-${italic ? 'i' : 'r'}`}
      label={italic ? `${spec.token} · italic` : spec.token}
      meta={[
        ['Family', family],
        ['Weight', weightName(spec.weight)],
        ['Size',   `${spec.size}px`],
        ['Line height', `${spec.lh}px`],
        ['Style',  italic ? 'Italic' : 'Roman'],
      ]}
    >
      <p style={{
        fontFamily, fontWeight: spec.weight, fontSize: spec.size, lineHeight: `${spec.lh}px`,
        letterSpacing: 0, fontStyle: italic ? 'italic' : 'normal',
      }}>
        {spec.sample}
      </p>
    </TypeSpecCard>
  )
}

function SubheadSpec({ family, fontFamily, spec }) {
  return (
    <TypeSpecCard
      key={spec.token}
      label={spec.token}
      meta={[
        ['Family', family],
        ['Weight', weightName(spec.weight)],
        ['Style',  spec.italic ? 'Italic' : 'Regular'],
        ['Size',   '24px'],
        ['Line height', '32px'],
      ]}
    >
      <p style={{
        fontFamily, fontWeight: spec.weight, fontSize: 24, lineHeight: '32px',
        letterSpacing: 0, fontStyle: spec.italic ? 'italic' : 'normal',
      }}>
        The innovative path we have chosen has not become a limiting factor.
      </p>
    </TypeSpecCard>
  )
}

function TextSpec({ family, fontFamily, spec }) {
  return (
    <TypeSpecCard
      key={spec.token}
      label={spec.token}
      meta={[
        ['Family', family],
        ['Weight', weightName(spec.weight)],
        ['Size',   `${spec.size}px`],
        ['Line height', `${spec.lh}px`],
      ]}
    >
      <p style={{
        fontFamily, fontWeight: spec.weight, fontSize: spec.size, lineHeight: `${spec.lh}px`,
        letterSpacing: 0,
      }}>
        {LOREM} Casedoc offers judicial institutions a platform dedicated to justice processes — transparent, impartial, superior.
      </p>
    </TypeSpecCard>
  )
}

export default function TypographySections() {
  const [familyId, setFamilyId] = useState('mont')
  const active = FAMILIES[familyId]

  return (
    <>
      <PageSection
        id="type-overview"
        label="typography · overview"
        title="Two families, one voice"
        body="The Canalix house runs on Montserrat for product and UI, with PP Hatton as the serif display partner for editorial moments. Casedoc inherits the same two families. All specimens below are production-sized — px values, not clamps. Letter-spacing is 0 across the board."
      >
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, maxWidth: 560, marginBottom: 24,
        }} data-reveal>
          <StyleCard label="Montserrat" family={MONT} weightNum={400} weightLabel="Regular" />
          <StyleCard label="Montserrat" family={MONT} weightNum={500} weightLabel="Medium" />
          <StyleCard label="Montserrat" family={MONT} weightNum={600} weightLabel="Semi Bold" />
          <StyleCard label="Montserrat" family={MONT} weightNum={700} weightLabel="Bold" />
          <StyleCard label="Montserrat" family={MONT} weightNum={800} weightLabel="Extra Bold" />
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, maxWidth: 560,
        }} data-reveal>
          <StyleCard label="PP Hatton" family={HATTON} weightNum={400} weightLabel="Regular" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={500} weightLabel="Medium" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={600} weightLabel="Semi Bold" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={700} weightLabel="Bold" />
        </div>
      </PageSection>

      <PageSection
        id="type-specimens"
        label="typography · specimens"
        title="Specimens"
        body="Every tier rendered at production px. Toggle the family to see the same scale in the serif partner. PP Hatton only occupies Heading tiers — subheading and text are Montserrat-only workhorses."
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 32 }} data-reveal>
          <span className="kol-helper-xxs text-fg-48" style={{ marginRight: 8 }}>FAMILY</span>
          {Object.values(FAMILIES).map((f) => (
            <ToggleButton key={f.id} active={familyId === f.id} onClick={() => setFamilyId(f.id)}>
              {f.label}
            </ToggleButton>
          ))}
        </div>

        {active.display && (
          <>
            <SubsectionLabel label="Display" count={active.display.length} />
            {active.display.map((d) => (
              <DisplaySpec key={d.token} family={active.label} fontFamily={active.family} spec={d} />
            ))}
          </>
        )}

        {active.heading && (
          <>
            <SubsectionLabel label="Heading" count={active.heading.length * (active.id === 'hatton' ? 2 : 1)} />
            {active.heading.map((h) => (
              active.id === 'hatton' ? (
                <div key={h.token}>
                  <DisplaySpec family={active.label} fontFamily={active.family} spec={h} italic={false} />
                  <DisplaySpec family={active.label} fontFamily={active.family} spec={h} italic={true} />
                </div>
              ) : (
                <DisplaySpec key={h.token} family={active.label} fontFamily={active.family} spec={h} />
              )
            ))}
          </>
        )}

        {active.subheading && (
          <>
            <SubsectionLabel label="Subheading · 24 / 32 across all weights" count={active.subheading.length} />
            {active.subheading.map((s) => (
              <SubheadSpec key={s.token} family={active.label} fontFamily={active.family} spec={s} />
            ))}
          </>
        )}

        {active.text && (
          <>
            <SubsectionLabel label="Text" count={active.text.length} />
            {active.text.map((t) => (
              <TextSpec key={t.token} family={active.label} fontFamily={active.family} spec={t} />
            ))}
          </>
        )}

        {active.id === 'hatton' && (
          <div style={{
            marginTop: 32, padding: 16,
            border: '1px dashed color-mix(in srgb, var(--kol-surface-on-primary) 16%, transparent)',
            borderRadius: 4,
          }}>
            <span className="kol-helper-xxs text-fg-48">
              PP Hatton is display-only — Subheading and Text tiers stay on Montserrat.
            </span>
          </div>
        )}
      </PageSection>

      <PageSection
        id="type-richtext"
        label="typography · rich text"
        title="Rich-text blocks"
        body="Longer-form composition blocks — paragraph, blockquote, pullout, indented passage, inline code, code block, ordered and unordered lists. All rendered in Montserrat or JetBrains Mono where appropriate."
      >
        <TypeSpecCard
          label="Paragraph"
          meta={[
            ['Element', '<p>'],
            ['Family',  'Montserrat'],
            ['Weight',  '400 · Regular'],
            ['Size',    '16px'],
            ['Line height', '24px'],
            ['Margin',  '0 0 16px'],
          ]}
        >
          <div className="kol-prose">
            <p>{LOREM} The paragraph is the workhorse. Every long-form surface across the site uses it as the base tier.</p>
            <p>Paragraphs stack with a 16px bottom margin — generous but not loose. Body copy reads best at 60–72 characters wide.</p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Blockquote"
          meta={[
            ['Element', '<blockquote>'],
            ['Family',  'Montserrat'],
            ['Weight',  '400 · italic'],
            ['Size',    '16px'],
            ['Left rule', '2px @ 32% fg'],
            ['Padding', '16 24'],
          ]}
        >
          <div className="kol-prose">
            <blockquote>
              <p>Above as below — justice is a feather. The brand's guiding phrase, borrowed from the Egyptian goddess Maat.</p>
            </blockquote>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Pullout"
          meta={[
            ['Family', 'JetBrains Mono'],
            ['Weight', '500 · Medium'],
            ['Size',   '11px'],
            ['Case',   'uppercase'],
            ['Letter spacing', '0.14em'],
            ['Border', 'top + bottom, 8% fg'],
          ]}
        >
          <div className="kol-prose">
            <p className="kol-prose-pullout kol-helper-xs-2 uppercase tracking-widest text-fg-64">
              Pullout — transparent · impartial · superior
            </p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Indented passage"
          meta={[
            ['Wrapper', '.kol-prose-indented'],
            ['Family',  'Montserrat'],
            ['Weight',  '400 · Regular'],
            ['Size',    '16px'],
            ['Padding', 'left 32'],
            ['Left rule', '1px @ 16% fg'],
          ]}
        >
          <div className="kol-prose">
            <div className="kol-prose-indented">
              <p>Indented passage. Used for tangential copy, contextual notes, or nested argument that supports the main line without breaking it.</p>
            </div>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Inline code"
          meta={[
            ['Element', '<code>'],
            ['Family',  'JetBrains Mono'],
            ['Weight',  '400'],
            ['Size',    '0.9em'],
            ['Padding', '1 4'],
            ['Background', '8% fg'],
          ]}
        >
          <div className="kol-prose">
            <p>
              Use <code>var(--c-font-display)</code> on display headings and <code>var(--kol-font-family-mono)</code> for any mono helper.
            </p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Code block"
          meta={[
            ['Element', '<pre><code>'],
            ['Family',  'JetBrains Mono'],
            ['Size',    '13px'],
            ['Line height', '1.5'],
            ['Padding', '16'],
            ['Border',  '1px @ 16% fg'],
            ['Copy',    'button top-right'],
          ]}
        >
          <CodeBlock language="javascript">{`const brand = 'Canalix'
const flagship = 'Casedoc'

function route(pathname) {
  if (pathname.startsWith('/canalix/site')) return 'marketing'
  if (pathname.startsWith('/canalix'))      return 'brand-book'
  return 'portal'
}`}</CodeBlock>
        </TypeSpecCard>

        <TypeSpecCard
          label="Italic emphasis"
          meta={[
            ['Element', '<em>'],
            ['Family',  'Montserrat'],
            ['Style',   'italic'],
            ['Weight',  'inherited'],
            ['Use',     'inline emphasis, book titles, foreign terms'],
          ]}
        >
          <div className="kol-prose">
            <p>
              The ruling hinged on <em>audi alteram partem</em> — hear the other side. In Casedoc, every participant's voice attaches to the record <em>before</em> the bench weighs in.
            </p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Unordered list"
          meta={[
            ['Element', '<ul>'],
            ['Bullet',  'disc'],
            ['Indent',  'padding-left 20'],
            ['Item gap', '6px top + bottom'],
            ['Item lh', '1.5'],
          ]}
        >
          <div className="kol-prose">
            <ul>
              <li>Evidence locker — immutable chain of custody</li>
              <li>Role-aware workflows — bench, registry, counsel</li>
              <li>Live transcripts — attached to the case record</li>
              <li>Scheduling — calendar integration across parties</li>
            </ul>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Ordered list"
          meta={[
            ['Element', '<ol>'],
            ['Marker',  'decimal'],
            ['Indent',  'padding-left 20'],
            ['Item gap', '6px top + bottom'],
            ['Item lh', '1.5'],
          ]}
        >
          <div className="kol-prose">
            <ol>
              <li>The call starts in Teams — all participants present</li>
              <li>Casedoc recognises each role and configures the surface</li>
              <li>Exhibits share with privilege controls enforced</li>
              <li>Transcript attaches to the record in real time</li>
              <li>Orders issue in-session and populate the case file</li>
            </ol>
          </div>
        </TypeSpecCard>
      </PageSection>
    </>
  )
}
