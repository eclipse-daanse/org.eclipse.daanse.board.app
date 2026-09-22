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

import { type AxisEntry, type LevelStyle, type PivotMember, isProperty } from './types'

// Low 16 bits of DISPLAY_INFO hold the member's child count
const MDDISPINFO_CHILD_COUNT = 65535

// Per hierarchy position (tuple index) of an axis
export interface AxisHierarchies {
  // number of hierarchy positions, the length of the longest tuple
  positions: number
  minLevels: number[]
  maxLevels: number[]
  // levels shown at a position, drives header width (rows) or height (columns)
  levelCounts: number[]
  // UNames that are the parent of some member at that position
  parentNames: Set<string>[]
}

export const analyzeAxis = (entries: AxisEntry[]): AxisHierarchies => {
  const minLevels: number[] = []
  const maxLevels: number[] = []
  const parentNames: Set<string>[] = []
  let positions = 0

  for (const entry of entries) {
    if (!entry || isProperty(entry) || !Array.isArray(entry)) continue
    if (entry.length > positions) positions = entry.length
    for (let j = 0; j < entry.length; j++) {
      const member = entry[j]
      if (!member) continue
      if (member.PARENT_UNIQUE_NAME) (parentNames[j] ??= new Set()).add(member.PARENT_UNIQUE_NAME)
      if (member.LNum === undefined) continue
      const level = parseInt(String(member.LNum))
      if (minLevels[j] === undefined || minLevels[j] >= level) minLevels[j] = level
      if (maxLevels[j] === undefined || maxLevels[j] <= level) maxLevels[j] = level
    }
  }

  const levelCounts: number[] = []
  for (let j = 0; j < positions; j++) {
    parentNames[j] ??= new Set()
    if (maxLevels[j] === undefined) levelCounts[j] = 1
    else levelCounts[j] = Math.max(1, minLevels[j] === 0 ? maxLevels[j] + 1 : maxLevels[j])
  }

  return { positions, minLevels, maxLevels, levelCounts, parentNames }
}

export type MemberToggle = 'expand' | 'collapse' | null

// Everything a header needs to draw the member at axis position i, tuple index j
export interface MemberView {
  member: PivotMember
  // same member as in the previous tuple: drawn merged, without caption or toggle
  merged: boolean
  caption: string
  // dashed placeholders in front of the caption, one per level below this one
  indent: number
  toggle: MemberToggle
  levelStyle: LevelStyle | null
}

// A member continues the one before it only if the whole tuple prefix up to it
// is the same, otherwise [A, x], [B, x] would draw x once across A and B
export const continuesPrevious = (entries: AxisEntry[], i: number, j: number) => {
  const current = entries[i]
  const previous = entries[i - 1]
  if (!Array.isArray(current) || !Array.isArray(previous)) return false
  for (let k = 0; k <= j; k++) {
    if (!current[k] || !previous[k] || current[k].UName !== previous[k].UName) return false
  }
  return true
}

export const childCount = (member: PivotMember) => Number(member.DisplayInfo) & MDDISPINFO_CHILD_COUNT

export const memberView = (
  entries: AxisEntry[],
  i: number,
  j: number,
  hierarchies: AxisHierarchies,
  expanded: Set<string>,
  levelStyles: Map<number, LevelStyle>,
): MemberView | null => {
  const entry = entries[i]
  if (!Array.isArray(entry)) return null
  const member = entry[j]
  if (!member) return null

  const merged = continuesPrevious(entries, i, j)
  const level = member.LNum === undefined ? NaN : parseInt(String(member.LNum))

  let toggle: MemberToggle = null
  if (!merged && childCount(member)) {
    const childrenShown = i + 1 !== entries.length && hierarchies.parentNames[j]?.has(member.UName)
    if (!childrenShown) toggle = 'expand'
    else if (expanded.has(member.UName)) toggle = 'collapse'
  }

  return {
    member,
    merged,
    caption: merged ? '' : (member.Caption ?? ''),
    indent: Number.isNaN(level) ? 0 : Math.max(0, level - (hierarchies.minLevels[j] ?? 0)),
    toggle,
    levelStyle: Number.isNaN(level) ? null : (levelStyles.get(level) ?? null),
  }
}

export const levelStyleMap = (styles: LevelStyle[] | undefined) => {
  const map = new Map<number, LevelStyle>()
  // first definition of a level wins, as with Array.find
  for (const s of styles ?? []) if (!map.has(Number(s.level))) map.set(Number(s.level), s)
  return map
}
