/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Grammar for PostgreSQL 18 query and data-manipulation statements.
 *
 * Sources, in order of authority:
 *
 *   1. The PostgreSQL 18 documentation. This is the contract. Every rule below
 *      follows a syntax summary from one of these pages:
 *        - SELECT (incl. VALUES and TABLE)
 *        - INSERT, UPDATE, DELETE, MERGE
 *        - 4.1 Lexical Structure
 *        - 4.2 Value Expressions
 *        - 9.16 JSON Functions and Expressions (SQL/JSON)
 *        - 9.22 Aggregate Functions (FILTER, WITHIN GROUP, ORDER BY in args)
 *        - 3.5 / 9.23 Window Functions (frames, EXCLUDE)
 *      Where a shape here is closer to `src/backend/parser/gram.y` than to the
 *      prose, that is noted on the rule.
 *   2. https://github.com/TypeFox/langium-sql (MIT), read as a working Langium
 *      implementation of a SQL superset. Consulted for how to fold a
 *      LALR-shaped SQL grammar into Langium's LL parser; no text is copied.
 *
 * Every deliberate departure from (1) is marked DIVERGENCE.
 *
 * ---------------------------------------------------------------------------
 * Server settings
 * ---------------------------------------------------------------------------
 *
 * MySQL had `sql_mode`; PostgreSQL's equivalents are GUCs, and this grammar is
 * written against the **defaults of a stock PostgreSQL 18 server**. The one
 * that changes what syntax *means* rather than only what is rejected:
 *
 *   standard_conforming_strings = on   `'\'` is a backslash, not an escape.
 *                                      Backslash escapes need `E'...'`.
 *
 * `backslash_quote = safe_encoding` and `escape_string_warning = on` affect
 * only diagnostics inside `E'...'`, which this grammar does not interpret.
 *
 * Unlike MySQL, quoting is not configurable: `"x"` is always an identifier and
 * `||` is always concatenation, so no flag has to be pinned for them.
 *
 * ---------------------------------------------------------------------------
 * Keyword categories
 * ---------------------------------------------------------------------------
 *
 * Langium derives keyword tokens from the string literals in these rules, so a
 * word becomes reserved exactly when some rule below mentions it. PostgreSQL
 * instead sorts every keyword into one of four categories, and those categories
 * decide *where* a word may still be used as a name. `gram.y` spends four
 * nonterminals on it, and this grammar mirrors them:
 *
 *   ColId            a table or column name: identifier + unreserved + col_name
 *   TypeFunctionName a type or function name: identifier + unreserved + type_func_name
 *   ColLabel         after AS, and after `.`: identifier + *every* keyword
 *   BareColLabel     an alias written without AS: identifier + bare-label keywords
 *
 * The four keyword rules those build on are generated from the server's own
 * `pg_get_keywords()`, intersected with the literals this file spells - a word
 * no rule mentions is never a token, so it needs no re-admission. See
 * `src/language/generated-postgres/README.md`.
 *
 * Unquoted identifiers fold to lower case (4.1.1); `SqlValueConverter` does
 * that, so `T1` and `t1` arrive as one name.
 */
grammar Sql

import './generated-postgres/postgres-keywords';

// ---------------------------------------------------------------------------
// Statements
// ---------------------------------------------------------------------------

/**
 * A script is zero or more statements. An empty document is valid - an empty
 * editor should not be an error.
 *
 * The `;` has to be optional *here*, even though PostgreSQL requires it between
 * statements: `(Statement ';')* Statement?` makes both branches begin with a
 * statement, a shared prefix of unbounded length, so the parser commits to the
 * repetition and then demands a `;` that a single statement never has.
 *
 * A missing separator is therefore a validator check rather than a parse error:
 * without it `SELECT select FROM t` reads as two statements, since the target
 * list may be empty - and the reserved word the server rejects raised nothing
 * at all. `sql-validator.ts` reports the gap between them.
 */
entry SqlModel:
    (statements+=Statement ';'?)*;

Statement:
    with=WithClause? body=StatementBody;

StatementBody:
      QueryStatement
    | InsertStatement
    | UpdateStatement
    | DeleteStatement
    | MergeStatement;

// ---------------------------------------------------------------------------
// SELECT
// ---------------------------------------------------------------------------

/**
 * The whole of the SELECT page: an optional WITH prefix, a query expression
 * that may be a chain of set operations, then the trailing clauses that belong
 * to the statement rather than to any one SELECT.
 */
QueryStatement:
    query=QueryExpression QueryTail;

/**
 * The same statement, restricted so that it cannot begin with `(`.
 *
 * Used where a `(` could equally begin something that is not a query - a
 * derived table, an IN list, a parenthesised expression. A run of `(` before
 * the deciding `SELECT` can be arbitrarily long, so no fixed lookahead
 * separates the two readings; forbidding the leading paren on one side makes
 * each of those a one- or two-token decision.
 *
 * Langium's parameterised rules do not help: their guards are runtime
 * conditions, so Chevrotain still sees the guarded alternative when it computes
 * lookahead and still reports the ambiguity. The restriction has to be
 * structural, which is why this rule exists rather than a parameter.
 *
 * DIVERGENCE: `FROM ((SELECT 1) UNION (SELECT 2)) AS x` is therefore rejected -
 * the *first* operand of a set operation inside a derived table, an IN list or
 * a subquery cannot be parenthesised. `FROM (SELECT 1 UNION (SELECT 2)) AS x`
 * is accepted and means the same. At statement level, inside a CTE body, and in
 * every later operand of a set operation, the parenthesised form works.
 */
BareQueryStatement infers QueryStatement:
    with=WithClause? query=BareQueryExpression QueryTail;

/**
 * The clauses that belong to the statement rather than to any one SELECT.
 *
 * LIMIT, OFFSET and FETCH may appear in either order, and the page allows at
 * most one of LIMIT/FETCH; a repeated slot accepts orderings and repetitions
 * PostgreSQL would reject, and `sql-validator.ts` reports those.
 */
fragment QueryTail:
    ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
    limits+=LimitOffsetItem*
    lockings+=LockingClause*;

WithClause:
    'WITH' (recursive?='RECURSIVE')? ctes+=CommonTableExpression (',' ctes+=CommonTableExpression)*;

/**
 * A CTE body is any preparable statement, not only a query: PostgreSQL allows
 * data-modifying CTEs, and their RETURNING output is what the outer query sees.
 */
CommonTableExpression:
    name=Identifier ('(' columns+=Identifier (',' columns+=Identifier)* ')')?
    'AS' (materialized?='MATERIALIZED' | notMaterialized?='NOT' 'MATERIALIZED')?
    '(' query=Statement ')'
    search=SearchClause?
    cycle=CycleClause?;

