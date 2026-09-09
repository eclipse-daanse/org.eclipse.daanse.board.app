-- Source: MySQL 8.4 manual, 14.20.2 Window Function Concepts and Syntax
-- Construct: a named window and an inline one in the same select list
-- Verdict: accepts
SELECT
  val,
  ROW_NUMBER() OVER w AS row_num,
  SUM(val)     OVER (ORDER BY val ROWS UNBOUNDED PRECEDING) AS running
FROM numbers
WINDOW w AS (ORDER BY val);
