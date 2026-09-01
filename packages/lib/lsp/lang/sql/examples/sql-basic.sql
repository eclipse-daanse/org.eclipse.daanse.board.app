-- The simplest useful query against the cube's relational source:
-- what a fact row looks like.
SELECT
    s.product_id,
    s.customer_id,
    s.store_sales,
    s.unit_sales
FROM sales_fact_1997 s
WHERE s.store_sales > 10
ORDER BY s.store_sales DESC
LIMIT 20;
