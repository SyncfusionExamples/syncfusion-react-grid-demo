import Grid from "@/components/Grid"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Installation() {
  const content = {
    description: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Basic Grid Display</h3>
          <p className="text-base text-gray-600 leading-relaxed font-medium">Render tabular data with default features</p>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed border-l-4 border-blue-500 pl-4 py-3 bg-blue-50 rounded-r-lg">
          The basic grid component displays tabular data with a clean, professional layout. Perfect for initial setup and understanding Syncfusion Grid fundamentals. This example shows how to quickly render data with minimal configuration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📋</span>
              <h4 className="font-semibold text-blue-900 text-base">Features Enabled</h4>
            </div>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> <span>Tabular data rendering</span></li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> <span>Column-based layout</span></li>
              <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> <span>Default selection (DOM)</span></li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">⚙️</span>
              <h4 className="font-semibold text-indigo-900 text-base">Use Case</h4>
            </div>
            <p className="text-indigo-800 text-sm leading-relaxed">
              Start here to understand Grid basics. Build a foundation before exploring advanced features like pagination, editing, and filtering.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Installation Steps</h3>
        
        <div className="bg-white rounded p-2 border-l-4 border-green-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">📥 Install Grid Package</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`npm install @syncfusion/react-grid`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-purple-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">🎨 Import Grid Styles</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css'; // Spinner
@import '@syncfusion/react-grid/styles/material.css';
`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">📝 Create Your First Grid</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/data';

const [columns] = useState([
    { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right' },
    { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left' },
    { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left' },
    { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right' },
    { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right' },
    { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right' },
    { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
]);
const [data] = useState(employeeTaskPerformanceData.slice(0, 5));
return (
    <div style={{ height: '100%', width: '100%' }}>
        <Grid dataSource={data} columns={columns} />
    </div>
)`}
          </pre>
        </div>
      </div>
    ),
    sample: (
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 overflow-hidden w-full">
          <Grid />
        </div>
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "Grid.tsx",
              language: "typescript",
              description: "Basic Grid component setup with sample data",
              code: `import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/data';
import { useState } from "react";
import '../app/styles/grid.css';

export default function Grid1() {
    const [columns] = useState([
        { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right' },
        { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left' },
        { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left' },
        { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right' },
        { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right' },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right' },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
    ]);
    const [data] = useState(employeeTaskPerformanceData.slice(0, 5));
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Grid dataSource={data} columns={columns} />
        </div>
    )
}`
            },
            {
              filename: "grid.css",
              language: "css",
              description: "Grid styling for layout",
              code: `@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css';
@import '@syncfusion/react-grid/styles/material.css';
`
            },
            {
              filename: "data.ts",
              language: "ts",
              description: "Grid Model Data",
              code: `export interface EmployeeTaskPerformance {
  taskId: number;
  employeeName: string;
  department: "Engineering" | "Design" | "QA" | string;
  taskName: string;
  priority: "High" | "Medium" | "Low";
  status: "In Progress" | "Completed" | "At Risk" | "Delayed";
  taskStartDate: Date;
  taskEndDate: Date;
  completionPercentage: number; // 0–100
  performanceScore: number;     // e.g. 1–5 scale
  hoursWorked: number;
  estimatedHours: number;
  imgId?: number; // Optional field for employee image ID
}

export const employeeTaskPerformanceData: EmployeeTaskPerformance[] = [
  {
    taskId: 5001,
    employeeName: "David Miller",
    department: "Engineering",
    taskName: "Cloud Deployment",
    priority: "High",
    status: "In Progress",
    taskStartDate: new Date(2026, 0, 1),
    taskEndDate: new Date(2026, 1, 16),
    completionPercentage: 40,
    performanceScore: 3.0,
    hoursWorked: 24,
    estimatedHours: 60,
    imgId: 1
  },
  {
    taskId: 5002,
    employeeName: "Sophia Johnson",
    department: "Design",
    taskName: "API Integration",
    priority: "Medium",
    status: "Completed",
    taskStartDate: new Date(2026, 1, 2),
    taskEndDate: new Date(2026, 2, 17),
    completionPercentage: 50,
    performanceScore: 3.4,
    hoursWorked: 35,
    estimatedHours: 70,
    imgId: 2
  },
  {
    taskId: 5003,
    employeeName: "Michael Brown",
    department: "QA",
    taskName: "UI Revamp",
    priority: "Low",
    status: "At Risk",
    taskStartDate: new Date(2026, 2, 3),
    taskEndDate: new Date(2026, 3, 18),
    completionPercentage: 60,
    performanceScore: 3.8,
    hoursWorked: 48,
    estimatedHours: 80,
    imgId: 3
  },
  {
    taskId: 5004,
    employeeName: "Emma Davis",
    department: "Engineering",
    taskName: "Performance Optimization",
    priority: "High",
    status: "Delayed",
    taskStartDate: new Date(2026, 3, 4),
    taskEndDate: new Date(2026, 4, 19),
    completionPercentage: 70,
    performanceScore: 4.2,
    hoursWorked: 63,
    estimatedHours: 90,
    imgId: 4
  },
  {
    taskId: 5005,
    employeeName: "Daniel Wilson",
    department: "Design",
    taskName: "Automation Setup",
    priority: "Medium",
    status: "In Progress",
    taskStartDate: new Date(2026, 4, 5),
    taskEndDate: new Date(2026, 5, 20),
    completionPercentage: 80,
    performanceScore: 4.6,
    hoursWorked: 80,
    estimatedHours: 100,
    imgId: 5
  },
  {
    taskId: 5006,
    employeeName: "Olivia Martinez",
    department: "QA",
    taskName: "Regression Testing",
    priority: "Low",
    status: "Completed",
    taskStartDate: new Date(2026, 5, 6),
    taskEndDate: new Date(2026, 6, 21),
    completionPercentage: 90,
    performanceScore: 3.0,
    hoursWorked: 54,
    estimatedHours: 60,
    imgId: 6
  },
  {
    taskId: 5007,
    employeeName: "James Anderson",
    department: "Engineering",
    taskName: "Deployment Automation",
    priority: "High",
    status: "At Risk",
    taskStartDate: new Date(2026, 0, 7),
    taskEndDate: new Date(2026, 1, 22),
    completionPercentage: 40,
    performanceScore: 3.4,
    hoursWorked: 28,
    estimatedHours: 70,
    imgId: 7
  },
  {
    taskId: 5008,
    employeeName: "Isabella Thomas",
    department: "Design",
    taskName: "Service Refactoring",
    priority: "Medium",
    status: "Delayed",
    taskStartDate: new Date(2026, 1, 8),
    taskEndDate: new Date(2026, 2, 23),
    completionPercentage: 50,
    performanceScore: 3.8,
    hoursWorked: 40,
    estimatedHours: 80,
    imgId: 8
  },
  {
    taskId: 5009,
    employeeName: "William Taylor",
    department: "QA",
    taskName: "Security Patch",
    priority: "Low",
    status: "In Progress",
    taskStartDate: new Date(2026, 2, 9),
    taskEndDate: new Date(2026, 3, 24),
    completionPercentage: 60,
    performanceScore: 4.2,
    hoursWorked: 54,
    estimatedHours: 90,
    imgId: 9
  },
  {
    taskId: 5010,
    employeeName: "Ava Hernandez",
    department: "Engineering",
    taskName: "Monitoring Setup",
    priority: "High",
    status: "Completed",
    taskStartDate: new Date(2026, 3, 10),
    taskEndDate: new Date(2026, 4, 25),
    completionPercentage: 70,
    performanceScore: 4.6,
    hoursWorked: 70,
    estimatedHours: 100,
    imgId: 10
  }
];
`
            }
          ]}
        />
      </div>
    ),
  }

  return (
    <SectionTabLayout
      title="Quick Setup & Installation"
      subtitle="Get started with Syncfusion React Grid"
      badge={{
        text: "Getting Started",
        className: "bg-green-100 text-green-700"
      }}
      content={content}
    />
  )
}
