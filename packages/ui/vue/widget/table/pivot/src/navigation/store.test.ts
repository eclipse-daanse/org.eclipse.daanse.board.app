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
import { nextTick } from 'vue'
import { parseCellset, type Cellset } from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import { MODES } from './store'
import { indexOf, salesCellset, storeFor } from './testing'

const cellset = salesCellset()
const USA = indexOf(cellset, 3, 'USA')
const CA = indexOf(cellset, 3, 'CA')
const Y1997 = indexOf(cellset, 2, '1997')
const Q2 = indexOf(cellset, 2, 'Q2')

describe('the navigation store', () => {
  it('starts at the first slice, in the standard view, untouched', () => {
    const { store } = storeFor()
    expect(store.state.slice).toEqual({ axis2: 0, axis3: 0 })
    expect(store.mode.value).toBe('standard')
    expect(store.state.touched).toBe(false)
    expect(store.hasNavigation.value).toBe(true)
  })

  it('keeps the slice and the selection through every mode', () => {
    const { store } = storeFor()
    store.select({ axis2: Q2, axis3: USA })
    store.toggleSelection({ axis2: Y1997, axis3: CA })

    for (const mode of [...MODES, ...MODES]) {
      store.mode.value = mode
      expect(store.state.slice).toEqual({ axis2: Q2, axis3: USA })
      expect(store.state.selection).toEqual([{ axis2: Y1997, axis3: CA }])
    }
  })

  it('writes the view to the settings, and only the view', () => {
    const { store, config } = storeFor()
    store.mode.value = 'compare'
    store.compareLayout.value = 'diff-only'
    store.select({ axis2: Q2, axis3: USA })

    expect(config.value).toEqual({ mode: 'compare', compareLayout: 'diff-only' })
  })

  it('falls back from settings it does not know', () => {
    const { store } = storeFor(cellset, { mode: 'sideways', diffType: 'log' })
    expect(store.mode.value).toBe('standard')
    expect(store.diffType.value).toBe('absolute')
  })

  it('ignores a slice the cellset does not have', () => {
    const { store } = storeFor()
    store.select({ axis2: 99, axis3: 0 })
    store.toggleSelection({ axis2: 0, axis3: 99 })
    expect(store.state.slice).toEqual({ axis2: 0, axis3: 0 })
    expect(store.state.selection).toEqual([])
  })

  it('toggles a slice in and out of the selection', () => {
    const { store } = storeFor()
    store.toggleSelection({ axis2: Q2, axis3: USA })
    store.toggleSelection({ axis2: Q2, axis3: CA })
    store.toggleSelection({ axis2: Q2, axis3: USA })
    expect(store.state.selection).toEqual([{ axis2: Q2, axis3: CA }])
  })

  it('keeps the last two when a limit of two is reached', () => {
    const { store } = storeFor()
    store.toggleSelection({ axis2: Q2, axis3: USA }, 2)
    store.toggleSelection({ axis2: Q2, axis3: CA }, 2)
    store.toggleSelection({ axis2: Y1997, axis3: USA }, 2)
    expect(store.state.selection).toEqual([{ axis2: Q2, axis3: CA }, { axis2: Y1997, axis3: USA }])
  })

  it('goes to compare with the two selected as A and B', () => {
    const { store } = storeFor()
    store.setCompare('a', { axis2: Y1997, axis3: CA })
    store.toggleSelection({ axis2: Q2, axis3: USA })
    store.compareSelection()
    expect(store.mode.value).toBe('standard')

    store.toggleSelection({ axis2: Q2, axis3: CA })
    store.compareSelection()
    expect(store.mode.value).toBe('compare')
    expect(store.comparePair.value).toEqual({ a: { axis2: Q2, axis3: USA }, b: { axis2: Q2, axis3: CA } })
  })

  it('compares what was picked, else the first two selected', () => {
    const { store } = storeFor()
    store.toggleSelection({ axis2: Q2, axis3: USA })
    store.toggleSelection({ axis2: Q2, axis3: CA })
    expect(store.comparePair.value).toEqual({ a: { axis2: Q2, axis3: USA }, b: { axis2: Q2, axis3: CA } })

    store.setCompare('b', { axis2: Y1997, axis3: USA })
    expect(store.comparePair.value.b).toEqual({ axis2: Y1997, axis3: USA })
    store.swapCompare()
    expect(store.comparePair.value).toEqual({ a: { axis2: Y1997, axis3: USA }, b: { axis2: Q2, axis3: USA } })
  })

  it('takes the colour measure from the settings when the data has it', () => {
    expect(storeFor(cellset, { measure: '[Measures].[Store Sales]' }).store.measure.value).toBe('[Measures].[Store Sales]')
    expect(storeFor(cellset, { measure: '[Measures].[Gone]' }).store.measure.value).toBe('[Measures].[Unit Sales]')
  })

  it('finds the same members again in new data, by unique name', async () => {
    const { store, data } = storeFor()
    store.select({ axis2: Q2, axis3: CA })
    store.toggleSelection({ axis2: Y1997, axis3: USA })

    // The same answer with the chapters reversed: other indexes, the same members.
    const reversed = structuredClone(cellset) as Cellset
    reversed.axes[3].positions.reverse().forEach((p, i) => (p.index = i))
    data.value = reversed
    await nextTick()

    expect(reversed.axes[3].positions[store.state.slice.axis3].label).toBe('CA')
    expect(reversed.axes[3].positions[store.state.selection[0].axis3].label).toBe('USA')
  })

  it('has no navigation for two axes, and a single slice', () => {
    const two = parseCellset({
      Body: { ExecuteResponse: { return: { root: { Axes: { Axis: [
        { __attrs: { name: 'Axis0' }, Tuples: { Tuple: [{ Member: { UName: '[M].[a]' } }] } },
        { __attrs: { name: 'Axis1' }, Tuples: { Tuple: [{ Member: { UName: '[P].[x]' } }] } },
      ] } } } } },
    })
    const { store } = storeFor(two)
    expect(store.hasNavigation.value).toBe(false)
    expect(store.state.slice).toEqual({ axis2: -1, axis3: -1 })
  })
})
