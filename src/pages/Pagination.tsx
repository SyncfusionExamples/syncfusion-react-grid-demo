import GridPagination from "@/components/GridPagination"

/**
 * Pagination Page
 * 
 * UI template showcase for Syncfusion React Grid with paging
 */

export default function Pagination() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-orange-400/50 mb-8">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-orange-100">⚡ Performance Optimization</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">High-Performance Grid with <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Smart Paging</span></h1>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                icon: '📊',
                title: 'Smart Data Management',
                items: [
                  'Efficiently manages large datasets',
                  'Minimizes initial data rendering',
                  'Improves overall load time',
                  'Configurable page sizes'
                ]
              },
              {
                icon: '⚙️',
                title: 'Advanced Performance Metrics',
                items: [
                  'Consistent performance at any data size',
                  'Reduced DOM memory footprint',
                  'Smooth navigation controls',
                  'Optimized rendering cycle'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="font-bold text-white mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-orange-500/20 via-orange-400 to-orange-500/20 rounded-full mb-12"></div>

        {/* Grid Preview Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">📄 Pagination Demo</h2>
              <p className="text-gray-300">Navigate through pages efficiently with configurable page sizes. Experience smooth pagination with large datasets.</p>
            </div>
            <style>{`
              .sf-grid-pager {
                text-align: left !important;
              }
            `}</style>
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <GridPagination />
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { metric: '1000+', label: 'Records per page', icon: '📈' },
            { metric: '< 100ms', label: 'Page load time', icon: '⚡' },
            { metric: '99.9%', label: 'Uptime reliability', icon: '✅' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center hover:scale-105">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-orange-400 mb-2">{stat.metric}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
