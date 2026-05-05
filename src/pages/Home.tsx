export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-400/50 mb-8 hover:bg-blue-500/30 transition-all duration-300">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-blue-100">⭐ Trusted by Enterprise Teams</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
            Powerful React <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">Data Grid</span> Component
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Enterprise-grade performance with real-time binding, advanced filtering, sorting, virtual scrolling, and inline editing. Built for modern applications that demand excellence.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a href="#features" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <span>Explore Features</span>
              <span>→</span>
            </a>
            <a href="/installation" className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2">
              <span>Quick Start</span>
              <span>⚡</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-300 mb-1">100K+</div>
              <div className="text-sm text-gray-300">Downloads</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-300 mb-1">50+</div>
              <div className="text-sm text-gray-300">Enterprise Features</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-300 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Packed with <span className="text-blue-400">Premium Features</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Everything you need for exceptional data visualization and management</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Real-Time Data Binding', desc: 'Seamless data integration with automatic updates', icon: '📊', color: 'from-blue-500 to-cyan-500' },
            { label: 'Advanced Filtering', desc: 'Multi-criteria filtering with custom conditions', icon: '🔍', color: 'from-purple-500 to-pink-500' },
            { label: 'Smart Sorting', desc: 'Multi-column sorting with custom comparators', icon: '↕️', color: 'from-orange-500 to-red-500' },
            { label: 'Smart Aggregation', desc: 'Built-in summaries & aggregate calculations', icon: '∑', color: 'from-green-500 to-teal-500' },
            { label: 'Inline Editing', desc: 'Edit cells directly with validation support', icon: '✏️', color: 'from-indigo-500 to-blue-500' },
            { label: 'Virtual Scrolling', desc: 'Handle millions of rows with zero lag', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
          ].map((feature, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{feature.label}</h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Showcase Section */}
      <div className="bg-gradient-to-b from-transparent via-blue-500/5 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">🎯 Interactive Demos</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">Explore comprehensive demonstrations of grid capabilities in action</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Core Features', path: '/visual-template', emoji: '✨', desc: 'Sorting, filtering, editing' },
                { label: 'Data Sources', path: '/data-source', emoji: '📊', desc: 'Multiple data binding options' },
                { label: 'Paging', path: '/pagination', emoji: '📄', desc: 'Efficient data pagination' },
                { label: 'Performance', path: '/virtualization', emoji: '⚡', desc: 'Virtual scrolling at scale' },
              ].map((demo, idx) => (
                <a
                  key={idx}
                  href={demo.path}
                  className="group bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-400 transition-all duration-300 text-center hover:shadow-xl hover:scale-105"
                >
                  <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{demo.emoji}</div>
                  <h3 className="font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{demo.label}</h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">{demo.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          </div>
          
          <div className="relative px-12 py-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Ready to Transform Your Data Experience?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">Start building powerful data applications today with Syncfusion React Grid</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/installation" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                Get Started Now
              </a>
              <a href="#" className="px-8 py-3 bg-blue-700 text-white font-bold rounded-lg border border-white/20 hover:bg-blue-800 transition-all duration-300">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
