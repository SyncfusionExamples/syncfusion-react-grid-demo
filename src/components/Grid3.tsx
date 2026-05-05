import { EmployeeTaskPerformance, employeeTaskPerformanceData } from "@/app/data";
import { ColumnProps, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid3() {
    const [columns] = useState<ColumnProps[]>([
        { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right' },
        { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left' },
        { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left' },
        { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right' },
        { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right' },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right' },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
    ]);
    const [sortSettings] = useState({ enabled: true });
    const [aggregateColumns] = useState([{
        columns: [
        { type: 'Sum', field: 'estimatedHours' },
        { type: 'Sum', field: 'hoursWorked' }
        ]}
    ]);
    const [pageSettings] = useState({ enabled: true, pageSize: 5 });
    const [data] = useState(employeeTaskPerformanceData);
    return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} sortSettings={sortSettings} aggregates={aggregateColumns} pageSettings={pageSettings} />)
}