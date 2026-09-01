-- Aggregation with a grouped filter and a subtotal row, which is what a
-- cube measure is underneath.
SELECT
    pc.product_family,
    pc.product_department,
    SUM(s.store_sales)                     AS sales,
    SUM(s.store_cost)                      AS cost,
    SUM(s.store_sales) - SUM(s.store_cost) AS margin,
    COUNT(*)                               AS fact_rows,
    COUNT(DISTINCT s.customer_id)          AS customers
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family, pc.product_department WITH ROLLUP
HAVING SUM(s.store_sales) > 1000
ORDER BY sales DESC;
