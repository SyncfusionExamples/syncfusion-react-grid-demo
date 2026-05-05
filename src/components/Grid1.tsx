"use client";
import { Grid } from "@syncfusion/react-grid";
import { employeeTaskPerformanceData } from '../app/data';
import { useState } from "react";
export default function Grid1() {
    const [columns] = useState([
        { field: "taskId", headerText: "Task ID", width: 100, textAlign: 'Right' },
        { field: "employeeName", headerText: "Employee Name", width: 150, textAlign: 'Left' },
        { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left' },
        { field: "taskStartDate", headerText: "Start Date", width: 120, format: "yMd", textAlign: 'Right' },
        { field: "taskEndDate", headerText: "End Date", width: 120, format: "yMd", textAlign: 'Right' },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 150, textAlign: 'Right' },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
    ]);
    const [data] = useState(employeeTaskPerformanceData);
    return (<Grid dataSource={data} columns={columns} />)
}