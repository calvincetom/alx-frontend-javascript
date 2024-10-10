export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const allEmployeesArray = [];

  // Collect all employees from each department into a single array
  for (const department in employees) {
    allEmployeesArray.push(...employees[department]);
  }

  // Return an iterator for the array of employees
  return allEmployeesArray[Symbol.iterator]();
}
