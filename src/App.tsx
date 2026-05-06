import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Installation from '@/pages/Installation'
import VisualTemplate from '@/pages/VisualTemplate'
import Pagination from '@/pages/Pagination'
import Virtualization from '@/pages/Virtualization'
import Datasource from '@/pages/Datasource'
import '@/app/globals.css'
import TradeView from './pages/TradeView'

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex flex-col overflow-hidden bg-white">
        <Navbar />
        <main className="flex-1 overflow-hidden bg-white">
          <Routes>
            <Route path="/" element={<Installation />} />
            <Route path="/data-source" element={<Datasource />} />
            <Route path="/visual-template" element={<VisualTemplate />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/virtualization" element={<Virtualization />} />
            <Route path="/livedata" element={<TradeView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
