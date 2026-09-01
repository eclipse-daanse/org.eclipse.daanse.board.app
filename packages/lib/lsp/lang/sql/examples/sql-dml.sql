-- Data manipulation. Nothing here is sent anywhere - see the note on the Run
-- button - but the grammar covers the INSERT, UPDATE and DELETE pages, so the
-- examples should too.
INSERT INTO product_class (product_class_id, product_subcategory, product_category, product_department, product_family)
VALUES
    (1000, 'Fresh Fruit', 'Fruit', 'Produce', 'Food'),
    (1001, 'Fresh Herbs', 'Herbs', 'Produce', 'Food') AS new
ON DUPLICATE KEY UPDATE product_subcategory = new.product_subcategory;

INSERT INTO sales_summary (product_family, sales)
SELECT pc.product_family, SUM(s.store_sales)
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family;

UPDATE product
SET SRP = SRP * 1.05
WHERE product_class_id = 1000
ORDER BY product_id
LIMIT 100;

DELETE FROM sales_fact_1997
WHERE store_sales <= 0
LIMIT 10;
