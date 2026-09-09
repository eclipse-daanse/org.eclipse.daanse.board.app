-- Source: MySQL 8.4 manual, 15.2.2 DELETE Statement
-- Construct: multi-table DELETE in the USING form
-- Verdict: accepts
DELETE FROM t1, t2 USING t1 INNER JOIN t2 INNER JOIN t3
  WHERE t1.id = t2.id AND t2.id = t3.id;
