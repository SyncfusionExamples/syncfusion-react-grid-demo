import { employeeTaskPerformanceData, EmployeeTaskPerformance } from "@/app/data1";
import { ColumnProps, ColumnTemplateProps, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid2() {
        const [columns] = useState<ColumnProps[]>([
            { field: "taskId", headerText: "Task ID", width: 100, textAlign: 'Right' },
            { field: 'imgId', template: (data?: ColumnTemplateProps) => {
                    return <div style={{display: 'inline-flex', gap: '5px'}}>
                        <img src={`https://react.syncfusion.com/react-ui/images/grid/avatar/avatar-${(data?.data as EmployeeTaskPerformance).imgId}.jpg`} alt="avatar" className="w-6 h-6 rounded-full" />
                    </div>;
                },
                headerText: "Employee Image", width: 150
            },
            { field: "employeeName", headerText: "Employee Name", width: 150, textAlign: 'Left' },
            { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left' },
            { field: "taskStartDate", headerText: "Start Date", width: 120, format: "yMd", textAlign: 'Right' },
            { field: "taskEndDate", headerText: "End Date", width: 120, format: "yMd", textAlign: 'Right' },
            { field: "estimatedHours", headerText: "Estimated Hours", width: 150, textAlign: 'Right' },
            { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
        ]);
        const [data] = useState(employeeTaskPerformanceData);
        return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={400}/>)
}