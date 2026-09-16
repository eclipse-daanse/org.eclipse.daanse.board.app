-- Source: PostgreSQL 18 documentation, MERGE
-- Construct: all four WHEN actions, including BY SOURCE and DO NOTHING
-- Verdict: accepts
MERGE INTO t2 AS tgt
USING t1 AS src ON tgt.id = src.id
WHEN MATCHED AND src.a IS NULL THEN DELETE
WHEN MATCHED THEN UPDATE SET a = src.a
WHEN NOT MATCHED BY SOURCE THEN DO NOTHING
WHEN NOT MATCHED THEN INSERT (id, a) VALUES (src.id, src.a);
