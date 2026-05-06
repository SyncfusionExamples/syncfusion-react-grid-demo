import GridFeature from "@/components/GridFeature"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function VisualTemplate() {
  const content = {
    description: (
      <div className="space-y-3 text-left">
        <h2 className="text-xl font-bold text-gray-900">Advanced Grid Features</h2>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          Comprehensive data management with multi-column sorting, checkbox filtering, inline editing, custom templates with avatars, field validation, and footer aggregates.
        </p>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
              <li>Multi-column sorting</li>
              <li>Checkbox filtering</li>
              <li>Inline editing with validation</li>
              <li>CRUD toolbar</li>
              <li>Avatar templates</li>
              <li>Footer aggregates</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Operations</h3>
            <p className="text-gray-700 text-xs">
              Multi-criteria filtering for record discovery. Inline editing with type and range validation. Custom templates for complex data. Toolbar actions for CRUD operations. Footer totals for aggregated data.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h3>
        
        <div className="bg-white rounded p-2 border-l-4 border-blue-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 1: Import Core Features Dependency Styles</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-buttons/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-calendars/styles/material.css'; /* DatePicker */
@import '@syncfusion/react-dropdowns/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-inputs/styles/material.css'; /* Editing inputs - TextBox, NumericTextBox, DatePicker, etc., */
@import '@syncfusion/react-navigations/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-popups/styles/material.css'; /* Spinner, DatePicker(Calendar) */
@import '@syncfusion/react-lists/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-grid/styles/material.css';`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-blue-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 2: Enable Features</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { employeeTaskPerformanceData, type EmployeeTaskPerformance } from "../app/models/data1";
import { type ColumnProps, type EditSettings, EditType, type FilterSettings, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-feature.css';

const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
const taskIdRules = { required: true, number: true };
const stringValidationRules = { required: true, minLength: 4 };
const numberRules = { required: true, min: 10, max: 500 };
const [toolbarSettings] = useState<string[]>(['Edit', 'Delete', 'Update', 'Cancel']);
const [columns] = useState<ColumnProps[]>([
    { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
    { field: 'imgId', headerText: "Employee Image", width: 150, allowEdit: false, allowFilter: false, allowSort: false },
    { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
    { field: "taskName", headerText: "Task Name", width: 170, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
    { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
    { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
    { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', validationRules: numberRules },
    { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
]);
const [data] = useState(employeeTaskPerformanceData);
const [sortSettings] = useState({ enabled: true });
const [aggregateColumns] = useState([{
    columns: [
        { type: 'Sum', field: 'estimatedHours' },
        { type: 'Sum', field: 'hoursWorked' }
    ]
  }
]);
const [filterSettings] = useState<FilterSettings>({ enabled: true, type: 'CheckBox' });
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={600} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} />)`}
          </pre>
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <GridFeature />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridFeature.tsx",
              language: "typescript",
              code: `import { employeeTaskPerformanceData, type EmployeeTaskPerformance } from "../app/models/data1";
import { type ColumnProps, type ColumnTemplateProps, type EditSettings, EditType, type FilterSettings, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-feature.css';

export default function GridFeature() {
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
        const taskIdRules = { required: true, number: true };
        const stringValidationRules = { required: true, minLength: 4 };
        const numberRules = { required: true, min: 10, max: 500 };
        const [toolbarSettings] = useState<string[]>(['Edit', 'Delete', 'Update', 'Cancel']);
        const [columns] = useState<ColumnProps[]>([
            { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
            {
                field: 'imgId', template: (data?: ColumnTemplateProps) => {
                    return <div style={{ display: 'inline-flex', gap: '5px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                        <img src={https://react.syncfusion.com/react-ui/images/grid/avatar/avatar-{(data?.data as EmployeeTaskPerformance).imgId}.jpg} alt="avatar" className="w-6 h-6 rounded-full" />
                    </div>;
                },
                headerText: "Employee Image", width: 150, allowEdit: false, allowFilter: false, allowSort: false
            },
            { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
            { field: "taskName", headerText: "Task Name", width: 170, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
            { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
            { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
            { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', validationRules: numberRules },
            { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
        ]);
        const [data] = useState(employeeTaskPerformanceData);
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
        const [filterSettings] = useState<FilterSettings>({ enabled: true, type: 'CheckBox' });
        return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={600} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} />)
}`
            },
            {
              filename: "grid-feature.css",
              language: "css",
              code: `@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-buttons/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-calendars/styles/material.css'; /* DatePicker */
@import '@syncfusion/react-dropdowns/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-inputs/styles/material.css'; /* Editing inputs - TextBox, NumericTextBox, DatePicker, etc., */
@import '@syncfusion/react-navigations/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-popups/styles/material.css'; /* Spinner, DatePicker(Calendar) */
@import '@syncfusion/react-lists/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-grid/styles/material.css';`
            },
            {
              filename: "data1.ts",
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
];`
            }
          ]}
        />
      </div>
    ),
  }

  return (
    <SectionTabLayout
      title="Core Features"
      subtitle="Sorting, filtering, editing & selection"
      badge={{
        text: "Features",
        className: "bg-purple-100 text-purple-700"
      }}
      content={content}
    />
  )
}
