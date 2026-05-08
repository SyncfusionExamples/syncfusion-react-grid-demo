import WorkDetailsGrid from "@/components/WorkDetailsGrid"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"
import gridCode from '@/components/WorkDetailsGrid.tsx?raw';
import gridCss from '@/app/styles/WorkDetailsGrid.css?raw';
import gridData from '@/app/models/workDetails.ts?raw';

export default function Paging() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-lg font-medium text-on-surface mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0px", lineHeight: "1.4" }}>Pagination with Editing and Aggregates</h2>
          
          <p className="text-sm text-on-surface leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
            This Data Grid configuration combines client‑side pagination with full CRUD functionality and data aggregation. By default, the grid displays 12 records per page, and the page size can be customized based on application requirements. In this demo, the grid is configured to display 30 records per page. It supports inline editing with built‑in validation, provides toolbar actions for data operations, and includes footer‑level aggregate calculations to deliver meaningful summary insights.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Key Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6" }}>
              <li><span className="font-medium text-on-surface">Pagination:</span> 30 records per page with navigation controls</li>
              <li><span className="font-medium text-on-surface">Inline Editing:</span> Edit data directly in grid cells with validation</li>
              <li><span className="font-medium text-on-surface">CRUD Operations:</span> Add, Edit, Delete toolbar actions</li>
              <li><span className="font-medium text-on-surface">Data Aggregation:</span> Footer sum aggregates and calculations</li>
              <li><span className="font-medium text-on-surface">Date Picker:</span> Temporal field editor support</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Data Validation</h2>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid enforces comprehensive validation rules, including data type enforcement, range constraints, primary key uniqueness, and minimum length requirements. Date fields are validated using date picker editors to ensure accurate and consistent temporal data entry.
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
              <span className="font-medium text-on-surface">JSON‑formatted data</span>.
              This demo demonstrates{" "}
              <span className="font-medium text-on-surface">
                client‑side data binding
              </span>{" "}
              by assigning a JSON array as the data source for pagination scenarios.
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
              <li>The grid is populated using a flat array from a local data model.</li>
              <li>
                The data source is defined using{" "}
                <code>workDetails</code>.
              </li>
              <li>
                Sample data is available in the{" "}
                <code>workDetails.ts</code> file (see the{" "}
                <span className="font-medium text-on-surface">Code</span> section).
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
              This approach loads the data directly into the Data Grid component,
              enabling efficient client‑side pagination, aggregate calculations
              from the data source, and smooth CRUD updates with responsive user
              interaction.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-3">
        <h2 className="text-base font-medium text-on-surface mb-4">Implementation Steps</h2>
        
        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 1: Import Pager dependency styles</h4>
          <br/>
          <CodeSnippet code={`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-buttons/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-calendars/styles/material.css'; /* DatePicker */
@import '@syncfusion/react-inputs/styles/material.css'; /* Editing inputs - TextBox, NumericTextBox, DatePicker, etc., */
@import '@syncfusion/react-navigations/styles/material.css'; /* Toolbar */
@import '@syncfusion/react-popups/styles/material.css'; /* Spinner, DatePicker(Calendar) */
@import '@syncfusion/react-pager/styles/material.css'; /* Pager */
@import '@syncfusion/react-grid/styles/material.css';`} language="css" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 2: Configure Grid with Paging</h4>
          <p className="text-sm text-on-surface-variant mt-1 text-left">To enable basic paging feature, set "pageSettings.enabled" as true.</p>
          <br/>
          <CodeSnippet code={`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/WorkDetailsGrid.css';
import { type IWorkDetails, workDetails } from "@/app/models/workDetails";

// pageSettings: enables pagination
const [pageSettings] = useState({ enabled: true });
const [data] = useState(workDetails);
return (<Grid<IWorkDetails> dataSource={data} columns={columns} pageSettings={pageSettings} />)`} language="typescript" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 3: Advanced Page Configuration</h4>
          <br/>
          <CodeSnippet code={`import { Grid } from '@syncfusion/react-grid';
import '../app/styles/WorkDetailsGrid.css';
import { type IWorkDetails, workDetails } from "@/app/models/workDetails";

// pageSettings: enables pagination with 10 records per page
const [pageSettings] = useState({ enabled: true, pageSize: 10, currentPage: 1, pageCount: 4 });
const [data] = useState(workDetails);
return (<Grid<IWorkDetails> dataSource={data} columns={columns} pageSettings={pageSettings} />)`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <WorkDetailsGrid />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "WorkDetailsGrid.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "WorkDetailsGrid.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "workDetails.ts",
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
