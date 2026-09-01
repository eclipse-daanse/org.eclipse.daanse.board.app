-- Source: MySQL 8.4 manual, 10.9.4 Index Hints
-- Construct: several index hints on one table, with FOR scopes
-- Verdict: accepts
SELECT * FROM t1 USE INDEX (i1) IGNORE INDEX FOR ORDER BY (i2) ORDER BY a;
