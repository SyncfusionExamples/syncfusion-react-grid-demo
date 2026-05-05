import Grid from "@/components/Grid"

/**
 * Installation & Setup Page
 * 
 * Installation Steps for Syncfusion React Grid:
 * 
 * 1. npm install
 * 2. npm install @syncfusion/ej2-react-grids @syncfusion/ej2-base @syncfusion/ej2-buttons @syncfusion/ej2-dropdowns
 * 3. Import styles: import '@syncfusion/ej2-react-grids/styles/material.css' in layout.tsx
 * 4. npm run dev
 */

export default function Installation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Getting Started
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Quick Setup & Installation</h1>
          <p className="text-lg text-gray-700">
            Step-by-step guide to integrate Syncfusion React Grid into your project
          </p>
        </div>

        {/* Installation Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📦 Step 1: Install Dependencies</h2>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-auto text-sm">
{`npm install`}
            </pre>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📥 Step 2: Add Syncfusion React Grid</h2>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-auto text-sm">
{`npm install @syncfusion/react-grid`}
            </pre>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎨 Step 3: Import Styles</h2>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-auto text-sm">
{`// In your main.tsx
import '@syncfusion/react-grid/styles/material.css';`}</pre>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 Step 4: Use the Grid</h2>
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-auto text-sm font-mono" style={{textAlign: 'left'}}>
{`import { Grid } from '@syncfusion/react-grid'
import { GridData } from './data'

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

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-green-200 via-green-400 to-green-200 rounded-full mb-8 mt-12"></div>

        {/* Demo Grid Section */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-green-100 hover:shadow-3xl transition-shadow duration-300">
          <div className="p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded"></div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Grid Demo</h2>
                </div>
              </div>
            </div>
            <Grid />
          </div>
        </div>
      </div>
    </div>
  )
}
