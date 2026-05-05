import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Installation from '@/pages/Installation'
import VisualTemplate from '@/pages/VisualTemplate'
import Pagination from '@/pages/Pagination'
import Virtualization from '@/pages/Virtualization'
import Datasource from '@/pages/Datasource'
import '@/app/globals.css'
import '@/app/grid.css'
import TradeView from './pages/TradeView'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/data-source" element={<Datasource />} />
          <Route path="/visual-template" element={<VisualTemplate />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/virtualization" element={<Virtualization />} />
          <Route path="/livedata" element={<TradeView />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
