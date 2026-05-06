import GridPagination from "@/components/GridPagination"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Pagination() {
  const content = {
    description: (
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Pagination with Editing & Aggregates</h3>
          <p className="text-base text-gray-600 leading-relaxed font-medium">Manage data pages with CRUD operations and calculations</p>
        </div>
        
        <p className="text-gray-700 text-base leading-relaxed border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
          Display data in pages with inline editing capabilities. Users can add, edit, and delete records with built-in validation. Includes toolbar actions and footer aggregates showing total hours calculations across the dataset.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">✏️</span>
              <h4 className="font-semibold text-orange-900 text-base">Features Enabled</h4>
            </div>
            <ul className="space-y-2 text-orange-800 text-sm">
              <li className="flex items-center gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Paging (10 rows per page)</span></li>
              <li className="flex items-center gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Inline editing & validation</span></li>
              <li className="flex items-center gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Add/Edit/Delete toolbar</span></li>
              <li className="flex items-center gap-2"><span className="text-orange-600 font-bold">✓</span> <span>Sum aggregates in footer</span></li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔧</span>
              <h4 className="font-semibold text-amber-900 text-base">Interactive Features</h4>
            </div>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li className="flex items-center gap-2"><span className="text-yellow-700 font-bold">→</span> <span>Date picker for fields</span></li>
              <li className="flex items-center gap-2"><span className="text-yellow-700 font-bold">→</span> <span>Field validation rules</span></li>
              <li className="flex items-center gap-2"><span className="text-yellow-700 font-bold">→</span> <span>Primary key enforcement</span></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h3>
        
        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">Step 1: Configure Grid with Paging</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/grid-pagination.css';

const [pageSettings] = useState({ enabled: true });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} pageSettings={pageSettings} />)`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="font-semibold text-gray-900 mb-1 text-xs">Step 2: Advanced Page Configuration</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/grid-pagination.css';

const [pageSettings] = useState({ enabled: true, pageSize: 10, currentPage: 1, pageCount: 4 });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} pageSettings={pageSettings} />)`}
          </pre>
        </div>
      </div>
    ),
    sample: (
      <div className="h-full w-full flex flex-col">
        <div className="flex-1 overflow-hidden w-full">
          <GridPagination />
        </div>
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridPagination.tsx",
              language: "typescript",
              description: "Grid with pagination enabled and toolbar support",
              code: `import { type EmployeeTaskPerformance, employeeTaskPerformanceData } from "@/app/models/data";
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
