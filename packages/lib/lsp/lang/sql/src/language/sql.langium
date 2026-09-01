/**
 * Grammar for MySQL 8.4 LTS query and data-manipulation statements.
 *
 * Sources, in order of authority:
 *
 *   1. The MySQL 8.4 Reference Manual. This is the contract. Every rule below
 *      follows a syntax summary from one of these pages:
 *        - 15.2.13 SELECT Statement
 *        - 15.2.13.2 JOIN Clause
 *        - 15.2.20 WITH (Common Table Expressions)
 *        - 15.2.7 INSERT Statement
 *        - 15.2.12 REPLACE Statement
 *        - 15.2.17 UPDATE Statement
 *        - 15.2.2 DELETE Statement
 *        - 14.4.2 Operator Precedence
 *        - 11.2 Schema Object Names
 *   2. https://github.com/TypeFox/langium-sql (MIT), read as a working Langium
 *      implementation of a SQL superset. Consulted for how to fold a
 *      LALR-shaped SQL grammar into Langium's LL parser; no text is copied.
 *      Where this grammar differs from theirs it is because MySQL is the
 *      contract here and a dialect-neutral superset was theirs.
 *
 * Every deliberate departure from (1) is marked DIVERGENCE.
 *
 * ---------------------------------------------------------------------------
 * sql_mode
 * ---------------------------------------------------------------------------
 *
 * This grammar is written against MySQL 8.4's default sql_mode **plus**
 * ANSI_QUOTES and PIPES_AS_CONCAT. That is not a detail: those two flags
 * change what the *syntax* means, not merely what is rejected.
 *
 *   ANSI_QUOTES      "x" is a quoted identifier, not a string literal.
 *   PIPES_AS_CONCAT  || is string concatenation, not logical OR. Its
 *                    precedence moves to between ^ and the unary operators
 *                    (14.4.2), which is why ConcatExpression sits where it
 *                    does in the cascade below.
 *
 * The rest of the default mode (ONLY_FULL_GROUP_BY, STRICT_TRANS_TABLES,
 * NO_ZERO_IN_DATE, NO_ZERO_DATE, ERROR_FOR_DIVISION_BY_ZERO,
 * NO_ENGINE_SUBSTITUTION) constrains semantics rather than syntax and is
 * enforced, where it can be without a schema, in `sql-validator.ts`.
 *
 * ---------------------------------------------------------------------------
 * Reserved words
 * ---------------------------------------------------------------------------
 *
 * Langium derives keyword tokens from the string literals in these rules, so a
 * word becomes reserved exactly when some rule below mentions it. MySQL's own
 * reserved list does not line up with that set in either direction, so:
 *
 *   - `Identifier` re-admits every *non-reserved* keyword this grammar
 *     mentions, via `NonReservedKeyword` in the generated file imported below.
 *     Without it `SELECT skip, share, locked FROM t` would fail, though MySQL
 *     accepts all three (they are keywords only inside FOR UPDATE ... SKIP
 *     LOCKED and LOCK IN SHARE MODE).
 *   - Reserved words that appear in no rule here cannot be reserved by the
 *     lexer at all; `sql-validator.ts` rejects them as bare identifiers using
 *     the same generated data.
 *
 * See `src/language/generated-mysql/README.md` for where that data comes from.
 */
grammar Sql

import './generated-mysql/mysql-keywords';

// ---------------------------------------------------------------------------
// Statements
// ---------------------------------------------------------------------------

/**
 * A script is zero or more statements. The trailing `;` is optional on the
 * last one, and an empty document is valid - an empty editor should not be an
 * error.
 */
entry SqlModel:
    (statements+=Statement ';'?)*;

Statement:
      SelectStatement
    | InsertStatement
    | ReplaceStatement
    | UpdateStatement
    | DeleteStatement;

// ---------------------------------------------------------------------------
// SELECT - 15.2.13
// ---------------------------------------------------------------------------

/**
 * The whole of the SELECT page: an optional WITH prefix, a query expression
 * that may be a chain of set operations, then the trailing clauses that belong
 * to the statement rather than to any one SELECT.
 */
SelectStatement:
    with=WithClause? query=QueryExpression QueryTail;

