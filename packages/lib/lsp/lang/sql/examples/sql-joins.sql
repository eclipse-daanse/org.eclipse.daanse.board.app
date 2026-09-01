-- The star schema, joined out. This is roughly the shape Mondrian itself
-- generates when it resolves an MDX query against FoodMart.
SELECT
    pc.product_family,
    pc.product_department,
    t.the_year,
    t.quarter,
    st.store_country,
    s.store_sales
FROM sales_fact_1997 s
    INNER JOIN product p ON s.product_id = p.product_id
    INNER JOIN product_class pc ON p.product_class_id = pc.product_class_id
    INNER JOIN time_by_day t ON s.time_id = t.time_id
    LEFT OUTER JOIN store st ON s.store_id = st.store_id
    LEFT JOIN promotion pr USING (promotion_id)
WHERE t.the_year = 1997
  AND pc.product_family IN ('Food', 'Drink');
