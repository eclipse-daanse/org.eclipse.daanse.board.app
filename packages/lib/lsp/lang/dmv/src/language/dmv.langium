/**
 * Grammar for DMV (Dynamic Management View) queries — the SQL-like language
 * Analysis Services exposes over its schema rowsets.
 *
 * Sources, in order of authority:
 *
 *   1. `dmv.ccc` in this folder — the CongoCC grammar from the Eclipse Daanse
 *      DMV parser. This is a working implementation and is treated as the
 *      contract.
 *   2. https://learn.microsoft.com/en-us/analysis-services/instances/use-dynamic-management-views-dmvs-to-monitor-analysis-services
 *      Microsoft's syntax summary, which agrees with (1).
 *   3. `DMV-specs.md` in this folder — a drafting brief. Its rule and AST
 *      names are followed here; where it contradicts (1) and (2), the
 *      implementation wins. Every such divergence is marked DIVERGENCE below.
 *
 * The query engine is the Data Mining parser, so this is DMX SELECT minus most
 * of it. JOIN, GROUP BY, HAVING, LIKE, IN, CAST, CONVERT and all DDL/DML are
 * deliberately absent — the server rejects them, so the grammar must too.
 *
 * Keywords are matched case-insensitively; see `caseInsensitive` in
 * langium-config.json.
 */
grammar Dmv

// ---------------------------------------------------------------------------
// Statement
// ---------------------------------------------------------------------------

/**
 * A DMV request is exactly one statement, with an optional trailing `;`
 * (accepted by the reference parser and emitted by several clients).
 */
entry DmvModel:
    query=SelectStatement ';'?;

SelectStatement:
    'SELECT'
    (distinct?='DISTINCT')?
    ('TOP' topLimit=INT)?
    // `*` is exclusive — the reference grammar is `( * | <column> [, <column>]* )`,
    // so it cannot be mixed into a column list.
    //
    // DIVERGENCE from DMV-specs.md, which models `*` as one kind of
    // `SelectItem` and so would accept `SELECT *, TABLE_NAME`.
    (wildcard?='*' | selections+=SelectItem (',' selections+=SelectItem)*)
    'FROM' source=FromClause
    ('WHERE' whereFilter=Expression)?
    ('ORDER' 'BY' orderings+=SortItem (',' orderings+=SortItem)*)?;

/**
 * DIVERGENCE from DMV-specs.md, which also allows a `FunctionCall` here.
 * Neither the reference parser nor Microsoft's syntax admits function calls
 * anywhere in a DMV query; accepting them would green-light statements the
 * server rejects.
 */
SelectItem:
    ColumnReference;

ColumnReference:
    name=Identifier;

// ---------------------------------------------------------------------------
// FROM
// ---------------------------------------------------------------------------

FromClause:
    TableReference | SystemRestrictSchemaCall;

/**
 * Always `$System.<rowset>`. The `$System` schema is the only one DMV exposes,
 * and `$` cannot start a bare identifier, so it is a keyword rather than part
 * of `ID`.
 *
 * DIVERGENCE from DMV-specs.md, which describes a general dot-separated path
 * and gives `[DB].[Cube].[$Dim]` as an example. The reference parser accepts
 * exactly two segments anchored on `$System`, and so does Microsoft's syntax
 * (`FROM $System.<schemaRowset>`).
 */
TableReference:
    '$SYSTEM' '.' rowset=Identifier;

/**
 * Rowsets that take restrictions must be wrapped:
 *
 *   SELECT * FROM SYSTEMRESTRICTSCHEMA(
 *       $System.DISCOVER_CSDL_METADATA, [CATALOG_NAME] = 'Adventure Works DW')
 *
 * The restriction list is zero-or-more, matching the reference parser.
 * DMV-specs.md requires at least one.
 */
SystemRestrictSchemaCall:
    'SYSTEMRESTRICTSCHEMA' '(' table=TableReference (',' parameters+=ParameterAssignment)* ')';

/** Restriction names appear both bare and `[bracketed]` in the wild. */
ParameterAssignment:
    paramName=Identifier '=' value=Literal;

