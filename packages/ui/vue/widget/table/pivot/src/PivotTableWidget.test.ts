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
import { defineComponent, h, markRaw, shallowRef, watch } from 'vue'
import { config as testing, flushPromises, mount } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import { pivotSlice, slicesOf, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import PivotTableWidget from './PivotTableWidget.vue'
import { PivotTablePackage } from './gen/PivotTablePackage'
import { PivotTableFactory } from './gen/PivotTableFactory'
import { EventsPackage } from '../../../../../../lib/api/events/src/gen/EventsPackage'
import { ComposablesPackage } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { PIVOT_EVENTS, type SliceChangedEvent } from './navigation/events'
import type { PivotTable } from './gen/PivotTable'
import { i18n, indexOf, metadata, salesCellset } from './navigation/testing'

// The texts in English, as the application's translator gives them.
testing.global.provide = { ...testing.global.provide, i18n }

// As the bundles do on load: the packages the widget's model builds on, then its own.
void EventsPackage.eINSTANCE
void ComposablesPackage.eINSTANCE
void PivotTablePackage.eINSTANCE

/*
 * The repositories' injection keys, as lib.api.datasource and lib.api.variable
 * make them. Spelled out rather than imported: the bundle does not depend on
 * either, and its manifest is checked against what its sources import.
 */
const DATASOURCES = Symbol.for('DatasourceRepository')
const VARIABLES = Symbol.for('VariableRepository')

const cellset = salesCellset()
const params = { rows: [{}], columns: [{}], measures: [], properties: [], showRowsProperties: false, showColumnsProperties: false }

/** What XmlaStore.getData('PivotTable') answers for a query with pages and chapters. */
function answer(data: Cellset | null) {
  if (!data) return { ...pivotSlice(cellset, { axis2: -1, axis3: -1 }, params), tableState: {} }
  return {
    ...pivotSlice(data, slicesOf(data)[0], params),
    cellset: data,
    sliceParams: params,
    axisMetadata: metadata,
    tableState: { rowsExpandedMembers: [], columnsExpandedMembers: [] },
  }
}

function mountWidget(data: Cellset | null = cellset) {
  const bus = new TinyEmitter()
  const datasource = {
    getData: async () => answer(data),
    subscribe() {},
    unsubscribe() {},
  }
  // As a board hands it over: the stored settings, plain - not reactive.
  // markRaw, or mount would make them reactive for setProps. What the
  // widget hands back, its settings as the model, is what the board keeps.
  const config = { value: markRaw({}) as Record<string, unknown> }
  const wrapper = mount(PivotTableWidget, {
    props: {
      datasourceId: 'ds',
      id: 'pivot-1',
      configv: config.value as unknown as PivotTable,
      'onUpdate:configv': (next: unknown) => { config.value = next as Record<string, unknown> },
    },
    global: {
      provide: {
        [DATASOURCES as symbol]: { getDatasource: () => datasource },
        [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [] },
        [identifiers.TINY_EMITTER as symbol]: bus,
      },
    },
  })
  return { wrapper, bus, config }
}

describe('PivotTableWidget with pages and chapters', () => {
  it('puts the navigator around the table', async () => {
    const { wrapper } = mountWidget()
    await flushPromises()
    expect(wrapper.find('.navigator').exists()).toBe(true)
    expect(wrapper.findAll('.navigator__mode').map(b => b.text())).toEqual(['Standard', 'Cascade', 'Map', 'Table', 'Tree + tabs', 'Compare'])
  })

  it('keeps the plain table for two axes', async () => {
    const { wrapper } = mountWidget(null)
    await flushPromises()
    expect(wrapper.find('.navigator').exists()).toBe(false)
    expect(wrapper.find('.pivotTable_container').exists()).toBe(true)
  })

  it('writes the mode to its settings', async () => {
    const { wrapper, config } = mountWidget()
    await flushPromises()
    await wrapper.findAll('.navigator__mode').find(b => b.text() === 'Map')!.trigger('click')
    expect(config.value.mode).toBe('map')
    expect(wrapper.find('.map__table .pivotTable_container').exists()).toBe(true)
  })

  it('follows a mode chosen in the settings, set on its model object', async () => {
    const bus = new TinyEmitter()
    const datasource = { getData: async () => answer(cellset), subscribe() {}, unsubscribe() {} }
    // As the settings form holds it: the widget's own PivotTable, changed in place.
    const settings = markRaw(PivotTableFactory.eINSTANCE.createPivotTable())
    const wrapper = mount(PivotTableWidget, {
      props: { datasourceId: 'ds', id: 'pivot-2', configv: settings, 'onUpdate:configv': () => {} },
      global: {
        provide: {
          [DATASOURCES as symbol]: { getDatasource: () => datasource },
          [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [] },
          [identifiers.TINY_EMITTER as symbol]: bus,
        },
      },
    })
    await flushPromises()
    expect(wrapper.find('.navigator__mode[aria-selected="true"]').text()).toBe('Standard')

    settings.mode = 'map'
    await flushPromises()

    expect(wrapper.find('.navigator__mode[aria-selected="true"]').text()).toBe('Map')
    expect(wrapper.find('.map__table').exists()).toBe(true)
  })

  it('says why there is no table when the query failed', async () => {
    const datasource = { getData: async () => { throw new Error('MDX object [Measures].[Nope] not found') }, subscribe() {}, unsubscribe() {} }
    const wrapper = mount(PivotTableWidget, {
      props: { datasourceId: 'ds', id: 'pivot-3', configv: markRaw({}) as unknown as PivotTable, 'onUpdate:configv': () => {} },
      global: {
        provide: {
          [DATASOURCES as symbol]: { getDatasource: () => datasource },
          [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [] },
          [identifiers.TINY_EMITTER as symbol]: new TinyEmitter(),
        },
      },
    })
    await flushPromises()
    expect(wrapper.find('.pivot-failed').text()).toBe('The query failed: MDX object [Measures].[Nope] not found')
  })

  it('says on the bus which slice it shows, by unique name', async () => {
    const { wrapper, bus } = mountWidget()
    await flushPromises()
    const heard: SliceChangedEvent[] = []
    bus.on(PIVOT_EVENTS.sliceChanged, (e: SliceChangedEvent) => heard.push(e))

    await wrapper.findAll('.navigator__mode').find(b => b.text() === 'Map')!.trigger('click')
    const [CA, Q1] = [indexOf(cellset, 3, 'CA'), indexOf(cellset, 2, 'Q1')]
    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click')

    expect(heard).toEqual([{ source: 'pivot-1', axis2: '[Time].[1997].[Q1]', axis3: '[Store].[USA].[CA]' }])
  })

  it('follows a slice another widget names, and ignores its own', async () => {
    const { wrapper, bus } = mountWidget()
    await flushPromises()
    await wrapper.findAll('.navigator__mode').find(b => b.text() === 'Map')!.trigger('click')

    bus.emit(PIVOT_EVENTS.sliceChanged, { source: 'sunburst', axis2: '[Time].[1997].[Q3]', axis3: '[Store].[USA].[OR]' })
    await flushPromises()
    const current = () => wrapper.find('.minimap__cell.is-current').attributes('aria-label')
    expect(current()).toMatch(/^Q3 · OR:/)

    bus.emit(PIVOT_EVENTS.sliceChanged, { source: 'pivot-1', axis2: '[Time].[1997]', axis3: '[Store].[USA]' })
    await flushPromises()
    expect(current()).toMatch(/^Q3 · OR:/)
  })
})

describe('PivotTableWidget handing its settings back', () => {
  it('waits until the layout around it is mounted', async () => {
    /*
     * As the edit layout's handles (vue3-moveable): a prop that is a new
     * array on every render of the layout, and a watcher on it that needs
     * what mounted made.
     */
    const early: string[] = []
    const Handle = defineComponent({
      props: { target: { type: Array, required: true } },
      data: () => ({ made: null as object | null }),
      watch: {
        target() { if (!this.made) early.push('target changed before mounted') },
      },
      mounted() { this.made = {} },
      render: () => h('div'),
    })
    const datasource = { getData: async () => answer(cellset), subscribe() {}, unsubscribe() {} }
    // The board's Widget.config: stored, plain, replaced by what the widget hands back.
    const config = shallowRef<unknown>(markRaw({}))
    // Switched on after the first render, as a board goes into edit mode: mounted inside a flush.
    const editing = shallowRef(false)
    const Layout = defineComponent({
      setup: () => () => h('div', !editing.value ? [] : [
        h(PivotTableWidget, {
          datasourceId: 'ds',
          id: 'pivot-4',
          configv: config.value as PivotTable,
          'onUpdate:configv': (next: unknown) => { config.value = next },
        }),
        h(Handle, { target: ['.pivot-4'] }),
      ]),
    })
    let rendered = 0
    watch(config, () => rendered++)

    mount(Layout, {
      global: {
        provide: {
          [DATASOURCES as symbol]: { getDatasource: () => datasource },
          [VARIABLES as symbol]: { getVariable: () => null, getVariables: () => [] },
          [identifiers.TINY_EMITTER as symbol]: new TinyEmitter(),
        },
      },
    })
    editing.value = true
    await flushPromises()

    expect(rendered).toBe(1)
    expect(typeof (config.value as { eClass?: unknown }).eClass).toBe('function')
    expect(early).toEqual([])
  })
})
