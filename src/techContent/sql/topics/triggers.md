# Triggers in SQL

A trigger is a special kind of stored procedure that automatically executes in response to certain events on a table or view.

## Key Concepts
- AFTER, BEFORE, INSTEAD OF Triggers
- Row-level vs. Statement-level Triggers
- Use Cases: Auditing, Validation, Automation

## Real-world Project Example
Auditing changes to a table:
```sql
CREATE TRIGGER trg_Audit
ON Employees
AFTER UPDATE
AS
INSERT INTO AuditLog(EmployeeID, OldSalary, NewSalary, ChangeDate)
SELECT d.EmployeeID, d.Salary, i.Salary, GETDATE()
FROM deleted d INNER JOIN inserted i ON d.EmployeeID = i.EmployeeID;
```

## More Examples
- Preventing deletes on a table:
```sql
CREATE TRIGGER trg_PreventDelete
ON Orders
INSTEAD OF DELETE
AS
BEGIN
    RAISERROR('Deletes are not allowed.', 16, 1);
END;
```
- Validating data before insert:
```sql
CREATE TRIGGER trg_ValidateSalary
ON Employees
FOR INSERT
AS
IF EXISTS (SELECT * FROM inserted WHERE Salary < 0)
    ROLLBACK TRANSACTION;
```

## Interview Questions & Answers
**Q1: What is a trigger in SQL?**
A: A database object that automatically executes code in response to data changes.

**Q2: What are common use cases for triggers?**
A: Auditing, enforcing business rules, and automating tasks.

**Q3: What is the difference between AFTER and INSTEAD OF triggers?**
A: AFTER triggers run after the event; INSTEAD OF triggers replace the event action.

**Q4: Can triggers cause performance issues?**
A: Yes, excessive or poorly written triggers can slow down data modifications.

## Detailed Explanation
Triggers are powerful for automation and enforcing rules, but should be used judiciously to avoid complexity and performance issues.

## References
- [SQL Triggers - W3Schools](https://www.w3schools.com/sql/sql_triggers.asp)
- [Triggers - SQL Server Docs](https://learn.microsoft.com/en-us/sql/relational-databases/triggers/dml-triggers)
