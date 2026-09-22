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
import { compileConditionalFormats, interpolateColor } from './conditionalFormat'
import type { ConditionalFormat } from './types'

const rule = (conditionType: string, extra: Partial<ConditionalFormat> = {}): ConditionalFormat => ({
  id: conditionType,
  conditionType,
  value1: 0,
  backgroundColor: '#bg',
  textColor: '#fg',
  priority: 0,
  ...extra,
})

const hit = { backgroundColor: '#bg', textColor: '#fg', fontWeight: undefined }
const cells = [[{ Value: 5 }, { Value: '1' }], [{ Value: 3 }, { Value: 3 }, { Value: 'text' }, { Value: 9 }]]

describe('compileConditionalFormats', () => {
  it('matches nothing without rules', () => {
    expect(compileConditionalFormats([], cells)(5)).toBeNull()
    expect(compileConditionalFormats(undefined, cells)(5)).toBeNull()
  })

  it.each([
    ['greaterThan', { value1: 4 }, 5, 4],
    ['lessThan', { value1: 4 }, 3, 4],
    ['equals', { value1: '3' }, '3', 4],
    ['notEquals', { value1: 3 }, 4, 3],
    ['between', { value1: 10, value2: 2 }, 2, 11],
  ])('%s', (type, extra, matching, notMatching) => {
    const evaluate = compileConditionalFormats([rule(type, extra)], cells)
    expect(evaluate(matching)).toEqual(hit)
    expect(evaluate(notMatching)).toBeNull()
    expect(evaluate('not a number')).toBeNull()
  })

  it('between needs a second value', () => {
    expect(compileConditionalFormats([rule('between', { value1: 1, value2: undefined })], cells)(1)).toBeNull()
  })

  it('contains compares text case-insensitively, numbers included', () => {
    const evaluate = compileConditionalFormats([rule('contains', { value1: 'EX' })], cells)
    expect(evaluate('Text')).toEqual(hit)
    expect(evaluate(123)).toBeNull()
    expect(compileConditionalFormats([rule('contains', { value1: '2' })], cells)(123)).toEqual(hit)
  })

  it('colorScale interpolates between the table minimum and maximum', () => {
    const evaluate = compileConditionalFormats(
      [rule('colorScale', { minColor: '#000000', maxColor: '#ff8000' })],
      cells,
    )
    expect(evaluate(1)).toEqual({ backgroundColor: '#000000' })
    expect(evaluate(9)).toEqual({ backgroundColor: '#ff8000' })
    expect(evaluate(5)).toEqual({ backgroundColor: '#804000' })
  })

  it('colorScale is skipped for a flat table so later rules apply', () => {
    const evaluate = compileConditionalFormats(
      [rule('colorScale', { minColor: '#000000', maxColor: '#ffffff' }), rule('greaterThan', { value1: 0, priority: 1 })],
      [[{ Value: 2 }, { Value: 2 }]],
    )
    expect(evaluate(2)).toEqual(hit)
  })

  it('topN keeps ties with the N-th value', () => {
    // ranking: 9, 5, 3, 3, 1
    const evaluate = compileConditionalFormats([rule('topN', { value1: 3 })], cells)
    expect(evaluate(9)).toEqual(hit)
    expect(evaluate(3)).toEqual(hit)
    expect(evaluate(1)).toBeNull()
    // a value above the limit that is not in the table does not match
    expect(evaluate(7)).toBeNull()
  })

  it('bottomN mirrors topN', () => {
    const evaluate = compileConditionalFormats([rule('bottomN', { value1: 2 })], cells)
    expect(evaluate(1)).toEqual(hit)
    expect(evaluate(3)).toEqual(hit)
    expect(evaluate(5)).toBeNull()
  })

  it('topN follows Array.slice for odd counts', () => {
    expect(compileConditionalFormats([rule('topN', { value1: 0 })], cells)(9)).toBeNull()
    expect(compileConditionalFormats([rule('topN', { value1: 'x' })], cells)(9)).toBeNull()
    // slice(0, -1): everything but the smallest
    const negative = compileConditionalFormats([rule('topN', { value1: -1 })], cells)
    expect(negative(3)).toEqual(hit)
    expect(negative(1)).toBeNull()
  })

  it('applies the rule with the lowest priority number first', () => {
    const evaluate = compileConditionalFormats(
      [
        rule('greaterThan', { value1: 0, priority: 2, backgroundColor: '#late' }),
        rule('greaterThan', { value1: 0, priority: 1, backgroundColor: '#early' }),
      ],
      cells,
    )
    expect(evaluate(1)?.backgroundColor).toBe('#early')
  })

  it('ignores unknown condition types', () => {
    expect(compileConditionalFormats([rule('sometimes')], cells)(1)).toBeNull()
  })
})

describe('interpolateColor', () => {
  it('blends each channel', () => {
    expect(interpolateColor('#000000', '#ffffff', 0.5)).toBe('#808080')
    expect(interpolateColor('#102030', '#102030', 0.3)).toBe('#102030')
  })
})
