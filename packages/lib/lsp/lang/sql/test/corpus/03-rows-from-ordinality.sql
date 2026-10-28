-- Source: PostgreSQL 18 documentation, SELECT (table functions)
-- Construct: ROWS FROM with a column definition list and WITH ORDINALITY
-- Verdict: accepts
SELECT * FROM ROWS FROM (json_to_record('{"a": 1}') AS (a int)) WITH ORDINALITY AS g(a, ord);
