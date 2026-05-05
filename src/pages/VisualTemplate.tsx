import Grid2 from "@/components/Grid2"

/**
 * Visual Template Page
 * 
 * UI template showcase for Syncfusion React Grid
 */

export default function VisualTemplate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Feature Showcase
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Grid with Core Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600"><strong>✓ Paging:</strong> Organize large datasets efficiently</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600"><strong>✓ Sorting:</strong> Multi-column sorting capabilities</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm text-gray-600"><strong>✓ Filtering:</strong> Advanced data filtering options</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 rounded-full mb-8"></div>

        {/* Grid Preview Area */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-purple-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interactive Grid Demo</h2>
              <p className="text-gray-600">Try sorting, filtering, and paging the data below</p>
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
            <Grid2 />
          </div>
        </div>
      </div>
    </div>
  )
}
