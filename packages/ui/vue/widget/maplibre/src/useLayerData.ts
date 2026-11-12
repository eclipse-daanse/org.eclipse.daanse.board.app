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
 * What the data layers of the map draw: the things of the OGC STA sources
 * with their latest values, and the GeoJSON documents.
 *
 * Each OGC STA source learns which things this map shows before it loads
 * anything - the name patterns of all layers on it as a filter on /Things -
 * so a source loads those things instead of its whole catalogue (#1250).
 * A layer without a pattern shows nothing and asks for nothing.
 */

import { computed, onUnmounted, ref, watch } from 'vue'
import { thingFilterOfNames, type LatestObservation } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta'
import { datastreamIdsOf, layerShows, type ThingLayerLike, type ThingLike } from './things'

/** A source as far as the map uses it - an OgcStaStore, read by duck type. */
export interface ThingStore {
  getData(type: string, options?: unknown): Promise<unknown>
  subscribe?(subscriber: () => void): (() => void) | void
  setThingScope?(key: string, filter: string | null | undefined): void
  latestObservations?(datastreamIds: string[]): Promise<Map<string, LatestObservation>>
}

/** What of a layer decides what is loaded. */
export interface LoadedThingLayer extends ThingLayerLike {
  id?: string
  datasourceId?: string
  visible?: boolean
  refreshSeconds?: number
}

const listOf = <T>(held: Iterable<T> | null | undefined): T[] => (held ? Array.from(held) : [])
const patternsOf = (layer: LoadedThingLayer) => listOf(layer.thingNames).map((n) => String(n ?? '').trim()).filter(Boolean)

/**
 * Loads the things and latest values of the OGC STA layers, and follows
 * every change of the layers that decides what is loaded.
 */
export function useThingData(options: {
  layers: () => LoadedThingLayer[]
  fallbackSource: () => string | undefined
  resolve: (datasourceId: string) => ThingStore | undefined
  scopeKey: () => string
}) {
  const things = new Map<string, ThingLike[]>()
  const latest = new Map<string, Map<string, LatestObservation>>()
  /** Counted up when anything loaded changes; the map redraws on it. */
  const revision = ref(0)
  const subscriptions = new Map<string, () => void>()
  const timers = new Map<string, ReturnType<typeof setInterval>>()
  let scoped = new Set<string>()
  let generation = 0

  const sourceOf = (layer: LoadedThingLayer) => String(layer.datasourceId || options.fallbackSource() || '')
  const active = () => options.layers().filter((layer) => layer.visible !== false && !!layer.id && patternsOf(layer).length && sourceOf(layer))

  const key = computed(() =>
    JSON.stringify([
      options.fallbackSource(),
      active().map((l) => [l.id, sourceOf(l), patternsOf(l), l.colorSuffix, l.heightSuffix, l.refreshSeconds]),
    ]),
  )

  async function loadLatest(layer: LoadedThingLayer, run: number) {
    const store = options.resolve(sourceOf(layer))
    const shown = (things.get(sourceOf(layer)) ?? []).filter((thing) => layerShows(layer, thing))
    const ids = datastreamIdsOf(layer, shown)
    if (!store?.latestObservations || ids.length === 0) return
    try {
      const values = await store.latestObservations(ids)
      if (run !== generation) return
      latest.set(String(layer.id), values)
      revision.value++
    } catch {
      // A source that cannot answer leaves the things in their fill colour.
    }
  }

  async function loadThings(datasourceId: string, run: number) {
    const store = options.resolve(datasourceId)
    if (!store) return
    try {
      const answer = (await store.getData('OGCSTAData')) as { things?: ThingLike[] } | undefined
      if (run !== generation) return
      things.set(datasourceId, answer?.things ?? [])
      revision.value++
      await Promise.all(active().filter((l) => sourceOf(l) === datasourceId).map((l) => loadLatest(l, run)))
    } catch {
      // Left as it was; the next notification of the source tries again.
    }
  }

  function release() {
    for (const unsubscribe of subscriptions.values()) unsubscribe()
    subscriptions.clear()
    for (const timer of timers.values()) clearInterval(timer)
    timers.clear()
  }

  function reconcile() {
    const run = ++generation
    release()
    const layers = active()
    const bySource = new Map<string, LoadedThingLayer[]>()
    for (const layer of layers) bySource.set(sourceOf(layer), [...(bySource.get(sourceOf(layer)) ?? []), layer])

    for (const id of scoped) {
      if (!bySource.has(id)) options.resolve(id)?.setThingScope?.(options.scopeKey(), undefined)
    }
    scoped = new Set(bySource.keys())
    for (const id of [...latest.keys()]) if (!layers.some((l) => l.id === id)) latest.delete(id)

    for (const [datasourceId, onSource] of bySource) {
      const store = options.resolve(datasourceId)
      if (!store) continue
      store.setThingScope?.(options.scopeKey(), thingFilterOfNames(onSource.flatMap(patternsOf)))
      const unsubscribe = store.subscribe?.(() => void loadThings(datasourceId, generation))
      if (typeof unsubscribe === 'function') subscriptions.set(datasourceId, unsubscribe)
      void loadThings(datasourceId, run)
      for (const layer of onSource) {
        const seconds = Number(layer.refreshSeconds ?? 0)
        if (seconds > 0) timers.set(String(layer.id), setInterval(() => void loadLatest(layer, generation), seconds * 1000))
      }
    }
    revision.value++
  }

  watch(key, reconcile, { immediate: true })

  onUnmounted(() => {
    generation++
    release()
    for (const id of scoped) options.resolve(id)?.setThingScope?.(options.scopeKey(), undefined)
    scoped.clear()
  })

  return {
    revision,
    thingsOf: (layer: LoadedThingLayer) => things.get(sourceOf(layer)) ?? [],
    latestOf: (layer: LoadedThingLayer) => latest.get(String(layer.id)) ?? new Map<string, LatestObservation>(),
  }
}

/** A GeoJSON layer as far as loading goes. */
export interface LoadedGeoJsonLayer {
  id?: string
  url?: string
  geoJson?: string
}

const EMPTY = { type: 'FeatureCollection', features: [] } as const

/** The documents of the GeoJSON layers: written in, or fetched once per address. */
export function useGeoJsonData(layers: () => LoadedGeoJsonLayer[], fetcher: typeof fetch = (...a) => fetch(...a)) {
  const fetched = new Map<string, unknown>()
  const revision = ref(0)

  const urls = computed(() => [
    ...new Set(layers().filter((l) => !String(l.geoJson ?? '').trim()).map((l) => String(l.url ?? '').trim()).filter(Boolean)),
  ])

  watch(
    urls,
    (wanted) => {
      for (const url of wanted) {
        if (fetched.has(url)) continue
        fetched.set(url, EMPTY)
        fetcher(url)
          .then((response) => (response.ok ? response.json() : EMPTY))
          .then((document) => {
            fetched.set(url, document)
            revision.value++
          })
          .catch(() => fetched.delete(url))
      }
    },
    { immediate: true },
  )

  function documentOf(layer: LoadedGeoJsonLayer): unknown {
    const written = String(layer.geoJson ?? '').trim()
    if (written) {
      try {
        return JSON.parse(written)
      } catch {
        return EMPTY
      }
    }
    return fetched.get(String(layer.url ?? '').trim()) ?? EMPTY
  }

  return { revision, documentOf }
}

/**
 * The answers of the data sources a model layer stands its models on (#1282),
 * as GeoJSON, read again whenever a source says it has news.
 */
export function useFeatureData(options: { ids: () => string[]; resolve: (datasourceId: string) => ThingStore | undefined }) {
  const answers = new Map<string, unknown>()
  const revision = ref(0)
  const subscriptions = new Map<string, () => void>()
  /* The last read asked of each source: an older answer that arrives after a newer one is dropped (#1299). */
  const asked = new Map<string, number>()
  let generation = 0

  async function load(id: string, run: number) {
    const mine = (asked.get(id) ?? 0) + 1
    asked.set(id, mine)
    try {
      const answer = await options.resolve(id)?.getData('geojson')
      if (run !== generation || asked.get(id) !== mine) return
      answers.set(id, answer)
      revision.value++
    } catch {
      // Left as it was; the next notification of the source tries again.
    }
  }

  watch(
    () => [...new Set(options.ids().filter(Boolean))].sort().join('|'),
    (key) => {
      const run = ++generation
      for (const unsubscribe of subscriptions.values()) unsubscribe()
      subscriptions.clear()
      const ids = key ? key.split('|') : []
      for (const id of [...answers.keys()]) if (!ids.includes(id)) answers.delete(id)
      for (const id of ids) {
        const unsubscribe = options.resolve(id)?.subscribe?.(() => void load(id, generation))
        if (typeof unsubscribe === 'function') subscriptions.set(id, unsubscribe)
        void load(id, run)
      }
      revision.value++
    },
    { immediate: true },
  )

  onUnmounted(() => {
    generation++
    for (const unsubscribe of subscriptions.values()) unsubscribe()
  })

  return { revision, answerOf: (id: string) => answers.get(id) }
}
