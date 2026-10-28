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
 * Records what a real PostgreSQL 18 server says about every entry in
 * `test/corpus/`, and writes the answer into the file's own `-- Verdict:`
 * header. `test/corpus.test.ts` reads those headers and never talks to a
 * server, so the suite runs anywhere; this script is the only thing that needs
 * Docker, and it runs when an entry is added or the pin moves.
 *
 * Two things are deliberate:
 *
 *   - Statements are *prepared*, not executed. PREPARE runs the parser and the
 *     analyser and stops before execution, which is exactly the boundary this
 *     package models - and it cannot change a row by accident.
 *   - The verdict records the SQLSTATE, not the message. Messages are reworded
 *     between releases; `42601` means the same thing forever.
 *
 * PREPARE only accepts SELECT, INSERT, UPDATE, DELETE, MERGE and VALUES. An
 * entry marked `-- Scope: out` is usually DDL - valid SQL this grammar
 * deliberately does not cover - and preparing it would report a syntax error
 * that says nothing about the server. Those run inside a transaction that is
 * rolled back instead.
 */

import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const CORPUS = join(HERE, '..', 'test', 'corpus')

const POSTGRES_IMAGE = 'postgres:18'
const CONTAINER = 'daanse-lsp-postgres-corpus'
const DATABASE = 'foodmart'

/**
 * The FoodMart star, plus the generic names the documentation's own examples
 * use. Columns exist so that a name error never masks a syntax verdict; types
 * are chosen for the same reason and nothing depends on their width.
 */
const SCHEMA = `
CREATE TABLE sales_fact_1997 (product_id int, time_id int, customer_id int,
  promotion_id int, store_id int, store_sales numeric(10,4),
  store_cost numeric(10,4), unit_sales numeric(10,4));
CREATE TABLE sales_fact_1998 (product_id int, time_id int, customer_id int,
  promotion_id int, store_id int, store_sales numeric(10,4),
  store_cost numeric(10,4), unit_sales numeric(10,4));
CREATE TABLE product (product_class_id int, product_id int, brand_name varchar(60),
  product_name varchar(60), sku bigint, srp numeric(10,4), attributes jsonb);
CREATE TABLE product_class (product_class_id int, product_subcategory varchar(30),
  product_category varchar(30), product_department varchar(30), product_family varchar(30));
CREATE TABLE customer (customer_id int, account_num bigint, lname varchar(30),
  fname varchar(30), city varchar(30), state_province varchar(30), country varchar(30),
  gender varchar(1));
CREATE TABLE time_by_day (time_id int, the_date timestamp, the_day varchar(30),
  the_month varchar(30), the_year smallint, day_of_month smallint,
  week_of_year int, month_of_year smallint, quarter varchar(30));
CREATE TABLE store (store_id int, store_type varchar(30), region_id int,
  store_name varchar(30), store_city varchar(30), store_state varchar(30),
  store_country varchar(30));
CREATE TABLE promotion (promotion_id int, promotion_name varchar(30),
  media_type varchar(30), cost numeric(10,4));
CREATE TABLE sales_summary (product_family varchar(30), sales numeric(10,4));
-- Generic names used by the documentation's own examples. Quoted columns are
-- reserved words the corpus uses as names on purpose.
CREATE TABLE t (a int, b int, c int, id int, old int, name varchar(30), d timestamp,
  "interval" int, "select" int, j jsonb);
CREATE TABLE t1 (a int, b int, c int, id int, name varchar(30), "skip" int,
  "locked" int, "share" int, "offset" int, "nowait" int);
CREATE TABLE t2 (a int, b int, id int, name varchar(30), salary int);
CREATE TABLE t3 (a int, id int);
CREATE TABLE t4 (a int, id int);
CREATE TABLE u (a int, id int, old int);
CREATE TABLE v (id int, y int);
CREATE TABLE w (d int);
CREATE TABLE employee (name varchar(30));
CREATE TABLE info (name varchar(30), salary int);
CREATE TABLE numbers (val int);
CREATE TABLE daily_sales (the_date date, sales int);
CREATE TABLE sales (year int, country varchar(30), profit int);
CREATE TABLE people (first_name varchar(30), last_name varchar(30));
CREATE TABLE salesperson (id int, name varchar(30));
CREATE TABLE all_sales (salesperson_id int, amount int);
CREATE TABLE archive (id int);
`

/**
 * Errors about names rather than about syntax. This package resolves nothing -
 * it has no catalogue - so it never reports these, and an entry that trips one
 * has still told us what we asked.
 */
const NAME_ERRORS = new Set([
  '42P01', // undefined_table
  '42703', // undefined_column
  '42704', // undefined_object
  '42883', // undefined_function - the validator warns, never errors
  '42P02', // undefined_parameter
  '3F000', // invalid_schema_name
])

/** The statements PREPARE will take (its own documentation's list). */
const PREPARABLE = new Set([
  'select',
  'insert',
  'update',
  'delete',
  'merge',
  'values',
  'table',
  'with',
])

