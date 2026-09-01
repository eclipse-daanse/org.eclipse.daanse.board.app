-- Source: MySQL 8.4 manual, 11.2 Schema Object Names
-- Construct: a reserved word used unquoted as a column name
-- Verdict: rejects 1064
SELECT fulltext FROM t1;
