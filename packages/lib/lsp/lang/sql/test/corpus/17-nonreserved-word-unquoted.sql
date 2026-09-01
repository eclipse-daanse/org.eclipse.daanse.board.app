-- Source: MySQL 8.4 manual, 11.2 Schema Object Names
-- Construct: non-reserved keywords used unquoted as column names
-- Verdict: accepts
SELECT skip, locked, share, offset, nowait FROM t1;
