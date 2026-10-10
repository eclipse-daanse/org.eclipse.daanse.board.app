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

/**
 * Which boards and widgets read from a data source.
 *
 * Asked before changing one and before deleting one: a source that five
 * widgets on two boards depend on is a different thing to edit than one
 * nothing points at yet. The count is also what tells a source apart in
 * the tree, where the names alone often do not.
 *
 * Counted rather than kept: widgets live in one store per page, and a
 * widget names its source in its own configuration, so the answer is a
 * walk over the pages. There are tens of them, not thousands, and the
 * walk happens when the view asks - the alternative would be a second
 * bookkeeping to keep in step with the first.
 */
import { inject } from 'vue'
import {
  identifier as PAGE_REPOSITORY,
  type PageRegistryI,
} from 'org.eclipse.daanse.board.app.lib.api.page'

export interface DatasourceUsage {
  /** Boards holding at least one widget that reads from the source. */
  boards: number
  /** Widgets reading from it, across all boards. */
  widgets: number
}

const NONE: DatasourceUsage = { boards: 0, widgets: 0 }

export function useDatasourceUsage() {
  const pages = inject<PageRegistryI>(PAGE_REPOSITORY)

  /** Every source that is read from, with how much reads from it. */
  function usageByDatasource(): Record<string, DatasourceUsage> {
    const found: Record<string, DatasourceUsage> = {}
    if (!pages) return found

    for (const pageId of pages.getAllPageIds()) {
      const onThisBoard = new Set<string>()
      for (const widget of pages.getPage(pageId)?.widgets?.toArray() ?? []) {
        const id = widget.datasource?.uid
        if (!id) continue
        const held = (found[id] ??= { boards: 0, widgets: 0 })
        held.widgets++
        onThisBoard.add(id)
      }
      for (const id of onThisBoard) found[id].boards++
    }
    return found
  }

  function usageOf(datasourceId: string): DatasourceUsage {
    return usageByDatasource()[datasourceId] ?? NONE
  }

  /**
   * "2 Boards · 5 Widgets", or nothing at all.
   *
   * A source nothing reads from says so in its own words elsewhere; here
   * an empty string keeps the row quiet rather than printing a zero.
   */
  function usageLabel(usage: DatasourceUsage): string {
    if (!usage.widgets) return ''
    const boards = `${usage.boards} ${usage.boards === 1 ? 'Board' : 'Boards'}`
    const widgets = `${usage.widgets} ${usage.widgets === 1 ? 'Widget' : 'Widgets'}`
    return `${boards} · ${widgets}`
  }

  return { usageByDatasource, usageOf, usageLabel }
}
