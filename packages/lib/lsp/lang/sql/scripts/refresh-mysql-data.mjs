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

import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const LANGUAGE = join(HERE, '..', 'src', 'language')
const GENERATED = join(LANGUAGE, 'generated-mysql')

const MYSQL_IMAGE = 'mysql:8.4'
const CONTAINER = 'olap-editor-mysql-refresh'

const SQL_MODE =
  'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,' +
  'ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,ANSI_QUOTES,PIPES_AS_CONCAT'

const KEEP_RESERVED = new Set([
  // `CAST(x AS CHAR)` and a call to a function named `cast` differ only at
  // the `AS`, an unbounded number of tokens in.
  'CAST',
  // `UNBOUNDED PRECEDING` and a frame offset naming a column `unbounded` are
  // the same token sequence. Likewise `CURRENT ROW`.
  'UNBOUNDED',
  'CURRENT',
])

function docker(...args) {
  return execFileSync('docker', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function extract() {
  process.stderr.write(`Starting ${MYSQL_IMAGE}...\n`)
  try {
    docker('rm', '-f', CONTAINER)
  } catch {
    // Not running; nothing to remove.
  }
  docker(
    'run',
    '--rm',
    '-d',
    '--name',
    CONTAINER,
    '-e',
    'MYSQL_ALLOW_EMPTY_PASSWORD=yes',
    MYSQL_IMAGE,
    '--sql-mode=' + SQL_MODE,
  )
  try {
    waitForServer()
    const tsv = docker(
      'exec',
      CONTAINER,
      'mysql',
      '-uroot',
      '--batch',
      '--skip-column-names',
      '-e',
      'SELECT WORD, RESERVED FROM INFORMATION_SCHEMA.KEYWORDS ORDER BY WORD',
    )
    const rows = tsv
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => {
        const [word, reserved] = line.split('\t')
        return { word: word.toUpperCase(), reserved: reserved === '1' }
      })
    if (rows.length < 500) {
      throw new Error(
        `INFORMATION_SCHEMA.KEYWORDS returned only ${rows.length} rows; refusing to write.`,
      )
    }
    const version = docker(
      'exec',
      CONTAINER,
      'mysql',
      '-uroot',
      '--batch',
      '--skip-column-names',
      '-e',
      'SELECT VERSION()',
    ).trim()
    writeFileSync(
      join(GENERATED, 'keywords.json'),
      JSON.stringify({ version, sqlMode: SQL_MODE, keywords: rows }, null, 2) +
        '\n',
    )
    process.stderr.write(
      `Wrote keywords.json: ${rows.length} keywords from MySQL ${version}\n`,
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
      docker('exec', CONTAINER, 'mysqladmin', '-uroot', 'ping', '--silent')
      return
    } catch {
      execFileSync('sleep', ['2'])
    }
  }
  throw new Error('MySQL did not become ready within 120s.')
}

function keywordLiterals(file) {
  const source = readFileSync(file, 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/[^\n]*/g, '')
  return new Set(
    (source.match(/'([A-Za-z_][A-Za-z_0-9]*)'/g) ?? []).map(w =>
      w.slice(1, -1).toUpperCase(),
    ),
  )
}

function split() {
  const data = JSON.parse(
    readFileSync(join(GENERATED, 'keywords.json'), 'utf8'),
  )
  const reserved = new Set(
    data.keywords.filter(k => k.reserved).map(k => k.word),
  )

  const grammarWords = keywordLiterals(join(LANGUAGE, 'sql.langium'))
  const readmit = [...grammarWords]
    .filter(w => !reserved.has(w) && !KEEP_RESERVED.has(w))
    .sort()
  const reservedUsed = [...grammarWords].filter(w => reserved.has(w)).sort()
  const reservedUnused = [...reserved].filter(w => !grammarWords.has(w)).sort()

  writeFileSync(
    join(GENERATED, 'mysql-keywords.langium'),
    langiumFile(readmit, data),
  )
  writeFileSync(
    join(GENERATED, 'keywords.ts'),
    keywordsFile(reserved, reservedUsed, reservedUnused, data),
  )

  process.stderr.write(
    `Wrote mysql-keywords.langium (${readmit.length} re-admitted) and ` +
      `keywords.ts (${reservedUsed.length} reserved in grammar, ${reservedUnused.length} not).\n`,
  )
  process.stderr.write('Now run `npm run generate` to rebuild the parser.\n')
}

function alternation(words) {
  const lines = []
  for (let i = 0; i < words.length; i += 6) {
    lines.push(
      words
        .slice(i, i + 6)
        .map(w => `'${w}'`)
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

function provenance(data) {
  return data.provisional
    ? `PROVISIONAL - derived from the MySQL ${data.version} manual, not from a server.\n * ${data.provisionalNote}`
    : `GENERATED from MySQL ${data.version}'s \`INFORMATION_SCHEMA.KEYWORDS\`.`
}

function langiumFile(readmit, data) {
  return `/**
 * ${provenance(data)}
 * Run \`npm run refresh-mysql-data\`; never edit by hand.
 *
 * Langium reserves a word exactly when some rule mentions it, so every keyword
 * \`sql.langium\` uses would otherwise be unusable as an identifier. These
 * ${readmit.length} are the ones the grammar mentions that MySQL does *not*
 * reserve - \`SELECT skip, share, locked, offset FROM t\` is valid MySQL, and
 * without this rule it would not parse.
 *
 * Three non-reserved words are deliberately left out, because re-admitting
 * them makes the grammar genuinely ambiguous: CAST, UNBOUNDED and CURRENT.
 * See KEEP_RESERVED in \`scripts/refresh-mysql-data.mjs\` for why, and the
 * DIVERGENCE note in \`sql.langium\`.
 */
grammar MysqlKeywords

NonReservedKeyword returns string:
${alternation(readmit)};

entry NonReservedKeywordFile:
    words+=NonReservedKeyword*;
`
}

function keywordsFile(reserved, used, unused, data) {
  return `/**
 * ${provenance(data)}
 * Run \`npm run refresh-mysql-data\`; never edit by hand.
 *
 * \`RESERVED_NOT_IN_GRAMMAR\` is the half that matters to the validator: words
 * MySQL reserves that no rule in \`sql.langium\` mentions, so Langium's lexer
 * cannot reserve them and they would otherwise be accepted as bare
 * identifiers. \`sql-validator.ts\` rejects those, which is the second half of
 * matching MySQL's identifier rules - the first half being
 * \`NonReservedKeyword\` in \`mysql-keywords.langium\`.
 */

export const RESERVED_WORDS: ReadonlySet<string> = new Set([
${array([...reserved].sort())}
]);

export const RESERVED_NOT_IN_GRAMMAR: ReadonlySet<string> = new Set([
${array(unused)}
]);

export const RESERVED_IN_GRAMMAR: ReadonlySet<string> = new Set([
${array(used)}
]);

export const MYSQL_VERSION = ${JSON.stringify(data.version)};

export const MYSQL_SQL_MODE = ${JSON.stringify(data.sqlMode)};
`
}

const splitOnly = process.argv.includes('--split')
if (!splitOnly) extract()
split()
