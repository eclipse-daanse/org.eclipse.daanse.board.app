-- Source: PostgreSQL 18 documentation, 4.1.2.1 Numeric constants
-- Construct: hexadecimal, octal and binary literals, and digit separators
-- Verdict: accepts
SELECT 0x1F, 0o17, 0b1010, 1_000_000, 1_0.0_1e1_0 FROM t;
