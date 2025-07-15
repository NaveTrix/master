# Subqueries in SQL

A subquery is a query nested inside another query.

## Key Concepts
- Scalar, Correlated, and Nested Subqueries
- Using Subqueries in SELECT, FROM, WHERE, and HAVING

## Real-world Project Example
Finding customers who placed orders over $1000:
```sql
SELECT Name FROM Customers
WHERE CustomerID IN (
    SELECT CustomerID FROM Orders WHERE Total > 1000
);
```

## Interview Questions & Answers
**Q1: What is a subquery?**
A: A query within another query, used to return data for use in the outer query.

**Q2: What is a correlated subquery?**
A: A subquery that references columns from the outer query.

**Q3: Where can you use subqueries in SQL?**
A: In SELECT, FROM, WHERE, and HAVING clauses.

## References
- [SQL Subqueries - W3Schools](https://www.w3schools.com/sql/sql_subqueries.asp)
- [Subqueries - SQL Server Docs](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-subqueries-transact-sql)
