-- Source: PostgreSQL 18 documentation, 9.16.3 SQL/JSON query functions
-- Construct: JSON_VALUE, JSON_QUERY and JSON_EXISTS with PASSING and ON ERROR
-- Verdict: accepts
SELECT JSON_VALUE(t.j, '$.a' PASSING 1 AS x RETURNING int DEFAULT 0 ON EMPTY ERROR ON ERROR),
       JSON_QUERY(t.j, '$.b[*]' WITH UNCONDITIONAL ARRAY WRAPPER KEEP QUOTES),
       JSON_EXISTS(t.j, '$.c' FALSE ON ERROR)
FROM t;
