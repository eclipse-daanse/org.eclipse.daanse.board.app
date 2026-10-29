# Generated PostgreSQL 18 data

Everything in this folder is **generated** and committed. Nothing here is edited
by hand.

| file | what it holds | source |
| --- | --- | --- |
| `catalog.json` | the raw extract — **not committed**, see below | the three queries below |
| `postgres-keywords.langium` | the four keyword-category rules the grammar re-admits names through | `pg_get_keywords()` |
| `keywords.ts` | every keyword and its category, for the validator | `pg_get_keywords()` |
| `functions.ts` | callable names, their kind and every overload's arity | `pg_proc` |
| `operators.ts` | operator names, for "does this operator exist" | `pg_operator` |
| `highlight-words.ts` | the two flat word lists the CodeMirror tokenizer needs | both of the above |

## Refreshing

    npm run refresh-postgres-data              # both phases; needs Docker
    npm run refresh-postgres-data -- --split   # re-split against the grammar; no Docker

Two phases, because only one needs a server. `extract` starts `postgres:18`,
runs the three catalogue queries and writes `catalog.json`; `split` derives
every other file from that plus the keyword literals `sql.langium` itself
spells.

Split is the one that runs often: what goes stale is the grammar growing a
keyword, not PostgreSQL 18 changing under a released major version.

`catalog.json` is **not committed** — it is half a megabyte of server output,
and everything derived from it is here already. So `--split` on its own works
only where a previous extract left that file behind; in a fresh checkout the
first run has to be the full one, which needs Docker.

Nothing else in this package does: `npm run generate`, `npm test` and
`npm run build` never touch either phase, because the *derived* files are
committed precisely so they don't have to.

## Why all of it comes from the server

The MySQL package had to transcribe its function catalogue from the manual by
hand, because `INFORMATION_SCHEMA.ROUTINES` lists stored routines only and
nothing in that server exposes a built-in's arity. PostgreSQL has no such gap:

- `pg_get_keywords()` gives every keyword with its category (`U` unreserved,
  `C` unreserved but not a type or function name, `T` reserved but allowed as
  one, `R` reserved) and the `barelabel` flag.
- `pg_proc` gives `prokind` — function, aggregate or window — along with
  `pronargs`, `pronargdefaults` and `provariadic`, which is every overload's
  arity.
- `pg_operator` gives the operator names.

So there is nothing here anyone had to read a page and retype, and the class of
error that produces cannot occur.

The extract keeps only what a query can actually call: `pg_catalog`, minus the
functions whose argument or return type is `internal`, `cstring`, `trigger`,
`event_trigger` or one of the `*_handler` types. Those are real rows, but no
statement can name them, so listing them would only add noise to completion and
false confidence to the arity check.

## Why the categories are intersected with the grammar

Langium reserves a word exactly when some rule mentions it. A keyword no rule
spells is therefore not a token at all and already lexes as an identifier — it
needs no re-admission. Only the words `sql.langium` spells appear in the
category rules, which is why they are far shorter than the server's 494.

## Why a category can come out empty

`ColNameKeyword` is empty. Every `col_name` keyword the grammar spells —
`row`, `values`, `grouping`, `coalesce`, the type names, the SQL/JSON
functions — introduces a construct with its own shape, and PostgreSQL resolves
the clash with a call to a function of the same name by grammar precedence.
Chevrotain computes fixed-k lookahead and cannot: `row(a, b)` is equally a
`ROW` constructor and a call to a function named `row`.

Those words are listed in `KEEP_RESERVED` in
`scripts/refresh-postgres-data.mjs`, which excludes them from re-admission and
so leaves them reserved. Each one costs a pair of quotes, each is a `DIVERGENCE`
note in `sql.langium`, and the generated rule says so where it would otherwise
be a puzzle.

## Drift

There is no drift detection, by decision. The pin is a released major version,
so the data is stable for years; the check that it is current is a human
re-running the script when the pin moves.

What *is* checked, in `test/keywords.test.ts`, is that this data stays coherent
with the grammar: every keyword literal in `sql.langium` is a real keyword and
is classified here, each category rule holds only words of its own category,
and no rule re-admits a word the grammar never spells. That is the failure that
actually happens.

## Why `highlight-words.ts` is separate

The CodeMirror tokenizer runs on the UI thread, so whatever it imports lands in
the application's main bundle, unlike the grammar and validator which live in
the worker. `functions.ts` carries every overload's arity and is measured in
hundreds of kilobytes; the names alone are a fraction of that. So the
highlighter gets its own file holding two flat arrays and nothing else.
