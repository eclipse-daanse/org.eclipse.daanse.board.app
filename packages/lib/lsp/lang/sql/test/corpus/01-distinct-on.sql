-- Source: PostgreSQL 18 documentation, SELECT (DISTINCT clause)
-- Construct: DISTINCT ON, which keeps the first row of each group
-- Verdict: accepts
SELECT DISTINCT ON (a) a, b FROM t ORDER BY a, b;
