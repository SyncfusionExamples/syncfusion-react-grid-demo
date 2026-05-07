import { Grid, type FilterSettings } from "@syncfusion/react-grid";
import { employeeTasks } from '@/app/models/employeeTasks';
import { useState } from "react";
import '../app/styles/EmployeeGrid.css';

export default function EmployeeGrid() {
    const [columns] = useState([
        { field: "taskId", headerText: "Task ID", width: 90, textAlign: 'Right' },
        { field: "employeeName", headerText: "Employee Name", width: 135, textAlign: 'Left' },
        { field: "taskName", headerText: "Task Name", width: 160, textAlign: 'Left' },
        { field: "taskStartDate", headerText: "Start Date", width: 100, format: "yMd", textAlign: 'Right' },
        { field: "taskEndDate", headerText: "End Date", width: 95, format: "yMd", textAlign: 'Right' },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 140, textAlign: 'Right' },
        { field: "hoursWorked", headerText: "Hours Worked", width: 130, textAlign: 'Right' },
    ]);
    const [data] = useState(employeeTasks.slice(0, 30));

    // sortSettings: enables multi-column sorting for arranging data
    const [sortSettings] = useState({ enabled: true });

    // filterSettings: enables checkbox-style filtering for record filtering
    const [filterSettings] = useState<FilterSettings>({ enabled: true, type: 'CheckBox' });
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 120px)'}}>
            <Grid dataSource={data} columns={columns} height={'100%'} sortSettings={sortSettings} filterSettings={filterSettings} />
        </div>
    )
}