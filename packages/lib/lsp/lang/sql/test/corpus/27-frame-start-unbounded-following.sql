-- Source: PostgreSQL 18 documentation, 4.2.8 Window function calls
-- Construct: UNBOUNDED FOLLOWING as a frame start, which cannot begin a frame
-- Verdict: rejects 42P20
SELECT sum(b) OVER (ORDER BY a ROWS BETWEEN UNBOUNDED FOLLOWING AND UNBOUNDED FOLLOWING) FROM t;
