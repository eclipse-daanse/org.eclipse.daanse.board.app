# lib.lsp.lang.sql

PostgreSQL 18 for the board's editor: grammar, language server, validators,
highlighting, outline and examples.

The bundle registers itself under `daanse.lsp.language`, so it appears in every
language picker the application offers and disappears when it stops — neither
side knows about the other. It requires `lib.api.lsp`, `lib.lsp.core`,
`lib.lsp.server` and `platform.codemirror`.

**The contract is PostgreSQL 18, and nothing else.** The board can send SQL to a
Daanse server through `lib.datasource.sql_xmla`, and that server has its own
rules about what it will run — a guard, a whitelist, a router. None of that is
encoded here. This package answers one question: *is this PostgreSQL?* Whether a
particular server will execute it is a different question with a different
answer, and mixing the two would make the editor lie as soon as either changed.

## What it covers

The PostgreSQL 18 documentation is the contract, and the covered pages are
covered completely rather than to a line drawn by hand:

| | |
| --- | --- |
| `SELECT` | in full — `DISTINCT ON`, `LATERAL`, `ROWS FROM … WITH ORDINALITY`, `TABLESAMPLE`, `GROUPING SETS`/`CUBE`/`ROLLUP`, `WINDOW` with `GROUPS` frames and `EXCLUDE`, `FETCH FIRST … WITH TIES`, locking clauses, CTEs with `MATERIALIZED`, `SEARCH` and `CYCLE`, plus `VALUES`, `TABLE` and `SELECT INTO` |
| DML | `INSERT` with `ON CONFLICT` and `OVERRIDING`, `UPDATE … FROM`, `DELETE … USING`, `MERGE`, and `RETURNING` throughout, including 18's `OLD`/`NEW` |
| expressions | 4.1 and 4.2 in full — casts, arrays and subscripts, `ROW`, `COLLATE`, `AT TIME ZONE`, `IS DISTINCT FROM`, the SQL-standard function spellings, `FILTER`, `WITHIN GROUP`, `VARIADIC`, named arguments, parameters |
| SQL/JSON | 9.16 — the constructors, `JSON_VALUE`/`JSON_QUERY`/`JSON_EXISTS`, `IS JSON`, and `JSON_TABLE` as a table function |
| not covered | DDL of any kind, stored-program statements, and the XML functions of 9.15 |

Every deliberate departure is marked `DIVERGENCE` in `src/language/sql.langium`,
with its reason. Most exist because Langium's parser computes fixed lookahead
and does not backtrack, while PostgreSQL's resolves the same clash by grammar
precedence.

## Server settings

Written against the **defaults of a stock PostgreSQL 18 server**. The one that
changes what syntax *means* rather than only what is rejected is
`standard_conforming_strings = on`: `'\'` is a backslash, and backslash escapes
need `E'…'`. Unlike MySQL, quoting is not configurable here — `"x"` is always an
identifier and `||` is always concatenation — so nothing else has to be pinned.

## Keyword categories

PostgreSQL sorts every keyword into four categories, and they decide *where* a
word may still be used as a name. `gram.y` spends four nonterminals on it and so
does this grammar: `ColId`, `TypeFunctionName`, `ColLabel` (which admits every
keyword, so `t.order` is a valid column reference) and `BareColLabel` (an alias
written without `AS`).

The rules behind them are generated from the server's own `pg_get_keywords()`.
See `src/language/generated-postgres/README.md`.

## Diagnostics

Beyond parse errors, `sql-validator.ts` reports what PostgreSQL rejects **and
what can be decided from the AST alone**: unknown built-ins and wrong argument
counts, aggregates and window functions where they may not stand, duplicate
table aliases, out-of-range ordinals, `DISTINCT ON` that does not match the
leading `ORDER BY`, impossible window frames, `FILTER` on something that is not
an aggregate, `MERGE … WHEN MATCHED BY SOURCE`, unquoted reserved words,
operators that do not exist, invalid interval qualifiers, adjacent string
literals on one line, and trailing junk after a numeric literal.

Nothing here needs a connection or a catalogue, and that boundary decides the
severity as well as the content:

- `SELECT nosuchcolumn FROM t` is correctly silent.
- An unknown *function* is a **warning**, not an error: PostgreSQL resolves
  unqualified names through `search_path`, so a name this catalogue has never
  heard of is routinely one of your own.
- The `GROUP BY` rule is a **warning** for the same reason — the exemption for a
  column functionally dependent on a grouped key needs a schema.
- A CTE that refers to itself without `RECURSIVE` is a **warning**: without the
  keyword the name means whatever table of that name exists.

## Tests

    npm test

`parsing` and `diagnostics` check the grammar and the validator against the
documentation they were written from. `keywords` checks that the generated data
stays coherent with the grammar — the failure that actually happens is a rule
growing a keyword and nobody re-running the refresh script.

`corpus` is the independent evidence: each entry's verdict is a transcript from
a real PostgreSQL 18 server, recorded once by

    npm run record-corpus                   # needs Docker

and read from the file header thereafter. Statements are *prepared*, not
executed — `PREPARE` runs the parser and the analyser and stops — and the
verdict records the SQLSTATE rather than the message, because messages are
reworded between releases and codes are not. Unrecorded entries are reported as
skipped, never as passing.

The corpus compares *diagnostics*, not parse success: some of what the server
rejects is caught here by the validator rather than the parser, and to the
person typing it that is the same red underline. Entries marked `-- Scope: out`
are constructs PostgreSQL accepts that this grammar deliberately does not cover;
they assert the opposite, so the boundary stays written down.

## Known limitations

- **About fifty keywords must be quoted to be used as names.** PostgreSQL leaves
  words like `row`, `values`, `grouping`, `coalesce`, the type names and the
  SQL/JSON functions unreserved, and resolves the clash with a call of the same
  name by grammar precedence. Fixed lookahead cannot, so they stay reserved
  here. The list is `KEEP_RESERVED` in `scripts/refresh-postgres-data.mjs`, and
  `test/keywords.test.ts` fails if it drifts from the grammar.
- **A window named `rows`, `range` or `groups` must be quoted**, because a
  window reference and a frame both follow `OVER (`.
- **A statement's target table cannot take an unquoted keyword as its alias**
  without `AS` — `UPDATE t SET …` would otherwise read `SET` as the alias.
  `gram.y` draws the same line.
- **The first operand of a set operation inside a subquery, a derived table or
  an `IN` list cannot be parenthesised.** `FROM ((SELECT 1) UNION (SELECT 2)) AS
  x` is rejected; `FROM (SELECT 1 UNION (SELECT 2)) AS x` means the same and is
  accepted.
- **`mytype '1'` is rejected** for a type whose name is not a keyword; write
  `'1'::mytype` or `CAST('1' AS mytype)`.
- The XML functions parse as ordinary calls, so their keyword-argument forms
  (`XMLELEMENT(NAME root, …)`) are not accepted. The corpus records this as
  `-- Scope: out`.
