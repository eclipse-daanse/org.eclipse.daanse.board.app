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
import { cellColor, cellIds, cellStyle, cellText, fontFlagStyles, isCellEditable } from './cell'
import type { PivotData } from './types'

const defaults = { textColor: '#000', backgroundColor: '#fff', fontSize: 14, textAlign: 'left' as const }
const noFormat = () => null

describe('cellColor', () => {
  it('turns the numeric colour property into hex', () => {
    expect(cellColor(255)).toBe('#0000ff')
    expect(cellColor('16711680')).toBe('#ff0000')
  })

  it('ignores missing or invalid values', () => {
    expect(cellColor(undefined)).toBeUndefined()
    expect(cellColor(null)).toBeUndefined()
    expect(cellColor('none')).toBeUndefined()
  })
})

describe('fontFlagStyles', () => {
  it('reads each bit on its own', () => {
    expect(fontFlagStyles(1)).toEqual({ 'font-weight': 800 })
    expect(fontFlagStyles(2)).toEqual({ 'font-style': 'italic' })
    expect(fontFlagStyles(4)).toEqual({ 'text-decoration': 'underline' })
    expect(fontFlagStyles(12)).toEqual({ 'text-decoration': 'underline line-through' })
  })

  it('adds nothing for no flags', () => {
    expect(fontFlagStyles(0)).toEqual({})
    expect(fontFlagStyles(NaN)).toEqual({})
  })
})

describe('cellStyle', () => {
  it('uses the defaults for a plain text cell', () => {
    expect(cellStyle({ Value: 'abc' }, defaults, noFormat)).toEqual({
      'text-align': 'left',
      color: '#000',
      'background-color': '#fff',
      'font-size': '14px',
    })
  })

  it('right-aligns numbers', () => {
    expect(cellStyle({ Value: '12.5' }, defaults, noFormat)['text-align']).toBe('right')
    expect(cellStyle({ Value: '' }, defaults, noFormat)['text-align']).toBe('left')
  })

  it('applies server cell properties', () => {
    const style = cellStyle({ Value: 1, FORE_COLOR: 255, BACK_COLOR: 0, FONT_FLAGS: '1', FONT_SIZE: '9' }, defaults, noFormat)
    expect(style.color).toBe('#0000ff')
    expect(style['background-color']).toBe('#000000')
    expect(style['font-weight']).toBe(800)
    expect(style['font-size']).toBe('9px')
  })

  it('lets conditional formats override server properties', () => {
    const style = cellStyle({ Value: 1, BACK_COLOR: 0, FONT_FLAGS: 1 }, defaults, () => ({
      backgroundColor: '#abc',
      textColor: '#def',
      fontWeight: 300,
    }))
    expect(style['background-color']).toBe('#abc')
    expect(style.color).toBe('#def')
    expect(style['font-weight']).toBe(300)
  })

  it('evaluates formats on Value, falling back to FmtValue', () => {
    const seen: any[] = []
    cellStyle({ Value: 7, FmtValue: '7,00' }, defaults, v => (seen.push(v), null))
    cellStyle({ FmtValue: '8' }, defaults, v => (seen.push(v), null))
    expect(seen).toEqual([7, '8'])
  })
})

describe('cellText', () => {
  it('prefers the formatted value', () => {
    expect(cellText({ Value: 1234.5, FmtValue: '$1,234.50' })).toBe('$1,234.50')
  })

  it('formats numbers in German notation', () => {
    expect(cellText({ Value: 1234.5 })).toBe('1.234,5')
    expect(cellText({ FmtValue: '1234.567' })).toBe('1.234,567')
  })

  it('keeps text and blank values as they are', () => {
    expect(cellText({ Value: 'n/a' })).toBe('n/a')
    expect(cellText({ Value: '' })).toBe('')
    expect(cellText({ Value: '  ' })).toBe('  ')
    expect(cellText({})).toBe('')
    expect(cellText({ Value: null })).toBe('')
  })
})

describe('isCellEditable', () => {
  it.each([
    [{ UPDATEABLE: 1 }, true],
    [{ UPDATEABLE: '2' }, true],
    [{ UPDATEABLE: { Value: '1' } }, true],
    [{ Updateable: { Value: 2 } }, true],
    [{ UPDATEABLE: 0 }, false],
    [{}, false],
    [undefined, false],
  ])('%j -> %s', (cell, expected) => {
    expect(isCellEditable(cell as any)).toBe(expected)
  })
})

describe('cellIds', () => {
  const data: PivotData = {
    rows: [[{ UName: '[R].[a]' }, { UName: '[S].[x]' }]],
    columns: [[{ UName: '[C].[1]' }]],
    cells: [],
  }

  it('names the innermost member of the row and column tuple, after the property rows', () => {
    expect(cellIds(data, 0, 1, 1, 0)).toEqual({ rowId: '[S].[x]', colId: '[C].[1]' })
  })

  it('falls back to the index on property rows and outside the axes', () => {
    expect(cellIds(data, 0, 0, 1, 0)).toEqual({ rowId: '0', colId: '[C].[1]' })
    expect(cellIds(data, 5, 1, 1, 0)).toEqual({ rowId: '[S].[x]', colId: '5' })
  })
})
