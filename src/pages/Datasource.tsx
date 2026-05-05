import Grid4 from "@/components/Grid4";

export default function DataSource() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                High-Scale Data Management
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Server-Side Virtualization</h1>
              <p className="text-lg text-gray-700 max-w-4xl mb-8 leading-relaxed">
                Powerfully handles extremely large datasets (millions of rows) by loading only visible data from the server. The grid detects scroll position, calculates required row range, sends a request, and renders received rows without re-fetching previously viewed data when caching is enabled.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">⚡</span> Performance Benefits
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Manages only page size rows in memory at any time</li>
                    <li>• Scales regardless of backend capacity</li>
                    <li>• Supports live data streams & real-time updates</li>
                    <li>• Handles datasets exceeding browser DOM limits</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-400">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">🔍</span> Key Features
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Intelligent scroll detection</li>
                    <li>• Automatic row range calculation</li>
                    <li>• Smart server request batching</li>
                    <li>• Optional caching mechanism</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-teal-200 via-teal-400 to-teal-200 rounded-full mb-8"></div>

            {/* Grid Preview Area */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-teal-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-teal-400 to-teal-600 rounded"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Live Server-Side Virtualization Demo</h2>
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
                <Grid4 />
              </div>
            </div>
          </div>
        </div>
      )
}