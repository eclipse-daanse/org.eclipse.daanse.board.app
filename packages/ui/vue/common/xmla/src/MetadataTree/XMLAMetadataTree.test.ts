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
import { describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import MetadataTree from './MetadataTree.vue'
import { hierarchyChildren, loadLevelMembers } from './XMLAMetadataTree'
import { TreeItemTypesEnum } from './TreeViewItems'
import english from '../i18n/en.json'
import { readTreeItem, TREE_ITEM_TYPE } from '../QueryDesigner/treeItemTransfer'

/* The texts the tree shows, without i18next. */
const i18n = {
  language: 'en',
  t(key: string) {
    const path = key.includes(':') ? key.split(':', 2)[1]! : key
    const text = path.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], english)
    return typeof text === 'string' ? text : key
  },
}

const level = (name: string, number: string) => ({
  CATALOG_NAME: 'FoodMart',
  CUBE_NAME: 'Sales',
  DIMENSION_UNIQUE_NAME: '[Gender]',
  HIERARCHY_UNIQUE_NAME: '[Gender]',
  LEVEL_NAME: name,
  LEVEL_UNIQUE_NAME: `[Gender].[${name}]`,
  LEVEL_CAPTION: name,
  LEVEL_NUMBER: number,
}) as any

const member = (caption: string) => ({
  DIMENSION_UNIQUE_NAME: '[Gender]',
  HIERARCHY_UNIQUE_NAME: '[Gender]',
  LEVEL_UNIQUE_NAME: '[Gender].[Gender]',
  MEMBER_UNIQUE_NAME: `[Gender].[${caption}]`,
  MEMBER_CAPTION: caption,
  HAS_CHILDREN: false,
}) as any

/* Levels out of order, as a server may list them. */
const LEVELS = [level('Gender', '1'), level('(All)', '0')]

/** A level's members from a list, as MetadataStore.loadLevelMembers answers. */
function pagedFrom(all: any[]) {
  return vi.fn(async (_level: any, start: number, amount: number) => ({
    members: all.slice(start, start + amount),
    hasMore: start + amount < all.length,
  }))
}

/** The store as the tree uses it: Gender's hierarchy and levels come when asked for. */
function store(members: any[]) {
  const storage = {
    dimensions: [
      { DIMENSION_UNIQUE_NAME: '[Measures]', DIMENSION_CAPTION: 'Measures', DIMENSION_TYPE: '2' },
      { DIMENSION_UNIQUE_NAME: '[Gender]', DIMENSION_CAPTION: 'Gender', DIMENSION_TYPE: '3' },
    ],
    hierarchies: [] as any[],
    levels: [],
    measureGroups: [],
    measures: [],
    sets: [],
    properties: [],
  }
  return {
    storage,
    dimensionsReady: async () => {},
    loadHierarchies: vi.fn(async () => {
      storage.hierarchies = [{
        DIMENSION_UNIQUE_NAME: '[Gender]',
        HIERARCHY_UNIQUE_NAME: '[Gender]',
        HIERARCHY_CAPTION: 'Gender',
        HIERARCHY_DISPLAY_FOLDER: '',
      }]
      return storage.hierarchies
    }),
    loadHierarchyLevels: vi.fn(async () => LEVELS),
    loadLevelMembers: pagedFrom(members),
  }
}

/** Opens the nth row whose text is caption. */
async function open(wrapper: ReturnType<typeof mount>, caption: string, nth = 0) {
  const rows = wrapper.findAll('.node__row').filter(row => row.find('.node__content').text().endsWith(caption))
  await rows[nth]!.find('.node__twist').trigger('click')
  await flushPromises()
}

const captions = (wrapper: ReturnType<typeof mount>) => wrapper.findAll('.node__content').map(c => c.text())

function mountTree(metadata: ReturnType<typeof store>) {
  return mount(MetadataTree, { props: { metadata }, global: { provide: { i18n } } })
}

/* Gender the dimension, Gender the hierarchy, Gender the level. */
async function openGenderLevel(wrapper: ReturnType<typeof mount>) {
  await open(wrapper, 'Dimensions')
  await open(wrapper, 'Gender')
  await open(wrapper, 'Gender', 1)
  await open(wrapper, 'Gender', 2)
}

