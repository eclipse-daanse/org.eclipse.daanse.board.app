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
import { describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref, shallowRef, toRef } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { DATASOURCE_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { WIDGET_REPOSITORY } from 'org.eclipse.daanse.board.app.lib.api.widget'
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { activate as activateChartComposer } from 'org.eclipse.daanse.board.app.lib.composer.chart'
import { getSlice, parseCellset, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import sales from '../../../../lib/datasource/xmla/src/utils/__fixtures__/sales-4-axes.json'
import workbenchEnglish from '../i18n/en.json'
import { registerAnswerSource } from '../state/answer'
import { WORKBENCH } from '../state/workbench'
import ChartView from './ChartView.vue'

const i18n = {
  language: 'en',
  t(key: string) {
    const path = key.includes(':') ? key.split(':', 2)[1] : key
    const text = path.split('.').reduce<any>((node, part) => node?.[part], workbenchEnglish)
    return typeof text === 'string' ? text : key
  },
}

/* The registry and the datasource repository, as far as the chart view and the composer use them. */
function board() {
  const services = new Map<string, any>()
  const registry = {
    register: (id: string, service: unknown) => services.set(id, service),
    unregister: (id: string) => services.delete(id),
    getRequired: (id: string) => services.get(id),
  }
  const types: Record<string, any> = {}
  const live = new Map<string, any>()
  const datasources = {
    registerDatasourceType: (name: string, identifiers: any) => (types[name] = identifiers),
    unregisterDatasourceType: (name: string) => delete types[name],
    getDataSourceTypes: () => Object.keys(types),
    registerDatasource(id: string, type: string, config: any) {
      live.set(id, services.get(types[type].Store.description)(config))
    },
    getDatasource(id: string) {
      if (!live.has(id)) throw new Error(`Store with id ${id} not found`)
      return live.get(id)
    },
    removeDatasource(id: string) {
      live.get(id)?.destroy()
      live.delete(id)
    },
  }
  services.set(DATASOURCE_REPOSITORY, datasources)
  // What lib.composer.chart and ui.vue.composer.chart register in a board.
  activateChartComposer({ services: registry } as any)
  datasources.registerDatasourceType('chart', { Store: Symbol.for('ChartComposer') })
  // A source that runs the statement again - the chart view must not need one.
  const executes = vi.fn(() => ({ getData: async () => ({ headers: [], rows: [], items: [] }), subscribe: () => () => {}, destroy() {} }))
  services.set('XmlaStore', executes)
  datasources.registerDatasourceType('xmla', { Store: Symbol.for('XmlaStore') })
  registerAnswerSource(registry, datasources as any)
  return { datasources, executes }
}

/* The widget as far as this test cares: what it is fed, through the composable every widget uses. */
const ChartWidgetStub = defineComponent({
  name: 'ChartWidgetStub',
  props: { datasourceId: { type: String, required: true }, configv: { type: Object, required: false } },
  setup(props) {
    const data = ref<any>(null)
    useDatasourceRepository(toRef(props, 'datasourceId'), 'ChartData', data)
    return () => h('pre', { class: 'fed' }, data.value ? JSON.stringify({ labels: data.value.labels, series: data.value.datasets.map((d: any) => d.label) }) : '')
  },
})

/* The workbench as far as the chart view uses it: where its settings are kept. */
function workbench() {
  return { chartSettings: shallowRef<any>(null) }
}

function mountChart(wb = workbench(), { datasources, executes } = board()) {
  const settingsForm = { xmi: '<form/>', uri: '/chart.ui.xmi', ePackage: () => ({}), create: () => ({ chartType: { value: 'bar' } }), entryForms: [], ecore: '' }
  const widgets = { getWidget: () => ({ component: ChartWidgetStub, settingsForm }) }
  const matrix = getSlice(parseCellset(sales) as Cellset, { axis2: 0, axis3: 0 })
  const view = mount(ChartView, {
    props: { matrix },
    global: {
      provide: { i18n, [WORKBENCH as symbol]: wb, [Symbol.for(DATASOURCE_REPOSITORY)]: datasources, [Symbol.for(WIDGET_REPOSITORY)]: widgets },
      stubs: { SettingsForm: true },
    },
  })
  return { view, executes, matrix, settingsForm, wb, datasources }
}

describe('the chart view', () => {
  it('draws the answer it was given, through the chart composer, without running it again', async () => {
    const { view, executes, matrix } = mountChart()
    await flushPromises()
    const fed = JSON.parse(view.find('.fed').text())
    expect(fed.labels).toEqual(matrix.rows.map(r => r.label))
    expect(fed.series).toEqual(matrix.columns.map(c => c.label))
    expect(executes).not.toHaveBeenCalled()
    expect(view.text()).toContain('one series per column of the answer, its rows along the axis')
  })

  it('follows a turned axis without asking anything', async () => {
    const { view, executes, matrix } = mountChart()
    await flushPromises()
    await view.setProps({ matrix: { columns: matrix.rows, rows: matrix.columns, cells: matrix.columns.map((_, c) => matrix.rows.map((__, r) => matrix.cells[r][c])) } })
    await flushPromises()
    const fed = JSON.parse(view.find('.fed').text())
    expect(fed.labels).toEqual(matrix.columns.map(c => c.label))
    expect(executes).not.toHaveBeenCalled()
  })

  it('opens the chart widget’s own settings form, on the object the chart draws with', async () => {
    const { view, settingsForm } = mountChart()
    await flushPromises()
    await view.find('button').trigger('click')
    const form = view.findComponent({ name: 'SettingsForm' })
    expect(form.exists()).toBe(true)
    expect(form.props('uiModelXmi')).toBe(settingsForm.xmi)
    const widget = view.findComponent(ChartWidgetStub)
    expect(form.props('modelValue')).toBe(widget.props('configv'))
    // The form may hand back a new instance; the chart then draws with that one.
    const next = { chartType: { value: 'line' } }
    form.vm.$emit('update:modelValue', next)
    await flushPromises()
    expect(view.findComponent(ChartWidgetStub).props('configv')).toBe(next)
  })

  it('keeps what was set on the chart when the view comes back', async () => {
    const first = mountChart()
    await flushPromises()
    await first.view.find('button').trigger('click')
    const next = { chartType: { value: 'line' }, colors: ['#123456'] }
    first.view.findComponent({ name: 'SettingsForm' }).vm.$emit('update:modelValue', next)
    await flushPromises()
    // The bottom pane shows the requests, then the result again: the view is built anew.
    first.view.unmount()
    const again = mountChart(first.wb)
    await flushPromises()
    expect(again.view.findComponent(ChartWidgetStub).props('configv')).toBe(next)
    expect(first.wb.chartSettings.value).toBe(next)
  })
})
