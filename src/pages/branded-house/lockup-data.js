/**
 * Branded House — data model for the lockup builder.
 *
 * A lockup is defined by:
 *   parent:     'canalix' | 'casedoc'    (drives mark + wordmark text)
 *   product:    string                   (the big product/service name)
 *   descriptor: string                   (optional right-aligned uppercase label)
 *   descriptor2:string                   (optional second descriptor — hero only)
 *   scale:      'sm' | 'md' | 'lg' | 'xl'
 *   variant:    'hero' | 'horizontal' | 'wordmark'
 *   theme:      'brand' | 'mono' | 'dark'
 */

export const PARENTS = [
  { id: 'canalix', label: 'Canalix', brand: 'canalix' },
  { id: 'casedoc', label: 'Casedoc', brand: 'casedoc' },
]

export const VARIANTS = [
  { id: 'horizontal', label: 'Horizontal' },
  { id: 'hero',       label: 'Hero' },
  { id: 'wordmark',   label: 'Wordmark' },
]

export const SCALES = [
  { id: 'sm', label: 'SM' },
  { id: 'md', label: 'MD' },
  { id: 'lg', label: 'LG' },
  { id: 'xl', label: 'XL' },
]

export const THEMES = [
  { id: 'brand', label: 'Brand' },
  { id: 'mono',  label: 'Mono' },
  { id: 'dark',  label: 'Dark' },
]

/**
 * Scale dimensions — mark size, wordmark px, product px, descriptor px, gap.
 * Applies uniformly to all variants.
 */
export const SCALE_DIMS = {
  sm: { mark: 32,  wordmark: 12, product: 24, descriptor: 16, gap: 8,  wordmarkLH: 16 },
  md: { mark: 48,  wordmark: 14, product: 36, descriptor: 24, gap: 12, wordmarkLH: 18 },
  lg: { mark: 80,  wordmark: 20, product: 56, descriptor: 36, gap: 16, wordmarkLH: 24 },
  xl: { mark: 128, wordmark: 40, product: 96, descriptor: 56, gap: 20, wordmarkLH: 48 },
}

/**
 * Theme → {canvas, ink} pairs. 'brand' depends on parent.
 */
export function resolveTheme(themeId, parentId) {
  if (themeId === 'mono')  return { canvas: '#FFFFFF', ink: '#0E0E11' }
  if (themeId === 'dark')  return { canvas: '#121315', ink: '#FAFAFA' }
  // brand
  if (parentId === 'canalix') return { canvas: '#FAF9F5', ink: '#142438' }
  if (parentId === 'casedoc') return { canvas: '#FFFFFF', ink: '#00469C' }
  return { canvas: '#FFFFFF', ink: '#0E0E11' }
}

/**
 * Example library — seeded from the Figma brand-sheet ref.
 * Click an example in the UI to load it into the builder.
 */
export const LIBRARY = [
  // Canalix operational branches
  { parent: 'canalix', product: 'Consulting', descriptor: 'UK',      variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Operational branches' },
  { parent: 'canalix', product: 'Consulting', descriptor: 'DK',      variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Operational branches' },
  { parent: 'canalix', product: 'Consulting', descriptor: 'US',      variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Operational branches' },

  // Casedoc lockup hierarchy
  { parent: 'casedoc', product: '',          descriptor: '',         variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Casedoc' },
  { parent: 'casedoc', product: 'Casedoc',   descriptor: '',         variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Casedoc', forceParent: 'canalix' },

  // Casedoc solutions suite
  { parent: 'casedoc', product: 'Specialized', descriptor: 'Courts', variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Solutions suite' },
  { parent: 'casedoc', product: 'Jurisdiction', descriptor: 'Courts', variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Solutions suite' },
  { parent: 'casedoc', product: 'Arbitration', descriptor: 'Courts', variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Solutions suite' },

  // Partner program
  { parent: 'casedoc', product: 'Partner',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Partner program' },
  { parent: 'casedoc', product: 'Forum',      descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Partner program' },
  { parent: 'casedoc', product: 'Inspection', descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Partner program' },
  { parent: 'casedoc', product: 'Hearings',   descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Partner program' },

  // Forum sub-products
  { parent: 'casedoc', product: 'Forum',      descriptor: 'Archives', variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Forum products' },
  { parent: 'casedoc', product: 'Forum',      descriptor: 'Verdicts', variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Forum products' },
  { parent: 'casedoc', product: 'Forum',      descriptor: 'Peers',    variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Forum products' },

  // Product suite — imagined brand names
  { parent: 'canalix', product: 'Regulator',  descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Vinasec',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Consult',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Justice',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Intello',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Govern',     descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Contracts',  descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Inspector',  descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Foris',      descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Sekurit',    descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Priwa',      descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Nimuta',     descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Netoplus',   descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
  { parent: 'canalix', product: 'Suawit',     descriptor: '',        variant: 'horizontal', theme: 'brand', scale: 'md', group: 'Product suite' },
]

export const LIBRARY_GROUPS = [...new Set(LIBRARY.map((l) => l.group))]
