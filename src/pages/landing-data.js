/**
 * Landing page data — marquee items, gallery cards, FAQ entries.
 *
 * Separated from Landing.jsx so editorial tweaks (copy, ordering, card
 * treatments) don't churn the component file. CMS-candidate content lives
 * here — the shape is stable for later migration.
 */

export const WORD = 'CANALIX'

/* Customer marquee — lockup items from the Canalix house.
   Shape: { parent, product, descriptor? } */
export const MARQUEE = [
  { parent: 'canalix', product: 'Regulator' },
  { parent: 'canalix', product: 'Vinasec' },
  { parent: 'casedoc', product: 'Forum', descriptor: 'Archives' },
  { parent: 'canalix', product: 'Consulting', descriptor: 'UK' },
  { parent: 'casedoc', product: 'Partner' },
  { parent: 'canalix', product: 'Intello' },
  { parent: 'casedoc', product: 'Specialized', descriptor: 'Courts' },
  { parent: 'canalix', product: 'Govern' },
  { parent: 'casedoc', product: 'Hearings' },
  { parent: 'canalix', product: 'Justice' },
  { parent: 'casedoc', product: 'Forum', descriptor: 'Peers' },
  { parent: 'canalix', product: 'Contracts' },
  { parent: 'casedoc', product: 'Inspection' },
  { parent: 'canalix', product: 'Consulting', descriptor: 'DK' },
  { parent: 'canalix', product: 'Foris' },
  { parent: 'casedoc', product: 'Jurisdiction', descriptor: 'Courts' },
]

/* Work highlights gallery — 7 cards, each links into the portal.
   Shape: { to, kicker, title, desc, bg, mark?, letter?, letterFont?, letterColor? }
   `mark` renders a logomark overlay; `letter` renders a big typographic letter. */
export const GALLERY = [
  {
    to: '/canalix#logo', kicker: '01 · Identity',
    title: 'The master mark',
    desc: 'Yellow + navy. Four lockup variants. Built to scale from favicon to billboard.',
    bg: 'linear-gradient(135deg, #142438 0%, #0E3655 100%)',
    mark: { brand: 'canalix', name: 'logomark-mono', tint: '#DEB430' },
  },
  {
    to: '/foundations#type-overview', kicker: '02 · Typography',
    title: 'Montserrat · PP Hatton',
    desc: 'A workhorse sans and an editorial serif. Production px, letter-spacing zero.',
    bg: 'linear-gradient(135deg, #1A2A42 0%, #0E1A28 100%)',
    letter: 'Aa',
    letterFont: '"PP Hatton", serif',
    letterColor: '#FAF9F5',
  },
  {
    to: '/foundations#color-tokens', kicker: '03 · Color',
    title: 'One spectrum, two contributors',
    desc: 'Shared luminance range. Canalix warms the top; Casedoc cools the middle.',
    bg: "url('/brand/canalix/mood/mood-no-logo-04.png') center/cover #142438",
  },
  {
    to: '/canalix/branded-house', kicker: '04 · Lockups',
    title: 'Live lockup builder',
    desc: 'Type a product, pick a variant, preview. Copy the JSX out and drop it in.',
    bg: 'linear-gradient(135deg, #0E3655 0%, #141C32 100%)',
    letter: 'Ax',
    letterFont: '"Montserrat", sans-serif',
    letterColor: '#FAF9F5',
  },
  {
    to: '/canalix/marks', kicker: '05 · Marks',
    title: 'Thirty-six product icons',
    desc: 'Fifteen accent marks, twenty-one mono. Each a currentColor SVG ready to compose.',
    bg: 'radial-gradient(ellipse at 85% 15%, #8B6A1C 0%, #2A2E3E 40%, #0E1A2A 100%)',
  },
  {
    to: '/casedoc', kicker: '06 · Flagship',
    title: 'Casedoc',
    desc: 'Justice platform. The reference product inside the Canalix house.',
    bg: 'linear-gradient(135deg, #00469C 0%, #002A5E 100%)',
    mark: { brand: 'casedoc', name: 'logomark', tint: '#0075CF' },
  },
  {
    to: '/canalix/site', kicker: '07 · Surface',
    title: 'The live site',
    desc: 'Marketing ground. Canalix-skinned, Casedoc nested inside.',
    bg: 'linear-gradient(135deg, #142438 0%, #00469C 100%)',
  },
]

/* FAQ — 6 Qs. Shape: { q, a } */
export const FAQ = [
  {
    q: 'What is Canalix?',
    a: 'A fictional master brand — the parent in a branded-house architecture. Canalix owns the identity system, the typography, the color vocabulary, and the lockup grammar used across every product that lives under it.',
  },
  {
    q: 'What is Casedoc?',
    a: 'The flagship product inside the Canalix house. A justice platform — Casedoc is the reference implementation of how products in the system express themselves on top of Canalix\'s shared foundations.',
  },
  {
    q: 'Who built this?',
    a: 'Hugvit, 2024. This portal documents the work as both a brand book and a live playground — color tokens, typography specimens, a lockup builder, the marks library, and a preview of the marketing surface.',
  },
  {
    q: 'What typefaces does the system use?',
    a: 'Montserrat for product and UI across both brands. PP Hatton as the editorial serif for Canalix display moments. Everything else — descriptor slots, mono helpers — keys off those two families.',
  },
  {
    q: 'Can I copy lockups from the Branded House builder?',
    a: 'Yes. The "Copy JSX" button on the builder ships the current state as a <Lockup /> JSX snippet you can drop into any React surface.',
  },
  {
    q: 'Is anything here real?',
    a: 'The portal is. The brand, the products, and the customers are speculative. Canalix is an exercise in branded-house design, and Casedoc is the flagship we chose to build inside it.',
  },
]
