-- Source: PostgreSQL 18 documentation, 4.1.2.1 Numeric constants
-- Construct: a numeric literal followed immediately by a letter
-- Verdict: rejects 42601
SELECT 1a FROM t;
