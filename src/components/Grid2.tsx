import { employeeTaskPerformanceData, EmployeeTaskPerformance } from "@/app/data1";
import { ColumnProps, ColumnTemplateProps, FilterSettings, Grid } from "@syncfusion/react-grid";
import { useState } from "react";

export default function Grid2() {
        const [columns] = useState<ColumnProps[]>([
            { field: "taskId", headerText: "Task ID", width: 150, textAlign: 'Right' },
            { field: 'imgId', template: (data?: ColumnTemplateProps) => {
                    return <div style={{display: 'inline-flex', gap: '5px', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                        <img src={`https://react.syncfusion.com/react-ui/images/grid/avatar/avatar-${(data?.data as EmployeeTaskPerformance).imgId}.jpg`} alt="avatar" className="w-6 h-6 rounded-full" />
                    </div>;
                },
                headerText: "Employee Image", width: 150, allowEdit: false, allowFilter: false, allowSort: false
            },
            { field: "employeeName", headerText: "Employee Name", width: 180, textAlign: 'Left' },
            { field: "taskName", headerText: "Task Name", width: 170, textAlign: 'Left' },
            { field: "taskStartDate", headerText: "Start Date", width: 200, format: "yMd", textAlign: 'Right' },
            { field: "taskEndDate", headerText: "End Date", width: 200, format: "yMd", textAlign: 'Right' },
            { field: "estimatedHours", headerText: "Estimated Hours", width: 200, textAlign: 'Right', clipMode: 'EllipsisWithTooltip' },
            { field: "hoursWorked", headerText: "Hours Worked", width: 150, textAlign: 'Right' },
        ]);
        const [data] = useState(employeeTaskPerformanceData);
        const [sortSettings] = useState({ enabled: true });
        const [aggregateColumns] = useState([{
            columns: [
            { type: 'Sum', field: 'estimatedHours' },
            { type: 'Sum', field: 'hoursWorked' }
            ]}
        ]);
        const [filterSettings] = useState<FilterSettings>({ enabled: true, enableFilterBarOperator: true });
        return (<Grid<EmployeeTaskPerformance> dataSource={data} columns={columns} height={600} sortSettings={sortSettings} filterSettings={filterSettings} aggregates={aggregateColumns} />)
}