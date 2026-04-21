import { useState } from 'react'
import ViewToggle from '../../components/ui/ViewToggle'
import { PARENTS, VARIANTS, SCALES, THEMES } from './lockup-data'

const toOptions = (items) => items.map((i) => ({ value: i.id, label: i.label }))

function Field({ label, children }) {
  return (
    <div className="kol-bh-field">
      <label className="kol-bh-field-label kol-helper-xs-2 uppercase tracking-widest text-fg-48">
        {label}
      </label>
      {children}
    </div>
  )
}

export default function LockupControls({ state, onChange, onCopy }) {
  const [copied, setCopied] = useState(false)
  const { parent, product, descriptor, descriptor2, variant, scale, theme } = state

  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="kol-bh-controls">
      <Field label="Parent">
        <ViewToggle
          viewMode={parent}
          onViewChange={(v) => onChange({ parent: v })}
          options={toOptions(PARENTS)}
        />
      </Field>

      <Field label="Product name">
        <input
          type="text"
          value={product}
          onChange={(e) => onChange({ product: e.target.value })}
          placeholder="e.g. Consulting"
          className="kol-bh-input"
        />
      </Field>

      <Field label="Descriptor · uppercase">
        <input
          type="text"
          value={descriptor}
          onChange={(e) => onChange({ descriptor: e.target.value })}
          placeholder="e.g. UK, Courts, Archives"
          className="kol-bh-input"
        />
      </Field>

      {variant === 'hero' && (
        <Field label="Descriptor 2 · hero only">
          <input
            type="text"
            value={descriptor2}
            onChange={(e) => onChange({ descriptor2: e.target.value })}
            placeholder="e.g. Solution"
            className="kol-bh-input"
          />
        </Field>
      )}

      <Field label="Variant">
        <ViewToggle
          viewMode={variant}
          onViewChange={(v) => onChange({ variant: v })}
          options={toOptions(VARIANTS)}
        />
      </Field>

      <Field label="Scale">
        <ViewToggle
          viewMode={scale}
          onViewChange={(v) => onChange({ scale: v })}
          options={toOptions(SCALES)}
        />
      </Field>

      <Field label="Theme">
        <ViewToggle
          viewMode={theme}
          onViewChange={(v) => onChange({ theme: v })}
          options={toOptions(THEMES)}
        />
      </Field>

      <button
        type="button"
        onClick={handleCopy}
        className={`kol-bh-copy kol-helper-xs-2 uppercase tracking-widest${copied ? ' is-copied' : ''}`}
      >
        {copied ? '✓ copied' : 'copy jsx'}
      </button>
    </div>
  )
}
