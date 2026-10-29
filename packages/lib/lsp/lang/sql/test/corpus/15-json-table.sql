-- Source: PostgreSQL 18 documentation, 9.16.4 JSON_TABLE
-- Construct: JSON_TABLE as a table function, with FOR ORDINALITY, EXISTS and NESTED PATH
-- Verdict: accepts
SELECT jt.*
FROM t,
     JSON_TABLE(t.j, '$' AS root
         COLUMNS (
             n FOR ORDINALITY,
             a text PATH '$.a',
             has_b boolean EXISTS PATH '$.b',
             NESTED PATH '$.c[*]' COLUMNS (c text PATH '$.c')
         )
         EMPTY ARRAY ON ERROR
     ) AS jt;