/** SEARCH BREADTH|DEPTH FIRST BY cols SET name - only legal on a RECURSIVE CTE. */
SearchClause:
    'SEARCH' (breadth?='BREADTH' | depth?='DEPTH') 'FIRST' 'BY'
    columns+=Identifier (',' columns+=Identifier)*
    'SET' sequence=Identifier;

CycleClause:
    'CYCLE' columns+=Identifier (',' columns+=Identifier)*
    'SET' mark=Identifier ('TO' markValue=Expression 'DEFAULT' markDefault=Expression)?
    'USING' path=Identifier;

/**
 * UNION / EXCEPT / INTERSECT. INTERSECT binds tighter than the other two, as in
 * `gram.y`'s precedence declarations.
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
    BareQueryPrimary (
        {infer SetOperation.left=current}
        operator='INTERSECT' (all?='ALL' | distinct?='DISTINCT')?
        right=QueryPrimary
    )*;

/**
 * `SELECT`, `VALUES`, `TABLE` and `(` start the four alternatives, so this is
 * decided at one token. A parenthesised operand may carry its own ORDER BY and
 * LIMIT, which is why it wraps a whole Statement.
 */
QueryPrimary infers QueryExpression:
      SelectCore
    | ValuesQuery
    | TableQuery
    | {infer ParenthesizedQuery} '(' query=Statement ')';

BareQueryPrimary infers QueryExpression:
      SelectCore
    | ValuesQuery
    | TableQuery;

/** `VALUES (1, 2), (3, 4)` is a query in its own right. */
ValuesQuery:
    'VALUES' rows+=RowValues (',' rows+=RowValues)*;

/** `TABLE t` is shorthand for `SELECT * FROM t`. */
TableQuery:
    'TABLE' (only?='ONLY')? table=QualifiedName (star?='*')?;

/**
 * The target list is optional: `SELECT FROM t` is valid PostgreSQL and returns
 * as many empty rows as `t` has.
 */
SelectCore:
    'SELECT'
    (all?='ALL' | distinct=DistinctClause)?
    (selections+=SelectItem (',' selections+=SelectItem)*)?
    into=SelectIntoClause?
    ('FROM' from+=TableReference (',' from+=TableReference)*)?
    ('WHERE' where=Expression)?
    ('GROUP' 'BY' (groupAll?='ALL' | groupDistinct?='DISTINCT')?
        groupBy+=GroupingElement (',' groupBy+=GroupingElement)*)?
    ('HAVING' having=Expression)?
    ('WINDOW' windows+=NamedWindow (',' windows+=NamedWindow)*)?;

/**
 * `DISTINCT ON (...)` keeps the first row of each group of rows sharing those
 * expressions. PostgreSQL requires them to match the leading ORDER BY terms
 * (SQLSTATE 42P10); that is decided from the AST, so `sql-validator.ts` reports
 * it rather than the grammar.
 */
DistinctClause:
    'DISTINCT' ('ON' '(' on+=Expression (',' on+=Expression)* ')')?;

/**
 * `SELECT ... INTO new_table` creates a table. It is DDL in effect but belongs
 * to the SELECT page, and this grammar covers that page completely.
 */
SelectIntoClause:
    'INTO' (temporary?=('TEMP' | 'TEMPORARY') | unlogged?='UNLOGGED')? 'TABLE'?
    target=QualifiedName;

/**
 * A plain expression, or one of the three grouping constructs. `(` starts both
 * the empty grouping set `()` and a parenthesised expression list, so the empty
 * case is spelled out and the rest arrives through Expression.
 */
GroupingElement:
      {infer EmptyGroupingSet} '(' ')'
    | {infer RollupGrouping} 'ROLLUP' '(' sets+=GroupingSetElement (',' sets+=GroupingSetElement)* ')'
    | {infer CubeGrouping} 'CUBE' '(' sets+=GroupingSetElement (',' sets+=GroupingSetElement)* ')'
    | {infer GroupingSets} 'GROUPING' 'SETS' '(' elements+=GroupingElement (',' elements+=GroupingElement)* ')'
    | {infer ExpressionGrouping} expression=Expression;

GroupingSetElement:
      {infer EmptyGroupingSet} '(' ')'
    | {infer ExpressionGrouping} expression=Expression;

/**
 * A bare `*`, or an expression with an optional alias.
 *
 * `tbl.*` is deliberately *not* an alternative here. It shares a prefix of
 * unbounded length with an ordinary expression (`a.b.c.*` against `a.b.c.d`),
 * which no fixed lookahead can separate, so the trailing `.*` is parsed by
 * `ReferenceOrCall` instead and arrives as a `ColumnReference` with `wildcard`
 * set. In PostgreSQL `t.*` is row expansion and is legal inside expressions
 * too (`f(t.*)`, `ROW(t.*)`), so the validator only rejects the places the
 * documentation does.
 *
 * With `AS` the alias may be any keyword at all; without it, only a bare-label
 * one - which is the whole reason `BareColLabel` exists.
 */
SelectItem:
      {infer Wildcard} '*'
    | {infer AliasedExpression} expression=Expression ('AS' alias=ColLabel | alias=BareColLabel)?;

/**
 * An ORDER BY term. `USING <operator>` names an ordering operator instead of
 * ASC/DESC. A bare integer is an ordinal position; it is already a
 * NumberLiteral, so `sql-validator.ts` is what checks it is in range.
 */
SortItem:
    expression=Expression
    (direction=('ASC' | 'DESC') | 'USING' operator=OperatorName)?
    ('NULLS' nulls=('FIRST' | 'LAST'))?;

/**
 * LIMIT / OFFSET / FETCH. `LIMIT ALL` is `LIMIT` with no bound, and OFFSET
 * takes an optional noise word ROW or ROWS.
 */
LimitOffsetItem:
      {infer LimitClause} 'LIMIT' (all?='ALL' | count=Expression)
    | {infer OffsetClause} 'OFFSET' count=Expression ('ROW' | 'ROWS')?
    | {infer FetchClause} 'FETCH' ('FIRST' | 'NEXT') (count=Expression)? ('ROW' | 'ROWS')
        (ties?='WITH' 'TIES' | 'ONLY');

/**
 * Locking reads. The four strengths are spelled as flags rather than one
 * string-returning rule because `NO KEY UPDATE` and `KEY SHARE` are two tokens
 * each.
 */
LockingClause:
    'FOR' (update?='UPDATE' | noKeyUpdate?='NO' 'KEY' 'UPDATE' | share?='SHARE' | keyShare?='KEY' 'SHARE')
    ('OF' tables+=QualifiedName (',' tables+=QualifiedName)*)?
    (nowait?='NOWAIT' | skipLocked?='SKIP' 'LOCKED')?;

// ---------------------------------------------------------------------------
// FROM and joins
// ---------------------------------------------------------------------------

