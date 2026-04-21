import { Link } from 'react-router-dom'
import Ramp from '../components/brand/Ramp'
import Swatch from '../components/brand/Swatch'
import TypeSample from '../components/brand/TypeSample'
import AssetGrid from '../components/brand/AssetGrid'
import AssetFigure from '../components/brand/AssetFigure'
import BrandLogo from '../components/marks/BrandLogo'
import BrandHero from '../components/cards/BrandHero'
import PageSection from '../components/cards/PageSection'
import LogoCarousel from '../components/cards/LogoCarousel'
import TypeScaleSection from '../components/cards/TypeScaleSection'
import ProsePreview from '../components/cards/ProsePreview'
import Carousel from '../components/ui/Carousel'
import usePageTitle from '../hooks/usePageTitle'
import {
  CASEDOC_BACKDROP, productRamps, coreStops, accentStops, logoVariants,
  productUiFiles, deviceFiles, graphicsB, graphicsC, brandedProduct,
  slideFiles, montserratScale,
} from './casedoc-data'

export default function Casedoc() {
  usePageTitle('Casedoc')

  return (
    <>
      <BrandHero
        label="/ casedoc"
        title="Casedoc"
        lede={<>Flagship product. <em>Above as below — justice is a feather.</em> Bringing the power of data to justice.</>}
        mark={
          <BrandLogo
            brand="casedoc"
            name="logomark"
            className="kol-hero-mark is-framed"
            style={{ background: CASEDOC_BACKDROP }}
            title="Casedoc"
          />
        }
      />

      <PageSection id="concept" label="02 — concept" title="The feather of Maat">
        <div className="kol-concept-row">
          <div className="kol-prose">
            <p><em>Above as below — justice is a feather.</em></p>
            <p>
              The Casedoc logomark is a feather — the feather of justice, borrowed
              from the Egyptian goddess <strong>Maat</strong>, whose name translates
              to <em>Order</em>. In Egyptian mythology her feather was weighed against
              the heart of the deceased to reveal innocence or guilt on the balanced
              scale.
            </p>
            <p>
              Maat personifies truth, balance, order, harmony, law, morality, and
              justice — <em>the light to the dark, the yin to the yang</em>. Casedoc's
              brand leans on this myth as a neutral, cross-cultural emblem of fair
              adjudication.
            </p>
            <h3>Product pillars</h3>
            <ul>
              <li><strong>Digital Court Evolution</strong> — fluent transfer to automated, paper-free workflows</li>
              <li><strong>Virtual Hearing</strong> — turn a regular virtual meeting into a digital courtroom</li>
              <li><strong>Intelligent End-to-end Solutions</strong> — transparent, impartial, superior justice</li>
            </ul>
            <h3>Backstory</h3>
            <p>
              Casedoc was formerly sold as "GoPro". Hugvit approached Kolkrabbi in
              Spring 2020 to give a decade-old Icelandic government case-management
              tool commercial life under a new brand.
            </p>
          </div>
          <figure className="kol-concept-row-figure">
            <img src="/brand/casedoc/maat.svg" alt="Maat — goddess of justice" />
          </figure>
        </div>
      </PageSection>

      <PageSection
        id="logo"
        label="03 — logo"
        title="The mark"
        body="A stylized feather rendered as three stacked curved blades forming an S-shape. Production SVGs ship white-fill — one navy backdrop across all variants here for a clean read."
      >
        <LogoCarousel brand="casedoc" logos={logoVariants} backdrop={CASEDOC_BACKDROP} />
      </PageSection>

      <PageSection
        id="prose"
        label="04 — prose"
        title="Rich-text specimen"
        body="Headings, paragraph, quote, indented, code, pullout — the blocks used across marketing copy and long-form writing."
      >
        <ProsePreview
          h1="Bringing the power of data to justice"
          paragraph="Paragraph. Casedoc offers judicial institutions a platform dedicated to justice processes — transparent, impartial, and superior."
          code={`const flagship = 'Casedoc'\nconst parent   = 'Canalix'`}
          pullout="transparent · impartial · superior"
        />
      </PageSection>

      <TypeScaleSection
        id="montserrat"
        label="05 — montserrat"
        title="Montserrat"
        body="Same family as the parent brand. Casedoc adds a Paragraphs scale (p-big 20/28, p 16/24, p-small 12/20)."
        family="Montserrat"
        rows={montserratScale}
      >
        <TypeSample label="Montserrat · 700 · 56/64 · H1" family="Montserrat" weight={700} size={56} lineHeight={64}>
          We bring the power of data to justice.
        </TypeSample>
        <TypeSample label="Montserrat · 400 · 20/28 · p-big" family="Montserrat" weight={400} size={20} lineHeight={28}>
          Casedoc offers judicial institutions a platform dedicated to justice
          processes — transparent, impartial, and superior.
        </TypeSample>
        <TypeSample label="Montserrat · 400 · 16/24 · p" family="Montserrat" weight={400} size={16} lineHeight={24}>
          Centralised evidence, data monitoring, privilege structure, people /
          role / location management.
        </TypeSample>
      </TypeScaleSection>

      <PageSection
        id="color"
        label="06 — color"
        title="Product palette"
        body={<>The full Canalix design-system palette used by all products. Fourteen ramps plus two curated palettes (Core + Accent). Brand anchor: <strong>Hugvit Blue 500</strong> = <code>#00469C</code>.</>}
      >
        {productRamps.map((r) => <Ramp key={r.name} name={r.name} stops={r.stops} />)}

        <h3 className="kol-heading-sm text-auto mt-12 mb-4">Core</h3>
        <div className="kol-ramp-chips">
          {coreStops.map(([name, hex]) => <Swatch key={name + hex} name={name} hex={hex} />)}
        </div>

        <h3 className="kol-heading-sm text-auto mt-12 mb-4">Accent</h3>
        <div className="kol-ramp-chips">
          {accentStops.map(([name, hex]) => <Swatch key={name + hex} name={name} hex={hex} />)}
        </div>
      </PageSection>

      <PageSection
        id="product-ui"
        label="07 — product ui"
        title="UI abstractions"
        body="Stylized panels showing the product UI language — dark canvas, cyan and yellow functional accents, data-dense layouts."
      >
        <AssetGrid cols={2}>
          {productUiFiles.map((p) => <AssetFigure key={p.src} src={p.src} alt={p.caption} caption={p.caption} />)}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="devices"
        label="08 — devices"
        title="Devices"
        body="Casedoc on phone and desktop. Marketing mocks featuring the core product strings."
      >
        <AssetGrid cols={3}>
          {deviceFiles.map((f) => (
            <AssetFigure key={f} src={`/brand/casedoc/devices/${f}.svg`} alt={`Device mockup ${f}`} caption={`device ${f}`} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="graphics"
        label="09 — graphics"
        title="Marketing graphics"
        body="Narrative and product-illustration graphics."
      >
        <AssetGrid cols={2}>
          {graphicsB.map((f) => (
            <AssetFigure key={`b-${f}`} src={`/brand/casedoc/graphics/b/${f}.svg`} alt={`Graphics B ${f}`} caption={`graphics-b · ${f}`} />
          ))}
          {graphicsC.map((f) => (
            <AssetFigure key={`c-${f}`} src={`/brand/casedoc/graphics/c/${f}.svg`} alt={`Graphics C ${f}`} caption={`graphics-c · ${f}`} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="branded-product"
        label="10 — branded product"
        title="A product in the house"
        body={<>Casedoc sits inside the Canalix Branded House as its flagship product. For the full house, see <Link to="/canalix#house">Canalix · architecture</Link>.</>}
      >
        <AssetGrid cols={2}>
          {brandedProduct.map((f) => (
            <AssetFigure key={f} src={`/brand/casedoc/branded-product/${f}.svg`} alt={f} caption={f} />
          ))}
        </AssetGrid>
      </PageSection>

      <PageSection
        id="website"
        label="11 — website"
        title="casedoc.io"
        body="Casedoc's marketing pages live inside the unified canalix.io site — product nested under master brand. Legacy SVG mocks still available below."
      >
        <div className="flex flex-col gap-2">
          <Link to="/canalix/site/casedoc" className="kol-back-link kol-helper-xs uppercase tracking-widest text-fg-64 hover:text-auto">→ view live prototype</Link>
          <Link to="/casedoc/websites" className="kol-back-link kol-helper-xs-2 uppercase tracking-widest text-fg-48 hover:text-fg-64">→ view SVG mocks (legacy)</Link>
        </div>
      </PageSection>

      <PageSection
        id="close"
        label="12 — close"
        title="Brand deck"
        body="The complete Casedoc brand deck — concept, identity, typography, application. Fourteen slides, scroll through."
      >
        <Carousel className="is-slides">
          {slideFiles.map((f) => (
            <AssetFigure
              key={f}
              src={`/brand/casedoc/slides/${f}.svg`}
              alt={`Casedoc slide ${f}`}
              caption={f}
            />
          ))}
        </Carousel>
      </PageSection>
    </>
  )
}
