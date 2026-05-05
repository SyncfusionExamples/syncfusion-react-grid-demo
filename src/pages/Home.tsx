export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            React Data Grid Framework
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Syncfusion React Grid
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A comprehensive data grid component built for React applications. Explore powerful capabilities including real-time data binding, advanced filtering, sorting, pagination, virtual scrolling, and intuitive inline editing.
          </p>
        </div>

        {/* Features Overview */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 mb-16 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Core Features Demonstrated</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'Data Binding', desc: 'Seamless data integration & binding', icon: '📊' },
              { label: 'Filtering', desc: 'Advanced filtering capabilities', icon: '🔍' },
              { label: 'Sorting', desc: 'Multi-column sorting & ordering', icon: '↕️' },
              { label: 'Aggregation', desc: 'Summary & aggregate calculations', icon: '∑' },
              { label: 'Editing', desc: 'Inline cell editing capabilities', icon: '✏️' },
              { label: 'Performance', desc: 'Virtual scrolling & pagination', icon: '⚡' },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Navigation */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-12 text-white text-center border border-blue-400">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-blue-100 mb-6">Navigate through the different demo pages to see the Grid in action</p>
          <div className="text-sm text-blue-200">
            Quick Setup → Grid Features → Pagination → Virtual Scrolling
          </div>
        </div>
      </div>
    </div>
  )
}
