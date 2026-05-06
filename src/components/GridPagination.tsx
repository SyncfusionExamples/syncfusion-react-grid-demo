import { type EmployeeTaskPerformance, employeeTaskPerformanceData } from "@/app/models/grid-data";
import { type ColumnProps, type EditSettings, EditType, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-pagination.css';

export default function GridPagination() {
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const taskIdRules = { required: true, number: true };
    const stringValidationRules = { required: true, minLength: 4 };
    const numberRules = { required: true, min: 10, max: 500 };
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const [columns] = useState<ColumnProps[]>([
        { field: "taskId", headerText: "Task ID", width: 120, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
        { field: "employeeName", headerText: "Employee Name", width: 150, textAlign: 'Left', validationRules: stringValidationRules },
        { field: "taskName", headerText: "Task Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules },
        { field: "taskStartDate", headerText: "Start Date", width: 180, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "taskEndDate", headerText: "End Date", width: 180, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 160, textAlign: 'Right', validationRules: numberRules },
        { field: "hoursWorked", headerText: "Hours Worked", width: 120, textAlign: 'Right', validationRules: numberRules },
    ]);

    // sortSettings: enables multi-column sorting for arranging data
    const [sortSettings] = useState({ enabled: true });

    // aggregateColumns: enables footer aggregates (Sum) for specified columns
    const [aggregateColumns] = useState([{
        columns: [
            {
                type: 'Sum', field: 'estimatedHours', footerTemplate: (props?: object) => {
                    return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span>
                }
            },
            {
                type: 'Sum', field: 'hoursWorked', footerTemplate: (props?: object) => {
                    return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span>
                }
            }
        ]
    }
    ]);

    // pageSettings: enables pagination with 6 records per page
    const [pageSettings] = useState({ enabled: true, pageSize: 30 });
    const [data] = useState(employeeTaskPerformanceData);
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
            <Grid<EmployeeTaskPerformance> height={'100%'} dataSource={data} columns={columns} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} aggregates={aggregateColumns} pageSettings={pageSettings} />
        </div>
    )
}