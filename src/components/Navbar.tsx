import { Link, useLocation } from 'react-router-dom'

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
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
      <div className="w-full h-12 flex items-center">
        {/* Brand Section */}
        <div className="flex items-center gap-2 flex-shrink-0 px-3">
          <div className="w-1.5 h-4 bg-gradient-to-b from-blue-600 to-blue-500 rounded-sm"></div>
          <span className="text-sm font-600 text-gray-900 tracking-tight whitespace-nowrap">Syncfusion React Grid</span>
        </div>
        
        {/* Navigation Items - Full Width */}
        <div className="flex items-center flex-1 overflow-x-auto overflow-y-hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-3 text-sm font-500 transition-all duration-150 whitespace-nowrap flex-shrink-0 border-b-2 ${
                location.pathname === item.href
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

