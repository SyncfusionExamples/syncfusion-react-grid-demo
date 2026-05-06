import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '@/app/models/data';
import { useState } from "react";
import '../app/styles/grid.css';

export default function Grid1() {
    const [columns] = useState([
        { field: "taskId", headerText: "Task ID", width: 120, textAlign: 'Right' },
        { field: "employeeName", headerText: "Employee Name", width: 150, textAlign: 'Left' },
        { field: "taskName", headerText: "Task Name", width: 180, textAlign: 'Left' },
        { field: "taskStartDate", headerText: "Start Date", width: 180, format: "yMd", textAlign: 'Right' },
        { field: "taskEndDate", headerText: "End Date", width: 180, format: "yMd", textAlign: 'Right' },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 160, textAlign: 'Right' },
        { field: "hoursWorked", headerText: "Hours Worked", width: 120, textAlign: 'Right' },
    ]);
    const [data] = useState(employeeTaskPerformanceData.slice(0, 30));
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 120px)'}}>
            <Grid dataSource={data} columns={columns} height={'100%'} />
        </div>
    )
}