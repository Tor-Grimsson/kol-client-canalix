import BrandLogo from '../components/marks/BrandLogo'
import SubPageHero from '../components/cards/SubPageHero'
import PageSection from '../components/cards/PageSection'
import usePageTitle from '../hooks/usePageTitle'

const accent = Array.from({ length: 15 }, (_, i) => String(i + 1).padStart(2, '0'))
const mono = Array.from({ length: 21 }, (_, i) => String(i + 1).padStart(2, '0'))

function MarkTile({ name }) {
  return (
    <figure className="kol-mark-tile">
      <div className="kol-mark-tile-frame bg-fg-02 border border-fg-04">
        <BrandLogo brand="canalix-marks" name={name} />
      </div>
      <figcaption className="kol-helper-xs-2 uppercase tracking-wider text-fg-48 mt-2">
        {name}
      </figcaption>
    </figure>
  )
}

export default function CanalixMarks() {
  usePageTitle('Canalix · marks')

  return (
    <>
      <SubPageHero
        backTo="/canalix"
        backLabel="← back to canalix"
        label="canalix · marks"
        title="Marks"
        lede={<>Product icon family — 15 accented + 21 monochrome. Every fill that was white / near-white is now <code>currentColor</code>, so the marks inherit the theme. Accent colors remain fixed per icon.</>}
      />

      <PageSection
        id="accented"
        label="01 — accented"
        title="Accent set"
        body="15 marks with one accent color each (yellow · orange · red · blue · sky). The body now inherits the theme."
      >
        <div className="kol-mark-grid">
          {accent.map((n) => <MarkTile key={`accent-${n}`} name={`accent-${n}`} />)}
        </div>
      </PageSection>

      <PageSection
        id="mono"
        label="02 — mono"
        title="Mono set"
        body={<>21 silhouette marks. All paths are <code>currentColor</code>.</>}
      >
        <div className="kol-mark-grid">
          {mono.map((n) => <MarkTile key={`mono-${n}`} name={`mono-${n}`} />)}
        </div>
      </PageSection>
    </>
  )
}
