import { employeeTaskPerformanceData, EmployeeTaskPerformance } from "@/app/data";
import { ColumnProps, ColumnTemplateProps, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid2() {
        const [columns] = useState<ColumnProps[]>([
            { field: "taskId", headerText: "Task ID", width: 100 },
            { field: "employeeName", headerText: "Employee Name", width: 150,
                template: (data?: ColumnTemplateProps) => {
                    return <div style={{display: 'inline-flex', gap: '5px'}}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                        </svg>
                        <span className="font-medium text-blue-600">{(data?.data as EmployeeTaskPerformance).employeeName}</span>
                    </div>;
                }
            },
            { field: "taskName", headerText: "Task Name", width: 200 },
            { field: "taskStartDate", headerText: "Start Date", width: 120, format: "yMd" },
            { field: "taskEndDate", headerText: "End Date", width: 120, format: "yMd" },
            { field: "estimatedHours", headerText: "Estimated Hours", width: 150 },
            { field: "hoursWorked", headerText: "Hours Worked", width: 150 },
        ]);
        const [data] = useState(employeeTaskPerformanceData);
        return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={400}/>)
}