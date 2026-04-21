import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from '../components/marks/BrandLogo'

const SHOW_THRESHOLD = 80 // px — don't hide while near the top

const linkCls = 'kol-topnav-link kol-helper-xs-2 uppercase tracking-widest text-fg-64 hover:text-auto no-underline'
const activeCls = 'text-auto'

const LINKS = [
  { to: '/canalix',                label: 'Canalix' },
  { to: '/casedoc',                label: 'Casedoc' },
  { to: '/foundations',            label: 'Foundations' },
  { to: '/canalix/branded-house',  label: 'Branded House' },
  { to: '/canalix/site',           label: 'Live site' },
]

export default function TopNav() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const diff = y - lastY
        if (y < SHOW_THRESHOLD) {
          setHidden(false)
        } else if (diff > 4) {
          setHidden(true)     // scrolled down — hide
        } else if (diff < -4) {
          setHidden(false)    // scrolled up — show
        }
        lastY = y
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`kol-topnav${hidden ? ' is-hidden' : ''}`}>
      <NavLink
        to="/"
        end
        className="kol-topnav-brand no-underline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="kol-topnav-mark" aria-hidden="true">
          <BrandLogo brand="canalix" name="logomark-mono" />
        </span>
        <span className="kol-topnav-wordmark">kol-canalix</span>
      </NavLink>
      <div className="kol-topnav-links">
        {LINKS.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            className={({ isActive }) => `${linkCls}${isActive ? ' ' + activeCls : ''}`}
          >
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
