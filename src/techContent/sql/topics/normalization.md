# Normalization in SQL

Normalization is the process of organizing data to reduce redundancy and improve data integrity.

## Key Concepts
- Normal Forms (1NF, 2NF, 3NF, BCNF)
- Functional Dependency
- Denormalization

## Real-world Project Example
Designing a normalized database for a library system:
- Separate tables for Books, Authors, and Borrowers
- Use foreign keys to link tables

## More Examples
- Converting a table to 2NF:
  - Remove partial dependencies by creating new tables for repeating groups.
- Example of denormalization:
  - Adding redundant columns for faster reporting.

## Interview Questions & Answers
**Q1: What is normalization?**
A: The process of structuring a database to minimize redundancy and dependency.

**Q2: What are the different normal forms?**
A: 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency), BCNF (advanced 3NF).

**Q3: What is denormalization?**
A: The process of introducing redundancy for performance optimization.

**Q4: Why is normalization important?**
A: It ensures data consistency, reduces redundancy, and improves data integrity.

## Detailed Explanation
Normalization helps maintain a clean and efficient database design, but sometimes denormalization is used for performance in reporting systems.

## References
- [SQL Normalization - W3Schools](https://www.w3schools.com/sql/sql_normalization.asp)
- [Normalization - SQL Server Docs](https://learn.microsoft.com/en-us/sql/relational-databases/database-normalization)
