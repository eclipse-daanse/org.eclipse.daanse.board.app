/**
 * Grammar for MDX (Multidimensional Expressions), the query and scripting
 * language used by SQL Server Analysis Services, Azure Analysis Services and
 * Fabric / Power BI Premium.
 *
 * Productions follow Microsoft's normative BNF:
 *   SELECT       https://learn.microsoft.com/en-us/sql/mdx/mdx-data-manipulation-select
 *   CREATE MEMBER https://learn.microsoft.com/en-us/sql/mdx/mdx-data-definition-create-member
 *   SCOPE        https://learn.microsoft.com/en-us/sql/mdx/mdx-scripting-scope
 *   Identifiers  https://learn.microsoft.com/en-us/sql/mdx/identifiers-mdx
 *   Operators    https://learn.microsoft.com/en-us/sql/mdx/operators-mdx-syntax
 *
 * A second port of MDX, from the Eclipse Daanse CongoCC grammars, is kept
 * beside this file as `mdx.langium.alt`. Constructs it covered and this one did
 * not have been merged in — `@parameters`, composite `&[…]&[…]` keys, `CAST`,
 * `AS` aliases, `||`, `DRILLTHROUGH` / `UPDATE CUBE` / `EXPLAIN` / `REFRESH` /
 * `CALL`, and skippable argument slots. `docs/mdx-grammar-comparison.md`
 * compares the two in full and records what was deliberately not taken.
 *
 * Keywords are matched case-insensitively; see `caseInsensitive` in
 * langium-config.json.
 */
grammar Mdx

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

entry MdxScript:
    (statements+=Statement ';'?)*;

Statement:
      SelectStatement
    | DrillthroughStatement
    | ExplainStatement
    | RefreshStatement
    | UpdateStatement
    | CallStatement
    | CreateStatement
    | DropStatement
    | ScopeStatement
    | CalculateStatement
    | FreezeStatement
    // Last: every other alternative is picked by its leading keyword, and an
    // assignment starts with an ordinary expression.
    | Assignment;

// ---------------------------------------------------------------------------
// SELECT
// ---------------------------------------------------------------------------

SelectStatement:
    ('WITH' with+=WithClause (','? with+=WithClause)*)?
    'SELECT'
    (star?='*' | (axes+=AxisClause (',' axes+=AxisClause)*))?
    'FROM' from=SubcubeClause
    ('WHERE' slicer=Expression)?
    (cellProperties=CellPropertyList)?;

AxisClause:
    (nonEmpty?='NON' 'EMPTY')?
    set=Expression
    (dimensionProperties=DimensionPropertyList)?
    'ON' target=AxisTarget;

AxisTarget:
      {infer NamedAxis} name=('COLUMNS' | 'ROWS' | 'PAGES' | 'SECTIONS' | 'CHAPTERS')
    | {infer AxisFunction} 'AXIS' '(' ordinal=Expression ')'
    | {infer OrdinalAxis} ordinal=Expression;

DimensionPropertyList:
    'DIMENSION'? 'PROPERTIES' properties+=MemberPath (',' properties+=MemberPath)*;

CellPropertyList:
    'CELL'? 'PROPERTIES' properties+=MemberPath (',' properties+=MemberPath)*;

SubcubeClause:
      {infer CubeReference} cube=MemberPath
    | {infer SubSelect} (nonVisual?='NON' 'VISUAL')? '(' select=SelectStatement ')';

// ---------------------------------------------------------------------------
// Statements built around a SELECT
// ---------------------------------------------------------------------------

/**
 * `DRILLTHROUGH [MAXROWS n] [FIRSTROWSET n] <select> [RETURN <columns>]` —
 * returns the source rows behind a cell rather than the aggregate.
 */
DrillthroughStatement:
    'DRILLTHROUGH'
    ('MAXROWS' maxRows=NUMBER)?
    ('FIRSTROWSET' firstRowSet=NUMBER)?
    select=SelectStatement
    ('RETURN' returns+=MemberPath (',' returns+=MemberPath)*)?;

ExplainStatement:
    'EXPLAIN' 'PLAN' 'FOR' statement=(SelectStatement | DrillthroughStatement);

RefreshStatement:
    'REFRESH' 'CUBE' cube=MemberPath;

/** Writeback: `UPDATE CUBE [C] SET (<tuple>) = <value> [<allocation>]`. */
UpdateStatement:
    'UPDATE' 'CUBE' cube=MemberPath 'SET' clauses+=UpdateClause (',' clauses+=UpdateClause)*;

