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
 * ********************************************************************/

/*
 * Where the timeline's data sources hold data (#1279).
 *
 * Each source is asked for 'TimeCoverage' and listened to, so the bands
 * follow when a source changes what it shows - another sensor picked on
 * the map, for one.
 */

import { inject, onUnmounted, ref, watch, type Ref } from 'vue'
import {
  identifier as datasourceIdentifier,
  TIME_COVERAGE,
  type DatasourceRepository,
  type TimeCoverage,
  type TimeInterval,
} from 'org.eclipse.daanse.board.app.lib.api.datasource'

/** A band on the axis, in milliseconds. */
export interface CoverageBand {
  startMs: number
  endMs: number
}

/**
 * The union of intervals, sorted, with overlapping and touching ones joined.
 * Intervals that cannot be read are left out.
 */
export function mergeIntervals(intervals: TimeInterval[]): CoverageBand[] {
  const bands = intervals
    .map((interval) => ({ startMs: Date.parse(interval.start), endMs: Date.parse(interval.end) }))
    .filter((band) => Number.isFinite(band.startMs) && Number.isFinite(band.endMs) && band.endMs >= band.startMs)
    .sort((a, b) => a.startMs - b.startMs)

  const merged: CoverageBand[] = []
  for (const band of bands) {
    const last = merged[merged.length - 1]
    if (last && band.startMs <= last.endMs) {
      last.endMs = Math.max(last.endMs, band.endMs)
    } else {
      merged.push({ ...band })
    }
  }
  return merged
}

/**
 * A band placed on an axis from min to max, as left and width in percent.
 * Bands outside the axis are dropped and those across its ends are cut.
 */
export function placeBands(bands: CoverageBand[], minMs: number, maxMs: number): Array<CoverageBand & { left: number; width: number }> {
  const span = maxMs - minMs
  if (!(span > 0)) return []
  return bands
    .filter((band) => band.endMs >= minMs && band.startMs <= maxMs)
    .map((band) => {
      const from = Math.max(band.startMs, minMs)
      const to = Math.min(band.endMs, maxMs)
      return { ...band, left: ((from - minMs) / span) * 100, width: ((to - from) / span) * 100 }
    })
}

/** Gathers changes that arrive together, as the steps of one sensor switch do. */
const SETTLE_MS = 300
/**
 * How long bands stay when a source says it shows nothing. A sensor switch
 * first removes every datastream and adds the new ones only after a lookup
 * on the server; without the grace the bands would blink out in between.
 */
const EMPTY_GRACE_MS = 2500

export function useTimeCoverage(datasourceIds: Ref<string[]>) {
  const repository = inject<DatasourceRepository | undefined>(datasourceIdentifier, undefined)
  const bands = ref<CoverageBand[]>([])

  let unsubscribers: Array<() => void> = []
  let settleTimer: ReturnType<typeof setTimeout> | null = null
  let emptyTimer: ReturnType<typeof setTimeout> | null = null
  let generation = 0

  const clearTimer = (timer: ReturnType<typeof setTimeout> | null) => {
    if (timer) clearTimeout(timer)
  }

  const load = async () => {
    const ids = datasourceIds.value
    const current = ++generation
    if (!repository || ids.length === 0) {
      bands.value = []
      return
    }
    const answers = await Promise.all(
      ids.map(async (id) => {
        try {
          return (await repository.getDatasource(id).getData(TIME_COVERAGE)) as TimeCoverage | null
        } catch (error) {
          console.warn(`TimeCoverage of ${id} not available:`, error)
          return null
        }
      }),
    )
    // A newer request has started; this answer is out of date
    if (current !== generation) return

    const intervals = answers.flatMap((answer) => answer?.series?.flatMap((series) => series.intervals) ?? [])
    const next = mergeIntervals(intervals)
    clearTimer(emptyTimer)
    emptyTimer = null
    if (next.length === 0 && bands.value.length > 0) {
      emptyTimer = setTimeout(() => {
        if (current === generation) bands.value = []
      }, EMPTY_GRACE_MS)
      return
    }
    bands.value = next
  }

  const schedule = () => {
    clearTimer(settleTimer)
    settleTimer = setTimeout(() => {
      settleTimer = null
      void load()
    }, SETTLE_MS)
  }

  const listen = (ids: string[]) => {
    unsubscribers.forEach((unsubscribe) => unsubscribe())
    unsubscribers = []
    if (!repository) return
    for (const id of ids) {
      try {
        const source = repository.getDatasource(id)
        source.subscribe(schedule)
        unsubscribers.push(() => source.unsubscribe(schedule))
      } catch (error) {
        console.warn(`Data source ${id} for the timeline not found:`, error)
      }
    }
  }

  watch(
    () => [...datasourceIds.value],
    (ids) => {
      listen(ids)
      void load()
    },
    { immediate: true },
  )

  onUnmounted(() => {
    unsubscribers.forEach((unsubscribe) => unsubscribe())
    unsubscribers = []
    clearTimer(settleTimer)
    clearTimer(emptyTimer)
    generation++
  })

  return { bands }
}
