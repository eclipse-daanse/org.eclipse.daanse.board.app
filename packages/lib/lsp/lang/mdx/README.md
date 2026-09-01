# `org.eclipse.daanse.board.app.lib.lsp.lang.mdx`

MDX (Multidimensional Expressions) as a Langium language package: the grammar,
the generated AST, the language server, the validators, CodeMirror
highlighting, and the example documents the parser tests run against.

```ts
import { MDX_LANGUAGE } from 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx'
```

`MDX_LANGUAGE` is the [`LanguageDescriptor`](../core/src/language-descriptor.ts)
everything else keys off. It carries the file extensions (`.mdxq`, `.mdxs`,
`.mdx`), the `StreamLanguage` highlighting, the examples, `hasOutline: true`,
and `createServerWorker()`.

```bash
npm run generate -w org.eclipse.daanse.board.app.lib.lsp.lang.mdx   # regenerate src/language/generated/
npm test -w org.eclipse.daanse.board.app.lib.lsp.lang.mdx           # 292 tests
```

## Dialect

Microsoft/SSAS. Essbase- and InterSystems-only syntax is out of scope.

## What is covered

**Queries** — `SELECT` with `NON EMPTY`, named/ordinal/`AXIS(n)` targets,
`DIMENSION PROPERTIES`, `FROM` with nested and `NON VISUAL` subselects, the
`WHERE` slicer, and `CELL PROPERTIES`. `WITH MEMBER` / `SET` / `CELL
CALCULATION` / `MEASURE` with property lists.

**Other statements** — `DRILLTHROUGH` with `MAXROWS` / `FIRSTROWSET` / `RETURN`,
`EXPLAIN PLAN FOR`, `REFRESH CUBE`, `UPDATE CUBE … SET` writeback with the four
allocation modes, and `CALL`.

**Scripting and DDL** — `CREATE [SESSION|GLOBAL] [HIDDEN] [CALCULATED]
MEMBER|SET|SUBCUBE|KPI|CELL CALCULATION`, `DROP`, `SCOPE … END SCOPE` (nested),
`This =` assignments, `CALCULATE`, `FREEZE` (bare or with a subcube).

**Expressions** — the full operator set at Microsoft's precedence including `^`
and `||`, member navigation with `&` key qualifiers and composite `&[…]&[…]`
keys, `@parameters`, `CAST(… AS …)`, inline `AS` set aliases, tuples, sets,
`CASE`, `EXISTING`, `.Properties(…, TYPED)`, the positional flags of
`Descendants` and `Order`, and skippable argument slots (`Fn(, , x)`).

## Validation

| Check | Severity |
| --- | --- |
| Axis ordinal outside 0–127, duplicated, non-integer, or a gap in the sequence | error |
| `SOLVE_ORDER` outside −8181..65535 / non-integer | error |
| Negative `SOLVE_ORDER` (the engine reserves them) | warning |
| `SCOPE_ISOLATION` set to anything but `CUBE` | error |
| Unknown function; wrong argument count | warning / error |
| `LookupCube` used at all | warning |
| Unknown or deprecated calculated-member property | warning |
| Unknown cell property | warning |
| Identifier outside 1–100 characters | error |
| Reserved keyword used undelimited | warning |
| `CREATE MEMBER` naming a cube other than `CURRENTCUBE` | warning |
| Multi-member set on the `WHERE` slicer | warning |

Function names and arities live in `mdx-functions.ts`.

## Highlighting

`mdx-stream-language.ts` is a CodeMirror `StreamLanguage` — a line-oriented
tokenizer, not a Lezer grammar. Highlighting only classifies tokens; the real
parse happens in the server, and a second full grammar would be another source
of truth to keep in step with `mdx.langium`.

**Keep its keyword lists in step with the grammar.**

Delimited identifiers are the dominant token in MDX, so the tokenizer matches
them first — `[Order Quantity]` must not colour `Order` as a keyword. This is
also why `langium generate`'s own TextMate output was never usable here: its
keyword rule matches inside delimited identifiers.

## Completion

`mdx-completion-provider.ts` contributes the intrinsic functions. The grammar
parses calls generically (`Name(args)`), so function names are not in it and
Langium's default provider — keywords and cross-references — cannot know them.
They come from `mdx-functions.ts`, the same table the arity validator reads.

Two details it encodes. A property-style function takes no parentheses —
`.Parent`, never `.Parent()` — which the table records as `maxArgs: 0`. And
after a `.` the list narrows to member continuations by category
(`navigation`, `member`, `metadata`, plus `Members`), because `.Sum` is not
MDX. That filter is a heuristic, not a rule: `navigation` also holds
call-style functions like `Ancestor` and `Descendants`, which it lets through.

Cube metadata completion — dimensions, hierarchies, levels, measures — is
**not** here. It needs a live XMLA connection, so it lives in
`packages/app/default` and is attached to the editor as an extension. This package
exports `parseMdxCompletionContext`, the member-path parsing it needs.

## References mostly do not resolve, on purpose

Cube, dimension, hierarchy, level and member names live in **server metadata**,
not in the document, so `[Date].[Calendar].[Month]` can never be resolved from
source. `MdxDocumentValidator` therefore drops linking errors. What
`mdx-scope.ts` does resolve is in-file declarations — `WITH MEMBER`, `WITH SET`
and the like — which is why go-to-definition works on those and nothing else.

## The parse tree

`mdx-ast.ts` supplies the `AstTreeStrategy` for the shared serializer in
`org.eclipse.daanse.board.app.lib.lsp.core`. It exists for one reason: skippable argument slots mean
the `arguments` array and the slots the author actually wrote are different
sequences, so `Fn(, , x)` is rebuilt from the CST commas rather than reported
as a one-element list. `mdx-call-slots.ts` holds that arithmetic, and the arity
validator uses the same code.

`mdx-symbols.ts` provides `documentSymbol`, which is what `hasOutline: true`
promises. Langium's default was unusable: it emits symbols only for the nine
types with a `name` property — function and method calls — and returns
`SymbolKind.Field` for every one of them.

## Known limitations

- Set-versus-scalar typing is not inferred, so an arithmetic/set-algebra
  mismatch is not reported.
- `Descendants(member, FLAG)` — the two-argument form with a flag in the level
  position — is not accepted; pass a level or use the three-argument form.