/**
 * The documentation's `from_item` is left-recursive through its join forms;
 * written here as the iterative cascade Langium's LL parser needs.
 *
 * CROSS JOIN takes no join specification, so it is its own alternative rather
 * than a JoinKind with an optional ON.
 */
TableReference infers TableReference:
    TableFactor (
        {infer Join.left=current}
            (natural?='NATURAL')?
            (kind=JoinKind (outer?='OUTER')?)?
            'JOIN' right=TableFactor specification=JoinSpecification?
      | {infer CrossJoin.left=current} 'CROSS' 'JOIN' right=TableFactor
    )*;

JoinKind returns string:
    'INNER' | 'LEFT' | 'RIGHT' | 'FULL';

/** PostgreSQL 14 added the alias on `USING`, which names the merged columns. */
JoinSpecification:
      {infer JoinOn} 'ON' condition=Expression
    | {infer JoinUsing} 'USING' '(' columns+=Identifier (',' columns+=Identifier)* ')'
        ('AS' alias=Identifier)?;

/**
 * A table, a function call, a derived table, or a parenthesised join.
 *
 * A named table and a table function share a prefix of unbounded length
 * (`a.b.c` against `a.b.c(...)`), so they are parsed as one alternative and
 * told apart by whether a `(` followed - the same shape `ReferenceOrCall` uses
 * for expressions.
 *
 * DIVERGENCE: `(` after FROM is decided at two tokens - `SELECT`, `WITH`,
 * `VALUES` or `TABLE` means a derived table, anything else a parenthesised join.
 * `((SELECT ...)) AS a` therefore parses as a parenthesised join containing a
 * derived table. Same meaning; the AST nests one level differently.
 */
TableFactor infers TableFactor:
      {infer NamedTable} (only?='ONLY')? table=QualifiedName (star?='*')?
        (
            {infer TableFunction.name=current}
            '(' (arguments+=FunctionArgument (',' arguments+=FunctionArgument)*)? ')'
            (ordinality?='WITH' 'ORDINALITY')?
        )?
        alias=TableAlias?
        sample=TableSampleClause?
    | {infer JsonTableFunction} (lateral?='LATERAL')? 'JSON_TABLE' '('
        context=JsonValueExpression ',' path=Expression ('AS' pathName=ColLabel)?
        (passing=JsonPassing)?
        'COLUMNS' '(' columns+=JsonTableColumn (',' columns+=JsonTableColumn)* ')'
        (onError=JsonTableOnError)?
      ')'
        alias=TableAlias?
    | {infer RowsFromTable} (lateral?='LATERAL')? 'ROWS' 'FROM'
        '(' items+=RowsFromItem (',' items+=RowsFromItem)* ')'
        (ordinality?='WITH' 'ORDINALITY')?
        alias=TableAlias?
    | {infer DerivedTable} (lateral?='LATERAL')? '(' query=BareQueryStatement ')'
        alias=TableAlias?
    | {infer ParenthesizedTables} '(' reference=TableReference ')' alias=TableAlias?;

/**
 * The alias column list is a plain name list for tables and derived tables, but
 * a `name type` list for functions. Both are accepted here and told apart by
 * whether a type followed; nothing downstream depends on the distinction.
 */
TableAlias:
    'AS'? name=Identifier ('(' columns+=AliasColumn (',' columns+=AliasColumn)* ')')?;

/**
 * The alias on a statement's *target* table. With `AS` any name will do; without
 * it the word has to be a plain identifier, because `UPDATE t SET a = 1` would
 * otherwise read `SET` as the alias - PostgreSQL leaves SET unreserved, and
 * `gram.y` draws exactly this line for the same reason.
 */
TargetAlias infers TableAlias:
    'AS' name=Identifier | name=PlainIdentifier;

/** An identifier with no keyword re-admission at all. */
PlainIdentifier returns string:
    ID | QUOTED_ID | UNICODE_ID;

AliasColumn:
    name=Identifier type=TypeName?;

RowsFromItem:
    function=Expression ('AS' '(' columns+=ColumnDefinition (',' columns+=ColumnDefinition)* ')')?;

ColumnDefinition:
    name=Identifier type=TypeName;

TableSampleClause:
    'TABLESAMPLE' method=TypeFunctionName '(' arguments+=Expression (',' arguments+=Expression)* ')'
    ('REPEATABLE' '(' seed=Expression ')')?;

// ---------------------------------------------------------------------------
// Window functions
// ---------------------------------------------------------------------------

NamedWindow:
    name=WindowName 'AS' '(' spec=WindowSpec? ')';

/**
 * A window's name, without the keyword re-admission `Identifier` does: a window
 * reference and a frame both follow `OVER (`, and `ROWS`, `RANGE` and `GROUPS`
 * are unreserved words, so a window named one of them is indistinguishable from
 * the frame it would introduce.
 *
 * DIVERGENCE: a window named `rows`, `range` or `groups` must be quoted.
 */
WindowName returns string:
    ID | QUOTED_ID | UNICODE_ID;

/**
 * Every part of a window specification is optional and `OVER ()` is valid, but
 * Langium rejects a rule that can match no input at all, so "one or more of
 * these four, in this order" is spelled out as four alternatives rather than
 * four optional slots. Each starts with a distinct token, so it stays a
 * one-token decision. The empty case is handled by `WindowSpec?` at the two
 * call sites.
 */
WindowSpec:
      reference=WindowName
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
    units=('RANGE' | 'ROWS' | 'GROUPS')
    ('BETWEEN' start=FrameBound 'AND' end=FrameBound | start=FrameBound)
    exclusion=FrameExclusion?;

/**
 * `UNBOUNDED FOLLOWING` as a frame start and `UNBOUNDED PRECEDING` as a frame
 * end are syntactically well-formed and rejected by the server; both are
 * decidable from the AST, so `sql-validator.ts` reports them.
 */
FrameBound:
      {infer CurrentRow} 'CURRENT' 'ROW'
    | {infer UnboundedBound} 'UNBOUNDED' direction=('PRECEDING' | 'FOLLOWING')
    | {infer OffsetBound} offset=Expression direction=('PRECEDING' | 'FOLLOWING');

FrameExclusion:
    'EXCLUDE' (currentRow?='CURRENT' 'ROW' | group?='GROUP' | ties?='TIES' | noOthers?='NO' 'OTHERS');

// ---------------------------------------------------------------------------
// INSERT
// ---------------------------------------------------------------------------

InsertStatement:
    'INSERT' 'INTO' table=QualifiedName ('AS' alias=Identifier)?
    ('(' columns+=InsertColumn (',' columns+=InsertColumn)* ')')?
    ('OVERRIDING' overriding=('SYSTEM' | 'USER') 'VALUE')?
    source=InsertSource
    conflict=OnConflictClause?
    returning=ReturningClause?;

