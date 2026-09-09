-- The expression grammar: CASE, CAST, the full operator precedence chain,
-- string concatenation under PIPES_AS_CONCAT, and quoting.
--
-- Note "state_province" - with ANSI_QUOTES on, double quotes delimit an
-- identifier, not a string. A string is written in single quotes.
SELECT
    `order`                                             AS quoted_reserved_word,
    "state_province"                                    AS ansi_quoted,
    c.fname || ' ' || c.lname                           AS full_name,
    CAST(s.store_sales AS DECIMAL(10, 2))               AS sales,
    CASE
        WHEN s.store_sales > 100 THEN 'large'
        WHEN s.store_sales > 10  THEN 'medium'
        ELSE 'small'
    END                                                 AS bucket,
    s.store_sales - s.store_cost * 2 + 1                AS precedence_check,
    DATE_FORMAT(t.the_date, '%Y-%m')                    AS period,
    LEFT(c.lname, 3)                                    AS initials,
    c.city IS NOT NULL AND c.country <> 'Mexico'        AS predicate
FROM sales_fact_1997 s
    JOIN customer c ON s.customer_id = c.customer_id
    JOIN time_by_day t ON s.time_id = t.time_id
WHERE c.lname LIKE 'A%' ESCAPE '!'
  AND c.city NOT IN ('Acapulco', 'Mexico City')
  AND s.unit_sales BETWEEN 1 AND 5;