UpdateClause:
    target=PostfixExpression '=' value=Expression
    allocation=('USE_EQUAL_ALLOCATION' | 'USE_EQUAL_INCREMENT'
        | 'USE_WEIGHTED_ALLOCATION' | 'USE_WEIGHTED_INCREMENT')?
    ('BY' weight=Expression)?;

/**
 * `CALL <procedure>(<args>)`. The target is the postfix chain, so a
 * namespace-qualified stored procedure (`CALL ASSP.Proc(1)`) works without a
 * dedicated rule.
 */
CallStatement:
    'CALL' procedure=PostfixExpression;

// ---------------------------------------------------------------------------
// WITH clauses (query-scoped definitions)
// ---------------------------------------------------------------------------

WithClause:
      WithMember
    | WithSet
    | WithCellCalculation
    | WithMeasure;

WithMember:
    'CALCULATED'? 'MEMBER' name=MemberPath 'AS' value=Expression
    (',' properties+=PropertyAssignment)*;

WithSet:
    'SET' name=MemberPath 'AS' value=Expression
    (',' properties+=PropertyAssignment)*;

WithCellCalculation:
    'CELL' 'CALCULATION' name=MemberPath 'FOR' scope=CellCalculationScope 'AS' value=Expression
    (',' properties+=PropertyAssignment)*;

WithMeasure:
    'MEASURE' '=' value=Expression;

CellCalculationScope:
      {infer CellScopeString} value=STRING
    | {infer CellScopeExpression} '(' subcube+=Expression (',' subcube+=Expression)* ')';

PropertyAssignment:
    name=Identifier '=' value=Expression;

// ---------------------------------------------------------------------------
// Data definition
// ---------------------------------------------------------------------------

/**
 * CREATE MEMBER / SET / SUBCUBE / KPI / CELL CALCULATION share a `CREATE`
 * prefix, so they are folded into one rule. Splitting them into separate
 * `Statement` alternatives would need five tokens of lookahead
 * (`CREATE SESSION HIDDEN CALCULATED MEMBER`).
 */
CreateStatement:
    'CREATE' (session?='SESSION' | global?='GLOBAL')? hidden?='HIDDEN'? calculated?='CALCULATED'?
    (
        kind='MEMBER' name=MemberPath 'AS' value=Expression
            (',' properties+=PropertyAssignment)*
      | kind='SET' name=MemberPath 'AS' value=Expression
            (',' properties+=PropertyAssignment)*
      // CREATE SUBCUBE takes a full SELECT, not an expression: it restricts
      // the visible cube for the remainder of the session.
      | kind='SUBCUBE' name=MemberPath 'AS' subcube=SelectStatement
      | kind='KPI' name=MemberPath 'AS' value=Expression
            (',' properties+=PropertyAssignment)*
      | kind='CELL' 'CALCULATION' name=MemberPath 'FOR' scope=CellCalculationScope 'AS' value=Expression
            (',' properties+=PropertyAssignment)*
    );

DropStatement:
    'DROP'
    (kind='MEMBER' | kind='SET' | kind='SUBCUBE' | kind='KPI' | kind='CELL' 'CALCULATION')
    targets+=MemberPath (',' targets+=MemberPath)*;

// ---------------------------------------------------------------------------
// Scripting
// ---------------------------------------------------------------------------

ScopeStatement:
    'SCOPE' '(' subcube+=Expression (',' subcube+=Expression)* ')' ';'?
    (body+=Statement ';'?)*
    'END' 'SCOPE';

/**
 * Cell assignment, e.g. `This = ParallelPeriod(...) * 1.35`.
 * The target is deliberately a `PostfixExpression` rather than a full
 * `Expression`: `=` is also the comparison operator, so an unrestricted
 * left-hand side would swallow the assignment as a comparison.
 */
Assignment:
    target=PostfixExpression '=' value=Expression;

CalculateStatement:
    {infer CalculateStatement} 'CALCULATE';

/**
 * The subcube list is optional: a bare `FREEZE;` freezes the enclosing SCOPE,
 * which is the common form inside a script.
 */
FreezeStatement:
    {infer FreezeStatement} 'FREEZE' ('(' subcube+=Expression (',' subcube+=Expression)* ')')?;

// ---------------------------------------------------------------------------
// Expressions
//
// Microsoft's precedence, highest to lowest:
//   IS  ·  :  ·  ^  ·  / *  ·  + -  ·  <> >= = <= > <  ·  NOT  ·  AND  ·  XOR  ·  OR
//
// `NOT` is a prefix operator that binds *looser* than comparison, which an
// `infix` block cannot express, so the boolean levels are written by hand and
// the tight arithmetic/comparison half uses `infix`.
// ---------------------------------------------------------------------------

