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
 * Actions offered by a provider rather than declared by a widget type.
 *
 * A provider names, per target, what it can do right now and carries it
 * out; it can announce that the list changed. A rule whose target a
 * provider names is carried out by it, with the arguments the rule mapped.
 * Everything a widget type registers, and every rule stored before
 * providers existed, keeps working as before.
 */
import { describe, it, expect, vi, afterEach } from 'vitest'
import type { ActionProvider, ProvidedAction } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventActionsRegistry } from './EventActionsRegistry'
import { EventManager, type EventActionMapping } from '../manager/EventManager'
import { EventActionContext } from '../gen/EventActionContext'

/** A provider whose list can be changed from the test, as a source's answer would. */
function provider(targets: string[], actions: ProvidedAction[]) {
  let current = actions
  const listeners = new Set<() => void>()
  const execute = vi.fn(async (_target: string, _name: string, _args: unknown[]) => {})
  const it: ActionProvider = {
    targets: () => targets.map((id) => ({ id, label: `Source ${id}` })),
    actions: () => current,
    execute,
    onChange(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
  return {
    provider: it,
    execute,
    listeners,
    change(next: ProvidedAction[]) {
      current = next
      listeners.forEach((listener) => listener())
    },
  }
}

const REFRESH: ProvidedAction = {
  name: 'refresh',
  parameters: [],
}
const FILTER: ProvidedAction = {
  name: 'filterBy',
  label: 'Filter by',
  parameters: [
    { name: 'column', type: 'string' },
    { name: 'value', type: 'any', optional: true },
  ],
}

afterEach(() => vi.restoreAllMocks())

describe('a provider of actions', () => {
  it('is a target context of the rule model', () => {
    expect(EventActionContext.datasource).toBe('datasource')
  })

  it('offers its actions for its datasource, and nothing for another', () => {
    const registry = new EventActionsRegistry()
    const source = provider(['ds-1'], [REFRESH, FILTER])
    registry.registerActionProvider('datasource', source.provider)

    expect(registry.getProvidedTargets('datasource').map((t) => [t.id, t.label])).toEqual([['ds-1', 'Source ds-1']])
    expect(registry.getProvidedActions('datasource', 'ds-1').map((a) => a.name)).toEqual(['refresh', 'filterBy'])
    expect(registry.getProvidedActions('datasource', 'ds-2')).toEqual([])
    /* Only in the context it was registered for. */
    expect(registry.getProvidedTargets('widget')).toEqual([])
  })

  it('announces a changed list, and stops once it is taken back', () => {
    const registry = new EventActionsRegistry()
    const source = provider(['ds-1'], [REFRESH])
    const heard = vi.fn()
    registry.onProvidedActionsChanged(heard)

    const unregister = registry.registerActionProvider('datasource', source.provider)
    expect(heard).toHaveBeenCalledTimes(1)

    source.change([REFRESH, FILTER])
    expect(heard).toHaveBeenCalledTimes(2)
    expect(registry.getProvidedActions('datasource', 'ds-1').map((a) => a.name)).toEqual(['refresh', 'filterBy'])

    unregister()
    expect(heard).toHaveBeenCalledTimes(3)
    expect(source.listeners.size).toBe(0)
    expect(registry.getProvidedTargets('datasource')).toEqual([])
  })

  it('is called by a rule with the mapped values', async () => {
    const registry = new EventActionsRegistry()
    const source = provider(['ds-1'], [FILTER])
    registry.registerActionProvider('datasource', source.provider)
    const manager = new EventManager(registry)
    manager.registerMapping({
      id: 'rule-ds',
      context: 'widget',
      contextId: 'table-1',
      eventType: 'DataTable:row_click',
      actions: [{
        targetContext: 'datasource',
        targetContextId: 'ds-1',
        actionName: 'filterBy',
        actionArgs: ['region'],
        payloadMapping: [{ payloadPath: 'row.region', argIndex: 1, expression: 'value.toUpperCase()' }],
      }],
    })

    await manager.handleEvent('widget', 'DataTable:row_click', { row: { region: 'north' } }, 'table-1')

    expect(source.execute).toHaveBeenCalledWith('ds-1', 'filterBy', ['region', 'NORTH'])
  })

  it('does not hand a datasource action nobody provides to the widgets', async () => {
    const registry = new EventActionsRegistry()
    registry.registerActionProvider('datasource', provider(['ds-1'], [REFRESH]).provider)
    const widget = { refresh: vi.fn() }
    registry.registerInstance('w1', widget, 'TableWidget')
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const manager = new EventManager(registry)
    manager.registerMapping({
      id: 'rule-gone',
      context: 'system',
      eventType: 'tick',
      actions: [{ targetContext: 'datasource', targetContextId: 'ds-removed', actionName: 'refresh' }],
    })

    await manager.handleEvent('system', 'tick', {})

    expect(widget.refresh).not.toHaveBeenCalled()
  })
})

/*
 * Rules as a stored workspace holds them: the definition is plain JSON,
 * read back with JSON.parse and handed to setAllMappings. A provider is
 * registered beside them, naming the very ids those rules target, so that
 * one only a context apart cannot take them over.
 */
describe('a stored rule beside a provider', () => {
  function board() {
    const registry = new EventActionsRegistry()
    vi.spyOn(console, 'log').mockImplementation(() => {})
    const source = provider(['w2', 'system', 'p1'], [{ name: 'zoomTo', parameters: [] }, { name: 'refresh', parameters: [] }, { name: 'setGlobalVariable', parameters: [] }])
    registry.registerActionProvider('datasource', source.provider)
    const map = { zoomTo: vi.fn(), refresh: vi.fn() }
    const other = { refresh: vi.fn() }
    const system = { setGlobalVariable: vi.fn() }
    registry.registerInstance('w2', map, 'MapWidget', 'p1')
    registry.registerInstance('w3', other, 'TextWidget', 'p1')
    registry.registerInstance('system', system, 'SystemVariableActions')
    const manager = new EventManager(registry)
    return { manager, map, other, system, source }
  }

  const stored = (rule: object) => JSON.parse(JSON.stringify(rule)) as EventActionMapping

  it('with a widget target calls the widget, as before', async () => {
    const { manager, map, source } = board()
    manager.setAllMappings([stored({
      id: 'r-widget',
      context: 'widget',
      contextId: 'table-1',
      eventType: 'DataTable:row_click',
      conditions: [],
      actions: [{
        targetContext: 'widget',
        targetContextId: 'w2',
        actionName: 'zoomTo',
        actionArgs: [12],
        payloadMapping: [{ payloadPath: 'row.id', argIndex: 1 }],
      }],
    })])

    await manager.handleEvent('widget', 'DataTable:row_click', { row: { id: 'thing-7' } }, 'table-1')

    expect(map.zoomTo).toHaveBeenCalledWith(12, 'thing-7')
    expect(source.execute).not.toHaveBeenCalled()
  })

  it('with a page target, in the single-action form, calls every instance that has the action, as before', async () => {
    const { manager, map, other, source } = board()
    manager.setAllMappings([stored({
      id: 'r-page',
      context: 'page',
      contextId: 'p1',
      eventType: 'Page:opened',
      targetContext: 'page',
      actionName: 'refresh',
      actionArgs: ['now'],
    })])

    await manager.handleEvent('page', 'Page:opened', {}, 'p1')

    expect(map.refresh).toHaveBeenCalledWith('now')
    expect(other.refresh).toHaveBeenCalledWith('now')
    expect(source.execute).not.toHaveBeenCalled()
  })

  it('with a system target calls the system actions, as before', async () => {
    const { manager, system, source } = board()
    manager.setAllMappings([stored({
      id: 'r-system',
      context: 'widget',
      eventType: 'Slider:change',
      conditions: [{ prop: 'value', comperator: 'gt', value: 3 }],
      actions: [{
        targetContext: 'system',
        targetContextId: 'system',
        actionName: 'setGlobalVariable',
        actionArgs: ['speed'],
        payloadMapping: [{ payloadPath: 'value', argIndex: 1 }],
      }],
    })])

    await manager.handleEvent('widget', 'Slider:change', { value: 5 })
    await manager.handleEvent('widget', 'Slider:change', { value: 2 })

    expect(system.setGlobalVariable).toHaveBeenCalledTimes(1)
    expect(system.setGlobalVariable).toHaveBeenCalledWith('speed', 5)
    expect(source.execute).not.toHaveBeenCalled()
  })
})
