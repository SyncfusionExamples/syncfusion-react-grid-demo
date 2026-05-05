export default function Home() {
  const samples = [
    {
      id: 1,
      title: 'Installation & Setup',
      description: 'Complete installation guide and project setup instructions for Syncfusion React Grid.',
      href: '/installation',
      icon: '📦',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Visual Template',
      description: 'Beautiful UI template showcasing Syncfusion React Grid design and layout capabilities.',
      href: '/visual-template',
      icon: '🎨',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Grid Features',
      description: 'Comprehensive demo covering Data Binding, Performance, Filtering, Sorting, Aggregation, and Editing.',
      href: '/grid-features',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syncfusion React Grid
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore powerful data grid capabilities including real-time data binding, advanced filtering,
            high-performance rendering, and intuitive editing features.
          </p>
        </div>

        {/* Sample Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {samples.map((sample) => (
            <a
              key={sample.id}
              href={sample.href}
              className="group"
            >
              <div className="card h-full hover:scale-105 transition-transform duration-300">
                {/* Icon Background */}
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${sample.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}>
                  <span className="text-3xl">{sample.icon}</span>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {sample.title}
                </h2>
                <p className="text-gray-600 mb-4">{sample.description}</p>

                {/* CTA */}
                <div className="flex items-center text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  Explore
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Features Overview */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Key Features Covered</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: 'Data Binding', desc: 'Custom data binding' },
              { label: 'Filtering', desc: 'Checkbox filtering' },
              { label: 'Sorting', desc: 'Multi-column sorting' },
              { label: 'Aggregation', desc: 'Summary calculations' },
              { label: 'Editing', desc: 'Inline editing' },
              { label: 'Performance', desc: 'Virtual scrolling' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">✓</div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.label}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
