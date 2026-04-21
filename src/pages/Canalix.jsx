import { Link } from 'react-router-dom'
import Ramp from '../components/brand/Ramp'
import TypeSample from '../components/brand/TypeSample'
import AssetCarousel from '../components/brand/AssetCarousel'
import BrandLogo from '../components/marks/BrandLogo'
import BrandHero from '../components/cards/BrandHero'
import PageSection from '../components/cards/PageSection'
import LogoCarousel from '../components/cards/LogoCarousel'
import TypeScaleSection from '../components/cards/TypeScaleSection'
import ProsePreview from '../components/cards/ProsePreview'
import usePageTitle from '../hooks/usePageTitle'
import {
  identityRamps, logoVariants, moodItems, stationeryItems, patternItems,
  brandedHouseItems, brandDeckItems, montserratScale, hattonScale,
} from './canalix-data'

/* Hatton scale table columns — rendered as JSX, so stays with the component.
   Inline fontWeight is data-driven (from row.weight); static font + size in class. */
const hattonColumns = [
  { header: 'Style',  accessor: 'token', className: 'kol-table-cell-title' },
  { header: 'Weight', accessor: 'weight' },
  { header: 'Roman',  accessor: 'roman',  render: (r) => (
    <span className="kol-canalix-hatton-cell" style={{ fontWeight: r.weight }}>{r.sample}</span>
  ), style: { whiteSpace: 'normal' } },
  { header: 'Italic', accessor: 'italic', render: (r) => (
    <span className="kol-canalix-hatton-cell kol-canalix-hatton-cell--italic" style={{ fontWeight: r.weight }}>{r.sample}</span>
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
        <AssetCarousel items={patternItems} />
      </PageSection>

      <PageSection
        id="mood"
        label="09 — mood"
        title="Mood imagery"
        body="Desert-dune palette matches the warm identity tones. The Canalix logomark is overlaid on each plate — one source image, one composition rule."
      >
        <AssetCarousel items={moodItems} />
      </PageSection>

      <PageSection
        id="house"
        label="10 — house"
        title="Branded House architecture"
        body="One master brand at the top. Products and sub-brands hang beneath it. Casedoc is the flagship — the first child and the most elaborated."
      >
        <AssetCarousel items={brandedHouseItems} />
      </PageSection>

      <PageSection
        id="stationery"
        label="11 — stationery"
        title="Collateral"
        body="Email signatures and namecards. Identity collateral for the Canalix team."
      >
        <AssetCarousel items={stationeryItems} />
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
        <AssetCarousel items={brandDeckItems} className="is-slides" />
      </PageSection>
    </>
  )
}
