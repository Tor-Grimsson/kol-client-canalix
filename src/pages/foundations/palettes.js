/**
 * Foundations — shared palette + layout + logo data for the Combo Lab.
 * A Palette is always 5 role-colors: primary, secondary, light, dark, accent.
 */

export const PALETTES = [
  {
    id: 'canalix',
    label: 'Canalix-led',
    description: 'Cream-navy-yellow — warm, editorial, identity-first',
    primary:   '#142438',
    secondary: '#0E3655',
    light:     '#FAF9F5',
    dark:      '#121315',
    accent:    '#DEB430',
  },
  {
    id: 'casedoc',
    label: 'Casedoc-led',
    description: 'Hugvit blue anchor — bright, clinical, product-first',
    primary:   '#00469C',
    secondary: '#002A5E',
    light:     '#FFFFFF',
    dark:      '#141C32',
    accent:    '#0075CF',
  },
  {
    id: 'balanced',
    label: 'Balanced',
    description: 'Both brand primaries share the weight',
    primary:   '#142438',
    secondary: '#00469C',
    light:     '#ECE8DE',
    dark:      '#0E3655',
    accent:    '#DEB430',
  },
  {
    id: 'shared',
    label: 'Shared overlap',
    description: 'Only tones that live in both brands',
    primary:   '#0E3655',
    secondary: '#3A4971',
    light:     '#F3F3F3',
    dark:      '#1D1D1D',
    accent:    '#818181',
  },
  {
    id: 'mono-navy',
    label: 'Mono navy',
    description: 'One hue, four weights — disciplined single-tone study',
    primary:   '#141C32',
    secondary: '#202A42',
    light:     '#F9FAFC',
    dark:      '#040B1F',
    accent:    '#627199',
  },
  {
    id: 'accent-pop',
    label: 'Yellow pop',
    description: 'Canalix yellow pushed into primary weight',
    primary:   '#DEB430',
    secondary: '#142438',
    light:     '#FAF9F5',
    dark:      '#121315',
    accent:    '#B5523F',
  },
]

export const LAYOUTS = [
  { id: 'ratio-603010', label: '60 / 30 / 10' },
  { id: 'tower',        label: 'Tower' },
  { id: 'quad-split',   label: 'Quad split' },
  { id: 'card-row',     label: 'Card row' },
  { id: 'stripe-row',   label: 'Stripe row' },
  { id: 'applied-card', label: 'Applied card' },
]

export const LOGOS = [
  { id: 'none',    label: 'No logo' },
  { id: 'canalix', label: 'Canalix',  brand: 'canalix', name: 'logomark-mono' },
  { id: 'casedoc', label: 'Casedoc',  brand: 'casedoc', name: 'logomark' },
]

// Foreground chooser — pick text color with best contrast against background.
export function fgOn(bg) {
  const hex = bg.replace('#', '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  // relative luminance
  const L = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return L > 0.55 ? '#0E0E11' : '#FAFAFA'
}
