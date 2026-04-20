import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Landing'
import Canalix from './pages/Canalix'
import Casedoc from './pages/Casedoc'
import CanalixWebsites from './pages/CanalixWebsites'
import CasedocWebsites from './pages/CasedocWebsites'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/canalix" element={<Canalix />} />
        <Route path="/canalix/websites" element={<CanalixWebsites />} />
        <Route path="/casedoc" element={<Casedoc />} />
        <Route path="/casedoc/websites" element={<CasedocWebsites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
