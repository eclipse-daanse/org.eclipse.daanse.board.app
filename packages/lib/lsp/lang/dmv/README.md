# DMV grammar

A Langium grammar for **DMV (Dynamic Management View) queries** — the SQL-like
language Analysis Services exposes over its schema rowsets:

```sql
SELECT * FROM $System.DISCOVER_SESSIONS
SELECT DISTINCT TOP 10 TABLE_NAME FROM $System.DBSCHEMA_TABLES ORDER BY TABLE_NAME ASC
SELECT * FROM SYSTEMRESTRICTSCHEMA($System.DISCOVER_CSDL_METADATA, [CATALOG_NAME] = 'Adventure Works DW')
```

```bash
npm run dmv:generate     # regenerate dmv/generated/ from dmv.langium
npx vitest run test/dmv  # parsing, diagnostics, examples and corpus
```

## Files

```
dmv.langium              the grammar
langium-config.json      its own config, so it generates independently of MDX
dmv-value-converter.ts   strips [brackets], 'quotes' and the @ from parameters
dmv-module.ts            createDmvServices() — parser plus the value converter
dmv-ast.ts               the parse-tree strategy: empty, and why
main-browser.ts          runs the DMV language server in a web worker
generated/               langium-cli output; do not edit
DMV-specs.md             the original drafting brief
dmv.ccc                  the Eclipse Daanse CongoCC parser — the reference
```

