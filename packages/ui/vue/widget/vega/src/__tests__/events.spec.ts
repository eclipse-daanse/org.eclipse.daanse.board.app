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

// @vitest-environment jsdom
/*
 * What the chart tells the board (#1289): payloads without Vega's own
 * bookkeeping, and a chart that reports clicks, selections and values -
 * a signal once per frame with its latest value.
 */
import { describe, expect, it, vi } from 'vitest'
import { PayloadImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventManager } from 'org.eclipse.daanse.board.app.lib.events'
import '../referencedPackages'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { busEventOf, cleaned, clickEventOf, layerOfMark, paramEventOf, selectionEventOf, VegaWidgetEvents } from '../events/VegaWidgetEvents'
import { drawChart, listenTo } from '../embedChart'
import { compileRecipe } from '../recipe'
import { sampleDatasets, withDatasets } from '../sample'
import { modelledSettings } from '../settingsModel'

void VegawidgetPackage.eINSTANCE

const frame = () => new Promise((resolve) => setTimeout(resolve, 40))

describe('the payloads', () => {
  it('carry the row without Vega internals, stamped with the widget', () => {
    const { event, payload } = clickEventOf({ markName: 'layer_1_marks', markType: 'rect', datum: { category: 'A', amount: 2, _vgsid_: 7, __count: 1, at: new Date('2026-01-01T00:00:00Z') } }, 'w1')
    expect(event).toBe('click')
    expect(payload).toBeInstanceOf(PayloadImpl)
    expect(payload).toMatchObject({ widgetId: 'w1', layer: 1, mark: 'rect', datum: { category: 'A', amount: 2, at: '2026-01-01T00:00:00.000Z' } })
    expect(typeof payload.timestamp).toBe('number')
  })

  it('say an empty selection holds nothing, and a value as it is', () => {
    expect(selectionEventOf('pick', { vlPoint: { or: [] } }, 'w1').payload).toMatchObject({ param: 'pick', value: null })
    expect(selectionEventOf('pick', { category: ['A'] }, 'w1').payload).toMatchObject({ value: { category: ['A'] } })
    expect(paramEventOf('limit', 5, 'w1').payload).toMatchObject({ param: 'limit', value: 5 })
  })

  it('name the layer from the name Vega-Lite gives its marks', () => {
    expect([layerOfMark('marks'), layerOfMark('layer_2_marks'), layerOfMark(undefined)]).toEqual([0, 2, 0])
    expect(cleaned([{ _vgsid_: 1, a: 1 }])).toEqual([{ a: 1 }])
  })

  it('are the three events the rule editor offers, named as every widget names its events', () => {
    expect(VegaWidgetEvents.map((e) => e.type)).toEqual(['click', 'selection_changed', 'param_changed'])
    expect(busEventOf('click')).toBe('widget:VegaWidget:click')
  })
})

describe('listenTo', () => {
  const draw = async (stored: Record<string, unknown>) => {
    const el = document.createElement('div')
    document.body.appendChild(el)
    return drawChart(el, withDatasets(compileRecipe(modelledSettings(stored)), sampleDatasets()), { renderer: 'svg' })
  }

  it('reports a value parameter once per frame, with its latest value', async () => {
    const chart = await draw({ params: [{ name: 'limit', kind: 'value', value: '1' }] })
    const onValue = vi.fn()
    listenTo(chart.view, { selections: [], values: ['limit'], onClick: vi.fn(), onSelection: vi.fn(), onValue })
    chart.view.signal('limit', 2)
    chart.view.signal('limit', 3)
    await chart.view.runAsync()
    await frame()
    expect(onValue.mock.calls).toEqual([['limit', 3]])
    chart.finalize()
  })

  it('reports a click on a mark with the row it draws', async () => {
    const chart = await draw({})
    const onClick = vi.fn()
    listenTo(chart.view, { selections: [], values: [], onClick, onSelection: vi.fn(), onValue: vi.fn() })
    const bar = chart.view.container()!.querySelector('.mark-rect.role-mark path')!
    bar.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await chart.view.runAsync()
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick.mock.calls[0][0]).toMatchObject({ markName: 'marks', markType: 'rect', datum: expect.objectContaining({ category: 'A', amount: 28 }) })
    chart.finalize()
  })

  it('reports a selection when a picked mark changes it', async () => {
    const chart = await draw({ params: [{ name: 'pick', kind: 'point', fields: ['category'] }] })
    const onSelection = vi.fn()
    listenTo(chart.view, { selections: ['pick', 'missing'], values: [], onClick: vi.fn(), onSelection, onValue: vi.fn() })
    const bar = chart.view.container()!.querySelectorAll('.mark-rect.role-mark path')[1]
    bar.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    await chart.view.runAsync()
    await frame()
    expect(onSelection).toHaveBeenCalled()
    const [name, value] = onSelection.mock.calls.at(-1)!
    expect(name).toBe('pick')
    /* As the board gets it: what is selected, without Vega's own fields. */
    expect((selectionEventOf(name, value, 'w1').payload as { value?: unknown }).value).toEqual({ category: ['B'] })
    chart.finalize()
  })
})

describe('a rule on a chart event', () => {
  it('sets a board variable from what a selection holds', async () => {
    const calls: unknown[][] = []
    const registry = {
      executeInstanceAction: vi.fn(async (_id: string, _name: string, ...args: unknown[]) => { calls.push(args) }),
      executeActionOnAll: vi.fn(async (_name: string, ...args: unknown[]) => { calls.push(args) }),
    }
    const manager = new EventManager(registry as never)
    manager.registerMapping({
      id: 'pick-to-variable',
      context: 'widget',
      eventType: 'VegaWidget:selection_changed',
      actions: [{
        targetContext: 'system',
        targetContextId: 'system',
        actionName: 'setGlobalVariable',
        actionArgs: ['area'],
        payloadMapping: [{ payloadPath: 'value.category.0', argIndex: 1 }],
      }],
    } as never)
    const { payload } = selectionEventOf('pick', { vlPoint: { or: [{ _vgsid_: 2 }] }, category: ['B'] }, 'w1')
    await manager.handleEvent('widget', 'VegaWidget:selection_changed', payload)
    expect(calls).toEqual([['area', 'B']])
  })
})
