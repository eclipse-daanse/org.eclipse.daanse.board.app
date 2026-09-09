-- Window functions: a running total, a rank within each family, and a
-- month-on-month delta. None of these collapse rows the way GROUP BY does.
SELECT
    pc.product_family,
    t.month_of_year,
    SUM(s.store_sales)                                       AS sales,
    SUM(SUM(s.store_sales)) OVER w                           AS running_total,
    RANK()      OVER (PARTITION BY pc.product_family ORDER BY SUM(s.store_sales) DESC) AS rank_in_family,
    LAG(SUM(s.store_sales), 1) OVER w                        AS previous_month
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
    JOIN time_by_day t ON s.time_id = t.time_id
GROUP BY pc.product_family, t.month_of_year
WINDOW w AS (
    PARTITION BY pc.product_family
    ORDER BY t.month_of_year
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
)
ORDER BY pc.product_family, t.month_of_year;
