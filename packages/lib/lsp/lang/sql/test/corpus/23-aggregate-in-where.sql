-- Source: PostgreSQL 18 documentation, 4.2.7 Aggregate expressions
-- Construct: an aggregate in WHERE, which belongs in HAVING
-- Verdict: rejects 42803
SELECT a FROM t WHERE sum(b) > 1;
