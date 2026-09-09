-- Source: MySQL 8.4 manual, 15.2.13.2 JOIN Clause
-- Construct: STRAIGHT_JOIN as the join operator
-- Verdict: accepts
SELECT * FROM t1 STRAIGHT_JOIN t2 ON t1.id = t2.id;
