import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/installation', label: 'Setup', icon: '⚙️' },
    { href: '/data-source', label: 'Data Source', icon: '📊' },
    { href: '/visual-template', label: 'Features', icon: '✨' },
    { href: '/pagination', label: 'Paging', icon: '📄' },
    { href: '/virtualization', label: 'Performance', icon: '⚡' },
    { href: '/livedata', label: 'Live Data', icon: '📈' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-xl border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-200 flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚛</span>
            </div>
            <div>
              <span className="text-xl font-black text-gray-900 tracking-tight">Syncfusion</span>
              <span className="text-xs font-semibold text-blue-600 block">React Grid Demo</span>
            </div>
          </Link>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  location.pathname === item.href
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600'
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#"
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            Get Started →
          </a>
        </div>
      </div>
    </nav>
  )
}

