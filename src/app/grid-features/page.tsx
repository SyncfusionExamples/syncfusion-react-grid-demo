'use client'

import Grid4 from "@/components/Grid4"

/**
 * Grid Features Page
 * 
 * Comprehensive sample covering:
 * - Data Binding (Custom)
 * - Performance (Virtual Scrolling)
 * - Filtering (Checkbox)
 * - Sorting
 * - Aggregation
 * - Editing
 */

export default function GridFeatures() {
  const features = [
    {
      title: '🔗 Data Binding (Custom)',
      description: 'Custom data source binding with real-time updates',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: '⚡ Performance',
      description: 'Virtual scrolling and optimized rendering for large datasets',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: '🔍 Filtering (Checkbox)',
      description: 'Advanced checkbox-based filtering with multiple conditions',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: '⬆️⬇️ Sorting',
      description: 'Multi-column sorting with ascending/descending options',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: '📈 Aggregation',
      description: 'Summary calculations including Sum, Average, Count, Min, Max',
      color: 'from-red-500 to-rose-500',
    },
    {
      title: '✏️ Editing',
      description: 'Inline and dialog-based editing with validation',
      color: 'from-indigo-500 to-blue-500',
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grid Features</h1>
          <p className="text-xl text-gray-600">
            Comprehensive React Grid with enterprise features
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${feature.color} text-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow`}
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Details */}
        <div className="mt-12 space-y-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Feature Overview</h2>
            <div className="prose prose-sm text-gray-600">
              <p>
                The Syncfusion React Grid provides a complete data management solution with support for 
                multiple data sources, advanced filtering capabilities, powerful sorting options, real-time 
                aggregations, and flexible editing modes. Each feature is optimized for performance with 
                virtual scrolling support for handling large datasets efficiently.
              </p>
            </div>
          </div>

          {/* Grid Placeholder */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 Grid Instance</h2>
            <div className="bg-gray-50 p-12 rounded border-2 border-dashed border-gray-300 flex items-center justify-center h-96">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <p className="text-gray-600 text-lg"><Grid4/></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
