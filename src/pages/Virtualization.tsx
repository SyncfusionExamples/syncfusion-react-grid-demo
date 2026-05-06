import GridPerformance from "@/components/GridPerformance"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Virtualization() {
  const content = {
    description: (
      <div className="space-y-3 text-left">
        <h2 className="text-xl font-bold text-gray-900">Virtual Scrolling for Large Datasets</h2>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          DOM virtualization for efficient rendering of 10,000+ records. Renders only visible rows with buffer rows for seamless scrolling. Multi-column sorting with consistent performance.
        </p>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Architecture</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
              <li>Row-level DOM virtualization</li>
              <li>Viewport-based rendering</li>
              <li>Multi-column sorting support</li>
              <li>Custom column templates</li>
              <li>Debounced scroll handling</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Performance</h3>
            <p className="text-gray-700 text-xs">
              Constant memory usage independent of dataset size. Only viewport rows in DOM. Smooth scrolling at high velocities without degradation.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h3>
        
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
  
