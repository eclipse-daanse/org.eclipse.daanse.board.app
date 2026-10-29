-- Source: PostgreSQL 18 documentation, 4.1.5 Comments
-- Construct: block comments nest, so the inner close does not end the outer one
-- Verdict: accepts
SELECT /* outer /* inner */ still a comment */ a FROM t;
