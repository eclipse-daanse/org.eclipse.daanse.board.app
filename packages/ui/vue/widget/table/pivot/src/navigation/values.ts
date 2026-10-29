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

import {
  hasChildren,
  isAdditive,
  positionsOf,
  sliceValue,
  type Cellset,
  type SliceValue,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'
import type { ScaleNormalization } from './store'

/**
 * The value of one member of a navigation axis, the other one not yet
 * chosen: the slice at the other axis's total where it has one, else the
 * slices at its leaves added up - marked as such, and only for a measure
 * that adds up.
 */
export function memberValue(
  cellset: Cellset,
  axis: 2 | 3,
  index: number,
  fixed: { axis2?: number; axis3?: number },
  measure?: string,
): SliceValue {
  const other: 2 | 3 = axis === 2 ? 3 : 2
  const otherFixed = other === 2 ? fixed.axis2 : fixed.axis3
  const at = (otherIndex: number) =>
    sliceValue(
      cellset,
      axis === 2 ? { axis2: index, axis3: otherIndex } : { axis2: otherIndex, axis3: index },
      measure,
    )

  if (cellset.axes.length <= other) return at(-1)
  if (otherFixed !== undefined && otherFixed >= 0) return at(otherFixed)

  const positions = positionsOf(cellset, other)
  if (positions.length === 1) return at(0)
  // The other axis's own total: its one member without a parent on the axis.
  const keys = new Set(positions.flatMap(p => p.members.map(m => m.uniqueName)))
  const tops = positions.filter(p => p.members.every(m => !m.parentUniqueName || !keys.has(m.parentUniqueName)))
  if (tops.length === 1) return at(tops[0].index)

  if (!isAdditive(cellset, measure)) return { value: null, kind: 'none' }
  let sum = 0
  let any = false
  for (const leaf of positions.filter(p => !hasChildren(positions, p))) {
    const value = at(leaf.index).value
    if (value === null) continue
    sum += value
    any = true
  }
  return any ? { value: sum, kind: 'sum' } : { value: null, kind: 'none' }
}

export interface ScaledValue {
  /** -1 .. 1; null where there is nothing to colour. */
  t: number | null
}

/**
 * Places a value on the colour scale. Values all of one sign run from the
 * smallest to the largest; with negative ones and a diverging scale, zero
 * is the middle and the larger magnitude sets the reach either way.
 */
export function scaler(values: (number | null)[], diverging: boolean) {
  const numbers = values.filter((v): v is number => v !== null && Number.isFinite(v))
  if (!numbers.length) return () => null
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  if (diverging && min < 0) {
    const reach = Math.max(Math.abs(min), Math.abs(max)) || 1
    return (value: number | null) => (value === null ? null : value / reach)
  }
  const span = max - min
  return (value: number | null) => (value === null ? null : span === 0 ? 1 : (value - min) / span)
}

/**
 * A matrix of values scaled as the normalization says: against all of
 * them, or each against its own row or its own column.
 */
export function scaleMatrix(
  matrix: (number | null)[][],
  normalization: ScaleNormalization,
  diverging: boolean,
): (number | null)[][] {
  if (normalization === 'row') {
    return matrix.map(row => row.map(scaler(row, diverging)))
  }
  if (normalization === 'column') {
    const width = Math.max(0, ...matrix.map(r => r.length))
    const scales = Array.from({ length: width }, (_, c) => scaler(matrix.map(r => r[c] ?? null), diverging))
    return matrix.map(row => row.map((v, c) => scales[c](v)))
  }
  const scale = scaler(matrix.flat(), diverging)
  return matrix.map(row => row.map(scale))
}

/**
 * The colour for a scaled value, from the theme's own tokens: the accent
 * for positive, the error colour for negative, the surface for nothing.
 */
export function heatColor(t: number | null): string {
  if (t === null) return 'transparent'
  const share = Math.round(Math.min(1, Math.abs(t)) * 70 + 8)
  const tone = t < 0 ? 'var(--color-err)' : 'var(--color-accent)'
  return `color-mix(in srgb, ${tone} ${share}%, var(--color-raised))`
}

const numberFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 })
const percentFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 1, signDisplay: 'exceptZero' })
const signedFormat = new Intl.NumberFormat(undefined, { maximumFractionDigits: 2, signDisplay: 'exceptZero' })

/** A number for display; empty for nothing, never NaN. */
export function formatNumber(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '' : numberFormat.format(value)
}

export function formatSigned(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '' : signedFormat.format(value)
}

export function formatPercent(value: number | null): string {
  return value === null || !Number.isFinite(value) ? '' : `${percentFormat.format(value)} %`
}

/** A slice value as shown: Σ marks a sum made here rather than a total from the server. */
export function formatSliceValue(value: SliceValue): string {
  if (value.value === null) return '–'
  return value.kind === 'sum' ? `Σ ${formatNumber(value.value)}` : formatNumber(value.value)
}
