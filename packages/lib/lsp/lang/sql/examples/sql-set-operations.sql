-- UNION, INTERSECT and EXCEPT over the same dimension, plus a scalar
-- subquery and an EXISTS test.
SELECT c.customer_id, CONCAT(c.fname, ' ', c.lname) AS customer, 'high value' AS segment
FROM customer c
WHERE c.customer_id IN (
        SELECT s.customer_id
        FROM sales_fact_1997 s
        GROUP BY s.customer_id
        HAVING SUM(s.store_sales) > (SELECT AVG(store_sales) * 100 FROM sales_fact_1997)
    )
UNION ALL
SELECT c.customer_id, CONCAT(c.fname, ' ', c.lname), 'lapsed'
FROM customer c
WHERE NOT EXISTS (SELECT 1 FROM sales_fact_1997 s WHERE s.customer_id = c.customer_id)
ORDER BY segment, customer
LIMIT 100;
