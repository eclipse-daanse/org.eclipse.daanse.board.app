-- Source: PostgreSQL 18 documentation, SELECT (locking clause)
-- Construct: FOR NO KEY UPDATE OF ... SKIP LOCKED
-- Verdict: accepts
SELECT a FROM t FOR NO KEY UPDATE OF t SKIP LOCKED;
