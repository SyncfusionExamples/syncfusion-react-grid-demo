import GridDataAPI from "@/components/GridDataAPI";
import gridCode from '@/components/GridDataAPI.tsx?raw';
import gridCss from '@/app/styles/grid-data-api.css?raw';
import gridCssModule from '@/app/styles/grid-data-api.module.css?raw';
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"
import CodeSnippet from "@/components/CodeSnippet"

export default function DataSource() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Server-Side Data with Virtual Scrolling</h2>
          
          <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            Manages 100,000+ records using server-side pagination and virtual scrolling. Data is fetched on-demand with 50 records per page. Custom templates display status badges, progress metrics, and performance ratings.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Key Characteristics:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Structured Tabular Layout:</span>  Displays database records in rows and columns for clear and organized data presentation.</li>
              <li><span className="font-semibold text-gray-900">Scalable Performance:</span> Designed to handle large data volumes through server‑side processing and virtualized rendering.</li>
              <li><span className="font-semibold text-gray-900">Advanced Interactivity:</span>  Supports server‑side pagination and sorting operations.</li>
              <li><span className="font-semibold text-gray-900">Backend and Database Support:</span>  Integrates seamlessly with any backend technology and database through APIs.</li>
              <li><span className="font-semibold text-gray-900">Customizable UI:</span> Enables flexible UI customization using templates for badges, metrics, and computed values.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Server‑Side Data Management</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              The Data Grid can integrate with all backend services and databases, enabling efficient server‑side data retrieval and processing. It forms the foundation for advanced grid capabilities such as pagination and sorting, ensuring consistent behavior and scalability across diverse data sources.
            </p>
          </div>

          <div>
            <h2
              className="font-semibold text-gray-900 text-sm mb-3"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                fontWeight: "700",
              }}
            >
              Using the DataSource
            </h2>

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
              By default, the Data Grid supports data binding using{" "}
              <span className="font-semibold text-gray-900">
                server‑side data sources
              </span>{" "}
              through DataManager. This demo illustrates{" "}
              <span className="font-semibold text-gray-900">
                server‑side data binding
              </span>{" "}
              by fetching data on demand from a REST API.
            </p>

            <br />

            <ul
              className="list-disc list-inside space-y-2 text-gray-700 text-sm"
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                letterSpacing: "0.2px",
                lineHeight: "1.6",
              }}
            >
              <li>
                The grid retrieves data from a remote service using{" "}
                <code>DataManager</code> with <code>UrlAdaptor</code>.
              </li>
              <li>
                Data is fetched from the server on demand with{" "}
                <code>50</code> records per request.
              </li>
              <li>
                The service endpoint is configured using the{" "}
                <span className="font-semibold text-gray-900">service URL</span>{" "}
                in the DataManager settings.
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
              This approach enables efficient handling of large datasets by loading
              only the required records from the server, ensuring optimal performance
              and smooth user interaction within the Data Grid.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-base font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-teal-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 1: Import Shimmer/Skeleton dependency styles</h4>
          <br/>
          <CodeSnippet code={`@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-notifications/styles/material.css'; // skeleton
@import '@syncfusion/react-grid/styles/material.css';`} language="css" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-teal-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 2: Connect the backend API using the DataManager to enable seamless server‑side data operations.</h4>
          <br/>
          <CodeSnippet code={`import { DataManager, Query, UrlAdaptor } from '@syncfusion/react-data';

// Initializes DataManager with UrlAdaptor and service URL.
const data = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/UrlDataSource',
  adaptor: new UrlAdaptor()
});`} language="typescript" />
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-teal-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 3: Configure the Data Grid for server‑side data using the "dataSource" property, and enable virtual scrolling by setting "virtualizationSettings.scrollMode" to "Virtual" for improved performance.</h4>
          <br/>
          <CodeSnippet code={`import { Grid, Columns, Column, ScrollMode, type VirtualizationSettings } from '@syncfusion/react-grid';

const [virtualizationSettings] = useState<VirtualizationSettings>({
  scrollMode: ScrollMode.Virtual
});
<Grid<EmployeeServerData> dataSource={data} height='100%' virtualizationSettings={virtualizationSettings}/>`} language="typescript" />
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <GridDataAPI />
      </div>
    ),
    code: (
      <div className="w-full h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridDataAPI.tsx",
              language: "typescript",
              code: gridCode
            },
            {
              filename: "grid-data-api.css",
              language: "css",
              code: gridCss
            },
            {
              filename: "grid-data-api.module.css",
              language: "css",
              code: gridCssModule
            },
            {
              filename: "network-reponse-format.json",
              language: "json",
              code: `// Sample network response format for demo purposes.
// Data is returned with \`result\` (records array) and \`count\` (total record count) to support server-side operations like paging.
// On-demand loading with a default page size of 50, this default-50 – based response format is shown below and can be customized as required
{
    "result": [
        {
            "Check": true,
            "EmployeeID": 10001,
            "Employees": "Kathryn Fuller",
            "Designation": "Designer",
            "Location": "Mexico",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 3,
            "Software": 11,
            "EmployeeImg": "usermale",
            "CurrentSalary": 1612,
            "Address": "Luisenstr. 48",
            "Mail": "kathryn98@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10002,
            "Employees": "Tamer Fuller",
            "Designation": "Manager",
            "Location": "Canada",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 5,
            "Software": 52,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 10642,
            "Address": "Rua do Paço, 67",
            "Mail": "tamer10@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10003,
            "Employees": "Martin Nancy",
            "Designation": "Project Lead",
            "Location": "USA",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 33,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 38268,
            "Address": "2, rue du Commerce",
            "Mail": "martin58@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10004,
            "Employees": "Davolio Leverling",
            "Designation": "Developer",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 4,
            "Software": 24,
            "EmployeeImg": "usermale",
            "CurrentSalary": 13192,
            "Address": "Boulevard de Lyon, 255",
            "Mail": "davolio31@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10005,
            "Employees": "Nancy Fuller",
            "Designation": "System Analyst",
            "Location": "Argentina",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 75,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 42090,
            "Address": "Rua do Paço, 67",
            "Mail": "nancy87@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10006,
            "Employees": "Fuller Margaret",
            "Designation": "CFO",
            "Location": "Sweden",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 2,
            "Software": 46,
            "EmployeeImg": "usermale",
            "CurrentSalary": 15702,
            "Address": "Hauptstr. 31",
            "Mail": "fuller23@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10007,
            "Employees": "Leverling Andrew",
            "Designation": "CFO",
            "Location": "Germany",
            "Status": "Active",
            "Trustworthiness": "Insufficient",
            "Rating": 5,
            "Software": 67,
            "EmployeeImg": "usermale",
            "CurrentSalary": 52444,
            "Address": "Starenweg 5",
            "Mail": "leverling49@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10008,
            "Employees": "Peacock Buchanan",
            "Designation": "Program Directory",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 88,
            "EmployeeImg": "usermale",
            "CurrentSalary": 50552,
            "Address": "Rua do Mercado, 12",
            "Mail": "peacock62@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10009,
            "Employees": "Margaret Buchanan",
            "Designation": "Manager",
            "Location": "France",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 39,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 40671,
            "Address": "Carrera 22 con Ave. Carlos Soublette #8-35",
            "Mail": "margaret18@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10010,
            "Employees": "Buchanan Laura",
            "Designation": "Developer",
            "Location": "UK",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 4,
            "Software": 0,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 96180,
            "Address": "Kirchgasse 6",
            "Mail": "buchanan7@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10011,
            "Employees": "Janet Anne",
            "Designation": "Designer",
            "Location": "Mexico",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 3,
            "Software": 21,
            "EmployeeImg": "usermale",
            "CurrentSalary": 17732,
            "Address": "Sierras de Granada 9993",
            "Mail": "janet98@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10012,
            "Employees": "Andrew Anne",
            "Designation": "Manager",
            "Location": "Canada",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 5,
            "Software": 62,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 63852,
            "Address": "Mehrheimerstr. 369",
            "Mail": "andrew10@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10013,
            "Employees": "Callahan Dodsworth",
            "Designation": "Project Lead",
            "Location": "USA",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 43,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 65828,
            "Address": "Rua da Panificadora, 12",
            "Mail": "callahan58@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10014,
            "Employees": "Laura Bergs",
            "Designation": "Developer",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 4,
            "Software": 34,
            "EmployeeImg": "usermale",
            "CurrentSalary": 46172,
            "Address": "2817 Milton Dr.",
            "Mail": "laura31@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10015,
            "Employees": "Dodsworth Anne",
            "Designation": "System Analyst",
            "Location": "Argentina",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 85,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 26270,
            "Address": "Kirchgasse 6",
            "Mail": "dodsworth87@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10016,
            "Employees": "Anne Anton",
            "Designation": "CFO",
            "Location": "Sweden",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 2,
            "Software": 56,
            "EmployeeImg": "usermale",
            "CurrentSalary": 41872,
            "Address": "Åkergatan 24",
            "Mail": "anne23@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10017,
            "Employees": "Bergs Van",
            "Designation": "CFO",
            "Location": "Germany",
            "Status": "Active",
            "Trustworthiness": "Insufficient",
            "Rating": 5,
            "Software": 77,
            "EmployeeImg": "usermale",
            "CurrentSalary": 27364,
            "Address": "24, place Kléber",
            "Mail": "bergs49@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10018,
            "Employees": "Vinet Fleet",
            "Designation": "Program Directory",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 98,
            "EmployeeImg": "usermale",
            "CurrentSalary": 13742,
            "Address": "Torikatu 38",
            "Mail": "vinet62@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10019,
            "Employees": "Anton Fleet",
            "Designation": "Manager",
            "Location": "France",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 49,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 85861,
            "Address": "Berliner Platz 43",
            "Mail": "anton18@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10020,
            "Employees": "Fleet Jack",
            "Designation": "Developer",
            "Location": "UK",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 4,
            "Software": 10,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 92360,
            "Address": "5ª Ave. Los Palos Grandes",
            "Mail": "fleet7@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10021,
            "Employees": "Zachery Michael",
            "Designation": "Designer",
            "Location": "Mexico",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 3,
            "Software": 31,
            "EmployeeImg": "usermale",
            "CurrentSalary": 33852,
            "Address": "1029 - 12th Ave. S.",
            "Mail": "zachery98@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10022,
            "Employees": "Van Michael",
            "Designation": "Manager",
            "Location": "Canada",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 5,
            "Software": 72,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 17062,
            "Address": "Torikatu 38",
            "Mail": "van10@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10023,
            "Employees": "King Rose",
            "Designation": "Project Lead",
            "Location": "USA",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 53,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 93388,
            "Address": "P.O. Box 555",
            "Mail": "king58@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10024,
            "Employees": "Jack Kathryn",
            "Designation": "Developer",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 4,
            "Software": 44,
            "EmployeeImg": "usermale",
            "CurrentSalary": 79152,
            "Address": "2817 Milton Dr.",
            "Mail": "jack31@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10025,
            "Employees": "Rose Michael",
            "Designation": "System Analyst",
            "Location": "Argentina",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 95,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 10450,
            "Address": "Taucherstraße 10",
            "Mail": "rose87@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10026,
            "Employees": "Michael Martin",
            "Designation": "CFO",
            "Location": "Sweden",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 2,
            "Software": 66,
            "EmployeeImg": "usermale",
            "CurrentSalary": 68042,
            "Address": "59 rue de l\"Abbaye",
            "Mail": "michael23@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10027,
            "Employees": "Kathryn Fuller",
            "Designation": "CFO",
            "Location": "Germany",
            "Status": "Active",
            "Trustworthiness": "Insufficient",
            "Rating": 5,
            "Software": 87,
            "EmployeeImg": "usermale",
            "CurrentSalary": 2284,
            "Address": "Via Ludovico il Moro 22",
            "Mail": "kathryn49@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10028,
            "Employees": "Tamer Davolio",
            "Designation": "Program Directory",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 8,
            "EmployeeImg": "usermale",
            "CurrentSalary": 76932,
            "Address": "Avda. Azteca 123",
            "Mail": "tamer62@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10029,
            "Employees": "Martin Davolio",
            "Designation": "Manager",
            "Location": "France",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 59,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 31051,
            "Address": "Heerstr. 22",
            "Mail": "martin18@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10030,
            "Employees": "Davolio Peacock",
            "Designation": "Developer",
            "Location": "UK",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 4,
            "Software": 20,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 88540,
            "Address": "Berguvsvägen  8",
            "Mail": "davolio7@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10031,
            "Employees": "Nancy Buchanan",
            "Designation": "Designer",
            "Location": "Mexico",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 3,
            "Software": 41,
            "EmployeeImg": "usermale",
            "CurrentSalary": 49972,
            "Address": "Magazinweg 7",
            "Mail": "nancy98@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10032,
            "Employees": "Fuller Buchanan",
            "Designation": "Manager",
            "Location": "Canada",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 5,
            "Software": 82,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 70272,
            "Address": "Berguvsvägen  8",
            "Mail": "fuller10@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10033,
            "Employees": "Leverling Margaret",
            "Designation": "Project Lead",
            "Location": "USA",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 63,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 20948,
            "Address": "Gran Vía, 1",
            "Mail": "leverling58@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10034,
            "Employees": "Peacock Janet",
            "Designation": "Developer",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 4,
            "Software": 54,
            "EmployeeImg": "usermale",
            "CurrentSalary": 12132,
            "Address": "Gran Vía, 1",
            "Mail": "peacock31@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10035,
            "Employees": "Margaret Buchanan",
            "Designation": "System Analyst",
            "Location": "Argentina",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 5,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 94630,
            "Address": "Carrera 45 con Ave. Rosario, 65-98",
            "Mail": "margaret87@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10036,
            "Employees": "Buchanan Callahan",
            "Designation": "CFO",
            "Location": "Sweden",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 2,
            "Software": 76,
            "EmployeeImg": "usermale",
            "CurrentSalary": 94212,
            "Address": "Magazinweg 7",
            "Mail": "buchanan23@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10037,
            "Employees": "Janet Anne",
            "Designation": "CFO",
            "Location": "Germany",
            "Status": "Active",
            "Trustworthiness": "Insufficient",
            "Rating": 5,
            "Software": 97,
            "EmployeeImg": "usermale",
            "CurrentSalary": 77204,
            "Address": "Taucherstraße 10",
            "Mail": "janet49@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10038,
            "Employees": "Andrew Laura",
            "Designation": "Program Directory",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 18,
            "EmployeeImg": "usermale",
            "CurrentSalary": 40122,
            "Address": "Taucherstraße 10",
            "Mail": "andrew62@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10039,
            "Employees": "Callahan Laura",
            "Designation": "Manager",
            "Location": "France",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 69,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 76241,
            "Address": "Av. Copacabana, 267",
            "Mail": "callahan18@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10040,
            "Employees": "Laura Vinet",
            "Designation": "Developer",
            "Location": "UK",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 4,
            "Software": 30,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 84720,
            "Address": "Strada Provinciale 124",
            "Mail": "laura7@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10041,
            "Employees": "Dodsworth Fleet",
            "Designation": "Designer",
            "Location": "Mexico",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 3,
            "Software": 51,
            "EmployeeImg": "usermale",
            "CurrentSalary": 66092,
            "Address": "Fauntleroy Circus",
            "Mail": "dodsworth98@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10042,
            "Employees": "Anne Fleet",
            "Designation": "Manager",
            "Location": "Canada",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 5,
            "Software": 92,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 23482,
            "Address": "Av. dos Lusíadas, 23",
            "Mail": "anne10@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10043,
            "Employees": "Bergs Anton",
            "Designation": "Project Lead",
            "Location": "USA",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 73,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 48508,
            "Address": "Rua da Panificadora, 12",
            "Mail": "bergs58@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10044,
            "Employees": "Vinet Zachery",
            "Designation": "Developer",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 4,
            "Software": 64,
            "EmployeeImg": "usermale",
            "CurrentSalary": 45112,
            "Address": "Av. Inês de Castro, 414",
            "Mail": "vinet31@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10045,
            "Employees": "Anton Fleet",
            "Designation": "System Analyst",
            "Location": "Argentina",
            "Status": "Inactive",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 15,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 78810,
            "Address": "Avda. Azteca 123",
            "Mail": "anton87@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10046,
            "Employees": "Fleet King",
            "Designation": "CFO",
            "Location": "Sweden",
            "Status": "Active",
            "Trustworthiness": "Sufficient",
            "Rating": 2,
            "Software": 86,
            "EmployeeImg": "usermale",
            "CurrentSalary": 20382,
            "Address": "2817 Milton Dr.",
            "Mail": "fleet23@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10047,
            "Employees": "Zachery Michael",
            "Designation": "CFO",
            "Location": "Germany",
            "Status": "Active",
            "Trustworthiness": "Insufficient",
            "Rating": 5,
            "Software": 7,
            "EmployeeImg": "usermale",
            "CurrentSalary": 52124,
            "Address": "59 rue de l\"Abbaye",
            "Mail": "zachery49@example.com"
        },
        {
            "Check": true,
            "EmployeeID": 10048,
            "Employees": "Van Jack",
            "Designation": "Program Directory",
            "Location": "Austria",
            "Status": "Active",
            "Trustworthiness": "Perfect",
            "Rating": 3,
            "Software": 28,
            "EmployeeImg": "usermale",
            "CurrentSalary": 3312,
            "Address": "Luisenstr. 48",
            "Mail": "van62@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10049,
            "Employees": "King Jack",
            "Designation": "Manager",
            "Location": "France",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 1,
            "Software": 79,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 21431,
            "Address": "Rua do Paço, 67",
            "Mail": "king18@example.com"
        },
        {
            "Check": false,
            "EmployeeID": 10050,
            "Employees": "Jack Tamer",
            "Designation": "Developer",
            "Location": "UK",
            "Status": "Inactive",
            "Trustworthiness": "Insufficient",
            "Rating": 4,
            "Software": 40,
            "EmployeeImg": "userfemale",
            "CurrentSalary": 80900,
            "Address": "2, rue du Commerce",
            "Mail": "jack7@example.com"
        }
    ],
    "count": 100000
}`
            }
          ]}
        />
      </div>
    ),
  }

  return (
    <SectionTabLayout
      title="Server-Side Data Management"
      subtitle="Handle large datasets efficiently"
      badge={{
        text: "Data Management",
        className: "bg-teal-100 text-teal-700"
      }}
      content={content}
    />
  )
}