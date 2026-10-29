-- The star schema, joined out. This is roughly the shape the OLAP engine
-- itself generates when it resolves an MDX query against FoodMart.
--
-- The last join is LATERAL: its subquery may refer to columns of the tables
-- to its left, which a plain derived table cannot.
SELECT
    pc.product_family,
    pc.product_department,
    t.the_year,
    t.quarter,
    st.store_country,
    s.store_sales,
    top_promo.media_type
FROM sales_fact_1997 s
    INNER JOIN product p ON s.product_id = p.product_id
    INNER JOIN product_class pc ON p.product_class_id = pc.product_class_id
    INNER JOIN time_by_day t ON s.time_id = t.time_id
    LEFT OUTER JOIN store st ON s.store_id = st.store_id
    LEFT JOIN promotion pr USING (promotion_id)
    LEFT JOIN LATERAL (
        SELECT pr2.media_type
        FROM promotion pr2
        WHERE pr2.promotion_id = s.promotion_id
        ORDER BY pr2.cost DESC
        LIMIT 1
    ) AS top_promo ON true
WHERE t.the_year = 1997
  AND pc.product_family IN ('Food', 'Drink');
