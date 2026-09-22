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
import { directionOf, findNextEditableCell } from './navigation'

// 3 columns x 3 rows, editable cells marked with 1
const grid = [
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1],
]
const editable = (c: number, r: number) => grid[r][c] === 1
const next = (col: number, row: number, direction: Parameters<typeof findNextEditableCell>[1]) =>
  findNextEditableCell({ col, row }, direction, 3, 3, editable)

describe('findNextEditableCell', () => {
  it('tab walks rows and wraps to the start', () => {
    expect(next(0, 0, 'tab')).toEqual({ col: 2, row: 0 })
    expect(next(2, 0, 'tab')).toEqual({ col: 0, row: 2 })
    expect(next(2, 2, 'tab')).toEqual({ col: 0, row: 0 })
  })

  it('shift-tab walks back and wraps to the end', () => {
    expect(next(0, 0, 'shift-tab')).toEqual({ col: 2, row: 2 })
    expect(next(0, 2, 'shift-tab')).toEqual({ col: 2, row: 0 })
  })

  it('enter walks columns', () => {
    expect(next(0, 0, 'enter')).toEqual({ col: 0, row: 2 })
    expect(next(0, 2, 'enter')).toEqual({ col: 2, row: 0 })
    expect(next(2, 2, 'enter')).toEqual({ col: 0, row: 0 })
  })

  it('shift-enter walks columns backwards', () => {
    expect(next(0, 0, 'shift-enter')).toEqual({ col: 2, row: 2 })
    expect(next(2, 0, 'shift-enter')).toEqual({ col: 0, row: 2 })
  })

  it('arrows stop at the edge', () => {
    expect(next(0, 0, 'right')).toEqual({ col: 2, row: 0 })
    expect(next(2, 0, 'right')).toBeNull()
    expect(next(0, 0, 'down')).toEqual({ col: 0, row: 2 })
    expect(next(0, 2, 'up')).toEqual({ col: 0, row: 0 })
    expect(next(2, 2, 'left')).toEqual({ col: 0, row: 2 })
    expect(next(1, 1, 'left')).toBeNull()
  })

  it('returns to the cell itself when it is the only editable one', () => {
    const only = (c: number, r: number) => c === 1 && r === 1
    expect(findNextEditableCell({ col: 1, row: 1 }, 'tab', 3, 3, only)).toEqual({ col: 1, row: 1 })
  })

  it('finds nothing in an empty table', () => {
    expect(findNextEditableCell({ col: 0, row: 0 }, 'tab', 0, 0, editable)).toBeNull()
  })
})

describe('directionOf', () => {
  const key = (key: string, mods: { shiftKey?: boolean; ctrlKey?: boolean } = {}) =>
    directionOf({ key, shiftKey: false, ctrlKey: false, ...mods })

  it('maps tab and enter with and without shift', () => {
    expect(key('Tab')).toBe('tab')
    expect(key('Tab', { shiftKey: true })).toBe('shift-tab')
    expect(key('Enter')).toBe('enter')
    expect(key('Enter', { shiftKey: true })).toBe('shift-enter')
  })

  it('maps arrows only with ctrl', () => {
    expect(key('ArrowUp')).toBeNull()
    expect(key('ArrowUp', { ctrlKey: true })).toBe('up')
    expect(key('ArrowLeft', { ctrlKey: true })).toBe('left')
  })
})
