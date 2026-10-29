-- UNION, INTERSECT and EXCEPT over the same dimension, plus a scalar
-- subquery, an EXISTS test and DISTINCT ON.
--
-- DISTINCT ON keeps the first row of each group as the ORDER BY leaves them,
-- which is PostgreSQL's answer to "the latest row per customer".
--
-- Note the parentheses: ORDER BY belongs to the whole set operation, so an
-- operand that needs its own ordering has to say so by being parenthesised.
(
    SELECT DISTINCT ON (c.customer_id)
        c.customer_id,
        c.fname || ' ' || c.lname AS customer,
        'high value'              AS segment
    FROM customer c
    WHERE c.customer_id IN (
            SELECT s.customer_id
            FROM sales_fact_1997 s
            GROUP BY s.customer_id
            HAVING SUM(s.store_sales) > (SELECT AVG(store_sales) * 100 FROM sales_fact_1997)
        )
    ORDER BY c.customer_id, c.lname
)
UNION ALL
(
    SELECT c.customer_id, c.fname || ' ' || c.lname, 'lapsed'
    FROM customer c
    WHERE NOT EXISTS (
        SELECT 1 FROM sales_fact_1997 s WHERE s.customer_id = c.customer_id
    )
)
ORDER BY segment, customer;

-- The other two set operators, and the difference INTERSECT binding tighter
-- than UNION makes.
SELECT customer_id FROM sales_fact_1997
INTERSECT
SELECT customer_id FROM sales_fact_1998
EXCEPT
SELECT customer_id FROM customer WHERE country = 'Mexico'
ORDER BY customer_id;
