# Common Table Expressions (CTE) in SQL

## Key Concepts
- CTEs provide a way to define temporary result sets that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement.
- Syntax: `WITH cte_name AS (SELECT ...)`
- Useful for breaking complex queries into simpler parts, recursion, and improving readability.

## Real-World Examples

### Example 1: Simple CTE for Filtering
```sql
WITH high_salary AS (
  SELECT * FROM employees WHERE salary > 100000
)
SELECT * FROM high_salary WHERE department = 'Engineering';
```

### Example 2: Recursive CTE for Hierarchies
```sql
WITH RECURSIVE org_chart AS (
  SELECT employee_id, manager_id, name, 1 AS level
  FROM employees
  WHERE manager_id IS NULL
  UNION ALL
  SELECT e.employee_id, e.manager_id, e.name, oc.level + 1
  FROM employees e
  JOIN org_chart oc ON e.manager_id = oc.employee_id
)
SELECT * FROM org_chart;
```

### Example 3: CTE for Aggregation
```sql
WITH sales_by_region AS (
  SELECT region, SUM(amount) AS total_sales
  FROM sales
  GROUP BY region
)
SELECT * FROM sales_by_region WHERE total_sales > 10000;
```

## Interview Questions & Answers

**Q1: What is a CTE and why would you use it?**
A: A CTE (Common Table Expression) is a temporary result set that can be referenced within a query. It improves readability, allows for recursion, and can simplify complex queries.

**Q2: How do recursive CTEs work?**
A: Recursive CTEs reference themselves and are used for hierarchical or tree-structured data. They have an anchor member (base case) and a recursive member (self-reference).

**Q3: Real-time: How would you find all subordinates of a manager in an employee table?**
A: Use a recursive CTE to traverse the hierarchy:
```sql
WITH RECURSIVE subordinates AS (
  SELECT employee_id, manager_id FROM employees WHERE manager_id = 101
  UNION ALL
  SELECT e.employee_id, e.manager_id FROM employees e
  JOIN subordinates s ON e.manager_id = s.employee_id
)
SELECT * FROM subordinates;
```

**Q4: Real-time: How can you use a CTE to improve query performance?**
A: By breaking down complex queries into smaller, reusable parts, CTEs can make queries easier to optimize and maintain. However, performance depends on the database engine's optimization.

**Q5: Can you reference a CTE multiple times in a query?**
A: Yes, a CTE can be referenced multiple times within the same query, making it useful for DRY (Don't Repeat Yourself) principles.

## References
- [CTE in SQL - W3Schools](https://www.w3schools.com/sql/sql_cte.asp)
- [Recursive CTEs - Mode](https://mode.com/sql-tutorial/sql-recursive-ctes/)
- [SQL Server Docs: CTEs](https://docs.microsoft.com/en-us/sql/t-sql/queries/with-common-table-expression-transact-sql)