/**
 * The same statement, restricted so that it cannot begin with `(`.
 *
 * Used at the three places where a `(` could equally begin something that is
 * not a query - a derived table, an IN list, a parenthesised expression. A run
 * of `(` before the deciding `SELECT` can be arbitrarily long, so no fixed
 * lookahead separates the two readings; forbidding the leading paren on one
 * side makes each of those a one- or two-token decision.
 *
 * Langium's parameterised rules do not help here: their guards are runtime
 * conditions, so Chevrotain still sees the guarded alternative when it
 * computes lookahead and still reports the ambiguity. The restriction has to
 * be structural, which is why this rule exists rather than a parameter.
 *
 * DIVERGENCE: `FROM ((SELECT 1) UNION (SELECT 2)) AS x` is therefore rejected
 * - the *first* operand of a set operation inside a derived table, an IN list
 * or a subquery cannot be parenthesised. `FROM (SELECT 1 UNION (SELECT 2))
 * AS x` is accepted and means the same. At statement level, inside a CTE body,
 * and in every later operand of a set operation, the parenthesised form works.
 */
BareSelectStatement infers SelectStatement:
    with=WithClause? query=BareQueryExpression QueryTail;

/** The clauses that belong to the statement rather than to any one SELECT. */
fragment QueryTail:
    ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
    limit=LimitClause?
    into=IntoClause?
    locking=LockingClause?
    // 15.2.13 permits into_option in three positions. Modelled as two optional
    // slots rather than three because the manual forbids more than one INTO in
    // a statement anyway; `sql-validator.ts` reports the duplicate.
    trailingInto=IntoClause?;

WithClause:
    'WITH' (recursive?='RECURSIVE')? ctes+=CommonTableExpression (',' ctes+=CommonTableExpression)*;

CommonTableExpression:
    name=Identifier ('(' columns+=Identifier (',' columns+=Identifier)* ')')?
    'AS' '(' query=SelectStatement ')';

/**
 * UNION / EXCEPT / INTERSECT. INTERSECT binds tighter than the other two in
 * MySQL (15.2.14), so it gets its own tier.
 */
QueryExpression infers QueryExpression:
    IntersectExpression (
        {infer SetOperation.left=current}
        operator=('UNION' | 'EXCEPT') (all?='ALL' | distinct?='DISTINCT')?
        right=IntersectExpression
    )*;

BareQueryExpression infers QueryExpression:
    BareIntersectExpression (
        {infer SetOperation.left=current}
        operator=('UNION' | 'EXCEPT') (all?='ALL' | distinct?='DISTINCT')?
        right=IntersectExpression
    )*;

IntersectExpression infers QueryExpression:
    QueryPrimary (
        {infer SetOperation.left=current}
        operator='INTERSECT' (all?='ALL' | distinct?='DISTINCT')?
        right=QueryPrimary
    )*;

/** Only the first operand is restricted; later ones may be parenthesised. */
BareIntersectExpression infers QueryExpression:
    SelectCore (
        {infer SetOperation.left=current}
        operator='INTERSECT' (all?='ALL' | distinct?='DISTINCT')?
        right=QueryPrimary
    )*;

/**
 * `SELECT` and `(` start the two alternatives, so this is decided at one
 * token. A parenthesised operand may carry its own ORDER BY and LIMIT, which
 * is why it wraps a whole SelectStatement.
 */
QueryPrimary infers QueryExpression:
      SelectCore
    | {infer ParenthesizedQuery} '(' query=SelectStatement ')';

SelectCore:
    'SELECT'
    modifiers+=SelectModifier*
    selections+=SelectItem (',' selections+=SelectItem)*
    into=IntoClause?
    ('FROM' from+=TableReference (',' from+=TableReference)*)?
    ('WHERE' where=Expression)?
    ('GROUP' 'BY' groupBy+=SortItem (',' groupBy+=SortItem)* (rollup?='WITH' 'ROLLUP')?)?
    ('HAVING' having=Expression)?
    ('WINDOW' windows+=NamedWindow (',' windows+=NamedWindow)*)?;

/**
 * ALL / DISTINCT / DISTINCTROW and the optimiser hints, in one repeatable
 * slot. The manual fixes their order; a repeated slot accepts orderings MySQL
 * would reject.
 *
 * DIVERGENCE: order is not enforced here. Enforcing it would mean nine
 * optional slots in sequence, which is unreadable for a rule whose misuse is
 * both rare and harmless in an editor. `sql-validator.ts` reports a repeated
 * modifier; it does not police their order.
 *
 * SQL_CALC_FOUND_ROWS is deprecated as of 8.0.17 but still parses in 8.4, so
 * it is accepted here and flagged by the validator rather than rejected.
 */