The grammar generates with **zero ambiguity warnings**. See
[Testing](#testing) for what covers it.

It generates independently of MDX — its own `langium-config.json`, its own
`generated/` folder — so `langium generate` for MDX and `npm run dmv:generate`
never touch each other's output. It is **not** registered as a VS Code language;
`package.json` contributes only `mdx-query`. Both browser playgrounds do run it,
each in its own web worker.

## The parse tree

`main-browser.ts` registers `langium/ast` before `startLanguageServer`, so the
playground's syntax-tree panel works for DMV exactly as it does for MDX.
The serializer is shared — `src/ast/ast-tree.ts` — and DMV's strategy in
`dmv-ast.ts` overrides nothing, because there is nothing to override: no
cross-references, so the walker's `Reference` branch never fires; no function
calls, so there is no argument list to rebuild from the CST.

What the tree shows is post-conversion. `[CATALOG_NAME]` reaches the AST as
`CATALOG_NAME` and `'it''s'` as `it's`, because `DmvValueConverter` has already
run — the source spelling stays visible in the editor, and the panel's job is to
show what the parser produced.

The panel's **Outline** mode is MDX-only and its toggle is hidden for DMV.
Outline comes from standard `documentSymbol`, and Langium's default provider
emits a symbol for every node with a `name` property — for this grammar, one row
per `ColumnReference`. A flat list of every column the query names is worse than
no outline, so DMV gets none until it has a provider worth the name.

## Sources, and which one wins

Three sources describe this language, and they do not agree:

1. **`dmv.ccc`** — the CongoCC grammar from the Eclipse Daanse DMV parser. A
   working implementation. **Treated as the contract.**
2. **[Microsoft's DMV documentation](https://learn.microsoft.com/en-us/analysis-services/instances/use-dynamic-management-views-dmvs-to-monitor-analysis-services)**
   — agrees with (1) everywhere they overlap.
3. **`DMV-specs.md`** — a drafting brief. Its rule and AST names are followed;
   where it contradicts (1) and (2), the implementation wins.

The reasoning: a grammar's job is to accept what the server accepts and reject
what it rejects. Where the brief is more permissive than the engine, following
it would make an editor bless queries that fail at runtime.

### Divergences from `DMV-specs.md`

| # | `DMV-specs.md` | Implemented | Why |
| --- | --- | --- | --- |
| 1 | `SelectItem` may be a `FunctionCall`; `PrimaryExpression` may be a `FunctionCall` | **no function calls anywhere** | Neither the reference parser nor Microsoft's syntax has them. The engine is the Data Mining parser, not SQL. `SELECT COUNT(A) …` is rejected. |
| 2 | `*` is a kind of `SelectItem` | `*` is **exclusive** (`wildcard?='*'` on the statement) | Reference grammar is `( * \| <column> [, <column>]* )`, so `SELECT *, TABLE_NAME` is invalid. |
| 3 | `TableReference` is a general dotted path, e.g. `[DB].[Cube].[$Dim]` | **`$System.<rowset>` only** | Both the reference parser and Microsoft specify exactly two segments anchored on `$System`. |
| 4 | String literals are "strictly single quotes" | **single *and* double quotes** | The reference parser has a `DOUBLE_QUOTED_STRING` token. |
| 5 | `SYSTEMRESTRICTSCHEMA` needs ≥ 1 parameter | **zero or more** | Reference parser is `( COMMA restriction )*`. |
| 6 | keywords via `/(?i)SELECT/` terminals | `caseInsensitive: true` in `langium-config.json` | Achieves the stated requirement — case-insensitive keywords — the idiomatic Langium way, without a hand-written regex per keyword. |

### Present in the reference but absent from the brief

All of these are implemented:

- **`@parameter` references** as a compared value — `WHERE CATALOG_NAME = @catalog`.
- **Negative numeric literals** — `-3`, `-2.75`, flagged via `negative` rather
  than folded into the value.
- **Bare-column predicates** — `WHERE IS_VISIBLE` with no operator, which is
  how boolean rowset columns are filtered.
- **An optional trailing `;`**.
- **Comments** — `--`, `//` and `/* … */`.

## Shape of the AST

```
DmvModel
└── query: SelectStatement
      ├── distinct: boolean
      ├── topLimit?: number
      ├── wildcard: boolean          — true for SELECT *
      ├── selections: ColumnReference[]
      ├── source: TableReference | SystemRestrictSchemaCall
      ├── whereFilter?: Expression
      └── orderings: SortItem[]

Expression = OrExpression | AndExpression | NotExpression
           | ComparisonExpression | ColumnReference
           | StringLiteral | NumberLiteral | ParameterReference
```

Langium's parser is LL, so the `WHERE` precedence chain is an iterative cascade
rather than left-recursive rules: `OR` loosest, then `AND`, then `NOT`, then
comparison, then primaries. `ComparisonExpression`'s operator is optional,
which is what makes a bare column a valid predicate.

## Value conversion

`[brackets]`, `'quotes'`, `"quotes"` and the `@` on parameters are stripped in
the AST by `DmvValueConverter`, so source spelling does not leak into
downstream code:

| source | AST value |
| --- | --- |
| `[CATALOG_NAME]` | `CATALOG_NAME` |
| `[a]]b]` | `a]b` |
| `'it''s'` | `it's` |
| `"say ""hi"""` | `say "hi"` |
| `@catalog` | `catalog` |

Doing this in a converter rather than in grammar rules keeps each delimited
form a **single token**, which is what lets `[Order Count]` and `[SELECT]` lex
as identifiers instead of colliding with whitespace and keywords.

## Testing

Four suites, all under `test/dmv/`:

| Suite | What it covers |
| --- | --- |
| `parsing.test.ts` | Statement shape, `FROM`, `WHERE`, literals, identifiers, comments, and the SQL the engine does not support. Inputs come from Microsoft's documentation and from `dmv.ccc`. |
| `diagnostics.test.ts` | The language-server path — that a bad query surfaces a diagnostic, and that half-typed queries raise no internal error. |
| `examples.test.ts` | Every `examples/*.dmv` file parses. These are what the playgrounds load, so a failure here is a broken playground. |
| `corpus.test.ts` | 28 queries harvested from Microsoft Learn and practitioner blogs, normalized. Independent evidence, because the other three suites derive their inputs from the same sources the grammar was written from. |

`test/ast/dmv.test.ts` covers the parse tree DMV serves over `langium/ast`,
sweeping both `examples/*.dmv` and the corpus; the shared walker itself is
covered once in `test/ast/shared.test.ts`.

The corpus lives in `test/dmv/corpus/*.dmv`, one query per file with its source
URL, the construct it exercises, and an `-- Expect: parse|reject` header.
Identifiers and string values are substituted; casing, spacing, line breaks and
quoting are preserved as published, because those are what is under test.

[`docs/dmv-corpus-findings.md`](../docs/dmv-corpus-findings.md) records what the
corpus turned up: four published queries using syntax no DMV parser accepts
(`LIKE`, function calls, `AS` aliases), one fixed grammar bug — `NOT` bound
tighter than comparison, so `NOT A = 1` parsed as `(NOT A) = 1` — and three
places where this grammar still accepts more than `dmv.ccc` does. It also holds
a conformance table for the constructs the corpus exercises.

## Not implemented

No validators, no document-symbol provider, and no VS Code language
registration. Natural next steps, in rough order of value:

1. A validator warning on rowset names that are not known schema rowsets
   (the list is in Microsoft's docs, and `DISCOVER_SCHEMA_ROWSETS` returns it
   at runtime).
2. Completion for rowset and column names, driven the same way the MDX
   playground drives cube metadata — over XMLA, from the live server.
3. Registering `.dmv` as a VS Code language, if DMV queries need authoring
   outside the playgrounds.
