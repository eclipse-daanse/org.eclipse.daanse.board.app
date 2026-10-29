-- Source: PostgreSQL 18 documentation, SELECT (FROM clause)
-- Construct: the same alias given to two tables in one FROM
-- Verdict: rejects 42712
SELECT x.a FROM t1 AS x, t2 AS x;
