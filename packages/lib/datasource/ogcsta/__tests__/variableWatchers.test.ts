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
 * ********************************************************************/

/*
 * #1294: a range change in the timeline writes the history time variables,
 * and the charts did not reload until a map click. The source looked the
 * variables up once, in init - before the board had registered them - and
 * never again.
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { OgcStaStore } from '../src/classes/OgcSta'

/* A variable as the repository hands it out: a value, and listeners. */
function variable(value: string) {
  const listeners: Array<() => void> = []
  return {
    listeners,
    get value() { return value },
    set value(next: string) { value = next; listeners.forEach((fn) => fn()) },
    subscribe: (fn: () => void) => { listeners.push(fn) },
    unsubscribe: (fn: () => void) => { listeners.splice(listeners.indexOf(fn), 1) },
  }
}

function store(variables: Map<string, ReturnType<typeof variable>>) {
  const s = new OgcStaStore() as any
  s.variableRepository = { getVariable: (name: string) => variables.get(name) }
  s.logCore = () => {}
  s.configuration = {
    history: { enabled: true, timeRange: { startVariable: 'from', endVariable: 'to' } },
  }
  const notified = vi.fn()
  s.subscribe(notified)
  return { s, notified }
}

describe('history time variables (#1294)', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('follows variables that are registered after the source started', async () => {
    const variables = new Map<string, ReturnType<typeof variable>>()
    const { s, notified } = store(variables)
    s.setupVariableWatchers()

    // The board registers its variables only now
    variables.set('from', variable('2026-11-01T00:00:00Z'))
    variables.set('to', variable('2026-11-05T00:00:00Z'))
    await vi.advanceTimersByTimeAsync(2000)

    variables.get('from')!.value = '2026-10-20T00:00:00Z'
    await vi.advanceTimersByTimeAsync(200)
    expect(notified).toHaveBeenCalledTimes(1)
    s.stopVariableWatchers?.()
  })

  it('follows a variable that was replaced, as a loaded board replaces them', async () => {
    const variables = new Map([['from', variable('a')], ['to', variable('b')]])
    const { s, notified } = store(variables)
    s.setupVariableWatchers()
    const old = variables.get('from')!

    variables.set('from', variable('a'))
    // Whatever asks the source next looks again
    s.setupVariableWatchers()
    expect(old.listeners).toHaveLength(0)

    variables.get('from')!.value = 'c'
    await vi.advanceTimersByTimeAsync(200)
    expect(notified).toHaveBeenCalledTimes(1)
    s.stopVariableWatchers?.()
  })

  it('notifies once for a range change that writes both ends', async () => {
    const variables = new Map([['from', variable('a')], ['to', variable('b')]])
    const { s, notified } = store(variables)
    s.setupVariableWatchers()

    variables.get('from')!.value = 'c'
    variables.get('to')!.value = 'd'
    await vi.advanceTimersByTimeAsync(200)
    expect(notified).toHaveBeenCalledTimes(1)
    s.stopVariableWatchers?.()
  })
})
