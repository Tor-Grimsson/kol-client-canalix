import { Link } from 'react-router-dom'
import Ramp from '../components/brand/Ramp'
import TypeSample from '../components/brand/TypeSample'
import AssetGrid from '../components/brand/AssetGrid'
import AssetFigure from '../components/brand/AssetFigure'
import BrandLogo from '../components/marks/BrandLogo'
import MoodTile from '../components/cards/MoodTile'
import BrandHero from '../components/cards/BrandHero'
import PageSection from '../components/cards/PageSection'
import LogoCarousel from '../components/cards/LogoCarousel'
import TypeScaleSection from '../components/cards/TypeScaleSection'
import ProsePreview from '../components/cards/ProsePreview'
import Carousel from '../components/ui/Carousel'
import usePageTitle from '../hooks/usePageTitle'

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
const patternFiles = Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(2, '0'))

const brandFeelSlides = [
  'Brand Feel_01', 'Brand Feel_02', 'Brand Feel_03', 'Brand Feel_04',
  'Brand Feel_05', 'Brand Feel_06', 'Brand Feel_07', 'Brand Feel_08', 'Brand Feel_09',
  'Feel 2_01', 'Feel 2_02', 'Feel 2_04',
  'Brand sheets',
]

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

const hattonColumns = [
  { header: 'Style',  accessor: 'token', className: 'kol-table-cell-title' },
  { header: 'Weight', accessor: 'weight' },
  { header: 'Roman',  accessor: 'roman',  render: (r) => (
    <span style={{ fontFamily: '"PP Hatton", serif', fontWeight: r.weight, fontSize: '20px' }}>{r.sample}</span>
  ), style: { whiteSpace: 'normal' } },
  { header: 'Italic', accessor: 'italic', render: (r) => (
    <span style={{ fontFamily: '"PP Hatton", serif', fontWeight: r.weight, fontStyle: 'italic', fontSize: '20px' }}>{r.sample}</span>
  ), style: { whiteSpace: 'normal' } },
]

