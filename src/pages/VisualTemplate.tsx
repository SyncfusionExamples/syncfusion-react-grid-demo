import GridFeature from "@/components/GridFeature"

/**
 * Visual Template Page
 * 
 * UI template showcase for Syncfusion React Grid
 */

export default function VisualTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-400/50 mb-8">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-purple-100">✨ Feature Showcase</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">Grid with <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Core Features</span></h1>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { icon: '✏️', title: 'Inline Editing', desc: 'Edit cells directly in the grid' },
              { icon: '↕️', title: 'Smart Sorting', desc: 'Multi-column sorting capabilities' },
              { icon: '🔍', title: 'Advanced Filtering', desc: 'Powerful data filtering options' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-purple-500/20 via-purple-400 to-purple-500/20 rounded-full mb-12"></div>

        {/* Grid Preview Area */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">🎯 Interactive Grid Demo</h2>
              <p className="text-gray-300">Try sorting, filtering, and editing the data below. All features are fully configured and ready to use.</p>
            </div>
            <style>{`
              /* Color-coded Avatar Backgrounds */
              .leads .avatar-red {
                background-color: #fce8e6;
                color: #d93025;
              }

              .leads .avatar-blue {
                background-color: #e8f0fe;
                color: #1a73e8;
              }

              .leads .avatar-green {
                background-color: #e6f4ea;
                color: #137333;
              }

              .leads .avatar-orange {
                background-color: #fef7e0;
                color: #ea8600;
              }

              .leads .avatar-purple {
                background-color: #f3e8ff;
                color: #9333ea;
              }
            `}</style>
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <GridFeature />
            </div>
          </div>
        </div>

        {/* Feature Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {[
            { 
              title: '⚡ Performance Optimized',
              features: [
                'Real-time data binding',
                'Virtual scrolling support',
                'Efficient column rendering',
                'Optimized memory usage'
              ]
            },
            {
              title: '🎨 Highly Customizable',
              features: [
                'Multiple theme options',
                'Custom column templates',
                'Responsive design',
                'Extensible architecture'
              ]
            },
            {
              title: '🔐 Enterprise Ready',
              features: [
                'Data validation',
                'Security built-in',
                'API compatibility',
                'Production tested'
              ]
            },
            {
              title: '📱 Mobile Friendly',
              features: [
                'Touch-optimized UI',
                'Responsive columns',
                'Mobile gestures',
                'Adaptive design'
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold text-white mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
