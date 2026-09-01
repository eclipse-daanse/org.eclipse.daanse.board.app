-- Source: MySQL 8.4 manual, 15.2.13.1 SELECT ... INTO Statement
-- Construct: INTO OUTFILE with full export options
-- Verdict: accepts
SELECT a, b FROM t1 INTO OUTFILE '/tmp/out.txt'
  FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' ESCAPED BY '\\'
  LINES TERMINATED BY '\n';