Expression:
    AliasExpression;

/**
 * `<set> AS <name>` names a set inline, most often on an axis:
 * `SELECT [Product].Members AS P ON 0 FROM [Cube]`. It is the loosest binding
 * in the language, so it sits at the top of the chain — which also keeps `AS`
 * available as the separator in `CAST(… AS …)`, whose operand starts one level
 * down at `OrExpression`.
 */
AliasExpression infers Expression:
    OrExpression ({infer AliasedExpression.expression=current} 'AS' alias=Identifier)*;

OrExpression infers Expression:
    XorExpression ({infer LogicalExpression.left=current} operator='OR' right=XorExpression)*;

XorExpression infers Expression:
    AndExpression ({infer LogicalExpression.left=current} operator='XOR' right=AndExpression)*;

AndExpression infers Expression:
    NotExpression ({infer LogicalExpression.left=current} operator='AND' right=NotExpression)*;

NotExpression infers Expression:
      {infer UnaryExpression} operator='NOT' operand=NotExpression
    | BinaryExpression;

/**
 * `*` is both multiplication and Crossjoin, `+` both addition and Union,
 * `-` both subtraction and Except. They share a token *and* a precedence
 * level, so a single node covers both readings; whether an occurrence is
 * arithmetic or set algebra is a question about operand types, resolved in
 * validation rather than in the parser.
 */
infix BinaryExpression on UnaryExpr:
      'IS'
    > ':'
    > right assoc '^'
    > '*' | '/'
    > '+' | '-' | '||'
    > '<>' | '>=' | '<=' | '=' | '>' | '<';

UnaryExpr infers Expression:
      {infer UnaryExpression} operator=('-' | '+') operand=UnaryExpr
    | PostfixExpression;

/**
 * Member navigation. `[Date].[Calendar].&[2005].Children.Item(0)` becomes one
 * uniform left-nested tree.
 */
PostfixExpression infers Expression:
    PrimaryExpression (
          {infer PropertiesCall.target=current} '.' 'PROPERTIES' '(' property=Expression (',' typed?='TYPED')? ')'
        | {infer MethodCall.target=current} '.' name=Identifier '(' arguments+=Expression? (',' arguments+=Expression?)* ')'
        // `keys` carries the second and later parts of a *composite* key, as
        // used by levels keyed on more than one column: `.&[2005]&[7]` is one
        // member reference, not two. The first part stays in `segment` so that
        // the common single-key form is unchanged.
        | {infer MemberAccess.target=current} '.' key?='&'? segment=[Declaration:Identifier] (keys+=KeySegment)*
    )*;

/** A trailing `&<name>` part of a composite key. */
KeySegment returns string:
    '&' Identifier;

PrimaryExpression infers Expression:
      {infer NumberLiteral} value=NUMBER
    | {infer StringLiteral} value=STRING
    | {infer NullLiteral} 'NULL'
    | {infer EmptyLiteral} 'EMPTY'
    | {infer CurrentCubeReference} 'CURRENTCUBE'
    | {infer ThisReference} 'THIS'
    | {infer SetExpression} '{' (items+=Expression (',' items+=Expression)*)? '}'
    // Arity 1 is a parenthesised group, arity > 1 a tuple: a single-member
    // tuple may legally drop its parentheses, so the two are the same syntax.
    | {infer TupleExpression} '(' items+=Expression (',' items+=Expression)* ')'
    | {infer ExistingExpression} 'EXISTING' operand=UnaryExpr
    | {infer ParameterReference} name=PARAM
    | CaseExpression
    | CastExpression
    | DescendantsCall
    | OrderCall
    // Argument slots are individually optional: MDX functions may declare
    // skippable parameters (MDSCHEMA_FUNCTIONS PARAMETERINFO.SKIPPABLE), which
    // callers omit in place — `ParallelPeriod(, , [Date].[Month])`. An omitted
    // slot contributes no element to `arguments`, so arity is counted from the
    // separators in the CST rather than from the array; see mdx-validator.ts.
    | {infer FunctionCall} name=Identifier '(' arguments+=Expression? (',' arguments+=Expression?)* ')'
    // A single path segment. Qualified names such as `[Measures].[Amount]` are
    // built by the postfix chain above, not here: a dotted `MemberPath` in this
    // position would swallow the `.` that member navigation needs.
    | {infer NameReference} member=[Declaration:Identifier];

