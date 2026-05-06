import LiveData from "@/components/LiveData";
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"

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
              code: `import { Grid, Columns, Column, type GridRef, type ColumnTemplateProps, TextAlign } from '@syncfusion/react-grid';
import { Button, type IButton } from '@syncfusion/react-buttons';
import { type INumericTextBox, NumericTextBox } from '@syncfusion/react-inputs';
import '../app/styles/live-data.css';
import { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { tradeTickerData, type Trade, type TradeRow } from '../app/models/tradeDetails';

function TradeView() {
  const gridRef = useRef<GridRef>(null);
  const updateButtonRef = useRef<IButton | null>(null);
  const clearButtonRef = useRef<IButton | null>(null);
  const feedDelayInputRef = useRef<INumericTextBox | null>(null);
  const [timerID, setTimerID] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
  const [isUpdating, setIsUpdating] = useState(false);
  const initial = useRef<boolean>(true);

  const onDataLoad = () => {
    if (gridRef.current && initial.current) {
      document.getElementById('update1')?.click();
      initial.current = false;
      const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'Enter' && feedDelayInputRef.current?.element?.parentElement?.classList.contains('sf-input-focus')) {
          feedDelayInputRef.current.value = parseInt(feedDelayInputRef.current.element.value);
          updateButtonRef.current?.element?.click();
        }
      };
      feedDelayInputRef.current?.element?.addEventListener('keypress', handleKeyPress);
      return () => {
        feedDelayInputRef.current?.element?.removeEventListener('keypress', handleKeyPress);
      };
    }
  };

  /** 
   * Renders the Change column template, displaying the change value with conditional styling.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element displaying the formatted change value.
   */
  const ChangeTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const change = (props?.data as Trade)?.change ?? 0;
    const className = change < 0 ? 'below-0' : 'above-0';
    return (
      <div className={className}>
        <span className="rowcell-left">{change.toFixed(2)}</span>
      </div>
    );
  }, []);

  /** 
   * Renders the Change Percent column template, displaying the percentage change with conditional styling.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element displaying the formatted change percentage.
   */
  const ChangePercentTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const changePercent = (props?.data as Trade)?.change_percent ?? 0;
    const className = changePercent < 0 ? 'below-0' : 'above-0';
    return (
      <div className={className}>
        <span className="rowcell-left">{changePercent.toFixed(2)}%</span>
      </div>
    );
  }, []);

  /** 
   * Renders the Rating column template, displaying a rating with an SVG icon based on the change percentage.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element with an SVG icon and rating text.
   */
  const RatingTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const change = (props?.data as Trade)?.change_percent ?? 0;
    let text: string;
    let textClass: string;
    let SvgComponent: React.FC;

    switch (true) {
      case change === 0:
        text = 'Neutral';
        textClass = 'neutral';
        SvgComponent = () => (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path d="M5 12H19" stroke="#888888" strokeWidth="3" strokeLinecap="square" strokeLinejoin="round" />
          </svg>
        );
        break;
      case change < -1:
        text = 'Strongly Sell';
        textClass = 'below-0';
        SvgComponent = () => (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path d="M5.5 12.5L11.5 18.5L17.5 12.5" stroke="#FF3740" strokeWidth="2" strokeLinecap="square" />
            <path d="M5.5 5.5L11.5 11.5L17.5 5.5" stroke="#FF3740" strokeWidth="2" strokeLinecap="square" />
          </svg>
        );
        break;
      case change < 0:
        text = 'Sell';
        textClass = 'below-0';
        SvgComponent = () => (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 7.08578L12 14.0858L19 7.08578L20.4142 8.5L12 16.9142L3.58578 8.5L5 7.08578Z"
              fill="#FF3740"
            />
          </svg>
        );
        break;
      case change > 1:
        text = 'Strongly Buy';
        textClass = 'above-0';
        SvgComponent = () => (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" fill="none" />
            <path d="M17.5 11.5L11.5 5.5L5.5 11.5" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
            <path d="M17.5 18.5L11.5 12.5L5.5 18.5" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
          </svg>
        );
        break;
      default:
        text = 'Buy';
        textClass = 'above-0';
        SvgComponent = () => (
          <svg width="10" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8L8 2L14 8" stroke="#00A653" strokeWidth="2" strokeLinecap="square" />
          </svg>
        );
        break;
    }

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span className={sf-icons {textClass} side-space}>
          <SvgComponent />
        </span>
        <span className={textClass}>{text}</span>
      </div>
    );
  }, []);

  const updateCellValues = () => {
    const fullData = (gridRef.current?.currentViewData ?? []) as TradeRow[];
    const rowsToUpdate = Math.floor(Math.random() * (70 - 50 + 1)) + 50; // Random between 50 and 70
    if (fullData.length === 0) return;

    // Randomly select unique indices from full dataset
    const indices = Array.from({ length: fullData.length }, (_, i) => i);
    const randomIndices = [];
    for (let i = 0; i < rowsToUpdate; i++) {
      const randomIndex = Math.floor(Math.random() * indices.length);
      randomIndices.push(indices.splice(randomIndex, 1)[0]);
    }

    randomIndices.forEach((index) => {
      const row = fullData[index];
      if (!row) return;

      const oldValue = row.price;
      const maxChangePercent = 2.0;
      const changeFactor = (Math.random() * 2 - 1) * maxChangePercent / 100;
      const newChange = parseFloat((oldValue * changeFactor).toFixed(2));
      const changePercent = parseFloat(((newChange / oldValue) * 100).toFixed(2));
      const ratingValue = newChange < 0 ? 'Sell' : 'Buy';

      gridRef.current?.setCellValue?.(row.id, 'change', newChange, true);
      gridRef.current?.setCellValue?.(row.id, 'change_percent', changePercent, true);
      gridRef.current?.setCellValue?.(row.id, 'Rating', ratingValue, true);
    });
  };

  const updateClick = () => {
    if (timerID) {
      clearInterval(timerID);
      setTimerID(undefined);
    }
    const inputValue = feedDelayInputRef.current?.element?.value || '';
    const feedDelay = inputValue ? Number(inputValue.replace(/,/g, '')) : 0;
    setIsUpdating(true);
    const newTimerID = setInterval(updateCellValues, feedDelay);
    setTimerID(newTimerID);
  };

  const clearClick = () => {
    if (timerID) {
      setIsUpdating(false);
      clearInterval(timerID);
      setTimerID(undefined);
    }
  };

  useEffect(() => {
    return () => {
      if (timerID) clearInterval(timerID);
    };
  }, [timerID]);

  /** 
   * Renders the Ticker column template, displaying a stock image and ticker name.
   * @param props - The cell template arguments provided by the grid.
   * @returns A React element with an image and ticker text.
   */
  const stockTemplate = useCallback((props?: ColumnTemplateProps): React.ReactElement => {
    const tradeData = props?.data as Trade;
    const ticker = tradeData.ticker ?? '';
    const initial = ticker.substring(0, 2);
    const colors = ['Red', 'Green', 'Blue', 'Orange', 'Purple'];
    const colorTheme = colors[tradeData.id % colors.length];
    const colorStyles: { [key: string]: { backgroundColor: string; color: string } } = {
      Red: { backgroundColor: '#fee2e2', color: '#b91c1c' },
      Green: { backgroundColor: '#dcfce7', color: '#166534' },
      Blue: { backgroundColor: '#dbeafe', color: '#1d4ed8' },
      Orange: { backgroundColor: '#ffedd5', color: '#9a3412' },
      Purple: { backgroundColor: '#f3e8ff', color: '#581c87' },
    };
    const avatarStyle: React.CSSProperties = colorStyles[colorTheme];
    return (
      <div className="ticker-cell">
        <div className="rounded-logo" style={avatarStyle}>
          {initial}
        </div>
        <span className="ticker-name">{ticker}</span>
      </div>
    );
  }, []);

  return (
    <>
        <div className="flex items-center gap-3 mb-4">
          <label style={{ fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap' }}>
            Feed Delay (ms):
          </label>
          <div style={{ minWidth: '150px' }}>
            <NumericTextBox
              format="N0"
              defaultValue={300}
              min={10}
              max={5000}
              width="100%"
              ref={feedDelayInputRef}
              aria-label="Feed delay"
              disabled={isUpdating}
            />
          </div>
          <Button
            id="update1"
            ref={updateButtonRef}
            onClick={updateClick}
            disabled={isUpdating}
            style={{ padding: '6px 12px', fontSize: '13px' }}
          >
            Start Data Update
          </Button>
          <Button
            id="clear"
            ref={clearButtonRef}
            onClick={clearClick}
            disabled={!isUpdating}
            style={{ padding: '6px 12px', fontSize: '13px' }}
          >
            Stop Data Update
          </Button>
        </div>
      <div className="control-pane">
        <div className="control-section">

          {useMemo(
            /** 
             * Memoized Grid component to prevent unnecessary re-renders.
             * @returns The Syncfusion Grid component with configured columns and templates.
             */
            () => (
              <Grid
                className="trade"
                ref={gridRef}
                dataSource={tradeTickerData}
                enableHover={false}
                rowHeight={40}
                height={400}
                onDataLoad={onDataLoad}
                selectionSettings={{ enabled: false }}
                allowKeyboard={false}
              >
                <Columns>
                  <Column field="ticker" headerText="Ticker" width="100" template={stockTemplate} textAlign={TextAlign.Left} />
                  <Column field="change_percent" headerText="Change %" width="100" textAlign={TextAlign.Right} template={ChangePercentTemplate} />
                  <Column field="change" headerText="Change" width="100" format="C2" textAlign={TextAlign.Right} template={ChangeTemplate} />
                  <Column field="price" headerText="Price" width="100" format="C2" textAlign={TextAlign.Right} />
                  <Column field="high" headerText="High" format="C2" textAlign={TextAlign.Right} width="130" />
                  <Column field="low" headerText="Low" format="C2" textAlign={TextAlign.Right} width="130" />
                  <Column field="Rating" headerText="Tech Rating" textAlign={TextAlign.Left} width="150" template={RatingTemplate} />
                </Columns>
              </Grid>
            ),
            []
          )}
        </div>
      </div>
    </>
  );
}

export default TradeView`
            },
            {
              filename: "live-data.css",
              language: "css",
              code: `@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css';
@import '@syncfusion/react-grid/styles/material.css';
/* live sample */

.trade .sf-grid-header-cell {
  height: 43px;
  line-height: 1.4;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.trade .sf-grid-content-row .sf-cell .sf-icons {
  line-height: 0;
}

.trade .side-space {
  padding: 0 5px;
  height: 14px;
  width: 14px;
  margin-left: 3px;
}

.trade .above-0,
.trade .above-0 span {
  color: #00A653;
}

.trade .below-0,
.trade .below-0 span {
  color: #FF3740;
}

.trade .neutral,
.trade .sf-grid-content-row .sf-cell .sf-icons.neutral {
  color: #888888;
}

.trade .ticker-cell {
  display: flex;
  align-items: center;
  gap: 8px;
}

.trade .rounded-logo {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  letter-spacing: 0.1px;
}

.trade .ticker-name {
  color: #111827;
  opacity: .9;
}

.dark-theme .trade .ticker-name {
  color: #E3E3E3; 
  opacity: 1;
}
`
            },
            {
              filename: "tradeDetails.ts",
              language: "typescript",
              code: `export interface Trade {
  id: number;
  ticker: string;
  CountryCode: string;
  change: number;
  change_percent: number;
  Net: number;
  Rating: string;
  NetIncome: number;
  Sector: string;
  EmployeeCount: number;
  Revenue: number;
}

export type TradeRow = {
  id: string | number;
  ticker: string;
  country: string;
  change_percent: number;
  change: number;
  price: number;
  high: number;
  low: number;
  tech_rating: string;
};

export const tradeTickerData: object[] = [
  {"id": 1, "ticker": "TECK", "country": "US", "price": 6345.05, "change_percent": 0.73, "change": 45.85, "high": 6349.83, "low": 6301.11, "tech_rating": "Buy"},
  {"id": 2, "ticker": "HLTH", "country": "GB", "price": 21169.42, "change_percent": 1.21, "change": 252.87, "high": 21183.18, "low": 20937.49, "tech_rating": "Strong buy"},
  {"id": 3, "ticker": "FINC", "country": "AU", "price": 44193.13, "change_percent": 0.18, "change": 81.38, "high": 44290.09, "low": 44017.71, "tech_rating": "Neutral"},
  {"id": 4, "ticker": "RETL", "country": "JP", "price": 16.05, "change_percent": -4.29, "change": -0.72, "high": 16.46, "low": 16.04, "tech_rating": "Sell"},
  {"id": 5, "ticker": "MANU", "country": "FR", "price": 27320.87, "change_percent": 1.27, "change": 350.79, "high": 27395.55, "low": 27200.46, "tech_rating": "Buy"},
  {"id": 6, "ticker": "ENRG", "country": "IN", "price": 9142.55, "change_percent": -0.43, "change": -39.75, "high": 9164.31, "low": 9124.44, "tech_rating": "Buy"},
  {"id": 7, "ticker": "CONS", "country": "CA", "price": 24333.08, "change_percent": 1.71, "change": 408.72, "high": 24392.04, "low": 23899.46, "tech_rating": "Strong buy"},
  {"id": 8, "ticker": "TELE", "country": "DE", "price": 8311.33, "change_percent": 1.26, "change": 96.30, "high": 8734.80, "low": 7645.21, "tech_rating": "Neutral"},
  {"id": 9, "ticker": "TRAN", "country": "NZ", "price": 37906.06, "change_percent": 0.49, "change": 200.34, "high": 41304.91, "low": 41041.99, "tech_rating": "Strong buy"},
  {"id": 10, "ticker": "UTIL", "country": "RU", "price": 41059.10, "change_percent": 0.65, "change": 264.29, "high": 41164.11, "low": 40668.19, "tech_rating": "Buy"},
  {"id": 11, "ticker": "BOND", "country": "US", "price": 3272.68, "change_percent": 0.92, "change": 29.83, "high": 3272.68, "low": 3200.28, "tech_rating": "Buy"},
  {"id": 12, "ticker": "FUND", "country": "GB", "price": 6346.15, "change_percent": 0.74, "change": 46.05, "high": 6350.93, "low": 6302.21, "tech_rating": "Buy"},
  {"id": 13, "ticker": "GAIN", "country": "FR", "price": 21170.52, "change_percent": 1.22, "change": 253.07, "high": 21184.28, "low": 20938.59, "tech_rating": "Strong buy"},
  {"id": 14, "ticker": "RUSH", "country": "CN", "price": 44194.23, "change_percent": 0.19, "change": 81.58, "high": 44291.19, "low": 44018.81, "tech_rating": "Neutral"},
  {"id": 15, "ticker": "VEST", "country": "JP", "price": 16.06, "change_percent": -4.28, "change": -0.71, "high": 16.47, "low": 16.05, "tech_rating": "Sell"},
  {"id": 16, "ticker": "ZEST", "country": "DE", "price": 27321.97, "change_percent": 1.28, "change": 351.99, "high": 27396.65, "low": 27201.56, "tech_rating": "Buy"},
  {"id": 17, "ticker": "PACE", "country": "IT", "price": 9143.65, "change_percent": -0.42, "change": -39.55, "high": 9165.41, "low": 9125.54, "tech_rating": "Buy"},
  {"id": 18, "ticker": "LIFT", "country": "CA", "price": 24334.18, "change_percent": 1.72, "change": 409.92, "high": 24393.14, "low": 23900.56, "tech_rating": "Strong buy"},
  {"id": 19, "ticker": "SOAR", "country": "KR", "price": 8312.43, "change_percent": 1.27, "change": 96.50, "high": 8735.90, "low": 7646.31, "tech_rating": "Neutral"},
  {"id": 20, "ticker": "REAL", "country": "AU", "price": 37907.16, "change_percent": 0.50, "change": 200.54, "high": 41305.01, "low": 41042.09, "tech_rating": "Strong buy"},
  {"id": 21, "ticker": "HIVE", "country": "US", "price": 41060.20, "change_percent": 0.66, "change": 264.49, "high": 41165.21, "low": 40669.29, "tech_rating": "Buy"},
  {"id": 22, "ticker": "GLEN", "country": "GB", "price": 3273.78, "change_percent": 0.93, "change": 30.03, "high": 3273.78, "low": 3201.38, "tech_rating": "Buy"},
  {"id": 23, "ticker": "VOLT", "country": "JP", "price": 6347.25, "change_percent": 0.75, "change": 46.25, "high": 6351.03, "low": 6303.31, "tech_rating": "Buy"},
  {"id": 24, "ticker": "FEND", "country": "DE", "price": 21171.62, "change_percent": 1.23, "change": 253.27, "high": 21185.38, "low": 20939.69, "tech_rating": "Strong buy"},
  {"id": 25, "ticker": "GROW", "country": "FR", "price": 44195.33, "change_percent": 0.20, "change": 81.78, "high": 44292.29, "low": 44019.91, "tech_rating": "Neutral"},
  {"id": 26, "ticker": "RATE", "country": "IT", "price": 16.07, "change_percent": -4.27, "change": -0.70, "high": 16.48, "low": 16.06, "tech_rating": "Sell"},
  {"id": 27, "ticker": "EDGE", "country": "ES", "price": 27323.07, "change_percent": 1.29, "change": 352.19, "high": 27397.75, "low": 27202.66, "tech_rating": "Buy"},
  {"id": 28, "ticker": "JOLT", "country": "CA", "price": 9144.75, "change_percent": -0.41, "change": -39.35, "high": 9166.51, "low": 9126.64, "tech_rating": "Buy"},
  {"id": 29, "ticker": "VIVA", "country": "AU", "price": 24335.28, "change_percent": 1.73, "change": 410.12, "high": 24394.24, "low": 23901.66, "tech_rating": "Strong buy"},
  {"id": 30, "ticker": "MARK", "country": "CH", "price": 8313.53, "change_percent": 1.28, "change": 96.70, "high": 8736.00, "low": 7647.41, "tech_rating": "Neutral"},
  {"id": 31, "ticker": "WAGE", "country": "US", "price": 37908.26, "change_percent": 0.51, "change": 200.74, "high": 41306.11, "low": 41043.19, "tech_rating": "Strong buy"},
  {"id": 32, "ticker": "PEAK", "country": "GB", "price": 41061.30, "change_percent": 0.67, "change": 264.69, "high": 41166.31, "low": 40670.39, "tech_rating": "Buy"},
  {"id": 33, "ticker": "OILG", "country": "CA", "price": 3274.88, "change_percent": 0.94, "change": 30.23, "high": 3274.88, "low": 3202.48, "tech_rating": "Buy"},
  {"id": 34, "ticker": "WIND", "country": "IN", "price": 6348.35, "change_percent": 0.76, "change": 46.45, "high": 6352.13, "low": 6304.41, "tech_rating": "Buy"},
  {"id": 35, "ticker": "BOOM", "country": "DE", "price": 21172.72, "change_percent": 1.24, "change": 253.47, "high": 21186.48, "low": 20940.79, "tech_rating": "Strong buy"},
  {"id": 36, "ticker": "NOVA", "country": "FR", "price": 44196.43, "change_percent": 0.21, "change": 81.98, "high": 44293.39, "low": 44020.01, "tech_rating": "Neutral"},
  {"id": 37, "ticker": "HARK", "country": "IT", "price": 16.08, "change_percent": -4.26, "change": -0.69, "high": 16.49, "low": 16.07, "tech_rating": "Sell"},
  {"id": 38, "ticker": "ROVE", "country": "AU", "price": 27324.17, "change_percent": 1.30, "change": 352.39, "high": 27398.85, "low": 27203.76, "tech_rating": "Buy"},
  {"id": 39, "ticker": "GLOW", "country": "JP", "price": 9145.85, "change_percent": -0.40, "change": -39.15, "high": 9167.61, "low": 9127.74, "tech_rating": "Buy"},
  {"id": 40, "ticker": "PHAR", "country": "CH", "price": 24336.38, "change_percent": 1.74, "change": 410.32, "high": 24395.34, "low": 23902.76, "tech_rating": "Strong buy"},
  {"id": 41, "ticker": "SPUR", "country": "US", "price": 8314.63, "change_percent": 1.29, "change": 96.90, "high": 8737.10, "low": 7648.51, "tech_rating": "Neutral"},
  {"id": 42, "ticker": "YILD", "country": "GB", "price": 37909.36, "change_percent": 0.52, "change": 200.94, "high": 41307.21, "low": 41044.29, "tech_rating": "Strong buy"},
  {"id": 43, "ticker": "SPIN", "country": "FR", "price": 41062.40, "change_percent": 0.68, "change": 264.89, "high": 41167.41, "low": 40671.49, "tech_rating": "Buy"},
  {"id": 44, "ticker": "PIVT", "country": "DE", "price": 3275.98, "change_percent": 0.95, "change": 30.43, "high": 3275.98, "low": 3203.58, "tech_rating": "Buy"},
  {"id": 45, "ticker": "TIDE", "country": "JP", "price": 6349.45, "change_percent": 0.77, "change": 46.65, "high": 6353.23, "low": 6305.51, "tech_rating": "Buy"},
  {"id": 46, "ticker": "HOPE", "country": "CA", "price": 21173.82, "change_percent": 1.25, "change": 253.67, "high": 21187.58, "low": 20941.89, "tech_rating": "Strong buy"},
  {"id": 47, "ticker": "BOLT", "country": "IN", "price": 44197.53, "change_percent": 0.22, "change": 82.18, "high": 44294.49, "low": 44021.11, "tech_rating": "Neutral"},
  {"id": 48, "ticker": "BETA", "country": "CN", "price": 16.09, "change_percent": -4.25, "change": -0.68, "high": 16.50, "low": 16.08, "tech_rating": "Sell"},
  {"id": 49, "ticker": "TILT", "country": "ES", "price": 27325.27, "change_percent": 1.31, "change": 352.59, "high": 27399.95, "low": 27204.86, "tech_rating": "Buy"},
  {"id": 50, "ticker": "NEST", "country": "CA", "price": 9146.95, "change_percent": -0.39, "change": -38.95, "high": 9168.71, "low": 9128.84, "tech_rating": "Buy"},
  {"id": 51, "ticker": "HALT", "country": "AU", "price": 24337.48, "change_percent": 1.75, "change": 410.52, "high": 24396.44, "low": 23903.86, "tech_rating": "Strong buy"},
  {"id": 52, "ticker": "ROVE", "country": "CH", "price": 8315.73, "change_percent": 1.30, "change": 97.10, "high": 8738.20, "low": 7649.61, "tech_rating": "Neutral"},
  {"id": 53, "ticker": "MINT", "country": "US", "price": 37910.46, "change_percent": 0.53, "change": 201.14, "high": 41308.31, "low": 41045.39, "tech_rating": "Strong buy"},
  {"id": 54, "ticker": "VIBE", "country": "GB", "price": 41063.50, "change_percent": 0.69, "change": 265.09, "high": 41168.51, "low": 40672.59, "tech_rating": "Buy"},
  {"id": 55, "ticker": "YARN", "country": "FR", "price": 3277.08, "change_percent": 0.96, "change": 30.63, "high": 3277.08, "low": 3204.68, "tech_rating": "Buy"},
  {"id": 56, "ticker": "LINK", "country": "IT", "price": 6350.55, "change_percent": 0.78, "change": 46.85, "high": 6354.33, "low": 6306.61, "tech_rating": "Buy"},
  {"id": 57, "ticker": "VENT", "country": "ES", "price": 21174.92, "change_percent": 1.26, "change": 253.87, "high": 21188.68, "low": 20942.99, "tech_rating": "Strong buy"},
  {"id": 58, "ticker": "WHIZ", "country": "CA", "price": 44198.63, "change_percent": 0.23, "change": 82.38, "high": 44295.59, "low": 44022.21, "tech_rating": "Neutral"},
  {"id": 59, "ticker": "AURA", "country": "AU", "price": 16.10, "change_percent": -4.24, "change": -0.67, "high": 16.51, "low": 16.09, "tech_rating": "Sell"},
  {"id": 60, "ticker": "YILD", "country": "CH", "price": 27326.37, "change_percent": 1.32, "change": 352.79, "high": 27401.05, "low": 27205.96, "tech_rating": "Buy"},
  {"id": 61, "ticker": "FUSE", "country": "US", "price": 9148.05, "change_percent": -0.38, "change": -38.75, "high": 9169.81, "low": 9129.94, "tech_rating": "Buy"},
  {"id": 62, "ticker": "ZOOM", "country": "CN", "price": 24338.58, "change_percent": 1.76, "change": 410.72, "high": 24397.54, "low": 23904.96, "tech_rating": "Strong buy"},
  {"id": 63, "ticker": "VANT", "country": "IN", "price": 8316.83, "change_percent": 1.31, "change": 97.30, "high": 8739.30, "low": 7650.71, "tech_rating": "Neutral"},
  {"id": 64, "ticker": "CASH", "country": "BR", "price": 37911.56, "change_percent": 0.54, "change": 201.34, "high": 41309.41, "low": 41046.49, "tech_rating": "Strong buy"},
  {"id": 65, "ticker": "NEST", "country": "CN", "price": 41064.60, "change_percent": 0.70, "change": 265.29, "high": 41169.61, "low": 40673.69, "tech_rating": "Buy"},
  {"id": 66, "ticker": "SURE", "country": "NL", "price": 3278.18, "change_percent": 0.97, "change": 30.83, "high": 3278.18, "low": 3205.78, "tech_rating": "Buy"},
  {"id": 67, "ticker": "TWIN", "country": "SG", "price": 6351.65, "change_percent": 0.79, "change": 47.05, "high": 6355.43, "low": 6307.71, "tech_rating": "Buy"},
  {"id": 68, "ticker": "ADVR", "country": "US", "price": 21176.02, "change_percent": 1.27, "change": 254.07, "high": 21189.78, "low": 20944.09, "tech_rating": "Strong buy"},
  {"id": 69, "ticker": "ENTR", "country": "KR", "price": 44199.73, "change_percent": 0.24, "change": 82.58, "high": 44296.69, "low": 44023.31, "tech_rating": "Neutral"},
  {"id": 70, "ticker": "RISE", "country": "AR", "price": 16.11, "change_percent": -4.23, "change": -0.66, "high": 16.52, "low": 16.10, "tech_rating": "Sell"},
  {"id": 71, "ticker": "BETA", "country": "IN", "price": 27327.47, "change_percent": 1.33, "change": 352.99, "high": 27402.15, "low": 27207.06, "tech_rating": "Buy"},
  {"id": 72, "ticker": "CORE", "country": "US", "price": 9149.15, "change_percent": -0.37, "change": -38.55, "high": 9170.91, "low": 9131.04, "tech_rating": "Buy"},
  {"id": 73, "ticker": "LEND", "country": "GB", "price": 24339.68, "change_percent": 1.77, "change": 410.92, "high": 24398.64, "low": 23906.06, "tech_rating": "Strong buy"},
  {"id": 74, "ticker": "BOLT", "country": "JP", "price": 8317.93, "change_percent": 1.32, "change": 97.50, "high": 8740.40, "low": 7651.81, "tech_rating": "Neutral"},
  {"id": 75, "ticker": "VENT", "country": "DE", "price": 37912.66, "change_percent": 0.55, "change": 201.54, "high": 41310.51, "low": 41047.59, "tech_rating": "Strong buy"},
  {"id": 76, "ticker": "LINK", "country": "CN", "price": 41065.70, "change_percent": 0.71, "change": 265.49, "high": 41170.71, "low": 40674.79, "tech_rating": "Buy"},
  {"id": 77, "ticker": "WHIZ", "country": "FR", "price": 3279.28, "change_percent": 0.98, "change": 31.03, "high": 3279.28, "low": 3206.88, "tech_rating": "Buy"},
  {"id": 78, "ticker": "PLOT", "country": "CH", "price": 6352.75, "change_percent": 0.80, "change": 47.25, "high": 6356.53, "low": 6308.81, "tech_rating": "Buy"},
  {"id": 79, "ticker": "TWIN", "country": "CA", "price": 21177.12, "change_percent": 1.28, "change": 254.27, "high": 21190.88, "low": 20945.19, "tech_rating": "Strong buy"},
  {"id": 80, "ticker": "VANT", "country": "AU", "price": 44200.83, "change_percent": 0.25, "change": 82.78, "high": 44297.79, "low": 44024.41, "tech_rating": "Neutral"},
  {"id": 81, "ticker": "MINT", "country": "US", "price": 16.12, "change_percent": -4.22, "change": -0.65, "high": 16.53, "low": 16.11, "tech_rating": "Sell"},
  {"id": 82, "ticker": "SPIN", "country": "GB", "price": 27328.57, "change_percent": 1.34, "change": 353.19, "high": 27403.25, "low": 27208.16, "tech_rating": "Buy"},
  {"id": 83, "ticker": "BASE", "country": "JP", "price": 9150.25, "change_percent": -0.36, "change": -38.35, "high": 9172.01, "low": 9132.14, "tech_rating": "Buy"},
  {"id": 84, "ticker": "HOPE", "country": "DE", "price": 24340.78, "change_percent": 1.78, "change": 411.12, "high": 24399.74, "low": 23907.16, "tech_rating": "Strong buy"},
  {"id": 85, "ticker": "SURE", "country": "FR", "price": 8319.03, "change_percent": 1.33, "change": 97.70, "high": 8741.50, "low": 7652.91, "tech_rating": "Neutral"},
  {"id": 86, "ticker": "CASH", "country": "IT", "price": 37913.76, "change_percent": 0.56, "change": 201.74, "high": 41311.61, "low": 41048.69, "tech_rating": "Strong buy"},
  {"id": 87, "ticker": "NEST", "country": "ES", "price": 41066.80, "change_percent": 0.72, "change": 265.69, "high": 41171.81, "low": 40675.89, "tech_rating": "Buy"},
  {"id": 88, "ticker": "VOLT", "country": "CA", "price": 3280.38, "change_percent": 0.99, "change": 31.23, "high": 3280.38, "low": 3207.98, "tech_rating": "Buy"},
  {"id": 89, "ticker": "BANK", "country": "AU", "price": 6353.85, "change_percent": 0.81, "change": 47.45, "high": 6357.63, "low": 6309.91, "tech_rating": "Buy"},
  {"id": 90, "ticker": "LEND", "country": "CH", "price": 21178.22, "change_percent": 1.29, "change": 254.47, "high": 21191.98, "low": 20946.29, "tech_rating": "Strong buy"},
  {"id": 91, "ticker": "VIBE", "country": "IN", "price": 44201.93, "change_percent": 0.26, "change": 82.98, "high": 44298.89, "low": 44025.51, "tech_rating": "Neutral"},
  {"id": 92, "ticker": "FUSE", "country": "DE", "price": 16.13, "change_percent": -4.21, "change": -0.64, "high": 16.54, "low": 16.12, "tech_rating": "Sell"},
  {"id": 93, "ticker": "AURA", "country": "GB", "price": 27329.67, "change_percent": 1.35, "change": 353.39, "high": 27404.35, "low": 27209.26, "tech_rating": "Buy"},
  {"id": 94, "ticker": "BETA", "country": "ES", "price": 9151.35, "change_percent": -0.35, "change": -38.15, "high": 9173.11, "low": 9133.24, "tech_rating": "Buy"},
  {"id": 95, "ticker": "YILD", "country": "CA", "price": 24341.88, "change_percent": 1.79, "change": 411.32, "high": 24400.84, "low": 23908.26, "tech_rating": "Strong buy"},
  {"id": 96, "ticker": "MINI", "country": "AU", "price": 8320.13, "change_percent": 1.34, "change": 97.90, "high": 8742.60, "low": 7654.01, "tech_rating": "Neutral"},
  {"id": 97, "ticker": "AUTO", "country": "CH", "price": 37914.86, "change_percent": 0.57, "change": 201.94, "high": 41312.71, "low": 41049.79, "tech_rating": "Strong buy"},
  {"id": 98, "ticker": "MINT", "country": "US", "price": 41067.90, "change_percent": 0.73, "change": 265.89, "high": 41172.91, "low": 40676.99, "tech_rating": "Buy"},
  {"id": 99, "ticker": "VANT", "country": "GB", "price": 3281.48, "change_percent": 1.00, "change": 31.43, "high": 3281.48, "low": 3209.08, "tech_rating": "Buy"},
  {"id": 100, "ticker": "RISE", "country": "JP", "price": 6354.95, "change_percent": 0.82, "change": 47.65, "high": 6358.73, "low": 6311.01, "tech_rating": "Buy"}
]`
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
  