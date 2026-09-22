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

import type { FormatEvaluator } from './conditionalFormat'
import type { PivotCell, PivotData } from './types'

// FORE_COLOR / BACK_COLOR cell properties as #rrggbb
export const cellColor = (value: unknown): string | undefined => {
  if (value === undefined || value === null) return undefined
  const parsed = parseInt(String(value))
  if (Number.isNaN(parsed)) return undefined
  return `#${parsed.toString(16).padStart(6, '0')}`
}

// FONT_FLAGS is a bit mask: 1 bold, 2 italic, 4 underline, 8 strikeout
export const fontFlagStyles = (flags: number) => {
  const styles: Record<string, string | number> = {}
  if (!flags) return styles
  if (flags & 1) styles['font-weight'] = 800
  if (flags & 2) styles['font-style'] = 'italic'
  const decoration = [flags & 4 && 'underline', flags & 8 && 'line-through'].filter(Boolean).join(' ')
  if (decoration) styles['text-decoration'] = decoration
  return styles
}

export interface CellDefaults {
  textColor: string
  backgroundColor: string
  fontSize: number
  textAlign: 'left' | 'center' | 'right'
}

// Inline style of a cell; geometry is added by the caller
export const cellStyle = (cell: PivotCell, defaults: CellDefaults, format: FormatEvaluator) => {
  let color = cellColor(cell.FORE_COLOR) ?? defaults.textColor
  let background = cellColor(cell.BACK_COLOR) ?? defaults.backgroundColor
  let fontWeight: number | undefined

  const conditional = format(cell.Value ?? cell.FmtValue)
  if (conditional) {
    if (conditional.backgroundColor) background = conditional.backgroundColor
    if (conditional.textColor) color = conditional.textColor
    if (conditional.fontWeight) fontWeight = conditional.fontWeight
  }

  const style: Record<string, string | number> = {
    'text-align': isNumericValue(cell.Value) ? 'right' : defaults.textAlign,
    color,
    'background-color': background,
    ...fontFlagStyles(parseInt(String(cell.FONT_FLAGS))),
    'font-size': cell.FONT_SIZE ? `${parseInt(String(cell.FONT_SIZE))}px` : `${defaults.fontSize}px`,
  }
  if (fontWeight !== undefined) style['font-weight'] = fontWeight
  return style
}

const isNumericValue = (value: unknown) =>
  value !== undefined && value !== null && value !== '' && !Number.isNaN(Number(value))

const numberFormat = new Intl.NumberFormat('de-DE')

// Formatted text of a cell: FmtValue when the server sent one, numbers in German notation
export const cellText = (cell: PivotCell): string => {
  let value = typeof cell.FmtValue === 'string' ? cell.FmtValue : cell.Value
  if (value === undefined || value === null) return ''
  if (typeof value === 'string') {
    if (value.trim() === '' || Number.isNaN(Number(value))) return value
    value = Number(value)
  }
  return typeof value === 'number' ? numberFormat.format(value) : String(value)
}

// Write-back: UPDATEABLE is CELL_UPDATE_ENABLED (1) or CELL_UPDATE_ENABLED_WITH_UPDATE (2)
export const isCellEditable = (cell: PivotCell | undefined) => {
  if (!cell) return false
  const value = cell.UPDATEABLE?.Value ?? cell.UPDATEABLE ?? cell.Updateable?.Value ?? cell.Updateable
  return Number(value) === 1 || Number(value) === 2
}

// UNames that identify the cell at (i, j) in widget events; the plain index
// when the position is a property row/column or has no tuple
export const cellIds = (data: PivotData, i: number, j: number, propertyRows: number, propertyColumns: number) => {
  const row = data.rows?.[j - propertyRows]
  const column = data.columns?.[i - propertyColumns]
  return {
    rowId: (Array.isArray(row) && row[row.length - 1]?.UName) || String(j),
    colId: (Array.isArray(column) && column[column.length - 1]?.UName) || String(i),
  }
}
