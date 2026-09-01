-- Source: MySQL 8.4 manual, 15.2.13.2 JOIN Clause
-- Construct: a parenthesised table reference list as a join operand
-- Verdict: accepts
SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4) ON t1.a = t2.a;
