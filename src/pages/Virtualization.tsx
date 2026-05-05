import GridPerformance from "@/components/GridDataAPI"

/**
 * Virtualization Page
 * 
 * UI template showcase for Syncfusion React Grid with virtual scrolling
 */

export default function Virtualization() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-red-400/50 mb-8">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-red-100">🚀 Advanced Performance</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">High-Performance Grid with <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Virtual Scrolling</span></h1>
          
          {/* Technical Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {[
              {
                icon: '⚡',
                title: 'Virtual Scrolling Engine',
                items: [
                  'Renders only visible rows in viewport',
                  'Handles thousands of rows smoothly',
                  'Reduces DOM memory overhead',
                  'Seamless vertical & horizontal scrolling'
                ]
              },
              {
                icon: '📊',
                title: 'Performance Characteristics',
                items: [
                  'Consistent responsiveness at scale',
                  'No performance degradation',
                  'Smooth user experience guaranteed',
                  'Optimized resource utilization'
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-red-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="font-bold text-white mb-4 text-lg">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-red-500/20 via-red-400 to-red-500/20 rounded-full mb-12"></div>

        {/* Grid Preview Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">⚡ Virtual Scrolling Demo</h2>
              <p className="text-gray-300">Scroll through thousands of rows with optimized virtual rendering. Experience lightning-fast performance even with massive datasets.</p>
            </div>
            <style>{`
              .sf-grid-pager {
                text-align: left !important;
              }
            `}</style>
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <GridPerformance />
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { 
              icon: '📈',
              metric: '1M+',
              label: 'Rows handled',
              desc: 'Millions of records rendered smoothly'
            },
            { 
              icon: '⚙️',
              metric: '60 FPS',
              label: 'Frame rate',
              desc: 'Smooth scrolling at 60 frames per second'
            },
            { 
              icon: '💾',
              metric: '-90%',
              label: 'Memory usage',
              desc: 'Significantly reduced memory footprint'
            },
          ].map((stat, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-red-400 mb-2">{stat.metric}</div>
              <h3 className="font-bold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-300 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Virtual Scrolling */}
        <div className="mt-16 bg-gradient-to-r from-red-600/20 to-pink-600/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-red-400/30">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Why Virtual Scrolling?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Eliminates browser freezing with large datasets',
              'Reduces CPU and memory consumption drastically',
              'Provides instant response to user interactions',
              'Enables seamless scrolling through millions of rows'
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-red-400/20 flex items-center justify-center flex-shrink-0 text-red-400 font-bold">✓</span>
                <p className="text-gray-200">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

