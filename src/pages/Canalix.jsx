import Ramp from '../components/brand/Ramp'
import TypeSample from '../components/brand/TypeSample'
import AssetGrid from '../components/brand/AssetGrid'
import AssetFigure from '../components/brand/AssetFigure'
import BrandLogo from '../components/brand/BrandLogo'
import LogoCard from '../components/brand/LogoCard'
import MoodTile from '../components/brand/MoodTile'
import Table from '../components/molecules/Table'
import Carousel from '../components/molecules/Carousel'
import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

const identityRamps = [
  { name: 'grey',   stops: [['grey-50','#FAFAFA'],['grey-100','#F3F3F3'],['grey-200','#E6E6E6'],['grey-300','#BFBFBF'],['grey-400','#9F9F9F'],['grey-500','#818181'],['grey-600','#5E5E5E'],['grey-700','#383939'],['grey-800','#1D1D1D'],['grey-900','#121315']] },
  { name: 'cream',  stops: [['cream-50','#FAF9F5'],['cream-100','#F5F3EF'],['cream-200','#F0EDE9'],['cream-300','#ECE8DE'],['cream-400','#E5E0D6'],['cream-500','#DCD6C8'],['cream-600','#D3CCBA'],['cream-700','#C9C2B0']] },
  { name: 'slate',  stops: [['slate-300','#B9BABD'],['slate-400','#787C85'],['slate-500','#4F535C'],['slate-600','#3A3E47'],['slate-700','#262A33'],['slate-800','#1E1E21']] },
  { name: 'yellow', stops: [['yellow-200','#FAE290'],['yellow-300','#F9D86B'],['yellow-400','#F7CE46'],['yellow-500 · brand','#DEB430']] },
  { name: 'orange', stops: [['orange-500','#CB7D26'],['orange-600','#B76912'],['orange-700','#A55700']] },
  { name: 'red',    stops: [['red-200','#F5A693'],['red-300','#E58168'],['red-400','#D06C53'],['red-500 · brand','#B5523F']] },
  { name: 'brown',  stops: [['brown-500','#835831'],['brown-600','#6F441D'],['brown-700','#5D320B'],['brown-800','#34291F']] },
  { name: 'blue',   stops: [['blue-500 · brand','#225FA6'],['blue-800 · brand','#0E3655'],['blue-900 · brand','#142438']] },
  { name: 'navy',   stops: [['navy-500','#48576A'],['navy-600','#3B4757'],['navy-700','#303A47']] },
]

const logoVariants = [
  { name: 'logomark',    caption: 'logomark · canonical' },
  { name: 'logomark-01', caption: 'logomark · 01' },
  { name: 'logomark-02', caption: 'logomark · contained' },
  { name: 'logomark-03', caption: 'logomark · alt' },
  { name: 'lockup',      caption: 'lockup · vertical' },
  { name: 'lockup-1',    caption: 'lockup · vertical tight' },
  { name: 'lockup-2',    caption: 'lockup · contained' },
  { name: 'lockup-3',    caption: 'lockup · horizontal' },
  { name: 'lockup-4',    caption: 'lockup · horizontal wide' },
  { name: 'wordmark',    caption: 'wordmark' },
]

const moodFiles = ['mood-no-logo-01', 'mood-no-logo-02', 'mood-no-logo-03', 'mood-no-logo-04']

const stationeryFiles = ['01', '02', '03']

const montserratScale = [
  { token: 'D1', weight: 700, size: 72, lh: 80 },
  { token: 'H1', weight: 700, size: 56, lh: 64 },
  { token: 'H2', weight: 600, size: 40, lh: 48 },
  { token: 'H3', weight: 600, size: 32, lh: 40 },
  { token: 'H4', weight: 500, size: 24, lh: 32 },
  { token: 'S1', weight: 500, size: 20, lh: 28 },
  { token: 'T1', weight: 400, size: 16, lh: 24 },
  { token: 'T2', weight: 400, size: 14, lh: 20 },
  { token: 'L1', weight: 500, size: 12, lh: 16 },
]