describe('the cube explorer', () => {
  it('opens a hierarchy into its levels, in level order, asking the store for them', async () => {
    const metadata = store([])
    const wrapper = mountTree(metadata)
    await flushPromises()

    await open(wrapper, 'Dimensions')
    await open(wrapper, 'Gender')
    expect(metadata.loadHierarchyLevels).not.toHaveBeenCalled()
    await open(wrapper, 'Gender', 1)

    expect(metadata.loadHierarchyLevels).toHaveBeenCalledWith('[Gender]')
    expect(captions(wrapper).slice(-2)).toEqual(['(All)', 'Gender'])
    expect(metadata.loadLevelMembers).not.toHaveBeenCalled()
  })

  it('opens a level into its first members, and a "load more" row into the next', async () => {
    const metadata = store(Array.from({ length: 150 }, (_, i) => member(`M${i}`)))
    const wrapper = mountTree(metadata)
    await flushPromises()

    await openGenderLevel(wrapper)

    expect(metadata.loadLevelMembers).toHaveBeenCalledWith(LEVELS[0], 0, 100)
    expect(captions(wrapper).filter(c => /^M\d+$/.test(c))).toHaveLength(100)
    const more = wrapper.find('button.load-more')
    expect(more.text()).toBe('Load more…')

    await more.trigger('click')
    await flushPromises()

    expect(metadata.loadLevelMembers).toHaveBeenLastCalledWith(LEVELS[0], 100, 100)
    expect(captions(wrapper).filter(c => /^M\d+$/.test(c))).toHaveLength(150)
    expect(wrapper.find('button.load-more').exists()).toBe(false)
  })

  it('keeps the hierarchy what the query designer drags, and drags levels and members as their names', async () => {
    const metadata = store([member('F')])
    const wrapper = mountTree(metadata)
    await flushPromises()

    await openGenderLevel(wrapper)

    const groups = wrapper.findAllComponents({ name: 'draggable' }).map(d => (d.vm.$attrs.group as any)?.name)
    expect(groups).toEqual(['hierarchies'])

    const rowOf = (caption: string) => wrapper.findAll('[draggable="true"]').find(r => r.text() === caption)
    const data = new Map<string, string>()
    const dataTransfer = { setData: (type: string, value: string) => data.set(type, value) }
    await rowOf('F')!.trigger('dragstart', { dataTransfer })
    expect(data.get('text/plain')).toBe('[Gender].[F]')
    await rowOf('(All)')!.trigger('dragstart', { dataTransfer })
    expect(data.get('text/plain')).toBe('[Gender].[(All)]')
  })
})

describe('a row dragged out of the cube explorer', () => {
  function transfer() {
    const data = new Map<string, string>()
    return {
      data,
      dataTransfer: {
        setData: (type: string, value: string) => data.set(type, value),
        getData: (type: string) => data.get(type) ?? '',
      },
    }
  }

  it('carries a hierarchy for the query designer as well as its name', async () => {
    const metadata = store([])
    const wrapper = mountTree(metadata)
    await flushPromises()
    await open(wrapper, 'Dimensions')
    await open(wrapper, 'Gender')

    const { data, dataTransfer } = transfer()
    const hierarchyRow = wrapper.findComponent({ name: 'draggable' }).find('.cursor-pointer')
    await hierarchyRow.trigger('dragstart', { dataTransfer })

    expect(data.get('text/plain')).toBe('[Gender]')
    expect(readTreeItem(dataTransfer)).toMatchObject({
      type: TreeItemTypesEnum.Hierarchy,
      caption: 'Gender',
      originalItem: { HIERARCHY_UNIQUE_NAME: '[Gender]' },
    })
  })

  it('carries a level as its name only', async () => {
    const metadata = store([])
    const wrapper = mountTree(metadata)
    await flushPromises()
    await open(wrapper, 'Dimensions')
    await open(wrapper, 'Gender')
    await open(wrapper, 'Gender', 1)

    const { data, dataTransfer } = transfer()
    const levelRow = wrapper.findAll('[draggable="true"]').find(r => r.text() === '(All)')!
    await levelRow.trigger('dragstart', { dataTransfer })

    expect(data.get('text/plain')).toBe('[Gender].[(All)]')
    expect(data.has(TREE_ITEM_TYPE)).toBe(false)
  })

  it('looks like the others again once a drag SortableJS never saw start is over', async () => {
    const metadata = store([])
    const wrapper = mountTree(metadata)
    await flushPromises()
    await open(wrapper, 'Dimensions')
    await open(wrapper, 'Gender')

    const hierarchyRow = wrapper.findComponent({ name: 'draggable' }).find('.cursor-pointer')
    hierarchyRow.element.classList.add('sortable-drag')
    await hierarchyRow.trigger('dragend')

    expect(hierarchyRow.classes()).not.toContain('sortable-drag')
  })
})

describe('a level of the tree', () => {
  it('is drawn as a branch before it is opened, whichever level it is', async () => {
    const metadata = store([])
    const wrapper = mountTree(metadata)
    await flushPromises()
    await open(wrapper, 'Dimensions')
    await open(wrapper, 'Gender')
    await open(wrapper, 'Gender', 1)

    const levelRows = wrapper.findAll('.node__row')
      .filter(row => ['(All)', 'Gender'].includes(row.find('.node__content').text()))
      .slice(-2)
    expect(levelRows.map(row => row.find('.node__content').text())).toEqual(['(All)', 'Gender'])
    for (const row of levelRows) expect(row.find('.node__twist').exists()).toBe(true)
    expect(hierarchyChildren(LEVELS).map(l => l.lazy)).toEqual([true, true])
  })

  it('asks the server for nothing more once it has all of its members', async () => {
    const [gender] = hierarchyChildren([LEVELS[0]])
    const loader = pagedFrom([member('F'), member('M'), member('Female')])

    await loadLevelMembers(gender!, loader, 2)
    expect(gender!.children.map(c => c.type)).toEqual([
      TreeItemTypesEnum.Member,
      TreeItemTypesEnum.Member,
      TreeItemTypesEnum.LoadMore,
    ])
    await loadLevelMembers(gender!, loader, 2)
    await loadLevelMembers(gender!, loader, 2)

    expect(loader).toHaveBeenCalledTimes(2)
    expect(gender!.children.map(c => c.caption)).toEqual(['F', 'M', 'Female'])
  })

  it('asks once when "load more" is pressed twice while a page is on its way', async () => {
    const [gender] = hierarchyChildren([LEVELS[0]])
    const loader = pagedFrom([member('F'), member('M')])

    await Promise.all([loadLevelMembers(gender!, loader, 1), loadLevelMembers(gender!, loader, 1)])

    expect(loader).toHaveBeenCalledTimes(1)
  })
})