/** A target column may carry subscripts and field selections: `col[1].f`. */
InsertColumn:
    name=Identifier accessors+=Accessor*;

/**
 * `DEFAULT VALUES`, or any query - `VALUES`, `TABLE` and `SELECT` all arrive
 * through Statement.
 */
InsertSource:
      {infer DefaultValues} 'DEFAULT' 'VALUES'
    | {infer InsertQuery} query=Statement;

/** `DEFAULT` is legal in a VALUES row, which is why these are SetValues. */
RowValues:
    '(' (values+=SetValue (',' values+=SetValue)*)? ')';

OnConflictClause:
    'ON' 'CONFLICT' target=ConflictTarget?
    'DO' (
        nothing?='NOTHING'
      | 'UPDATE' 'SET' assignments+=SetClause (',' assignments+=SetClause)*
            ('WHERE' where=Expression)?
    );

ConflictTarget:
      {infer IndexTarget} '(' elements+=IndexElement (',' elements+=IndexElement)* ')'
        ('WHERE' where=Expression)?
    | {infer ConstraintTarget} 'ON' 'CONSTRAINT' constraint=Identifier;

IndexElement:
    expression=Expression
    ('COLLATE' collation=QualifiedName)?
    (opclass=QualifiedName)?
    (direction=('ASC' | 'DESC'))?
    ('NULLS' nulls=('FIRST' | 'LAST'))?;

/**
 * PostgreSQL 18 added `WITH (OLD AS o, NEW AS n)`, which names the two row
 * versions so RETURNING can read either.
 */
ReturningClause:
    'RETURNING' options=ReturningOptions?
    items+=SelectItem (',' items+=SelectItem)*;

ReturningOptions:
    'WITH' '(' entries+=ReturningOption (',' entries+=ReturningOption)* ')';

ReturningOption:
    version=('OLD' | 'NEW') 'AS' alias=Identifier;

// ---------------------------------------------------------------------------
// UPDATE
// ---------------------------------------------------------------------------

UpdateStatement:
    'UPDATE' (only?='ONLY')? table=QualifiedName (star?='*')? alias=TargetAlias?
    'SET' assignments+=SetClause (',' assignments+=SetClause)*
    ('FROM' from+=TableReference (',' from+=TableReference)*)?
    ('WHERE' (currentOf=CurrentOfClause | where=Expression))?
    returning=ReturningClause?;

/**
 * `col = expr`, or the multi-column forms `(a, b) = (1, 2)` and
 * `(a, b) = (SELECT ...)`. The row source is parsed as one parenthesised
 * expression or subquery rather than two alternatives, because the two share a
 * prefix of unbounded length.
 */
SetClause:
      {infer ColumnAssignment} target=Identifier accessors+=Accessor* '=' value=SetValue
    | {infer MultiColumnAssignment} '(' columns+=Identifier (',' columns+=Identifier)* ')' '='
        (row?='ROW')? value=SetValue;

SetValue:
      {infer DefaultValue} 'DEFAULT'
    | {infer ExpressionValue} expression=Expression;

CurrentOfClause:
    'CURRENT' 'OF' cursor=Identifier;

// ---------------------------------------------------------------------------
// DELETE
// ---------------------------------------------------------------------------

DeleteStatement:
    'DELETE' 'FROM' (only?='ONLY')? table=QualifiedName (star?='*')? alias=TargetAlias?
    ('USING' using+=TableReference (',' using+=TableReference)*)?
    ('WHERE' (currentOf=CurrentOfClause | where=Expression))?
    returning=ReturningClause?;

// ---------------------------------------------------------------------------
// MERGE
// ---------------------------------------------------------------------------

MergeStatement:
    'MERGE' 'INTO' (only?='ONLY')? table=QualifiedName (star?='*')? alias=TargetAlias?
    'USING' source=TableFactor
    'ON' condition=Expression
    whens+=MergeWhenClause+
    returning=ReturningClause?;

/**
 * `BY SOURCE` and `BY TARGET` qualify NOT MATCHED only; accepting them after
 * MATCHED too keeps this one optional slot, and `sql-validator.ts` reports the
 * misplaced ones.
 */
MergeWhenClause:
    'WHEN' (notMatched?='NOT')? 'MATCHED' ('BY' by=('SOURCE' | 'TARGET'))?
    ('AND' condition=Expression)?
    'THEN' action=MergeAction;

MergeAction:
      {infer MergeUpdate} 'UPDATE' 'SET' assignments+=SetClause (',' assignments+=SetClause)*
    | {infer MergeDelete} 'DELETE'
    | {infer MergeInsert} 'INSERT'
        ('(' columns+=Identifier (',' columns+=Identifier)* ')')?
        ('OVERRIDING' overriding=('SYSTEM' | 'USER') 'VALUE')?
        source=MergeInsertSource
    | {infer MergeDoNothing} 'DO' 'NOTHING';

MergeInsertSource:
      {infer DefaultValues} 'DEFAULT' 'VALUES'
    | {infer InsertValues} 'VALUES' row=RowValues;

// ---------------------------------------------------------------------------
// Expressions
// ---------------------------------------------------------------------------
//
// Precedence follows table 4.2 and the `%left`/`%right` declarations in
// `gram.y`, written here as the iterative cascade Langium's LL parser needs,
// loosest binding at the top:
//
//   OR  <  AND  <  NOT  <  IS/ISNULL/NOTNULL  <  comparison
//       <  BETWEEN/IN/LIKE/ILIKE/SIMILAR  <  any other operator
//       <  + -  <  * / %  <  ^  <  AT TIME ZONE  <  COLLATE
//       <  unary + -  <  postfix [] and ::  <  primary
//
// Two things here are unlike MySQL. A user-definable operator ("any other
// operator") binds *looser* than `+`, not tighter; and BETWEEN/IN/LIKE bind
// *tighter* than the comparison operators rather than sharing a tier with them.
// ---------------------------------------------------------------------------

Expression:
    OrExpression;

OrExpression infers Expression:
    AndExpression ({infer BinaryExpression.left=current} operator='OR' right=AndExpression)*;

AndExpression infers Expression:
    NotExpression ({infer BinaryExpression.left=current} operator='AND' right=NotExpression)*;

NotExpression infers Expression:
      {infer NotExpression} 'NOT' operand=NotExpression
    | IsExpression;

/**
 * The IS family, plus the two postfix spellings PostgreSQL keeps for
 * compatibility. Repeatable because `x IS NOT NULL IS TRUE` is well-formed.
 */
IsExpression infers Expression:
    ComparisonExpression (
        {infer IsPredicate.left=current} 'IS' (negated?='NOT')? value=IsTarget
      | {infer IsNullPredicate.left=current} isNull?='ISNULL'
      | {infer IsNotNullPredicate.left=current} notNull?='NOTNULL'
    )*;

