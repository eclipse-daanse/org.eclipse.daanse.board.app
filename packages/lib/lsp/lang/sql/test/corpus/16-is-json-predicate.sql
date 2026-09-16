-- Source: PostgreSQL 18 documentation, 9.16.1 IS JSON predicate
-- Construct: IS JSON with an item type and a uniqueness requirement
-- Verdict: accepts
SELECT a FROM t WHERE t.j IS JSON OBJECT WITH UNIQUE KEYS;