SelectModifier returns string:
      'ALL' | 'DISTINCT' | 'DISTINCTROW'
    | 'HIGH_PRIORITY' | 'STRAIGHT_JOIN'
    | 'SQL_SMALL_RESULT' | 'SQL_BIG_RESULT' | 'SQL_BUFFER_RESULT'
    | 'SQL_NO_CACHE' | 'SQL_CALC_FOUND_ROWS';

/**
 * A bare `*`, or an expression with an optional alias.
 *
 * `tbl.*` is deliberately *not* an alternative here. It shares a prefix of
 * unbounded length with an ordinary expression (`a.b.c.*` against `a.b.c.d`),
 * which no fixed lookahead can separate, so the trailing `.*` is parsed by
 * `ReferenceOrCall` instead and arrives as a `ColumnReference` with `wildcard`
 * set. `sql-validator.ts` is what rejects it outside a select list.
 */
SelectItem:
      {infer Wildcard} '*'
    | {infer AliasedExpression} expression=Expression ('AS'? alias=AliasName)?;

/** 15.2.13 allows a quoted string as a column alias as well as an identifier. */
AliasName returns string:
    Identifier | STRING;

/**
 * A GROUP BY or ORDER BY term. The manual allows an ordinal position as well
 * as an expression; a bare integer is already a NumberLiteral, so no separate
 * rule is needed and `sql-validator.ts` is what checks the ordinal is in range.
 */
SortItem:
    expression=Expression (direction=SortDirection)?;

SortDirection returns string:
    'ASC' | 'DESC';

LimitClause:
    // `LIMIT 5, 10` and `LIMIT 10 OFFSET 5` are the same thing with the
    // operands in opposite orders. Decided at two tokens by the comma.
    'LIMIT' (offset=LimitValue ',' count=LimitValue | count=LimitValue ('OFFSET' offset=LimitValue)?);

LimitValue:
    value=NUMBER | parameter=Variable | placeholder?='?';

// ---------------------------------------------------------------------------
// INTO - 15.2.13.1
// ---------------------------------------------------------------------------

IntoClause:
      {infer IntoDumpfile} 'INTO' 'DUMPFILE' file=STRING
    | {infer IntoOutfile} 'INTO' 'OUTFILE' file=STRING
        ('CHARACTER' 'SET' charset=Identifier)?
        fields=FieldsOption? lines=LinesOption?
    | {infer IntoVariables} 'INTO' variables+=Variable (',' variables+=Variable)*;

FieldsOption:
    ('FIELDS' | 'COLUMNS')
    ('TERMINATED' 'BY' terminatedBy=STRING)?
    ((optionally?='OPTIONALLY')? 'ENCLOSED' 'BY' enclosedBy=STRING)?
    ('ESCAPED' 'BY' escapedBy=STRING)?;

LinesOption:
    'LINES'
    ('STARTING' 'BY' startingBy=STRING)?
    ('TERMINATED' 'BY' terminatedBy=STRING)?;

// ---------------------------------------------------------------------------
// Locking reads - 15.2.13
// ---------------------------------------------------------------------------

LockingClause:
      {infer ForLock} 'FOR' mode=('UPDATE' | 'SHARE')
        ('OF' tables+=QualifiedName (',' tables+=QualifiedName)*)?
        (nowait?='NOWAIT' | skipLocked?='SKIP' 'LOCKED')?
    | {infer ShareModeLock} 'LOCK' 'IN' 'SHARE' 'MODE';

// ---------------------------------------------------------------------------
// FROM and joins - 15.2.13.2
// ---------------------------------------------------------------------------

/**
 * The manual's `joined_table` is left-recursive; written here as the iterative
 * cascade Langium's LL parser needs.
 *
 * DIVERGENCE: the manual distinguishes `table_factor` from `table_reference`
 * as the right operand depending on the join kind (LEFT/RIGHT JOIN takes a
 * full table_reference, INNER/CROSS takes a table_factor). Both are accepted
 * on the right here. The distinction only affects how an unparenthesised
 * three-way join associates, which no editor diagnostic depends on.
 */
