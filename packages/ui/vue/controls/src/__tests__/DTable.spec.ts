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
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DTable from '../DTable.vue'

const ROWS = [
  { datum: '2026-01-01', besucher: '120' },
  { datum: '2026-01-02', besucher: '98' },
]

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

  it('says so when there are no rows', () => {
    const wrapper = mount(DTable, { props: { items: [], empty: 'Nichts da' } })

    expect(wrapper.find('table').exists()).toBe(false)
    expect(wrapper.text()).toContain('Nichts da')
  })
})
