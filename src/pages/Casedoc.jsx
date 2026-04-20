import Ramp from '../components/brand/Ramp'
import Swatch from '../components/brand/Swatch'
import TypeSample from '../components/brand/TypeSample'
import AssetGrid from '../components/brand/AssetGrid'
import AssetFigure from '../components/brand/AssetFigure'
import BrandLogo from '../components/brand/BrandLogo'
import LogoCard from '../components/brand/LogoCard'
import Table from '../components/molecules/Table'
import Carousel from '../components/molecules/Carousel'
import usePageTitle from '../hooks/usePageTitle'
import { Link } from 'react-router-dom'

const CASEDOC_BACKDROP = '#002A5E'

const productRamps = [
  { name: 'grey',   stops: [['white','#FFFFFF'],['grey-50','#FAFAFA'],['grey-200','#EEEEEE'],['grey-300','#D5D5D5'],['grey-400','#BDBDBD'],['grey-500','#9E9E9E'],['grey-600','#757575'],['grey-700','#616161'],['grey-800','#424242'],['grey-900','#212121']] },
  { name: 'slate',  stops: [['slate-50','#F9FAFC'],['slate-75','#F7F8FA'],['slate-100','#F2F4F7'],['slate-200','#E6E9F0'],['slate-250','#DFE2EB'],['slate-300','#CED4E5'],['slate-350','#C5CDE0'],['slate-400','#97A4C7'],['slate-500','#7684A8'],['slate-600','#627199'],['slate-650','#505F8A'],['slate-700','#3A4971'],['slate-800','#202A42'],['slate-900','#141C32'],['slate-950','#040B1F']] },
  { name: 'yellow', stops: [['yellow-100','#FCEC49'],['yellow-200','#F9E039'],['yellow-300','#F3CB28'],['yellow-400','#EDB617'],['yellow-500','#E7A30D']] },
  { name: 'orange', stops: [['orange-100','#FBBF24'],['orange-200','#F8A81C'],['orange-300','#F28813'],['orange-400','#EC680A'],['orange-500','#E65005']] },
  { name: 'red',    stops: [['red-100','#F26958'],['red-200','#F15845'],['red-300','#E74636'],['red-400','#D63226'],['red-500','#C51E16']] },
  { name: 'pink',   stops: [['pink-100','#FD63EE'],['pink-200','#FC4FE2'],['pink-300','#FA39CF'],['pink-400','#F823BC'],['pink-500','#F615AA']] },
  { name: 'purple', stops: [['purple-100','#BB6DF5'],['purple-200','#A358ED'],['purple-300','#8340DF'],['purple-400','#6328D1'],['purple-500','#4B19C4']] },
  { name: 'navy',   stops: [['navy-100','#0075CF'],['navy-200','#005FBA'],['navy-300 · Hugvit Blue','#00469C'],['navy-400','#00377A'],['navy-500','#002A5E']] },
  { name: 'blue',   stops: [['blue-100','#00ABEC'],['blue-200','#0093E0'],['blue-300','#0073CC'],['blue-400','#0053B8'],['blue-500','#003CA5']] },
  { name: 'sky',    stops: [['sky-100','#45E1FF'],['sky-200','#36D0FF'],['sky-300','#26B6FF'],['sky-400','#169CFF'],['sky-500','#0D86FF']] },
  { name: 'teal',   stops: [['teal-100','#00ECE5'],['teal-200','#00E0D6'],['teal-300','#00CCBE'],['teal-400','#00B8A6'],['teal-500','#00A591']] },
  { name: 'steel',  stops: [['steel-100','#49A6C5'],['steel-200','#398EAF'],['steel-300','#286F90'],['steel-400','#175071'],['steel-500','#0D3958']] },
  { name: 'green',  stops: [['green-100','#84E84D'],['green-200','#6DDA3D'],['green-300','#51C32B'],['green-400','#35AC19'],['green-500','#23980F']] },
  { name: 'lime',   stops: [['lime-100','#E3FC2D'],['lime-200','#D3FA23'],['lime-300','#BAF518'],['lime-400','#A1F00D'],['lime-500','#8BEB07']] },
]

const coreStops = [
  ['yellow-300', '#F3CB28'], ['orange-300', '#F28813'], ['red-300', '#E74636'],
  ['blue-500', '#003CA5'],   ['navy-500', '#002A5E'],   ['—', '#001937'],
  ['sky-300', '#26B6FF'],    ['blue-300', '#0073CC'],   ['navy-300', '#00469C'],
]

const accentStops = [
  ['yellow-300', '#F3CB28'], ['orange-300', '#F28813'], ['orange-500', '#E65005'],
  ['red-300', '#E74636'],    ['steel-300', '#286F90'],  ['teal-500', '#00A591'],
  ['green-300', '#51C32B'],  ['lime-500', '#8BEB07'],
]

