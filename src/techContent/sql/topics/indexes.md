# Indexes in SQL

Indexes improve the speed of data retrieval operations on a database table.

## Key Concepts
- What is an Index?
- Types: Clustered, Non-Clustered, Unique, Composite
- Creating and Dropping Indexes
- Index Maintenance

## Real-world Project Example
Speeding up search queries on a large customer table by creating an index on the LastName column:
```sql
CREATE INDEX idx_lastname ON Customers(LastName);
```

## More Examples
- Composite index for faster multi-column search:
```sql
CREATE INDEX idx_name_city ON Customers(FirstName, City);
```
- Unique index to enforce uniqueness:
```sql
CREATE UNIQUE INDEX idx_email ON Customers(Email);
```

## Interview Questions & Answers
**Q1: What is the purpose of an index in SQL?**
A: To speed up data retrieval by providing quick access paths to rows in a table.

**Q2: What is the difference between clustered and non-clustered indexes?**
A: A clustered index determines the physical order of data in the table; a non-clustered index is a separate structure with pointers to the data.

**Q3: Can a table have multiple clustered indexes?**
A: No, only one clustered index per table, but multiple non-clustered indexes are allowed.

**Q4: How do indexes affect write operations?**
A: Indexes speed up reads but can slow down inserts, updates, and deletes due to maintenance overhead.

## Detailed Explanation
Indexes are like the index in a book: they help you find information quickly. However, too many indexes can slow down data modification operations because each index must be updated when the data changes.

## References
- [SQL Indexes - W3Schools](https://www.w3schools.com/sql/sql_create_index.asp)
- [Indexes - SQL Server Docs](https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-index-design-guide)
