-- Source: PostgreSQL 18 documentation, 4.1.2.3 / 4.1.1 Unicode escapes
-- Construct: U& strings and identifiers, with an explicit UESCAPE character
-- Verdict: accepts
SELECT U&'d\0061t\+000061' AS s, U&"d!0061te" UESCAPE '!' AS n FROM t;
