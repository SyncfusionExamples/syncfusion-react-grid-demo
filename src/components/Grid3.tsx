import { type EmployeeTaskPerformance, employeeTaskPerformanceData } from "@/app/data";
import { type ColumnProps, type EditSettings, EditType, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid3() {
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const taskIdRules = { required: true, number: true };
    const stringValidationRules = { required: true, minLength: 4 };
    const numberRules = { required: true, min: 10, max: 500 };
    const [toolbarSettings] = useState<string[]>(['Add', 'Edit', 'Delete', 'Update', 'Cancel']);
    const [columns] = useState<ColumnProps[]>([
        { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
        { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules },
        { field: "taskName", headerText: "Task Name", width: 200, textAlign: 'Left', validationRules: stringValidationRules },
        { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right' , edit: { type: EditType.DatePicker } },
        { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker }  },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', validationRules: numberRules },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
    ]);
    const [sortSettings] = useState({ enabled: true });
    const [aggregateColumns] = useState([{
        columns: [
        { type: 'Sum', field: 'estimatedHours', footerTemplate: (props?: object) => {
            return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span> }
        },
        { type: 'Sum', field: 'hoursWorked', footerTemplate: (props?: object) => {
            return <span>Total: {(props as unknown as { Sum: number | string })?.Sum} hrs</span> } }
        ]}
    ]);
    const [pageSettings] = useState({ enabled: true, pageSize: 5 });
    const [data] = useState(employeeTaskPerformanceData);
    return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} aggregates={aggregateColumns} pageSettings={pageSettings} />)
}