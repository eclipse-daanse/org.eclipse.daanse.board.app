-- Source: PostgreSQL 18 documentation, 4.1.2.1 String constants
-- Construct: two string literals adjacent on one line, which requires a newline between them
-- Verdict: rejects 42601
SELECT 'a' 'b' FROM t;
