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
 * The board's own events are offered to rules, and a rule on a changed
 * variable runs (#1288).
 */
import { describe, expect, it, vi } from 'vitest'
import { TinyEmitter } from 'tiny-emitter'
import { VARIABLE_CHANGED_EVENT } from 'org.eclipse.daanse.board.app.lib.api.variable'
import { EventRegistry } from './EventRegistry'
import { SYSTEM_EVENT_SOURCE, SystemEvents } from './SystemEvents'
import { VariableChangedPayloadImpl } from '../gen/VariableChangedPayloadImpl'
import { EventManager } from '../manager/EventManager'
import { EventBusBridge } from '../bridge/EventBusBridge'
import { EcoreMetadataService } from './EcoreMetadataService'

describe('the system events', () => {
  it('offer variable_changed under the name the variables send it with', () => {
    const registry = new EventRegistry()
    registry.setEcoreMetadataService(new EcoreMetadataService())
    registry.registerWidget(SYSTEM_EVENT_SOURCE, SystemEvents)
    const event = registry.getEvent(SYSTEM_EVENT_SOURCE, 'variable_changed')
    expect(event?.payloadType).toBe(VariableChangedPayloadImpl)
    expect(`system:${event?.type}`).toBe(VARIABLE_CHANGED_EVENT)
    /* The rule editor lists the payload's fields, as for a widget event. */
    expect(registry.extractPayloadPropertiesForEvent('System:variable_changed').map((p) => p.name)).toEqual(expect.arrayContaining(['name', 'value', 'previous']))
  })

  it('run a rule on a changed variable, with its value mapped into the action', async () => {
    const calls: unknown[][] = []
    const actions = {
      executeInstanceAction: vi.fn(async () => {}),
      executeActionOnAll: vi.fn(async (_name: string, ...args: unknown[]) => { calls.push(args) }),
      getInstancePageId: () => undefined,
    }
    const manager = new EventManager(actions as never)
    const bridge = new EventBusBridge(manager, new EventRegistry(), actions as never)
    const bus = new TinyEmitter()
    bridge.setup({ getRequired: () => bus as never })
    manager.registerMapping({
      id: 'variable-to-chart',
      context: 'system',
      eventType: 'System:variable_changed',
      actions: [{
        targetContext: 'widget',
        targetContextId: '',
        actionName: 'setParam',
        actionArgs: ['area'],
        payloadMapping: [{ payloadPath: 'value', argIndex: 1 }],
      }],
    } as never)

    bus.emit(VARIABLE_CHANGED_EVENT, { payload: { name: 'area', value: 'ZW-02', previous: 'ZW-01' } })
    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(calls).toEqual([['area', 'ZW-02']])
  })
})
