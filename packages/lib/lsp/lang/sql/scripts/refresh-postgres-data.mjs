#!/usr/bin/env node
/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Regenerates everything under `src/language/generated-postgres/`.
 *
 * Two phases, because only one of them needs a server:
 *
 *   extract  starts `postgres:18`, reads pg_get_keywords(), pg_proc and
 *            pg_operator, and writes catalog.json. Needs Docker.
 *   split    derives the generated `.langium` and `.ts` files from
 *            catalog.json plus the keyword literals `sql.langium` itself
 *            spells. Needs nothing.
 *
 * `--split` runs the second phase alone, which is the one that runs often:
 * what goes stale is the grammar growing a keyword, not PostgreSQL 18 changing
 * under a released major version.
 *
 * catalog.json is not committed, so `--split` works only where an earlier
 * extract left it behind. In a fresh checkout the first run has to be the full
 * one.
 */

import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const LANGUAGE = join(HERE, '..', 'src', 'language')
const GENERATED = join(LANGUAGE, 'generated-postgres')

const POSTGRES_IMAGE = 'postgres:18'
const CONTAINER = 'daanse-lsp-postgres-refresh'

/**
 * Internal plumbing rather than callable SQL: the I/O, support and handler
 * functions. A function whose argument or return type is one of these cannot
 * be written in a query, so listing them would only produce noise in
 * completion and false confidence in the arity check.
 */
const INTERNAL_TYPES = [
  'internal',
  'cstring',
  'trigger',
  'event_trigger',
  'language_handler',
  'fdw_handler',
  'index_am_handler',
  'table_am_handler',
  'tsm_handler',
]

/**
 * Words PostgreSQL does not reserve in a given position but which this grammar
 * cannot re-admit there without becoming ambiguous. Each one costs the user a
 * pair of quotes, so each needs a reason.
 *
 * Filled in as `langium generate` reports the ambiguities; every entry is also
 * a DIVERGENCE note in `sql.langium`.
 */
const KEEP_RESERVED = {
  // Every word here introduces a construct with its own shape - `ROW(...)`,
  // `VALUES ...`, `ROLLUP (...)`, `x IS JSON`. PostgreSQL's own parser resolves
  // the clash by grammar precedence; Chevrotain computes fixed-k lookahead and
  // cannot, because `row(a, b)` is equally a call to a function named `row`.
  // Re-admitting these as bare names makes the grammar genuinely ambiguous, so
  // each one costs a pair of quotes and is a DIVERGENCE note in `sql.langium`.
  ColId: new Set([
    // Constructs that look like a call
    'row',
    'grouping',
    'coalesce',
    'greatest',
    'least',
    'nullif',
    'extract',
    'position',
    'substring',
    'overlay',
    'trim',
    'normalize',
    'treat',
    // `collation` is not here: it is a type_func_name word, so it is never in
    // the two lists this set filters, and `COLLATION FOR (x)` has its own
    // alternative that no call can be confused with.
    // Query and grouping constructs
    'values',
    'rollup',
    'cube',
    'exists',
    // Operators written as words
    'between',
    'operator',
    // Frame bounds: `UNBOUNDED PRECEDING` against a column named `unbounded`
    'unbounded',
    // The type names, which `x::int` and `interval '1 day'` both need as
    // keywords: `numeric(10, 2)` and a call to a function named `numeric`
    // are the same two tokens.
    'interval',
    'timestamp',
    'time',
    'character',
    'char',
    'nchar',
    'varchar',
    'national',
    'bit',
    'dec',
    'decimal',
    'numeric',
    'float',
    'real',
    'precision',
    'smallint',
    'int',
    'integer',
    'bigint',
    'boolean',
    'setof',
    // `ROWS FROM (...)` against a table named `rows`
    'rows',
    // SQL/JSON, all of which take keyword arguments
    'json',
    'json_object',
    'json_array',
    'json_objectagg',
    'json_arrayagg',
    'json_scalar',
    'json_serialize',
    'json_exists',
    'json_value',
    'json_query',
    'json_table',
    'nested',
  ]),
  TypeFunctionName: new Set(),
  BareColLabel: new Set(),
}

