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
 * The history time variables still reach the source (#1294) now that a
 * variable also tells the board it changed (#1288): the real variable
 * classes, not stand-ins - the event is sent beside the subscribers, and
 * the source is notified once for a range change, as before.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TinyEmitter } from 'tiny-emitter'
import { VARIABLE_CHANGED_EVENT } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { ConstantVariable } from 'org.eclipse.daanse.board.app.lib.variables'
import { OgcStaStore } from '../src/classes/OgcSta'

function constant(bus: TinyEmitter, name: string, value: string) {
  const variable = new ConstantVariable()
  variable.eventBus = bus
  variable.init(name, { value } as never)
  return variable
}

beforeEach(() => vi.spyOn(console, 'log').mockImplementation(() => {}))
afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('history time variables with variable_changed (#1288, #1294)', () => {
  it('notify the source once for a range change, and tell the board of both ends', async () => {
    const bus = new TinyEmitter()
    const heard: string[] = []
    bus.on(VARIABLE_CHANGED_EVENT, (event: { payload: { name: string } }) => heard.push(event.payload.name))
    const variables = new Map([
      ['from', constant(bus, 'from', '2026-11-01T00:00:00Z')],
      ['to', constant(bus, 'to', '2026-11-05T00:00:00Z')],
    ])
    await new Promise((resolve) => setTimeout(resolve, 0))

    const source = new OgcStaStore() as any
    source.variableRepository = { getVariable: (name: string) => variables.get(name) }
    source.logCore = () => {}
    source.configuration = { history: { enabled: true, timeRange: { startVariable: 'from', endVariable: 'to' } } }
    const notified = vi.fn()
    source.subscribe(notified)
    source.setupVariableWatchers()

    vi.useFakeTimers()
    variables.get('from')!.value = '2026-10-20T00:00:00Z'
    variables.get('to')!.value = '2026-10-25T00:00:00Z'
    await vi.advanceTimersByTimeAsync(300)

    expect(notified).toHaveBeenCalledTimes(1)
    expect(heard).toEqual(['from', 'to'])
    source.stopVariableWatchers?.()
  })
})