IsTarget:
      {infer NullTarget} 'NULL'
    | {infer BooleanTarget} value=('TRUE' | 'FALSE' | 'UNKNOWN')
    | {infer DistinctFromTarget} 'DISTINCT' 'FROM' operand=ComparisonExpression
    | {infer JsonTarget} 'JSON' (itemType=('VALUE' | 'ARRAY' | 'OBJECT' | 'SCALAR'))?
        (unique=JsonUniqueKeys)?;

/**
 * The comparison operators are `%nonassoc` in `gram.y`, so `a = b = c` is a
 * syntax error on the server rather than a chain. One optional slot says the
 * same thing.
 */
ComparisonExpression infers Expression:
    PatternExpression (
        {infer Comparison.left=current} operator=ComparisonOperator
        (quantifier=('ALL' | 'ANY' | 'SOME') '(' quantified=QuantifiedSource ')' | right=PatternExpression)
    )?;

ComparisonOperator returns string:
    '<>' | '!=' | '>=' | '<=' | '=' | '>' | '<';

/** `= ANY (SELECT ...)` and `= ANY (ARRAY[...])` share the parentheses. */
QuantifiedSource:
      {infer SubquerySource} query=BareQueryStatement
    | {infer ExpressionSource} expression=Expression;

/**
 * BETWEEN, IN, LIKE, ILIKE and SIMILAR TO. `BETWEEN SYMMETRIC` swaps the bounds
 * when they are the wrong way round.
 */
PatternExpression infers Expression:
    OtherOperatorExpression (
        {infer InPredicate.left=current} (negated?='NOT')? 'IN' source=InSource
      | {infer BetweenPredicate.left=current} (negated?='NOT')? 'BETWEEN'
            (symmetric?='SYMMETRIC' | asymmetric?='ASYMMETRIC')?
            lower=OtherOperatorExpression 'AND' upper=OtherOperatorExpression
      | {infer LikePredicate.left=current} (negated?='NOT')? operator=('LIKE' | 'ILIKE')
            pattern=OtherOperatorExpression ('ESCAPE' escape=OtherOperatorExpression)?
      | {infer SimilarPredicate.left=current} (negated?='NOT')? 'SIMILAR' 'TO'
            pattern=OtherOperatorExpression ('ESCAPE' escape=OtherOperatorExpression)?
    )?;

InSource:
    '(' (query=BareQueryStatement | values+=Expression (',' values+=Expression)*) ')';

/**
 * Any operator that is not one of the ones with a tier of its own: `||`, `@>`,
 * `->>`, `~`, and every operator a user or extension defines. They share one
 * precedence level, which is what `%left Op OPERATOR` says.
 *
 * `OPERATOR(pg_catalog.+)` is the qualified spelling and sits at the same level.
 */
OtherOperatorExpression infers Expression:
    AdditiveExpression (
        {infer BinaryExpression.left=current} operator=OperatorReference right=AdditiveExpression
    )*;

OperatorReference:
      {infer BareOperator} name=OP
    | {infer QualifiedOperator} 'OPERATOR' '(' (schema+=Identifier '.')* name=OperatorName ')';

/**
 * Any operator, however this grammar happens to tokenize it. The ones with a
 * precedence tier of their own are spelled as literals above and so arrive as
 * keyword tokens; everything else is one OP token.
 */
OperatorName returns string:
      OP
    | '<' | '>' | '=' | '<=' | '>=' | '<>' | '!='
    | '+' | '-' | '*' | '/' | '%' | '^';

AdditiveExpression infers Expression:
    MultiplicativeExpression (
        {infer BinaryExpression.left=current} operator=('+' | '-') right=MultiplicativeExpression
    )*;

MultiplicativeExpression infers Expression:
    ExponentExpression (
        {infer BinaryExpression.left=current} operator=('*' | '/' | '%') right=ExponentExpression
    )*;

/** `^` is left-associative in PostgreSQL, unlike most languages. */
ExponentExpression infers Expression:
    TimeZoneExpression ({infer BinaryExpression.left=current} operator='^' right=TimeZoneExpression)*;

/** `AT LOCAL` arrived in PostgreSQL 17 as shorthand for the session zone. */
TimeZoneExpression infers Expression:
    CollateExpression (
        {infer AtTimeZone.operand=current} 'AT' ('TIME' 'ZONE' zone=CollateExpression | local?='LOCAL')
    )*;

CollateExpression infers Expression:
    UnaryExpression ({infer CollateExpression.operand=current} 'COLLATE' collation=QualifiedName)*;

/**
 * Unary `+` and `-`, and the prefix form of a user-definable operator (`|/ 2`,
 * `@ -3`). PostgreSQL 14 removed postfix operators, so there is no suffix case.
 */
UnaryExpression infers Expression:
      {infer UnaryExpression} operator=('+' | '-') operand=UnaryExpression
    | {infer PrefixOperatorExpression} operator=OperatorReference operand=UnaryExpression
    | PostfixExpression;

/**
 * Subscripts, slices, and casts. All three are postfix and repeatable:
 * `a[1][2]::text[]`, `x[2:3]`, `(f()).field` arrives through QualifiedName.
 */
PostfixExpression infers Expression:
    PrimaryExpression (
        {infer SubscriptExpression.operand=current} accessor=Accessor
      | {infer CastExpression.operand=current} '::' type=TypeName
    )*;

Accessor:
      {infer Subscript} '[' index=Expression (':' upper=Expression?)? ']'
    | {infer OpenSlice} '[' ':' upper=Expression? ']';

/**
 * `(` starts a scalar subquery, a row constructor or a plain parenthesised
 * expression. `SELECT`, `WITH`, `VALUES` and `TABLE` at token two pick the
 * subquery; the other two share a prefix of unbounded length, so they are
 * parsed as one rule and told apart by whether a comma turned up.
 */
PrimaryExpression infers Expression:
      {infer Subquery} (exists?='EXISTS')? '(' query=BareQueryStatement ')'
    | {infer ParenthesizedExpression} '(' values+=Expression (',' values+=Expression)* ')'
    | {infer RowConstructor} 'ROW' '(' (values+=Expression (',' values+=Expression)*)? ')'
    | {infer ArrayConstructor} 'ARRAY' (
          '[' (elements+=Expression (',' elements+=Expression)*)? ']'
        | '(' query=BareQueryStatement ')'
      )
    | {infer GroupingFunction} 'GROUPING' '(' arguments+=Expression (',' arguments+=Expression)* ')'
    | {infer Parameter} name=PARAM
    | CaseExpression
    | CastCall
    | KeywordFunctionCall
    | JsonExpression
    | TypedLiteral
    | Literal
    | ReferenceOrCall;

CaseExpression:
    'CASE' (operand=Expression)?
    whens+=WhenClause+
    ('ELSE' elseValue=Expression)?
    'END';

