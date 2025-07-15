# Stored Procedures in SQL

A stored procedure is a precompiled collection of SQL statements stored in the database.

## Key Concepts
- Creating and Executing Procedures
- Input and Output Parameters
- Error Handling
- Benefits: Reusability, Security, Performance

## Real-world Project Example
Creating a procedure to update employee salary:
```sql
CREATE PROCEDURE UpdateSalary @EmpID INT, @NewSalary DECIMAL(10,2)
AS
BEGIN
    UPDATE Employees SET Salary = @NewSalary WHERE EmployeeID = @EmpID;
END;
```

## More Examples
- Procedure with output parameter:
```sql
CREATE PROCEDURE GetEmployeeName @EmpID INT, @EmpName NVARCHAR(100) OUTPUT
AS
BEGIN
    SELECT @EmpName = Name FROM Employees WHERE EmployeeID = @EmpID;
END;
```
- Error handling in procedures:
```sql
BEGIN TRY
    -- SQL statements
END TRY
BEGIN CATCH
    -- Error handling
END CATCH
```

## Interview Questions & Answers
**Q1: What is a stored procedure?**
A: A set of SQL statements stored in the database, executed as a program.

**Q2: What are the advantages of stored procedures?**
A: Improved performance, security, reusability, and maintainability.

**Q3: How do you pass parameters to a procedure?**
A: Use input/output parameters in the procedure definition.

**Q4: How do you handle errors in stored procedures?**
A: Use TRY...CATCH blocks for error handling.

## Detailed Explanation
Stored procedures encapsulate business logic, reduce network traffic, and can enforce security by restricting direct table access.

## References
- [SQL Stored Procedures - W3Schools](https://www.w3schools.com/sql/sql_stored_procedures.asp)
- [Stored Procedures - SQL Server Docs](https://learn.microsoft.com/en-us/sql/relational-databases/stored-procedures/stored-procedures-database-engine)
