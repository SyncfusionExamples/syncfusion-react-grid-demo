export type EmployeeData = {
  EmployeeID: string;
  FullName: string;
  Department: string;
  Position: string;
  Email: string;
  Phone: string;
  HireDate: string;
  Salary: string;
  EmploymentType: string;
  ReportsTo: string;
  PerformanceRating: string;
  Status: string;
};

export const generateEmployeeData = (): EmployeeData[] => {
  const departments = ['Engineering', 'Sales', 'Marketing', 'Finance', 'HR', 'Operations'];
  const statuses = ['Active', 'On Leave', 'Inactive'];
  
  const rows: EmployeeData[] = [];
  
  // First pass: create all employees with proper positions
  for (let i = 1; i <= 11000; i++) {
    let position = 'Associate'; // default
    let department = 'Executive'; // default
    
    // CEO - first employee
    if (i === 1) {
      position = 'CEO';
      department = 'Executive';
    }
    // Department Heads (EMP00002-EMP00007, one per department, all Managers)
    else if (i >= 2 && i <= 7) {
      position = 'Manager';
      department = departments[i - 2]; // Maps to: Engineering, Sales, Marketing, Finance, HR, Operations
    }
    // Remaining 93 employees: assign positions and departments
    else {
      const roles = ['Manager', 'Lead', 'Senior Developer', 'Developer', 'Analyst', 'Coordinator', 'Associate'];
      position = roles[(i - 8) % 7];
      department = departments[(i - 8) % 6];
    }
    
    rows.push({
      EmployeeID: `EMP${String(i).padStart(5, '0')}`,
      FullName: `Employee ${i}`,
      Department: department,
      Position: position,
      Email: `employee${i}@example.com`,
      Phone: `555-${String(Math.floor((i * 1234) % 10000)).padStart(4, '0')}`,
      HireDate: '', // Will be calculated in second pass
      Salary: '', // Will be calculated in second pass
      EmploymentType: '', // Will be calculated in second pass
      ReportsTo: 'N/A', // Will be assigned in second pass
      PerformanceRating: '', // Will be calculated in second pass
      Status: statuses[(i * 7) % statuses.length]
    });
  }
  
  // Second pass: assign ReportsTo and calculate other fields based on organizational hierarchy
  for (let i = 0; i < rows.length; i++) {
    const employee = rows[i];
    const empIndex = i + 1; // 1-based
    
    // ========== REPORTING STRUCTURE ==========
    // CEO reports to no one
    if (empIndex === 1) {
      employee.ReportsTo = 'N/A';
    }
    // Department Heads (EMP00002-EMP00007) report to CEO (EMP00001)
    else if (empIndex >= 2 && empIndex <= 7) {
      employee.ReportsTo = 'EMP00001';
    }
    // Managers and Leads (from remaining pool) report to their department head
    else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Find which department this person belongs to
      const deptIndex = departments.indexOf(employee.Department);
      // Department head is at index deptIndex + 2 (since first 2 employees are CEO and start of dept heads)
      const deptHeadIndex = deptIndex + 2;
      employee.ReportsTo = `EMP${String(deptHeadIndex).padStart(5, '0')}`;
    }
    // Individual contributors report to a Manager or Lead in their department
    else {
      // Find Managers and Leads in the same department
      const supervisors = rows.filter((emp, idx) => 
        idx !== i && 
        emp.Department === employee.Department && 
        (emp.Position === 'Manager' || emp.Position === 'Lead')
      );
      
      if (supervisors.length > 0) {
        // Assign to one of the available supervisors - pseudo-random deterministic
        const supervisorSeed = Math.abs((i * 73856093) * 1103515245 + 12345);
        const supervisor = supervisors[supervisorSeed % supervisors.length];
        employee.ReportsTo = supervisor.EmployeeID;
      } else {
        // Fallback: report to department head if no managers/leads exist
        const deptIndex = departments.indexOf(employee.Department);
        if (deptIndex >= 0) {
          const deptHeadIndex = deptIndex + 2;
          employee.ReportsTo = `EMP${String(deptHeadIndex).padStart(5, '0')}`;
        }
      }
    }
    
    // ========== HIRE DATE (Chronological by hierarchy) ==========
    let hireYear: number;
    let hireMonth: number;
    let hireDay: number;
    
    // Deterministic hire date generation based on employee index for UI testing consistency
    if (empIndex === 1) {
      // CEO: hired in 2018
      hireYear = 2018;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: hired in 2019
      hireYear = 2019;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Managers/Leads: hired in 2020
      hireYear = 2020;
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: hired in 2020-2021 - deterministic
      hireYear = 2020 + (i % 2);
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    } else {
      // Individual contributors: hired in 2021-2022 - deterministic
      hireYear = 2021 + (i % 2);
      hireMonth = (i * 3) % 12;
      hireDay = ((i * 7) % 27) + 1;
    }
    employee.HireDate = new Date(hireYear, hireMonth, hireDay).toLocaleDateString();
    
    // ========== EMPLOYMENT TYPE (by position level) ==========
    if (empIndex === 1) {
      // CEO: Full-time only
      employee.EmploymentType = 'Full-time';
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: Full-time only
      employee.EmploymentType = 'Full-time';
    } else if (employee.Position === 'Manager') {
      // Managers: Full-time mostly, 80% chance - deterministic
      employee.EmploymentType = (i % 5) < 4 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Lead') {
      // Leads: Full-time mostly, 85% chance - deterministic
      employee.EmploymentType = (i % 20) < 17 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: Full-time mostly, 90% chance - deterministic
      employee.EmploymentType = (i % 10) < 9 ? 'Full-time' : 'Part-time';
    } else if (employee.Position === 'Developer') {
      // Developers: Varied, 70% Full-time, 20% Part-time, 10% Contract - deterministic
      const rand = i % 10;
      if (rand < 7) employee.EmploymentType = 'Full-time';
      else if (rand < 9) employee.EmploymentType = 'Part-time';
      else employee.EmploymentType = 'Contract';
    } else {
      // Analysts, Coordinators, Associates: More varied - deterministic
      const types = ['Full-time', 'Part-time', 'Contract', 'Intern'];
      employee.EmploymentType = types[i % 4];
    }
    
    // ========== SALARY (by position hierarchy) ==========
    let salary: number;
    
    if (empIndex === 1) {
      // CEO: $200K - $250K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 12345) % 50000 + 200000;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: $150K - $200K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 98765) % 50000 + 150000;
    } else if (employee.Position === 'Manager') {
      // Managers: $100K - $150K - deterministic
      salary = Math.abs((i * 73856093) * 1664525 + 22695) % 50000 + 100000;
    } else if (employee.Position === 'Lead') {
      // Leads: $90K - $140K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 54321) % 50000 + 90000;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: $85K - $130K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 11111) % 45000 + 85000;
    } else if (employee.Position === 'Developer') {
      // Developers: $60K - $100K - deterministic
      salary = Math.abs((i * 73856093) * 1664525 + 33333) % 40000 + 60000;
    } else if (employee.Position === 'Analyst') {
      // Analysts: $55K - $95K - deterministic
      salary = Math.abs((i * 73856093) * 1103515245 + 55555) % 40000 + 55000;
    } else {
      // Coordinators, Associates: $35K - $70K - deterministic
      salary = Math.abs((i * 73856093) * 2654435761 + 77777) % 35000 + 35000;
    }
    employee.Salary = salary.toFixed(2);
    
    // ========== PERFORMANCE RATING (by position with variance) ==========
    let baseRating: number;
    let ratingVariance: number;
    
    if (empIndex === 1) {
      // CEO: typically 4.5-5.0
      baseRating = 4.5;
      ratingVariance = 0.5;
    } else if (empIndex >= 2 && empIndex <= 7) {
      // Dept Heads: typically 4.0-4.8
      baseRating = 4.0;
      ratingVariance = 0.8;
    } else if (employee.Position === 'Manager' || employee.Position === 'Lead') {
      // Managers/Leads: typically 3.5-4.5
      baseRating = 3.5;
      ratingVariance = 1.0;
    } else if (employee.Position === 'Senior Developer') {
      // Senior Devs: typically 3.5-4.5
      baseRating = 3.5;
      ratingVariance = 1.0;
    } else {
      // Individual contributors: typically 2.5-4.5 (more variance)
      baseRating = 2.5;
      ratingVariance = 2.0;
    }
    const ratingHash = Math.abs((i * 73856093) * 1103515245 + 12345);
    const rating = Math.min(5.0, baseRating + (ratingVariance * ((ratingHash / 10000) % 1)));
    employee.PerformanceRating = rating.toFixed(1);
  }
  
  return rows;
};
