import GridPagination from "@/components/GridPagination"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"

export default function Pagination() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Pagination with Editing and Aggregates</h2>
          
          <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            This Data Grid configuration combines client‑side pagination with full CRUD functionality and data aggregation. By default, the grid displays 12 records per page, and the page size can be customized based on application requirements. In this demo, the grid is configured to display 30 records per page. It supports inline editing with built‑in validation, provides toolbar actions for data operations, and includes footer‑level aggregate calculations to deliver meaningful summary insights.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Key Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Pagination:</span> 30 records per page with navigation controls</li>
              <li><span className="font-semibold text-gray-900">Inline Editing:</span> Edit data directly in grid cells with validation</li>
              <li><span className="font-semibold text-gray-900">CRUD Operations:</span> Add, Edit, Delete toolbar actions</li>
              <li><span className="font-semibold text-gray-900">Data Aggregation:</span> Footer sum aggregates and calculations</li>
              <li><span className="font-semibold text-gray-900">Date Picker:</span> Temporal field editor support</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Data Validation</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid enforces comprehensive validation rules, including data type enforcement, range constraints, primary key uniqueness, and minimum length requirements. Date fields are validated using date picker editors to ensure accurate and consistent temporal data entry.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-base font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 1: Configure Grid with Paging</h4>
          <p className="text-sm text-gray-600 mt-1 text-left">To enable basic paging feature, set "pageSettings.enabled" as true.</p>
          <br/>
          <CodeSnippet code={`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/grid-pagination.css';

// pageSettings: enables pagination
const [pageSettings] = useState({ enabled: true });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} pageSettings={pageSettings} />)`} language="typescript" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 2: Advanced Page Configuration</h4>
          <br/>
          <CodeSnippet code={`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/grid-pagination.css';

// pageSettings: enables pagination with 10 records per page
const [pageSettings] = useState({ enabled: true, pageSize: 10, currentPage: 1, pageCount: 4 });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} pageSettings={pageSettings} />)`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <GridPagination />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridPagination.tsx",
              language: "typescript",
              code: `import { type EmployeeTaskPerformance, employeeTaskPerformanceData } from "@/app/models/employee-task-data";
import { type ColumnProps, type EditSettings, EditType, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-pagination.css';

const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
const taskIdRules = { required: true, number: true };
const stringValidationRules = { required: true, minLength: 4 };
const numberRules = { required: true, min: 10, max: 500 };
const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
const [columns] = useState<ColumnProps[]>([
    { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
    { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules },
    { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left', validationRules: stringValidationRules },
    { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
    { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
    { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', validationRules: numberRules },
    { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
]);
const [sortSettings] = useState({ enabled: true });
const [aggregateColumns] = useState([{
    columns: [
        {
            type: 'Sum', field: 'estimatedHours', footerTemplate: (props?: object) => {
                return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span>
            }
        },
        {
            type: 'Sum', field: 'hoursWorked', footerTemplate: (props?: object) => {
                return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span>
            }
        }
    ]
}
]);
const [pageSettings] = useState({ enabled: true, pageSize: 10 });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} aggregates={aggregateColumns} pageSettings={pageSettings} />)`
            },
            {
              filename: "employee-task-data.ts",
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
      title="Pagination"
      subtitle="Manage datasets with paging"
      badge={{
        text: "Performance",
        className: "bg-orange-100 text-orange-700"
      }}
      content={content}
    />
  )
}
