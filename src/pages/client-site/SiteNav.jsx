import { Link, NavLink } from 'react-router-dom'

const canalixLinks = [
  { to: '/canalix/site/solutions', label: 'Solutions' },
  { to: '/canalix/site/casedoc',   label: 'Casedoc' },
  { to: '/canalix/site/about',     label: 'About' },
  { to: '/canalix/site/blog',      label: 'Blog' },
]

const casedocLinks = [
  { to: '/canalix/site/casedoc/features',        label: 'Features' },
  { to: '/canalix/site/casedoc/virtual-hearing', label: 'Virtual Hearing' },
  { to: '/canalix/site/casedoc/support',         label: 'Support' },
]

export default function SiteNav({ inCasedoc }) {
  const brand = inCasedoc ? 'Casedoc' : 'Canalix'
  const home = inCasedoc ? '/canalix/site/casedoc' : '/canalix/site'
  const links = inCasedoc ? casedocLinks : canalixLinks
  const ctaTo = inCasedoc ? '/canalix/site/casedoc/get-demo' : '/canalix/site/contact'
  const ctaLabel = inCasedoc ? 'Get a demo' : 'Talk to us'

  return (
    <nav className="site-nav">
      <div className="site-nav__inner">
        <Link to={home} className="site-nav__brand">
          <span className="site-nav__brand-dot" aria-hidden="true" />
          <span>{brand}</span>
        </Link>
        <div className="site-nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to={ctaTo} className="site-nav__cta">{ctaLabel} →</Link>
        </div>
      </div>
    </nav>
  )
}
