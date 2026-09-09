-- Source: MySQL 8.4 manual, 7.1.11 Server SQL Modes (ANSI_QUOTES)
-- Construct: a double-quoted identifier, which ANSI_QUOTES makes legal
-- Verdict: accepts
SELECT "select" FROM "table";
