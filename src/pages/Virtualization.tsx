import GridPerformance from "@/components/GridPerformance"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Virtualization() {
  const content = {
    description: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Virtual Scrolling for Large Datasets</h3>
          <p className="text-base text-gray-600 leading-relaxed font-medium">Efficiently display 10,000+ employee records</p>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed border-l-4 border-red-500 pl-4 py-3 bg-red-50 rounded-r-lg">
          Demonstrates DOM virtualization rendering only visible rows. Users can sort employee data by any column while maintaining smooth performance. Perfect for displaying large datasets without memory issues or lag when scrolling.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🎯</span>
              <h4 className="font-semibold text-red-900 text-base">Features Enabled</h4>
            </div>
            <ul className="space-y-2 text-red-800 text-sm">
              <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> <span>Row virtualization</span></li>
              <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> <span>Sorting support</span></li>
              <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> <span>Custom templates</span></li>
              <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> <span>10,000+ records</span></li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚡</span>
              <h4 className="font-semibold text-rose-900 text-base">Performance Metrics</h4>
            </div>
            <ul className="space-y-2 text-rose-800 text-sm">
              <li className="flex items-center gap-2"><span className="text-pink-700 font-bold">→</span> <span>Only viewport rows rendered</span></li>
              <li className="flex items-center gap-2"><span className="text-pink-700 font-bold">→</span> <span>Smooth scrolling always</span></li>
              <li className="flex items-center gap-2"><span className="text-pink-700 font-bold">→</span> <span>Minimal memory footprint</span></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h3>
        
        <div className="bg-white rounded p-2 border-l-4 border-red-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">Step 1: Configure Virtual Scrolling</h4>
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
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">Step 2: Enable Column Virtualization</h4>
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
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 overflow-hidden w-full">
          <GridPerformance />
        </div>
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridPerformance.tsx",
              language: "typescript",
              description: "Grid with virtual scrolling for large datasets",
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
  
