-- Source: PostgreSQL 18 documentation, SELECT (ORDER BY clause)
-- Construct: an ordinal position past the end of the select list
-- Verdict: rejects 42P10
SELECT a, b FROM t ORDER BY 3;
