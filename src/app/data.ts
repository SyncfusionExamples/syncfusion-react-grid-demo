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
}

export const employeeTaskPerformanceData: EmployeeTaskPerformance[] = [
  {
    taskId: 5001,
    employeeName: "David Miller",
    department: "Engineering",
    taskName: "Cloud Deployment",
    priority: "High",
    status: "In Progress",
    taskStartDate: new Date(2026, 0, 15), // Jan 15
    taskEndDate: new Date(2026, 2, 30),   // Mar 30
    completionPercentage: 65,
    performanceScore: 4.2,
    hoursWorked: 85,
    estimatedHours: 120
  },
  {
    taskId: 5002,
    employeeName: "Sophia Johnson",
    department: "Design",
    taskName: "UI Revamp",
    priority: "Medium",
    status: "Completed",
    taskStartDate: new Date(2026, 0, 10),
    taskEndDate: new Date(2026, 1, 28),
    completionPercentage: 100,
    performanceScore: 4.9,
    hoursWorked: 90,
    estimatedHours: 90
  },
  {
    taskId: 5003,
    employeeName: "Michael Brown",
    department: "Engineering",
    taskName: "API Integration",
    priority: "High",
    status: "At Risk",
    taskStartDate: new Date(2026, 1, 5),
    taskEndDate: new Date(2026, 3, 20),
    completionPercentage: 55,
    performanceScore: 3.2,
    hoursWorked: 75,
    estimatedHours: 100
  },
  {
    taskId: 5004,
    employeeName: "Emma Davis",
    department: "Engineering",
    taskName: "Performance Optimization",
    priority: "Medium",
    status: "Completed",
    taskStartDate: new Date(2026, 2, 1),
    taskEndDate: new Date(2026, 3, 25),
    completionPercentage: 100,
    performanceScore: 4.4,
    hoursWorked: 80,
    estimatedHours: 80
  },
  {
    taskId: 5005,
    employeeName: "Daniel Wilson",
    department: "QA",
    taskName: "Automation Setup",
    priority: "Low",
    status: "Delayed",
    taskStartDate: new Date(2026, 3, 1),
    taskEndDate: new Date(2026, 4, 20),
    completionPercentage: 40,
    performanceScore: 3.5,
    hoursWorked: 40,
    estimatedHours: 70
  }
];