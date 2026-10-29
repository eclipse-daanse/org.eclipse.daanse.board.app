-- Aggregation with subtotals, which is what a cube measure is underneath.
--
-- ROLLUP is a grouping element in PostgreSQL rather than a suffix on GROUP BY,
-- and FILTER narrows one aggregate without narrowing the query.
SELECT
    pc.product_family,
    pc.product_department,
    SUM(s.store_sales)                                    AS sales,
    SUM(s.store_cost)                                     AS cost,
    SUM(s.store_sales) - SUM(s.store_cost)                AS margin,
    SUM(s.store_sales) FILTER (WHERE s.unit_sales > 3)    AS bulk_sales,
    COUNT(*)                                              AS fact_rows,
    COUNT(DISTINCT s.customer_id)                         AS customers,
    GROUPING(pc.product_department)                       AS is_subtotal
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY ROLLUP (pc.product_family, pc.product_department)
HAVING SUM(s.store_sales) > 1000
ORDER BY sales DESC;
