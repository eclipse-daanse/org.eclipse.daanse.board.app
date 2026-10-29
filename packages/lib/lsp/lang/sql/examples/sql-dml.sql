-- Data manipulation. The grammar covers the INSERT, UPDATE, DELETE and MERGE
-- pages, so the examples do too.
--
-- RETURNING is what makes a data-modifying CTE useful: a statement that
-- changes rows can hand them straight back.
INSERT INTO product_class (product_class_id, product_subcategory, product_category, product_department, product_family)
VALUES
    (1000, 'Fresh Fruit', 'Fruit', 'Produce', 'Food'),
    (1001, 'Fresh Herbs', 'Herbs', 'Produce', 'Food')
ON CONFLICT (product_class_id) DO UPDATE
    SET product_subcategory = EXCLUDED.product_subcategory
RETURNING product_class_id, product_subcategory;

INSERT INTO sales_summary (product_family, sales)
SELECT pc.product_family, SUM(s.store_sales)
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family;

-- UPDATE ... FROM joins the rows to change against another table.
UPDATE product p
SET srp = p.srp * 1.05
FROM product_class pc
WHERE p.product_class_id = pc.product_class_id
  AND pc.product_family = 'Food'
RETURNING p.product_id, p.srp;

DELETE FROM sales_fact_1997 s
USING product p
WHERE s.product_id = p.product_id
  AND s.store_sales <= 0
RETURNING s.product_id;

-- MERGE decides per row which of the three actions applies.
MERGE INTO sales_summary t
USING (
    SELECT pc.product_family, SUM(s.store_sales) AS sales
    FROM sales_fact_1997 s
        JOIN product p ON s.product_id = p.product_id
        JOIN product_class pc ON p.product_class_id = pc.product_class_id
    GROUP BY pc.product_family
) AS src ON t.product_family = src.product_family
WHEN MATCHED AND src.sales = 0 THEN
    DELETE
WHEN MATCHED THEN
    UPDATE SET sales = src.sales
WHEN NOT MATCHED THEN
    INSERT (product_family, sales) VALUES (src.product_family, src.sales);