function docker(...args) {
  return execFileSync('docker', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

/** Runs SQL and returns stdout; throws with stderr attached on failure. */
function psql(sql) {
  return execFileSync(
    'docker',
    [
      'exec',
      '-i',
      CONTAINER,
      'psql',
      '-U',
      'postgres',
      '-d',
      DATABASE,
      '-X',
      '-q',
      '-t',
      '-A',
      '-v',
      'ON_ERROR_STOP=1',
      '-v',
      'VERBOSITY=verbose',
      '-f',
      '-',
    ],
    { encoding: 'utf8', input: sql, stdio: ['pipe', 'pipe', 'pipe'] },
  )
}

function start() {
  process.stderr.write(`Starting ${POSTGRES_IMAGE}...\n`)
  try {
    docker('rm', '-f', CONTAINER)
  } catch {
    // Not running.
  }
  docker(
    'run',
    '--rm',
    '-d',
    '--name',
    CONTAINER,
    '-e',
    'POSTGRES_PASSWORD=corpus',
    '-e',
    `POSTGRES_DB=${DATABASE}`,
    POSTGRES_IMAGE,
  )
  const deadline = Date.now() + 120_000
  for (;;) {
    try {
      psql('SELECT 1')
      break
    } catch {
      if (Date.now() > deadline) {
        throw new Error('PostgreSQL did not become ready within 120s.')
      }
      execFileSync('sleep', ['1'])
    }
  }
  psql(SCHEMA)
  process.stderr.write('Schema loaded.\n')
}

/**
 * Splits a corpus file into statements.
 *
 * Not a plain split on `;`: a dollar-quoted body may contain one, and so may a
 * string. This tracks just enough of the lexer to know when a `;` is a
 * separator - which is the same reason `sql-token-builder.ts` exists.
 */
function statementsOf(text) {
  const body = text
    .split('\n')
    .filter(line => !line.trimStart().startsWith('--'))
    .join('\n')

  const statements = []
  let current = ''
  let index = 0
  while (index < body.length) {
    const rest = body.slice(index)

    const dollar = /^\$(?:[_a-zA-Z][\w]*)?\$/.exec(rest)
    if (dollar) {
      const tag = dollar[0]
      const close = body.indexOf(tag, index + tag.length)
      const end = close < 0 ? body.length : close + tag.length
      current += body.slice(index, end)
      index = end
      continue
    }

    const char = body[index]
    if (char === "'" || char === '"') {
      let end = index + 1
      while (end < body.length) {
        if (body[end] === char) {
          if (body[end + 1] === char) {
            end += 2
            continue
          }
          end++
          break
        }
        end++
      }
      current += body.slice(index, end)
      index = end
      continue
    }

    if (char === ';') {
      statements.push(current.trim())
      current = ''
      index++
      continue
    }

    current += char
    index++
  }
  if (current.trim()) statements.push(current.trim())
  return statements.filter(Boolean)
}

function firstWord(statement) {
  const match = /^\s*([a-zA-Z_]+)/.exec(statement)
  return match ? match[1].toLowerCase() : ''
}

/** `$$` so the body needs no escaping whatever quotes it contains. */
function dollarQuote(text) {
  let tag = '$corpus$'
  let n = 0
  while (text.includes(tag)) tag = `$corpus${++n}$`
  return tag + text + tag
}

function verdictFor(text) {
  for (const statement of statementsOf(text)) {
    const preparable = PREPARABLE.has(firstWord(statement))
    const sql = preparable
      ? `PREPARE corpus_stmt AS ${statement};\nDEALLOCATE corpus_stmt;`
      : `BEGIN;\n${statement};\nROLLBACK;`
    try {
      psql(sql)
    } catch (error) {
      const stderr = String(error.stderr ?? '')
      const match = /ERROR:\s+([0-9A-Z]{5}):/.exec(stderr)
      const sqlstate = match ? match[1] : '?????'
      if (NAME_ERRORS.has(sqlstate)) continue
      const detail = (stderr.split('\n').find(line => line.includes('ERROR:')) ?? '')
        .replace(/^ERROR:\s+/, '')
        .trim()
      // A rolled-back transaction leaves the session aborted on failure; the
      // next statement would report 25P02 instead of its own verdict.
      if (!preparable) {
        try {
          psql('ROLLBACK;')
        } catch {
          // Nothing open.
        }
      }
      return { verdict: `rejects ${sqlstate}`, detail }
    }
  }
  return { verdict: 'accepts', detail: '' }
}

function main() {
  const files = readdirSync(CORPUS)
    .filter(file => file.endsWith('.sql'))
    .sort()
  start()
  try {
    let changed = 0
    for (const file of files) {
      const path = join(CORPUS, file)
      const text = readFileSync(path, 'utf8')
      const { verdict, detail } = verdictFor(text)
      const updated = text.replace(/^-- Verdict:.*$/m, `-- Verdict: ${verdict}`)
      if (updated !== text) {
        writeFileSync(path, updated)
        changed++
      }
      process.stderr.write(
        `${file.padEnd(38)} ${verdict}${detail ? '  ' + detail : ''}\n`,
      )
    }
    process.stderr.write(`\n${changed} of ${files.length} verdicts updated.\n`)
  } finally {
    try {
      docker('rm', '-f', CONTAINER)
    } catch {
      // Best effort.
    }
  }
}

main()
