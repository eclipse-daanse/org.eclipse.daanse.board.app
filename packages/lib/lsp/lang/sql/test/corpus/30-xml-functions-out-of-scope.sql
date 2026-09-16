-- Source: PostgreSQL 18 documentation, 9.15 XML functions
-- Construct: XMLELEMENT's keyword arguments, deliberately outside this grammar's scope
-- Scope: out
-- Verdict: accepts
SELECT XMLELEMENT(NAME root, XMLATTRIBUTES(t.a AS id), t.b) FROM t;
