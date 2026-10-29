/**
 * GENERATED from PostgreSQL 18.6 (Debian 18.6-1.pgdg13+2)'s `pg_get_keywords()`.
 * Run `npm run refresh-postgres-data`; never edit by hand.
 *
 * Langium reserves a word exactly when some rule mentions it, so every keyword
 * `sql.langium` spells would otherwise be unusable as a name. PostgreSQL
 * instead sorts keywords into four categories, and each category is readmitted
 * in the positions `gram.y` allows it:
 *
 *   ColId            unreserved + col_name
 *   TypeFunctionName unreserved + type_func_name
 *   ColLabel         all four
 *   BareColLabel     every keyword flagged `barelabel`
 *
 * Only the words the grammar actually spells appear here; one it never
 * mentions is no token and already lexes as an identifier.
 */
grammar PostgresKeywords

/** Category `U`: unreserved. A name anywhere. */
UnreservedKeyword returns string:
      'ABSENT' | 'AT' | 'BREADTH' | 'BY' | 'COLUMNS' | 'CONDITIONAL'
    | 'CONFLICT' | 'CURRENT' | 'CYCLE' | 'DAY' | 'DELETE' | 'DEPTH'
    | 'DOUBLE' | 'EMPTY' | 'ENCODING' | 'ERROR' | 'ESCAPE' | 'EXCLUDE'
    | 'FILTER' | 'FIRST' | 'FOLLOWING' | 'FORMAT' | 'GROUPS' | 'HOUR'
    | 'INSERT' | 'KEEP' | 'KEY' | 'KEYS' | 'LAST' | 'LOCAL'
    | 'LOCKED' | 'MATCHED' | 'MATERIALIZED' | 'MERGE' | 'MINUTE' | 'MONTH'
    | 'NEW' | 'NEXT' | 'NO' | 'NOTHING' | 'NOWAIT' | 'NULLS'
    | 'OBJECT' | 'OF' | 'OLD' | 'OMIT' | 'ORDINALITY' | 'OTHERS'
    | 'OVER' | 'OVERRIDING' | 'PARTITION' | 'PASSING' | 'PATH' | 'PRECEDING'
    | 'QUOTES' | 'RANGE' | 'RECURSIVE' | 'REPEATABLE' | 'SCALAR' | 'SEARCH'
    | 'SECOND' | 'SET' | 'SETS' | 'SHARE' | 'SKIP' | 'SOURCE'
    | 'STRING' | 'SYSTEM' | 'TARGET' | 'TEMP' | 'TEMPORARY' | 'TIES'
    | 'UNCONDITIONAL' | 'UNKNOWN' | 'UNLOGGED' | 'UPDATE' | 'VALUE' | 'VARYING'
    | 'WITHIN' | 'WITHOUT' | 'WRAPPER' | 'YEAR' | 'ZONE';

/** Category `C`: unreserved, but not a type or function name. */
ColNameKeyword returns string:
      // Empty: every keyword of this category that the grammar spells is kept
      // reserved on purpose (see KEEP_RESERVED in
      // scripts/refresh-postgres-data.mjs), so none is re-admitted as a name.
      // The rule still has to match something, and this is a word no statement
      // can contain.
      'daanse_reserved_on_purpose';

/** Category `T`: reserved, but allowed as a type or function name. */
TypeFuncNameKeyword returns string:
      'COLLATION' | 'CROSS' | 'FULL' | 'ILIKE' | 'INNER' | 'IS'
    | 'ISNULL' | 'JOIN' | 'LEFT' | 'LIKE' | 'NATURAL' | 'NOTNULL'
    | 'OUTER' | 'RIGHT' | 'SIMILAR' | 'TABLESAMPLE';

/** Category `R`: reserved. A name only after `AS` or a dot. */
ReservedKeyword returns string:
      'ALL' | 'AND' | 'ANY' | 'ARRAY' | 'AS' | 'ASC'
    | 'ASYMMETRIC' | 'BOTH' | 'CASE' | 'CAST' | 'COLLATE' | 'CONSTRAINT'
    | 'DEFAULT' | 'DESC' | 'DISTINCT' | 'DO' | 'ELSE' | 'END'
    | 'EXCEPT' | 'FALSE' | 'FETCH' | 'FOR' | 'FROM' | 'GROUP'
    | 'HAVING' | 'IN' | 'INTERSECT' | 'INTO' | 'LATERAL' | 'LEADING'
    | 'LIMIT' | 'NOT' | 'NULL' | 'OFFSET' | 'ON' | 'ONLY'
    | 'OR' | 'ORDER' | 'PLACING' | 'RETURNING' | 'SELECT' | 'SOME'
    | 'SYMMETRIC' | 'TABLE' | 'THEN' | 'TO' | 'TRAILING' | 'TRUE'
    | 'UNION' | 'UNIQUE' | 'USER' | 'USING' | 'VARIADIC' | 'WHEN'
    | 'WHERE' | 'WINDOW' | 'WITH';

