/**
 * Sidebar configuration per brand / standalone surface.
 * Sections = intra-page anchor ids (must match <section id="..."> in the page).
 *   Entries with { id } are links. Entries with only { label } are group dividers.
 * Pages    = sub-routes exposed in the sidebar.
 */

export const SIDEBARS = {
  canalix: {
    brand: 'canalix',
    subtitle: 'master brand',
    basePath: '/canalix',
    sections: [
      { id: 'concept',    label: 'concept' },
      { id: 'logo',       label: 'logo' },
      { id: 'prose',      label: 'prose' },
      { id: 'montserrat', label: 'montserrat' },
      { id: 'hatton',     label: 'pp hatton' },
      { id: 'color',      label: 'color' },
      { id: 'patterns',   label: 'patterns' },
      { id: 'mood',       label: 'mood' },
      { id: 'house',      label: 'house' },
      { id: 'stationery', label: 'stationery' },
      { id: 'website',    label: 'website' },
      { id: 'close',      label: 'close' },
    ],
    pages: [
      { to: '/canalix/site',           label: 'site (live)' },
      { to: '/canalix/websites',       label: 'websites (mocks)' },
      { to: '/canalix/marks',          label: 'marks' },
      { to: '/canalix/branded-house',  label: 'branded house' },
    ],
  },

  casedoc: {
    brand: 'casedoc',
    subtitle: 'flagship product',
    basePath: '/casedoc',
    sections: [
      { id: 'concept',         label: 'concept' },
      { id: 'logo',            label: 'logo' },
      { id: 'prose',           label: 'prose' },
      { id: 'montserrat',      label: 'montserrat' },
      { id: 'color',           label: 'color' },
      { id: 'product-ui',      label: 'product ui' },
      { id: 'devices',         label: 'devices' },
      { id: 'graphics',        label: 'graphics' },
      { id: 'branded-product', label: 'branded product' },
      { id: 'website',         label: 'website' },
      { id: 'close',           label: 'close' },
    ],
    pages: [
      { to: '/canalix/site/casedoc', label: 'site (live)' },
      { to: '/casedoc/websites',     label: 'websites (mocks)' },
    ],
  },

  foundations: {
    brand: 'foundations',
    subtitle: 'shared system',
    basePath: '/foundations',
    sections: [
      { id: 'intro', label: 'introduction' },

      { label: 'typography' },
      { id: 'type-overview',  label: 'overview' },
      { id: 'type-specimens', label: 'specimens' },
      { id: 'type-richtext',  label: 'rich text' },

      { label: 'color' },
      { id: 'color-anatomy', label: 'anatomy' },
      { id: 'color-tokens',  label: 'tokens' },
      { id: 'color-603010',  label: '60-30-10' },

      { label: 'composition' },
      { id: 'methods',   label: 'methods' },
      { id: 'combo-lab', label: 'combo lab' },
    ],
    pages: [],
  },
}

export function getSidebarForPath(pathname) {
  if (pathname.startsWith('/foundations')) return SIDEBARS.foundations
  if (pathname.startsWith('/canalix'))     return SIDEBARS.canalix
  if (pathname.startsWith('/casedoc'))     return SIDEBARS.casedoc
  return null
}
