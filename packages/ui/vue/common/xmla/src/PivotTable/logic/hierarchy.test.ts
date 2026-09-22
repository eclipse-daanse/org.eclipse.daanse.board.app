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
import { analyzeAxis, continuesPrevious, levelStyleMap, memberView } from './hierarchy'
import type { AxisEntry, PivotMember } from './types'

const m = (UName: string, LNum: number, children = 0, parent?: string): PivotMember => ({
  UName,
  Caption: UName.slice(1, -1),
  LNum: String(LNum),
  DisplayInfo: children,
  PARENT_UNIQUE_NAME: parent,
})

const all = m('[All]', 0, 2)
const a = m('[A]', 1, 3, '[All]')
const a1 = m('[A1]', 2, 0, '[A]')
const b = m('[B]', 1, 4, '[All]')
const x = m('[x]', 0, 0)
const y = m('[y]', 0, 0)

describe('analyzeAxis', () => {
  it('collects level bounds and parents per tuple position', () => {
    const info = analyzeAxis([[a, x], [a1, x], [b, y]])
    expect(info.positions).toBe(2)
    expect(info.minLevels).toEqual([1, 0])
    expect(info.maxLevels).toEqual([2, 0])
    // levels 1..2 on the first position, level 0 only on the second
    expect(info.levelCounts).toEqual([2, 1])
    expect([...info.parentNames[0]].sort()).toEqual(['[A]', '[All]'])
    expect(info.parentNames[1].size).toBe(0)
  })

  it('counts the root level when it is shown', () => {
    expect(analyzeAxis([[all], [a]]).levelCounts).toEqual([2])
  })

  it('skips property entries', () => {
    const info = analyzeAxis([{ isProperty: true, PROPERTY_NAME: 'Key' }, [a]])
    expect(info.positions).toBe(1)
    expect(info.levelCounts).toEqual([1])
  })

  it('gives positions without levels a single level', () => {
    const info = analyzeAxis([[{ UName: '[m]' }]])
    expect(info.levelCounts).toEqual([1])
  })
})

describe('continuesPrevious', () => {
  it('merges a member repeated under the same prefix', () => {
    const entries: AxisEntry[] = [[a, x], [a, y]]
    expect(continuesPrevious(entries, 1, 0)).toBe(true)
    expect(continuesPrevious(entries, 1, 1)).toBe(false)
  })

  it('does not merge an inner member under a different outer member', () => {
    const entries: AxisEntry[] = [[a, x], [b, x]]
    expect(continuesPrevious(entries, 1, 1)).toBe(false)
  })

  it('never merges the first entry or across a property entry', () => {
    const entries: AxisEntry[] = [[a], { isProperty: true, PROPERTY_NAME: 'Key' }, [a]]
    expect(continuesPrevious(entries, 0, 0)).toBe(false)
    expect(continuesPrevious(entries, 2, 0)).toBe(false)
  })
})

describe('memberView', () => {
  const styles = levelStyleMap([
    { level: 1, backgroundColor: '#eee', textColor: '#111', fontWeight: 700 },
    { level: 1, backgroundColor: '#000', textColor: '#000', fontWeight: 100 },
  ])

  it('offers expand when children are not on the axis', () => {
    const entries: AxisEntry[] = [[a], [b]]
    const view = memberView(entries, 0, 0, analyzeAxis(entries), new Set(), styles)!
    expect(view.toggle).toBe('expand')
    expect(view.caption).toBe('A')
    expect(view.indent).toBe(0)
    // the first style defined for a level wins
    expect(view.levelStyle?.backgroundColor).toBe('#eee')
  })

  it('offers collapse for an expanded member whose children are shown', () => {
    const entries: AxisEntry[] = [[a], [a1], [b]]
    const view = memberView(entries, 0, 0, analyzeAxis(entries), new Set(['[A]']), styles)!
    expect(view.toggle).toBe('collapse')
    expect(memberView(entries, 1, 0, analyzeAxis(entries), new Set(['[A]']), styles)!.indent).toBe(1)
  })

  it('offers nothing when children are shown but the member is not expanded (drilldown)', () => {
    const entries: AxisEntry[] = [[a], [a1], [b]]
    expect(memberView(entries, 0, 0, analyzeAxis(entries), new Set(), styles)!.toggle).toBeNull()
  })

  it('offers expand on the last entry even if another member names it as parent', () => {
    const entries: AxisEntry[] = [[a1], [a]]
    expect(memberView(entries, 1, 0, analyzeAxis(entries), new Set(), styles)!.toggle).toBe('expand')
  })

  it('offers nothing for leaves', () => {
    const entries: AxisEntry[] = [[a1]]
    expect(memberView(entries, 0, 0, analyzeAxis(entries), new Set(), styles)!.toggle).toBeNull()
  })

  it('hides caption and toggle of a merged member', () => {
    const entries: AxisEntry[] = [[a, x], [a, y]]
    const view = memberView(entries, 1, 0, analyzeAxis(entries), new Set(), styles)!
    expect(view.merged).toBe(true)
    expect(view.caption).toBe('')
    expect(view.toggle).toBeNull()
  })

  it('returns null for property entries and missing members', () => {
    const entries: AxisEntry[] = [{ isProperty: true, PROPERTY_NAME: 'Key' }, [a]]
    const info = analyzeAxis(entries)
    expect(memberView(entries, 0, 0, info, new Set(), styles)).toBeNull()
    expect(memberView(entries, 1, 3, info, new Set(), styles)).toBeNull()
  })
})
