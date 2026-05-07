import EmployeeGrid from "@/components/EmployeeGrid"
import gridCode from '@/components/EmployeeGrid.tsx?raw';
import gridCss from '@/app/styles/EmployeeGrid.css?raw';
import gridData from '@/app/models/employeeTasks.ts?raw';
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"

export default function Installation() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-lg font-medium text-on-surface mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0px", lineHeight: "1.4" }}>Data Grid</h2>
          
          <p className="text-sm text-on-surface leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
            A <span className="font-semibold">Data Grid</span> is a powerful UI component used to display and manage large sets of structured data 
            in a tabular format (rows and columns). It is widely used in applications where users need to view, sort, filter 
            and analyze data efficiently
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Key Characteristics:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-medium text-on-surface">Tabular Display:</span> Organizes data into rows and columns for easy readability.</li>
              <li><span className="font-medium text-on-surface">High Performance:</span> Handles large datasets with optimized rendering techniques.</li>
              <li><span className="font-medium text-on-surface">Interactive Features:</span> Supports sorting and filtering.</li>
              <li><span className="font-medium text-on-surface">Data Binding:</span> Connects to arrays, APIs, or databases.</li>
              <li><span className="font-medium text-on-surface">Customizable UI:</span> Allows styling and templating of grid elements.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Functional Overview</h2>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid acts as the foundational component for structured data presentation. It enables consistent and efficient data rendering and serves as a prerequisite for implementing advanced features such as filtering and sorting.
            </p>
          </div>

          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Using the DataSource</h2>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              By default, the Data Grid supports data binding using <span className="font-medium text-on-surface">JSON‑formatted data</span>.
              This demo illustrates <span className="font-medium text-on-surface">client‑side data binding</span> by assigning a JSON array as the data source.
            </p>
            <br/>
            <ul className="list-disc list-inside space-y-2 text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6" }}>
              <li>The grid is populated using a flat array from a local data model.</li>
              <li>The data source is defined using <code>employeeTasks</code>.</li>
              <li>Sample data is available in the <code>employeeTasks.ts</code> file (see the <span className="font-medium text-on-surface">Code</span> section).</li>
            </ul>
            <br/>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              This approach loads the data directly into the Data Grid component,
              enabling immediate rendering and smooth user interaction.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-3">
        <h2 className="text-base font-medium text-on-surface mb-4">Installation Steps</h2>
        
        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Install Grid Package</h4>
          <CodeSnippet code={`npm install @syncfusion/react-grid`} language="bash" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Import Grid Styles</h4>
          <CodeSnippet code={`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css'; // Spinner
@import '@syncfusion/react-grid/styles/material.css';
`} language="css" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Create Your First Grid</h4>
          <br/>
          <CodeSnippet code={`import { Grid } from "@syncfusion/react-grid";
import { employeeTasks } from '@/app/models/employeeTasks';

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

const [data] = useState(employeeTasks.slice(0, 5));
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
        <EmployeeGrid />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "EmployeeGrid.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "EmployeeGrid.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "employeeTasks.ts",
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
