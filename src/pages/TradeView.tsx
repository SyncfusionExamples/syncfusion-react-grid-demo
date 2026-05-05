import LiveData from "@/components/LiveData";

export default function TradeView() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-400/50 mb-8">
                <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-amber-100">📡 Real-Time Data Streaming</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">Streaming <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Trade View</span></h1>
              <p className="text-lg text-gray-300 max-w-4xl mb-12 leading-relaxed">
                Showcases the React Data Grid component's capability to handle real-time data updates with high performance. The grid continuously refreshes to display live data changes, ensuring a current view. Designed for scalability, it efficiently manages large datasets while maintaining smooth and responsive interactions.
              </p>
              
              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-amber-400/50 hover:border-amber-300 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                    <span className="text-2xl">📊</span> Live Updates
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Real-time data streaming integration
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Automatic refresh on data changes
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Smooth continuous updates
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      High-frequency data handling
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-amber-400/50 hover:border-amber-300 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                    <span className="text-2xl">⚙️</span> Enterprise Capabilities
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      High-performance rendering
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Responsive interactions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Scalable architecture
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                      Multi-protocol support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20 rounded-full mb-12"></div>
    
            {/* Grid Preview Area */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1 h-10 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Live Trade Data Stream</h2>
                      <p className="text-gray-300 mt-1">Real-time updates with sub-millisecond latency</p>
                    </div>
                  </div>
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
                  <LiveData />
                </div>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '📈', metric: '1000+', label: 'Updates/sec', desc: 'Handle high-frequency updates' },
                { icon: '⚡', metric: '< 50ms', label: 'Latency', desc: 'Sub-second data rendering' },
                { icon: '🎯', metric: '100%', label: 'Accuracy', desc: 'Zero data loss guarantee' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-amber-400 mb-2">{stat.metric}</div>
                  <h3 className="font-bold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.desc}</p>
                </div>
              ))}
            </div>

            {/* Use Cases */}
            <div className="mt-16 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-amber-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">🎯 Perfect For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Financial & Trading Applications',
                  'Real-Time Dashboard & Analytics',
                  'Live Monitoring Systems',
                  'Event Streaming Platforms',
                  'IoT Data Visualization',
                  'Social Media Feeds'
                ].map((useCase, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 text-amber-400 font-bold">✓</span>
                    <p className="text-gray-200">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
}