WhenClause:
    'WHEN' condition=Expression 'THEN' value=Expression;

/** `CAST(x AS type)` and `TREAT(x AS type)` share their shape. */
CastCall:
      {infer Cast} 'CAST' '(' operand=Expression 'AS' type=TypeName ')'
    | {infer Treat} 'TREAT' '(' operand=Expression 'AS' type=TypeName ')';

/**
 * The functions whose arguments are written with keywords rather than commas,
 * plus the ones whose names are keywords the lexer has already taken. Each is
 * decided at one or two tokens because the name itself is a distinct token.
 *
 * DIVERGENCE: the XML functions (XMLELEMENT, XMLTABLE and the rest of 9.15) are
 * out of scope, and their names are `col_name` keywords. A call to one parses
 * as an ordinary function call, so the plain forms are accepted and the forms
 * with keyword arguments are not. The corpus records this as `-- Scope: out`.
 */
KeywordFunctionCall infers Expression:
      {infer ExtractCall} 'EXTRACT' '(' field=ColLabel 'FROM' operand=Expression ')'
    | {infer PositionCall} 'POSITION' '(' needle=OtherOperatorExpression 'IN' haystack=Expression ')'
    | {infer SubstringCall} 'SUBSTRING' '(' operand=Expression (
          'FROM' start=Expression ('FOR' count=Expression)?
        | 'FOR' count=Expression
        | 'SIMILAR' pattern=Expression 'ESCAPE' escape=Expression
        | (',' arguments+=Expression)+
      )? ')'
    | {infer OverlayCall} 'OVERLAY' '(' operand=Expression 'PLACING' replacement=Expression
        'FROM' start=Expression ('FOR' count=Expression)? ')'
    | {infer TrimCall} 'TRIM' '(' (side=('BOTH' | 'LEADING' | 'TRAILING'))? (
          'FROM' operand=Expression
          // `TRIM(x FROM y)` and `TRIM(x, y)` share their first expression, so
          // one is parsed and what follows decides which form it was.
        | first=Expression ('FROM' operand=Expression | ',' characters=Expression)?
      ) ')'
    | {infer NormalizeCall} 'NORMALIZE' '(' operand=Expression (',' form=ColLabel)? ')'
    | {infer CollationForCall} 'COLLATION' 'FOR' '(' operand=Expression ')'
    | {infer NullifCall} 'NULLIF' '(' left=Expression ',' right=Expression ')'
    | {infer CoalesceCall} name=('COALESCE' | 'GREATEST' | 'LEAST')
        '(' arguments+=Expression (',' arguments+=Expression)* ')';

/**
 * A column reference and a function call share a prefix of unbounded length
 * (`a.b.c` against `a.b.c(...)`), which no fixed lookahead can separate. Parsed
 * as one name and rewritten to a call when `(` follows.
 */
ReferenceOrCall infers Expression:
    {infer ColumnReference} name=QualifiedName (
        {infer FunctionCall.callee=current}
        '(' (
            star?='*'
          | (distinct?='DISTINCT' | all?='ALL')?
            arguments+=FunctionArgument (',' arguments+=FunctionArgument)*
            ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
        )? ')'
        filter=FilterClause?
        withinGroup=WithinGroupClause?
        over=OverClause?
    )?;

/**
 * `VARIADIC a`, `name => value` and the deprecated `name := value`. The two
 * named forms are decided at two tokens, so an ordinary expression argument
 * stays unambiguous.
 */
FunctionArgument:
      {infer VariadicArgument} 'VARIADIC' value=Expression
    | {infer NamedArgument} name=Identifier operator=('=>' | ':=') value=Expression
    | {infer PositionalArgument} value=Expression;

FilterClause:
    'FILTER' '(' 'WHERE' condition=Expression ')';

WithinGroupClause:
    'WITHIN' 'GROUP' '(' 'ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)* ')';

OverClause:
    'OVER' (window=WindowName | '(' spec=WindowSpec? ')');

// ---------------------------------------------------------------------------
// SQL/JSON - 9.16
// ---------------------------------------------------------------------------

/**
 * The SQL/JSON constructors and query functions. Every one of these names is a
 * `col_name` keyword, so the name alone decides the alternative.
 */
JsonExpression infers Expression:
      {infer JsonObjectCall} 'JSON_OBJECT' '(' (entries+=JsonKeyValue (',' entries+=JsonKeyValue)*)?
        (nullHandling=JsonNullClause)? (unique=JsonUniqueKeys)? (returning=JsonReturning)? ')'
    | {infer JsonArrayCall} 'JSON_ARRAY' '(' (
          query=BareQueryStatement (format?='FORMAT' 'JSON')?
        | elements+=JsonValueExpression (',' elements+=JsonValueExpression)* (nullHandling=JsonNullClause)?
      )? (returning=JsonReturning)? ')'
    | {infer JsonObjectAggCall} 'JSON_OBJECTAGG' '(' entry=JsonKeyValue
        (nullHandling=JsonNullClause)? (unique=JsonUniqueKeys)? (returning=JsonReturning)? ')'
        filter=FilterClause? over=OverClause?
    | {infer JsonArrayAggCall} 'JSON_ARRAYAGG' '(' element=JsonValueExpression
        ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?
        (nullHandling=JsonNullClause)? (returning=JsonReturning)? ')'
        filter=FilterClause? over=OverClause?
    | {infer JsonScalarCall} 'JSON_SCALAR' '(' operand=Expression ')'
    | {infer JsonSerializeCall} 'JSON_SERIALIZE' '(' operand=JsonValueExpression (returning=JsonReturning)? ')'
    | {infer JsonCall} 'JSON' '(' operand=JsonValueExpression (unique=JsonUniqueKeys)? ')'
    | {infer JsonExistsCall} 'JSON_EXISTS' '(' context=JsonValueExpression ',' path=Expression
        (passing=JsonPassing)? (onError=JsonExistsOnError)? ')'
    | {infer JsonValueCall} 'JSON_VALUE' '(' context=JsonValueExpression ',' path=Expression
        (passing=JsonPassing)? (returning=JsonReturning)?
        (onEmpty=JsonBehaviourClause)? (onError=JsonBehaviourClause)? ')'
    | {infer JsonQueryCall} 'JSON_QUERY' '(' context=JsonValueExpression ',' path=Expression
        (passing=JsonPassing)? (returning=JsonReturning)?
        (wrapper=JsonWrapper)? (quotes=JsonQuotes)?
        (onEmpty=JsonBehaviourClause)? (onError=JsonBehaviourClause)? ')';

/** `expr FORMAT JSON [ENCODING UTF8]` - the input form of a JSON value. */
JsonValueExpression:
    expression=Expression (format?='FORMAT' 'JSON' ('ENCODING' encoding=Identifier)?)?;

