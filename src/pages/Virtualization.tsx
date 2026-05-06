import GridPerformance from "@/components/GridPerformance"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Virtualization() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Virtual Scrolling for Large Datasets</h2>
          
          <p className="text-gray-700 text-base leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            DOM virtualization for efficient rendering of 10,000+ records. Renders only visible rows with buffer rows for seamless scrolling. Multi-column sorting with consistent performance.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Architecture:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-base" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Row Virtualization:</span> DOM virtualization at row level</li>
              <li><span className="font-semibold text-gray-900">Viewport Rendering:</span> Smart viewport-based rendering</li>
              <li><span className="font-semibold text-gray-900">Sorting:</span> Multi-column sorting support</li>
              <li><span className="font-semibold text-gray-900">Templates:</span> Custom column templates</li>
              <li><span className="font-semibold text-gray-900">Scroll Handling:</span> Debounced scroll event optimization</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-base mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Performance</h2>
            <p className="text-gray-700 text-base" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              Constant memory usage independent of dataset size. Only viewport rows in DOM. Smooth scrolling at high velocities without degradation.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-red-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 1: Configure Virtual Scrolling</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from '@syncfusion/react-grid';

<Grid
  dataSource={largeData}
  enableVirtualization={true}
  height='100%'
  rowHeight={36}
/>`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-red-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 2: Enable Column Virtualization</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`<Grid
  dataSource={data}
  enableVirtualization={true}
  enableColumnVirtualization={true}
  rowHeight={36}
/>`}
          </pre>
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <GridPerformance />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridPerformance.tsx",
              language: "typescript",
              code: `import { useState, useCallback } from 'react';
import { Grid, Columns, Column, TextAlign, VirtualDomType, type ColumnTemplateProps, type SortSettings } from '@syncfusion/react-grid';
import { type EmployeeData, generateEmployeeData } from '@/app/models/data2';

export default function GridPerformance() {
  const [data] = useState(() => generateEmployeeData());
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [virtualizationSettings] = useState({ type: VirtualDomType.Row });

  const fullNameTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <span>{args.data.FullName}</span>
  ), []);

  return (
    <Grid<EmployeeData> 
        dataSource={data}
        columns={[
            { field: "EmployeeID", headerText: "ID", width: 100, textAlign: 'Right' },
            { field: "FullName", headerText: "Name", width: 200, template: fullNameTemplate },
            { field: "Department", headerText: "Department", width: 150 },
            { field: "Status", headerText: "Status", width: 100 },
            { field: "HireDate", headerText: "Hire Date", width: 130, format: "yMd" }
        ]}
        height={600}
        sortSettings={sortSettings}
        virtualizationSettings={virtualizationSettings}
    />
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
      title="Virtual Scrolling"
      subtitle="Handle thousands of rows efficiently"
      badge={{
        text: "Performance",
        className: "bg-red-100 text-red-700"
      }}
      content={content}
    />
  )
}
  
