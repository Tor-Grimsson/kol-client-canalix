import { useRef } from 'react'
import PageSection from '../components/cards/PageSection'
import TypeSpecCard from '../components/cards/TypeSpecCard'
import usePageTitle from '../hooks/usePageTitle'
import useReveal from '../hooks/useReveal'

const MONT = '"Montserrat", sans-serif'
const HATTON = '"PP Hatton", serif'

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id orci in velit cursus consequat."

// ── Display scale: D1–D3, Medium (500) / Bold (700)
const displayScale = [
  { token: 'D1', size: 80, lh: 88, weight: 700, sample: 'The innovative path we have chosen' },
  { token: 'D2', size: 72, lh: 80, weight: 700, sample: 'The innovative path we have chosen' },
  { token: 'D3', size: 64, lh: 72, weight: 700, sample: 'The innovative path we have chosen' },
]

// ── Heading scale: H1–H6, Medium / Extra Bold (800)
const headingScale = [
  { token: 'H1', size: 56, lh: 64, weight: 800, sample: 'Wave front — justice resolved on evidence, not paperwork.' },
  { token: 'H2', size: 48, lh: 56, weight: 800, sample: 'Manual sweep across the registry.' },
  { token: 'H3', size: 44, lh: 52, weight: 800, sample: 'Evasive manoeuvres inside the hearing.' },
  { token: 'H4', size: 40, lh: 48, weight: 800, sample: 'Scanning frequencies of the docket.' },
  { token: 'H5', size: 36, lh: 44, weight: 800, sample: 'Attack, decay, sustain, release.' },
  { token: 'H6', size: 32, lh: 40, weight: 800, sample: 'A last, quieter beat at the close.' },
]

// ── Subheading: S1–S6, all 24/32, Regular / Medium / Semi Bold / Bold
const subheadingScale = [
  { token: 'S1', weight: 400 },
  { token: 'S2', weight: 500 },
  { token: 'S3', weight: 600 },
  { token: 'S4', weight: 700 },
  { token: 'S5', weight: 600, italic: true },
  { token: 'S6', weight: 400, italic: true },
]

// ── Text scale: T1–T6
const textScale = [
  { token: 'T1', size: 24, lh: 36, weight: 400 },
  { token: 'T2', size: 20, lh: 32, weight: 400 },
  { token: 'T3', size: 18, lh: 28, weight: 400 },
  { token: 'T4', size: 16, lh: 24, weight: 400 },
  { token: 'T5', size: 14, lh: 20, weight: 400 },
  { token: 'T6', size: 12, lh: 16, weight: 400 },
]

// ── PP Hatton display: H1–H5 roman + italic
const hattonScale = [
  { token: 'H1', size: 56, lh: 64, weight: 500, sample: 'Wave front' },
  { token: 'H2', size: 48, lh: 56, weight: 500, sample: 'Manual sweep' },
  { token: 'H3', size: 44, lh: 52, weight: 500, sample: 'Evasive manoeuvres' },
  { token: 'H4', size: 40, lh: 48, weight: 500, sample: 'Scanning frequencies' },
  { token: 'H5', size: 36, lh: 44, weight: 500, sample: 'Attack decay sustain release' },
]

const weightName = (w) => ({
  100: '100 · Thin', 200: '200 · ExtraLight', 300: '300 · Light', 400: '400 · Regular',
  500: '500 · Medium', 600: '600 · SemiBold', 700: '700 · Bold', 800: '800 · ExtraBold', 900: '900 · Black',
}[w] ?? String(w))

