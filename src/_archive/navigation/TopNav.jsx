import { NavLink } from 'react-router-dom'

const linkCls = 'kol-helper-s uppercase tracking-wider text-fg-64 hover:text-auto transition-colors no-underline'
const activeCls = 'text-auto'

export default function TopNav() {
  return (
    <nav className="kol-topnav border-b border-fg-08">
      <NavLink
        to="/"
        end
        className={`${linkCls} font-semibold tracking-widest`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        kol-canalix
      </NavLink>
      <div className="kol-topnav-links">
        <NavLink
          to="/canalix"
          className={({ isActive }) => `${linkCls}${isActive ? ' ' + activeCls : ''}`}
        >
          Canalix
        </NavLink>
        <NavLink
          to="/casedoc"
          className={({ isActive }) => `${linkCls}${isActive ? ' ' + activeCls : ''}`}
        >
          Casedoc
        </NavLink>
      </div>
    </nav>
  )
}
