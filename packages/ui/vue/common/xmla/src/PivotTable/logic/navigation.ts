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

export type Direction = 'tab' | 'shift-tab' | 'enter' | 'shift-enter' | 'left' | 'right' | 'up' | 'down'

export interface CellPosition {
  col: number
  row: number
}

// Edit mode keys: Tab walks row by row, Enter column by column, both wrap
// around; Ctrl+arrows stop at the table edge
export const directionOf = (event: Pick<KeyboardEvent, 'key' | 'shiftKey' | 'ctrlKey'>): Direction | null => {
  if (event.key === 'Tab') return event.shiftKey ? 'shift-tab' : 'tab'
  if (event.key === 'Enter') return event.shiftKey ? 'shift-enter' : 'enter'
  if (!event.ctrlKey) return null
  switch (event.key) {
    case 'ArrowRight':
      return 'right'
    case 'ArrowLeft':
      return 'left'
    case 'ArrowDown':
      return 'down'
    case 'ArrowUp':
      return 'up'
  }
  return null
}

export const findNextEditableCell = (
  { col, row }: CellPosition,
  direction: Direction,
  maxCols: number,
  maxRows: number,
  isEditable: (col: number, row: number) => boolean,
): CellPosition | null => {
  if (maxCols === 0 || maxRows === 0) return null
  const total = maxRows * maxCols

  // walks the table as one wrapped sequence, row-major or column-major
  const wrapped = (start: number, step: 1 | -1, rowMajor: boolean) => {
    for (let k = 0; k < total; k++) {
      const idx = (((start + step * k) % total) + total) % total
      const r = rowMajor ? Math.floor(idx / maxCols) : idx % maxRows
      const c = rowMajor ? idx % maxCols : Math.floor(idx / maxRows)
      if (isEditable(c, r)) return { col: c, row: r }
    }
    return null
  }

  const straight = (dc: number, dr: number) => {
    for (let c = col + dc, r = row + dr; c >= 0 && c < maxCols && r >= 0 && r < maxRows; c += dc, r += dr) {
      if (isEditable(c, r)) return { col: c, row: r }
    }
    return null
  }

  switch (direction) {
    case 'tab':
      return wrapped(row * maxCols + col + 1, 1, true)
    case 'shift-tab':
      return wrapped(row * maxCols + col - 1, -1, true)
    case 'enter':
      return wrapped(col * maxRows + row + 1, 1, false)
    case 'shift-enter':
      return wrapped(col * maxRows + row - 1, -1, false)
    case 'down':
      return straight(0, 1)
    case 'up':
      return straight(0, -1)
    case 'right':
      return straight(1, 0)
    case 'left':
      return straight(-1, 0)
  }
}
