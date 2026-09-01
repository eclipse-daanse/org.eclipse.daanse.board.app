-- Source: MySQL 8.4 manual, 15.2.13 SELECT Statement
-- Construct: FOR UPDATE OF ... SKIP LOCKED
-- Verdict: accepts
SELECT * FROM t1 JOIN t2 ON t1.id = t2.id FOR UPDATE OF t1 SKIP LOCKED;
