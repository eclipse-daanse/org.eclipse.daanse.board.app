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
 * ********************************************************************/

// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import DTable from '../DTable.vue'

const ROWS = [
  { datum: '2026-01-01', besucher: '120' },
  { datum: '2026-01-02', besucher: '98' },
]

function manyRows(count: number) {
  return Array.from({ length: count }, (_, index) => ({
    datum: `2026-01-${(index % 28) + 1}`,
    besucher: String(index),
  }))
}

/*
 * jsdom computes no layout, so a table there is zero rows tall and the
 * component draws everything. These give it the two numbers it windows
 * against - how tall the view is, and how tall a row is.
 */
const ROW_HEIGHT = 20
const VIEW_HEIGHT = 400

function withLayout() {
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', {
    configurable: true,
    get(this: HTMLElement) {
      return this.classList.contains('datatable') ? VIEW_HEIGHT : 0
    },
  })
  Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
    configurable: true,
    get(this: HTMLElement) {
      return this.tagName === 'TR' ? ROW_HEIGHT : 0
    },
  })
}

afterEach(() => {
  for (const name of ['clientHeight', 'offsetHeight']) {
    Object.defineProperty(HTMLElement.prototype, name, { configurable: true, value: 0 })
  }
})

/** The rows carrying data, which is every row that is not a spacer.
  Compared against undefined: a bare `data-pad` reads as an empty string. */
function drawnRows(wrapper: ReturnType<typeof mount>) {
  return wrapper.findAll('tbody tr').filter((row) => row.attributes('data-pad') === undefined)
}

/** The two spacers' heights in pixels, as [above, below]. */
function spacerHeights(wrapper: ReturnType<typeof mount>): [number, number] {
  const heights = wrapper.findAll('tbody tr[data-pad]').map((row) => {
    const found = /height:\s*(\d+(?:\.\d+)?)px/.exec(row.attributes('style') ?? '')
    return found ? Number(found[1]) : 0
  })
  return [heights[0] ?? 0, heights[1] ?? 0]
}

/*
 * Waits for the second render.
 *
 * The first one happens before anything has been measured, so it draws
 * every row; the window appears once the height is known. One tick was
 * enough on an idle machine and not always enough under load.
 */
async function windowOpened(wrapper: ReturnType<typeof mount>) {
  for (let tries = 0; tries < 10; tries++) {
    await wrapper.vm.$nextTick()
    if (wrapper.find('tbody tr[data-pad]').exists()) return
  }
  throw new Error('no window was drawn')
}

/** The scroll area itself, which is where a scroll is heard. */
function scrollArea(wrapper: ReturnType<typeof mount>) {
  return wrapper.find('.datatable')
}

/*
 * Names the shell's utility layer already owns.
 *
 * Tailwind is imported application-wide (packages/app/shell/src/assets/main.css),
 * and a class of one of these names means what the utility says it means,
 * wherever it appears. A component that reaches for one is not overriding
 * it - scoped styles raise specificity, they do not take the name back,
 * and a property the component never sets is set by the utility alone.
 */
const UTILITY_NAMES = new Set([
  'table',
  'grid',
  'flex',
  'block',
  'inline',
  'hidden',
  'contents',
  'container',
  'static',
  'fixed',
  'absolute',
  'relative',
  'sticky',
  'visible',
  'invisible',
  'collapse',
  'isolate',
  'truncate',
  'border',
  'transform',
  'filter',
  'transition',
  'resize',
])

