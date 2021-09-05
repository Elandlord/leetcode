SELECT  employee.name AS "Employee" FROM  employee
INNER JOIN employee managers ON employee.managerId = managers.id
WHERE employee.salary > managers.salary;
