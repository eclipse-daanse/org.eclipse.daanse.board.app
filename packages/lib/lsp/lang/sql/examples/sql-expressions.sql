-- The expression grammar: casts, CASE, the operator precedence chain, string
-- concatenation, arrays, and the three ways PostgreSQL writes a quoted thing.
--
-- Note "state_province": double quotes delimit an identifier and single quotes
-- a string. That is the only reading PostgreSQL has - no setting changes it.
SELECT
    "order"                                             AS quoted_reserved_word,
    "state_province"                                    AS quoted_identifier,
    c.fname || ' ' || c.lname                           AS full_name,
    s.store_sales::numeric(10, 2)                       AS sales_cast,
    CAST(s.unit_sales AS integer)                       AS units,
    CASE
        WHEN s.store_sales > 100 THEN 'large'
        WHEN s.store_sales > 10  THEN 'medium'
        ELSE 'small'
    END                                                 AS bucket,
    s.store_sales - s.store_cost * 2 + 1                AS precedence_check,
    to_char(t.the_date, 'YYYY-MM')                      AS period,
    substring(c.lname FROM 1 FOR 3)                     AS initials,
    trim(BOTH ' ' FROM c.city)                          AS city,
    extract(QUARTER FROM t.the_date)                    AS quarter,
    ARRAY[pc.product_family, pc.product_department]     AS hierarchy,
    (ARRAY['a', 'b', 'c'])[2]                           AS second_element,
    t.the_date AT TIME ZONE 'UTC'                       AS utc_date,
    c.city IS DISTINCT FROM c.country                   AS differs,
    E'tab\there'                                        AS escaped_string,
    $sql$a 'quoted' string, verbatim$sql$               AS dollar_quoted
FROM sales_fact_1997 s
    JOIN customer c ON s.customer_id = c.customer_id
    JOIN time_by_day t ON s.time_id = t.time_id
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
WHERE c.lname LIKE 'A%' ESCAPE '!'
  AND c.city NOT IN ('Acapulco', 'Mexico City')
  AND s.unit_sales BETWEEN SYMMETRIC 5 AND 1
  AND c.fname ~ '^[A-M]';
