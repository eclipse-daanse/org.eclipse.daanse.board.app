/**
 * DAX - everything a query and a formula have in common: expressions,
 * references, literals, the lexer, and the definitions a DEFINE clause
 * holds (a formula never reaches those rules; they live here because the
 * references below have to be able to point at them).
 *
 * Sources, in order of authority:
 *
 *   1. The Eclipse Daanse DAX parser, eclipse-daanse/org.eclipse.daanse.dax,
 *      parser.ccc at 9ecd1fb. A working implementation, treated as the
 *      contract: what it accepts is accepted here, what it rejects is
 *      rejected.
 *   2. Microsoft's DAX reference, https://learn.microsoft.com/en-us/dax/.
 *      Where it is unambiguous - a documented operator, a documented syntax,
 *      an example on the page - and the reference parser does not follow it,
 *      this grammar follows Microsoft. Every such place is marked DIVERGENCE
 *      and listed in the README; each is a candidate for a fix upstream.
 *
 * This file has no entry rule. It is imported by dax-query.langium (a query:
 * DEFINE, EVALUATE) and dax-formula.langium (a formula: one expression),
 * the two entry points the reference parser has.
 *
 * Keywords are matched case-insensitively; see `caseInsensitive` in
 * langium-config.json.
 *
 * DIVERGENCE: the reference parser's keywords are case-sensitive -
 * `evaluate`, `var ... return` and `true()` are syntax errors there.
 * Microsoft's own examples write `Define`, `Measure` (BITLSHIFT) and
 * `false()` (FALSE).
 */
// No `grammar` declaration: that is what lets a grammar without an entry rule
// be imported by the two that have one.

// ---------------------------------------------------------------------------
// Expressions
//
// Precedence, loosest first:
//
//   && ||   NOT   comparison and IN   &   + -   * /   sign   ^
//
// From NOT inward this is Microsoft's table (DAX operators, "Operator
// precedence"). The table does not rank && and ||, so they follow the
// reference parser: one level, left to right - `a || b && c` is
// `(a || b) && c`.
//
// DIVERGENCE: the reference parser has neither NOT nor a sign operator
// (`-1`, `NOT [x] = 1`, `-[Total]` are syntax errors there). Both are in
// Microsoft's table.
// ---------------------------------------------------------------------------

Expression:
    VarExpression | LogicalExpression;

/**
 * `VAR a = 1 VAR b = 2 RETURN a + b`. It sits at the loosest level, so as an
 * operand it has to be parenthesized: `1 + (VAR b = 1 RETURN b)`, not
 * `1 + VAR b = 1 RETURN b` - the reference parser rejects the latter, and
 * so does this grammar.
 */
VarExpression:
    variables+=VariableDefinition+ 'RETURN' result=Expression;

VariableDefinition:
    'VAR' name=Name '=' value=Expression;

LogicalExpression infers Expression:
    NotExpression ({infer BinaryExpression.left=current} operator=('&&' | '||') right=NotExpression)*;

/**
 * `NOT` binds looser than comparison, so `NOT [a] = 1` is `NOT ([a] = 1)`.
 * The function form `NOT([a] > 1)` is the same rule with a parenthesized
 * operand - both are what Microsoft documents.
 */
NotExpression infers Expression:
      {infer NotExpression} 'NOT' operand=NotExpression
    | ComparisonExpression;

/**
 * One comparison at most. `1 = 1 = TRUE` is a syntax error in the reference
 * parser; this grammar agrees.
 *
 * DIVERGENCE: `==` (strict equality, documented) is not a token in the
 * reference parser.
 */
ComparisonExpression infers Expression:
    ConcatExpression (
        {infer ComparisonExpression.left=current}
        operator=('==' | '=' | '<>' | '<=' | '>=' | '<' | '>' | 'IN')
        right=ConcatExpression
    )?;

ConcatExpression infers Expression:
    AdditiveExpression ({infer BinaryExpression.left=current} operator='&' right=AdditiveExpression)*;

AdditiveExpression infers Expression:
    MultiplicativeExpression ({infer BinaryExpression.left=current} operator=('+' | '-') right=MultiplicativeExpression)*;

