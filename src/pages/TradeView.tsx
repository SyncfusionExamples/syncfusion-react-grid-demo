import LiveData from "@/components/LiveData";
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function TradeView() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Live Trade Data Dashboard</h2>
          
          <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            Real-time trading data streaming with custom templates for financial metrics. Includes start/stop controls, configurable feed delay, color-coded indicators for price movements, and pagination (12 records per page).
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Implementation:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Real-time Streaming:</span> Live data streaming capabilities</li>
              <li><span className="font-semibold text-gray-900">Custom Templates:</span> Financial metric templates</li>
              <li><span className="font-semibold text-gray-900">Control Buttons:</span> Start, stop, and clear actions</li>
              <li><span className="font-semibold text-gray-900">Configurable Delay:</span> Adjustable refresh interval</li>
              <li><span className="font-semibold text-gray-900">Color Indicators:</span> Price movement visualization</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Capabilities</h2>
            <p className="text-gray-700 text-base" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              Monitor financial data streams with pause/resume capability. Adjustable feed delay for network adaptation. Color indicators for market direction changes.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-amber-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 1: Create Live Data Hook</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { useState, useEffect } from 'react';

export function useLiveData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => [newRow(), ...prev].slice(0, 100));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return data;
}`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-amber-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 2: Connect to Grid</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from '@syncfusion/react-grid';

<Grid dataSource={liveData}>
  <Columns>
    <Column field='ticker' headerText='Ticker' width='80' />
    <Column field='price' headerText='Price' width='100' />
  </Columns>
</Grid>`}
          </pre>
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
              code: `import { Grid, Columns, Column, type GridRef, type ColumnTemplateProps, TextAlign } from '@syncfusion/react-grid';
import { Button, type IButton } from '@syncfusion/react-buttons';
import { type INumericTextBox, NumericTextBox } from '@syncfusion/react-inputs';
import '../app/styles/live-data.css';
import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { tradeTickerData, type Trade, type TradeRow } from '../app/models/tradeDetails';

export default function TradeView() {
  const gridRef = useRef<GridRef>(null);
  const updateButtonRef = useRef<IButton | null>(null);
  const feedDelayInputRef = useRef<INumericTextBox | null>(null);
  const [timerID, setTimerID] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
  const [isUpdating, setIsUpdating] = useState(false);
  const initial = useRef<boolean>(true);

  const ChangeTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const change = (props?.data as Trade)?.change ?? 0;
    const className = change < 0 ? 'below-0' : 'above-0';
    return <div className={className}><span>{change.toFixed(2)}</span></div>;
  }, []);

  const ChangePercentTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const changePercent = (props?.data as Trade)?.change_percent ?? 0;
    const className = changePercent < 0 ? 'below-0' : 'above-0';
    return <div className={className}><span>{changePercent.toFixed(2)}%</span></div>;
  }, []);

  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button ref={(btn) => { updateButtonRef.current = btn; }} id="update1" onClick={() => setIsUpdating(!isUpdating)}>
          {isUpdating ? 'Stop Update' : 'Start Update'}
        </Button>
        <Button onClick={() => gridRef.current?.clearSelection()}>Clear</Button>
        <span>Feed Delay (ms):</span>
        <NumericTextBox ref={(inp) => { feedDelayInputRef.current = inp; }} value={300} />
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <Grid<Trade> dataSource={tradeTickerData} ref={gridRef} pageSettings={{ pageSize: 12 }} columns={[
          { field: 'ticker', headerText: 'Ticker', width: 80, textAlign: TextAlign.Left },
          { field: 'change_percent', headerText: 'Change %', width: 120, template: ChangePercentTemplate },
          { field: 'change', headerText: 'Change', width: 100, template: ChangeTemplate },
          { field: 'price', headerText: 'Price', width: 100, textAlign: TextAlign.Right },
          { field: 'high', headerText: 'High', width: 100, textAlign: TextAlign.Right },
          { field: 'low', headerText: 'Low', width: 100, textAlign: TextAlign.Right },
          { field: 'tech_rating', headerText: 'Tech Rating', width: 120 },
        ]} />
      </div>
    </div>
  );
}`
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
  