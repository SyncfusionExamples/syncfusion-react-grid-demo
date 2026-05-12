import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Setup from '@/pages/Setup'
import CoreFeatures from '@/pages/CoreFeatures'
import Paging from '@/pages/Paging'
import VirtualScrolling from '@/pages/VirtualScrolling'
import DataSource from '@/pages/DataSource'
import '@/app/globals.css'
import '@/app/styles/material-interaction-theme.css'
import LiveData from './pages/LiveData'

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen flex flex-col overflow-hidden bg-white">
        <Navbar />
        <main className="flex-1 overflow-hidden bg-white">
          <Routes>
            <Route path="/" element={<Setup />} />
            <Route path="/data-source" element={<DataSource />} />
            <Route path="/visual-template" element={<CoreFeatures />} />
            <Route path="/pagination" element={<Paging />} />
            <Route path="/virtualization" element={<VirtualScrolling />} />
            <Route path="/livedata" element={<LiveData />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
