/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
*/
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ValidityCheck from '../../../util/src/utils/ValidityCheck'
import LocalRepositoryImpl from './LocalRepositoryImpl'

/*
 * localStorage is shared with everything else on the origin: the theme and
 * the language are stored there as plain strings. The repository reads every
 * key, so it has to pass over the ones that are not its own without noise.
 */
function repository(): LocalRepositoryImpl {
  const repo = new LocalRepositoryImpl()
  ;(repo as unknown as { ValidityCheck: ValidityCheck }).ValidityCheck = new ValidityCheck()
  repo.init(new URL('local://localhost/'), 'local')
  return repo
}

const workspace = { datasources: [], conections: [] }

describe('LocalRepositoryImpl', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  afterEach(() => {
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('findAll passes over values other code stored, without logging', async () => {
    localStorage.setItem('theme', 'auto')
    localStorage.setItem('language', 'en')
    localStorage.setItem('count', '3')
    localStorage.setItem('board', JSON.stringify(workspace))
    const log = vi.spyOn(console, 'log')
    const error = vi.spyOn(console, 'error')
    const warn = vi.spyOn(console, 'warn')

    const found = await repository().findAll()

    expect(found.map((e) => e.name)).toEqual(['board'])
    expect(log).not.toHaveBeenCalled()
    expect(error).not.toHaveBeenCalled()
    expect(warn).not.toHaveBeenCalled()
  })

  it('findByName finds nothing under a key holding a plain string', async () => {
    localStorage.setItem('theme', 'auto')

    await expect(repository().findByName('theme')).resolves.toEqual([])
  })
})
