-- Source: PostgreSQL 18 documentation, UPDATE (RETURNING clause)
-- Construct: RETURNING WITH (OLD AS ..., NEW AS ...), added in PostgreSQL 18
-- Verdict: accepts
UPDATE t SET a = a + 1
RETURNING WITH (OLD AS before, NEW AS after) before.a, after.a;
