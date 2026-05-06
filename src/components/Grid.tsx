import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/data';
import { useState } from "react";
import '../app/styles/grid.css';

export default function Grid1() {
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
    )
}