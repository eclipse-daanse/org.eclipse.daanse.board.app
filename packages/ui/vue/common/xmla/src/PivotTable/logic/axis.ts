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

import { type AxisEntry, isProperty } from './types'

// Pixel geometry of one axis: starts[i] is where item i begins, starts[count] the total
export interface AxisLayout {
  count: number
  starts: Float64Array
  total: number
}

export const buildAxis = (count: number, sizeOf: (index: number) => number): AxisLayout => {
  const starts = new Float64Array(count + 1)
  for (let i = 0; i < count; i++) starts[i + 1] = starts[i] + sizeOf(i)
  return { count, starts, total: starts[count] }
}

export const sizeAt = (axis: AxisLayout, index: number) => axis.starts[index + 1] - axis.starts[index]

// Index of the item covering `offset`, clamped to the axis
export const indexAt = (axis: AxisLayout, offset: number) => {
  if (axis.count === 0) return -1
  let lo = 0
  let hi = axis.count - 1
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1
    if (axis.starts[mid] <= offset) lo = mid
    else hi = mid - 1
  }
  return lo
}

// Inclusive range of items intersecting [from, from + length), widened by `overscan` pixels
export const visibleRange = (axis: AxisLayout, from: number, length: number, overscan = 0) => {
  if (axis.count === 0 || length <= 0) return { first: 0, last: -1 }
  return {
    first: indexAt(axis, Math.max(0, from - overscan)),
    last: indexAt(axis, from + length + overscan - 0.5),
  }
}

// Stable identity of an axis position across expand/collapse, used to keep
// user-resized sizes attached to the same header
export const entryKey = (entry: AxisEntry | undefined, index: number) => {
  if (!entry) return `#${index}`
  if (isProperty(entry)) return `p:${entry.HIERARCHY_UNIQUE_NAME ?? ''}.${entry.PROPERTY_NAME}`
  return entry.map(m => m?.UName).join('\u0001')
}
