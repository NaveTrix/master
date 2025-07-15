# Functions in SQL

A function is a database object that returns a single value or a table, based on input parameters.

## Key Concepts
- Scalar Functions
- Table-Valued Functions
- Deterministic vs. Non-Deterministic
- Built-in vs. User-Defined Functions

## Real-world Project Example
Creating a scalar function to calculate tax:
```sql
CREATE FUNCTION CalculateTax(@Amount DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Amount * 0.18;
END;
```

## More Examples
- Table-valued function:
```sql
CREATE FUNCTION GetEmployeesByDept(@Dept VARCHAR(50))
RETURNS TABLE
AS
RETURN (
    SELECT * FROM Employees WHERE Department = @Dept
);
```
- Using built-in functions:
```sql
SELECT UPPER(Name), GETDATE() FROM Employees;
```

## Interview Questions & Answers
**Q1: What is a function in SQL?**
A: A reusable database object that returns a value or table, used in queries and calculations.

**Q2: What is the difference between a function and a stored procedure?**
A: Functions return a value and can be used in SELECT statements; procedures can perform actions but do not return values directly.

**Q3: What are scalar and table-valued functions?**
A: Scalar functions return a single value; table-valued functions return a table.

**Q4: Can functions modify database state?**
A: No, user-defined functions cannot modify data or database state.

## Detailed Explanation
Functions encapsulate logic for reuse and can simplify queries. They are best for calculations and returning derived data.

## References
- [SQL Functions - W3Schools](https://www.w3schools.com/sql/sql_functions.asp)
- [Functions - SQL Server Docs](https://learn.microsoft.com/en-us/sql/t-sql/functions/functions)
