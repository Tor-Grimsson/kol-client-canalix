import SubPageHero from '../components/cards/SubPageHero'
import PageSection from '../components/cards/PageSection'
import FullscreenGallery from '../components/cards/FullscreenGallery'
import usePageTitle from '../hooks/usePageTitle'

const desktopItems = ['canalix-01', 'canalix-02', 'canalix-03', 'canalix-04', 'canalix-05', 'canalix-06', 'canalix-07']
  .map((f) => ({ src: `/brand/canalix/website/${f}.svg`, caption: f }))

const mobileItems = ['website-mocks-01', 'website-mocks-02', 'website-mocks-03', 'website-mocks-04', 'website-mocks-05', 'website-mocks-06', 'website-mocks-07', 'website-mocks-08']
  .map((f) => ({ src: `/brand/canalix/website/${f}.png`, caption: f }))

export default function CanalixWebsites() {
  usePageTitle('Canalix · websites')

  return (
    <>
      <SubPageHero
        backTo="/canalix"
        backLabel="← back to canalix"
        label="canalix · websites"
        title="canalix.io"
        lede="Marketing-site comps — desktop pages stacked for scroll context, mobile mocks follow in a tighter grid. Click any comp to open fullscreen."
      />

      <PageSection id="desktop" label="01 — desktop" title="Desktop pages">
        <FullscreenGallery items={desktopItems} layout="stack" tileClassName="kol-website-preview" />
      </PageSection>

      <PageSection id="mobile" label="02 — mobile" title="Mobile mocks">
        <FullscreenGallery items={mobileItems} layout="grid" cols={4} />
      </PageSection>
    </>
  )
}
