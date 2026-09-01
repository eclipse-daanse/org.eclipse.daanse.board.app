# Generated MySQL 8.4 data

Everything in this folder is **generated** and committed. Nothing here is
edited by hand.

| file | what it holds | source |
| --- | --- | --- |
| `mysql-keywords.langium` | `NonReservedKeyword` — the keywords `sql.langium` mentions that MySQL does *not* reserve, re-admitted as identifiers | `INFORMATION_SCHEMA.KEYWORDS` |
| `keywords.ts` | the reserved words, for the validator to reject as bare identifiers | `INFORMATION_SCHEMA.KEYWORDS` |
| `functions.ts` | built-in function names and arities | the manual, transcribed |

## Refreshing

    npm run refresh-mysql-data -w org.eclipse.daanse.board.app.lib.lsp.lang.sql            # both phases
    npm run refresh-mysql-data -w org.eclipse.daanse.board.app.lib.lsp.lang.sql -- --split # no Docker

Two phases, because only one needs a server. `extract` reads
`INFORMATION_SCHEMA.KEYWORDS` into `keywords.json`; `split` derives the two
generated files from that plus the grammar's own literals. Split is the one
that runs often — what actually goes stale is the grammar growing a keyword,
not MySQL changing under an LTS pin, and `test/keywords.test.ts` fails when it
needs running.

The extract phase needs Docker; nothing else in this repo does. `npm run generate`, `npm test`,
`npm run build` and the `Dockerfile` never touch it — the output is committed
precisely so they don't have to.

The script starts `mysql:8.4` with `--sql-mode` set to the mode `sql.langium`
is written against (default plus `ANSI_QUOTES,PIPES_AS_CONCAT`), reads
`INFORMATION_SCHEMA.KEYWORDS`, intersects the non-reserved half with the
keyword literals actually appearing in `sql.langium`, and rewrites the two
keyword files.

## Why keywords come from the server and functions do not

`INFORMATION_SCHEMA.KEYWORDS` is maintained by the server itself, so it is
exact and needs no transcription. There is no equivalent for built-in
functions: `INFORMATION_SCHEMA.ROUTINES` and `SHOW FUNCTION STATUS` list
stored routines only, never natives, and nothing in the server exposes arity.
So `functions.ts` is transcribed from the manual's function reference and
carries the page it came from per entry.

## Drift

There is no drift detection, by decision. The pin is an LTS release, so the
data should be stable for years; the check that it is current is a human
re-running the script when the pin moves. What *is* checked, in
`test/keywords.test.ts`, is that this data stays coherent with the grammar —
every keyword literal in `sql.langium` is classified here, and every word in
`NonReservedKeyword` actually appears in the grammar.
