import Grid3 from "@/components/Grid3"

/**
 * Pagination Page
 * 
 * UI template showcase for Syncfusion React Grid with paging
 */

export default function Pagination() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">High‑Performance Grid with Paging</h1>
          <p className="text-xl text-gray-600">
            The Syncfusion React Grid provides built‑in paging to efficiently manage large datasets by dividing data into smaller, navigable pages.
Paging minimizes initial data rendering and improves load time, ensuring consistent performance across different data sizes.
Configurable page size and navigation controls offer a balanced approach between usability and performance.
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
                <Grid3 />
              </p>
            </div>
      </div>
    </div>
  )
}
