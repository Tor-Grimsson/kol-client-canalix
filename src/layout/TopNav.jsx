import { NavLink } from 'react-router-dom'

export default function TopNav() {
  return (
    <nav className="kol-topnav">
      <NavLink to="/" className="kol-topnav__brand" end>
        kol-canalix
      </NavLink>
      <div className="kol-topnav__links">
        <NavLink
          to="/canalix"
          className={({ isActive }) =>
            `kol-topnav__link${isActive ? ' is-active' : ''}`
          }
        >
          Canalix
        </NavLink>
        <NavLink
          to="/casedoc"
          className={({ isActive }) =>
            `kol-topnav__link${isActive ? ' is-active' : ''}`
          }
        >
          Casedoc
        </NavLink>
      </div>
    </nav>
  )
}