export default function Canalix() {
  usePageTitle('Canalix')

  return (
    <>
      <BrandHero
        label="/ canalix"
        title="Canalix"
        lede="Master brand. Branded house. Strong, trustworthy, and elegant — yet flexible enough to counter the rigid nature of governmental institutions."
        mark={<BrandLogo brand="canalix" name="logomark-light" className="kol-hero-mark" title="Canalix" />}
      />

      <PageSection id="concept" label="02 — concept" title="The Hugvit / Kolkrabbi brief">
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
          <p className="kol-prose-pullout kol-helper-xs-2 uppercase tracking-widest text-fg-64">Services delivered — visual identity · logo design · branded house</p>
        </div>
      </PageSection>

      <PageSection
        id="logo"
        label="03 — logo"
        title="The mark"
        body="Four-blade pinwheel. Navy body with a mustard-yellow blade. Rounded-square container variant for app icons. Ten production sizes from 128px down to 8px — wordmark drops below 24px."
      >
        <LogoCarousel brand="canalix" logos={logoVariants} light />
        <Link to="/canalix/marks" className="kol-back-link kol-helper-xs uppercase tracking-widest text-fg-64 hover:text-auto mt-8">→ product icon family (36 marks)</Link>
      </PageSection>

      <PageSection
        id="prose"
        label="04 — prose"
        title="Rich-text specimen"
        body="Headings, paragraph, quote, indented, code, pullout — the blocks used across marketing copy and long-form writing."
      >
        <ProsePreview
          h1="Headline"
          paragraph="Paragraph. The outcome is Canalix — a master brand sitting over a coherent family of products, each expressing the identity in its own application context without losing the parent voice."
          code={`const brand = 'Canalix'\nconst flagship = 'Casedoc'`}
          pullout="strong, trustworthy, elegant · flexible under pressure"
        />
      </PageSection>

      <TypeScaleSection
        id="montserrat"
        label="05 — montserrat"
        title="Montserrat"
        body="The primary family. Carries product and UI. Full scale below — D1 to L1."
        family="Montserrat"
        rows={montserratScale}
      >
        <TypeSample label="Montserrat · 700 · 56/64 · H1" family="Montserrat" weight={700} size={56} lineHeight={64}>
          Transforming justice through advanced case management.
        </TypeSample>
        <TypeSample label="Montserrat · 500 · 32/40 · H3" family="Montserrat" weight={500} size={32} lineHeight={40}>
          Transforming justice through advanced case management.
        </TypeSample>
        <TypeSample label="Montserrat · 400 · 16/24 · T1" family="Montserrat" weight={400} size={16} lineHeight={24}>
          The base paragraph style for body copy across the design system.
        </TypeSample>
      </TypeScaleSection>

      <TypeScaleSection
        id="hatton"
        label="06 — pp hatton"
        title="PP Hatton"
        body="Marketing serif. Display headlines, keynote settings, editorial moments. Five weights with italic companions."
        family="PP Hatton"
        rows={hattonScale}
        columns={hattonColumns}
      >
        <TypeSample label="PP Hatton · 200 · 72/80" family="PP Hatton" weight={200} size={72} lineHeight={80}>
          Above as below — justice is a feather.
        </TypeSample>
        <TypeSample label="PP Hatton · 500 · 48/56" family="PP Hatton" weight={500} size={48} lineHeight={56}>
          Above as below — justice is a feather.
        </TypeSample>
        <TypeSample label="PP Hatton · 700 · 32/40" family="PP Hatton" weight={700} size={32} lineHeight={40}>
          Above as below — justice is a feather.
        </TypeSample>
      </TypeScaleSection>

      <PageSection
        id="color"
        label="07 — color"
        title="Identity palette"
        body="Brand work only — logo, print, identity. Not a UI palette. Warm, restrained: cream-navy-yellow with a brick-red accent."
      >
        {identityRamps.map((r) => <Ramp key={r.name} name={r.name} stops={r.stops} />)}
      </PageSection>

      <PageSection
        id="patterns"
        label="08 — patterns"
        title="Tileable patterns"
        body="Twenty pattern variants built from the logomark — navy texture tiles, cream marketing backgrounds, and blue section dividers."
      >
        <AssetGrid cols={4}>
          {patternFiles.map((f) => (
            <AssetFigure key={f} src={`/brand/canalix/patterns/${f}.svg`} alt={`pattern ${f}`} caption={`pattern ${f}`} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="mood"
        label="09 — mood"
        title="Mood imagery"
        body="Desert-dune palette matches the warm identity tones. The Canalix logomark is overlaid on each plate — one source image, one composition rule."
      >
        <AssetGrid cols={2}>
          {moodFiles.map((f) => (
            <MoodTile key={f} brand="canalix" src={`/brand/canalix/mood/${f}.png`} alt={f} caption={f} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="house"
        label="10 — house"
        title="Branded House architecture"
        body="One master brand at the top. Products and sub-brands hang beneath it. Casedoc is the flagship — the first child and the most elaborated."
      >
        <img className="kol-figure-img" src="/brand/canalix/branded-house/Branded House 2_01.svg" alt="Branded House — overview" />
        <AssetGrid cols={2}>
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_03.svg" alt="product tier" caption="product tier" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_04.svg" alt="sub-brand tier" caption="sub-brand tier" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_05.svg" alt="extended lockups" caption="extended lockups" />
          <AssetFigure src="/brand/canalix/branded-house/Branded House 2_06.svg" alt="mixed examples" caption="mixed examples" />
        </AssetGrid>
      </PageSection>

      <PageSection
        id="stationery"
        label="11 — stationery"
        title="Collateral"
        body="Email signatures and namecards. Identity collateral for the Canalix team."
      >
        <AssetGrid cols={3}>
          {stationeryFiles.map((f) => (
            <AssetFigure key={f} src={`/brand/canalix/stationery/${f}@2x.png`} alt={`Stationery ${f}`} caption={f} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="website"
        label="12 — website"
        title="canalix.io"
        body="The real marketing site lives at /canalix/site — company homepage, solutions, Casedoc product pages. Legacy SVG mocks still available below."
      >
        <div className="flex flex-col gap-2">
          <Link to="/canalix/site" className="kol-back-link kol-helper-xs uppercase tracking-widest text-fg-64 hover:text-auto">→ view live prototype</Link>
          <Link to="/canalix/websites" className="kol-back-link kol-helper-xs-2 uppercase tracking-widest text-fg-48 hover:text-fg-64">→ view SVG mocks (legacy)</Link>
        </div>
      </PageSection>

      <PageSection
        id="close"
        label="13 — close"
        title="Brand deck"
        body="The complete Canalix identity in sequence — brand sheet summary first, then fourteen Brand Feel slides covering identity, style, and branded-house application."
      >
        <Carousel className="is-slides">
          <AssetFigure
            src="/brand/canalix/brand-sheet/summary.svg"
            alt="Canalix brand sheet summary"
            caption="brand sheet"
          />
          {brandFeelSlides.map((f) => (
            <AssetFigure
              key={f}
              src={`/brand/canalix/slides/${f}.png`}
              alt={`Canalix slide · ${f}`}
              caption={f}
            />
          ))}
        </Carousel>
      </PageSection>
    </>
  )
}
