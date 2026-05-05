import LiveData from "@/components/LiveData";

export default function TradeView() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Real-Time Data Streaming
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Streaming Trade View</h1>
              <p className="text-lg text-gray-700 max-w-4xl mb-8 leading-relaxed">
                Showcases the React Data Grid component's capability to handle real-time data updates with high performance. The grid continuously refreshes to display live data changes, ensuring a current view. Designed for scalability, it efficiently manages large datasets while maintaining smooth and responsive interactions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">📊</span> Live Updates
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Real-time data streaming integration</li>
                    <li>• Automatic refresh on data changes</li>
                    <li>• Smooth continuous updates</li>
                    <li>• High-frequency data handling</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-400">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">⚙️</span> Capabilities
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-2">

                    <li>• Responsive interactions</li>
                    <li>• Scalable architecture</li>
                  </ul>
                </div>
              </div>
            </div>
    
            {/* Divider */}
            <div className="h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 rounded-full mb-8"></div>
    
            {/* Grid Preview Area */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100 hover:shadow-3xl transition-shadow duration-300">
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-amber-400 to-amber-600 rounded"></div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Live Trade Data Stream</h2>
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
                <LiveData />
              </div>
            </div>
          </div>
        </div>
      )
}