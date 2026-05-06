import GridPerformance from "@/components/GridPerformance"
import SectionTabLayout from "@/components/SectionTabLayout"
import CodeViewer from "@/components/CodeViewer"

export default function Virtualization() {
  const content = {
    description: (
      <div className="space-y-5 text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "-0.3px", lineHeight: "1.4" }}>Virtual Scrolling for Large Datasets</h2>
          
          <p className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.3px", lineHeight: "1.6", fontWeight: "400" }}>
            Virtual scrolling enables efficient rendering of large datasets (10,000+ records) through DOM virtualization. Only the rows visible within the viewport, along with a small buffer, are rendered in the DOM, ensuring smooth and seamless scrolling performance. Multi‑column sorting is supported without impacting responsiveness.
          </p>
        </div>
        
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Architecture:</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6" }}>
              <li><span className="font-semibold text-gray-900">Row Virtualization:</span> Implements DOM virtualization at the row level to minimize rendering overhead.</li>
              <li><span className="font-semibold text-gray-900">Viewport Rendering:</span> Dynamically renders rows based on the visible viewport for optimal performance.</li>
              <li><span className="font-semibold text-gray-900">Sorting:</span> Supports sorting across multiple columns with consistent responsiveness.</li>
              <li><span className="font-semibold text-gray-900">Templates:</span> Allows flexible column templates for complex and rich data presentation.</li>
              <li><span className="font-semibold text-gray-900">Scroll Handling:</span> Uses debounced scroll events to reduce unnecessary reflows and improve scroll efficiency.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-semibold text-gray-900 text-sm mb-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", fontWeight: "700" }}>Performance Characteristics</h2>
            <p className="text-gray-700 text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", letterSpacing: "0.2px", lineHeight: "1.6", fontWeight: "400" }}>
              This approach maintains constant memory usage regardless of dataset size by keeping only the visible rows and a small buffer in the DOM, resulting in a minimal DOM footprint. As a result, scrolling remains smooth and responsive, delivering consistent performance even at high scroll velocities without any noticeable degradation.
            </p>
          </div>
        </div>
      </div>
    ),
    steps: (
      <div className="space-y-2">
        <h2 className="text-base font-bold text-gray-900 mb-2">Implementation Steps</h2>
        
        <div className="bg-white rounded p-2 border-l-4 border-red-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 1: Configure Virtual Scrolling</h4>
          <p className="text-sm text-gray-600 mt-1 text-left">To enable row virtualization for smooth scrolling with large datasets, set "virtualizationSettings.type" as "VirtualDomType.Row".</p>
          <br/>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto flex-1 border border-gray-700 leading-relaxed text-left font-mono whitespace-pre-wrap break-words">
{`import { useState, useCallback } from 'react';
import { Grid, Columns, Column, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type EmployeeData, generateEmployeeData } from '@/app/models/data2';
import styles from '@/app/styles/grid-performance.module.css';

const [data] = useState(() => generateEmployeeData());
const [gridHeight] = useState(400);
const [gridWidth] = useState(100);
const [virtualizationSettings] = useState({ type: VirtualDomType.Row });

<Grid<EmployeeData>
dataSource={data}
width={{gridWidth}%}
virtualizationSettings={virtualizationSettings}
height={gridHeight}/>`}
          </pre>
        </div>

        <div className="bg-white rounded p-2 border-l-4 border-red-500">
          <h4 className="text-left font-semibold text-gray-900 mb-1 text-sm">Step 2: Enable Column Virtualization</h4>
          <p className="text-sm text-gray-600 mt-1 text-left">To enable row virtualization for smooth scrolling with large datasets, set "virtualizationSettings.type" as "VirtualDomType.Column"."</p>
          <br/>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto flex-1 border border-gray-700 leading-relaxed text-left font-mono whitespace-pre-wrap break-words">
{`import { useState, useCallback } from 'react';
import { Grid, Columns, Column, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type EmployeeData, generateEmployeeData } from '@/app/models/data2';
import styles from '@/app/styles/grid-performance.module.css';

const [data] = useState(() => generateEmployeeData());
const [gridHeight] = useState(400);
const [gridWidth] = useState(100);
const [virtualizationSettings] = useState({ type: VirtualDomType.Column });

<Grid<EmployeeData>
dataSource={data}
width={{gridWidth}%}
virtualizationSettings={virtualizationSettings}
height={gridHeight}/>`}
          </pre>
        </div>
      </div>
    ),
    sample: (
      <div className="w-full">
        <GridPerformance />
      </div>
    ),
    code: (
      <div className="space-y-2 h-full flex flex-col">
        <CodeViewer
          files={[
            {
              filename: "GridPerformance.tsx",
              language: "typescript",
              code: `import { useState, useCallback } from 'react';
import { Grid, Columns, Column, TextAlign, ClipMode, type ColumnTemplateProps, type FilterSettings, type SortSettings, ColumnType, VirtualDomType } from '@syncfusion/react-grid';
import { type EmployeeData, generateEmployeeData } from '@/app/models/data2';
import styles from '@/app/styles/grid-performance.module.css';

export default function GridPerformance() {
  const [data] = useState(() => generateEmployeeData());

  const [gridHeight] = useState(400);
  const [gridWidth] = useState(100);
  const [sortSettings] = useState<SortSettings>({enabled: true});
  const [virtualizationSettings] = useState({ type: VirtualDomType.Row });

  // Template functions for real-world employee data display
  const employeeIdTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.EmployeeID}</span>
    </div>
  ), []);

  const fullNameTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.FullName}</span>
    </div>
  ), []);

  const departmentTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={{styles.badge} {styles.departmentBadge}}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span>{args.data.Department}</span>
    </div>
  ), []);

  const statusTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const statusConfig: { [key: string]: { className: string; icon: string } } = {
      'Active': { className: styles.statusActive, icon: '✓' },
      'On Leave': { className: styles.statusOnLeave, icon: '⏸' },
      'Inactive': { className: styles.statusInactive, icon: '○' }
    };
    const config = statusConfig[args.data.Status] || statusConfig['Inactive'];
    return (
      <div className={{styles.statusBadgeBg} {config.className}}>
        <span style={{ fontSize: '14px' }}>{config.icon}</span>
        <span>{args.data.Status}</span>
      </div>
    );
  }, []);

  const positionTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7v-2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Position}</span>
    </div>
  ), []);

  const hireDateTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper} style={{ justifyContent: 'flex-end' }}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.HireDate}</span>
    </div>
  ), []);

  const salaryTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <span className={styles.salaryText}>$ {parseFloat(args.data.Salary).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
  ), []);

  const performanceRatingTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const rating = parseFloat(args.data.PerformanceRating);
    const ratingClass = rating >= 4 ? styles.ratingHigh : rating >= 3 ? styles.ratingMedium : styles.ratingLow;
    const color = rating >= 4 ? '#059669' : rating >= 3 ? '#f59e0b' : '#dc2626';
    
    return (
      <div className={styles.ratingContainer}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
          <polygon points="12 2 15.09 10.26 24 10.26 17.55 16.61 19.64 24.87 12 19.52 4.36 24.87 6.45 16.61 0 10.26 8.91 10.26"/>
        </svg>
        <span className={ratingClass}>{rating.toFixed(1)}</span>
      </div>
    );
  }, []);

  const emailTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7.5L22 6"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Email}</span>
    </div>
  ), []);

  const phoneTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper + ' ' + styles.phone}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.Phone}</span>
    </div>
  ), []);

  const employmentTypeTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => {
    const typeConfig: { [key: string]: string } = {
      'Full-time': styles.employmentFullTime,
      'Part-time': styles.employmentPartTime,
      'Contract': styles.employmentContract,
      'Intern': styles.employmentIntern
    };
    const badgeClass = typeConfig[args.data.EmploymentType] || styles.employmentDefault;
    
    return (
      <div className={{styles.employmentBadge} {badgeClass}}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <span>{args.data.EmploymentType}</span>
      </div>
    );
  }, []);

  const reportsToTemplate = useCallback((args: ColumnTemplateProps<EmployeeData>) => (
    <div className={styles.iconWrapper}>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.icon12px}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
      <span className={styles.textEllipsis}>{args.data.ReportsTo}</span>
    </div>
  ), []);

  return (
    <div style={{ width: '100%' }}>
      <Grid<EmployeeData>
        dataSource={data}
        height={gridHeight}
        width={{gridWidth}%}
        clipMode={ClipMode.EllipsisWithTooltip}
        virtualizationSettings={virtualizationSettings}
        sortSettings={sortSettings}
      >
        <Columns>
          <Column field='EmployeeID' headerText='Employee ID' width='150px' textAlign={TextAlign.Left} template={employeeIdTemplate} />
          <Column field='FullName' headerText='Full Name' width='120px' textAlign={TextAlign.Left} template={fullNameTemplate} />
          <Column field='Email' headerText='Email' width='215px' textAlign={TextAlign.Left} template={emailTemplate} />
          <Column field='Phone' headerText='Phone' width='110px' textAlign={TextAlign.Right} template={phoneTemplate} />
          <Column field='Department' headerText='Department' width='130px' textAlign={TextAlign.Center} template={departmentTemplate} />
          <Column field='Position' headerText='Position' width='110px'  template={positionTemplate} />
          <Column field='EmploymentType' headerText='Employment Type' width='140px' textAlign={TextAlign.Center} template={employmentTypeTemplate} />
          <Column field='Status' headerText='Status' width='110px' textAlign={TextAlign.Center} template={statusTemplate} />
          <Column field='HireDate' headerText='Hire Date' width='120px' textAlign={TextAlign.Right} template={hireDateTemplate} type={ColumnType.Date} />
          <Column field='ReportsTo' headerText='Reports To' width='120px' textAlign={TextAlign.Left} template={reportsToTemplate} />
          <Column field='Salary' headerText='Salary' width='110px' textAlign={TextAlign.Right} template={salaryTemplate} />
          <Column field='PerformanceRating' headerText='Impact Rating' width='130px' textAlign={TextAlign.Center} template={performanceRatingTemplate} />
        </Columns>
      </Grid>
    </div>
  );
}
`
            },
            {
              filename: "grid-performance.module.css",
              language: "css",
              code: `@import '@syncfusion/react-base/styles/material.css';
@import '@syncfusion/react-popups/styles/material.css';
@import '@syncfusion/react-grid/styles/material.css';
/* Template Container Styles */

.iconWrapper {
  display: flex;
  align-items: center;
  gap: 6px;
  line-height: 1.4;
  font-size: 14px;
}
.phone {
  justify-content: flex-end;
}

.textEllipsis {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
}

.departmentBadge {
  background-color: #dbeafe;
  color: #0369a1;
}

.departmentBadge span {
  text-overflow: ellipsis;
  overflow: hidden;
}

.statusBadgeBg {
  padding: 2px 6px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.statusBadgeBg span {
  text-overflow: ellipsis;
  overflow: hidden;
}

.statusActive {
  background-color: #dcfce7;
  color: #059669;
}

.statusOnLeave {
  background-color: #fefce8;
  color: #f59e0b;
}

.statusInactive {
  background-color: #fee2e2;
  color: #dc2626;
}

.employmentBadge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
}

.employmentFullTime {
  background-color: #dcfce7;
  color: #059669;
}

.employmentPartTime {
  background-color: #e0f2fe;
  color: #0284c7;
}

.employmentContract {
  background-color: #fefce8;
  color: #f59e0b;
}

.employmentIntern {
  background-color: #fed7aa;
  color: #7c2d12;
}

.employmentDefault {
  background-color: #f3f4f6;
  color: #6b7280;
}

.salaryText {
  color: #059669;
  font-weight: bold;
  font-size: 14px;
}

.ratingContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
}

.ratingHigh {
  color: #059669;
  font-weight: 600;
}

.ratingMedium {
  color: #f59e0b;
  font-weight: 600;
}

.ratingLow {
  color: #dc2626;
  font-weight: 600;
}

.iconBase {
  flex-shrink: 0;
}

.icon12px {
  width: 12px;
  height: 12px;
}`
            },
            {
              filename: "grid-performance-data.ts",
              language: "typescript",
              code: `export type EmployeeData = {
  EmployeeID: string;
  FullName: string;
  Department: string;
  Position: string;
  Email: string;
  Phone: string;
  HireDate: string;
  Salary: string;
  EmploymentType: string;
  ReportsTo: string;
  PerformanceRating: string;
  Status: string;
};

export const generateEmployeeData = (): EmployeeData[] => {
  const departments = ['Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations'];
  const statuses = ['Active', 'On Leave', 'Inactive'];
  
  const rows: EmployeeData[] = [];
  
  // First pass: create all employees with proper positions
  for (let i = 1; i <= 100; i++) {
    let position = 'Associate'; // default
    let department = 'Executive'; // default
    
    // CEO - first employee
    if (i === 1) {
      position = 'CEO';
      department = 'Executive';
    }
    // Department Heads (EMP00002-EMP00007, one per department, all Managers)
    else if (i >= 2 && i <= 7) {
      position = 'Manager';
      department = departments[i - 2]; // Maps to: Engineering, Sales, Marketing, Finance, HR, Operations
    }
    // Remaining 93 employees: assign positions and departments
    else {
      const roles = ['Manager', 'Lead', 'Senior Developer', 'Developer', 'Analyst', 'Coordinator', 'Associate'];
      position = roles[(i - 8) % 7];
      department = departments[(i - 8) % 6];
    }
    
    rows.push({
      EmployeeID: EMP{String(i).padStart(5, '0')},
      FullName: Employee {i},
      Department: department,
      Position: position,
      Email: employee{i}@example.com,
      Phone: 555-{String(Math.floor((i * 1234) % 10000)).padStart(4, '0')},
      HireDate: '', // Will be calculated in second pass
      Salary: '', // Will be calculated in second pass
      EmploymentType: '', // Will be calculated in second pass
      ReportsTo: 'N/A', // Will be assigned in second pass
      PerformanceRating: '', // Will be calculated in second pass
      Status: statuses[(i * 7) % statuses.length]
    });
  }
  
  // Second pass: assign ReportsTo and calculate other fields based on organizational hierarchy
  for (let i = 0; i < rows.length; i++) {
    const employee = rows[i];
    const empIndex = i + 1; // 1-based
    
    // ========== REPORTING STRUCTURE ==========
    // CEO reports to no one
    if (empIndex === 1) {
      employee.ReportsTo = 'N/A';
    }
    // Department Heads (EMP00002-EMP00007) report to CEO (EMP00001)
    else if (empIndex >= 2 && empIndex <= 7) {
      employee.ReportsTo = 'EMP00001';
    }
    // Managers and Leads (from remaining pool) report to their department head
    else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Find which department this person belongs to
      const deptIndex = departments.indexOf(employee.Department);
      // Department head is at index deptIndex + 2 (since first 2 employees are CEO and start of dept heads)
      const deptHeadIndex = deptIndex + 2;
      employee.ReportsTo = EMP{String(deptHeadIndex).padStart(5, '0')};
    }
    // Individual contributors report to a Manager or Lead in their department
    else {
      // Find Managers and Leads in the same department
      const supervisors = rows.filter((emp, idx) => 
        idx !== i && 
        emp.Department === employee.Department && 
        (emp.Position === 'Manager' || emp.Position === 'Lead')
      );
      
      if (supervisors.length > 0) {
        // Assign to one of the available supervisors - pseudo-random deterministic
        const supervisorSeed = Math.abs((i * 73856093) * 1103515245 + 12345);
        const supervisor = supervisors[supervisorSeed % supervisors.length];
        employee.ReportsTo = supervisor.EmployeeID;
      } else {
        // Fallback: report to department head if no managers/leads exist
        const deptIndex = departments.indexOf(employee.Department);
        if (deptIndex >= 0) {
          const deptHeadIndex = deptIndex + 2;
          employee.ReportsTo = EMP{String(deptHeadIndex).padStart(5, '0')};
        }
      }
    }
    
    // ========== HIRE DATE (Chronological by hierarchy) ==========
    let hireYear: number;
    let hireMonth: number;
    let hireDay: number;
    
    // Deterministic hire date generation based on employee index for UI testing consistency
    if (empIndex === 1) {
      // CEO: hired in 2018
      hireYear = 2018;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: hired in 2019
      hireYear = 2019;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Managers/Leads: hired in 2020
      hireYear = 2020;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: hired in 2020-2021 - deterministic
      hireYear = 2020 + (i % 2);
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else {
      // Individual contributors: hired in 2021-2022 - deterministic
      hireYear = 2021 + (i % 2);
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    }
    employee.HireDate = new Date(hireYear, hireMonth, hireDay).toLocaleDateString();
    
    // ========== EMPLOYMENT TYPE (by position level) ==========
    if (empIndex === 1) {
      // CEO: Full-time only
      employee.EmploymentType = 'Full-time';
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: Full-time only
      employee.EmploymentType = 'Full-time';
    } else if (employee.Position === 'Manager') {
      // Managers: Full-time mostly, 80% chance - deterministic
      employee.EmploymentType = (i % 5) < 4 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Lead') {
      // Leads: Full-time mostly, 85% chance - deterministic
      employee.EmploymentType = (i % 20) < 17 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: Full-time mostly, 90% chance - deterministic
      employee.EmploymentType = (i % 10) < 9 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Developer') {
      // Developers: Varied, 70% Full-time, 20% Part-time, 10% Contract - deterministic
      const rand = i % 10;
      if (rand < 7) employee.EmploymentType = 'Full-time';
      else if (rand < 9) employee.EmploymentType = 'Part-time';
      else employee.EmploymentType = 'Contract';
    } else {
      // Analysts, Coordinators, Associates: More varied - deterministic
      const types = ['Full-time', 'Part-time', 'Contract', 'Intern'];
      employee.EmploymentType = types[i % 4];
    }
    
    // ========== SALARY (by position hierarchy) ==========
    let salary: number;
    
    if (empIndex === 1) {
      // CEO: $200K - $250K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 12345) % 50000 + 200000;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: $150K - $200K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 98765) % 50000 + 150000;
    } else if (employee.Position === 'Manager') {
      // Managers: $100K - $150K - deterministic
      salary = Math.abs((i * 73856093) * 1664525 + 22695) % 50000 + 100000;
    } else if (employee.Position === 'Lead') {
      // Leads: $90K - $140K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 54321) % 50000 + 90000;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: $85K - $130K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 11111) % 45000 + 85000;
    } else if (employee.Position === 'Developer') {
      // Developers: $60K - $100K - deterministic
      salary = Math.abs((i * 73856093) * 1664525 + 33333) % 40000 + 60000;
    } else if (employee.Position === 'Analyst') {
      // Analysts: $55K - $95K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 55555) % 40000 + 55000;
    } else {
      // Coordinators, Associates: $35K - $70K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 77777) % 35000 + 35000;
    }
    employee.Salary = salary.toFixed(2);
    
    // ========== PERFORMANCE RATING (by position with variance) ==========
    let baseRating: number;
    let ratingVariance: number;
    
    if (empIndex === 1) {
      // CEO: typically 4.5-5.0
      baseRating = 4.5;
      ratingVariance = 0.5;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: typically 4.0-4.8
      baseRating = 4.0;
      ratingVariance = 0.8;
    } else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Managers/Leads: typically 3.5-4.5
      baseRating = 3.5;
      ratingVariance = 1.0;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: typically 3.5-4.5
      baseRating = 3.5;
      ratingVariance = 1.0;
    } else {
      // Individual contributors: typically 2.5-4.5 (more variance)
      baseRating = 2.5;
      ratingVariance = 2.0;
    }
    const ratingHash = Math.abs((i * 73856093) * 1103515245 + 12345);
    const rating = Math.min(5.0, baseRating + (ratingVariance * ((ratingHash / 10000) % 1)));
    employee.PerformanceRating = rating.toFixed(1);
  }
  
  return rows;
};`
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
  
