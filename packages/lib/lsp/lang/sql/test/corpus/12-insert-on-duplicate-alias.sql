-- Source: MySQL 8.4 manual, 15.2.7.2 INSERT ... ON DUPLICATE KEY UPDATE
-- Construct: the 8.0.19+ row alias form replacing VALUES()
-- Verdict: accepts
INSERT INTO t1 (a, b, c) VALUES (1, 2, 3) AS new
  ON DUPLICATE KEY UPDATE c = new.a + new.b;
