import GridPagination from "@/components/GridPagination"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Pagination() {
  const content = {
    description: (
      <div className="space-y-3 text-left">
        <h2 className="text-xl font-bold text-gray-900">Pagination with Editing and Aggregates</h2>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          Integrates client-side pagination with CRUD operations and data aggregation. 10 records per page with inline editing, field validation, toolbar actions, and footer sum aggregates.
        </p>
        
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Functionality</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs">
              <li>Pagination with 10 records per page</li>
              <li>Inline editing with validation</li>
              <li>CRUD toolbar (Add, Edit, Delete)</li>
              <li>Footer sum aggregates</li>
              <li>Date picker editor</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">Validation</h3>
            <p className="text-gray-700 text-xs">
              Type enforcement, range constraints, primary key uniqueness, minimum length requirements, date picker for temporal fields.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-gray-900 mb-2">Implementation Steps</h3>
        
        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 1: Configure Grid with Paging</h4>
          <pre className="bg-gray-900 text-gray-100 p-2 rounded text-xs overflow-auto text-left font-mono leading-tight">
{`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/grid-pagination.css';

const [pageSettings] = useState({ enabled: true });
const [data] = useState(employeeTaskPerformanceData);
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} pageSettings={pageSettings} />)`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-orange-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-xs">Step 2: Advanced Page Configuration</h4>
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
