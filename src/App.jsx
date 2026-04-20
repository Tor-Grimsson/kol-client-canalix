import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Landing from './pages/Landing'
import Canalix from './pages/Canalix'
import Casedoc from './pages/Casedoc'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/canalix" element={<Canalix />} />
        <Route path="/casedoc" element={<Casedoc />} />
      </Route>
    </Routes>
  )
}
