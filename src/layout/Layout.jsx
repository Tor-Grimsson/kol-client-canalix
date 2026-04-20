import { Outlet } from 'react-router-dom'
import TopNav from './TopNav'

export default function Layout() {
  return (
    <div className="kol-app">
      <TopNav />
      <main className="kol-app__main">
        <Outlet />
      </main>
    </div>
  )
}