const logoVariants = [
  { name: 'logomark',             caption: 'logomark' },
  { name: 'logomark-1',           caption: 'logomark · contained' },
  { name: 'lockup-vertical',      caption: 'lockup · vertical' },
  { name: 'lockup-vertical-1',    caption: 'lockup · vertical alt' },
  { name: 'lockup-horizontal',    caption: 'lockup · horizontal' },
  { name: 'lockup-horizontal-1',  caption: 'lockup · horizontal alt' },
  { name: 'wordmark',             caption: 'wordmark' },
]

const productUiFiles = [
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_01.svg',   caption: 'abstraction 01' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_02.svg',   caption: 'abstraction 02' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_02-1.svg', caption: 'abstraction 02·alt' },
  { src: '/brand/casedoc/product-ui/Product UI Abstractions_03.svg',   caption: 'abstraction 03' },
  { src: '/brand/casedoc/product-ui/01.svg', caption: 'window 01' },
  { src: '/brand/casedoc/product-ui/02.svg', caption: 'window 02' },
  { src: '/brand/casedoc/product-ui/03.svg', caption: 'window 03' },
  { src: '/brand/casedoc/product-ui/04.svg', caption: 'window 04' },
]

const deviceFiles = ['01', '02', '03', '04', '05']
const graphicsB = ['01', '02', '03', '04', '05']
const graphicsC = ['01', '02']
const brandedProduct = ['branded house', 'branded house-1', 'branded house-2', 'branded house-3', 'branded house-4']

const montserratScale = [
  { token: 'H1',      weight: 700, size: 56, lh: 64 },
  { token: 'H4',      weight: 500, size: 40, lh: 48 },
  { token: 'p-big',   weight: 400, size: 20, lh: 28 },
  { token: 'p',       weight: 400, size: 16, lh: 24 },
  { token: 'p-small', weight: 400, size: 12, lh: 20 },
]

const typeColumns = (family) => [
  { header: 'Token',  accessor: 'token',  className: 'kol-table-cell-title' },
  { header: 'Weight', accessor: 'weight' },
  { header: 'Size / LH', accessor: 'size', render: (r) => `${r.size} / ${r.lh}` },
  { header: 'Preview', accessor: 'preview', render: (r) => (
    <span style={{ fontFamily: `"${family}", sans-serif`, fontWeight: r.weight, fontSize: `${Math.min(r.size, 20)}px`, lineHeight: 1.2 }}>
      The quick brown fox
    </span>
  ), className: 'kol-table-cell-text', style: { whiteSpace: 'normal' } },
]