describe('DTable', () => {
  it('draws a row per item and works out the columns from the first', () => {
    const wrapper = mount(DTable, { props: { items: ROWS } })

    expect(wrapper.findAll('tbody tr')).toHaveLength(2)
    expect(wrapper.findAll('thead th').map((th) => th.text())).toEqual(['datum', 'besucher'])
  })

  /*
   * The regression this guards (#1181).
   *
   * The scroll area was called "table", which Tailwind owns as a utility
   * meaning `display: table`. The scoped rule set height and overflow but
   * never display, so the utility made the scroll container a table box -
   * and a table box ignores `overflow` and reads `height` as a minimum.
   * It grew to the height of all 20,000 rows, the pane above clipped it,
   * and there was nothing left that scrolled.
   *
   * jsdom computes no layout, so what is checked is the cause rather than
   * the symptom: the element that is meant to scroll does not carry a name
   * that decides its display for it.
   */
  it('gives its scroll area a name no utility owns', () => {
    const wrapper = mount(DTable, { props: { items: ROWS } })
    const scrollArea = wrapper.element as HTMLElement

    const taken = [...scrollArea.classList].filter((name) => UTILITY_NAMES.has(name))
    expect(taken).toEqual([])
  })

  /*
   * What #1182 is about: the cost of opening a source stopped growing
   * with the size of its answer.
   */
  describe('with more rows than fit', () => {
    it('draws the ones in view, not all of them', async () => {
      withLayout()
      const wrapper = mount(DTable, { props: { items: manyRows(1200) } })
      await windowOpened(wrapper)

      const drawn = drawnRows(wrapper)
      expect(drawn.length).toBeGreaterThan(VIEW_HEIGHT / ROW_HEIGHT)
      expect(drawn.length).toBeLessThan(100)
    })

    it('keeps the rows it did not draw as height, so the scrollbar is honest', async () => {
      withLayout()
      const wrapper = mount(DTable, { props: { items: manyRows(1200) } })
      await windowOpened(wrapper)

      /* Scrolled, so that there is a spacer on each side to check. */
      const area = scrollArea(wrapper)
      Object.defineProperty(area.element, 'scrollTop', {
        configurable: true,
        value: 400 * ROW_HEIGHT,
      })
      await area.trigger('scroll')
      await wrapper.vm.$nextTick()

      const drawn = drawnRows(wrapper)
      const first = Number(drawn[0].attributes('aria-rowindex')) - 2
      const above = spacerHeights(wrapper)[0]
      const below = spacerHeights(wrapper)[1]

      /*
       * Asked in the row height the component settled on rather than the
       * one stubbed here: whether it measured 20 or fell back on its own
       * guess, the spacers have to stand for every row that is not drawn,
       * and both of them in the same unit. Pinning the number instead made
       * this fail only under load, when the measurement landed on the
       * other side of a render.
       */
      expect(first).toBeGreaterThan(0)
      const height = above / first
      expect(below / height + drawn.length + first).toBe(1200)
    })

    it('shows the rows it is scrolled to', async () => {
      withLayout()
      const wrapper = mount(DTable, { props: { items: manyRows(1200) } })
      await windowOpened(wrapper)

      expect(wrapper.text()).toContain('2026-01-1')
      expect(drawnRows(wrapper)[0].text()).toContain('0')

      const area = scrollArea(wrapper)
      Object.defineProperty(area.element, 'scrollTop', {
        configurable: true,
        value: 800 * ROW_HEIGHT,
      })
      await area.trigger('scroll')
      await wrapper.vm.$nextTick()

      /* The first row drawn is now the one the scroll position asks for,
        less the rows kept in hand above it. */
      expect(drawnRows(wrapper)[0].attributes('aria-rowindex')).toBe(String(800 - 10 + 2))
    })

    it('tells a reader how many rows there are, not how many are drawn', async () => {
      withLayout()
      const wrapper = mount(DTable, { props: { items: manyRows(1200) } })
      await windowOpened(wrapper)

      expect(wrapper.find('table').attributes('aria-rowcount')).toBe('1201')
    })
  })

  /*
   * Without layout there is no view to window against, and a window built
   * on a height of zero would be empty. Everything is drawn instead.
   */
  it('draws every row where there is no height to measure', async () => {
    const wrapper = mount(DTable, { props: { items: manyRows(400) } })
    await wrapper.vm.$nextTick()

    expect(drawnRows(wrapper)).toHaveLength(400)
    expect(wrapper.findAll('tbody tr[data-pad]')).toHaveLength(0)
  })

  it('draws a short table whole', async () => {
    withLayout()
    const wrapper = mount(DTable, { props: { items: manyRows(40) } })
    await wrapper.vm.$nextTick()

    expect(drawnRows(wrapper)).toHaveLength(40)
    expect(wrapper.find('table').classes()).not.toContain('datatable__fixed')
  })

  it('says so when there are no rows', () => {
    const wrapper = mount(DTable, { props: { items: [], empty: 'Nichts da' } })

    expect(wrapper.find('table').exists()).toBe(false)
    expect(wrapper.text()).toContain('Nichts da')
  })
})
