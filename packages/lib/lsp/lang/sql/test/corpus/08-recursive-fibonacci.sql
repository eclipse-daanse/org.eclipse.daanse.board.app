-- Source: MySQL 8.4 manual, 15.2.20 WITH (Common Table Expressions)
-- Construct: recursive CTE with two seed columns
-- Verdict: accepts
WITH RECURSIVE fibonacci (n, fib_n, next_fib_n) AS (
  SELECT 1, 0, 1
  UNION ALL
  SELECT n + 1, next_fib_n, fib_n + next_fib_n FROM fibonacci WHERE n < 10
)
SELECT * FROM fibonacci;
