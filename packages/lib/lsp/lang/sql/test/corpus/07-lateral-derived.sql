-- Source: MySQL 8.4 manual, 15.2.15.9 Lateral Derived Tables
-- Construct: LATERAL derived table referring to a preceding FROM item
-- Verdict: accepts
SELECT salesperson.name, max_sale.amount
FROM salesperson,
     LATERAL (SELECT MAX(amount) AS amount FROM all_sales
              WHERE all_sales.salesperson_id = salesperson.id) AS max_sale;
