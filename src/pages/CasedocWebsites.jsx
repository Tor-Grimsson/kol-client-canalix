import SubPageHero from '../components/cards/SubPageHero'
import PageSection from '../components/cards/PageSection'
import FullscreenGallery from '../components/cards/FullscreenGallery'
import usePageTitle from '../hooks/usePageTitle'

const comps = [
  { src: '/brand/casedoc/website/Virtual_Hearing.svg',         caption: 'Virtual Hearing' },
  { src: '/brand/casedoc/website/Solutions_4-on-one-page.svg', caption: 'Solutions' },
  { src: '/brand/casedoc/website/Features.svg',                caption: 'Features' },
  { src: '/brand/casedoc/website/Beneftis.svg',                caption: 'Benefits' },
  { src: '/brand/casedoc/website/About.svg',                   caption: 'About' },
  { src: '/brand/casedoc/website/Get-demo.svg',                caption: 'Get demo' },
  { src: '/brand/casedoc/website/Support.svg',                 caption: 'Support' },
  { src: '/brand/casedoc/website/Blog-home.svg',               caption: 'Blog home' },
  { src: '/brand/casedoc/website/Blog-read.svg',               caption: 'Blog — read' },
  { src: '/brand/casedoc/website/Cookies_Policy.svg',          caption: 'Cookies policy' },
  { src: '/brand/casedoc/website/Product-Page.svg',            caption: 'Product page' },
  { src: '/brand/casedoc/website/ws-01.svg',                   caption: 'ws-01' },
  { src: '/brand/casedoc/website/ws-02.svg',                   caption: 'ws-02' },
]

export default function CasedocWebsites() {
  usePageTitle('Casedoc · websites')

  return (
    <>
      <SubPageHero
        backTo="/casedoc"
        backLabel="← back to casedoc"
        label="casedoc · websites"
        title="casedoc.io"
        lede="Home family + Product detail + loose screens. Click a comp to open fullscreen."
      />

      <PageSection id="pages" label="01 — pages" title="Desktop pages">
        <FullscreenGallery items={comps} layout="stack" tileClassName="kol-website-preview" />
      </PageSection>
    </>
  )
}