// ---------------------------------------------------------------------------
// ORDER BY
// ---------------------------------------------------------------------------

SortItem:
    column=ColumnReference (direction=SortDirection)?;

SortDirection returns string:
    'ASC' | 'DESC';

// ---------------------------------------------------------------------------
// WHERE
//
// Langium's parser is LL, so the precedence chain is written as an iterative
// cascade rather than left-recursively: OR binds loosest, then AND, then NOT,
// then comparison, then primaries.
// ---------------------------------------------------------------------------

Expression:
    OrExpression;

OrExpression infers Expression:
    AndExpression ({infer OrExpression.left=current} 'OR' right=AndExpression)*;

AndExpression infers Expression:
    UnaryExpression ({infer AndExpression.left=current} 'AND' right=UnaryExpression)*;

/**
 * `NOT` binds looser than comparison and tighter than `AND`. The reference
 * parser's `parseUnaryPredicate` recurses on itself and then falls through to
 * `parsePrimaryPredicate`, which parses a whole comparison — so `NOT A = 1`
 * is `NOT (A = 1)`, not `(NOT A) = 1`.
 */
UnaryExpression infers Expression:
      {infer NotExpression} 'NOT' operand=UnaryExpression
    | ComparisonExpression;

/**
 * A comparison is optional: a bare column is itself a valid predicate in the
 * reference parser (`BareColumnR`), which is how boolean rowset columns are
 * filtered.
 */
ComparisonExpression infers Expression:
    PrimaryExpression (
        {infer ComparisonExpression.left=current} operator=ComparisonOperator right=PrimaryExpression
    )?;

/**
 * Longest alternatives first so `<>` and `<=` are not lexed as `<` followed by
 * something else.
 */
ComparisonOperator returns string:
    '<>' | '>=' | '<=' | '=' | '>' | '<';

PrimaryExpression infers Expression:
      '(' Expression ')'
    | Literal
    | ParameterReference
    | ColumnReference;

/**
 * `@name` — a parameter placeholder the client binds before sending. The
 * reference parser accepts it only as the right-hand side of a comparison;
 * it is a primary here so that the expression chain stays uniform, which
 * makes the grammar accept `@p = COLUMN` as well. Harmless for an editor.
 *
 * Not mentioned in DMV-specs.md at all.
 */
ParameterReference:
    value=PARAM;

// ---------------------------------------------------------------------------
// Literals and identifiers
// ---------------------------------------------------------------------------

Literal:
    StringLiteral | NumberLiteral;

StringLiteral:
    value=STRING;

/** The reference parser accepts a leading `-` on numerics. */
NumberLiteral:
    (negative?='-')? value=(INT | DECIMAL);

/**
 * Bare or `[bracketed]`. The brackets and the `''`/`""` string quotes are
 * stripped in the AST by `DmvValueConverter`, so `[CATALOG_NAME]` and
 * `CATALOG_NAME` produce the same `name`.
 */
Identifier returns string:
    ID | QUOTED_ID;

// ---------------------------------------------------------------------------
// Lexer
// ---------------------------------------------------------------------------

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
// DMV accepts both `//` and `--` line comments. Two terminals rather than one
// alternation so each stays independently readable.
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
hidden terminal SQL_COMMENT: /--[^\n\r]*/;

// A literal `]` inside a bracketed identifier is written `]]`.
terminal QUOTED_ID: /\[(?:[^\]]|\]\])*\]/;
// Single- and double-quoted, each doubling its own quote to escape it.
//
// DIVERGENCE from DMV-specs.md ("strictly single quotes"): the reference
// parser has a DOUBLE_QUOTED_STRING token too.
terminal STRING: /'(?:[^']|'')*'|"(?:[^"]|"")*"/;
terminal PARAM: /@[a-zA-Z_]\w*/;
// DECIMAL before INT: Chevrotain matches terminals in declaration order, so
// `1.5` must get a chance to lex as one token before `1` does.
terminal DECIMAL returns number: /[0-9]+\.[0-9]*|\.[0-9]+/;
terminal INT returns number: /[0-9]+/;
terminal ID: /[a-zA-Z_]\w*/;
