-- A common table expression naming an intermediate result, and a recursive
-- one generating the twelve months of 1997 without reading a table.
WITH RECURSIVE months (n) AS (
    SELECT 1
    UNION ALL
    SELECT n + 1 FROM months WHERE n < 12
),
monthly_sales AS (
    SELECT
        t.month_of_year AS month_of_year,
        SUM(s.store_sales) AS sales
    FROM sales_fact_1997 s
        JOIN time_by_day t ON s.time_id = t.time_id
    WHERE t.the_year = 1997
    GROUP BY t.month_of_year
)
SELECT
    m.n,
    COALESCE(ms.sales, 0) AS sales
FROM months m
    LEFT JOIN monthly_sales ms ON ms.month_of_year = m.n
ORDER BY m.n;
