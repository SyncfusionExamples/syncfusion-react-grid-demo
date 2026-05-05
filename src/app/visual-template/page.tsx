'use client'

import Grid2 from "@/components/Grid2"

/**
 * Visual Template Page
 * 
 * UI template showcase for Syncfusion React Grid
 */

export default function VisualTemplate() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Visual Template</h1>
          <p className="text-xl text-gray-600">
            Beautiful UI design template for React Grid
          </p>
        </div>

        {/* Grid Preview Area */}
        {/* <div className="bg-white rounded-lg shadow-md p-8"> */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">UI Template Preview</h2>
          {/* <div className="bg-gray-50 p-12 rounded border-2 border-dashed border-gray-300 flex items-center justify-center min-h-120"> */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mt-2"><Grid2 /></p>
            </div>
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}
