-- SQL/JSON. These are syntax rather than ordinary function calls: their
-- arguments are written with keywords, and JSON_TABLE is a table function that
-- turns a document into rows.
--
-- The constructors first, then the query functions, then JSON_TABLE.
SELECT
    JSON_OBJECT(
        'family'     VALUE pc.product_family,
        'department' VALUE pc.product_department
        ABSENT ON NULL
        RETURNING jsonb
    )                                                        AS product_json,
    JSON_ARRAY(pc.product_family, pc.product_department)     AS hierarchy_json,
    JSON_ARRAYAGG(s.store_sales ORDER BY s.store_sales DESC) AS sales_json,
    p.attributes IS JSON OBJECT                              AS attributes_well_formed,
    JSON_VALUE(
        p.attributes,
        '$.weight'
        RETURNING numeric
        DEFAULT 0 ON EMPTY
        ERROR ON ERROR
    )                                                        AS weight,
    JSON_QUERY(
        p.attributes,
        '$.tags[*]'
        WITH CONDITIONAL ARRAY WRAPPER
        OMIT QUOTES ON SCALAR STRING
    )                                                        AS tags,
    JSON_EXISTS(p.attributes, '$.discontinued')              AS has_discontinued_flag
FROM sales_fact_1997 s
    JOIN product p ON s.product_id = p.product_id
    JOIN product_class pc ON p.product_class_id = pc.product_class_id
GROUP BY pc.product_family, pc.product_department, p.attributes;

-- JSON_TABLE in the FROM clause, with an ordinality column, a nested path and
-- an EXISTS column.
SELECT p.product_id, tags.ordinality, tags.tag, tags.locale, tags.is_primary
FROM product p,
     JSON_TABLE(
         p.attributes,
         '$' AS product_path
         COLUMNS (
             ordinality FOR ORDINALITY,
             tag        text     PATH '$.tag',
             is_primary boolean  EXISTS PATH '$.primary',
             NESTED PATH '$.labels[*]' COLUMNS (
                 locale text PATH '$.locale'
             )
         )
         EMPTY ARRAY ON ERROR
     ) AS tags
WHERE p.attributes IS JSON;