TableReference infers TableReference:
    TableFactor (
        {infer Join.left=current}
        (natural?='NATURAL')?
        // `[OUTER]` is only permitted after LEFT and RIGHT (15.2.13.2).
        // Accepting it after INNER and CROSS too keeps this a single optional
        // slot; `sql-validator.ts` reports the misplaced ones.
        (kind=JoinKind (outer?='OUTER')?)?
        ('JOIN' | straight?='STRAIGHT_JOIN')
        right=TableFactor
        specification=JoinSpecification?
    )*;

JoinKind returns string:
      'INNER' | 'CROSS'
    | 'LEFT' | 'RIGHT';

JoinSpecification:
      {infer JoinOn} 'ON' condition=Expression
    | {infer JoinUsing} 'USING' '(' columns+=Identifier (',' columns+=Identifier)* ')';

/**
 * `(` after FROM starts either a derived table or a parenthesised list of
 * table references. Decided at two tokens: `SELECT` or `WITH` means a query,
 * anything else means table references.
 *
 * DIVERGENCE: `((SELECT ...)) AS a` therefore parses as a parenthesised table
 * reference list containing a derived table, not as a doubly-parenthesised
 * subquery. Same shape, same meaning; the AST nests one level differently
 * from what the manual's grammar implies.
 */
TableFactor infers TableFactor:
      {infer NamedTable} table=QualifiedName
        ('PARTITION' '(' partitions+=Identifier (',' partitions+=Identifier)* ')')?
        ('AS'? alias=Identifier)?
        hints+=IndexHint*
    | {infer DerivedTable} (lateral?='LATERAL')? '(' query=BareSelectStatement ')'
        ('AS'? alias=Identifier)?
        ('(' columns+=Identifier (',' columns+=Identifier)* ')')?
    | {infer ParenthesizedTables} '(' references+=TableReference (',' references+=TableReference)* ')'
    // The ODBC outer-join escape, still accepted by MySQL 8.4.
    | {infer OdbcJoinEscape} '{' 'OJ' reference=TableReference '}';

IndexHint:
    kind=('USE' | 'IGNORE' | 'FORCE') ('INDEX' | 'KEY')
    ('FOR' scope=IndexHintScope)?
    '(' (indexes+=Identifier (',' indexes+=Identifier)*)? ')';

IndexHintScope returns string:
    'JOIN' | 'ORDER' 'BY' | 'GROUP' 'BY';

// ---------------------------------------------------------------------------
// Window functions - 14.20
// ---------------------------------------------------------------------------

NamedWindow:
    name=Identifier 'AS' '(' spec=WindowSpec? ')';

/**
 * `window_spec` in 14.20.2. Every part is optional and `OVER ()` is valid, but
 * Langium rejects a rule that can match no input at all, so "one or more of
 * these four, in this order" is spelled out as four alternatives rather than
 * four optional slots. Each starts with a distinct token, so it stays a
 * one-token decision. The empty case is handled by `WindowSpec?` at the two
 * call sites.
 */
WindowSpec:
      reference=Identifier
        ('PARTITION' 'BY' partitionBy+=Expression (',' partitionBy+=Expression)*)?
        ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
        (frame=WindowFrame)?
    | 'PARTITION' 'BY' partitionBy+=Expression (',' partitionBy+=Expression)*
        ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
        (frame=WindowFrame)?
    | 'ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*
        (frame=WindowFrame)?
    | frame=WindowFrame;

WindowFrame:
    units=('ROWS' | 'RANGE')
    ('BETWEEN' start=FrameBound 'AND' end=FrameBound | start=FrameBound);

FrameBound:
      {infer CurrentRow} 'CURRENT' 'ROW'
    | {infer UnboundedBound} 'UNBOUNDED' direction=('PRECEDING' | 'FOLLOWING')
    | {infer OffsetBound} offset=Expression direction=('PRECEDING' | 'FOLLOWING');

// ---------------------------------------------------------------------------
// INSERT - 15.2.7 - and REPLACE - 15.2.12
// ---------------------------------------------------------------------------

InsertStatement:
    'INSERT' priority=InsertPriority? (ignore?='IGNORE')?
    'INTO'? table=QualifiedName
    ('PARTITION' '(' partitions+=Identifier (',' partitions+=Identifier)* ')')?
    source=InsertSource
    (rowAlias=InsertRowAlias)?
    ('ON' 'DUPLICATE' 'KEY' 'UPDATE' updates+=Assignment (',' updates+=Assignment)*)?;

