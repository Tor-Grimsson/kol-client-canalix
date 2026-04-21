import { useRef } from 'react'
import PageSection from '../components/cards/PageSection'
import usePageTitle from '../hooks/usePageTitle'
import useReveal from '../hooks/useReveal'
import TypographySections from './foundations/TypographySections'
import ColorAnatomy from './foundations/ColorAnatomy'
import ColorTokens from './foundations/ColorTokens'
import Ratio603010 from './foundations/Ratio603010'
import Methods from './foundations/Methods'
import ComboLab from './foundations/ComboLab'

export default function Foundations() {
  usePageTitle('Foundations')
  const root = useRef(null)
  useReveal(root)

  return (
    <main ref={root}>
      <PageSection
        id="intro"
        label="foundations"
        title="Two brands, one system"
        body="Canalix and Casedoc share the same typographic house and the same color vocabulary. What differs is emphasis — which tones each brand pushes forward, which it holds in reserve. This page is the shared reference: type on top, color in the middle, composition at the bottom, and a Combo Lab where you can mix brand palettes across layouts to see what the unified system actually looks like in practice."
      />

      <TypographySections />
      <ColorAnatomy />
      <ColorTokens />
      <Ratio603010 />
      <Methods />

      <PageSection
        id="combo-lab"
        label="composition · lab"
        title="Combo lab"
        body="Layout × palette × logo. Swap any input, watch the output. Nothing here is a prescription — it's a scratchpad for deciding how the two brands co-exist on a shared composition. Try the balanced palette first, then push on either brand's lead. Randomize if you want surprise."
        fullbleed
      >
        <ComboLab />
      </PageSection>
    </main>
  )
}
