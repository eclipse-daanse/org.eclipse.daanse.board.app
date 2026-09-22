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

import type { ConditionalFormat, PivotCell } from './types'

export interface FormatResult {
  backgroundColor?: string
  textColor?: string
  fontWeight?: number
}

export type FormatEvaluator = (cellValue: any) => FormatResult | null

export const interpolateColor = (minColor: string, maxColor: string, ratio: number): string => {
  const parseHex = (hex: string) => {
    const h = hex.replace('#', '')
    return [0, 2, 4].map(k => parseInt(h.substring(k, k + 2), 16))
  }
  const min = parseHex(minColor)
  const max = parseHex(maxColor)
  return (
    '#' +
    min
      .map((c, k) => Math.round(c + (max[k] - c) * ratio))
      .map(c => c.toString(16).padStart(2, '0'))
      .join('')
  )
}

// Numeric values of all cells: what colorScale, topN and bottomN rank against
const numericValues = (cells: PivotCell[][]) => {
  const values: number[] = []
  for (const row of cells ?? []) {
    if (!Array.isArray(row)) continue
    for (const cell of row) {
      const value = parseFloat(cell?.Value)
      if (!Number.isNaN(value)) values.push(value)
    }
  }
  return values
}

// Prepares the rules once per data/format change so that evaluating a cell
// does no sorting and no scanning of the whole table
export const compileConditionalFormats = (
  formats: ConditionalFormat[] | undefined,
  cells: PivotCell[][],
): FormatEvaluator => {
  if (!formats || formats.length === 0) return () => null

  const sorted = [...formats].sort((a, b) => a.priority - b.priority)
  const needsValues = sorted.some(f => ['colorScale', 'topN', 'bottomN'].includes(f.conditionType))

  let ascending: number[] = []
  let valueSet = new Set<number>()
  let min = 0
  let max = 0
  if (needsValues) {
    ascending = numericValues(cells).sort((a, b) => a - b)
    valueSet = new Set(ascending)
    if (ascending.length) {
      min = ascending[0]
      max = ascending[ascending.length - 1]
    }
  }

  // top/bottom N: a value is in the first N of the ranking exactly when it
  // reaches the N-th value and occurs in the table at all
  const rankLimit = (format: ConditionalFormat, fromTop: boolean) => {
    const ranking = fromTop ? [...ascending].reverse() : ascending
    const selected = ranking.slice(0, Number(format.value1))
    return selected.length ? selected[selected.length - 1] : undefined
  }

  // Each rule answers for a cell value, or null to let the next rule try
  type Rule = (numeric: number, raw: any) => FormatResult | null
  const numericRule = (result: FormatResult, test: (n: number) => boolean): Rule => n =>
    !Number.isNaN(n) && test(n) ? result : null

  const toRule = (format: ConditionalFormat): Rule | null => {
    const v1 = Number(format.value1)
    const result: FormatResult = {
      backgroundColor: format.backgroundColor,
      textColor: format.textColor,
      fontWeight: format.fontWeight,
    }
    switch (format.conditionType) {
      case 'greaterThan':
        return numericRule(result, n => n > v1)
      case 'lessThan':
        return numericRule(result, n => n < v1)
      case 'equals':
        return numericRule(result, n => n === v1)
      case 'notEquals':
        return numericRule(result, n => n !== v1)
      case 'between': {
        if (format.value2 === undefined) return null
        const lo = Math.min(v1, Number(format.value2))
        const hi = Math.max(v1, Number(format.value2))
        return numericRule(result, n => n >= lo && n <= hi)
      }
      case 'contains': {
        const needle = String(format.value1).toLowerCase()
        return (_, raw) => (String(raw).toLowerCase().includes(needle) ? result : null)
      }
      case 'colorScale': {
        const { minColor, maxColor } = format
        if (!minColor || !maxColor || max - min <= 0) return null
        return n =>
          Number.isNaN(n) ? null : { backgroundColor: interpolateColor(minColor, maxColor, (n - min) / (max - min)) }
      }
      case 'topN': {
        const limit = rankLimit(format, true)
        return limit === undefined ? null : numericRule(result, n => n >= limit && valueSet.has(n))
      }
      case 'bottomN': {
        const limit = rankLimit(format, false)
        return limit === undefined ? null : numericRule(result, n => n <= limit && valueSet.has(n))
      }
      default:
        return null
    }
  }

  const rules = sorted.map(toRule).filter((r): r is Rule => r !== null)

  return (cellValue: any) => {
    const numeric = parseFloat(cellValue)
    for (const rule of rules) {
      const result = rule(numeric, cellValue)
      if (result) return result
    }
    return null
  }
}