MultiplicativeExpression infers Expression:
    SignExpression ({infer BinaryExpression.left=current} operator=('*' | '/') right=SignExpression)*;

/** A sign binds looser than `^`: `-2 ^ 2` is `-(2 ^ 2)`. */
SignExpression infers Expression:
      {infer SignExpression} operator=('+' | '-') operand=SignExpression
    | PowerExpression;

/**
 * Left-associative, as in the reference parser: `2 ^ 3 ^ 2` is `(2 ^ 3) ^ 2`.
 * The right operand is a primary, so `2 ^ -1` needs parentheses there too.
 */
PowerExpression infers Expression:
    PrimaryExpression ({infer BinaryExpression.left=current} operator='^' right=PrimaryExpression)*;

PrimaryExpression infers Expression:
      ParenthesizedExpression
    | TableConstructor
    | FunctionCall
    | Literal
    | ColumnReference
    | TableReference
    | ParameterReference
    | NameExpression;

/**
 * A parenthesized expression, or a row of several: `('T'[A], 'T'[B])`.
 *
 * DIVERGENCE: the reference parser admits a parenthesized row only as a row
 * of a table constructor. Microsoft documents it on the left of IN as well -
 * `( <scalarExpr1>, <scalarExpr2>, … ) IN <tableExpr>` (CONTAINSROW) - and
 * the reference parser itself takes it as the list of START AT values.
 */
ParenthesizedExpression infers Expression:
    '(' Expression ({infer RowExpression.values+=current} ',' values+=Expression (',' values+=Expression)*)? ')';

/** `{ 1, 2 }`, `{ ("a", 1), ("b", 2) }` - a row is a parenthesized list. */
TableConstructor:
    '{' rows+=Expression (',' rows+=Expression)* '}';

/**
 * DIVERGENCE: the reference parser's function names are plain identifiers,
 * so `PERCENTILE.INC(...)`, `T.DIST.2T(...)` and every `INFO.*` function are
 * syntax errors there. Microsoft's reference is full of them.
 *
 * `TRUE()`, `FALSE()` and `NOT(...)` are not here: they are the literal and
 * the operator, written with parentheses.
 */
FunctionCall:
    name=FunctionName '(' (arguments+=Expression (',' arguments+=Expression)*)? ')';

FunctionName returns string:
    ID | DOTTED_NAME;

// ---------------------------------------------------------------------------
// References
// ---------------------------------------------------------------------------

/**
 * A column or a measure: `'Sales'[Amount]`, `Sales[Amount]`, `[Total]`,
 * `@Table[Amount]`.
 *
 * The bracketed name is a cross-reference so that a measure or column the
 * query itself defines can be navigated to. Most names belong to the model,
 * which the editor does not know, so an unresolved reference is not an
 * error - see DaxDocumentValidator.
 *
 * DIVERGENCE: the reference parser accepts only the quoted table name
 * before a column. `Sales[Amount]` - an unquoted table, the form Microsoft
 * writes throughout its reference - is a syntax error there. DAX syntax
 * requires the quotes only "if the name of a table contains spaces,
 * reserved keywords, or disallowed characters".
 */
ColumnReference:
    (table=TableName | tableParameter=PARAM)? column=[ColumnDeclaration:BRACKET_ID];

TableName returns string:
    QUOTED_TABLE | ID;

/**
 * `'Sales'` - a table of the model, by its quoted name. The unquoted form is
 * a NameExpression, because it cannot be told from a variable by spelling.
 */
TableReference:
    table=QUOTED_TABLE;

/** `@MinAmount` - a query parameter. */
ParameterReference:
    parameter=[ParameterDeclaration:PARAM];

/**
 * A bare word: a variable, a table a DEFINE TABLE declares, an unquoted
 * table of the model (`EVALUATE Sales`), or a keyword argument such as the
 * `DESC` of TOPN or the `SKIP` of RANKX. Only the first two are known to
 * the document, so an unresolved name is not an error.
 */
NameExpression:
    target=[Declaration:NameReference];

/*
 * DIVERGENCE: NAMEOF documents TABLE, COLUMN and MEASURE as values of its
 * component argument (`NAMEOF('Sales'[Amount], TABLE)`); in the reference
 * parser they are keywords only. They are words here where a value is
 * expected, and still cannot name a variable.
 */
