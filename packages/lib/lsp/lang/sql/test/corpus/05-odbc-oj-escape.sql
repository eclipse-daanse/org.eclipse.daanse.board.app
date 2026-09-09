-- Source: MySQL 8.4 manual, 15.2.13.2 JOIN Clause
-- Construct: the ODBC { OJ ... } outer join escape
-- Verdict: accepts
SELECT * FROM { OJ t1 LEFT OUTER JOIN t2 ON t1.id = t2.id };
