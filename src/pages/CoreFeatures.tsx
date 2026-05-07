import CoreFeaturesGrid from "@/components/CoreFeaturesGrid"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"
import gridCode from '@/components/CoreFeaturesGrid.tsx?raw';
import gridCss from '@/app/styles/core-features-grid.css?raw';
import gridData from '@/app/models/employeePerformanceData.ts?raw';

export default function VisualTemplate() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-lg font-medium text-on-surface mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0px", lineHeight: "1.4" }}>Advanced Grid Features</h2>
          
          <p className="text-sm text-on-surface leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
            Comprehensive data management with multi-column sorting, checkbox filtering, inline editing, custom templates with avatars, field validation, and footer aggregates.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Key Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6" }}>
              <li><span className="font-medium text-on-surface">Multi-column Sorting:</span> Sort by multiple columns</li>
              <li><span className="font-medium text-on-surface">Checkbox Filtering:</span> Filter records with checkboxes</li>
              <li><span className="font-medium text-on-surface">Inline Editing:</span> Edit data directly with validation</li>
              <li><span className="font-medium text-on-surface">CRUD Toolbar:</span> Complete data operations</li>
              <li><span className="font-medium text-on-surface">Custom Templates:</span> Avatar and complex data support</li>
              <li><span className="font-medium text-on-surface">Footer Aggregates:</span> Totals and calculations</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Supported Operations</h2>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid supports multi‑criteria filtering for efficient record discovery, inline editing with type and range validation, and custom templates for complex data visualization. Toolbar actions enable full CRUD functionality, while footer aggregates provide summary calculations for enhanced data insights.
            </p>
          </div>

          <div>
            <h2
              className="font-medium text-on-surface text-sm mb-3"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.25px",
                fontWeight: "500",
              }}
            >
              Using the DataSource
            </h2>

            <p
              className="text-on-surface text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.25px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              By default, the Data Grid supports data binding using{" "}
              <span className="font-medium text-on-surface">
                JSON‑formatted data
              </span>
              . This example demonstrates{" "}
              <span className="font-medium text-on-surface">
                client‑side data binding
              </span>
              , where the data is loaded on the client to enable built‑in features such as
              sorting, filtering, editing, and aggregation.
            </p>

            <br />

            <ul
              className="list-disc list-inside space-y-2 text-on-surface text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.25px",
                lineHeight: "1.6",
              }}
            >
              <li>
                The grid is populated using a flat array from a local data model.
              </li>
              <li>
                The data source is defined using{" "}
                <code>employeeTaskPerformanceData</code> in the{" "}
                <code>employee-performance-data.ts</code> file (see the{" "}
                <span className="font-medium text-on-surface">Code</span> section).
              </li>
              <li>
                Data is stored entirely on the client and maintained in memory.
              </li>
              <li>
                The JSON array is directly bound to the Data Grid without any server
                interaction.
              </li>
            </ul>

            <br />

            <p
              className="text-gray-700 text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              This approach is suitable for client‑side scenarios where the dataset is
              readily available, allowing the Data Grid to efficiently use its built‑in
              capabilities.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-3">
        <h2 className="text-base font-medium text-on-surface mb-4">Implementation Steps</h2>
        
        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 1: Import Core Features Dependency Styles</h4>
          <br/>
          <CodeSnippet code={`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-buttons/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-calendars/styles/material.css'; /* DatePicker */
@import '@syncfusion/react-dropdowns/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-inputs/styles/material.css'; /* Editing inputs - TextBox, NumericTextBox, DatePicker, etc., */
@import '@syncfusion/react-navigations/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-popups/styles/material.css'; /* Spinner, DatePicker(Calendar) */
@import '@syncfusion/react-lists/styles/material.css'; /* Dropdownlist */
@import '@syncfusion/react-grid/styles/material.css';`} language="css" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 2: Enable Features</h4>
          <p className="text-sm text-on-surface-variant mt-1 text-left">To enable basic sorting feature, set "sortSettings.enabled" as true. To enable basic filtering, set "filterSettings.enabled" as true.</p>
          <br/>
          <CodeSnippet code={`import { employeeTaskPerformanceData, type EmployeeTaskPerformance } from "../app/models/data1";
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
return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={600} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} />)`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <CoreFeaturesGrid />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "CoreFeaturesGrid.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "core-features-grid.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "employeePerformanceData.ts",
              language: "ts",
              code: gridData
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
