# org.eclipse.daanse.board.app.lib.lsp.lang.sql

MySQL 8.4 LTS for the OLAP editor: grammar, language server, validators,
highlighting, outline and examples.

**SQL is not executable here.** XMLA carries MDX and `Discover` calls; it has
no envelope for a SQL statement, and a browser cannot open a database
connection. The application routes Run to `services/sql/client.ts`, which says
so. This package exists to make SQL a first-class thing to *write* in the
editor — see `docs/adding-a-language.md` for how it sits alongside the other
two languages.

## What it covers

The MySQL 8.4 manual is the contract, and the covered pages are covered
completely rather than to a line I drew:

| | |
| --- | --- |
| `SELECT` | 15.2.13 in full — joins, derived tables, `LATERAL`, CTEs incl. `RECURSIVE`, `UNION`/`INTERSECT`/`EXCEPT`, `GROUP BY … WITH ROLLUP`, window functions with frames, index hints, `INTO OUTFILE`, locking reads |
| DML | `INSERT` (15.2.7), `REPLACE` (15.2.12), `UPDATE` (15.2.17), `DELETE` (15.2.2) |
| not covered | DDL of any kind, and stored-program statements |

Every deliberate departure is marked `DIVERGENCE` in `src/language/sql.langium`,
with the reason. Most of them exist because Langium's parser is LL and MySQL's
is LALR.

## sql_mode

Written against 8.4's **default `sql_mode` plus `ANSI_QUOTES` and
`PIPES_AS_CONCAT`**. Those two change what the syntax *means*, not just what is
rejected:

- `"x"` is a quoted identifier, not a string literal.
- `||` is string concatenation, not logical OR — and its precedence moves to
  between `^` and the unary operators.

## Diagnostics

Beyond parse errors, `sql-validator.ts` reports what MySQL itself rejects and
what can be decided from the AST alone — unknown built-in functions and wrong
argument counts, aggregates and window functions in `WHERE`, duplicate table
aliases, out-of-range `ORDER BY`/`GROUP BY` ordinals, a self-referencing CTE
without `RECURSIVE`, unquoted reserved words, multi-table `UPDATE`/`DELETE`
with `ORDER BY` or `LIMIT`. `ONLY_FULL_GROUP_BY` is a warning rather than an
error, because MySQL's functional-dependency exemption needs a schema this
package does not have.

Nothing here needs a connection or a catalogue. `SELECT nosuchcolumn FROM t` is
correctly silent.

## Generated data

`src/language/generated-mysql/` holds the reserved-word lists and the built-in
function catalogue. It is committed, and refreshed by hand:

    npm run refresh-mysql-data              # both phases; needs Docker
    npm run refresh-mysql-data -- --split   # re-split against the grammar; no Docker

Keywords come from the server's own `INFORMATION_SCHEMA.KEYWORDS`; functions
are transcribed from the manual, because nothing in the server lists natives or
their arity. That folder's README has the details, including why there is no
drift detection.

`test/keywords.test.ts` fails when the grammar has grown a keyword the lists do
not know about — which is the failure that actually happens.

## Tests

    npm test -w org.eclipse.daanse.board.app.lib.lsp.lang.sql

`parsing` and `diagnostics` check the grammar against the manual it was written
from. `corpus` is the independent evidence: each entry's verdict is a
transcript from a real MySQL 8.4 server, recorded once by

    npm run record-corpus                   # needs Docker

and read from the file header thereafter. Unrecorded entries are reported as
skipped, never as passing.

The corpus compares *diagnostics*, not parse success — some of what MySQL
rejects is caught here by the validator rather than the parser, and to the user
that is the same red underline. Entries marked `-- Scope: out` are constructs
MySQL accepts that this grammar deliberately does not cover; they assert the
opposite, so the boundary stays written down.

## Known limitations

- The highlighter's keyword and function lists are a hand-written subset. At
  this language's scale they cannot be complete without moving ~700 words into
  the main bundle, since the tokenizer runs on the UI thread. A word missing
  from them is still parsed and still validated; only its colour is wrong. The
  reasoning is in `src/sql-stream-language.ts`.
- `CAST`, `CURRENT` and `UNBOUNDED` are non-reserved in MySQL but reserved
  here, because re-admitting them makes the grammar ambiguous. Quote them to
  use them as identifiers.
- Unquoted identifiers must start with a letter, `_` or `$`. MySQL allows a
  leading digit if the name is not all digits; Chevrotain's ordered
  longest-match cannot decide that against a number literal.
