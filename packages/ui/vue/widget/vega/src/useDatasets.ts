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
 * The datasets of a chart that come from sources other than the widget's
 * own (#1286), loaded and followed.
 *
 * One subscription per source, however many datasets read it; a change of
 * the source loads those datasets again, and an answer that arrives after
 * a newer request was made is dropped. The widget's own source goes
 * through useDatasourceRepository instead, which also applies what the
 * frame selects of it (#1216).
 */

import { onUnmounted, watch } from 'vue'
import { requestOf, rowsOf, type DatasetSource } from './datasets'
import type { Row } from './sample'

/** A data source as far as the chart uses it. */
export interface ChartStore {
  getData(type: string, options?: unknown): Promise<unknown>
  subscribe?(subscriber: () => void): (() => void) | void
  unsubscribe?(subscriber: () => void): void
}

export function useDatasets(options: {
  /** The datasets with a source of their own. */
  sources: () => DatasetSource[]
  resolve: (datasourceId: string) => ChartStore | undefined
  /** Called with the rows of a dataset each time they arrive. */
  onRows: (name: string, rows: Row[]) => void
}) {
  const subscriptions = new Map<string, { store: ChartStore; handler: () => void; off?: () => void }>()
  const asked = new Map<string, number>()
  let current: DatasetSource[] = []

  const load = async (source: DatasetSource) => {
    const store = options.resolve(source.datasourceId)
    if (!store) return
    const mine = (asked.get(source.name) ?? 0) + 1
    asked.set(source.name, mine)
    try {
      const answer = await store.getData(requestOf(source.shape))
      if (asked.get(source.name) !== mine) return
      options.onRows(source.name, rowsOf(answer, source.shape, source.path))
    } catch {
      if (asked.get(source.name) === mine) options.onRows(source.name, [])
    }
  }

  const reloadFrom = (datasourceId: string) => {
    for (const source of current) if (source.datasourceId === datasourceId) void load(source)
  }

  const unsubscribe = (datasourceId: string) => {
    const held = subscriptions.get(datasourceId)
    if (!held) return
    if (held.off) held.off()
    else held.store.unsubscribe?.(held.handler)
    subscriptions.delete(datasourceId)
  }

  const follow = (sources: DatasetSource[]) => {
    current = sources
    const wanted = new Set(sources.map((source) => source.datasourceId))
    for (const id of [...subscriptions.keys()]) if (!wanted.has(id)) unsubscribe(id)
    for (const id of wanted) {
      if (subscriptions.has(id)) continue
      const store = options.resolve(id)
      if (!store) continue
      const handler = () => reloadFrom(id)
      const off = store.subscribe?.(handler)
      subscriptions.set(id, { store, handler, off: typeof off === 'function' ? off : undefined })
    }
    for (const source of sources) void load(source)
  }

  /* By what decides the loading, so an unrelated setting loads nothing. */
  watch(() => JSON.stringify(options.sources()), () => follow(options.sources()), { immediate: true })

  onUnmounted(() => {
    for (const id of [...subscriptions.keys()]) unsubscribe(id)
  })

  /** Loads every dataset again - the refresh action (#1290). */
  return { reload: () => { for (const source of current) void load(source) } }
}
