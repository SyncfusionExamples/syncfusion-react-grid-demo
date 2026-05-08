import PerformanceGrid from "@/components/EmployeeListGrid"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"
import gridCode from '@/components/EmployeeListGrid.tsx?raw';
import gridCss from '@/app/styles/EmployeeListGridIcon.module.css?raw';
import gridData from '@/app/models/employeeListData.ts?raw';

export default function VirtualScrolling() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-lg font-medium text-on-surface mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0px", lineHeight: "1.4" }}>Virtual Scrolling for Large Datasets</h2>
          
          <p className="text-sm text-on-surface leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
            Virtual scrolling enables efficient rendering of large datasets (10,000+ records) through DOM virtualization. Only the rows visible within the viewport, along with a small buffer, are rendered in the DOM, ensuring smooth and seamless scrolling performance. Multi‑column sorting is supported without impacting responsiveness.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Architecture:</h2>
            <ul className="list-disc list-inside space-y-2 text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6" }}>
              <li><span className="font-medium text-on-surface">Row Virtualization:</span> Implements DOM virtualization at the row level to minimize rendering overhead.</li>
              <li><span className="font-medium text-on-surface">Viewport Rendering:</span> Dynamically renders rows based on the visible viewport for optimal performance.</li>
              <li><span className="font-medium text-on-surface">Sorting:</span> Supports sorting across multiple columns with consistent responsiveness.</li>
              <li><span className="font-medium text-on-surface">Templates:</span> Allows flexible column templates for complex and rich data presentation.</li>
              <li><span className="font-medium text-on-surface">Scroll Handling:</span> Uses debounced scroll events to reduce unnecessary reflows and improve scroll efficiency.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-medium text-on-surface text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", fontWeight: "500" }}>Performance Characteristics</h2>
            <p className="text-on-surface text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.25px", lineHeight: "1.6", fontWeight: "400" }}>
              This approach maintains constant memory usage regardless of dataset size by keeping only the visible rows and a small buffer in the DOM, resulting in a minimal DOM footprint. As a result, scrolling remains smooth and responsive, delivering consistent performance even at high scroll velocities without any noticeable degradation.
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
              to support virtual scrolling for large datasets.
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
                The grid is populated using a flat array generated from a local data
                model.
              </li>
              <li>
                The data source contains over <code>10,000+</code> employee records.
              </li>
              <li>
                Virtual scrolling renders only the visible rows along with a small
                buffer for performance optimization.
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
              This approach enables efficient rendering and seamless scrolling for
              large datasets, maintaining consistent performance and a minimal DOM
              footprint within the Data Grid.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-3">
        <h2 className="text-base font-medium text-on-surface mb-4">Implementation Steps</h2>
        
        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 1: Configure Virtual Scrolling</h4>
          <p className="text-sm text-on-surface-variant mt-1 text-left">To enable row virtualization for smooth scrolling with large datasets, set "virtualizationSettings.type" as "VirtualDomType.Row".</p>
          <br/>
          <CodeSnippet code={`import { useState, useCallback } from 'react';
import { Grid, Columns, Column, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type IEmployeeListData, generateEmployeeData } from '@/app/models/emplyeeListData';
import styles from '@/app/styles/EmployeeListGridIcon.module.css';

const [data] = useState(() => generateEmployeeData());
const [gridHeight] = useState(400);
const [gridWidth] = useState(100);
const [virtualizationSettings] = useState({ type: VirtualDomType.Row });

<Grid<IEmployeeListData>
dataSource={data}
width={{gridWidth}%}
virtualizationSettings={virtualizationSettings}
height={gridHeight}/>`} language="typescript" />
        </div>

        <div className="bg-white rounded p-4 border-l-4" style={{ borderLeftColor: '#6750A4', backgroundColor: '#FAFAFA' }}>
          <h4 className="text-left font-medium text-on-surface mb-2 text-sm">Step 2: Enable Column Virtualization</h4>
          <p className="text-sm text-on-surface-variant mt-1 text-left">To enable row virtualization for smooth scrolling with large datasets, set "virtualizationSettings.type" as "VirtualDomType.Column"."</p>
          <br/>
          <CodeSnippet code={`import { useState, useCallback } from 'react';
import { Grid, Columns, Column, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type IEmployeeListData, generateEmployeeData } from '@/app/models/employeeListData';
import styles from '@/app/styles/EmployeeListGridIcon.module.css';

const [data] = useState(() => generateEmployeeData());
const [gridHeight] = useState(400);
const [gridWidth] = useState(100);
const [virtualizationSettings] = useState({ type: VirtualDomType.Column });

<Grid<IEmployeeListData>
dataSource={data}
width={{gridWidth}%}
virtualizationSettings={virtualizationSettings}
height={gridHeight}/>`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <PerformanceGrid />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "EmployeeListGrid.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "EmployeeListGridIcon.module.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "employeeListDataFormat.ts",
              language: "typescript",
              code: `// Sample data source format for demonstration.
// Represents a flat array of employee records with uniform fields.
// The complete dataset is generated in \`employee-data.ts\`.
// Here, 30 records are shown to illustrate the structure and all remaining records follow the same format.
[
    {
        "EmployeeID": "EMP00001",
        "FullName": "Employee 1",
        "Department": "Executive",
        "Position": "CEO",
        "Email": "employee1@example.com",
        "Phone": "555-1234",
        "HireDate": "1/1/2018",
        "Salary": "212345.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "N/A",
        "PerformanceRating": "4.6",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00002",
        "FullName": "Employee 2",
        "Department": "Engineering",
        "Position": "Manager",
        "Email": "employee2@example.com",
        "Phone": "555-2468",
        "HireDate": "4/8/2019",
        "Salary": "190512.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.0",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00003",
        "FullName": "Employee 3",
        "Department": "Sales",
        "Position": "Manager",
        "Email": "employee3@example.com",
        "Phone": "555-3702",
        "HireDate": "7/15/2019",
        "Salary": "182272.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.6",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00004",
        "FullName": "Employee 4",
        "Department": "Marketing",
        "Position": "Manager",
        "Email": "employee4@example.com",
        "Phone": "555-4936",
        "HireDate": "10/22/2019",
        "Salary": "174160.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.5",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00005",
        "FullName": "Employee 5",
        "Department": "Finance",
        "Position": "Manager",
        "Email": "employee5@example.com",
        "Phone": "555-6170",
        "HireDate": "1/2/2019",
        "Salary": "165856.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.3",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00006",
        "FullName": "Employee 6",
        "Department": "HR",
        "Position": "Manager",
        "Email": "employee6@example.com",
        "Phone": "555-7404",
        "HireDate": "4/9/2019",
        "Salary": "157680.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.1",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00007",
        "FullName": "Employee 7",
        "Department": "Operations",
        "Position": "Manager",
        "Email": "employee7@example.com",
        "Phone": "555-8638",
        "HireDate": "7/16/2019",
        "Salary": "199504.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00001",
        "PerformanceRating": "4.7",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00008",
        "FullName": "Employee 8",
        "Department": "Engineering",
        "Position": "Manager",
        "Email": "employee8@example.com",
        "Phone": "555-9872",
        "HireDate": "10/23/2020",
        "Salary": "128470.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00002",
        "PerformanceRating": "4.2",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00009",
        "FullName": "Employee 9",
        "Department": "Sales",
        "Position": "Lead",
        "Email": "employee9@example.com",
        "Phone": "555-1106",
        "HireDate": "1/3/2020",
        "Salary": "96608.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00003",
        "PerformanceRating": "4.0",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00010",
        "FullName": "Employee 10",
        "Department": "Marketing",
        "Position": "Senior Developer",
        "Email": "employee10@example.com",
        "Phone": "555-2340",
        "HireDate": "4/10/2021",
        "Salary": "112040.00",
        "EmploymentType": "Part-time",
        "ReportsTo": "EMP00694",
        "PerformanceRating": "3.7",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00011",
        "FullName": "Employee 11",
        "Department": "Finance",
        "Position": "Developer",
        "Email": "employee11@example.com",
        "Phone": "555-3574",
        "HireDate": "7/17/2021",
        "Salary": "61583.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP04601",
        "PerformanceRating": "2.5",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00012",
        "FullName": "Employee 12",
        "Department": "HR",
        "Position": "Analyst",
        "Email": "employee12@example.com",
        "Phone": "555-4808",
        "HireDate": "10/24/2022",
        "Salary": "86168.00",
        "EmploymentType": "Intern",
        "ReportsTo": "EMP08478",
        "PerformanceRating": "4.1",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00013",
        "FullName": "Employee 13",
        "Department": "Operations",
        "Position": "Coordinator",
        "Email": "employee13@example.com",
        "Phone": "555-6042",
        "HireDate": "1/4/2021",
        "Salary": "69200.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP04537",
        "PerformanceRating": "3.6",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00014",
        "FullName": "Employee 14",
        "Department": "Engineering",
        "Position": "Associate",
        "Email": "employee14@example.com",
        "Phone": "555-7276",
        "HireDate": "4/11/2022",
        "Salary": "50640.00",
        "EmploymentType": "Part-time",
        "ReportsTo": "EMP09494",
        "PerformanceRating": "3.2",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00015",
        "FullName": "Employee 15",
        "Department": "Sales",
        "Position": "Manager",
        "Email": "employee15@example.com",
        "Phone": "555-8510",
        "HireDate": "7/18/2020",
        "Salary": "134245.00",
        "EmploymentType": "Part-time",
        "ReportsTo": "EMP00003",
        "PerformanceRating": "3.6",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00016",
        "FullName": "Employee 16",
        "Department": "Marketing",
        "Position": "Lead",
        "Email": "employee16@example.com",
        "Phone": "555-9744",
        "HireDate": "10/25/2020",
        "Salary": "111056.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00004",
        "PerformanceRating": "4.4",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00017",
        "FullName": "Employee 17",
        "Department": "Finance",
        "Position": "Senior Developer",
        "Email": "employee17@example.com",
        "Phone": "555-0978",
        "HireDate": "1/5/2020",
        "Salary": "99424.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00197",
        "PerformanceRating": "4.2",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00018",
        "FullName": "Employee 18",
        "Department": "HR",
        "Position": "Developer",
        "Email": "employee18@example.com",
        "Phone": "555-2212",
        "HireDate": "4/12/2022",
        "Salary": "67358.00",
        "EmploymentType": "Part-time",
        "ReportsTo": "EMP01416",
        "PerformanceRating": "3.4",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00019",
        "FullName": "Employee 19",
        "Department": "Operations",
        "Position": "Analyst",
        "Email": "employee19@example.com",
        "Phone": "555-3446",
        "HireDate": "7/19/2021",
        "Salary": "70744.00",
        "EmploymentType": "Contract",
        "ReportsTo": "EMP01513",
        "PerformanceRating": "3.0",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00020",
        "FullName": "Employee 20",
        "Department": "Engineering",
        "Position": "Coordinator",
        "Email": "employee20@example.com",
        "Phone": "555-4680",
        "HireDate": "10/26/2022",
        "Salary": "46328.00",
        "EmploymentType": "Intern",
        "ReportsTo": "EMP01094",
        "PerformanceRating": "2.5",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00021",
        "FullName": "Employee 21",
        "Department": "Sales",
        "Position": "Associate",
        "Email": "employee21@example.com",
        "Phone": "555-5914",
        "HireDate": "1/6/2021",
        "Salary": "63280.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP04713",
        "PerformanceRating": "4.1",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00022",
        "FullName": "Employee 22",
        "Department": "Marketing",
        "Position": "Manager",
        "Email": "employee22@example.com",
        "Phone": "555-7148",
        "HireDate": "4/13/2020",
        "Salary": "140020.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00004",
        "PerformanceRating": "4.1",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00023",
        "FullName": "Employee 23",
        "Department": "Finance",
        "Position": "Lead",
        "Email": "employee23@example.com",
        "Phone": "555-8382",
        "HireDate": "7/20/2020",
        "Salary": "125504.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00005",
        "PerformanceRating": "3.8",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00024",
        "FullName": "Employee 24",
        "Department": "HR",
        "Position": "Senior Developer",
        "Email": "employee24@example.com",
        "Phone": "555-9616",
        "HireDate": "10/27/2021",
        "Salary": "87064.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP08052",
        "PerformanceRating": "3.7",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00025",
        "FullName": "Employee 25",
        "Department": "Operations",
        "Position": "Developer",
        "Email": "employee25@example.com",
        "Phone": "555-0850",
        "HireDate": "1/7/2021",
        "Salary": "73133.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP04117",
        "PerformanceRating": "4.3",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00026",
        "FullName": "Employee 26",
        "Department": "Engineering",
        "Position": "Analyst",
        "Email": "employee26@example.com",
        "Phone": "555-2084",
        "HireDate": "4/14/2022",
        "Salary": "55192.00",
        "EmploymentType": "Part-time",
        "ReportsTo": "EMP09074",
        "PerformanceRating": "3.9",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00027",
        "FullName": "Employee 27",
        "Department": "Sales",
        "Position": "Coordinator",
        "Email": "employee27@example.com",
        "Phone": "555-3318",
        "HireDate": "7/21/2021",
        "Salary": "58456.00",
        "EmploymentType": "Contract",
        "ReportsTo": "EMP00309",
        "PerformanceRating": "3.4",
        "Status": "Active"
    },
    {
        "EmployeeID": "EMP00028",
        "FullName": "Employee 28",
        "Department": "Marketing",
        "Position": "Associate",
        "Email": "employee28@example.com",
        "Phone": "555-4552",
        "HireDate": "10/1/2022",
        "Salary": "40920.00",
        "EmploymentType": "Intern",
        "ReportsTo": "EMP01528",
        "PerformanceRating": "3.0",
        "Status": "On Leave"
    },
    {
        "EmployeeID": "EMP00029",
        "FullName": "Employee 29",
        "Department": "Finance",
        "Position": "Manager",
        "Email": "employee29@example.com",
        "Phone": "555-5786",
        "HireDate": "1/8/2020",
        "Salary": "145795.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00005",
        "PerformanceRating": "3.5",
        "Status": "Inactive"
    },
    {
        "EmployeeID": "EMP00030",
        "FullName": "Employee 30",
        "Department": "HR",
        "Position": "Lead",
        "Email": "employee30@example.com",
        "Phone": "555-7020",
        "HireDate": "4/15/2020",
        "Salary": "139952.00",
        "EmploymentType": "Full-time",
        "ReportsTo": "EMP00006",
        "PerformanceRating": "4.3",
        "Status": "Active"
    },
    ... remaining 10,970 objects
];`
            },
            {
              filename: "employeeListData.ts",
              language: "typescript",
              code: gridData
            }
          ]}
        />
      </div>
    ),
  }

  return (
    <SectionTabLayout
      title="Virtual Scrolling"
      subtitle="Handle thousands of rows efficiently"
      badge={{
        text: "Performance",
        className: "bg-red-100 text-red-700"
      }}
      content={content}
    />
  )
}
  
