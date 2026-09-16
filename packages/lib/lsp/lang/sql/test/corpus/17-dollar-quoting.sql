-- Source: PostgreSQL 18 documentation, 4.1.2.4 Dollar-quoted string constants
-- Construct: a tagged dollar quote whose body holds quotes and a semicolon
-- Verdict: accepts
SELECT $tag$it's a 'body'; with punctuation$tag$ AS s FROM t;
