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
 * The independent evidence. Every entry's verdict is a transcript from a real
 * PostgreSQL 18 server, recorded once by `npm run record-corpus` and read from
 * the file header thereafter, so this suite needs no Docker and no network.
 *
 * What is compared is *diagnostics*, not parse success: some of what the server
 * rejects is caught here by the validator rather than the parser, and to the
 * person typing it that is the same red underline.
 */

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { DiagnosticSeverity } from 'vscode-languageserver-types'
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createSqlServices } from '../src/language/sql-module.js'
import type { SqlModel } from '../src/language/generated/ast.js'

const services = createSqlServices(EmptyFileSystem)
const parse = parseHelper<SqlModel>(services.Sql)

const CORPUS_DIR = join(__dirname, 'corpus')
const files = readdirSync(CORPUS_DIR)
  .filter(file => file.endsWith('.sql'))
  .sort()

interface Entry {
  file: string
  source: string
  construct: string
  scope: 'in' | 'out'
  verdict: 'pending' | 'accepts' | 'rejects'
  /** The server's SQLSTATE, e.g. `42601`. Messages are reworded; codes are not. */
  sqlstate?: string
  text: string
}

function read(file: string): Entry {
  const text = readFileSync(join(CORPUS_DIR, file), 'utf8')
  const field = (name: string, fallback?: string): string => {
    const match = new RegExp(`^-- ${name}:\\s*(.+)$`, 'm').exec(text)
    if (!match) {
      if (fallback !== undefined) return fallback
      throw new Error(`${file} has no \`-- ${name}:\` header line`)
    }
    return match[1].trim()
  }
  const verdict = field('Verdict')
  const rejects = /^rejects\s+([0-9A-Z]{5})$/.exec(verdict)
  if (verdict !== 'pending' && verdict !== 'accepts' && !rejects) {
    throw new Error(`${file} has an unreadable verdict: ${verdict}`)
  }
  return {
    file,
    source: field('Source'),
    construct: field('Construct'),
    scope: field('Scope', 'in') === 'out' ? 'out' : 'in',
    verdict: rejects ? 'rejects' : (verdict as 'pending' | 'accepts'),
    sqlstate: rejects ? rejects[1] : undefined,
    text,
  }
}

const entries = files.map(read)
const recorded = entries.filter(entry => entry.verdict !== 'pending')
const pending = entries.filter(entry => entry.verdict === 'pending')

async function editorAccepts(text: string): Promise<boolean> {
  const document = await parse(text, { validation: true })
  const errors = (document.diagnostics ?? []).filter(
    diagnostic => diagnostic.severity === DiagnosticSeverity.Error,
  )
  return errors.length === 0
}

describe('the corpus itself', () => {
  test('has entries', () => {
    expect(entries.length).toBeGreaterThan(0)
  })

  test('every entry names a source and a construct', () => {
    for (const entry of entries) {
      expect(entry.source, entry.file).not.toBe('')
      expect(entry.construct, entry.file).not.toBe('')
    }
  })

  test('every rejection carries a SQLSTATE', () => {
    for (const entry of recorded.filter(e => e.verdict === 'rejects')) {
      expect(entry.sqlstate, entry.file).toMatch(/^[0-9A-Z]{5}$/)
    }
  })
})

describe.skipIf(pending.length === 0)(
  'entries awaiting a recorded verdict',
  () => {
    // Skipped, not passing: a verdict nobody has recorded proves nothing, and
    // a green tick beside one would say otherwise.
    test.skip.each(pending.map(entry => entry.file))(
      '%s — run `npm run record-corpus` (needs Docker)',
      () => {},
    )
  },
)

const inScope = recorded.filter(entry => entry.scope === 'in')
const outOfScope = recorded.filter(entry => entry.scope === 'out')

describe.skipIf(inScope.length === 0)(
  'the editor agrees with PostgreSQL 18',
  () => {
    test.each(inScope.map(entry => [entry.file, entry] as const))(
      '%s',
      async (_file, entry) => {
        expect(await editorAccepts(entry.text)).toBe(
          entry.verdict === 'accepts',
        )
      },
    )
  },
)

describe.skipIf(outOfScope.length === 0)(
  'constructs deliberately left out of the grammar',
  () => {
    test.each(outOfScope.map(entry => [entry.file, entry] as const))(
      '%s is valid PostgreSQL and is still reported here',
      async (_file, entry) => {
        expect(
          entry.verdict,
          'a `Scope: out` entry the server also rejects proves nothing',
        ).toBe('accepts')
        expect(await editorAccepts(entry.text)).toBe(false)
      },
    )
  },
)
