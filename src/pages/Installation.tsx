import Grid from "@/components/Grid"
import gridCode from '@/components/Grid.tsx?raw';
import gridCss from '@/app/styles/grid.css?raw';
import gridData from '@/app/models/employee-task-data.ts?raw';
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
            in a tabular format (rows and columns). It is widely used in applications where users need to view, sort, filter 
            and analyze data efficiently
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Key Characteristics:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Tabular Display:</span> Organizes data into rows and columns for easy readability.</li>
              <li><span className="font-semibold text-gray-900">High Performance:</span> Handles large datasets with optimized rendering techniques.</li>
              <li><span className="font-semibold text-gray-900">Interactive Features:</span> Supports sorting and filtering.</li>
              <li><span className="font-semibold text-gray-900">Data Binding:</span> Connects to arrays, APIs, or databases.</li>
              <li><span className="font-semibold text-gray-900">Customizable UI:</span> Allows styling and templating of grid elements.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Functional Overview</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid acts as the foundational component for structured data presentation. It enables consistent and efficient data rendering and serves as a prerequisite for implementing advanced features such as filtering and sorting.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Using the DataSource</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              By default, the Data Grid supports data binding using <span className="font-semibold text-gray-900">JSON‑formatted data</span>.
              This demo illustrates <span className="font-semibold text-gray-900">client‑side data binding</span> by assigning a JSON array as the data source.
            </p>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li>The grid is populated using a flat array from a local data model.</li>
              <li>The data source is defined using <code>employeeTaskPerformanceData</code>.</li>
              <li>Sample data is available in the <code>employee-task-data.ts</code> file (see the <span className="font-semibold text-gray-900">Code</span> section).</li>
            </ul>
            <br/>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              This approach loads the data directly into the Data Grid component,
              enabling immediate rendering and smooth user interaction.
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
              code: gridCode
            },
            {
              filename: "grid.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "employee-task-data.ts",
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
