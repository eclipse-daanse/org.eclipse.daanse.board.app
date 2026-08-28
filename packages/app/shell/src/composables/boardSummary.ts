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
 * What a board card shows, derived the same way whether the board is live in
 * the app or still sitting in a stored state - so a board looks like itself
 * in the launcher and in the storage view.
 */
export interface BoardSummary {
  id: string
  name: string
  description: string
  /** Layout items as stored, for the floorplan. */
  items: Array<{ id?: string; x?: number; y?: number; width?: number; height?: number }>
  /** Widget type per layout id, for colouring the floorplan. */
  typeById: Record<string, string>
  widgetCount: number
  sourceCount: number
  kinds: string[]
}

interface WidgetLike {
  uid?: string
  type?: string
  config?: { datasourceId?: string }
}

/** Widget type as a short label: 'ui.vue.widget.table.pivot' reads as 'pivot'. */
export function shortKind(type: string): string {
  const parts = type.split('.').filter(Boolean)
  return (parts[parts.length - 1] ?? type).replace(/widget$/i, '') || type
}

export function summarizeBoard(
  id: string,
  page: { name?: string; description?: string } | undefined,
  layout: unknown,
  widgets: unknown,
): BoardSummary {
  const items = (Array.isArray(layout) ? layout : []) as BoardSummary['items']
  const list = (Array.isArray(widgets) ? widgets : []) as WidgetLike[]

  const typeById: Record<string, string> = {}
  for (const widget of list) {
    if (widget?.uid && widget.type) typeById[widget.uid] = widget.type
  }

  const sources = new Set(
    list.map((w) => w?.config?.datasourceId).filter((d): d is string => Boolean(d)),
  )
  const kinds = [...new Set(list.map((w) => shortKind(w?.type ?? '')).filter(Boolean))]

  return {
    id,
    name: page?.name || 'Unbenanntes Board',
    description: page?.description ?? '',
    items,
    typeById,
    widgetCount: list.length,
    sourceCount: sources.size,
    kinds,
  }
}
