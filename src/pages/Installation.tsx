import Grid from "@/components/Grid"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"

export default function Installation() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Data Grid</h2>
          
          <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            A <span className="font-semibold">Data Grid</span> is a powerful UI component used to display and manage large sets of structured data 
            in a tabular format (rows and columns). It is widely used in applications where users need to view, sort, filter, 
            edit, and analyze data efficiently
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Key Characteristics:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Tabular Display:</span> Organizes data into rows and columns for easy readability.</li>
              <li><span className="font-semibold text-gray-900">High Performance:</span> Handles large datasets with optimized rendering techniques.</li>
              <li><span className="font-semibold text-gray-900">Interactive Features:</span> Supports sorting, filtering, and editing.</li>
              <li><span className="font-semibold text-gray-900">Data Binding:</span> Connects to arrays, APIs, or databases.</li>
              <li><span className="font-semibold text-gray-900">Customizable UI:</span> Allows styling and templating of grid elements.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Functional Overview</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid acts as the foundational component for structured data presentation. It enables consistent and efficient data rendering and serves as a prerequisite for implementing advanced features such as pagination, editing workflows, filtering, sorting, and aggregation.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-base font-bold text-gray-900 mb-2">Installation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-green-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Install Grid Package</h4>
          <br/>
          <CodeSnippet code={`npm install @syncfusion/react-grid`} language="bash" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-purple-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Import Grid Styles</h4>
          <br/>
          <CodeSnippet code={`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css'; // Spinner
@import '@syncfusion/react-grid/styles/material.css';
`} language="css" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Create Your First Grid</h4>
          <br/>
          <CodeSnippet code={`import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/data';

// Column definition
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
)`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <Grid />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "Grid.tsx",
              language: "typescript",
              code: `import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/grid-data';
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
              code: `@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css';
@import '@syncfusion/react-grid/styles/material.css';
`
            },
            {
              filename: "grid-data.ts",
              language: "ts",
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