const hattonScale = [
  { token: 'Ultralight', weight: 200, sample: 'Above as below' },
  { token: 'Light',      weight: 300, sample: 'Above as below' },
  { token: 'Medium',     weight: 500, sample: 'Above as below' },
  { token: 'Bold',       weight: 700, sample: 'Above as below' },
  { token: 'Ultrabold',  weight: 900, sample: 'Above as below' },
]

const typeColumns = (family) => [
  { header: 'Token', accessor: 'token', className: 'kol-table-cell-title' },
  { header: 'Weight', accessor: 'weight' },
  { header: 'Size / LH', accessor: 'size', render: (r) => `${r.size} / ${r.lh}` },
  { header: 'Preview', accessor: 'preview', render: (r) => (
    <span style={{ fontFamily: `"${family}", sans-serif`, fontWeight: r.weight, fontSize: `${Math.min(r.size, 20)}px`, lineHeight: 1.2 }}>
      The quick brown fox
    </span>
  ), className: 'kol-table-cell-text', style: { whiteSpace: 'normal' } },
]

const hattonColumns = [
  { header: 'Style', accessor: 'token', className: 'kol-table-cell-title' },
  { header: 'Weight', accessor: 'weight' },
  { header: 'Roman', accessor: 'roman', render: (r) => (
    <span style={{ fontFamily: '"PP Hatton", serif', fontWeight: r.weight, fontSize: '20px' }}>
      {r.sample}
    </span>
  ), style: { whiteSpace: 'normal' } },
  { header: 'Italic', accessor: 'italic', render: (r) => (
    <span style={{ fontFamily: '"PP Hatton", serif', fontWeight: r.weight, fontStyle: 'italic', fontSize: '20px' }}>
      {r.sample}
    </span>
  ), style: { whiteSpace: 'normal' } },
]

