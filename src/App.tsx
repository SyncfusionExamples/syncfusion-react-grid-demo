import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import Installation from '@/pages/Installation'
import VisualTemplate from '@/pages/VisualTemplate'
import Pagination from '@/pages/Pagination'
import Virtualization from '@/pages/Virtualization'
import '@/app/globals.css'
import '@/app/grid.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/visual-template" element={<VisualTemplate />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/virtualization" element={<Virtualization />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
