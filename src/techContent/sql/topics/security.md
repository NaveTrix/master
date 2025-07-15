# SQL Security

## Key Concepts
- Security in SQL involves protecting data from unauthorized access, modification, or destruction.
- Key areas: authentication, authorization, encryption, auditing, and backup.
- Use roles and permissions to control access.

## Real-World Examples

### Example 1: Creating Users and Roles
```sql
CREATE USER analyst IDENTIFIED BY 'password';
CREATE ROLE reporting;
GRANT SELECT ON sales TO reporting;
GRANT reporting TO analyst;
```

### Example 2: Row-Level Security
```sql
-- SQL Server Example
CREATE SECURITY POLICY SalesFilter
ADD FILTER PREDICATE dbo.fn_securitypredicate(salesperson) ON dbo.sales;
```

### Example 3: Encrypting Data
```sql
-- MySQL Example
ALTER TABLE customers MODIFY credit_card VARBINARY(256);
-- Application layer handles encryption/decryption.
```

### Example 4: Auditing Access
```sql
-- Enable auditing (varies by DBMS)
-- Example: SQL Server
ALTER SERVER AUDIT audit_test ADD (DATABASE_OBJECT_PERMISSION_CHANGE_GROUP);
```

## Interview Questions & Answers

**Q1: How do you restrict access to sensitive data in SQL?**
A: Use roles, permissions, and row-level security to restrict access. Encrypt sensitive columns and audit access.

**Q2: What is the principle of least privilege?**
A: Grant users only the minimum permissions necessary to perform their job functions.

**Q3: Real-time: How would you secure a database exposed to the internet?**
A: 1) Use strong authentication, 2) Restrict network access, 3) Encrypt data in transit and at rest, 4) Regularly audit and monitor access, 5) Apply security patches.

**Q4: Real-time: How do you implement row-level security?**
A: Use security policies or views to filter data based on user context. Example in SQL Server shown above.

**Q5: How can you audit changes to a table?**
A: Use triggers or built-in auditing features to log changes to a separate audit table.

## References
- [SQL Security - W3Schools](https://www.w3schools.com/sql/sql_security.asp)
- [SQL Server Docs: Security](https://docs.microsoft.com/en-us/sql/relational-databases/security/)
- [PostgreSQL Docs: Security](https://www.postgresql.org/docs/current/security.html)