ReplaceStatement:
    'REPLACE' priority=InsertPriority? (ignore?='IGNORE')?
    'INTO'? table=QualifiedName
    ('PARTITION' '(' partitions+=Identifier (',' partitions+=Identifier)* ')')?
    source=InsertSource;

InsertPriority returns string:
    'LOW_PRIORITY' | 'DELAYED' | 'HIGH_PRIORITY';

/**
 * The three shapes on the INSERT page: a column list with VALUES or a
 * subquery, or the `SET col = value` form.
 *
 * The optional column list is factored out in front of the VALUES/query choice
 * so the two alternatives do not share it as a prefix - Langium's LL parser
 * cannot look past a list of unbounded length to decide between them.
 */
InsertSource:
    ('(' columns+=Identifier (',' columns+=Identifier)* ')')?
    (
        {infer InsertValues.columns=current} ('VALUES' | 'VALUE') rows+=RowValues (',' rows+=RowValues)*
      | {infer InsertSelect.columns=current} query=SelectStatement
      | {infer InsertSet.columns=current} 'SET' assignments+=Assignment (',' assignments+=Assignment)*
    );

RowValues:
    '(' (values+=InsertValue (',' values+=InsertValue)*)? ')';

/** `DEFAULT` is legal in a VALUES row; it is also a Literal, so no extra rule. */
InsertValue:
    expression=Expression;

/** 8.0.19+: `VALUES ... AS new(col, ...)` replaces VALUES() in the UPDATE clause. */
InsertRowAlias:
    'AS' alias=Identifier ('(' columns+=Identifier (',' columns+=Identifier)* ')')?;

Assignment:
    target=QualifiedName '=' value=Expression;

// ---------------------------------------------------------------------------
// UPDATE - 15.2.17
// ---------------------------------------------------------------------------

UpdateStatement:
    'UPDATE' (lowPriority?='LOW_PRIORITY')? (ignore?='IGNORE')?
    targets+=TableReference (',' targets+=TableReference)*
    'SET' assignments+=Assignment (',' assignments+=Assignment)*
    ('WHERE' where=Expression)?
    // Only legal for the single-table form; the validator reports the rest.
    ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
    limit=LimitClause?;

// ---------------------------------------------------------------------------
// DELETE - 15.2.2
// ---------------------------------------------------------------------------

DeleteStatement:
    'DELETE' (lowPriority?='LOW_PRIORITY')? (quick?='QUICK')? (ignore?='IGNORE')?
    (
        // `DELETE t1, t2 FROM ...`
        {infer MultiTableDelete} targets+=DeleteTarget (',' targets+=DeleteTarget)*
            'FROM' from+=TableReference (',' from+=TableReference)*
        // `DELETE FROM t1 [USING ...]` and `DELETE FROM t1, t2 USING ...` share
        // the `FROM` prefix, so they are one alternative distinguished by the
        // presence of USING rather than two.
      | {infer FromDelete} 'FROM' targets+=DeleteTarget (',' targets+=DeleteTarget)*
            ('PARTITION' '(' partitions+=Identifier (',' partitions+=Identifier)* ')')?
            ('AS'? alias=Identifier)?
            ('USING' from+=TableReference (',' from+=TableReference)*)?
    )
    ('WHERE' where=Expression)?
    ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
    limit=LimitClause?;

/** `t1` or `t1.*` - the manual permits the trailing `.*` in the target list. */
DeleteTarget:
    table=QualifiedName;

// ---------------------------------------------------------------------------
// Expressions - 14.4.2 Operator Precedence
// ---------------------------------------------------------------------------
//
// The manual lists operators highest precedence first. Written here as the
// iterative cascade Langium's LL parser needs, loosest binding at the top:
//
//   OR  <  XOR  <  AND  <  NOT  <  comparison/IS/IN/LIKE/BETWEEN
//       <  |  <  &  <  <</>>  <  +/-  <  * / DIV % MOD  <  ^
//       <  ||  <  unary -/~/!  <  COLLATE  <  primary
//
// `||` sits between `^` and the unary operators because PIPES_AS_CONCAT is on
// (14.4.2); with the flag off it would belong beside OR instead.
// ---------------------------------------------------------------------------

Expression:
    OrExpression;

OrExpression infers Expression:
    XorExpression ({infer BinaryExpression.left=current} operator='OR' right=XorExpression)*;