NameReference returns string:
    Name | 'TABLE' | 'COLUMN' | 'MEASURE';

/** ASC and DESC are keywords in ORDER BY and plain words everywhere else. */
Name returns string:
    ID | 'ASC' | 'DESC';

/** What a bare word, a bracketed name and an `@name` can point at. */
type Declaration = VariableDefinition | TableDefinition;
type ColumnDeclaration = MeasureDefinition | ColumnDefinition;
type ParameterDeclaration = ParameterDefinition;

// ---------------------------------------------------------------------------
// Definitions (the DEFINE clause of a query)
//
// DAX separates definitions by whitespace; the reference parser also takes a
// comma between them, for compatibility, and so does dax-query.langium.
// ---------------------------------------------------------------------------

Definition:
    MeasureDefinition | ColumnDefinition | TableDefinition | VariableDefinition | ParameterDefinition;

/**
 * `MEASURE 'Sales'[Total] = SUM('Sales'[Amount])` - always table and name.
 * The name is what `[Total]` elsewhere in the query resolves to.
 */
MeasureDefinition:
    'MEASURE' table=TableName name=BRACKET_ID '=' expression=Expression;

/** `COLUMN 'Sales'[Band] = IF(...)` - the same shape under another keyword. */
ColumnDefinition:
    'COLUMN' table=TableName name=BRACKET_ID '=' expression=Expression;

/**
 * `TABLE Top = TOPN(10, 'Product', ...)`.
 *
 * DIVERGENCE: the name may be quoted, as table names may everywhere else -
 * Microsoft's DAX queries page defines `TABLE 'Unbought products' = ...`.
 */
TableDefinition:
    'TABLE' name=(Name | QUOTED_TABLE) '=' expression=Expression;

/** `@MinAmount = 100` - a default for a query parameter. */
ParameterDefinition:
    name=PARAM '=' expression=Expression;

// ---------------------------------------------------------------------------
// Literals
// ---------------------------------------------------------------------------

Literal:
    StringLiteral | NumberLiteral | BooleanLiteral | DateTimeLiteral;

StringLiteral:
    value=STRING;

/**
 * Digits, optionally a fraction. No exponent and no leading dot: `1E3` and
 * `.5` are syntax errors in the reference parser, and Microsoft's reference
 * uses neither.
 */
NumberLiteral:
    value=NUMBER;

/** `TRUE`, `FALSE`, and the function forms `TRUE()` and `FALSE()`. */
BooleanLiteral:
    {infer BooleanLiteral} (value?='TRUE' | 'FALSE') ('(' ')')?;

/** `dt"2024-01-31"` or `dt"2024-01-31T10:30:00"`. */
DateTimeLiteral:
    value=DATETIME;

// ---------------------------------------------------------------------------
// Lexer
// ---------------------------------------------------------------------------

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
// DAX accepts both `//` and `--` line comments. Two terminals rather than one
// alternation so each stays independently readable.
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
hidden terminal SQL_COMMENT: /--[^\n\r]*/;

// DIVERGENCE: "A literal closing bracket (]) in a column or measure name is
// escaped as ]]" (NAMEOF); the reference parser's column token cannot
// contain `]`.
terminal BRACKET_ID: /\[(?:[^\]]|\]\])*\]/;
terminal QUOTED_TABLE: /'(?:[^']|'')*'/;
terminal STRING: /"(?:[^"]|"")*"/;
// Before ID, so `dt"..."` is not read as the name `dt` followed by a string.
terminal DATETIME: /dt"[^"]*"/;
terminal PARAM: /@[a-zA-Z_]\w*/;
// DIVERGENCE: Microsoft's own examples write `3.1E-1` (ISNUMBER and the
// other IS* pages) and `.1` (FLOOR); the reference parser's number token has
// neither an exponent nor a bare leading dot.
terminal NUMBER returns number: /(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?/;
// Before ID, so `PERCENTILE.INC` is one token. Segments after the first may
// start with a digit: `T.DIST.2T`.
terminal DOTTED_NAME: /[a-zA-Z_]\w*(?:\.\w+)+/;
terminal ID: /[a-zA-Z_]\w*/;
