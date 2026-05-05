export interface EmployeeTaskPerformance {
  taskId: number;
  employeeName: string;
  department: "Engineering" | "Design" | "QA" | string;
  taskName: string;
  priority: "High" | "Medium" | "Low";
  status: "In Progress" | "Completed" | "At Risk" | "Delayed";
  taskStartDate: Date;
  taskEndDate: Date;
  completionPercentage: number; // 0–100
  performanceScore: number;     // e.g. 1–5 scale
  hoursWorked: number;
  estimatedHours: number;
  imgId?: number; // Optional field for employee image ID
}

export const employeeTaskPerformanceData: EmployeeTaskPerformance[] = [
  {
    taskId: 5001,
    employeeName: "David Miller",
    department: "Engineering",
    taskName: "Cloud Deployment",
    priority: "High",
    status: "In Progress",
    taskStartDate: new Date(2026, 0, 1),
    taskEndDate: new Date(2026, 1, 16),
    completionPercentage: 40,
    performanceScore: 3.0,
    hoursWorked: 24,
    estimatedHours: 60,
    imgId: 1
  },
  {
    taskId: 5002,
    employeeName: "Sophia Johnson",
    department: "Design",
    taskName: "API Integration",
    priority: "Medium",
    status: "Completed",
    taskStartDate: new Date(2026, 1, 2),
    taskEndDate: new Date(2026, 2, 17),
    completionPercentage: 50,
    performanceScore: 3.4,
    hoursWorked: 35,
    estimatedHours: 70,
    imgId: 2
  },
  {
    taskId: 5003,
    employeeName: "Michael Brown",
    department: "QA",
    taskName: "UI Revamp",
    priority: "Low",
    status: "At Risk",
    taskStartDate: new Date(2026, 2, 3),
    taskEndDate: new Date(2026, 3, 18),
    completionPercentage: 60,
    performanceScore: 3.8,
    hoursWorked: 48,
    estimatedHours: 80,
    imgId: 3
  },
  {
    taskId: 5004,
    employeeName: "Emma Davis",
    department: "Engineering",
    taskName: "Performance Optimization",
    priority: "High",
    status: "Delayed",
    taskStartDate: new Date(2026, 3, 4),
    taskEndDate: new Date(2026, 4, 19),
    completionPercentage: 70,
    performanceScore: 4.2,
    hoursWorked: 63,
    estimatedHours: 90,
    imgId: 4
  },
  {
    taskId: 5005,
    employeeName: "Daniel Wilson",
    department: "Design",
    taskName: "Automation Setup",
    priority: "Medium",
    status: "In Progress",
    taskStartDate: new Date(2026, 4, 5),
    taskEndDate: new Date(2026, 5, 20),
    completionPercentage: 80,
    performanceScore: 4.6,
    hoursWorked: 80,
    estimatedHours: 100,
    imgId: 5
  },
  {
    taskId: 5006,
    employeeName: "Olivia Martinez",
    department: "QA",
    taskName: "Regression Testing",
    priority: "Low",
    status: "Completed",
    taskStartDate: new Date(2026, 5, 6),
    taskEndDate: new Date(2026, 6, 21),
    completionPercentage: 90,
    performanceScore: 3.0,
    hoursWorked: 54,
    estimatedHours: 60,
    imgId: 6
  },
  {
    taskId: 5007,
    employeeName: "James Anderson",
    department: "Engineering",
    taskName: "Deployment Automation",
    priority: "High",
    status: "At Risk",
    taskStartDate: new Date(2026, 0, 7),
    taskEndDate: new Date(2026, 1, 22),
    completionPercentage: 40,
    performanceScore: 3.4,
    hoursWorked: 28,
    estimatedHours: 70,
    imgId: 7
  },
  {
    taskId: 5008,
    employeeName: "Isabella Thomas",
    department: "Design",
    taskName: "Service Refactoring",
    priority: "Medium",
    status: "Delayed",
    taskStartDate: new Date(2026, 1, 8),
    taskEndDate: new Date(2026, 2, 23),
    completionPercentage: 50,
    performanceScore: 3.8,
    hoursWorked: 40,
    estimatedHours: 80,
    imgId: 8
  },
  {
    taskId: 5009,
    employeeName: "William Taylor",
    department: "QA",
    taskName: "Security Patch",
    priority: "Low",
    status: "In Progress",
    taskStartDate: new Date(2026, 2, 9),
    taskEndDate: new Date(2026, 3, 24),
    completionPercentage: 60,
    performanceScore: 4.2,
    hoursWorked: 54,
    estimatedHours: 90,
    imgId: 9
  },
  {
    taskId: 5010,
    employeeName: "Ava Hernandez",
    department: "Engineering",
    taskName: "Monitoring Setup",
    priority: "High",
    status: "Completed",
    taskStartDate: new Date(2026, 3, 10),
    taskEndDate: new Date(2026, 4, 25),
    completionPercentage: 70,
    performanceScore: 4.6,
    hoursWorked: 70,
    estimatedHours: 100,
    imgId: 10
  }
];