# Data Manipulation Language (DML)

DML statements are used to manage data within tables.

## Key Concepts
- INSERT, UPDATE, DELETE
- Bulk Operations
- Transactions

## Real-world Project Example
Updating the salary of an employee:
```sql
UPDATE Employees SET Salary = 80000 WHERE EmployeeID = 101;
```

## Interview Questions & Answers
**Q1: What is DML?**
A: Data Manipulation Language, used to insert, update, and delete data in tables.

**Q2: How do you delete all rows from a table?**
A: Use DELETE FROM table_name; (or TRUNCATE for faster removal without logging each row).

**Q3: How do you insert multiple rows at once?**
A: Use multiple VALUES clauses in a single INSERT statement.

## References
- [SQL DML - W3Schools](https://www.w3schools.com/sql/sql_ref_dml.asp)
- [SQL INSERT - SQL Server Docs](https://learn.microsoft.com/en-us/sql/t-sql/statements/insert-transact-sql)
