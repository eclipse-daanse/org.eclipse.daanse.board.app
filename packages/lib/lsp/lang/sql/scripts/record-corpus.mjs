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
import { readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const CORPUS = join(HERE, '..', 'test', 'corpus')

const MYSQL_IMAGE = 'mysql:8.4'
const CONTAINER = 'olap-editor-mysql-corpus'
const DATABASE = 'foodmart'

const SQL_MODE =
  'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,' +
  'ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION,ANSI_QUOTES,PIPES_AS_CONCAT'

const SCHEMA = `
CREATE TABLE sales_fact_1997 (product_id INT, time_id INT, customer_id INT,
  promotion_id INT, store_id INT, store_sales DECIMAL(10,4),
  store_cost DECIMAL(10,4), unit_sales DECIMAL(10,4));
CREATE TABLE product (product_class_id INT, product_id INT, brand_name VARCHAR(60),
  product_name VARCHAR(60), SKU BIGINT, SRP DECIMAL(10,4));
CREATE TABLE product_class (product_class_id INT, product_subcategory VARCHAR(30),
  product_category VARCHAR(30), product_department VARCHAR(30), product_family VARCHAR(30));
CREATE TABLE customer (customer_id INT, account_num BIGINT, lname VARCHAR(30),
  fname VARCHAR(30), city VARCHAR(30), state_province VARCHAR(30), country VARCHAR(30),
  gender VARCHAR(1));
CREATE TABLE time_by_day (time_id INT, the_date DATETIME, the_day VARCHAR(30),
  the_month VARCHAR(30), the_year SMALLINT, day_of_month SMALLINT,
  week_of_year INT, month_of_year SMALLINT, quarter VARCHAR(30));
CREATE TABLE store (store_id INT, store_type VARCHAR(30), region_id INT,
  store_name VARCHAR(30), store_city VARCHAR(30), store_state VARCHAR(30),
  store_country VARCHAR(30));
CREATE TABLE promotion (promotion_id INT, promotion_name VARCHAR(30), media_type VARCHAR(30));
CREATE TABLE sales_summary (product_family VARCHAR(30), sales DECIMAL(10,4));
-- Generic names used by the manual's own examples.
CREATE TABLE t (a INT, b INT, c INT, id INT, old INT, name VARCHAR(30), d DATETIME,
  \`interval\` INT, \`fulltext\` INT, \`select\` INT);
CREATE TABLE t1 (a INT, b INT, c INT, id INT, name VARCHAR(30), \`skip\` INT,
  \`locked\` INT, \`share\` INT, \`offset\` INT, \`nowait\` INT, \`fulltext\` INT);
CREATE TABLE t2 (a INT, b INT, id INT, name VARCHAR(30), salary INT);
CREATE TABLE t3 (a INT, id INT);
CREATE TABLE t4 (a INT, id INT);
CREATE TABLE u (a INT, id INT, old INT);
CREATE TABLE v (id INT, y INT);
CREATE TABLE w (d INT);
CREATE TABLE employee (name VARCHAR(30));
CREATE TABLE info (name VARCHAR(30), salary INT);
CREATE TABLE numbers (val INT);
CREATE TABLE daily_sales (the_date DATE, sales INT);
CREATE TABLE sales (year INT, country VARCHAR(30), profit INT);
CREATE TABLE people (first_name VARCHAR(30), last_name VARCHAR(30));
CREATE TABLE salesperson (id INT, name VARCHAR(30));
CREATE TABLE all_sales (salesperson_id INT, amount INT);
CREATE TABLE archive (id INT);
CREATE TABLE \`table\` (\`select\` INT);
`

const NAME_ERRORS = new Set([
  1046, // no database selected
  1054, // unknown column
  1109, // unknown table in the given clause
  1146, // table doesn't exist
  1176, // key does not exist
  1305, // routine does not exist
  1364, // field has no default value
  3593, // window function used where not allowed
])

function docker(...args) {
  return execFileSync('docker', args, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  })
}

function start() {
  process.stderr.write(`Starting ${MYSQL_IMAGE}...\n`)
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
    'MYSQL_ALLOW_EMPTY_PASSWORD=yes',
    '-e',
    `MYSQL_DATABASE=${DATABASE}`,
    MYSQL_IMAGE,
    '--sql-mode=' + SQL_MODE,
  )
  const deadline = Date.now() + 120_000
  for (;;) {
    try {
      docker('exec', CONTAINER, 'mysqladmin', '-uroot', 'ping', '--silent')
      break
    } catch {
      if (Date.now() > deadline)
        throw new Error('MySQL did not become ready within 120s.')
      execFileSync('sleep', ['2'])
    }
  }
  mysql(SCHEMA)
  process.stderr.write('Schema loaded.\n')
}

function mysql(sql) {
  return execFileSync(
    'docker',
    [
      'exec',
      '-i',
      CONTAINER,
      'mysql',
      '-uroot',
      '--batch',
      '--skip-column-names',
      DATABASE,
    ],
    { encoding: 'utf8', input: sql, stdio: ['pipe', 'pipe', 'pipe'] },
  )
}

function verdictFor(text) {
  const body = text
    .split('\n')
    .filter(line => !line.startsWith('--'))
    .join('\n')
  const statements = body
    .split(';')
    .map(s => s.trim())
    .filter(Boolean)

  for (const statement of statements) {
    const quoted =
      "'" + statement.replace(/\\/g, '\\\\').replace(/'/g, "''") + "'"
    try {
      mysql(
        `PREPARE corpus_stmt FROM ${quoted}; DEALLOCATE PREPARE corpus_stmt;`,
      )
    } catch (error) {
      const stderr = String(error.stderr ?? '')
      const match = /ERROR (\d+)/.exec(stderr)
      const errno = match ? Number(match[1]) : 0
      if (NAME_ERRORS.has(errno)) continue
      return {
        verdict: `rejects ${errno}`,
        detail: stderr.trim().split('\n')[0],
      }
    }
  }
  return { verdict: 'accepts', detail: '' }
}

function main() {
  const files = readdirSync(CORPUS)
    .filter(f => f.endsWith('.sql'))
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
