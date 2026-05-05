import { employeeTaskPerformanceData, EmployeeTaskPerformance } from "@/app/data";
import { ColumnProps, ColumnTemplateProps, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid2() {
        const [columns] = useState<ColumnProps[]>([
            { field: "taskId", headerText: "Task ID", width: 100 },
            { field: "employeeName", headerText: "Employee Name", width: 150,
                template: (data: ColumnTemplateProps) => {
                    return <span className="font-medium text-blue-600">{(data as unknown as {employeeName: string}).employeeName}</span>;
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