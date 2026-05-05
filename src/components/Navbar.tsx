import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/installation', label: 'Setup' },
    { href: '/data-source', label: 'Data Source' },
    { href: '/visual-template', label: 'Core Features' },
    { href: '/pagination', label: 'Paging' },
    { href: '/virtualization', label: 'Virtual Scroll' },
    { href: '/livedata', label: 'Live Data' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Section */}
          <div className="flex items-center space-x-2">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>
            <span className="text-lg font-bold text-gray-900">React Grid</span>
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

