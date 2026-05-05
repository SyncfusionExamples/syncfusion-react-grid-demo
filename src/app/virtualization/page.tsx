'use client'

import Grid5 from "@/components/Grid5"

/**
 * Visual Template Page
 * 
 * UI template showcase for Syncfusion React Grid
 */

export default function Virtualization() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xl text-gray-600">
            The Syncfusion React Grid supports efficient scrolling to handle large datasets by rendering only the visible rows within the viewport.
This approach reduces DOM load and improves responsiveness during continuous vertical and horizontal navigation.
Scrolling performance remains consistent even as data volume increases, ensuring a smooth and stable user experience.
          </p>
        </div>

        {/* Grid Preview Area */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mt-2">
                <style>{`
                  .text-center .sf-grid-pager {
                    text-align: left !important;
                  }
                `}</style>
                <Grid5 />
              </p>
            </div>
      </div>
    </div>
  )
}