export default function Casedoc() {
  usePageTitle('Casedoc')

  return (
    <>
      {/* 01 — Hero */}
      <section className="kol-page__hero" id="hero">
        <p className="kol-page__section-label">/ casedoc</p>
        <div className="kol-hero__row">
          <BrandLogo
            brand="casedoc"
            name="logomark"
            className="kol-hero__mark kol-hero__mark--framed"
            style={{ background: CASEDOC_BACKDROP }}
            title="Casedoc"
          />
          <div className="kol-hero__copy">
            <h1 className="kol-page__title">Casedoc</h1>
            <p className="kol-page__lede">
              Flagship product. <em>Above as below — justice is a feather.</em>{' '}
              Bringing the power of data to justice.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Concept */}
      <section id="concept" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">02 — concept</p>
          <h2 className="kol-page__section-title">The feather of Maat</h2>
        </div>
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
          <figure className="kol-concept-row__figure">
            <img src="/brand/casedoc/maat.svg" alt="Maat — goddess of justice" />
          </figure>
        </div>
      </section>

      {/* 03 — Logo */}
      <section id="logo" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">03 — logo</p>
          <h2 className="kol-page__section-title">The mark</h2>
          <p className="kol-page__section-body">
            A stylized feather rendered as three stacked curved blades forming an
            S-shape. Production SVGs ship white-fill — one navy backdrop across
            all variants here for a clean read.
          </p>
        </div>
        <Carousel>
          {logoVariants.map((l) => (
            <LogoCard
              key={l.name}
              brand="casedoc"
              name={l.name}
              caption={l.caption}
              backdrop={CASEDOC_BACKDROP}
            />
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
          <h1>H1 — Bringing the power of data to justice</h1>
          <h2>H2 — Section title</h2>
          <h3>H3 — Subsection</h3>
          <h4>H4 — Block title</h4>
          <p className="kol-prose__section-lede">
            Section lede — a larger paragraph used to introduce a section and
            establish tone before the body copy begins.
          </p>
          <p>
            Paragraph. Casedoc offers judicial institutions a platform dedicated
            to justice processes — transparent, impartial, and superior.
          </p>
          <blockquote>
            <p>Above as below — justice is a feather.</p>
          </blockquote>
          <div className="kol-prose__indented">
            <p>
              Indented passage. Used for tangential copy, contextual notes, or
              nested argument that supports the main line.
            </p>
          </div>
          <pre><code>{`const flagship = 'Casedoc'
const parent   = 'Canalix'`}</code></pre>
          <p className="kol-prose__pullout">Pullout — transparent · impartial · superior</p>
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
            Same family as the parent brand. Casedoc adds a Paragraphs scale
            (p-big 20/28, p 16/24, p-small 12/20).
          </p>
        </div>
        <Table className="kol-table--simple" columns={typeColumns('Montserrat')} rows={montserratScale} />
        <div style={{ marginTop: 48 }}>
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
        </div>
      </section>

      {/* 06 — Color */}
      <section id="color" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">06 — color</p>
          <h2 className="kol-page__section-title">Product palette</h2>
          <p className="kol-page__section-body">
            The full Canalix design-system palette used by all products. Fourteen
            ramps plus two curated palettes (Core + Accent). Brand anchor:{' '}
            <strong>Hugvit Blue 500</strong> = <code>#00469C</code>.
          </p>
        </div>
        {productRamps.map((r) => (
          <Ramp key={r.name} name={r.name} stops={r.stops} />
        ))}

        <h3 style={{ fontSize: 24, fontWeight: 600, marginTop: 48, marginBottom: 16 }}>Core</h3>
        <div className="kol-ramp__chips">
          {coreStops.map(([name, hex]) => (
            <Swatch key={name + hex} name={name} hex={hex} />
          ))}
        </div>

        <h3 style={{ fontSize: 24, fontWeight: 600, marginTop: 48, marginBottom: 16 }}>Accent</h3>
        <div className="kol-ramp__chips">
          {accentStops.map(([name, hex]) => (
            <Swatch key={name + hex} name={name} hex={hex} />
          ))}
        </div>
      </section>

      {/* 07 — Product UI */}
      <section id="product-ui" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">07 — product ui</p>
          <h2 className="kol-page__section-title">UI abstractions</h2>
          <p className="kol-page__section-body">
            Stylized panels showing the product UI language — dark canvas, cyan
            and yellow functional accents, data-dense layouts.
          </p>
        </div>
        <AssetGrid cols={2}>
          {productUiFiles.map((p) => (
            <AssetFigure key={p.src} src={p.src} alt={p.caption} caption={p.caption} />
          ))}
        </AssetGrid>
      </section>

      {/* 08 — Devices */}
      <section id="devices" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">08 — devices</p>
          <h2 className="kol-page__section-title">Devices</h2>
          <p className="kol-page__section-body">
            Casedoc on phone and desktop. Marketing mocks featuring the core
            product strings.
          </p>
        </div>
        <AssetGrid cols={3}>
          {deviceFiles.map((f) => (
            <AssetFigure
              key={f}
              src={`/brand/casedoc/devices/${f}.svg`}
              alt={`Device mockup ${f}`}
              caption={`device ${f}`}
            />
          ))}
        </AssetGrid>
      </section>

      {/* 09 — Graphics */}
      <section id="graphics" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">09 — graphics</p>
          <h2 className="kol-page__section-title">Marketing graphics</h2>
          <p className="kol-page__section-body">
            Narrative and product-illustration graphics.
          </p>
        </div>
        <AssetGrid cols={2}>
          {graphicsB.map((f) => (
            <AssetFigure
              key={`b-${f}`}
              src={`/brand/casedoc/graphics/b/${f}.svg`}
              alt={`Graphics B ${f}`}
              caption={`graphics-b · ${f}`}
            />
          ))}
          {graphicsC.map((f) => (
            <AssetFigure
              key={`c-${f}`}
              src={`/brand/casedoc/graphics/c/${f}.svg`}
              alt={`Graphics C ${f}`}
              caption={`graphics-c · ${f}`}
            />
          ))}
        </AssetGrid>
      </section>

      {/* 10 — Branded product */}
      <section id="branded-product" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">10 — branded product</p>
          <h2 className="kol-page__section-title">A product in the house</h2>
          <p className="kol-page__section-body">
            Casedoc sits inside the Canalix Branded House as its flagship product.
            For the full house, see <Link to="/canalix#house">Canalix · architecture</Link>.
          </p>
        </div>
        <AssetGrid cols={2}>
          {brandedProduct.map((f) => (
            <AssetFigure
              key={f}
              src={`/brand/casedoc/branded-product/${f}.svg`}
              alt={f}
              caption={f}
            />
          ))}
        </AssetGrid>
      </section>

      {/* 11 — Website link-out */}
      <section id="website" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">11 — website</p>
          <h2 className="kol-page__section-title">casedoc.io</h2>
          <p className="kol-page__section-body">
            Full marketing site comps — they need real estate, so they live on
            their own page.
          </p>
        </div>
        <Link to="/casedoc/websites" className="kol-back-link">→ view website comps</Link>
      </section>

      {/* 12 — Close */}
      <section id="close" className="kol-page kol-page__section">
        <div className="kol-section__head">
          <p className="kol-page__section-label">12 — close</p>
          <h2 className="kol-page__section-title">Brand sheet</h2>
          <p className="kol-page__section-body">
            The complete Casedoc style sheet in one export.
          </p>
        </div>
        <img
          className="kol-figure__img"
          src="/brand/casedoc/brand-sheet/sheet.svg"
          alt="Casedoc brand sheet"
        />
      </section>
    </>
  )
}
