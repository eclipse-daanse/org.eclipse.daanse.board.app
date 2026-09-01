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
import { EmptyFileSystem } from 'langium'
import { parseHelper } from 'langium/test'
import { createDmvServices } from '../src/language/dmv-module.js'
import type { DmvModel } from '../src/language/generated/ast.js'

const services = createDmvServices(EmptyFileSystem)
const parse = parseHelper<DmvModel>(services.Dmv)

const EXAMPLES_DIR = join(__dirname, '..', 'examples')
const files = readdirSync(EXAMPLES_DIR).filter(file => file.endsWith('.dmv'))

describe('the bundled DMV examples', () => {
  test('there are some', () => {
    expect(files.length).toBeGreaterThan(0)
  })

  // These are what the playgrounds load, so a parse error here is a broken
  // playground, not just a broken test.
  test.each(files)('%s parses without syntax errors', async file => {
    const document = await parse(readFileSync(join(EXAMPLES_DIR, file), 'utf8'))
    const { lexerErrors, parserErrors } = document.parseResult
    expect([
      ...lexerErrors.map(e => e.message),
      ...parserErrors.map(e => e.message),
    ]).toEqual([])
    expect(document.parseResult.value.query).toBeDefined()
  })
})