function docker(...args) {
  return execFileSync('docker', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function psql(sql) {
  return docker(
    'exec',
    CONTAINER,
    'psql',
    '-U',
    'postgres',
    '-X',
    '-tAc',
    sql,
  ).trim()
}

function json(sql) {
  const text = psql(sql)
  return text ? JSON.parse(text) : []
}

// ---------------------------------------------------------------------------
// extract
// ---------------------------------------------------------------------------

function extract() {
  process.stderr.write(`Starting ${POSTGRES_IMAGE}...\n`)
  try {
    docker('rm', '-f', CONTAINER)
  } catch {
    // Not running; nothing to remove.
  }
  docker(
    'run',
    '-d',
    '--rm',
    '--name',
    CONTAINER,
    '-e',
    'POSTGRES_PASSWORD=refresh',
    POSTGRES_IMAGE,
  )
  try {
    waitForServer()
    const version = psql('SELECT version()')
    const serverVersion = psql('SHOW server_version')

    const keywords = json(`
      SELECT coalesce(json_agg(json_build_object(
               'word', word, 'category', catcode, 'bareLabel', barelabel
             ) ORDER BY word), '[]'::json)
        FROM pg_get_keywords()`)
    if (keywords.length < 400) {
      throw new Error(
        `pg_get_keywords() returned only ${keywords.length} rows; refusing to write.`,
      )
    }

    // One row per *name*: the arity check needs every overload, and the kind
    // tells an aggregate from a window function from a plain call, which is
    // what the FILTER and WHERE checks rest on.
    const internal = INTERNAL_TYPES.map(t => `'${t}'`).join(', ')
    const functions = json(`
      SELECT coalesce(json_agg(f ORDER BY f->>'name'), '[]'::json) FROM (
        SELECT json_build_object(
                 'name', p.proname,
                 'kind', p.prokind,
                 'overloads', json_agg(json_build_object(
                     'args', p.pronargs,
                     'defaults', p.pronargdefaults,
                     'variadic', p.provariadic <> 0
                   ) ORDER BY p.pronargs)
               ) AS f
          FROM pg_proc p
          JOIN pg_namespace n ON n.oid = p.pronamespace
         WHERE n.nspname = 'pg_catalog'
           AND p.prokind IN ('f', 'a', 'w')
           AND p.prorettype::regtype::text NOT IN (${internal})
           AND NOT EXISTS (
                 SELECT 1 FROM unnest(p.proargtypes) a
                  WHERE a::regtype::text IN (${internal})
               )
         GROUP BY p.proname, p.prokind
      ) s`)
    if (functions.length < 1000) {
      throw new Error(
        `pg_proc returned only ${functions.length} callable names; refusing to write.`,
      )
    }

    // Operator *names*, not signatures: the validator only answers "is this a
    // real operator", because deciding which overload applies needs types.
    const operators = json(`
      SELECT coalesce(json_agg(DISTINCT oprname ORDER BY oprname), '[]'::json)
        FROM pg_operator`)

    mkdirSync(GENERATED, { recursive: true })
    writeFileSync(
      join(GENERATED, 'catalog.json'),
      JSON.stringify(
        { version, serverVersion, keywords, functions, operators },
        null,
        2,
      ) + '\n',
    )
    process.stderr.write(
      `Wrote catalog.json: ${keywords.length} keywords, ${functions.length} function names, ` +
        `${operators.length} operators from PostgreSQL ${serverVersion}\n`,
    )
  } finally {
    try {
      docker('rm', '-f', CONTAINER)
    } catch {
      // Best effort.
    }
  }
}

function waitForServer() {
  const deadline = Date.now() + 120_000
  while (Date.now() < deadline) {
    try {
      docker('exec', CONTAINER, 'pg_isready', '-q', '-U', 'postgres')
      // pg_isready answers before the init script has finished restarting the
      // server; a real query is the only reliable gate.
      psql('SELECT 1')
      return
    } catch {
      execFileSync('sleep', ['1'])
    }
  }
  throw new Error('PostgreSQL did not become ready within 120s.')
}

// ---------------------------------------------------------------------------
// split
// ---------------------------------------------------------------------------

/** Every `'WORD'` literal the grammar spells, lower-cased as the server has it. */
function keywordLiterals(file) {
  const source = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
  return new Set(
    (source.match(/'([A-Za-z_][A-Za-z_0-9]*)'/g) ?? []).map(w =>
      w.slice(1, -1).toLowerCase(),
    ),
  )
}

function split() {
  const catalog = JSON.parse(
    readFileSync(join(GENERATED, 'catalog.json'), 'utf8'),
  )
  const spelled = keywordLiterals(join(LANGUAGE, 'sql.langium'))
  const mentioned = catalog.keywords.filter(k => spelled.has(k.word))

  // A word the grammar never spells is not a token, so it needs no
  // re-admission: it already lexes as an identifier.
  const byCategory = category =>
    mentioned.filter(k => k.category === category).map(k => k.word)

  const unreserved = byCategory('U').filter(
    w => !KEEP_RESERVED.ColId.has(w) && !KEEP_RESERVED.TypeFunctionName.has(w),
  )
  const colName = byCategory('C').filter(w => !KEEP_RESERVED.ColId.has(w))
  const typeFuncName = byCategory('T').filter(
    w => !KEEP_RESERVED.TypeFunctionName.has(w),
  )
  const reserved = byCategory('R')
  const bareLabel = mentioned
    .filter(k => k.bareLabel)
    .map(k => k.word)
    .filter(w => !KEEP_RESERVED.BareColLabel.has(w))

  mkdirSync(GENERATED, { recursive: true })
  writeFileSync(
    join(GENERATED, 'postgres-keywords.langium'),
    langiumFile(catalog, { unreserved, colName, typeFuncName, reserved, bareLabel }),
  )
  writeFileSync(
    join(GENERATED, 'keywords.ts'),
    keywordsFile(catalog, mentioned, spelled),
  )
  writeFileSync(join(GENERATED, 'functions.ts'), functionsFile(catalog))
  writeFileSync(join(GENERATED, 'operators.ts'), operatorsFile(catalog))
  writeFileSync(join(GENERATED, 'highlight-words.ts'), highlightWordsFile(catalog))

  process.stderr.write(
    `Wrote postgres-keywords.langium (${unreserved.length} unreserved, ${colName.length} col_name, ` +
      `${typeFuncName.length} type_func_name, ${reserved.length} reserved, ${bareLabel.length} bare-label), ` +
      `keywords.ts, functions.ts and operators.ts.\n`,
  )
  process.stderr.write('Now run `npm run generate` to rebuild the parser.\n')
}

/**
 * A category can come out empty - every word of it that the grammar spells is
 * in KEEP_RESERVED. Langium still needs the rule to match something, so it gets
 * a word no SQL text contains, and the comment above it says why.
 */
const EMPTY_CATEGORY = `      // Empty: every keyword of this category that the grammar spells is kept
      // reserved on purpose (see KEEP_RESERVED in
      // scripts/refresh-postgres-data.mjs), so none is re-admitted as a name.
      // The rule still has to match something, and this is a word no statement
      // can contain.
      'daanse_reserved_on_purpose'`

function alternation(words) {
  if (words.length === 0) return EMPTY_CATEGORY
  const lines = []
  for (let i = 0; i < words.length; i += 6) {
    lines.push(
      words
        .slice(i, i + 6)
        .map(w => `'${w.toUpperCase()}'`)
        .join(' | '),
    )
  }
  return lines
    .map((line, i) => (i === 0 ? '      ' : '    | ') + line)
    .join('\n')
}

function array(words) {
  const lines = []
  let line = '   '
  for (const word of words) {
    const piece = ` '${word}',`
    if (line.length + piece.length > 96) {
      lines.push(line)
      line = '   '
    }
    line += piece
  }
  if (line.trim()) lines.push(line)
  return lines.join('\n').replace(/,$/, '')
}

function langiumFile(catalog, sets) {
  return `/**
 * GENERATED from PostgreSQL ${catalog.serverVersion}'s \`pg_get_keywords()\`.
 * Run \`npm run refresh-postgres-data\`; never edit by hand.
 *
 * Langium reserves a word exactly when some rule mentions it, so every keyword
 * \`sql.langium\` spells would otherwise be unusable as a name. PostgreSQL
 * instead sorts keywords into four categories, and each category is readmitted
 * in the positions \`gram.y\` allows it:
 *
 *   ColId            unreserved + col_name
 *   TypeFunctionName unreserved + type_func_name
 *   ColLabel         all four
 *   BareColLabel     every keyword flagged \`barelabel\`
 *
 * Only the words the grammar actually spells appear here; one it never
 * mentions is no token and already lexes as an identifier.
 */
grammar PostgresKeywords

/** Category \`U\`: unreserved. A name anywhere. */
UnreservedKeyword returns string:
${alternation(sets.unreserved)};

/** Category \`C\`: unreserved, but not a type or function name. */
ColNameKeyword returns string:
${alternation(sets.colName)};

/** Category \`T\`: reserved, but allowed as a type or function name. */
TypeFuncNameKeyword returns string:
${alternation(sets.typeFuncName)};

/** Category \`R\`: reserved. A name only after \`AS\` or a dot. */
ReservedKeyword returns string:
${alternation(sets.reserved)};

/** \`barelabel\`: usable as a column alias with no \`AS\` in front. */
BareLabelKeyword returns string:
${alternation(sets.bareLabel)};

/**
 * Langium requires every grammar file, including an imported one, to declare an
 * entry rule, and validates this file on its own terms - a rule the entry rule
 * cannot reach is reported as unreferenced even though \`sql.langium\` uses it.
 * So this lists all five. Nothing refers to the rule itself and the parser
 * never reaches it.
 */
entry PostgresKeywordFile:
    words+=(
        UnreservedKeyword | ColNameKeyword | TypeFuncNameKeyword
      | ReservedKeyword | BareLabelKeyword
    )*;
`
}

function keywordsFile(catalog, mentioned, spelled) {
  const all = catalog.keywords
  const reservedEverywhere = all
    .filter(k => k.category === 'R')
    .map(k => k.word)
  const reservedNotInGrammar = reservedEverywhere.filter(w => !spelled.has(w))
  const categories = Object.fromEntries(
    all.map(k => [k.word, k.category]),
  )
  return `/**
 * GENERATED from PostgreSQL ${catalog.serverVersion}'s \`pg_get_keywords()\`.
 * Run \`npm run refresh-postgres-data\`; never edit by hand.
 *
 * \`RESERVED_NOT_IN_GRAMMAR\` is the half that matters to the validator: words
 * PostgreSQL reserves that no rule in \`sql.langium\` spells, so Langium's lexer
 * cannot reserve them and they would otherwise pass as bare names.
 * \`sql-validator.ts\` rejects those, which is the second half of matching the
 * server's own identifier rules - the first half being the category rules in
 * \`postgres-keywords.langium\`.
 */

export type KeywordCategory = 'U' | 'C' | 'T' | 'R';

export const KEYWORD_CATEGORIES: Readonly<Record<string, KeywordCategory>> =
  ${JSON.stringify(categories, null, 2).replace(/\n/g, '\n  ')};

export const RESERVED_WORDS: ReadonlySet<string> = new Set([
${array(reservedEverywhere)}
]);

export const RESERVED_NOT_IN_GRAMMAR: ReadonlySet<string> = new Set([
${array(reservedNotInGrammar)}
]);

export const KEYWORDS_IN_GRAMMAR: ReadonlySet<string> = new Set([
${array(mentioned.map(k => k.word))}
]);

/**
 * The words PostgreSQL does not reserve in some position but this grammar does
 * anyway, because re-admitting them there makes it ambiguous. Each costs a pair
 * of quotes and is a DIVERGENCE note in \`sql.langium\`; \`test/keywords.test.ts\`
 * asserts this is exactly the set that no category rule re-admits, so the list
 * cannot drift from the grammar without a test failing.
 */
export const KEPT_RESERVED: ReadonlySet<string> = new Set([
${array([...KEEP_RESERVED.ColId].filter(w => spelled.has(w)).sort())}
]);

export const POSTGRES_VERSION = ${JSON.stringify(catalog.serverVersion)};
`
}

function functionsFile(catalog) {
  const entries = catalog.functions.map(fn => {
    const arities = fn.overloads.map(o => ({
      args: o.args,
      defaults: o.defaults,
      variadic: o.variadic,
    }))
    return `  ['${fn.name}', { kind: '${fn.kind}', overloads: ${JSON.stringify(arities)} }],`
  })
  return `/**
 * GENERATED from PostgreSQL ${catalog.serverVersion}'s \`pg_proc\`, restricted to
 * \`pg_catalog\` and to functions a query can actually call.
 * Run \`npm run refresh-postgres-data\`; never edit by hand.
 *
 * \`kind\` is \`pg_proc.prokind\`: \`f\` plain function, \`a\` aggregate,
 * \`w\` window function. The validator needs it for the checks that ask what a
 * call *is* rather than what it is named - an aggregate in WHERE, a FILTER on
 * something that is not an aggregate.
 *
 * An overload's \`args\` is its declared argument count, \`defaults\` how many of
 * those may be omitted, and \`variadic\` whether it accepts a trailing list. A
 * call matches when some overload can take its argument count; nothing here
 * looks at types, which need a catalogue this package does not have.
 */

export type FunctionKind = 'f' | 'a' | 'w';

export interface FunctionOverload {
  readonly args: number;
  readonly defaults: number;
  readonly variadic: boolean;
}

export interface FunctionEntry {
  readonly kind: FunctionKind;
  readonly overloads: readonly FunctionOverload[];
}

const FUNCTIONS = new Map<string, FunctionEntry>([
${entries.join('\n')}
]);

export function lookupFunction(name: string): FunctionEntry | undefined {
  return FUNCTIONS.get(name.toLowerCase());
}

export function isAggregate(name: string): boolean {
  return lookupFunction(name)?.kind === 'a';
}

export function isWindowFunction(name: string): boolean {
  return lookupFunction(name)?.kind === 'w';
}

/** Every name, for the highlighter's generated function list. */
export const FUNCTION_NAMES: readonly string[] = [...FUNCTIONS.keys()];
`
}

/**
 * The two flat word lists the CodeMirror tokenizer needs, and nothing else.
 *
 * It exists so the highlighter can be exact without dragging the rest in:
 * `functions.ts` carries every overload's arity, which is what makes it large,
 * and the tokenizer runs on the UI thread where that weight would land in the
 * main bundle. Names alone are a fraction of it.
 */
function highlightWordsFile(catalog) {
  return `/**
 * GENERATED from PostgreSQL ${catalog.serverVersion}.
 * Run \`npm run refresh-postgres-data\`; never edit by hand.
 *
 * Words only, for \`src/sql-stream-language.ts\`. Everything the tokenizer needs
 * to colour a word correctly and nothing it does not - importing \`functions.ts\`
 * instead would pull every overload's arity into the main bundle, and the
 * highlighter never asks how many arguments a function takes.
 */

/** Every keyword the server reports, whatever its category. */
export const KEYWORD_WORDS: readonly string[] = [
${array(catalog.keywords.map(k => k.word))}
];

/** Every callable name in \`pg_catalog\`. */
export const FUNCTION_WORDS: readonly string[] = [
${array(catalog.functions.map(f => f.name))}
];
`
}

function operatorsFile(catalog) {
  return `/**
 * GENERATED from PostgreSQL ${catalog.serverVersion}'s \`pg_operator\`.
 * Run \`npm run refresh-postgres-data\`; never edit by hand.
 *
 * Names only. The grammar lexes any run of operator characters as one token,
 * which is what the server does, so the validator is what answers whether the
 * run names an operator that exists. Which overload applies needs types, and
 * this package has no catalogue.
 */

export const OPERATORS: ReadonlySet<string> = new Set([
${array(catalog.operators)}
]);

export const POSTGRES_VERSION = ${JSON.stringify(catalog.serverVersion)};
`
}

const splitOnly = process.argv.includes('--split')
if (!splitOnly) extract()
split()
