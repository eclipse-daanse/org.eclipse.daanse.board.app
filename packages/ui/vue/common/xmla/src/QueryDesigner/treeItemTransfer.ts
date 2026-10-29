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

/*
 * A hierarchy or a measure on its way from the cube explorer to the query
 * designer, carried in the drag's own data as well.
 *
 * The designer's areas are vuedraggable lists, and SortableJS takes a drop
 * only once it has seen the drag start: it marks that a tick after
 * `dragstart` (a timer), and until then ignores every `dragover`. A drag
 * that is over within that tick - the browser hands out `dragstart`,
 * `dragover`, `drop` and `dragend` in one go when the pointer is moved
 * there at once, as a test driver or a quick flick does - reaches the area
 * and is dropped, yet SortableJS lets it fall. The designer then takes the
 * item from here instead. A drag SortableJS did see is left to it.
 */

import { TreeItemTypesEnum } from '../MetadataTree/TreeViewItems'

export const TREE_ITEM_TYPE = 'application/x-daanse-xmla-tree-item'

/** What of a tree row the designer keeps: what it would get from vuedraggable. */
export interface TransferredTreeItem {
  id: string
  caption: string
  type: TreeItemTypesEnum.Hierarchy | TreeItemTypesEnum.Measure
  originalItem: Record<string, unknown>
}

const CARRIED = [TreeItemTypesEnum.Hierarchy, TreeItemTypesEnum.Measure]

export function writeTreeItem(dataTransfer: Pick<DataTransfer, 'setData'> | null | undefined, node: any): void {
  if (!dataTransfer || !CARRIED.includes(node?.type)) return
  const item: TransferredTreeItem = {
    id: node.id,
    caption: node.caption,
    type: node.type,
    originalItem: node.originalItem,
  }
  try {
    dataTransfer.setData(TREE_ITEM_TYPE, JSON.stringify(item))
  } catch {
    // A row that cannot be written out is left to SortableJS alone.
  }
}

export function carriesTreeItem(dataTransfer: Pick<DataTransfer, 'types'> | null | undefined): boolean {
  return !!dataTransfer && Array.from(dataTransfer.types ?? []).includes(TREE_ITEM_TYPE)
}

export function readTreeItem(dataTransfer: Pick<DataTransfer, 'getData'> | null | undefined): TransferredTreeItem | null {
  const text = dataTransfer?.getData(TREE_ITEM_TYPE)
  if (!text) return null
  try {
    const item = JSON.parse(text)
    return CARRIED.includes(item?.type) && item.originalItem ? item : null
  } catch {
    return null
  }
}
