-- Source: PostgreSQL 18 documentation, SELECT (DISTINCT clause)
-- Construct: DISTINCT ON expressions that do not match the leading ORDER BY
-- Verdict: rejects 42P10
SELECT DISTINCT ON (a) a, b FROM t ORDER BY b;
