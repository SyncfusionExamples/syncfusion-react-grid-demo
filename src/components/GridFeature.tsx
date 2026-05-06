import { employeeTaskPerformanceData, type EmployeeTaskPerformance } from "../app/models/data1";
import { type ColumnProps, type ColumnTemplateProps, type EditSettings, EditType, type FilterSettings, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-feature.css';

export default function GridFeature() {
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const taskIdRules = { required: true, number: true };
    const stringValidationRules = { required: true, minLength: 4 };
    const numberRules = { required: true, min: 10, max: 500 };
    const [toolbarSettings] = useState<string[]>(['Edit', 'Delete', 'Update', 'Cancel']);
    const [columns] = useState<ColumnProps[]>([
        { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
        {
            field: 'imgId', template: (data?: ColumnTemplateProps) => {
                return <div style={{ display: 'inline-flex', gap: '5px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <img src={`https://react.syncfusion.com/react-ui/images/grid/avatar/avatar-${(data?.data as EmployeeTaskPerformance).imgId}.jpg`} alt="avatar" className="w-6 h-6 rounded-full" />
                </div>;
            },
            headerText: "Employee Image", width: 150, allowEdit: false, allowFilter: false, allowSort: false
        },
        { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
        { field: "taskName", headerText: "Task Name", width: 170, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
        { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', validationRules: numberRules },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
    ]);
    const [data] = useState(employeeTaskPerformanceData);
    const [sortSettings] = useState({ enabled: true });
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
    const [filterSettings] = useState<FilterSettings>({ enabled: true, type: 'CheckBox' });
    return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={600} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} />)
}