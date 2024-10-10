export default function iterateThroughObject(reportWithIterator) {
  const employees = [];

  // Use the iterator to collect employee names into an array
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the names with ' | ' and return the result
  return employees.join(' | ');
}
