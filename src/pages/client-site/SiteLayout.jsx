import { Outlet, useLocation } from 'react-router-dom'
import SiteNav from './SiteNav'
import SiteFooter from './SiteFooter'

export default function SiteLayout() {
  const { pathname } = useLocation()
  const inCasedoc = pathname.startsWith('/canalix/site/casedoc')

  return (
    <div className={`client client-website${inCasedoc ? ' client-casedoc' : ''}`}>
      <SiteNav inCasedoc={inCasedoc} />
      <Outlet />
      <SiteFooter inCasedoc={inCasedoc} />
    </div>
  )
}
