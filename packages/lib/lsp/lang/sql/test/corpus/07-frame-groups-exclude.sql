-- Source: PostgreSQL 18 documentation, SELECT (WINDOW clause)
-- Construct: a GROUPS frame with an EXCLUDE clause
-- Verdict: accepts
SELECT a, sum(b) OVER (ORDER BY a GROUPS BETWEEN 1 PRECEDING AND 1 FOLLOWING EXCLUDE TIES) FROM t;
