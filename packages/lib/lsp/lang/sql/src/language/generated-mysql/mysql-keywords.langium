/**
 * GENERATED from MySQL 8.4.11's `INFORMATION_SCHEMA.KEYWORDS`.
 * Run `npm run refresh-mysql-data`; never edit by hand.
 *
 * Langium reserves a word exactly when some rule mentions it, so every keyword
 * `sql.langium` uses would otherwise be unusable as an identifier. These
 * 41 are the ones the grammar mentions that MySQL does *not*
 * reserve - `SELECT skip, share, locked, offset FROM t` is valid MySQL, and
 * without this rule it would not parse.
 *
 * Three non-reserved words are deliberately left out, because re-admitting
 * them makes the grammar genuinely ambiguous: CAST, UNBOUNDED and CURRENT.
 * See KEEP_RESERVED in `scripts/refresh-mysql-data.mjs` for why, and the
 * DIVERGENCE note in `sql.langium`.
 */
grammar MysqlKeywords

NonReservedKeyword returns string:
      'ANY' | 'ARRAY' | 'COLUMNS' | 'DATE' | 'DATETIME' | 'DAY'
    | 'DUMPFILE' | 'DUPLICATE' | 'END' | 'ESCAPE' | 'FIELDS' | 'FOLLOWING'
    | 'HOUR' | 'JSON' | 'LOCKED' | 'MEMBER' | 'MICROSECOND' | 'MINUTE'
    | 'MODE' | 'MONTH' | 'NCHAR' | 'NOWAIT' | 'OFFSET' | 'OJ'
    | 'PRECEDING' | 'QUARTER' | 'QUICK' | 'ROLLUP' | 'SECOND' | 'SHARE'
    | 'SIGNED' | 'SKIP' | 'SOME' | 'SOUNDS' | 'SQL_BUFFER_RESULT' | 'SQL_NO_CACHE'
    | 'TIME' | 'UNKNOWN' | 'VALUE' | 'WEEK' | 'YEAR';

/**
 * Langium requires every grammar file, including an imported one, to declare
 * an entry rule. This one exists only to satisfy that check - nothing in
 * `sql.langium` refers to it, and the parser never reaches it.
 */
entry NonReservedKeywordFile:
    words+=NonReservedKeyword*;
