'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: '🏠 Home' },
    { href: '/installation', label: '📦 Installation' },
    { href: '/visual-template', label: '🎨 Visual Template' },
    { href: '/pagination', label: '🎨 Pagination Visual Template' },
    { href: '/virtualization', label: '🎨 Virtualization Visual Template' },
    { href: '/grid-features', label: '⚙️ Grid Features' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">RG</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gray-900">React Grid</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* External Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.syncfusion.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors text-sm font-medium"
            >
              Syncfusion
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
