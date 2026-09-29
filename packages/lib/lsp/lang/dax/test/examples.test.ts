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

import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, test } from 'vitest'
import { parseHelper } from 'langium/test'
import { createDaxServicesForTesting } from '../src/language/dax-module.js'
import { DAX_EXAMPLES } from '../src/examples.js'

const services = createDaxServicesForTesting()
const parseQuery = parseHelper(services.DaxQuery)
const parseFormula = parseHelper(services.DaxFormula)

const EXAMPLES_DIR = join(__dirname, '..', 'examples')
const files = readdirSync(EXAMPLES_DIR).filter(file => /\.daxe?$/.test(file))

describe('the bundled DAX examples', () => {
  test('every file is offered, and every offer is a file', () => {
    expect(DAX_EXAMPLES.map(example => example.fileName).sort()).toEqual(
      [...files].sort(),
    )
  })

  test('there are queries and formulas', () => {
    expect(files.some(file => file.endsWith('.dax'))).toBe(true)
    expect(files.some(file => file.endsWith('.daxe'))).toBe(true)
  })

  // These are what the playgrounds load, so a diagnostic here is a broken
  // playground, not just a broken test. They are also all accepted by the
  // reference parser - the examples show DAX both agree on.
  test.each(files)(
    '%s parses and validates without a diagnostic',
    async file => {
      const text = readFileSync(join(EXAMPLES_DIR, file), 'utf8')
      const parse = file.endsWith('.daxe') ? parseFormula : parseQuery
      const document = await parse(text, { validation: true })
      const { lexerErrors, parserErrors } = document.parseResult
      expect([...lexerErrors, ...parserErrors].map(e => e.message)).toEqual([])
      expect((document.diagnostics ?? []).map(d => d.message)).toEqual([])
    },
  )
})
