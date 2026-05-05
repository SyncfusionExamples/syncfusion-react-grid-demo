import GridDataAPI from "@/components/GridDataAPI";

export default function DataSource() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-teal-400/50 mb-8">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-teal-100">📊 High-Scale Data Management</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">Server-Side <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Virtualization</span></h1>
              <p className="text-lg text-gray-300 max-w-4xl mb-12 leading-relaxed">
                Powerfully handles extremely large datasets (millions of rows) by loading only visible data from the server. The grid detects scroll position, calculates required row range, sends a request, and renders received rows without re-fetching previously viewed data when caching is enabled.
              </p>
              
              {/* Benefits & Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-teal-400/50 hover:border-teal-300 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                    <span className="text-2xl">⚡</span> Performance Benefits
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Manages only page size rows in memory at any time
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Scales regardless of backend capacity
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Supports live data streams & real-time updates
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Handles datasets exceeding browser DOM limits
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-teal-400/50 hover:border-teal-300 transition-all duration-300 hover:scale-105">
                  <h3 className="font-bold text-white mb-4 text-lg flex items-center gap-2">
                    <span className="text-2xl">🔍</span> Key Features
                  </h3>
                  <ul className="text-sm text-gray-300 space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Intelligent scroll detection
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Automatic row range calculation
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Smart server request batching
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full"></span>
                      Optional caching mechanism
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-teal-500/20 via-teal-400 to-teal-500/20 rounded-full mb-12"></div>

            {/* Grid Preview Area */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1 h-10 bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"></div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Live Server-Side Virtualization Demo</h2>
                      <p className="text-gray-300 mt-1">Scroll through thousands of rows with on-demand data loading</p>
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
                  <GridDataAPI />
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="mt-16 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-teal-400/30">
              <h2 className="text-2xl font-bold text-white mb-6">🎯 How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Scroll Detection', desc: 'Monitors user scroll position' },
                  { step: '2', title: 'Calculate Range', desc: 'Determines needed row range' },
                  { step: '3', title: 'Load Data', desc: 'Fetches from server on demand' },
                  { step: '4', title: 'Render', desc: 'Displays visible rows instantly' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                    <div className="w-10 h-10 bg-teal-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-300 font-bold">{item.step}</div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
}