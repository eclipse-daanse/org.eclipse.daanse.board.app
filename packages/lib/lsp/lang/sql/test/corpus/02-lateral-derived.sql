-- Source: PostgreSQL 18 documentation, SELECT (FROM clause)
-- Construct: a LATERAL subquery reading a column of the table to its left
-- Verdict: accepts
SELECT t.a, s.b FROM t, LATERAL (SELECT b FROM t2 WHERE t2.a = t.a LIMIT 1) AS s;