const StyleCard = ({ label, family, weightNum, weightLabel }) => (
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

export default function Typography() {
  usePageTitle('Typography')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      {/* ══ INTRODUCTION ══ */}
      <PageSection
        id="introduction"
        label="00 — introduction"
        title="Typography"
        body="The Canalix house runs on two families: Montserrat for product and UI, PP Hatton as the serif display partner for marketing moments. Every style below is production-sized — px values, not clamps. Letter-spacing is 0 across the board."
      />

      {/* ══ STYLES ══ */}
      <PageSection id="styles" label="01 — styles" title="Montserrat · the workhorse">
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, maxWidth: 560, marginBottom: 32,
        }} data-reveal>
          <StyleCard label="Montserrat" family={MONT} weightNum={400} weightLabel="Regular" />
          <StyleCard label="Montserrat" family={MONT} weightNum={500} weightLabel="Medium" />
          <StyleCard label="Montserrat" family={MONT} weightNum={600} weightLabel="Semi Bold" />
          <StyleCard label="Montserrat" family={MONT} weightNum={700} weightLabel="Bold" />
          <StyleCard label="Montserrat" family={MONT} weightNum={800} weightLabel="Extra Bold" />
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, maxWidth: 560, marginBottom: 32,
        }} data-reveal>
          <StyleCard label="PP Hatton" family={HATTON} weightNum={400} weightLabel="Regular" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={500} weightLabel="Medium" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={600} weightLabel="Semi Bold" />
          <StyleCard label="PP Hatton" family={HATTON} weightNum={700} weightLabel="Bold" />
        </div>
      </PageSection>

      {/* ══ DISPLAY ══ */}
      <PageSection
        id="display"
        label="02 — display"
        title="Display"
        body="Montserrat at its largest. Bold by default; Medium (500) available when a lighter display moment is wanted. No letter-spacing."
      >
        {displayScale.map((d) => (
          <TypeSpecCard
            key={d.token}
            label={d.token}
            meta={[
              ['Family',       'Montserrat'],
              ['Weight',       weightName(d.weight)],
              ['Size',         `${d.size}px`],
              ['Line height',  `${d.lh}px`],
              ['Letter spacing','0'],
            ]}
          >
            <p style={{ fontFamily: MONT, fontWeight: d.weight, fontSize: d.size, lineHeight: `${d.lh}px`, letterSpacing: 0 }}>
              {d.sample}
            </p>
          </TypeSpecCard>
        ))}
      </PageSection>

      {/* ══ HEADING ══ */}
      <PageSection
        id="heading"
        label="03 — heading"
        title="Heading"
        body="Montserrat ExtraBold (800) — the signature weight that separates Heading from Display. Six steps from H1 down to H6."
      >
        {headingScale.map((h) => (
          <TypeSpecCard
            key={h.token}
            label={h.token}
            meta={[
              ['Family',       'Montserrat'],
              ['Weight',       weightName(h.weight)],
              ['Size',         `${h.size}px`],
              ['Line height',  `${h.lh}px`],
              ['Letter spacing','0'],
            ]}
          >
            <p style={{ fontFamily: MONT, fontWeight: h.weight, fontSize: h.size, lineHeight: `${h.lh}px`, letterSpacing: 0 }}>
              {h.sample}
            </p>
          </TypeSpecCard>
        ))}
      </PageSection>

      {/* ══ SUBHEADING ══ */}
      <PageSection
        id="subheading"
        label="04 — subheading"
        title="Subheading"
        body="One size (24 / 32) — six use-slots differentiated by weight and voice, not scale. Pick the weight that matches the surface."
      >
        {subheadingScale.map((s) => (
          <TypeSpecCard
            key={s.token}
            label={s.token}
            meta={[
              ['Family',       'Montserrat'],
              ['Weight',       weightName(s.weight)],
              ['Style',        s.italic ? 'Italic' : 'Regular'],
              ['Size',         '24px'],
              ['Line height',  '32px'],
              ['Letter spacing','0'],
            ]}
          >
            <p style={{ fontFamily: MONT, fontWeight: s.weight, fontSize: 24, lineHeight: '32px', letterSpacing: 0, fontStyle: s.italic ? 'italic' : 'normal' }}>
              The innovative path we have chosen has not become a limiting factor.
            </p>
          </TypeSpecCard>
        ))}
      </PageSection>

      {/* ══ TEXT ══ */}
      <PageSection
        id="text"
        label="05 — text"
        title="Text"
        body="Body copy scale — T1 for lede-style paragraphs down to T6 for legal fine print. All Regular (400) by default; weights 500, 600, 700 available for emphasis inline."
      >
        {textScale.map((t) => (
          <TypeSpecCard
            key={t.token}
            label={t.token}
            meta={[
              ['Family',       'Montserrat'],
              ['Weight',       weightName(t.weight)],
              ['Size',         `${t.size}px`],
              ['Line height',  `${t.lh}px`],
              ['Letter spacing','0'],
            ]}
          >
            <p style={{ fontFamily: MONT, fontWeight: t.weight, fontSize: t.size, lineHeight: `${t.lh}px`, letterSpacing: 0 }}>
              {LOREM} Casedoc offers judicial institutions a platform dedicated to justice processes — transparent, impartial, superior.
            </p>
          </TypeSpecCard>
        ))}
      </PageSection>

      {/* ══ PP HATTON ══ */}
      <PageSection
        id="hatton"
        label="06 — pp hatton"
        title="PP Hatton — the serif partner"
        body="PP Hatton is the Canalix marketing serif — editorial moments, hero display, pull quotes. Five tiers H1 to H5 matching the Montserrat heading scale, rendered in both roman and italic."
      >
        {hattonScale.map((h) => (
          <div key={h.token}>
            <TypeSpecCard
              label={`${h.token} · roman`}
              meta={[
                ['Family',      'PP Hatton'],
                ['Weight',      weightName(h.weight)],
                ['Size',        `${h.size}px`],
                ['Line height', `${h.lh}px`],
                ['Style',       'Roman'],
              ]}
            >
              <p style={{ fontFamily: HATTON, fontWeight: h.weight, fontSize: h.size, lineHeight: `${h.lh}px` }}>
                {h.sample}
              </p>
            </TypeSpecCard>
            <TypeSpecCard
              label={`${h.token} · italic`}
              meta={[
                ['Family',      'PP Hatton'],
                ['Weight',      weightName(h.weight)],
                ['Size',        `${h.size}px`],
                ['Line height', `${h.lh}px`],
                ['Style',       'Italic'],
              ]}
            >
              <p style={{ fontFamily: HATTON, fontWeight: h.weight, fontSize: h.size, lineHeight: `${h.lh}px`, fontStyle: 'italic' }}>
                {h.sample}
              </p>
            </TypeSpecCard>
          </div>
        ))}
      </PageSection>

      {/* ══ RICH TEXT ══ */}
      <PageSection
        id="richtext"
        label="07 — rich text"
        title="Rich-text blocks"
        body="Longer-form composition blocks: paragraph, quote, pullout, indented passage, inline code, code block, ordered and unordered lists."
      >
        <TypeSpecCard
          label="Paragraph"
          meta={[
            ['Element',  '<p>'],
            ['Family',   'Montserrat'],
            ['Weight',   '400 · Regular'],
            ['Size',     '16px'],
            ['Line height','24px'],
            ['Margin',   '0 0 16px'],
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
            ['Element',  '<blockquote>'],
            ['Family',   'Montserrat'],
            ['Weight',   '400 · italic'],
            ['Size',     '16px'],
            ['Left rule','2px @ 32% fg'],
            ['Padding',  '16 24'],
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
            ['Family',       'JetBrains Mono'],
            ['Weight',       '500 · Medium'],
            ['Size',         '11px'],
            ['Case',         'uppercase'],
            ['Letter spacing','0.14em'],
            ['Border',       'top + bottom, 8% fg'],
          ]}
        >
          <div className="kol-prose">
            <p className="kol-prose-pullout kol-helper-xs-2 uppercase tracking-widest text-fg-64">
              Pullout — transparent · impartial · superior
            </p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Indented"
          meta={[
            ['Wrapper',  '.kol-prose-indented'],
            ['Family',   'Montserrat'],
            ['Weight',   '400 · Regular'],
            ['Size',     '16px'],
            ['Padding',  'left 32'],
            ['Left rule','1px @ 16% fg'],
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
            ['Element',  '<code>'],
            ['Family',   'JetBrains Mono'],
            ['Weight',   '400'],
            ['Size',     '0.9em'],
            ['Padding',  '1 4'],
            ['Background','8% fg'],
          ]}
        >
          <div className="kol-prose">
            <p>
              Use <code>var(--c-font-display)</code> on display headings and <code>var(--kol-font-family-mono)</code> for any mono helper. Never hardcode <code>'Montserrat'</code> inline unless it's a specimen.
            </p>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Code block"
          meta={[
            ['Element',  '<pre><code>'],
            ['Family',   'JetBrains Mono'],
            ['Size',     '13px'],
            ['Line height','1.5'],
            ['Padding',  '16'],
            ['Border',   '1px @ 8% fg'],
          ]}
        >
          <div className="kol-prose">
            <pre><code>{`const brand  = 'Canalix'
const flagship = 'Casedoc'

function route(pathname) {
  if (pathname.startsWith('/canalix/site')) return 'marketing'
  if (pathname.startsWith('/canalix'))      return 'brand-book'
  return 'portal'
}`}</code></pre>
          </div>
        </TypeSpecCard>

        <TypeSpecCard
          label="Unordered list"
          meta={[
            ['Element',  '<ul>'],
            ['Bullet',   'disc'],
            ['Indent',   'padding-left 20'],
            ['Item gap', '6px top + bottom'],
            ['Item lh',  '1.5'],
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
            ['Element',  '<ol>'],
            ['Marker',   'decimal'],
            ['Indent',   'padding-left 20'],
            ['Item gap', '6px top + bottom'],
            ['Item lh',  '1.5'],
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
    </main>
  )
}
