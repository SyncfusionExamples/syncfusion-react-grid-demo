import Grid3 from "@/components/Grid3"

/**
 * Pagination Page
 * 
 * UI template showcase for Syncfusion React Grid with paging
 */

export default function Pagination() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Performance Optimization
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">High‑Performance Grid with Paging</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Key Benefits</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Efficiently manages large datasets</li>
                <li>• Minimizes initial data rendering</li>
                <li>• Improves overall load time</li>
                <li>• Configurable page sizes</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Performance Metrics</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Consistent performance at any data size</li>
                <li>• Reduced DOM memory footprint</li>
                <li>• Smooth navigation controls</li>
                <li>• Optimized rendering cycle</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full mb-8"></div>

        {/* Grid Preview Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-orange-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Pagination Demo</h2>
              <p className="text-gray-600">Navigate through pages efficiently with configurable page sizes</p>
            </div>
            <style>{`
              .sf-grid-pager {
                text-align: left !important;
              }
            `}</style>
            <Grid3 />
          </div>
        </div>
      </div>
    </div>
  )
}
