-- Source: PostgreSQL 18 documentation, SELECT (LIMIT clause)
-- Construct: OFFSET ... ROWS and FETCH FIRST ... WITH TIES
-- Verdict: accepts
SELECT a FROM t ORDER BY a OFFSET 5 ROWS FETCH FIRST 10 ROWS WITH TIES;
