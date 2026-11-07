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
 * Where the timeline's data sources hold data (#1279, #1280).
 *
 * Each source is listened to, so the lanes follow when a source changes
 * what it shows - another sensor picked on the map, for one. A source is
 * asked in the most direct way it answers:
 *
 *   - 'TimeCoverage': the source says it itself; with buckets it also
 *     counts per bucket, so gaps show.
 *   - 'ChartData': the labels of the values each series has.
 *   - 'DataTable': the column named in coverageTimeField.
 *
 * The last two are counted here, from rows the source loads anyway.
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

/** What is known of one series: where it has data, and how much per bucket. */
export interface CoverageSeries {
  id: string
  label?: string
  color?: string
  bands: CoverageBand[]
  /** Values per bucket, in the order of the buckets asked for. */
  bins?: number[]
}

export type CoverageStyle = 'bands' | 'density'

/**
 * The union of intervals, sorted, with overlapping and touching ones joined.
 * Intervals that cannot be read are left out.
 */
export function mergeIntervals(intervals: TimeInterval[]): CoverageBand[] {
  return mergeBands(
    intervals.map((interval) => ({ startMs: Date.parse(interval.start), endMs: Date.parse(interval.end) })),
  )
}

export function mergeBands(input: CoverageBand[]): CoverageBand[] {
  const bands = input
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
export function placeBands<T extends CoverageBand>(bands: T[], minMs: number, maxMs: number): Array<T & { left: number; width: number }> {
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

const MINUTE = 60_000
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const BUCKET_SIZES = [15 * MINUTE, 30 * MINUTE, HOUR, 3 * HOUR, 6 * HOUR, 12 * HOUR, DAY, 2 * DAY, 7 * DAY, 14 * DAY, 30 * DAY]

/**
 * Buckets over the axis, at most about `target` of them.
 *
 * Their edges are whole multiples of the bucket size, counted from the
 * epoch, so the same axis gives the same buckets each time and a source
 * can keep its counts of ended ones.
 */
export function coverageBuckets(minMs: number, maxMs: number, target: number): TimeInterval[] {
  const span = maxMs - minMs
  if (!Number.isFinite(span) || span <= 0) return []
  const wanted = Math.max(1, Math.floor(target))
  const size = BUCKET_SIZES.find((each) => span / each <= wanted) ?? Math.ceil(span / wanted / DAY) * DAY
  const buckets: TimeInterval[] = []
  for (let start = Math.floor(minMs / size) * size; start < maxMs; start += size) {
    buckets.push({ start: new Date(start).toISOString(), end: new Date(start + size).toISOString() })
  }
  return buckets
}

/** A time as a table or a chart may hold it: ISO text, or seconds or milliseconds since the epoch. */
export function toMs(value: unknown): number {
  if (value instanceof Date) return value.getTime()
  if (typeof value === 'number') return value > 1e11 ? value : value * 1000
  if (typeof value === 'string' && value.trim() !== '') {
    const text = value.trim()
    if (/^\d+(\.\d+)?$/.test(text)) return toMs(Number(text))
    // An interval counts from its start
    return Date.parse(text.split('/')[0])
  }
  return NaN
}

/** Counts times into buckets; times outside every bucket are not counted. */
export function binTimes(times: number[], buckets: TimeInterval[]): number[] {
  const bins = new Array<number>(buckets.length).fill(0)
  if (buckets.length === 0) return bins
  const first = Date.parse(buckets[0].start)
  const size = Date.parse(buckets[0].end) - first
  for (const time of times) {
    if (!Number.isFinite(time)) continue
    const index = Math.floor((time - first) / size)
    if (index >= 0 && index < bins.length) bins[index]++
  }
  return bins
}

/** The buckets with values, joined where they touch. */
export function bandsFromBins(bins: number[], buckets: TimeInterval[]): CoverageBand[] {
  return mergeBands(
    buckets
      .filter((_, index) => (bins[index] ?? 0) > 0)
      .map((bucket) => ({ startMs: Date.parse(bucket.start), endMs: Date.parse(bucket.end) })),
  )
}

/** One series from the times of its values. */
function fromTimes(id: string, times: number[], buckets: TimeInterval[], label?: string, color?: string): CoverageSeries {
  const valid = times.filter(Number.isFinite)
  if (buckets.length === 0) {
    const bands = valid.length > 0 ? [{ startMs: Math.min(...valid), endMs: Math.max(...valid) }] : []
    return { id, label, color, bands }
  }
  const bins = binTimes(valid, buckets)
  return { id, label, color, bands: bandsFromBins(bins, buckets), bins }
}

/** The series of a chart: the labels at which each dataset has a value. */
export function seriesFromChartData(id: string, chart: any, buckets: TimeInterval[]): CoverageSeries[] {
  const labels: unknown[] = Array.isArray(chart?.labels) ? chart.labels : []
  const datasets: any[] = Array.isArray(chart?.datasets) ? chart.datasets : []
  return datasets.map((dataset, index) => {
    const data: unknown[] = Array.isArray(dataset?.data) ? dataset.data : []
    const times = data.flatMap((value, at) => {
      if (value === null || value === undefined) return []
      // A point may carry its own time, as {x, y}
      const time = typeof value === 'object' && 'x' in (value as object) ? (value as { x: unknown }).x : labels[at]
      return [toMs(time)]
    })
    const color = typeof dataset?.borderColor === 'string' ? dataset.borderColor : undefined
    return fromTimes(`${id}:${index}`, times, buckets, dataset?.label, color)
  })
}

/** The series of a table: the times in one column. */
export function seriesFromDataTable(id: string, table: any, field: string, buckets: TimeInterval[]): CoverageSeries[] {
  if (!field) return []
  const headers: unknown[] = Array.isArray(table?.headers) ? table.headers : []
  const column = headers.findIndex((header) => String(header) === field)
  const items: any[] = Array.isArray(table?.items) ? table.items : []
  const rows: any[] = Array.isArray(table?.rows) ? table.rows : []
  const fromItems = items.some((item) => item && typeof item === 'object' && field in item)
  const times = fromItems
    ? items.map((item) => toMs(item?.[field]))
    : column >= 0
      ? rows.map((row) => toMs(Array.isArray(row) ? row[column] : row?.[field]))
      : []
  return [fromTimes(id, times, buckets, field)]
}

/** The series a source said itself. */
export function seriesFromTimeCoverage(answer: TimeCoverage | null | undefined, buckets: TimeInterval[]): CoverageSeries[] {
  return (answer?.series ?? []).map((series) => {
    const bins = buckets.length > 0 && Array.isArray(series.bins) && series.bins.length === buckets.length ? series.bins : undefined
    return {
      id: series.id,
      label: series.label,
      color: series.color,
      // Counted buckets say more than the outer interval: they show the gaps
      bands: bins ? bandsFromBins(bins, buckets) : mergeIntervals(series.intervals ?? []),
      bins,
    }
  })
}

/** All series in one lane: bands joined, counts added. */
export function combineSeries(series: CoverageSeries[]): CoverageSeries[] {
  if (series.length === 0) return []
  const counted = series.filter((each) => each.bins)
  let bins: number[] | undefined
  if (counted.length > 0) {
    const sum = new Array<number>(counted[0].bins!.length).fill(0)
    for (const each of counted) each.bins!.forEach((count, index) => (sum[index] += count))
    bins = sum
  }
  return [{ id: 'all', bands: mergeBands(series.flatMap((each) => each.bands)), bins }]
}

/** Gathers changes that arrive together, as the steps of one sensor switch do. */
const SETTLE_MS = 300
/**
 * How long lanes stay when a source says it shows nothing. A sensor switch
 * first removes every datastream and adds the new ones only after a lookup
 * on the server; without the grace the lanes would blink out in between.
 */
const EMPTY_GRACE_MS = 2500

export interface CoverageOptions {
  datasourceIds: Ref<string[]>
  style: Ref<CoverageStyle>
  /** The buckets over the axis; asked of a source only when counts are needed. */
  buckets: Ref<TimeInterval[]>
  timeField: Ref<string>
}

export function useTimeCoverage(options: CoverageOptions) {
  const repository = inject<DatasourceRepository | undefined>(datasourceIdentifier, undefined)
  const series = ref<CoverageSeries[]>([])

  let unsubscribers: Array<() => void> = []
  let settleTimer: ReturnType<typeof setTimeout> | null = null
  let emptyTimer: ReturnType<typeof setTimeout> | null = null
  let generation = 0
  let pending: AbortController | null = null

  const clearTimer = (timer: ReturnType<typeof setTimeout> | null) => {
    if (timer) clearTimeout(timer)
  }

  const answersOf = (id: string): readonly string[] => {
    try {
      return repository?.getDatasourceIdentifiers(repository.getDatasourceType(id))?.answers ?? []
    } catch {
      return []
    }
  }

  const seriesOf = async (id: string, signal: AbortSignal): Promise<CoverageSeries[]> => {
    const source = repository!.getDatasource(id)
    const answers = answersOf(id)
    const buckets = options.buckets.value
    // A source that has not said what it answers is asked for coverage first
    if (answers.length === 0 || answers.includes(TIME_COVERAGE)) {
      const counts = options.style.value === 'density'
      const answer = (await source.getData(TIME_COVERAGE, counts ? { buckets, signal } : { signal })) as TimeCoverage | null
      if (answer?.series || answers.includes(TIME_COVERAGE)) {
        return seriesFromTimeCoverage(answer, counts ? buckets : [])
      }
    }
    if (answers.includes('ChartData')) {
      return seriesFromChartData(id, await source.getData('ChartData', { signal }), buckets)
    }
    if (answers.includes('DataTable') && options.timeField.value) {
      return seriesFromDataTable(id, await source.getData('DataTable', { signal }), options.timeField.value, buckets)
    }
    return []
  }

  const load = async () => {
    const ids = options.datasourceIds.value
    const current = ++generation
    pending?.abort()
    const controller = new AbortController()
    pending = controller
    if (!repository || ids.length === 0) {
      series.value = []
      return
    }
    const answers = await Promise.all(
      ids.map(async (id) => {
        try {
          return await seriesOf(id, controller.signal)
        } catch (error) {
          if (!controller.signal.aborted) console.warn(`Coverage of ${id} not available:`, error)
          return []
        }
      }),
    )
    // A newer request has started; this answer is out of date
    if (current !== generation) return

    const next = answers.flat()
    clearTimer(emptyTimer)
    emptyTimer = null
    const hasData = (list: CoverageSeries[]) => list.some((each) => each.bands.length > 0)
    if (!hasData(next) && hasData(series.value)) {
      emptyTimer = setTimeout(() => {
        if (current === generation) series.value = next
      }, EMPTY_GRACE_MS)
      return
    }
    series.value = next
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
    () => options.datasourceIds.value.join('\n'),
    () => {
      listen(options.datasourceIds.value)
      void load()
    },
    { immediate: true },
  )

  // A changed axis or style asks again, once it has settled
  watch(
    () => [options.style.value, options.timeField.value, options.buckets.value.map((bucket) => bucket.start).join(',')].join('|'),
    () => schedule(),
  )

  onUnmounted(() => {
    unsubscribers.forEach((unsubscribe) => unsubscribe())
    unsubscribers = []
    clearTimer(settleTimer)
    clearTimer(emptyTimer)
    pending?.abort()
    generation++
  })

  return { series }
}