XorExpression infers Expression:
    AndExpression ({infer BinaryExpression.left=current} operator='XOR' right=AndExpression)*;

AndExpression infers Expression:
    NotExpression ({infer BinaryExpression.left=current} operator=('AND' | '&&') right=NotExpression)*;

NotExpression infers Expression:
      {infer NotExpression} 'NOT' operand=NotExpression
    | ComparisonExpression;

/**
 * One optional postfix predicate. The manual gives BETWEEN, CASE and the
 * comparison operators separate precedence tiers; folding them into one tier
 * is the usual simplification and changes nothing that is expressible without
 * parentheses.
 *
 * DIVERGENCE: `a = b = c` therefore parses as `(a = b) = c` here rather than
 * as a chain. MySQL accepts it too, so this is a shape difference in the AST,
 * not an acceptance difference.
 */
ComparisonExpression infers Expression:
    BitOrExpression (
        {infer Comparison.left=current} operator=ComparisonOperator
            (quantifier=('ALL' | 'ANY' | 'SOME'))? right=BitOrExpression
      | {infer IsPredicate.left=current} 'IS' (negated?='NOT')? value=IsTarget
      | {infer SoundsLikePredicate.left=current} 'SOUNDS' 'LIKE' pattern=BitOrExpression
      | {infer MemberOfPredicate.left=current} 'MEMBER' 'OF' '(' array=Expression ')'
      | {infer InPredicate.left=current} (negated?='NOT')? 'IN' source=InSource
      | {infer BetweenPredicate.left=current} (negated?='NOT')? 'BETWEEN'
            lower=BitOrExpression 'AND' upper=BitOrExpression
      | {infer LikePredicate.left=current} (negated?='NOT')? 'LIKE'
            pattern=BitOrExpression ('ESCAPE' escape=BitOrExpression)?
      | {infer RegexpPredicate.left=current} (negated?='NOT')? operator=('REGEXP' | 'RLIKE')
            pattern=BitOrExpression
    )?;

/** `<=>` is MySQL's NULL-safe equality. Longest alternatives first. */
ComparisonOperator returns string:
    '<=>' | '<>' | '!=' | '>=' | '<=' | '=' | '>' | '<';

IsTarget:
      {infer NullTarget} 'NULL'
    | {infer BooleanTarget} value=('TRUE' | 'FALSE' | 'UNKNOWN');

InSource:
    '(' (query=BareSelectStatement | values+=Expression (',' values+=Expression)*) ')';

BitOrExpression infers Expression:
    BitAndExpression ({infer BinaryExpression.left=current} operator='|' right=BitAndExpression)*;

BitAndExpression infers Expression:
    ShiftExpression ({infer BinaryExpression.left=current} operator='&' right=ShiftExpression)*;

ShiftExpression infers Expression:
    AdditiveExpression ({infer BinaryExpression.left=current} operator=('<<' | '>>') right=AdditiveExpression)*;

AdditiveExpression infers Expression:
    MultiplicativeExpression (
        {infer BinaryExpression.left=current} operator=('+' | '-') right=MultiplicativeExpression
    )*;

MultiplicativeExpression infers Expression:
    BitXorExpression (
        {infer BinaryExpression.left=current} operator=('*' | '/' | 'DIV' | '%' | 'MOD') right=BitXorExpression
    )*;

BitXorExpression infers Expression:
    ConcatExpression ({infer BinaryExpression.left=current} operator='^' right=ConcatExpression)*;

/** PIPES_AS_CONCAT - see the sql_mode note in the header. */
ConcatExpression infers Expression:
    UnaryExpression ({infer BinaryExpression.left=current} operator='||' right=UnaryExpression)*;

UnaryExpression infers Expression:
      {infer UnaryExpression} operator=('-' | '+' | '~' | '!') operand=UnaryExpression
    | {infer IntervalExpression} 'INTERVAL' value=Expression unit=IntervalUnit
    | CollateExpression;

CollateExpression infers Expression:
    PrimaryExpression (
        {infer CollateExpression.operand=current} 'COLLATE' collation=Identifier
    )?;

/**
 * `(` starts either a scalar subquery, a row constructor or a plain
 * parenthesised expression. `SELECT`/`WITH` at token two picks the subquery;
 * the other two share a prefix of unbounded length, so they are parsed as one
 * rule and told apart by whether a comma turned up.
 */
