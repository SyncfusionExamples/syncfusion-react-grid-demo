import { Link, useLocation } from 'react-router-dom'
import '@/app/styles/material-interaction-theme.css'

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { href: '/', label: 'Setup' },
    { href: '/data-source', label: 'Data Source' },
    { href: '/visual-template', label: 'Core Features' },
    { href: '/pagination', label: 'Paging' },
    { href: '/virtualization', label: 'Virtual Scrolling' },
    { href: '/livedata', label: 'Live Data' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-outline-variant" style={{ boxShadow: '0px 0.8px 16px 0px rgba(0, 0, 0, 0.08)' }}>
      <div className="w-full h-14 flex items-center px-4">
        {/* Brand Section */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="presentation"><rect width="24" height="24" fillOpacity="0.01"></rect><rect x="1" y="4.66675" width="5.71978" height="5.33461"></rect><rect x="1" y="10.6746" width="5.71978" height="5.33461"></rect><rect x="1" y="16.6655" width="5.71978" height="5.33461"></rect><rect x="7.43872" y="4.66675" width="5.71978" height="5.33461"></rect><rect x="7.43872" y="10.6746" width="5.71978" height="5.33461"></rect><rect x="7.43872" y="16.6655" width="5.71978" height="5.33461"></rect><rect width="5.53055" height="5.53055" transform="matrix(0.731301 0.682055 -0.731301 0.682055 19.3447 2)"></rect><rect x="13.8689" y="10.6746" width="5.71978" height="5.33461"></rect><rect x="13.8689" y="16.6655" width="5.71978" height="5.33461"></rect></svg>
          <span className="text-base font-medium text-on-surface tracking-tight whitespace-nowrap" style={{ fontWeight: '500' }}>Syncfusion React Grid</span>
        </div>
        
        {/* Navigation Items - Chips */}
        <div className="flex items-center justify-end flex-1 overflow-x-auto overflow-y-hidden gap-2 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`md3-chip-sample ${location.pathname === item.href ? 'md3-state-selected' : 'md3-state-default'}`}
              style={{textAlign: 'center'}}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

