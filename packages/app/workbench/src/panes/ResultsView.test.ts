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
import { ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { parseCellset, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import sales from '../../../../lib/datasource/xmla/src/utils/__fixtures__/sales-4-axes.json'
import workbenchEnglish from '../i18n/en.json'
import xmlaEnglish from '../../../../ui/vue/common/xmla/src/i18n/en.json'
import ResultsView from './ResultsView.vue'
import { WORKBENCH, type RunResult } from '../state/workbench'

/* The texts the view shows, without i18next: a key in, the English text out. */
function translator(packs: Record<string, Record<string, unknown>>) {
  return {
    language: 'en',
    t(key: string, options: Record<string, unknown> = {}) {
      const [namespace, path] = key.includes(':') ? key.split(':', 2) : ['workbench', key]
      const plural = options.count === undefined ? path : `${path}_${options.count === 1 ? 'one' : 'other'}`
      const find = (p: string) => p.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], packs[namespace])
      const text = find(plural) ?? find(path)
      if (typeof text !== 'string') return key
      return text.replace(/\{\{(\w+)\}\}/g, (_, name: string) => String(options[name] ?? ''))
    },
  }
}

const i18n = translator({ workbench: workbenchEnglish, xmla: xmlaEnglish })

/* FoodMart Sales over four axes: measures · products · time · stores. */
function result(): RunResult {
  return {
    status: 'done',
    kind: 'cellset',
    statement: 'SELECT ... FROM [Sales]',
    catalog: 'FoodMart',
    cube: 'Sales',
    startedAt: 0,
    durationMs: 42,
    cellset: parseCellset(sales) as Cellset,
  }
}

function fakeWorkbench() {
  return { notify: () => {}, connection: () => null, run: async () => {}, execute: async () => {}, activeTab: { value: null }, abort: () => {}, resultView: ref('pivot') }
}

function mountView(workbench = fakeWorkbench(), answer: RunResult = result()) {
  return mount(ResultsView, {
    props: { result: answer },
    global: { provide: { i18n, [WORKBENCH as symbol]: workbench }, stubs: { ChartView: true } },
  })
}

describe('the results view', () => {
  it('shows a four-axis answer in the pivot table, a slice at a time', async () => {
    const view = mountView()
    await flushPromises()
    expect(view.text()).toContain('COLUMNS 2 × ROWS 4 × PAGES 10 × AXIS(3) 13')
    expect(view.findAll('.axis-chip').map(c => c.text())).toEqual(['COLUMNS · 2', 'ROWS · 4', 'PAGES · 10', 'AXIS(3) · 13'])
    expect(view.find('.slice-picker').exists()).toBe(true)
    // The pivot table draws its cells into a measured viewport, which jsdom has none of.
    expect(view.findComponent({ name: 'PivotTable' }).exists()).toBe(true)
  })

  async function show(view: ReturnType<typeof mountView>, name: string) {
    await view.findAll('[role=tab], button').find(b => b.text() === name)!.trigger('click')
    await flushPromises()
  }

  it('turns an axis into the columns without asking again', async () => {
    const view = mountView()
    await flushPromises()
    const pages = view.findAll('.axis-chip').find(c => c.text().startsWith('PAGES'))!
    await pages.trigger('dragstart')
    await view.findAll('.axis-zone')[0].trigger('drop')
    await flushPromises()
    expect(view.findAll('.axis-zone')[0].text()).toContain('PAGES · 10')
    await show(view, 'Grid')
    const header = view.find('.grid thead').text()
    expect(header).toContain('1997')
    expect(header).not.toContain('Unit Sales')
  })

  it('keeps the slice chosen on an axis when the axes are reordered', async () => {
    const view = mountView()
    await flushPromises()
    view.findComponent({ name: 'SlicePicker' }).vm.$emit('update:page', 7)
    await flushPromises()
    // AXIS(3) moves to the rows; the pages axis stays where it is and keeps its slice.
    await view.findAll('.axis-chip').find(c => c.text().startsWith('AXIS(3)'))!.trigger('dragstart')
    await view.findAll('.axis-zone')[1].trigger('drop')
    await flushPromises()
    expect(view.findAll('.axis-zone')[1].text()).toContain('AXIS(3)')
    expect(view.findComponent({ name: 'SlicePicker' }).props('page')).toBe(7)
  })

  it('lists every cell, a line each, in the list view', async () => {
    const view = mountView()
    await flushPromises()
    await show(view, 'List')
    expect(view.text()).toContain('1040 rows')
  })

  it('comes back on the view it was left on', async () => {
    const workbench = fakeWorkbench()
    const first = mountView(workbench)
    await flushPromises()
    await show(first, 'Grid')
    // Another output tab, and back: the bottom pane mounts the view anew.
    first.unmount()
    const again = mountView(workbench)
    await flushPromises()
    expect(again.find('.grid').exists()).toBe(true)
  })

  it('hands the chart the slice on screen, not the statement to run again', async () => {
    const view = mountView()
    await flushPromises()
    await show(view, 'Chart')
    const chart = view.findComponent({ name: 'ChartView' })
    expect(chart.exists()).toBe(true)
    expect(Object.keys(chart.props())).toEqual(['matrix'])
    expect(chart.props('matrix').columns).toHaveLength(2)
    expect(chart.props('matrix').rows).toHaveLength(4)
  })

  it('says so when an axis of the answer is empty, in the pivot, the grid and the chart', async () => {
    const empty: RunResult = {
      ...result(),
      cellset: { axes: [{ ordinal: 0, positions: [], rawTuples: [] }], cells: {}, slicerAxis: null, axesInfo: [], slicerAxisInfo: null, cellInfo: null },
    }
    const view = mountView(fakeWorkbench(), empty)
    await flushPromises()
    for (const name of ['Pivot', 'Grid', 'Chart']) {
      await show(view, name)
      expect(view.find('.results__body').exists()).toBe(false)
      expect(view.text()).toContain('an axis of the answer holds no members')
    }
  })
})
