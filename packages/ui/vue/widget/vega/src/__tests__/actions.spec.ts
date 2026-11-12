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
 * Board actions drive the chart (#1290): a selection set from outside
 * highlights what it names, a value parameter takes its value, a cleared
 * selection holds every mark again - and a rule on another chart's selection
 * does the same, as a cross-filter between two charts.
 */
import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { EventActionsRegistry, EventManager } from 'org.eclipse.daanse.board.app.lib.events'
import '../referencedPackages'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { drawChart, setSelection, setValueParam } from '../embedChart'
import { compileRecipe } from '../recipe'
import { sampleDatasets, withDatasets } from '../sample'
import { modelledSettings } from '../settingsModel'
import { selectionEventOf } from '../events/VegaWidgetEvents'
import VegaWidget from '../VegaWidget.vue'

void VegawidgetPackage.eINSTANCE

const highlighted = {
  renderer: 'svg',
  params: [{ name: 'pick', kind: 'point', fields: ['category'] }, { name: 'limit', kind: 'value', value: '1' }],
  layers: [{ mark: 'bar', encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
    { channel: 'opacity', value: '1', highlightParam: 'pick', valueIfNotSelected: '0.2' },
  ] }],
}

const opacities = (root: Element) =>
  [...root.querySelectorAll('.mark-rect.role-mark path')].map((path) => path.getAttribute('opacity') ?? '1')

describe('the action helpers', () => {
  it('set what a selection holds, one entry per object, and clear it', async () => {
    const el = document.createElement('div')
    document.body.appendChild(el)
    const chart = await drawChart(el, withDatasets(compileRecipe(modelledSettings(highlighted)), sampleDatasets()), { renderer: 'svg' })
    try {
      expect(await setSelection(chart.view, 'pick', [{ category: 'B' }, { category: 'D' }])).toBe(true)
      expect(opacities(el)).toEqual(['0.2', '1', '0.2', '1', '0.2', '0.2'])
      /* Empty, a Vega-Lite selection holds every mark again. */
      expect(await setSelection(chart.view, 'pick', null)).toBe(true)
      expect(opacities(el).every((o) => o === '1')).toBe(true)
      expect(await setSelection(chart.view, 'nothing', { category: 'B' })).toBe(false)
      expect(await setValueParam(chart.view, 'limit', 7)).toBe(true)
      expect(chart.view.signal('limit')).toBe(7)
      expect(await setValueParam(chart.view, 'nothing', 7)).toBe(false)
    } finally {
      chart.finalize()
    }
  })
})

describe('the chart as an action target', () => {
  const settle = async () => {
    for (let i = 0; i < 20; i++) {
      await flushPromises()
      await new Promise((resolve) => setTimeout(resolve, 10))
    }
  }

  it('answers a rule on another chart\'s selection: a cross-filter', async () => {
    const registry = new EventActionsRegistry()
    const wrapper = mount(VegaWidget, {
      props: { id: 'chart-b', configv: modelledSettings(highlighted) as any },
      global: { provide: {
        [identifier as symbol]: { getDatasource: () => { throw new Error('none') } },
        [EVENT_ACTIONS_REGISTRY as symbol]: registry,
      } },
      attachTo: document.body,
    })
    await settle()
    const manager = new EventManager(registry)
    manager.registerMapping({
      id: 'a-filters-b',
      context: 'widget',
      eventType: 'VegaWidget:selection_changed',
      contextId: 'chart-a',
      actions: [{
        targetContext: 'widget',
        targetContextId: 'chart-b',
        actionName: 'setParam',
        actionArgs: ['pick'],
        payloadMapping: [{ payloadPath: 'value', argIndex: 1 }],
      }],
    } as never)

    /* What chart A sends when C is picked in it - its selection as A's store resolves it. */
    const { payload } = selectionEventOf('pick', { category: ['C'], vlPoint: { or: [{ category: 'C' }] } }, 'chart-a')
    await manager.handleEvent('widget', 'VegaWidget:selection_changed', payload, 'chart-a')
    await settle()
    expect(opacities(wrapper.element)).toEqual(['0.2', '0.2', '1', '0.2', '0.2', '0.2'])

    await registry.executeInstanceAction('chart-b', 'clearSelection', 'pick')
    await settle()
    expect(opacities(wrapper.element).every((o) => o === '1')).toBe(true)

    wrapper.unmount()
    expect(() => registry.executeInstanceAction('chart-b', 'refresh')).not.toThrow()
  })
})
