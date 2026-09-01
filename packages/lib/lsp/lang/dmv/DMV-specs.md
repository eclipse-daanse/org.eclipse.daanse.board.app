You are an expert Language Engineer specializing in the Langium framework. 
Your task is to write a complete, valid `.langium` grammar file for the DMV (Dynamic Management Views) query language based strictly on the specification below.

### 1. Lexical Rules & Tokens
*   **Case Insensitivity:** All keywords must be case-insensitive. Use regex terminals like `/(?i)SELECT/`.
*   **Keywords:** `SELECT`, `FROM`, `WHERE`, `ORDER`, `BY`, `DISTINCT`, `TOP`, `ASC`, `DESC`, `AND`, `OR`, `NOT`, `SYSTEMRESTRICTSCHEMA`.
*   **Identifiers:** 
    *   Standard identifiers (letters, numbers, underscores, starts with a letter).
    *   Escaped identifiers: Enclosed in square brackets `[...]` (e.g., `[$Dim Product]`). Ensure the brackets are stripped in the AST via value converters or grammar rules.
    *   System Identifiers: Must support the `$System` prefix (handle the `$` sign).
*   **Literals:** 
    *   String literals (strictly single quotes `'...'`).
    *   Numeric literals (integers and floats).
*   **Operators:** `=`, `<>`, `>`, `<`, `>=`, `<=`.
*   **Punctuation:** `,`, `*`, `.`, `(`, `)`.

### 2. Syntactic Rules
*   **Root Rule:** `DmvModel` containing a single `query` of type `SelectStatement`.
*   **SelectStatement:** 
    `SELECT` (`DISTINCT`)? (`TOP` topLimit=INT)? 
    selections+=SelectItem (',' selections+=SelectItem)* 
    `FROM` source=FromClause 
    (`WHERE` whereFilter=Expression)? 
    (`ORDER` `BY` orderings+=SortItem (',' orderings+=SortItem)*)?
*   **SelectItem:** Can be a wildcard `*`, a `ColumnReference`, or a `FunctionCall`.
*   **FromClause:** Must support two branches:
    1.  `TableReference`: A path of dot-separated identifiers (e.g., `$System.discover_sessions` or `[DB].[Cube].[$Dim]`).
    2.  `SystemRestrictSchemaCall`: 
        `SYSTEMRESTRICTSCHEMA` '(' table=TableReference ',' parameters+=ParameterAssignment (',' parameters+=ParameterAssignment)* ')'
*   **ParameterAssignment:** `paramName=ID '=' value=Literal`
*   **SortItem:** `column=ColumnReference (direction=('ASC' | 'DESC'))?`

### 3. Expressions & Left-Recursion (WHERE clause)
Since Langium uses an LL-parser, you must resolve left-recursion using iterative chains for operator precedence:
*   `Expression` delegates to `OrExpression`.
*   `OrExpression`: `AndExpression` (`OR` `AndExpression`)*
*   `AndExpression`: `ComparisonExpression` (`AND` `ComparisonExpression`)*
*   `ComparisonExpression`: `PrimaryExpression` (Operator `PrimaryExpression`)?
*   `PrimaryExpression`: `Literal` | `ColumnReference` | `FunctionCall` | `NOT` `PrimaryExpression` | '(' `Expression` ')'

### 4. Strict Prohibitions (Do NOT include)
The DMV engine rejects standard SQL features. Do **NOT** generate rules or tokens for:
*   `JOIN`, `GROUP BY`, `HAVING`.
*   `LIKE`, `IN`.
*   `CAST`, `CONVERT`.
*   DDL/DML (`INSERT`, `UPDATE`, etc.).

Please generate the complete `.langium` file content with clean, well-named AST inferences.