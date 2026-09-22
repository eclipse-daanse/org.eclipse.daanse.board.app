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
import { buildAxis, entryKey, indexAt, sizeAt, visibleRange } from './axis'

describe('buildAxis', () => {
  it('accumulates sizes into start offsets', () => {
    const axis = buildAxis(4, i => [10, 20, 30, 40][i])
    expect([...axis.starts]).toEqual([0, 10, 30, 60, 100])
    expect(axis.total).toBe(100)
    expect(sizeAt(axis, 2)).toBe(30)
  })

  it('handles an empty axis', () => {
    const axis = buildAxis(0, () => 10)
    expect(axis.total).toBe(0)
    expect(indexAt(axis, 5)).toBe(-1)
    expect(visibleRange(axis, 0, 100)).toEqual({ first: 0, last: -1 })
  })
})

describe('indexAt', () => {
  const axis = buildAxis(4, i => [10, 20, 30, 40][i])

  it('finds the item covering an offset', () => {
    expect(indexAt(axis, 0)).toBe(0)
    expect(indexAt(axis, 9.9)).toBe(0)
    expect(indexAt(axis, 10)).toBe(1)
    expect(indexAt(axis, 59)).toBe(2)
    expect(indexAt(axis, 60)).toBe(3)
  })

  it('clamps offsets outside the axis', () => {
    expect(indexAt(axis, -50)).toBe(0)
    expect(indexAt(axis, 1000)).toBe(3)
  })
})

describe('visibleRange', () => {
  const axis = buildAxis(100, () => 30)

  it('covers exactly the viewport without overscan', () => {
    expect(visibleRange(axis, 0, 90)).toEqual({ first: 0, last: 2 })
    expect(visibleRange(axis, 45, 90)).toEqual({ first: 1, last: 4 })
  })

  it('widens by the overscan on both sides', () => {
    expect(visibleRange(axis, 300, 90, 60)).toEqual({ first: 8, last: 14 })
  })

  it('stops at the axis ends', () => {
    expect(visibleRange(axis, 2950, 500, 60)).toEqual({ first: 96, last: 99 })
  })

  it('is empty for a collapsed viewport', () => {
    expect(visibleRange(axis, 0, 0)).toEqual({ first: 0, last: -1 })
  })
})

describe('entryKey', () => {
  it('joins the tuple members', () => {
    expect(entryKey([{ UName: '[A].[1]' }, { UName: '[B].[2]' }], 7)).toBe('[A].[1]\u0001[B].[2]')
  })

  it('names property positions by hierarchy and property', () => {
    expect(entryKey({ isProperty: true, PROPERTY_NAME: 'Key', HIERARCHY_UNIQUE_NAME: '[A]' }, 0)).toBe('p:[A].Key')
  })

  it('falls back to the index when there is no entry', () => {
    expect(entryKey(undefined, 3)).toBe('#3')
  })
})
