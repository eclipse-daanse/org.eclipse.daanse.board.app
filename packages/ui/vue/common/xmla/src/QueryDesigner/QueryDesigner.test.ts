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
import { describe, expect, it } from 'vitest'
import { reactive } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import QueryDesigner from './QueryDesigner.vue'
import english from '../i18n/en.json'
import { TREE_ITEM_TYPE } from './treeItemTransfer'
import { TreeItemTypesEnum } from '../MetadataTree/TreeViewItems'

/* The texts the designer shows, without i18next. */
const i18n = {
  language: 'en',
  t(key: string) {
    const path = key.includes(':') ? key.split(':', 2)[1]! : key
    const text = path.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], english)
    return typeof text === 'string' ? text : key
  },
}

const VALUES = { id: 'Values', type: 'Values', caption: 'Values', children: [], filters: { enabled: false }, originalItem: { HIERARCHY_UNIQUE_NAME: 'Values' } }
const GENDER = { id: '[Gender]', type: 'Hierarchy', caption: 'Gender', children: [], filters: { enabled: false }, originalItem: { HIERARCHY_UNIQUE_NAME: '[Gender]' } }

function mountDesigner() {
  const config = reactive({ filters: [] as any[], columns: [VALUES] as any[], rows: [GENDER] as any[], measures: [] as any[], pages: [] as any[], chapters: [] as any[] })
  const wrapper = mount(QueryDesigner, {
    props: { modelValue: config, api: null, catalog: null },
    global: { provide: { i18n }, stubs: { FilterModal: true } },
  })
  const areas = wrapper.findAllComponents({ name: 'draggable' })
  return { wrapper, config, areas }
}

/*
 * A drag between areas as vuedraggable does it: the item is spliced out of
 * the source list and into the target, then the target says `added` and
 * the source `removed`.
 */
async function move(designer: ReturnType<typeof mountDesigner>, from: 'columns' | 'rows', to: 'pages' | 'filters', element: any) {
  const order = ['filters', 'columns', 'rows', 'pages', 'chapters']
  const source = designer.config[from]
  const index = source.indexOf(element)
  source.splice(index, 1)
  designer.config[to].push(element)
  designer.areas[order.indexOf(to)]!.vm.$emit('change', { added: { element, newIndex: designer.config[to].length - 1 } })
  designer.areas[order.indexOf(from)]!.vm.$emit('change', { removed: { element, oldIndex: index } })
  await flushPromises()
}

describe('the query designer', () => {
  it('refuses Values on the pages and puts them back where they were', async () => {
    const designer = mountDesigner()
    await move(designer, 'columns', 'pages', VALUES)

    expect(designer.config.pages).toEqual([])
    expect(designer.config.columns.map((item: any) => item.id)).toEqual(['Values'])
    expect(designer.wrapper.text()).toContain('Values go on rows or columns only.')
  })

  it('refuses Values in the filters the same way', async () => {
    const designer = mountDesigner()
    await move(designer, 'columns', 'filters', VALUES)

    expect(designer.config.filters).toEqual([])
    expect(designer.config.columns.map((item: any) => item.id)).toEqual(['Values'])
  })

  it('lets a hierarchy move to the pages', async () => {
    const designer = mountDesigner()
    await move(designer, 'rows', 'pages', GENDER)

    expect(designer.config.pages.map((item: any) => item.id)).toEqual(['[Gender]'])
    expect(designer.config.rows).toEqual([])
  })

  /*
   * vuedraggable splices the dragged item into the target list, and Vue
   * draws it, before @change hands over the copy with filters. An item from
   * the metadata tree has none, so that first render read `enabled` of null.
   */
  it.each(['filters', 'columns', 'rows', 'pages', 'chapters'] as const)('draws a hierarchy without filters in the %s', async (area) => {
    const designer = mountDesigner()
    const errors: unknown[] = []
    designer.wrapper.vm.$.appContext.config.errorHandler = (error) => { errors.push(error) }
    const AGE = { id: '[Age]', type: 'Hierarchy', caption: 'Age', children: [], filters: null, originalItem: { HIERARCHY_UNIQUE_NAME: '[Age]' } }

    designer.config[area].push(AGE)
    await flushPromises()

    expect(errors).toEqual([])
    expect(designer.wrapper.text()).toContain('Age')
  })
})

/*
 * A drop the browser hands out before SortableJS has seen the drag start:
 * the area hears `drop`, vuedraggable says nothing.
 */
function dropOn(designer: ReturnType<typeof mountDesigner>, index: number, item: any) {
  const data = JSON.stringify(item)
  const event = new Event('drop', { bubbles: true, cancelable: true })
  Object.defineProperty(event, 'dataTransfer', {
    value: { types: [TREE_ITEM_TYPE, 'text/plain'], getData: (type: string) => (type === TREE_ITEM_TYPE ? data : '') },
  })
  designer.wrapper.findAll('.queryDesingnerArea_container')[index]!.element.dispatchEvent(event)
}

const settle = () => new Promise(resolve => setTimeout(resolve)).then(flushPromises)

const STORE_TYPE = { id: 'h-store-type', type: TreeItemTypesEnum.Hierarchy, caption: 'Store Type', originalItem: { HIERARCHY_UNIQUE_NAME: '[Store Type]' } }
const UNIT_SALES = { id: 'm-unit-sales', type: TreeItemTypesEnum.Measure, caption: 'Unit Sales', originalItem: { MEASURE_UNIQUE_NAME: '[Measures].[Unit Sales]' } }

describe('a drop from the cube explorer SortableJS did not take', () => {
  it('puts the hierarchy where it was dropped', async () => {
    const designer = mountDesigner()
    dropOn(designer, 2, STORE_TYPE)
    await settle()

    expect(designer.config.rows.map((item: any) => item.id)).toEqual(['[Gender]', 'h-store-type'])
    expect(designer.config.rows[1].filters).toEqual({ enabled: false })
  })

  it('puts a measure into the data, and Values onto the columns', async () => {
    const designer = mountDesigner()
    designer.config.columns = []
    dropOn(designer, 5, UNIT_SALES)
    await settle()

    expect(designer.config.measures.map((item: any) => item.id)).toEqual(['m-unit-sales'])
    expect(designer.config.columns.map((item: any) => item.id)).toEqual(['Values'])
  })

  it('leaves a measure dropped on the rows, and a hierarchy dropped on the data, where they came from', async () => {
    const designer = mountDesigner()
    dropOn(designer, 2, UNIT_SALES)
    dropOn(designer, 5, STORE_TYPE)
    await settle()

    expect(designer.config.rows.map((item: any) => item.id)).toEqual(['[Gender]'])
    expect(designer.config.measures).toEqual([])
  })

  it('takes nothing twice when vuedraggable did take the drop', async () => {
    const designer = mountDesigner()
    dropOn(designer, 2, STORE_TYPE)
    // SortableJS handles the same drop on the document, after the area.
    designer.config.rows.push(STORE_TYPE)
    designer.areas[2]!.vm.$emit('change', { added: { element: STORE_TYPE, newIndex: 1 } })
    await settle()

    expect(designer.config.rows.map((item: any) => item.id)).toEqual(['[Gender]', 'h-store-type'])
  })
})