PrimaryExpression infers Expression:
      {infer Subquery} (exists?='EXISTS')? '(' query=BareSelectStatement ')'
    | {infer ParenthesizedExpression} '(' values+=Expression (',' values+=Expression)* ')'
    | {infer RowConstructor} 'ROW' '(' (values+=Expression (',' values+=Expression)*)? ')'
    | {infer BinaryCast} 'BINARY' operand=PrimaryExpression
    | CaseExpression
    | CastExpression
    | Literal
    | {infer VariableReference} variable=Variable
    | {infer Placeholder} '?'
    | KeywordFunctionCall
    | ReferenceOrCall;

/**
 * A handful of MySQL's built-in functions are named with *reserved* words, so
 * they cannot arrive through `ReferenceOrCall` - `Identifier` re-admits only
 * the non-reserved keywords. MySQL's own lexer has the same special case: it
 * treats these as function names when a `(` follows immediately.
 *
 * Decided at two tokens, the word and the `(`, so `LEFT JOIN` and
 * `LEFT(name, 3)` stay distinguishable, as do the `MOD` operator and `MOD(a,
 * b)`.
 *
 * Only reserved words need to be here. `SECOND`, `DATE`, `YEAR` and the rest
 * of the date-part functions are non-reserved, so `NonReservedKeyword` already
 * lets them through as ordinary identifiers.
 */
KeywordFunctionCall infers FunctionCall:
    name=FunctionNameKeyword
    '(' (
        star?='*'
      | (distinct?='DISTINCT')? arguments+=Expression (',' arguments+=Expression)*
    )? ')'
    over=OverClause?;

FunctionNameKeyword returns string:
    'CHAR' | 'INSERT' | 'LEFT' | 'MOD' | 'REPLACE' | 'RIGHT' | 'VALUES';

/**
 * A column reference and a function call share a prefix of unbounded length
 * (`a.b.c` vs `a.b.c(...)`), which no fixed lookahead can separate. Parsed as
 * one name and rewritten to a call when `(` follows.
 */
ReferenceOrCall infers Expression:
    {infer ColumnReference} name=QualifiedName (
        {infer FunctionCall.callee=current}
        '(' (
            star?='*'
          | (distinct?='DISTINCT')? arguments+=Expression (',' arguments+=Expression)*
        )? ')'
        over=OverClause?
    )?;

OverClause:
    'OVER' (window=Identifier | '(' spec=WindowSpec? ')');

CaseExpression:
    'CASE' (operand=Expression)?
    whens+=WhenClause+
    ('ELSE' elseValue=Expression)?
    'END';

WhenClause:
    'WHEN' condition=Expression 'THEN' value=Expression;

CastExpression:
      {infer Cast} 'CAST' '(' operand=Expression 'AS' type=DataType (arrayCast?='ARRAY')? ')'
    | {infer Convert} 'CONVERT' '(' operand=Expression (',' type=DataType | 'USING' charset=Identifier) ')';

/**
 * Only the types CAST and CONVERT accept (14.10), not the full column type
 * vocabulary - there is no DDL in this grammar, so nothing else needs them.
 */
DataType:
    name=DataTypeName ('(' arguments+=NUMBER (',' arguments+=NUMBER)* ')')?
    (unsigned?='UNSIGNED')? ('CHARACTER' 'SET' charset=Identifier)?;

DataTypeName returns string:
      'BINARY' | 'CHAR' | 'DATE' | 'DATETIME' | 'DECIMAL' | 'DOUBLE'
    | 'FLOAT' | 'JSON' | 'NCHAR' | 'REAL' | 'SIGNED' | 'TIME'
    | 'UNSIGNED' | 'YEAR';

IntervalUnit returns string:
      'MICROSECOND' | 'SECOND' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK'
    | 'MONTH' | 'QUARTER' | 'YEAR'
    | 'SECOND_MICROSECOND' | 'MINUTE_MICROSECOND' | 'MINUTE_SECOND'
    | 'HOUR_MICROSECOND' | 'HOUR_SECOND' | 'HOUR_MINUTE'
    | 'DAY_MICROSECOND' | 'DAY_SECOND' | 'DAY_MINUTE' | 'DAY_HOUR'
    | 'YEAR_MONTH';

// ---------------------------------------------------------------------------
// Literals, names and variables - 11.2, 11.1
// ---------------------------------------------------------------------------

