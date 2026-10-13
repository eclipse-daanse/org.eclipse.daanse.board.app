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

import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { nextTick } from 'vue'
import { config, flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import CascadeView from './CascadeView.vue'
import CompareView from './CompareView.vue'
import SliceMinimap from './SliceMinimap.vue'
import PivotNavigator from './PivotNavigator.vue'
import TreeTabsView from './TreeTabsView.vue'
import MatrixView from './MatrixView.vue'
import StandardView from './StandardView.vue'
import { i18n, indexOf, metadata, salesCellset, storeFor } from './testing'

// The texts in English, as the application's translator gives them.
config.global.provide = { ...config.global.provide, i18n }

const cellset = salesCellset()
const USA = indexOf(cellset, 3, 'USA')
const CA = indexOf(cellset, 3, 'CA')
const Y1997 = indexOf(cellset, 2, '1997')
const Q1 = indexOf(cellset, 2, 'Q1')
const Q3 = indexOf(cellset, 2, 'Q3')

const TABLE = '<div class="the-table">table</div>'

const tile = (wrapper: VueWrapper, label: string) =>
  wrapper.findAll('.cascade__tile').find(t => t.find('.cascade__label').text().replace('▸', '').trim() === label)!
const tileLabels = (wrapper: VueWrapper) =>
  wrapper.findAll('.cascade__label').map(l => l.text().replace('▸', '').trim())
const crumbs = (wrapper: VueWrapper) => wrapper.findAll('.cascade__crumb').map(c => c.text())

describe('cascade by axes', () => {
  const mountCascade = () => {
    const { store } = storeFor()
    const wrapper = mount(CascadeView, { props: { cellset, store }, slots: { table: TABLE } })
    return { store, wrapper }
  }

  it('starts with the chapters, then the pages, then the table', async () => {
    const { store, wrapper } = mountCascade()
    expect(wrapper.find('.cascade__level-title').text()).toBe('Chapters')
    expect(tileLabels(wrapper)).toHaveLength(13)

    await tile(wrapper, 'USA').trigger('click')
    expect(wrapper.find('.cascade__level-title').text()).toBe('Pages')
    expect(tileLabels(wrapper)).toHaveLength(10)

    await tile(wrapper, '1997').trigger('click')
    expect(wrapper.find('.the-table').exists()).toBe(true)
    expect(store.state.slice).toEqual({ axis2: Y1997, axis3: USA })
    expect(crumbs(wrapper)).toEqual(['Overview', 'USA', '1997'])
  })

  it('goes back up by its breadcrumbs', async () => {
    const { wrapper } = mountCascade()
    await tile(wrapper, 'USA').trigger('click')
    await tile(wrapper, '1997').trigger('click')

    await wrapper.findAll('.cascade__crumb')[1].trigger('click')
    expect(wrapper.find('.cascade__level-title').text()).toBe('Pages')
    await wrapper.findAll('.cascade__crumb')[0].trigger('click')
    expect(wrapper.find('.cascade__level-title').text()).toBe('Chapters')
  })

  it('colours a chapter with its value, a sum marked, and an empty one hatched', () => {
    const { wrapper } = mountCascade()
    expect(tile(wrapper, 'USA').find('.cascade__value').text()).toMatch(/^Σ /)
    expect(tile(wrapper, 'Canada').classes()).toContain('is-empty')
    expect(tile(wrapper, 'Canada').find('.cascade__value').text()).toBe('–')
  })

  it('adds to the selection on a modifier click, without descending', async () => {
    const { store, wrapper } = mountCascade()
    await tile(wrapper, 'USA').trigger('click', { ctrlKey: true })
    expect(store.state.selection).toEqual([{ axis2: 0, axis3: USA }])
    expect(wrapper.find('.cascade__level-title').text()).toBe('Chapters')
  })

  it('opens at the slice already chosen, when coming from another mode', () => {
    const { store } = storeFor()
    store.select({ axis2: Q3, axis3: CA })
    const wrapper = mount(CascadeView, { props: { cellset, store }, slots: { table: TABLE } })
    expect(wrapper.find('.the-table').exists()).toBe(true)
    expect(crumbs(wrapper)).toEqual(['Overview', 'CA', 'Q3'])
  })
})

describe('cascade by hierarchy', () => {
  const mountCascade = () => {
    const { store } = storeFor(cellset, { cascadeDepth: 'hierarchy' })
    const wrapper = mount(CascadeView, { props: { cellset, store }, slots: { table: TABLE } })
    return { store, wrapper }
  }

  it('steps into a parent, offers it whole, and goes on to the next axis', async () => {
    const { store, wrapper } = mountCascade()
    expect(tileLabels(wrapper)).toEqual(['Canada', 'Mexico', 'USA'])

    await tile(wrapper, 'USA').trigger('click')
    expect(tileLabels(wrapper)).toEqual(['USA (gesamt)', 'CA', 'OR', 'WA'])

    await tile(wrapper, 'CA').trigger('click')
    expect(tileLabels(wrapper)).toEqual(['1997', '1998'])
    await tile(wrapper, '1997').trigger('click')
    expect(tileLabels(wrapper)).toEqual(['1997 (gesamt)', 'Q1', 'Q2', 'Q3', 'Q4'])
    await tile(wrapper, 'Q1').trigger('click')

    expect(store.state.slice).toEqual({ axis2: Q1, axis3: CA })
    expect(crumbs(wrapper)).toEqual(['Overview', 'USA', 'CA', '1997', 'Q1'])
  })

  it('takes a parent as a whole', async () => {
    const { store, wrapper } = mountCascade()
    await tile(wrapper, 'USA').trigger('click')
    await tile(wrapper, 'USA (gesamt)').trigger('click')
    await tile(wrapper, '1997').trigger('click')
    await tile(wrapper, '1997 (gesamt)').trigger('click')
    expect(store.state.slice).toEqual({ axis2: Y1997, axis3: USA })
  })

  it('switches to by axes midway, keeping what was chosen', async () => {
    const { store, wrapper } = mountCascade()
    await tile(wrapper, 'USA').trigger('click')
    await tile(wrapper, 'CA').trigger('click')
    await tile(wrapper, '1997').trigger('click') // stepped into 1997, nothing chosen on pages yet

    store.cascadeDepth.value = 'axes'
    await nextTick()
    expect(crumbs(wrapper)).toEqual(['Overview', 'CA'])
    expect(tileLabels(wrapper)).toHaveLength(10)

    store.cascadeDepth.value = 'hierarchy'
    await nextTick()
    expect(crumbs(wrapper)).toEqual(['Overview', 'USA', 'CA'])
  })
})

describe('slice minimap', () => {
  const mountMinimap = () =>
    mount(SliceMinimap, { props: { cellset, current: { axis2: Y1997, axis3: USA } }, attachTo: document.body })

  it('is pages across and chapters down, the current slice marked', () => {
    const wrapper = mountMinimap()
    expect(wrapper.findAll('thead th')).toHaveLength(11)
    expect(wrapper.findAll('tbody tr')).toHaveLength(13)
    const current = wrapper.find('.is-current')
    expect(current.attributes('aria-label')).toBe(`1997 · USA: ${new Intl.NumberFormat().format(266773)}`)
    wrapper.unmount()
  })

  it('selects on click and adds on a modifier click', async () => {
    const wrapper = mountMinimap()
    const cell = wrapper.find(`[data-cell="${CA}:${Q1}"]`)
    await cell.trigger('click')
    await cell.trigger('click', { shiftKey: true })
    // The slice, and the cell it came from.
    expect(wrapper.emitted('select')).toEqual([[{ axis2: Q1, axis3: CA }, expect.any(HTMLTableCellElement)]])
    expect(wrapper.emitted('toggle')).toEqual([[{ axis2: Q1, axis3: CA }]])
    wrapper.unmount()
  })

  it('moves with the arrows and selects with Enter', async () => {
    const wrapper = mountMinimap()
    const grid = wrapper.find('table')
    await grid.trigger('keydown', { key: 'ArrowRight' })
    await grid.trigger('keydown', { key: 'ArrowDown' })
    await grid.trigger('keydown', { key: 'Enter' })
    expect(wrapper.emitted('select')).toEqual([[{ axis2: 1, axis3: 1 }, expect.any(HTMLTableCellElement)]])
    expect(document.activeElement?.getAttribute('data-cell')).toBe('1:1')
    wrapper.unmount()
  })

  it('offers a search above the limit', async () => {
    const wrapper = mount(SliceMinimap, { props: { cellset, limit: 5 } })
    expect(wrapper.findAll('thead th')).toHaveLength(6)
    await wrapper.find('input[type="search"]').setValue('Q')
    expect(wrapper.findAll('thead th').map(th => th.text()).slice(1)).toEqual(['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'])
  })
})

describe('table with popovers', () => {
  const mountMatrix = () => {
    const { store } = storeFor(cellset, { mode: 'matrix' })
    const wrapper = mount(MatrixView, {
      props: { cellset, store, diverging: true, limit: 200 },
      slots: { table: TABLE },
      attachTo: document.body,
    })
    return { wrapper, store }
  }
  const popover = () => document.body.querySelector('.matrix-popover')

  it('shows every slice and no table until one is opened', () => {
    const { wrapper } = mountMatrix()
    expect(wrapper.findAll('.minimap__cell').length).toBeGreaterThan(0)
    expect(popover()).toBeNull()
    wrapper.unmount()
  })

  it('opens the slice\'s table in a popover, titled by its page and chapter', async () => {
    const { wrapper, store } = mountMatrix()
    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click')
    await nextTick()

    expect(store.state.slice).toEqual({ axis2: Q1, axis3: CA })
    expect(popover()?.querySelector('.the-table')).not.toBeNull()
    expect(popover()?.getAttribute('aria-label')).toBe('Q1 · CA')
    wrapper.unmount()
  })

  it('closes on Escape and on its cross', async () => {
    const { wrapper } = mountMatrix()
    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click')
    await nextTick()
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await nextTick()
    expect(popover()).toBeNull()

    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click')
    await nextTick()
    ;(popover()?.querySelector('.matrix-popover__close') as HTMLElement).click()
    await nextTick()
    expect(popover()).toBeNull()
    wrapper.unmount()
  })

  it('adds to the selection on a modifier click, without opening', async () => {
    const { wrapper, store } = mountMatrix()
    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click', { shiftKey: true })
    await nextTick()
    expect(store.state.selection).toEqual([{ axis2: Q1, axis3: CA }])
    expect(popover()).toBeNull()
    wrapper.unmount()
  })
})

describe('tree and tabs', () => {
  it('sets the chapter from the tree and the page from the tabs', async () => {
    const { store } = storeFor()
    const wrapper = mount(TreeTabsView, { props: { cellset, store, metadata, timeline: false }, slots: { table: TABLE } })

    const usa = wrapper.findAll('[role="treeitem"]').find(i => i.find('.tree-item__label').text() === 'USA')!
    await usa.find('.tree-item__toggle').trigger('click')
    const ca = wrapper.findAll('[role="treeitem"]').find(i => i.find('.tree-item__label').text() === 'CA')!
    await ca.trigger('click')
    await wrapper.findAll('[role="tab"]')[Q3].trigger('click')

    expect(store.state.slice).toEqual({ axis2: Q3, axis3: CA })
    expect(wrapper.find('.the-table').exists()).toBe(true)
  })

  it('makes a time axis a timeline, stepping back and forward', async () => {
    const { store } = storeFor()
    const wrapper = mount(TreeTabsView, { props: { cellset, store, metadata }, slots: { table: TABLE } })
    expect(wrapper.find('[aria-label="Timeline"]').exists()).toBe(true)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(0)

    await wrapper.find('[aria-label="Forward"]').trigger('click')
    expect(store.state.slice.axis2).toBe(1)
    await wrapper.find('[aria-label="Back"]').trigger('click')
    expect(store.state.slice.axis2).toBe(0)
  })

  it('picks a period on the ruler, by click and by keyboard', async () => {
    const { store } = storeFor()
    const wrapper = mount(TreeTabsView, { props: { cellset, store, metadata }, slots: { table: TABLE } })
    const ruler = wrapper.find('[role="slider"]')
    const ticks = wrapper.findAll('.tree-tabs__tick')
    expect(ticks).toHaveLength(10)
    expect(ticks[Y1997].classes()).toContain('is-depth-0')
    expect(ticks[Q3].classes()).toContain('is-depth-1')

    await ticks[Q3].trigger('click')
    expect(store.state.slice.axis2).toBe(Q3)
    expect(ruler.attributes('aria-valuetext')).toBe('Q3')

    await ruler.trigger('keydown', { key: 'End' })
    expect(store.state.slice.axis2).toBe(9)
    await ruler.trigger('keydown', { key: 'ArrowLeft' })
    expect(store.state.slice.axis2).toBe(8)
  })

  it('turns the timeline into tabs and back on request', async () => {
    const { store } = storeFor()
    const wrapper = mount(TreeTabsView, { props: { cellset, store, metadata }, slots: { table: TABLE } })
    const [asTimeline, asTabs] = wrapper.findAll('.tree-tabs__switch input')

    await asTabs.trigger('change')
    expect(wrapper.emitted('update:timeline')).toEqual([[false]])
    await wrapper.setProps({ timeline: false })
    expect(wrapper.find('[role="slider"]').exists()).toBe(false)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(10)

    await asTimeline.trigger('change')
    expect(wrapper.emitted('update:timeline')).toEqual([[false], [true]])
  })

  it('has plain tabs where nothing says time', () => {
    const { store } = storeFor()
    const wrapper = mount(TreeTabsView, { props: { cellset, store }, slots: { table: TABLE } })
    expect(wrapper.find('[aria-label="Timeline"]').exists()).toBe(false)
    expect(wrapper.findAll('[role="tab"]')).toHaveLength(10)
  })
})

describe('compare', () => {
  const mountCompare = (layout: string) => {
    const { store } = storeFor(cellset, { compareLayout: layout })
    store.setCompare('a', { axis2: Y1997, axis3: USA })
    store.setCompare('b', { axis2: Q1, axis3: USA })
    return mount(CompareView, {
      props: { cellset, store, threshold: 5, hideUnchanged: false, diverging: true, limit: 200 },
    })
  }

  it('shows two tables, two and the difference, or the difference alone', () => {
    expect(mountCompare('side-by-side').findAll('.compare-table')).toHaveLength(2)
    expect(mountCompare('side-by-side-diff').findAll('.compare-table')).toHaveLength(3)
    expect(mountCompare('diff-only').findAll('.compare-table')).toHaveLength(1)
  })

  it('switches the layout from its controls', async () => {
    const wrapper = mountCompare('side-by-side')
    const option = wrapper.findAll('.compare__layouts label').find(l => l.text() === 'Difference only')!
    await option.find('input').trigger('change')
    expect(wrapper.findAll('.compare-table')).toHaveLength(1)
  })

  it('shows the difference with its sign, and never NaN or Infinity', () => {
    const text = mountCompare('diff-only').find('.compare-table').text()
    // Q1 1997 against the year: every quarter is less than its year.
    expect(text).toContain('▼')
    expect(text).not.toMatch(/NaN|Infinity|undefined/)
  })

  it('says n/a where one side is empty', () => {
    const { store } = storeFor()
    store.setCompare('a', { axis2: Y1997, axis3: USA })
    store.setCompare('b', { axis2: Y1997, axis3: indexOf(cellset, 3, 'Canada') })
    const wrapper = mount(CompareView, {
      props: { cellset, store, threshold: 5, hideUnchanged: false, diverging: true, limit: 200 },
    })
    store.compareLayout.value = 'diff-only'
    return nextTick().then(() => {
      const cells = wrapper.findAll('.compare-table td').map(td => td.text())
      expect(cells.every(c => c === 'n/a')).toBe(true)
    })
  })
})

describe('standard', () => {
  it('sets the page and the chapter from two dropdowns, children indented', async () => {
    const { store } = storeFor()
    const wrapper = mount(StandardView, { props: { cellset, store }, slots: { table: TABLE } })
    const [pages, chapters] = wrapper.findAll('select')
    expect(pages.findAll('option').map(o => o.text().trim())).toContain('Q3')
    expect(pages.findAll('option')[Q1].element.textContent).toMatch(/^\u00a0+Q1$/)
    expect(chapters.findAll('option')).toHaveLength(13)

    await pages.setValue(String(Q3))
    await chapters.setValue(String(CA))
    expect(store.state.slice).toEqual({ axis2: Q3, axis3: CA })
    expect(wrapper.find('.the-table').exists()).toBe(true)
  })

  it('has no chapter dropdown without chapters', () => {
    const three = salesCellset()
    three.axes = three.axes.slice(0, 3)
    const { store } = storeFor(three)
    const wrapper = mount(StandardView, { props: { cellset: three, store }, slots: { table: TABLE } })
    expect(wrapper.findAll('select')).toHaveLength(1)
  })
})

describe('the navigator', () => {
  it('switches modes and keeps the place', async () => {
    const { store, config } = storeFor()
    store.select({ axis2: Q3, axis3: CA })
    const wrapper = mount(PivotNavigator, {
      props: { cellset, store, metadata, settings: config.value, 'onUpdate:settings': () => {} },
      slots: { table: TABLE },
    })

    for (const label of ['Standard', 'Map', 'Tree + tabs', 'Compare', 'Cascade']) {
      await wrapper.findAll('.navigator__mode').find(b => b.text() === label)!.trigger('click')
      expect(store.state.slice).toEqual({ axis2: Q3, axis3: CA })
    }
    expect(crumbs(wrapper)).toEqual(['Overview', 'CA', 'Q3'])
  })
})

describe('with the real pivot table', () => {
  // The pivot table draws only what fits its container; jsdom measures every element as 0.
  // It measures itself with offset sizes and a ResizeObserver, which jsdom has not either.
  const sizes = ['clientHeight', 'clientWidth', 'offsetHeight', 'offsetWidth'] as const
  /* Reports every element it is given as 800 by 800, once, as a browser would on observing. */
  class ResizeObserverStub {
    constructor(private readonly report: ResizeObserverCallback) {}
    observe(target: Element) {
      const box = [{ inlineSize: 800, blockSize: 800 }]
      const entry = { target, contentRect: { width: 800, height: 800 }, contentBoxSize: box, borderBoxSize: box }
      this.report([entry as unknown as ResizeObserverEntry], this as unknown as ResizeObserver)
    }
    unobserve() {}
    disconnect() {}
  }
  beforeAll(() => {
    sizes.forEach(name => Object.defineProperty(HTMLElement.prototype, name, { configurable: true, get: () => 800 }))
    vi.stubGlobal('ResizeObserver', ResizeObserverStub)
  })
  // Defined on HTMLElement only here; removing it falls back to jsdom's own on Element.
  afterAll(() => {
    sizes.forEach(name => Reflect.deleteProperty(HTMLElement.prototype, name))
    vi.unstubAllGlobals()
  })

  it('renders the current slice, and another one once the slice changes', async () => {
    const { defineComponent, h, computed } = await import('vue')
    const { pivotSlice } = await import('org.eclipse.daanse.board.app.lib.datasource.xmla')
    const { PivotTable } = await import('org.eclipse.daanse.board.app.ui.vue.common.xmla')

    const { store } = storeFor(cellset, { mode: 'map' })
    store.select({ axis2: Y1997, axis3: USA })
    const params = { rows: [{}], columns: [{}], measures: [], properties: [], showRowsProperties: false, showColumnsProperties: false }
    const Host = defineComponent(() => {
      const table = computed(() => ({ ...pivotSlice(cellset, store.state.slice, params), tableState: {} }))
      return () =>
        h(PivotNavigator, { cellset, store, metadata, settings: {}, 'onUpdate:settings': () => {} }, {
          table: () =>
            h(PivotTable, {
              key: `${store.state.slice.axis2}:${store.state.slice.axis3}`,
              modelValue: table.value,
              rowsExpandedMembers: [],
              columnsExpandedMembers: [],
              propertiesRows: [],
              propertiesCols: [],
            }),
        })
    })
    const wrapper = mount(Host)
    // The visible part is worked out once the table has measured itself.
    await flushPromises()
    // FmtValue, as the server formatted it.
    expect(wrapper.find('.map__table').text()).toContain('266,773')
    expect(wrapper.find('.map__table').text()).toContain('Drink')

    await wrapper.find(`[data-cell="${CA}:${Q1}"]`).trigger('click')
    await flushPromises()
    expect(store.state.slice).toEqual({ axis2: Q1, axis3: CA })
    expect(wrapper.find('.map__table').text()).not.toContain('266,773')
    expect(wrapper.find('.map__table').text()).toContain('Drink')
  })
})
