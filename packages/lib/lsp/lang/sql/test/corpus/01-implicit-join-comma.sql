-- Source: MySQL 8.4 manual, 15.2.13.2 JOIN Clause
-- Construct: comma-separated table references, the pre-JOIN spelling
-- Verdict: accepts
SELECT t1.name, t2.salary FROM employee AS t1, info AS t2 WHERE t1.name = t2.name;