/**
 * Adjacent string literals concatenate in MySQL (11.1.1), which is why `value`
 * is multi-valued.
 */
Literal infers Expression:
      {infer StringLiteral} values+=STRING+
    | {infer NumberLiteral} value=NUMBER
    | {infer HexLiteral} value=HEX
    | {infer BitLiteral} value=BIT
    | {infer BooleanLiteral} value=('TRUE' | 'FALSE')
    | {infer NullLiteral} 'NULL'
    | {infer DefaultLiteral} 'DEFAULT';

/**
 * `db.tbl.col`, or `tbl.*` in a select list or DELETE target.
 *
 * Parts are collected flat; which part is which depends on how many there are
 * and on context, and this grammar resolves nothing, so it does not try to
 * name them.
 *
 * The trailing `.*` belongs here rather than at the two call sites because the
 * repetition above is greedy and rule-local: Chevrotain decides whether to
 * take another `('.' Identifier)` using only what is inside this rule, so a
 * `.` followed by `*` in a *caller* is consumed by the repetition and then
 * fails demanding an identifier. Inside one rule it is a two-token decision.
 * `sql-validator.ts` is what rejects `t.*` where it does not belong.
 */
QualifiedName:
    parts+=Identifier ('.' parts+=Identifier)* ('.' wildcard?='*')?;

/** `@user_var` and `@@system_var`. */
Variable:
    name=(USER_VARIABLE | SYSTEM_VARIABLE);

/**
 * Bare, `backticked`, or "double-quoted" - the last only because ANSI_QUOTES
 * is on; see the header. `SqlValueConverter` strips the delimiters, so all
 * three spellings produce the same value.
 *
 * `NonReservedKeyword` comes from the generated import at the top of this
 * file: it re-admits the keywords MySQL does not reserve but which appear as
 * literals in the rules above.
 */
Identifier returns string:
    ID | BACKTICK_ID | DQUOTE_ID | NonReservedKeyword;

// ---------------------------------------------------------------------------
// Lexer
// ---------------------------------------------------------------------------

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
// MySQL requires whitespace after `--` (9.7); `#` needs none. So `--x` is two
// unary minuses, not a comment.
//
// DIVERGENCE: a bare `--` as the last two characters of a file is a comment in
// MySQL but lexes as two minus signs here. Chevrotain forbids the `$` anchor
// in a token pattern, so end-of-input cannot be part of the lookahead.
hidden terminal SL_COMMENT: /--(?=[ \t\f\r\n])[^\n\r]*/;
hidden terminal HASH_COMMENT: /#[^\n\r]*/;

// A literal backtick inside a backtick-quoted identifier is doubled.
terminal BACKTICK_ID: /`(?:[^`]|``)*`/;
// ANSI_QUOTES: a double-quoted run is an identifier, not a string.
terminal DQUOTE_ID: /"(?:[^"\\]|\\.|"")*"/;
// NO_BACKSLASH_ESCAPES is off, so `\'` escapes as well as `''`.
terminal STRING: /'(?:[^'\\]|\\.|'')*'/;

terminal HEX: /0[xX][0-9a-fA-F]+|[xX]'[0-9a-fA-F]*'/;
terminal BIT: /0[bB][01]+|[bB]'[01]*'/;
// Longest first: `1.5e3` must get a chance before `1`.
terminal NUMBER returns number: /(?:[0-9]+\.[0-9]*|\.[0-9]+|[0-9]+)(?:[eE][+-]?[0-9]+)?/;

terminal SYSTEM_VARIABLE: /@@(?:(?:GLOBAL|SESSION|LOCAL)\.)?[A-Za-z_$][\w$]*/;
terminal USER_VARIABLE: /@(?:[A-Za-z_$.][\w$.]*|`(?:[^`]|``)*`|'(?:[^']|'')*')/;

/**
 * DIVERGENCE: MySQL permits an unquoted identifier to begin with a digit so
 * long as it is not entirely digits (11.2) - `1e` is an identifier, `1e5` is a
 * number. Supporting that needs a lexer that can decide between the two after
 * consuming the whole run, which Chevrotain's ordered longest-match cannot do
 * without a custom pattern. Identifiers here start with a letter, `_`, `$` or
 * a character above U+007F; digit-leading identifiers must be backticked.
 */
terminal ID: /[A-Za-z_$\u0080-\uFFFF][\w$\u0080-\uFFFF]*/;
