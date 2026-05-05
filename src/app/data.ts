export interface EmployeeTaskPerformance { // Unique task identifier
    taskId: number;                 // Unique task identifier
    employeeName: string;           // Employee full name
    taskName: string;               // Task title / description
    taskStartDate: string;          // ISO date (YYYY-MM-DD)
    taskEndDate: string;            // ISO date (YYYY-MM-DD)
    estimatedHours: number;         // Planned effort
    hoursWorked: number;            // Actual effort
    performanceScore: number;       // Rating (e.g., 1–5)
    completionPercentage: number;   // Progress (0–100)
    isTaskCompleted: boolean;       // Completion status
}

export function generateEmployeeTaskData(count: number) {
    const data = [];

    const employees = [
        "Arun Kumar",
        "Meena Iyer",
        "Ravi Reddy",
        "Divya Sharma",
        "Karthik Patel",
        "Priya Das",
        "Suresh Menon",
        "Anitha Gupta",
        "Vignesh Rao",
        "Sneha Kulkarni",
        "Rahul Verma",
        "Pooja Nair",
        "Naveen Bansal",
        "Lakshmi Krishnan",
        "Amit Chatterjee",
        "Neha Malhotra",
        "Santhosh Pillai",
        "Kavya Srinivasan",
        "Deepak Mishra",
        "Swathi Hegde"
    ];

    const tasks = [
        "API Development",
        "UI Enhancement",
        "Bug Fixing",
        "Database Migration",
        "Performance Optimization",
        "Test Automation",
        "Requirement Analysis",
        "Code Review",
        "Security Patch Update"
    ];

    for (let i = 0; i < count; i++) {
        const taskStartDate = new Date(2026, 0, 1 + i);
        const taskEndDate = new Date(taskStartDate);
        taskEndDate.setDate(taskStartDate.getDate() + 5 + (i % 6));

        const estimatedHours = 40 + (i % 4) * 8;
        const hoursWorked = 20 + (i % 6) * 6;

        const completionPercentage = Math.min(
            Math.round((hoursWorked / estimatedHours) * 100),
            100
        );

        data.push({
            taskId: 5000 + i,                              // number
            employeeName: employees[i % employees.length],// string
            taskName: tasks[i % tasks.length],             // string
            taskStartDate: taskStartDate.toISOString().split("T")[0], // date
            taskEndDate: taskEndDate.toISOString().split("T")[0],     // date
            estimatedHours: estimatedHours,                 // number
            hoursWorked: hoursWorked,                       // number
            performanceScore: 3 + (i % 3),                  // number
            completionPercentage: completionPercentage,     // number
            isTaskCompleted: completionPercentage === 100   // boolean
        });
    }

    return data;
}