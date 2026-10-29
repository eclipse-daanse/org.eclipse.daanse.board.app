-- Source: PostgreSQL 18 documentation, SELECT (TABLESAMPLE)
-- Construct: a sampling method with REPEATABLE seed
-- Verdict: accepts
SELECT a FROM t TABLESAMPLE BERNOULLI (10) REPEATABLE (42);
