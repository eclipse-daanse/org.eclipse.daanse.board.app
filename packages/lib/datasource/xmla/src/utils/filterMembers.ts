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

interface FilterItem {
  UName: string
  LNum: string | number
}

/** An axis filter as the filter dialog leaves it. */
export interface AxisFilter {
  multipleChoise?: boolean
  selectAll?: boolean
  selectedItem?: FilterItem
  selectedItems?: FilterItem[]
  deselectedItems?: FilterItem[]
}

function byLevel(items: FilterItem[]): FilterItem[][] {
  const levels = [] as FilterItem[][]
  for (const item of items) (levels[Number(item.LNum)] ??= []).push(item)
  return levels
}

/**
 * The members an axis filter lets through, before VisualTotals: the ones
 * selected with their ancestors and descendants, less the subtrees taken
 * out - level by level, top down, so a child picked again under a parent
 * taken out comes back.
 *
 * "Select all" starts from the whole hierarchy. The client this code came
 * from fetched the root members for that start, and the call did not
 * survive the move here: the exceptions became the whole set, and "all but
 * F" let through F's subtree alone.
 */
export function filterMembers(filter: AxisFilter, hierarchyUniqueName: string): string {
  const selected = filter.multipleChoise
    ? filter.selectedItems ?? []
    : [filter.selectedItem].filter((item): item is FilterItem => !!item)
  const selectedLevels = byLevel(selected)
  const deselectedLevels = byLevel(filter.deselectedItems ?? [])

  let members = filter.selectAll ? `AddCalculatedMembers({${hierarchyUniqueName}.Members})` : ''
  const depth = Math.max(selectedLevels.length, deselectedLevels.length)
  for (let i = 0; i < depth; i++) {
    if (selectedLevels[i]) {
      const added = selectedLevels[i].map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(',')
      members = members ? `Union({${added}}, {${members}})` : `{${added}}`
    }
    if (deselectedLevels[i]) {
      const removed = deselectedLevels[i].map(e => `Descendants(${e.UName})`).join(',')
      members = members ? `Except({${members}}, {${removed}})` : `{${removed}}`
    }
  }

  if (filter.selectAll) return members
  const picked = selected.map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(',')
  return `Intersect({${picked}}, ${members})`
}
