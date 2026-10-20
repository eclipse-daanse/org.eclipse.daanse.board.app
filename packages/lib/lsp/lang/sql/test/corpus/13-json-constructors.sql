-- Source: PostgreSQL 18 documentation, 9.16.2 SQL/JSON constructor functions
-- Construct: JSON_OBJECT and JSON_ARRAY with ABSENT ON NULL and RETURNING
-- Verdict: accepts
SELECT JSON_OBJECT('k' VALUE t.a, 'n': t.b ABSENT ON NULL RETURNING jsonb),
       JSON_ARRAY(t.a, t.b NULL ON NULL)
FROM t;
