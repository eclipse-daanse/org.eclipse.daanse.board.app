-- Source: PostgreSQL 18 documentation, SELECT (WITH clause)
-- Construct: a RECURSIVE CTE with SEARCH and CYCLE, and NOT MATERIALIZED
-- Verdict: accepts
WITH RECURSIVE r (id) AS NOT MATERIALIZED (
    SELECT id FROM t1
    UNION ALL
    SELECT v.id FROM r JOIN v ON v.y = r.id
) SEARCH DEPTH FIRST BY id SET ord
  CYCLE id SET looped TO true DEFAULT false USING path
SELECT id, ord, looped FROM r;