export default function Canalix() {
  usePageTitle('Canalix')

  return (
    <>
      {/* 01 — Hero */}
      <section className="kol-page__hero" id="hero">
        <p className="kol-page__section-label">/ canalix</p>
        <div className="kol-hero__row">
          <BrandLogo brand="canalix" name="logomark-light" className="kol-hero__mark" title="Canalix" />
          <div className="kol-hero__copy">
            <h1 className="kol-page__title">Canalix</h1>
            <p className="kol-page__lede">
              Master brand. Branded house. Strong, trustworthy, and elegant —
              yet flexible enough to counter the rigid nature of governmental
              institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Concept */}
      <section id="concept" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">02 — concept</p>
          <h2 className="kol-page__section-title">The Hugvit / Kolkrabbi brief</h2>
        </div>
        <div className="kol-prose">
          <p>
            Kolkrabbi was commissioned in <strong>2024</strong> to create a new visual
            identity for <strong>Hugvit</strong> — founded in 1993, a leading provider
            of case management software serving private and public sector organisations
            globally — and their suite of products and solutions. The mission:{' '}
            <em>transforming digital courts</em>. The outcome is <strong>Canalix</strong>.
          </p>
          <h3>Branded House</h3>
          <p>
            A strategy where multiple products are presented under a single name and
            branding umbrella. Chosen here because it unifies and tightens brand output
            with style consistency across a broad product portfolio — Consulting,
            Casedoc suite, Forum family, Hearings, Partner, Inspection.
          </p>
          <h3>Scope of the brief</h3>
          <ul>
            <li>Visual identity system</li>
            <li>Flexible UI/UX design system for the web</li>
            <li>Visual style for illustrative elements</li>
            <li>Product UI treatment</li>
            <li>Brand collateral</li>
          </ul>
          <h3>Personality target</h3>
          <p>
            Strong, trustworthy, and elegant, yet flexible enough to counter the rigid
            nature of governmental institutions. Designed with scalability in mind.
          </p>
          <p className="kol-prose__pullout">Services delivered — visual identity · logo design · branded house</p>
        </div>
      </section>

      {/* 03 — Logo */}
      <section id="logo" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">03 — logo</p>
          <h2 className="kol-page__section-title">The mark</h2>
          <p className="kol-page__section-body">
            Four-blade pinwheel. Navy body with a mustard-yellow blade. Rounded-square
            container variant for app icons. Ten production sizes from 128px down to
            8px — wordmark drops below 24px.
          </p>
        </div>
        <Carousel>
          {logoVariants.map((l) => (
            <LogoCard key={l.name} brand="canalix" name={l.name} caption={l.caption} light />
          ))}
        </Carousel>
      </section>

      {/* 04 — Prose specimen */}
      <section id="prose" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">04 — prose</p>
          <h2 className="kol-page__section-title">Rich-text specimen</h2>
          <p className="kol-page__section-body">
            Headings, paragraph, quote, indented, code, pullout — the blocks used
            across marketing copy and long-form writing.
          </p>
        </div>
        <div className="kol-prose">
          <h1>H1 — Headline</h1>
          <h2>H2 — Section title</h2>
          <h3>H3 — Subsection</h3>
          <h4>H4 — Block title</h4>
          <p className="kol-prose__section-lede">
            Section lede — a larger paragraph used to introduce a section and
            establish tone before the body copy begins.
          </p>
          <p>
            Paragraph. The outcome is Canalix — a master brand sitting over a
            coherent family of products, each expressing the identity in its own
            application context without losing the parent voice.
          </p>
          <blockquote>
            <p>Above as below — justice is a feather.</p>
          </blockquote>
          <div className="kol-prose__indented">
            <p>
              Indented passage. Used for tangential copy, contextual notes, or
              nested argument that supports the main line without breaking it.
            </p>
          </div>
          <pre><code>{`const brand = 'Canalix'
const flagship = 'Casedoc'`}</code></pre>
          <p className="kol-prose__pullout">Pullout — strong, trustworthy, elegant · flexible under pressure</p>
          <ul>
            <li>Unordered list — item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ul>
          <ol>
            <li>Ordered list — item one</li>
            <li>Item two</li>
            <li>Item three</li>
          </ol>
        </div>
      </section>

      {/* 05 — Montserrat */}
      <section id="montserrat" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">05 — montserrat</p>
          <h2 className="kol-page__section-title">Montserrat</h2>
          <p className="kol-page__section-body">
            The primary family. Carries product and UI. Full scale below — D1 to L1.
          </p>
        </div>
        <Table className="kol-table--simple" columns={typeColumns('Montserrat')} rows={montserratScale} />
        <div style={{ marginTop: 48 }}>
          <TypeSample label="Montserrat · 700 · 56/64 · H1" family="Montserrat" weight={700} size={56} lineHeight={64}>
            Transforming justice through advanced case management.
          </TypeSample>
          <TypeSample label="Montserrat · 500 · 32/40 · H3" family="Montserrat" weight={500} size={32} lineHeight={40}>
            Transforming justice through advanced case management.
          </TypeSample>
          <TypeSample label="Montserrat · 400 · 16/24 · T1" family="Montserrat" weight={400} size={16} lineHeight={24}>
            The base paragraph style for body copy across the design system.
          </TypeSample>
        </div>
      </section>

      {/* 06 — PP Hatton */}
      <section id="hatton" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">06 — pp hatton</p>
          <h2 className="kol-page__section-title">PP Hatton</h2>
          <p className="kol-page__section-body">
            Marketing serif. Display headlines, keynote settings, editorial
            moments. Five weights with italic companions.
          </p>
        </div>
        <Table className="kol-table--simple" columns={hattonColumns} rows={hattonScale} />
        <div style={{ marginTop: 48 }}>
          <TypeSample label="PP Hatton · 200 · 72/80" family="PP Hatton" weight={200} size={72} lineHeight={80}>
            Above as below — justice is a feather.
          </TypeSample>
          <TypeSample label="PP Hatton · 500 · 48/56" family="PP Hatton" weight={500} size={48} lineHeight={56}>
            Above as below — justice is a feather.
          </TypeSample>
          <TypeSample label="PP Hatton · 700 · 32/40" family="PP Hatton" weight={700} size={32} lineHeight={40}>
            Above as below — justice is a feather.
          </TypeSample>
        </div>
      </section>

      {/* 07 — Color */}
      <section id="color" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">07 — color</p>
          <h2 className="kol-page__section-title">Identity palette</h2>
          <p className="kol-page__section-body">
            Brand work only — logo, print, identity. Not a UI palette. Warm,
            restrained: cream-navy-yellow with a brick-red accent.
          </p>
        </div>
        {identityRamps.map((r) => (
          <Ramp key={r.name} name={r.name} stops={r.stops} />
        ))}
      </section>

      {/* 08 — Mood */}
      <section id="mood" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">08 — mood</p>
          <h2 className="kol-page__section-title">Mood imagery</h2>
          <p className="kol-page__section-body">
            Desert-dune palette matches the warm identity tones. The Canalix
            logomark is overlaid on each plate — one source image, one
            composition rule.
          </p>
        </div>
        <AssetGrid cols={2}>
          {moodFiles.map((f) => (
            <MoodTile key={f} brand="canalix" src={`/brand/canalix/mood/${f}.png`} alt={f} caption={f} />
          ))}
        </AssetGrid>
      </section>

      {/* 09 — House */}
      <section id="house" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">09 — house</p>
          <h2 className="kol-page__section-title">Branded House architecture</h2>
          <p className="kol-page__section-body">
            One master brand at the top. Products and sub-brands hang beneath it.
            Casedoc is the flagship — the first child and the most elaborated.
          </p>
        </div>
        <img
          className="kol-figure__img"
          src="/brand/canalix/branded-house/Branded House 2_01.svg"
          alt="Branded House — overview"
        />
        <AssetGrid cols={2}>
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_03.svg" alt="product tier" caption="product tier" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_04.svg" alt="sub-brand tier" caption="sub-brand tier" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_05.svg" alt="extended lockups" caption="extended lockups" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_06.svg" alt="mixed examples" caption="mixed examples" />
        </AssetGrid>
      </section>

      {/* 10 — Stationery */}
      <section id="stationery" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">10 — stationery</p>
          <h2 className="kol-page__section-title">Collateral</h2>
          <p className="kol-page__section-body">
            Email signatures and namecards. Identity collateral for the Canalix team.
          </p>
        </div>
        <AssetGrid cols={3}>
          {stationeryFiles.map((f) => (
            <AssetFigure
              key={f}
              src={`/brand/canalix/stationery/${f}@2x.png`}
              alt={`Stationery ${f}`}
              caption={f}
            />
          ))}
        </AssetGrid>
      </section>

      {/* 11 — Website link-out */}
      <section id="website" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">11 — website</p>
          <h2 className="kol-page__section-title">canalix.io</h2>
          <p className="kol-page__section-body">
            Full marketing site comps — desktop pages and mobile mocks — live on
            their own page so they can breathe at full size.
          </p>
        </div>
        <Link to="/canalix/websites" className="kol-back-link">→ view website comps</Link>
      </section>

      {/* 12 — Close */}
      <section id="close" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">12 — close</p>
          <h2 className="kol-page__section-title">Brand sheet</h2>
          <p className="kol-page__section-body">
            The complete Canalix identity sheet in one place.
          </p>
        </div>
        <img
          className="kol-figure__img"
          src="/brand/canalix/brand-sheet/summary.svg"
          alt="Canalix brand sheet summary"
        />
      </section>
    </>
  )
}
