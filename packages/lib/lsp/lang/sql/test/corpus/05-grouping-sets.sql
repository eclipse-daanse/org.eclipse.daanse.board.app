-- Source: PostgreSQL 18 documentation, SELECT (GROUP BY clause)
-- Construct: GROUPING SETS, CUBE and the empty grouping set
-- Verdict: accepts
SELECT a, b, sum(c) FROM t GROUP BY GROUPING SETS ((a, b), CUBE (a), ());
