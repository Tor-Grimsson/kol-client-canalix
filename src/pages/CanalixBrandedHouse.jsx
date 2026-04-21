import { useRef, useState } from 'react'
import PageSection from '../components/cards/PageSection'
import usePageTitle from '../hooks/usePageTitle'
import useReveal from '../hooks/useReveal'
import Lockup from './branded-house/Lockup'
import LockupControls from './branded-house/LockupControls'
import { LIBRARY, LIBRARY_GROUPS } from './branded-house/lockup-data'

const DEFAULT = {
  parent: 'canalix',
  product: 'Consulting',
  descriptor: 'UK',
  descriptor2: 'Solution',
  variant: 'horizontal',
  scale: 'lg',
  theme: 'brand',
}

function lockupToJsx(state) {
  const { parent, product, descriptor, descriptor2, variant, scale, theme } = state
  const props = []
  if (parent)      props.push(`parent="${parent}"`)
  if (product)     props.push(`product="${product}"`)
  if (descriptor)  props.push(`descriptor="${descriptor}"`)
  if (descriptor2 && variant === 'hero') props.push(`descriptor2="${descriptor2}"`)
  if (variant)     props.push(`variant="${variant}"`)
  if (scale)       props.push(`scale="${scale}"`)
  if (theme)       props.push(`theme="${theme}"`)
  return `<Lockup\n  ${props.join('\n  ')}\n/>`
}

export default function CanalixBrandedHouse() {
  usePageTitle('Branded House · Canalix')
  const root = useRef(null)
  useReveal(root)
  const [state, setState] = useState(DEFAULT)

  const update = (patch) => setState((prev) => ({ ...prev, ...patch }))

  const loadExample = (ex) => {
    setState({
      parent: ex.forceParent ?? ex.parent,
      product: ex.product ?? '',
      descriptor: ex.descriptor ?? '',
      descriptor2: '',
      variant: ex.variant ?? 'horizontal',
      scale: ex.scale ?? 'md',
      theme: ex.theme ?? 'brand',
    })
  }

  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(lockupToJsx(state)) } catch {}
  }

  return (
    <main ref={root}>
      <PageSection
        id="intro"
        label="canalix · branded house"
        title="The modular lockup system"
        body="The brand-mark system was designed for modular usage — presenting the organisation on a brand level, as well as any branded product, solution, service, branch, or operation. Type a product name, pick a variant, preview, copy. This is the system in use, not a diagram of it."
      />

      <PageSection
        id="builder"
        label="builder"
        title="Live lockup"
        body="Controls on the left, preview on the right. Switch parent, scale, variant, theme. Copy the output as JSX to drop into any React surface."
        fullbleed
      >
        <div className="kol-bh-builder">
          <aside className="kol-bh-panel">
            <LockupControls state={state} onChange={update} onCopy={handleCopy} />
          </aside>
          <section className="kol-bh-stage">
            <div className="kol-bh-stage-inner">
              <Lockup
                parent={state.parent}
                product={state.product}
                descriptor={state.descriptor}
                descriptor2={state.descriptor2}
                variant={state.variant}
                scale={state.scale}
                theme={state.theme}
              />
            </div>
            <pre className="kol-bh-output">{lockupToJsx(state)}</pre>
          </section>
        </div>
      </PageSection>

      <PageSection
        id="library"
        label="library"
        title="Example lockups"
        body="Seed examples from the Canalix brand-sheet — operational branches, Casedoc solutions suite, partner program, Forum sub-products, and the speculative product suite. Click any to load it into the builder."
      >
        {LIBRARY_GROUPS.map((group) => (
          <div key={group} className="kol-bh-lib-group" data-reveal>
            <div className="kol-helper-xs-2 uppercase tracking-widest text-auto" style={{ fontWeight: 600, marginBottom: 16 }}>
              {group}
            </div>
            <div className="kol-bh-lib-grid">
              {LIBRARY.filter((l) => l.group === group).map((ex, i) => (
                <button
                  key={`${group}-${i}`}
                  type="button"
                  onClick={() => loadExample(ex)}
                  className="kol-bh-lib-card"
                >
                  <Lockup
                    parent={ex.forceParent ?? ex.parent}
                    product={ex.product}
                    descriptor={ex.descriptor}
                    variant="horizontal"
                    scale="sm"
                    theme="brand"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </PageSection>
    </main>
  )
}
