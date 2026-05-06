import { employeeTaskPerformanceData, type EmployeeTaskPerformance } from "../app/models/feature-data";
import { ClipMode, type ColumnProps, type ColumnTemplateProps, type EditSettings, EditType, type FilterSettings, Grid } from "@syncfusion/react-grid";
import { useState } from "react";
import '../app/styles/grid-feature.css';

export default function GridFeature() {
    const [editSettings] = useState<EditSettings>({ allowEdit: true, allowAdd: true, allowDelete: true });
    const taskIdRules = { required: true, number: true };
    const stringValidationRules = { required: true, minLength: 4 };
    const numberRules = { required: true, min: 10, max: 500 };
    const [toolbarSettings] = useState<string[]>(['Edit', 'Delete', 'Update', 'Cancel']);
    const [columns] = useState<ColumnProps[]>([
        { field: "taskId", headerText: "Task ID", width: 95, textAlign: 'Right', validationRules: taskIdRules, isPrimaryKey: true },
        {
            field: 'imgId', template: (data?: ColumnTemplateProps) => {
                return <div style={{ display: 'inline-flex', gap: '5px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                    <img src={`https://react.syncfusion.com/react-ui/images/grid/avatar/avatar-${(data?.data as EmployeeTaskPerformance).imgId}.jpg`} alt="avatar" className="w-6 h-6 rounded-full" />
                </div>;
            },
            headerText: "Employee Image", width: 140, allowEdit: false, allowFilter: false, allowSort: false
        },
        { field: "employeeName", headerText: "Employee Name", width: 160, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
        { field: "taskName", headerText: "Task Name", width: 150, textAlign: 'Left', validationRules: stringValidationRules, edit: { type: EditType.DropDownList } },
        { field: "taskStartDate", headerText: "Start Date", width: 115, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "taskEndDate", headerText: "End Date", width: 115, format: "yMd", textAlign: 'Right', edit: { type: EditType.DatePicker } },
        { field: "estimatedHours", headerText: "Estimated Hours", width: 155, textAlign: 'Right', clipMode: 'EllipsisWithTooltip', validationRules: numberRules },
        { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right', validationRules: numberRules },
    ]);
    const [data] = useState(employeeTaskPerformanceData);

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

    // filterSettings: enables checkbox-style filtering for record filtering
    const [filterSettings] = useState<FilterSettings>({ enabled: true, type: 'CheckBox' });
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 120px)' }}>
            <Grid<EmployeeTaskPerformance> height={'100%'} dataSource={data} columns={columns} toolbar={toolbarSettings} editSettings={editSettings} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} clipMode={ClipMode.EllipsisWithTooltip}/>
        </div>
    )
}