# DAX language

A Langium language server and CodeMirror mode for **DAX** (Data Analysis
Expressions), in two forms:

| File | Language id | What it holds | Entry rule |
| --- | --- | --- | --- |
| `.dax` | `dax-query` | a query: `DEFINE`, then one or more `EVALUATE` | `QueryDocument` |
| `.daxe` | `dax-formula` | one expression, as in a measure | `FormulaDocument` |

```dax
DEFINE
    MEASURE 'Sales'[Total Sales] = SUM ( 'Sales'[Amount] )
EVALUATE
    SUMMARIZECOLUMNS ( 'Date'[Year], "Total Sales", [Total Sales] )
ORDER BY 'Date'[Year]
```

```bash
yarn generate                     # regenerate src/language/generated/ from the grammars
yarn test                         # parsing, linking, completion, validation, corpus
yarn build                        # library and worker
yarn refresh-functions            # regenerate the function catalogue (network)
yarn record-corpus                # re-record the reference verdicts (Docker)
```

The bundle registers `DaxLanguageProvider` under the language service
whiteboard, like the MDX and DMV bundles; `app/default` lists its manifest.

## Files

```
src/language/
  dax-core.langium          expressions, definitions, terminals; no entry rule
  dax-query.langium         DEFINE ... EVALUATE ... ORDER BY ... START AT
  dax-formula.langium       one expression
  dax-module.ts             createDaxServices(): both languages, one shared registry
  dax-value-converter.ts    strips "quotes", 'quotes', [brackets], @ and dt"..."
  dax-scope.ts              what a name resolves to inside the document
  dax-validator.ts          arity, unknown functions, duplicates, START AT
  dax-completion-provider.ts functions, declared names, measures after `[`
  dax-symbols.ts            the outline
  dax-functions.ts          lookup over the generated catalogue
  generated-functions/      the catalogue; generated, do not edit
  generated/                langium-cli output; do not edit
  dax-ast.ts                the parse-tree strategy: empty, and why
  main-browser.ts           runs the server in a web worker
src/dax-stream-language.ts  CodeMirror highlighting
src/index.ts                DAX_LANGUAGE and DaxLanguageProvider
worker/dax-server.worker.ts the worker entry (outside src/, see index.ts)
examples/                   what the playground offers; all tested
scripts/                    catalogue and corpus recording, the Daanse pin
test/corpus/                DAX as Microsoft publishes it, with verdicts
```

`dax-core.langium` has no `grammar` line: Langium requires an entry rule of
a named grammar, and the core has none. The query and formula grammars import
it, so both share one lexer and one expression grammar, the way the
reference parser's two entry points (`DaxStatement`, `ExpressionRoot`) share
theirs. One shared `ServiceRegistry` routes a document by its extension; a
document with any other name (`inmemory://editor/1`) goes to the query
language instead of throwing, which a registry with two languages would.

## Sources, and which one wins

1. **The Eclipse Daanse DAX parser**:
   [`parser.ccc`](https://github.com/eclipse-daanse/org.eclipse.daanse.dax)
   at `9ecd1fb` (`scripts/daanse-pin.mjs`). The engine this editor serves.
   **The contract.**
2. **[Microsoft's DAX reference](https://learn.microsoft.com/en-us/dax/)**:
   the statement pages, the operator page, and the syntax and examples of
   every function page.

Where the reference parser and Microsoft disagree and Microsoft is
unambiguous (a documented syntax, a rule stated in prose, or its own
examples), **this grammar follows Microsoft** and the place is marked
`DIVERGENCE` in the grammar. Where Microsoft says nothing, the reference
wins. Each divergence is a candidate for a fix upstream:

| # | DAX | Reference parser | Microsoft | Corpus |
| --- | --- | --- | --- | --- |
| 1 | `evaluate`, `Define`, `false()` | keywords are case-sensitive | its own examples mix case (BITLSHIFT, FALSE) | 35, 36 |
| 2 | `Sales[Amount]` | only `'Sales'[Amount]` | quotes are needed "if the name of a table contains spaces, reserved keywords, or disallowed characters" (DAX syntax); unquoted tables throughout its examples | 30–32 |
| 3 | `PERCENTILE.INC(…)`, `INFO.COLUMNS()` | function names are plain identifiers | 106 documented functions have dotted names | 33, 34 |
| 4 | `-1`, `-2^2` | no sign operator | sign is in the precedence table, `-2^2` is -4 | 37, 38 |
| 5 | `NOT [Color] IN {…}` | no `NOT` operator (only `NOT(…)`) | NOT is in the precedence table | 40 |
| 6 | `[Color] == "Blue"` | no `==` | `==` is a comparison operator | 39 |
| 7 | `('T'[A], 'T'[B]) IN {…}` | a row only inside a table constructor | `( <scalarExpr1>, <scalarExpr2>, … ) IN <tableExpr>` (CONTAINSROW) | 46 |
| 8 | `START AT "Germany", "Berlin"` | one value, or a parenthesized list, exactly one per ORDER BY column | `[START AT {<value>\|<parameter>} [, …]]`; "as many arguments … as there are in the ORDER BY statement, but not more" | 44, 45 |
| 9 | `3.1E-1`, `.1` | no exponent, no bare leading dot | its IS* and FLOOR examples | 41, 42 |
| 10 | `NAMEOF('Sales'[Amount], TABLE)` | `TABLE` is a keyword only | TABLE, COLUMN, MEASURE are NAMEOF values | 43 |
| 11 | `DEFINE TABLE 'Unbought products' = …` | a DEFINE TABLE name is a bare word | its DAX queries example | 05 |
| 12 | `[Amount ]]USD]` | a column name cannot contain `]` | "A literal closing bracket (]) … is escaped as ]]" (NAMEOF) | 47 |
| 13 | `ORDER BY 'T'[A] DOWN` | any word is a direction | `{ASC \| DESC}` | 48 |

Row 13 is the only place the grammar is stricter than the reference.

Where Microsoft is silent, the reference is followed:

- `&&` and `||` are one level, left to right: `a || b && c` is
  `(a || b) && c`. Microsoft's precedence table does not rank them.
- One comparison per level: `1 = 1 = TRUE` is an error.
- `VAR … RETURN` is the loosest expression, so as an operand it needs
  parentheses: `1 + (VAR b = 1 RETURN b)`.
- Parameters (`@Year = 2024`) may be defined in DEFINE; `DEFINE` entries
  may be separated by commas.
- `2 ^ -1` is an error: the right operand of `^` is a primary.

## Editor features

Everything is computed from the document alone. The editor does not know the
model, so its tables, columns and measures are names that resolve to nothing,
and that is not an error.

**Linking.** `VAR`s and `DEFINE` declarations are navigable (go to definition):

- A `VAR` is visible in its `RETURN` and in the `VAR`s after it.
- A DEFINE `VAR` or `TABLE` is visible in every `EVALUATE` and in later
  definitions.
- `[Name]` resolves to a DEFINE `MEASURE` or `COLUMN` in any order, since
  measures may refer to each other. `'T'[Name]` must also match the table.
- `@Name` resolves to a DEFINE parameter.
- Inner declarations shadow outer ones, and every lookup is case-insensitive.

**Validation**:

| Check | Severity |
| --- | --- |
| a function not in the reference | warning |
| too few or too many arguments | error |
| a name declared twice in one `VAR` block | error |
| a name defined twice in one `DEFINE` (`'A'[m]` and `'B'[m]` are two) | error |
| more `START AT` values than `ORDER BY` columns | error |

A `VAR` without `RETURN`, a `DEFINE` without `EVALUATE` and the like are
syntax errors. There is no type checking: whether `Sales` is a table or a
column is a fact about the model.

**Completion** covers:
- every function in the reference, with its arity, syntax, summary and
  link, flagged `Daanse` when the engine can execute it;
- the `VAR`s, tables, measures and `@parameters` in scope;
- after an open `[`, the measures and columns DEFINE declares;
- keywords.

Nothing is offered inside a string, a quoted table name or a comment.

**Outline** lists what DEFINE declares, then each `EVALUATE`. VARs inside
expressions are left out.

**Highlighting.** `src/dax-stream-language.ts` is a stream tokenizer; a test
keeps its keyword lists equal to the grammar's.

## The function catalogue

`src/language/generated-functions/functions.ts` holds 460 functions. It is
generated by `scripts/refresh-functions.mjs` from the
[reference's table of contents](https://learn.microsoft.com/en-us/dax/toc.json)
and each function page (the docs repository behind them is private). For each
function it keeps:

- its category;
- its syntax lines, several for an overload;
- its arity: `[…]` marks optional arguments, a `…` makes the count
  unbounded, and a parameter marked "(Optional)" in the parameter table
  overrides the syntax line;
- the first sentence of the page, and the page's link.

`daanse: true` marks the five functions the Daanse binder dispatches on at
the pinned commit: `BLANK`, `FALSE`, `ROW`, `SUMMARIZECOLUMNS`, `TRUE`.

## Corpus and findings

`test/corpus/` holds 44 entries. Each one has these headers:

| Header | Content |
| --- | --- |
| `Source` | the Learn page it comes from |
| `Construct` | what it exercises |
| `Expect` | this grammar's verdict |
| `Reference` | the Daanse parser's verdict, written by `scripts/record-corpus.mjs` |
| `Divergence` | the table row, where the two verdicts differ |
| `Normalized` | what was changed from the published text |

The recording runs the reference inside Docker. It:
1. clones the reference at the pin;
2. builds `parser.ccc` with Maven 3.9 and JDK 25;
3. runs `scripts/reference/Verdict.java` over every entry.

The tests read only the headers, so they run anywhere.

The corpus is drawn from a sweep over **every DAX example on the function
pages**: 544 code blocks, 248 queries and 296 formulas (a leading `Name =` of
a measure was stripped). The table counts blocks:

| | Blocks | What they are |
| --- | --- | --- |
| both parsers accept | 237 | |
| both parsers reject | 22 | documentation defects: several alternative formulas in one block, an en dash for a minus, unbalanced parentheses, a trailing comma in a table constructor, a syntax placeholder, `\*` |
| only this grammar accepts | 285 | divergences: 141 have an unquoted table before a column, 116 a dotted function name, 13 a unary sign, 7 mixed-case keywords, 8 an exponent, a leading dot or a NAMEOF value |
| only the reference accepts | 0 | |

A block is counted under the first divergence it contains. As a check,
quoting the unquoted tables and upper-casing the keywords in the 148 blocks
counted under those two made the reference accept 141 of them. The other 7
are `==`, `NOT` and unary minus, divergences 4–6.

## Not implemented

- **User-defined functions**, `DEFINE FUNCTION f = (x: …) => …`. They are in
  Microsoft's DEFINE syntax but not in the reference parser.
- **The model**: no table, column or measure names from a server, so there is
  no completion for them and no check that they exist.
- **Types**: no check that an argument is a table, a column or a scalar.
- **START AT values**: Microsoft says a value "cannot be an expression". Any
  expression is accepted, as the reference parser does.
- **A quoted DEFINE TABLE name is not linked**: `EVALUATE 'Unbought products'`
  does not resolve to `TABLE 'Unbought products' = …`. A bare name is.
- **Execution** is not part of this package.

## Testing

| Suite | Covers |
| --- | --- |
| `corpus.test.ts` | every entry against `Expect`; a `Divergence` exactly where `Expect` and `Reference` differ; the shape of entries that matter (precedence, `]]`, row IN, DEFINE) |
| `examples.test.ts` | every example parses with no diagnostic and is offered by `DAX_EXAMPLES` |
| `diagnostics.test.ts` | each validator check; syntax errors surface; 24 half-typed prefixes raise no internal error |
| `linking.test.ts` | the scope rules above |
| `editor.test.ts` | completion and outline |
| `functions.test.ts` | catalogue arity for pages known to be awkward, summaries, Daanse flags |
| `stream-language.test.ts` | highlighter keywords equal the grammar's; token classes |
| `dax-ast.test.ts` | the parse tree, for examples and corpus; routing by extension |
