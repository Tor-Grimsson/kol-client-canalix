import { Outlet, useLocation } from 'react-router-dom'
import SideNav from '../navigation/SideNav'
import { getSidebarForPath } from '../navigation/sidebars.config'

export default function BrandLayout() {
  const { pathname } = useLocation()
  const sidebar = getSidebarForPath(pathname)

  return (
    <div className="kol-brand-layout">
      {sidebar && <SideNav config={sidebar} />}
      <div className="kol-brand-layout-main">
        <Outlet />
      </div>
    </div>
  )
}
