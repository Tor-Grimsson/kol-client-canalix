import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import useScrollSpy from '../hooks/useScrollSpy'

const COLLAPSE_KEY = 'kol-sidenav-collapsed'

/* ── Hop icons — inline SVGs, all drive off currentColor ── */

const IconHome = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
    <path d="M10 2 L2 9 L2 18 L8 18 L8 12 L12 12 L12 18 L18 18 L18 9 Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
)

const IconCanalix = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M45.6686 101.669C45.6686 116.211 57.4576 128 72 128V82.3321C72 67.7899 60.211 56.0008 45.6686 56.0008L0 56.001C0 70.5433 11.789 82.3321 26.3314 82.3321H45.6686V101.669Z" fill="currentColor"/>
    <path d="M56 0C70.5424 0 82.3314 11.7888 82.3314 26.3311V45.6683L101.669 45.6683C116.211 45.6683 128 57.4571 128 71.9994C110.815 71.9994 93.6294 71.999 76.4441 71.999C73.3103 62.1965 65.6929 54.3995 56 51.0262V0Z" fill="currentColor"/>
  </svg>
)

const IconCasedoc = () => (
  <svg viewBox="0 0 128 128" width="16" height="16" aria-hidden="true">
    <path d="M89.75 104.71L38.25 54.34C29.56 45.81 29.56 31.81 38.25 23.29L89.60 73.66C98.44 82.34 98.44 96.19 89.75 104.71ZM66.02 96.95L14.52 46.57C5.83 55.10 5.83 69.10 14.52 77.62L65.86 128C74.70 119.48 74.70 105.63 66.02 96.95ZM61.98 31.05L113.49 81.43C122.17 72.90 122.17 58.90 113.49 50.38L61.98 0C53.30 8.52 53.30 22.53 61.98 31.05Z" fill="currentColor"/>
  </svg>
)

const IconFoundations = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
    <rect x="3" y="4"  width="14" height="3" rx="0.5" fill="currentColor" opacity="0.4" />
    <rect x="3" y="8.5" width="14" height="3" rx="0.5" fill="currentColor" opacity="0.7" />
    <rect x="3" y="13" width="14" height="3" rx="0.5" fill="currentColor" />
  </svg>
)

const GLOBAL_HOPS = [
  { to: '/',            icon: IconHome,        label: 'home' },
  { to: '/canalix',     icon: IconCanalix,     label: 'canalix' },
  { to: '/casedoc',     icon: IconCasedoc,     label: 'casedoc' },
  { to: '/foundations', icon: IconFoundations, label: 'foundations' },
]

const groupCls = 'kol-helper-xs-2 uppercase tracking-widest text-fg-32'
const linkCls = 'kol-sidenav-link kol-helper-xs-2 text-fg-48 hover:text-fg-80'
const linkActiveCls = 'kol-sidenav-link kol-helper-xs-2 text-auto is-active'

export default function SideNav({ config }) {
  const { pathname } = useLocation()
  const onBrandPage = pathname === config.basePath
  const sectionIds = onBrandPage
    ? config.sections.filter((s) => s.id).map((s) => s.id)
    : []
  const activeId = useScrollSpy(sectionIds)

  const [collapsed, setCollapsed] = useState(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(COLLAPSE_KEY) === '1'
  })

  useEffect(() => {
    const root = document.documentElement
    if (collapsed) root.setAttribute('data-sidenav', 'collapsed')
    else root.removeAttribute('data-sidenav')
    localStorage.setItem(COLLAPSE_KEY, collapsed ? '1' : '0')
  }, [collapsed])

  return (
    <aside className={`kol-sidenav border-r border-fg-08${collapsed ? ' is-collapsed' : ''}`}>
      <div className="kol-sidenav-head">
        <button
          type="button"
          className="kol-sidenav-toggle hover:text-auto"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand' : 'Collapse'}
          onClick={() => setCollapsed((v) => !v)}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      <ul className="kol-sidenav-hops">
        {GLOBAL_HOPS.map((h) => {
          const Icon = h.icon
          return (
            <li key={h.to}>
              <NavLink
                to={h.to}
                end={h.to === '/'}
                className={({ isActive }) =>
                  `kol-sidenav-hop kol-helper-xs-2${isActive ? ' is-active' : ''}`
                }
              >
                <span className="kol-sidenav-hop-icon" aria-hidden="true"><Icon /></span>
                <span className="kol-sidenav-hop-label">{h.label}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>

      <div className="kol-sidenav-body">
        {config.sections.length > 0 && (
          <div className="kol-sidenav-section">
            <div className={groupCls} style={{ marginBottom: 12 }}>on this page</div>
            <ul className="kol-sidenav-list">
              {config.sections.map((s, i) => {
                if (!s.id) {
                  return (
                    <li key={`g-${i}`} className="kol-sidenav-group">
                      <span className="kol-helper-xxs uppercase tracking-widest text-fg-32">
                        {s.label}
                      </span>
                    </li>
                  )
                }
                const isActive = onBrandPage && activeId === s.id
                return (
                  <li key={s.id}>
                    <Link
                      to={`${config.basePath}#${s.id}`}
                      className={isActive ? linkActiveCls : linkCls}
                    >
                      {s.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {config.pages.length > 0 && (
          <div className="kol-sidenav-section">
            <div className={groupCls} style={{ marginBottom: 12, marginTop: 32 }}>pages</div>
            <ul className="kol-sidenav-list">
              {config.pages.map((p) => (
                <li key={p.to}>
                  <NavLink
                    to={p.to}
                    end
                    className={({ isActive }) => (isActive ? linkActiveCls : linkCls)}
                  >
                    {p.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  )
}