/** `barelabel`: usable as a column alias with no `AS` in front. */
BareLabelKeyword returns string:
      'ABSENT' | 'ALL' | 'AND' | 'ANY' | 'ASC' | 'ASYMMETRIC'
    | 'AT' | 'BETWEEN' | 'BIGINT' | 'BIT' | 'BOOLEAN' | 'BOTH'
    | 'BREADTH' | 'BY' | 'CASE' | 'CAST' | 'COALESCE' | 'COLLATE'
    | 'COLLATION' | 'COLUMNS' | 'CONDITIONAL' | 'CONFLICT' | 'CONSTRAINT' | 'CROSS'
    | 'CUBE' | 'CURRENT' | 'CYCLE' | 'DEC' | 'DECIMAL' | 'DEFAULT'
    | 'DELETE' | 'DEPTH' | 'DESC' | 'DISTINCT' | 'DO' | 'DOUBLE'
    | 'ELSE' | 'EMPTY' | 'ENCODING' | 'END' | 'ERROR' | 'ESCAPE'
    | 'EXCLUDE' | 'EXISTS' | 'EXTRACT' | 'FALSE' | 'FIRST' | 'FLOAT'
    | 'FOLLOWING' | 'FORMAT' | 'FULL' | 'GREATEST' | 'GROUPING' | 'GROUPS'
    | 'ILIKE' | 'IN' | 'INNER' | 'INSERT' | 'INT' | 'INTEGER'
    | 'INTERVAL' | 'IS' | 'JOIN' | 'JSON' | 'JSON_ARRAY' | 'JSON_ARRAYAGG'
    | 'JSON_EXISTS' | 'JSON_OBJECT' | 'JSON_OBJECTAGG' | 'JSON_QUERY' | 'JSON_SCALAR' | 'JSON_SERIALIZE'
    | 'JSON_TABLE' | 'JSON_VALUE' | 'KEEP' | 'KEY' | 'KEYS' | 'LAST'
    | 'LATERAL' | 'LEADING' | 'LEAST' | 'LEFT' | 'LIKE' | 'LOCAL'
    | 'LOCKED' | 'MATCHED' | 'MATERIALIZED' | 'MERGE' | 'NATIONAL' | 'NATURAL'
    | 'NCHAR' | 'NESTED' | 'NEW' | 'NEXT' | 'NO' | 'NORMALIZE'
    | 'NOT' | 'NOTHING' | 'NOWAIT' | 'NULL' | 'NULLIF' | 'NULLS'
    | 'NUMERIC' | 'OBJECT' | 'OF' | 'OLD' | 'OMIT' | 'ONLY'
    | 'OPERATOR' | 'OR' | 'ORDINALITY' | 'OTHERS' | 'OUTER' | 'OVERLAY'
    | 'OVERRIDING' | 'PARTITION' | 'PASSING' | 'PATH' | 'PLACING' | 'POSITION'
    | 'PRECEDING' | 'QUOTES' | 'RANGE' | 'REAL' | 'RECURSIVE' | 'REPEATABLE'
    | 'RIGHT' | 'ROLLUP' | 'ROW' | 'ROWS' | 'SCALAR' | 'SEARCH'
    | 'SELECT' | 'SET' | 'SETOF' | 'SETS' | 'SHARE' | 'SIMILAR'
    | 'SKIP' | 'SMALLINT' | 'SOME' | 'SOURCE' | 'STRING' | 'SUBSTRING'
    | 'SYMMETRIC' | 'SYSTEM' | 'TABLE' | 'TABLESAMPLE' | 'TARGET' | 'TEMP'
    | 'TEMPORARY' | 'THEN' | 'TIES' | 'TIME' | 'TIMESTAMP' | 'TRAILING'
    | 'TREAT' | 'TRIM' | 'TRUE' | 'UNBOUNDED' | 'UNCONDITIONAL' | 'UNIQUE'
    | 'UNKNOWN' | 'UNLOGGED' | 'UPDATE' | 'USER' | 'USING' | 'VALUE'
    | 'VALUES' | 'VARCHAR' | 'VARIADIC' | 'WHEN' | 'WRAPPER' | 'ZONE';

/**
 * Langium requires every grammar file, including an imported one, to declare an
 * entry rule, and validates this file on its own terms - a rule the entry rule
 * cannot reach is reported as unreferenced even though `sql.langium` uses it.
 * So this lists all five. Nothing refers to the rule itself and the parser
 * never reaches it.
 */
entry PostgresKeywordFile:
    words+=(
        UnreservedKeyword | ColNameKeyword | TypeFuncNameKeyword
      | ReservedKeyword | BareLabelKeyword
    )*;
