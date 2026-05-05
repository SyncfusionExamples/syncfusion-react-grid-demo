import Grid5 from "@/components/Grid5"

/**
 * Virtualization Page
 * 
 * UI template showcase for Syncfusion React Grid with virtual scrolling
 */

export default function Virtualization() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Advanced Performance
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">High‑Performance Grid with Virtual Scrolling</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">How Virtual Scrolling Works</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Renders only visible rows in viewport</li>
                <li>• Handles thousands of rows smoothly</li>
                <li>• Reduces DOM memory overhead</li>
                <li>• Seamless vertical & horizontal scrolling</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Performance Characteristics</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Consistent responsiveness at scale</li>
                <li>• No performance degradation</li>
                <li>• Smooth user experience guaranteed</li>
                <li>• Optimized resource utilization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-red-200 via-red-400 to-red-200 rounded-full mb-8"></div>

        {/* Grid Preview Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Virtual Scrolling Demo</h2>
              <p className="text-gray-600">Scroll through thousands of rows with optimized virtual rendering</p>
            </div>
            <style>{`
              .sf-grid-pager {
                text-align: left !important;
              }
            `}</style>
            <Grid5 />
          </div>
        </div>
      </div>
    </div>
  )
}