/** Both spellings of a member: `key VALUE value` and `key : value`. */
JsonKeyValue:
    key=Expression ('VALUE' | ':') value=JsonValueExpression;

JsonNullClause:
    (absent?='ABSENT' | null?='NULL') 'ON' 'NULL';

JsonUniqueKeys:
    (with?='WITH' | without?='WITHOUT') 'UNIQUE' 'KEYS'?;

JsonReturning:
    'RETURNING' type=TypeName (format?='FORMAT' 'JSON' ('ENCODING' encoding=Identifier)?)?;

JsonPassing:
    'PASSING' arguments+=JsonPassingArgument (',' arguments+=JsonPassingArgument)*;

JsonPassingArgument:
    value=JsonValueExpression 'AS' name=ColLabel;

JsonExistsOnError:
    behaviour=('ERROR' | 'TRUE' | 'FALSE' | 'UNKNOWN') 'ON' 'ERROR';

/**
 * JSON_TABLE's own `ON ERROR`, which takes only these two behaviours - the
 * per-column one is `JsonBehaviourClause`, which takes the full set.
 */
JsonTableOnError:
    (error?='ERROR' | empty?='EMPTY' 'ARRAY'?) 'ON' 'ERROR';

/** `NULL | ERROR | DEFAULT expr` before `ON EMPTY` or `ON ERROR`. */
JsonBehaviourClause:
    (null?='NULL' | error?='ERROR' | emptyArray?='EMPTY' 'ARRAY' | emptyObject?='EMPTY' 'OBJECT'
        | 'DEFAULT' default=Expression)
    'ON' on=('EMPTY' | 'ERROR');

JsonWrapper:
    (without?='WITHOUT' | 'WITH' (conditional?='CONDITIONAL' | unconditional?='UNCONDITIONAL')?)
    'ARRAY'? 'WRAPPER';

JsonQuotes:
    (keep?='KEEP' | omit?='OMIT') 'QUOTES' ('ON' 'SCALAR' 'STRING')?;

/**
 * JSON_TABLE is a table function, not an expression, so it arrives through
 * `TableFactor`'s function form rather than here. Its COLUMNS clause is the
 * part that needs its own rules.
 */
JsonTableColumn:
      {infer JsonOrdinalityColumn} name=Identifier 'FOR' 'ORDINALITY'
    | {infer JsonNestedColumn} 'NESTED' 'PATH'? path=Expression ('AS' alias=ColLabel)?
        'COLUMNS' '(' columns+=JsonTableColumn (',' columns+=JsonTableColumn)* ')'
    // The EXISTS form and the regular form share `name type`, a prefix of
    // unbounded length, so they are one alternative that the keyword after the
    // type tells apart.
    | {infer JsonValueColumn} name=Identifier type=TypeName
        (exists?='EXISTS' | format?='FORMAT' 'JSON')?
        ('PATH' path=Expression)?
        (wrapper=JsonWrapper)? (quotes=JsonQuotes)?
        (onEmpty=JsonBehaviourClause)? (onError=JsonBehaviourClause)?;

// ---------------------------------------------------------------------------
// Type names
// ---------------------------------------------------------------------------

/**
 * The type vocabulary CAST, casts and column definitions need. The
 * multi-word names are spelled out because their parts are separate tokens;
 * everything else is a qualified name, which covers user-defined types and
 * `pg_catalog.int4` alike.
 */
TypeName:
    (setof?='SETOF')? base=SimpleTypeName array=ArraySuffix?;

SimpleTypeName:
      KeywordTypeName
      // In a type position the qualifier follows the type name - `interval day
      // to second`. The literal spelling, where it follows the string, is
      // `IntervalLiteral`, which is why INTERVAL is not in `KeywordTypeName`.
    | {infer IntervalType} 'INTERVAL' fields=IntervalFields? precision=TypeModifiers?
    | {infer NamedType} name=QualifiedTypeName modifiers=TypeModifiers?;

/**
 * The types whose name is a keyword, and so decides the alternative on its own.
 * `TypedLiteral` accepts only these - INTERVAL is not among them because its
 * literal form puts the qualifier after the string, which `IntervalLiteral`
 * spells out.
 */
KeywordTypeName:
      {infer CharacterType} name=('CHARACTER' | 'CHAR' | 'NCHAR' | 'VARCHAR')
        (varying?='VARYING')? length=TypeModifiers?
    | {infer NationalCharacterType} 'NATIONAL' name=('CHARACTER' | 'CHAR')
        (varying?='VARYING')? length=TypeModifiers?
    | {infer BitType} 'BIT' (varying?='VARYING')? length=TypeModifiers?
    | {infer DoublePrecisionType} 'DOUBLE' 'PRECISION'
    | {infer NumericType} name=('DECIMAL' | 'DEC' | 'NUMERIC' | 'FLOAT') modifiers=TypeModifiers?
    | {infer IntegerType} name=('SMALLINT' | 'INTEGER' | 'INT' | 'BIGINT' | 'REAL' | 'BOOLEAN')
    | {infer DateTimeType} name=('TIMESTAMP' | 'TIME') precision=TypeModifiers?
        (('WITH' withTimeZone?='TIME' 'ZONE') | ('WITHOUT' 'TIME' 'ZONE'))?;

/**
 * A type name follows `::` and `AS`, where a `(` can only be a type modifier,
 * so this is a plain expression list: `numeric(10, 2)` and
 * `timestamp(3) with time zone` both arrive here.
 */
TypeModifiers:
    '(' values+=Expression (',' values+=Expression)* ')';

/**
 * `YEAR`, `DAY TO SECOND` and the rest. Written as a unit and an optional
 * second unit rather than as the seven fixed pairs the documentation lists,
 * which share prefixes (`DAY TO ...`) no lookahead separates. The pairs the
 * server rejects are decided from the AST in `sql-validator.ts`.
 */
IntervalFields returns string:
    IntervalUnit ('TO' IntervalUnit)?;

IntervalUnit returns string:
    'YEAR' | 'MONTH' | 'DAY' | 'HOUR' | 'MINUTE' | 'SECOND';

/** A type name is a `type_function_name`, not a `ColId`. */
QualifiedTypeName:
    parts+=TypeFunctionName ('.' parts+=TypeFunctionName)*;

/** `int[]`, `int[3]`, `int[3][4]`, and the SQL-standard `int ARRAY[3]`. */
ArraySuffix:
      {infer ArrayKeyword} 'ARRAY' ('[' size=NUMBER ']')?
    | {infer ArrayBrackets} ('[' sizes+=NUMBER? ']')+;

// ---------------------------------------------------------------------------
// Literals, names and lexer
// ---------------------------------------------------------------------------

