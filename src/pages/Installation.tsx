import Grid1 from "@/components/Grid1"

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Installation & Setup</h1>
          <p className="text-xl text-gray-600">
            Complete guide for Syncfusion React Grid setup
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
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-auto text-sm">
{`import { Grid } from '@syncfusion/react-grid'
import { GridData } from './data'

export default function MyGrid() {
  return (
    <Grid dataSource={GridData} columns={columns} />
  )
}`}</pre>
          </div>

          {/* Demo */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Demo Grid</h2>
            <Grid1 />
          </div>
        </div>
      </div>
    </div>
  )
}
