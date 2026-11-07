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

/*
 * A changed board variable is an event (#1288): system:System:variable_changed
 * with the name, the new and the previous value - once per actual change,
 * not while the board loads, not for a value written again unchanged. That
 * the OGC STA source still follows the timeline's variables (#1294) is
 * tested beside it, in lib.datasource.ogcsta.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TinyEmitter } from 'tiny-emitter'
import { VARIABLE_CHANGED_EVENT } from 'org.eclipse.daanse.board.app.lib.api.variable'
/* Through the package entry: the class files import it back, and read alone they meet a half-loaded cycle. */
import { ConstantVariable, DateTimePickerVariable } from '../index'

const settle = () => new Promise((resolve) => setTimeout(resolve, 0))

function board() {
  const bus = new TinyEmitter()
  const heard: any[] = []
  bus.on(VARIABLE_CHANGED_EVENT, (event: any) => heard.push(event.payload))
  const make = <T extends { eventBus?: unknown; pageContextService?: unknown; init(name: string, config: never): void }>(variable: T) =>
    (name: string, config: unknown): T => {
      variable.eventBus = bus
      variable.pageContextService = { getCurrentPageId: () => 'p1' }
      variable.init(name, config as never)
      return variable
    }
  return {
    bus,
    heard,
    constant: (name: string, config: unknown) => make(new ConstantVariable() as any)(name, config),
    picker: (name: string, config: unknown) => make(new DateTimePickerVariable() as any)(name, config),
  }
}

beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}))
afterEach(() => vi.restoreAllMocks())

describe('variable_changed', () => {
  it('is sent for a changed value, with the previous one', async () => {
    const { heard, constant } = board()
    const area = constant('area', { value: 'ZW-01' } as any)
    await settle()
    expect(heard).toEqual([])

    area.value = 'ZW-02'
    expect(heard).toEqual([expect.objectContaining({ name: 'area', value: 'ZW-02', previous: 'ZW-01', scope: 'global' })])
  })

  it('is not sent for a value written again unchanged, nor for an equal object', async () => {
    const { heard, constant } = board()
    const range = constant('range', { value: { from: 1, to: 2 } } as any)
    await settle()
    range.value = { from: 1, to: 2 }
    range.notyfy()
    expect(heard).toEqual([])
    range.value = { from: 1, to: 3 }
    expect(heard).toHaveLength(1)
  })

  it('is sent for a date picker the timeline writes', async () => {
    const { heard, picker } = board()
    const from = picker('from', { datetime: '2026-11-01T00:00:00Z' } as any)
    await settle()
    from.value = '2026-10-20T00:00:00Z'
    expect(heard.map((p) => [p.name, p.value])).toEqual([['from', '2026-10-20T00:00:00Z']])
  })
})
