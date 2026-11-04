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
 * A rule computes the value it hands to an action (#1224).
 *
 * A payload mapping may carry an expression, evaluated by the engine the
 * computed variables use, with value (the property the path names) and
 * payload in scope. Without one the property goes through unchanged.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import { EventManager, type EventActionMapping, type PayloadToArgMapping } from './EventManager'
import type { EventActionsRegistry } from '../registry/EventActionsRegistry'

function setup() {
  const calls: any[][] = []
  const registry = {
    executeInstanceAction: vi.fn(async (_id: string, _name: string, ...args: any[]) => {
      calls.push(args)
    }),
    executeActionOnAll: vi.fn(async (_name: string, ...args: any[]) => {
      calls.push(args)
    }),
  } as unknown as EventActionsRegistry
  const manager = new EventManager(registry)
  return { manager, registry, calls }
}

function rule(payloadMapping: PayloadToArgMapping[]): EventActionMapping {
  return {
    id: 'rule-1',
    context: 'widget',
    eventType: 'DataTable:row_click',
    actions: [{
      targetContext: 'system',
      targetContextId: 'system',
      actionName: 'setGlobalVariable',
      actionArgs: ['target'],
      payloadMapping,
    }],
  }
}

const payload = { row: { valueNum: 7, price: 3, quantity: 4, kasse: 'K1' }, rowIndex: 2 }

afterEach(() => vi.restoreAllMocks())

describe('a payload mapping with an expression', () => {
  it('hands on the property unchanged where there is no expression', async () => {
    const { manager, calls } = setup()
    manager.registerMapping(rule([{ payloadPath: 'row.kasse', argIndex: 1 }]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([['target', 'K1']])
  })

  it('treats an empty expression as none', async () => {
    const { manager, calls } = setup()
    manager.registerMapping(rule([{ payloadPath: 'row.valueNum', argIndex: 1, expression: '  ' }]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([['target', 7]])
  })

  it('multiplies as written: value * 100', async () => {
    const { manager, calls } = setup()
    manager.registerMapping(rule([{ payloadPath: 'row.valueNum', argIndex: 1, expression: 'value * 100' }]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([['target', 700]])
  })

  it('computes over two fields of payload.row', async () => {
    const { manager, calls } = setup()
    manager.registerMapping(rule([
      { payloadPath: '', argIndex: 1, expression: 'payload.row.price * payload.row.quantity' },
    ]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([['target', 12]])
  })

  it('builds a string from two fields', async () => {
    const { manager, calls } = setup()
    manager.registerMapping(rule([
      { payloadPath: 'row.kasse', argIndex: 1, expression: "value + '/' + payload.rowIndex" },
    ]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([['target', 'K1/2']])
  })

  it('leaves the action unrun and reports the rule when the expression throws', async () => {
    const { manager, registry, calls } = setup()
    const report = vi.spyOn(console, 'error').mockImplementation(() => {})
    manager.registerMapping(rule([
      { payloadPath: 'row.valueNum', argIndex: 1, expression: 'value.missing.deeper' },
    ]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([])
    expect(registry.executeInstanceAction).not.toHaveBeenCalled()
    expect(report).toHaveBeenCalledTimes(1)
    expect(String(report.mock.calls[0][0])).toContain('rule-1')
    expect(String(report.mock.calls[0][0])).toContain('value.missing.deeper')
  })

  it('reports an expression that does not compile the same way', async () => {
    const { manager, calls } = setup()
    const report = vi.spyOn(console, 'error').mockImplementation(() => {})
    manager.registerMapping(rule([{ payloadPath: 'row.valueNum', argIndex: 1, expression: 'value *' }]))

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(calls).toEqual([])
    expect(String(report.mock.calls[0][0])).toContain('rule-1')
  })

  it('remembers the last payload the rule saw, for the dialog to preview against', async () => {
    const { manager } = setup()
    manager.registerMapping(rule([{ payloadPath: 'row.valueNum', argIndex: 1, expression: 'value * 100' }]))
    expect(manager.getLastPayload('rule-1')).toBeUndefined()

    await manager.handleEvent('widget', 'DataTable:row_click', payload)

    expect(manager.getLastPayload('rule-1')).toBe(payload)
    expect(manager.evaluatePayloadMapping(
      { payloadPath: 'row.valueNum', argIndex: 1, expression: 'value * 100' },
      manager.getLastPayload('rule-1'),
    )).toBe(700)
  })
})