/**
 * `type 'literal'`, the third spelling of a cast (4.1.2.7). Only the types
 * whose names are keywords are accepted here: a generic `myschema.mytype 'x'`
 * shares an unbounded prefix with a column reference followed by a string,
 * which no fixed lookahead separates.
 *
 * DIVERGENCE: `mytype '1'` is therefore rejected; `'1'::mytype` and
 * `CAST('1' AS mytype)` are accepted and mean the same.
 */
TypedLiteral infers Expression:
      // `INTERVAL '1' DAY TO SECOND` - the qualifier follows the literal here,
      // unlike in a type position, where it follows the type name.
      {infer IntervalLiteral} 'INTERVAL' precision=TypeModifiers? value=SCONST
        fields=IntervalFields?
    | {infer TypedLiteral} type=KeywordTypeName value=SCONST;

/**
 * Adjacent string literals concatenate (4.1.2.1), which is why `value` is
 * multi-valued. PostgreSQL requires a newline between them; without one it is a
 * syntax error, and since that is a lexical rule the grammar cannot express,
 * `sql-validator.ts` is what reports it.
 */
Literal infers Expression:
      {infer StringLiteral} values+=SCONST+
    | {infer EscapeStringLiteral} values+=ESTRING+
    | {infer UnicodeStringLiteral} values+=USTRING+
    | {infer DollarStringLiteral} value=DOLLAR_STRING
    | {infer NumberLiteral} value=NUMBER
    | {infer BitStringLiteral} value=BIT_STRING
    | {infer HexStringLiteral} value=HEX_STRING
    | {infer BooleanLiteral} value=('TRUE' | 'FALSE')
    | {infer NullLiteral} 'NULL';

/**
 * `schema.table.column`, or `tbl.*`.
 *
 * Parts are collected flat; which part is which depends on how many there are
 * and on context, and this grammar resolves nothing, so it does not try to name
 * them. After the first `.` a part may be any keyword at all, which is what
 * `ColLabel` is for - `t.order` is a valid column reference.
 *
 * The trailing `.*` belongs here rather than at the call sites because the
 * repetition is greedy and rule-local: Chevrotain decides whether to take
 * another `('.' ColLabel)` using only what is inside this rule, so a `.`
 * followed by `*` in a *caller* would be consumed by the repetition and then
 * fail demanding a name.
 */
QualifiedName:
    parts+=Identifier ('.' parts+=ColLabel)* ('.' wildcard?='*')?;

/**
 * The four name positions PostgreSQL distinguishes. The keyword rules come
 * from the generated import at the top of this file.
 */
Identifier returns string:
    ID | QUOTED_ID | UNICODE_ID | UnreservedKeyword | ColNameKeyword;

TypeFunctionName returns string:
    ID | QUOTED_ID | UNICODE_ID | UnreservedKeyword | TypeFuncNameKeyword;

ColLabel returns string:
    ID | QUOTED_ID | UNICODE_ID | UnreservedKeyword | ColNameKeyword | TypeFuncNameKeyword | ReservedKeyword;

BareColLabel returns string:
    ID | QUOTED_ID | UNICODE_ID | BareLabelKeyword;

hidden terminal WS: /\s+/;
/**
 * Block comments nest (4.1.5), which a regular expression cannot express. The
 * pattern here is the non-nesting approximation; `SqlTokenBuilder` replaces it
 * with a counting matcher, and this regex is what the generated parser falls
 * back to if that replacement is ever lost.
 */
hidden terminal BLOCK_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal LINE_COMMENT: /--[^\n\r]*/;

/**
 * Dollar quoting: `$$...$$` or `$tag$...$tag$`, where the closing tag must
 * repeat the opening one. Matching the tag is beyond a regular expression, so
 * `SqlTokenBuilder` replaces this pattern too; the approximation here handles
 * the untagged form.
 *
 * Declared before PARAM so `$1` cannot be mistaken for the start of a tag.
 */
terminal DOLLAR_STRING: /\$\$[\s\S]*?\$\$/;
terminal PARAM: /\$[0-9]+/;

// A doubled `"` inside a quoted identifier is one literal quote.
terminal QUOTED_ID: /"(?:[^"]|"")*"/;
terminal UNICODE_ID: /[uU]&"(?:[^"]|"")*"(?:[\s]+[uU][eE][sS][cC][aA][pP][eE][\s]+'[^']')?/;

// standard_conforming_strings is on, so a backslash is an ordinary character
// here; only E'' gives it meaning.
//
// Named as `gram.y` names it: `STRING` is itself a keyword in this grammar,
// inside JSON_QUERY's `OMIT QUOTES ON SCALAR STRING`, and a terminal may not
// share a name with a keyword.
terminal SCONST: /'(?:[^']|'')*'/;
terminal ESTRING: /[eE]'(?:[^'\\]|\\.|'')*'/;
terminal USTRING: /[uU]&'(?:[^']|'')*'(?:[\s]+[uU][eE][sS][cC][aA][pP][eE][\s]+'[^']')?/;
terminal BIT_STRING: /[bB]'[01]*'/;
terminal HEX_STRING: /[xX]'[0-9a-fA-F]*'/;

/**
 * Decimal, hexadecimal, octal and binary, with the `_` separators PostgreSQL 16
 * added. Longest first: `1.5e3` must get a chance before `1`.
 *
 * A digit-leading run that is neither (`1a`) is a syntax error on the server
 * ("trailing junk after numeric literal"); it lexes here as a number followed by
 * an identifier, and `sql-validator.ts` reports the pair.
 */
terminal NUMBER returns number:
    /0[xX][0-9a-fA-F_]+|0[oO][0-7_]+|0[bB][01_]+|(?:[0-9][0-9_]*\.[0-9_]*|\.[0-9][0-9_]*|[0-9][0-9_]*)(?:[eE][+-]?[0-9][0-9_]*)?/;

/**
 * Any operator PostgreSQL would lex as one token (4.1.3): a run of the
 * operator characters, subject to the rule that a multi-character operator may
 * not end in `+` or `-` unless it also contains one of `~ ! @ # % ^ & | ` ?`.
 * That rule is why `a<-1` is `a < -1` rather than an operator `<-`.
 *
 * The regex below is the run without the trailing-character rule;
 * `SqlTokenBuilder` replaces it with a matcher that applies the rule. Keyword
 * tokens are built before terminals and carry a LONGER_ALT to this one, so the
 * operators that have a precedence tier of their own (`=`, `<`, `::`, `+`) stay
 * their own tokens while `@>` and `->>` still lex whole.
 */
terminal OP: /[+\-*/<>=~!@#%^&|`?]+/;

/**
 * An unquoted identifier: a letter, `_` or a non-ASCII character, then letters,
 * digits, `_` or `$`. `SqlValueConverter` folds it to lower case, as the server
 * does.
 */
terminal ID: /[A-Za-z_-￿][\w$-￿]*/;
