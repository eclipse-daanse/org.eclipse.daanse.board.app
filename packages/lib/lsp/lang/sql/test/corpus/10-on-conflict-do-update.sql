-- Source: PostgreSQL 18 documentation, INSERT
-- Construct: ON CONFLICT with an index predicate, DO UPDATE and RETURNING
-- Verdict: accepts
INSERT INTO t (a, b) VALUES (1, 2)
ON CONFLICT (a) WHERE a > 0 DO UPDATE SET b = EXCLUDED.b
RETURNING a, b;
