-- Source: PostgreSQL 18 documentation, 4.1.1 Identifiers and key words
-- Construct: a reserved word used unquoted as a column name
-- Verdict: rejects 42601
SELECT select FROM t;
