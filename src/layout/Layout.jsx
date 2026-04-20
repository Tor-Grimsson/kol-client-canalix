import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="kol-app">
      <ScrollToTop />
      <TopNav />
      <main className="kol-app__main">
        <Outlet />
      </main>
    </div>
  )
}
