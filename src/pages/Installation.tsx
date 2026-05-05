import Grid from "@/components/Grid"

/**
 * Installation & Setup Page
 * 
 * Installation Steps for Syncfusion React Grid:
 * 
 * 1. npm install
 * 2. npm install @syncfusion/react-grid
 * 3. Import styles: import '@syncfusion/react-grid/styles/material.css' in layout.tsx
 * 4. npm run dev
 */

export default function Installation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-green-400/50 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-green-100">🚀 Get Started in Minutes</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">Quick Setup & <span className="text-green-400">Installation</span></h1>
          <p className="text-lg text-gray-300">Step-by-step guide to integrate Syncfusion React Grid into your project</p>
        </div>

        {/* Installation Steps */}
        <div className="space-y-6 mb-12">
          {/* Step 1 */}
          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-400/50 hover:border-blue-300 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white font-bold text-lg">1</span>
                <h2 className="text-2xl font-bold text-white">📦 Install Dependencies</h2>
              </div>
              <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-auto text-sm border border-slate-700 font-mono">{`npm install`}</pre>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-green-400/50 hover:border-green-300 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-lg">2</span>
                <h2 className="text-2xl font-bold text-white">📥 Add Syncfusion React Grid</h2>
              </div>
              <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-auto text-sm border border-slate-700 font-mono">{`npm install @syncfusion/react-grid
`}</pre>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/50 hover:border-purple-300 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold text-lg">3</span>
                <h2 className="text-2xl font-bold text-white">🎨 Import Styles</h2>
              </div>
              <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-auto text-sm border border-slate-700 font-mono">{`// In your main.tsx or entry file
import '@syncfusion/react-grid/styles/material.css'`}</pre>
            </div>
          </div>

          {/* Step 4 */}
          <div className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-orange-400/50 hover:border-orange-300 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold text-lg">4</span>
                <h2 className="text-2xl font-bold text-white">🚀 Use the Grid</h2>
              </div>
              <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-auto text-sm border border-slate-700 font-mono" style={{textAlign: 'left'}}>{`import { Grid } from '@syncfusion/react-grid'
import '@syncfusion/react-grid/styles/material.css'
const GridData = [
  { OrderID: 10248, CustomerName: 'VINET', TotalAmount: 32.38 },
  { OrderID: 10249, CustomerName: 'TOMSP', TotalAmount: 11.61 },
]
export default function MyGrid() {
  return (
    <Grid
      dataSource={GridData}
      columns={columns}
    />
  )
}`}</pre>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '📚', title: 'Documentation', desc: 'Learn all features and APIs' },
            { icon: '🎓', title: 'Examples', desc: 'Explore code samples' },
            { icon: '🔗', title: 'Community', desc: 'Join our developer community' },
          ].map((item, idx) => (
            <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 text-center hover:scale-105">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Demo Grid Section */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">✨ Live Demo</h2>
              <p className="text-gray-300">See the grid in action with sample data</p>
            </div>
            <style>{`
              .sf-grid-pager {
                text-align: left !important;
              }
            `}</style>
            <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <Grid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


