import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import BrandLayout from './layout/BrandLayout'
import Landing from './pages/Landing'
import Canalix from './pages/Canalix'
import CanalixWebsites from './pages/CanalixWebsites'
import CanalixMarks from './pages/CanalixMarks'
import CanalixBrandedHouse from './pages/CanalixBrandedHouse'
import Casedoc from './pages/Casedoc'
import CasedocWebsites from './pages/CasedocWebsites'
import Foundations from './pages/Foundations'
import NotFound from './pages/NotFound'

import SiteLayout from './pages/client-site/SiteLayout'
import CanalixHome from './pages/client-site/CanalixHome'
import CanalixSolutions from './pages/client-site/CanalixSolutions'
import CanalixAbout from './pages/client-site/CanalixAbout'
import CanalixBlog from './pages/client-site/CanalixBlog'
import CanalixContact from './pages/client-site/CanalixContact'
import CasedocHome from './pages/client-site/CasedocHome'
import CasedocFeatures from './pages/client-site/CasedocFeatures'
import CasedocVirtualHearing from './pages/client-site/CasedocVirtualHearing'
import CasedocGetDemo from './pages/client-site/CasedocGetDemo'
import CasedocSupport from './pages/client-site/CasedocSupport'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />

        {/* Portal — brand reference */}
        <Route element={<BrandLayout />}>
          <Route path="/canalix" element={<Canalix />} />
          <Route path="/canalix/websites" element={<CanalixWebsites />} />
          <Route path="/canalix/marks" element={<CanalixMarks />} />
          <Route path="/canalix/branded-house" element={<CanalixBrandedHouse />} />
          <Route path="/casedoc" element={<Casedoc />} />
          <Route path="/casedoc/websites" element={<CasedocWebsites />} />
          <Route path="/foundations" element={<Foundations />} />
        </Route>

        {/* Marketing site — unified Canalix house, Casedoc nested */}
        <Route element={<SiteLayout />}>
          <Route path="/canalix/site" element={<CanalixHome />} />
          <Route path="/canalix/site/solutions" element={<CanalixSolutions />} />
          <Route path="/canalix/site/about" element={<CanalixAbout />} />
          <Route path="/canalix/site/blog" element={<CanalixBlog />} />
          <Route path="/canalix/site/contact" element={<CanalixContact />} />

          <Route path="/canalix/site/casedoc" element={<CasedocHome />} />
          <Route path="/canalix/site/casedoc/features" element={<CasedocFeatures />} />
          <Route path="/canalix/site/casedoc/virtual-hearing" element={<CasedocVirtualHearing />} />
          <Route path="/canalix/site/casedoc/get-demo" element={<CasedocGetDemo />} />
          <Route path="/canalix/site/casedoc/support" element={<CasedocSupport />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
