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

import { describe, expect, it } from 'vitest'
import { thingFilterOf } from '../composables/thingScope'
import { latestObservation } from '../utils/helpers'
import { Comperator } from '../gen/Comperator'

const rule = (...conditions: Array<[string, string, string?]>) => ({
  thing: conditions.map(([prop, value, comperator]) => ({ prop, value, comperator: (comperator ?? 'eq') as Comperator })),
})

describe('the things a map shows, as a filter on /Things', () => {
  it('translates the rules of the Bodenfeuchte board', () => {
    expect(thingFilterOf([rule(['name', 'Reference Area*']), rule(['name', '*-derived'])]))
      .toBe("startswith(name,'Reference Area') or endswith(name,'-derived')")
  })

  it.each([
    ['JeN-06', "name eq 'JeN-06'"],
    ['*temp*', "substringof('temp',name)"],
    ["O'Brien*", "startswith(name,'O''Brien')"],
  ])('translates %s', (value, filter) => {
    expect(thingFilterOf([rule(['name', value])])).toBe(filter)
  })

  it('joins the conditions of one renderer with and, and skips a star', () => {
    expect(thingFilterOf([rule(['name', 'A*'], ['name', '*z'], ['description', '*'])]))
      .toBe("(startswith(name,'A') and endswith(name,'z'))")
  })

  it('leaves out a renderer without thing conditions', () => {
    expect(thingFilterOf([{ thing: [] }, rule(['name', 'A*'])])).toBe("startswith(name,'A')")
  })

  it.each([
    ['another property', [rule(['description', 'x'])]],
    ['another comparator', [rule(['name', 'x', 'neq'])]],
    ['a star inside', [rule(['name', 'a*b'])]],
    ['every thing', [rule(['name', '*'])]],
    ['no renderer', []],
  ])('gives null (load everything) for %s', (_, renderers) => {
    expect(thingFilterOf(renderers as any)).toBeNull()
  })
})

describe('the latest observation', () => {
  it('is the newest, in any order', () => {
    const desc = [{ phenomenonTime: '2026-11-05T10:00:00Z', result: 'new' }, { phenomenonTime: '2026-11-01T10:00:00Z', result: 'old' }]
    expect(latestObservation(desc)?.result).toBe('new')
    expect(latestObservation([...desc].reverse())?.result).toBe('new')
    expect(latestObservation([])).toBeUndefined()
  })
})