CaseExpression:
    {infer CaseExpression} 'CASE' subject=Expression?
    ('WHEN' conditions+=Expression 'THEN' results+=Expression)+
    ('ELSE' otherwise=Expression)?
    'END';

/**
 * `CAST(<expr> AS <type>)`. The operand is an `OrExpression` rather than a full
 * `Expression` so that the `AS` here is the cast separator and not the alias
 * operator one level up.
 */
CastExpression:
    {infer CastExpression} 'CAST' '(' value=OrExpression 'AS' type=Identifier ')';

/** Irregular: the third argument is a positional flag, not an expression. */
DescendantsCall:
    {infer DescendantsCall} 'DESCENDANTS' '(' member=Expression
    (',' level=Expression (',' flag=DescendantsFlag)?)? ')';

DescendantsFlag returns string:
    'SELF' | 'AFTER' | 'BEFORE' | 'SELF_AND_AFTER' | 'SELF_AND_BEFORE' | 'SELF_BEFORE_AFTER' | 'LEAVES';

/** Irregular: the sort direction is a positional flag. */
OrderCall:
    {infer OrderCall} 'ORDER' '(' set=Expression ',' by=Expression
    (',' direction=OrderDirection)? ')';

OrderDirection returns string:
    'ASC' | 'DESC' | 'BASC' | 'BDESC';

// ---------------------------------------------------------------------------
// Identifiers
// ---------------------------------------------------------------------------

/**
 * Cube, dimension, hierarchy, level and member names live in server metadata,
 * not in the file, so most names can never be resolved from source. Only those
 * introduced by WITH MEMBER / WITH SET / CREATE MEMBER / CREATE SET are
 * linkable; unresolved references are the normal case and are not reported.
 * See mdx-scope.ts and MdxDocumentValidator.
 */
type Declaration = WithMember | WithSet | CreateStatement;

/**
 * A dotted name in a *declaration* position, where no member navigation
 * competes for the `.` separator.
 */
MemberPath returns string:
    ('CURRENTCUBE' | Identifier) ('.' '&'? Identifier KeySegment*)*;

Identifier returns string:
    ID | BRACKET_ID | SoftKeyword;

/**
 * Keywords that must remain usable as ordinary names, wherever that stays
 * LL-safe. `Leaves(...)` is a function in SCOPE subcube expressions while
 * `LEAVES` is also a Descendants flag; `.Dimension` is a member property while
 * `DIMENSION` also opens a DIMENSION PROPERTIES clause — and the two never
 * compete, because the clause is only reachable after a complete axis
 * expression. Grow this list when a real query fails to parse.
 *
 * `PROPERTIES` and `AXIS` deliberately stay reserved: as identifiers they would
 * be ambiguous exactly where they are used, against `.PROPERTIES(…)` and
 * `AXIS(n)` respectively.
 */
SoftKeyword returns string:
      'LEAVES'
    | 'DIMENSION'
    // Only ever appears in the fixed sequences `REFRESH CUBE` / `UPDATE CUBE`,
    // where there is no choice to make, so it stays free as a name — as in
    // `SCOPE_ISOLATION = CUBE`.
    | 'CUBE';

// ---------------------------------------------------------------------------
// Lexer
// ---------------------------------------------------------------------------

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
// MDX accepts both `//` and `--` line comments. They are kept as two separate
// terminals rather than one alternation so that langium-cli can derive a
// correct TextMate rule for each; an alternation is emitted as the literal
// `//--` and matches nothing.
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
hidden terminal SQL_COMMENT: /--[^\n\r]*/;

// Delimited identifier. A literal `]` inside the body is written `]]`.
terminal BRACKET_ID: /\[(?:[^\]]|\]\])*\]/;
// MDX queries delimit strings with `'`; CREATE MEMBER bodies conventionally use `"`.
terminal STRING: /'(?:[^']|'')*'|"(?:[^"]|"")*"/;
// The exponent is factored out of the alternation so that it applies to both
// spellings of the mantissa: `.5e3` is as valid as `0.5e3`.
terminal NUMBER returns number: /(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?/;
// `@name` — a query parameter, as used by Mondrian and by SSAS clients that
// bind values rather than interpolate them. Before ID: `@` cannot start an ID,
// but keeping the pair adjacent documents that they are alternatives.
terminal PARAM: /@[_a-zA-ZÀ-￿][\wÀ-￿]*/;
terminal ID: /[_a-zA-ZÀ-￿][\wÀ-￿]*/;
