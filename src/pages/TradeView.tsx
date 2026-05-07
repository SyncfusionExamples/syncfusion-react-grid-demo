import LiveData from "@/components/LiveData";
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"
import gridCode from '@/components/LiveData.tsx?raw';
import gridCss from '@/app/styles/live-data.css?raw';
import gridData from '@/app/models/tradeDetails.ts?raw';

export default function TradeView() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Live Trade Data</h2>
          
          <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            The Live Trade Data Grid displays real‑time trading data using custom templates designed for financial metrics. It includes controls to start, stop, and clear the data feed, along with a configurable refresh delay. Color‑coded indicators visually highlight price movements.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Configurable Data Actions and Insights:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Real-time Streaming:</span> Live data streaming capabilities.</li>
              <li><span className="font-semibold text-gray-900">Custom Templates:</span> Financial metric templates.</li>
              <li><span className="font-semibold text-gray-900">Control Buttons:</span> Start, stop, and clear actions.</li>
              <li><span className="font-semibold text-gray-900">Configurable Delay:</span> Adjustable refresh interval.</li>
              <li><span className="font-semibold text-gray-900">Color Indicators:</span> Price movement visualization.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Functional Overview</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              Enables effective monitoring of live trade data with pause and resume functionality. Visual indicators provide immediate insight into market direction and price movement trends.
            </p>
          </div>

          <div>
            <h2
              className="font-semibold text-gray-900 text-sm mb-3"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                fontWeight: "700",
              }}
            >
              Using the DataSource
            </h2>

            <p
              className="text-gray-700 text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              By default, the Data Grid supports data binding using{" "}
              <span className="font-semibold text-gray-900">client‑side data</span>.
              This demo demonstrates{" "}
              <span className="font-semibold text-gray-900">
                simulated real‑time data binding
              </span>{" "}
              by dynamically updating the grid at configurable intervals.
            </p>

            <br />

            <ul
              className="list-disc list-inside space-y-2 text-gray-700 text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                lineHeight: "1.6",
              }}
            >
              <li>
                The grid is populated using simulated live trade data from a local data
                model.
              </li>
              <li>
                The data source is defined using <code>tradeDetails</code>.
              </li>
              <li>
                Data updates are triggered at configurable intervals using client‑side
                state management.
              </li>
            </ul>

            <br />

            <p
              className="text-gray-700 text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              This approach enables real‑time visualization of trade data within the
              Data Grid, supporting live updates, control actions, and visual indicators
              for effective monitoring of market activity.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-base font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-amber-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 1: Create a live data hook and dynamically update cell values using the Data Grid.</h4>
          <br/>
          <CodeSnippet code={`import { useState, useEffect } from 'react';

export function useLiveData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Updates a specific cell's value in a row identified by its primary key.
      gridRef.current?.setCellValue?.(row.id, 'change', newChange, true);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return data;
}`} language="typescript" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-amber-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 2: Bind live data to the Data Grid using the "dataSource" property.</h4>
          <br/>
          <CodeSnippet code={`import { Grid } from '@syncfusion/react-grid';

<Grid ref={gridRef} dataSource={liveData}>
  <Columns>
    <Column field='ticker' headerText='Ticker' width='80' />
    <Column field='price' headerText='Price' width='100' />
  </Columns>
</Grid>`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <LiveData />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "LiveData.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "live-data.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "tradeDetails.ts",
              language: "typescript",
              code: gridData
            }
          ]}
        />
      </div>
    ),
  }

  return (
    <SectionTabLayout
      title="Live Data"
      subtitle="Real-time data streaming"
      badge={{
        text: "Real-Time",
        className: "bg-amber-100 text-amber-700"
      }}
      content={content}
    />
  )
}
  