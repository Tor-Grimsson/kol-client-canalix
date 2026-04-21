import { Outlet, useLocation } from 'react-router-dom'
import ScrollToTop from '../navigation/ScrollToTop'
import TopNav from '../navigation/TopNav'
import PortalFooter from './PortalFooter'
import ExitPreview from '../components/ui/ExitPreview'

const clientSurfacePatterns = [/^\/canalix\/site/]

export default function Layout() {
  const { pathname } = useLocation()
  const isClientSurface = clientSurfacePatterns.some((re) => re.test(pathname))
  const isHome = pathname === '/'

  return (
    <div className={`kol-app${isClientSurface ? ' kol-app--no-topnav' : ''}`}>
      <ScrollToTop />
      {isHome && <TopNav />}
      <main className="kol-app-main">
        <Outlet />
      </main>
      {!isClientSurface && <PortalFooter />}
      {isClientSurface && <ExitPreview />}
    </div>
  )
}
