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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Grid with Core Features</h1>
          <p className="text-xl text-gray-600">
            The Syncfusion React Grid supports essential data operations such as paging, sorting, and filtering to efficiently manage and present structured data.
It offers configurable column definitions and built‑in navigation features that enable clear and intuitive data interaction.
Its modular design allows developers to enable only the required features, ensuring flexibility, simplicity, and optimized performance.
          </p>
        </div>

        {/* Grid Preview Area */}
            <div className="text-center">
              <p className="text-gray-500 text-sm mt-2">
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
              </p>
            </div>
      </div>
    </div>
  )
}
