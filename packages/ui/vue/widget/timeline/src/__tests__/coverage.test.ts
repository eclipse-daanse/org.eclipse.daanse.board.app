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

// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, h, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { identifier as datasourceIdentifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import {
  bandsFromBins, binTimes, combineSeries, coverageBuckets, mergeIntervals, placeBands,
  seriesFromChartData, seriesFromDataTable, seriesFromTimeCoverage, toMs, useTimeCoverage,
} from '../coverage'

const ms = (iso: string) => Date.parse(iso)

describe('mergeIntervals', () => {
  it('joins overlapping and touching intervals and sorts them', () => {
    expect(mergeIntervals([
      { start: '2026-10-10T00:00:00Z', end: '2026-10-12T00:00:00Z' },
      { start: '2026-10-01T00:00:00Z', end: '2026-10-05T00:00:00Z' },
      { start: '2026-10-11T00:00:00Z', end: '2026-10-20T00:00:00Z' },
      { start: '2026-10-20T00:00:00Z', end: '2026-10-21T00:00:00Z' },
    ])).toEqual([
      { startMs: ms('2026-10-01T00:00:00Z'), endMs: ms('2026-10-05T00:00:00Z') },
      { startMs: ms('2026-10-10T00:00:00Z'), endMs: ms('2026-10-21T00:00:00Z') },
    ])
  })

  it('leaves out what cannot be read', () => {
    expect(mergeIntervals([
      { start: 'x', end: '2026-10-05T00:00:00Z' },
      { start: '2026-10-05T00:00:00Z', end: '2026-10-01T00:00:00Z' },
    ])).toEqual([])
  })
})

describe('placeBands', () => {
  it('cuts bands at the ends of the axis and drops those outside', () => {
    const placed = placeBands(
      [{ startMs: 0, endMs: 50 }, { startMs: 80, endMs: 300 }, { startMs: 400, endMs: 500 }],
      20, 220,
    )
    expect(placed.map(({ left, width }) => [left, width])).toEqual([[0, 15], [30, 70]])
  })
})

/* A source as the repository hands it out: data on request, and listeners. */
function fakeSource(answer: { value: unknown }) {
  const listeners: Array<() => void> = []
  return {
    listeners,
    getData: vi.fn(async () => answer.value),
    subscribe: (fn: () => void) => { listeners.push(fn) },
    unsubscribe: (fn: () => void) => { listeners.splice(listeners.indexOf(fn), 1) },
    notify: () => listeners.forEach((fn) => fn()),
  }
}

const coverageOf = (start: string, end: string) => ({ series: [{ id: 'a', intervals: [{ start, end }] }] })

function mountWith(
  source: ReturnType<typeof fakeSource>,
  ids = ref(['i6oj']),
  { answers = ['TimeCoverage'], style = 'bands' as 'bands' | 'density', timeField = '', buckets = [] as { start: string; end: string }[] } = {},
) {
  let series: any
  const styleRef = ref(style)
  const Probe = defineComponent({
    setup() {
      series = useTimeCoverage({ datasourceIds: ids, style: styleRef, buckets: ref(buckets), timeField: ref(timeField) }).series
      return () => h('div')
    },
  })
  const repository = {
    getDatasource: () => source,
    getDatasourceType: () => 'fake',
    getDatasourceIdentifiers: () => ({ answers }),
  }
  const wrapper = mount(Probe, { global: { provide: { [datasourceIdentifier as symbol]: repository } } })
  // The bands of all series together, as one lane shows them
  return { wrapper, bands: () => combineSeries(series.value)[0]?.bands ?? [], series: () => series.value, ids, style: styleRef }
}

describe('useTimeCoverage', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('asks each source for TimeCoverage and follows when the source changes', async () => {
    const answer = { value: coverageOf('2026-10-01T00:00:00Z', '2026-10-05T00:00:00Z') as unknown }
    const source = fakeSource(answer)
    const { bands } = mountWith(source)
    await vi.runAllTimersAsync()

    expect(source.getData).toHaveBeenCalledWith('TimeCoverage', expect.anything())
    expect(bands()).toEqual([{ startMs: ms('2026-10-01T00:00:00Z'), endMs: ms('2026-10-05T00:00:00Z') }])

    // Another sensor picked: the source tells its listeners
    answer.value = coverageOf('2026-09-01T00:00:00Z', '2026-09-02T00:00:00Z')
    source.notify()
    await vi.runAllTimersAsync()
    expect(bands()).toEqual([{ startMs: ms('2026-09-01T00:00:00Z'), endMs: ms('2026-09-02T00:00:00Z') }])
  })

  it('keeps the bands through the empty step of a sensor switch', async () => {
    const answer = { value: coverageOf('2026-10-01T00:00:00Z', '2026-10-05T00:00:00Z') as unknown }
    const source = fakeSource(answer)
    const { bands } = mountWith(source)
    await vi.runAllTimersAsync()

    // removeAllDatastreams: nothing selected for a moment
    answer.value = { series: [] }
    source.notify()
    await vi.advanceTimersByTimeAsync(500)
    expect(bands()).toHaveLength(1)

    // addDatastreamsByName: the new sensor's datastreams
    answer.value = coverageOf('2026-08-01T00:00:00Z', '2026-08-03T00:00:00Z')
    source.notify()
    await vi.advanceTimersByTimeAsync(500)
    expect(bands()).toEqual([{ startMs: ms('2026-08-01T00:00:00Z'), endMs: ms('2026-08-03T00:00:00Z') }])

    // And a source that stays empty is shown empty after the grace
    answer.value = { series: [] }
    source.notify()
    await vi.runAllTimersAsync()
    expect(bands()).toEqual([])
  })

  it('stops listening when unmounted or when the source is removed', async () => {
    const source = fakeSource({ value: { series: [] } })
    const { wrapper, ids } = mountWith(source)
    await vi.runAllTimersAsync()
    expect(source.listeners).toHaveLength(1)

    ids.value = []
    await vi.runAllTimersAsync()
    expect(source.listeners).toHaveLength(0)

    ids.value = ['i6oj']
    await vi.runAllTimersAsync()
    wrapper.unmount()
    expect(source.listeners).toHaveLength(0)
  })
})

describe('buckets (#1280)', () => {
  it('lies on whole multiples of the bucket size, so the same axis asks the same buckets', () => {
    const min = ms('2026-10-13T06:48:15Z')
    const max = ms('2026-11-06T07:48:15Z')
    const buckets = coverageBuckets(min, max, 40)
    expect(buckets.length).toBeLessThanOrEqual(40)
    expect(buckets[0].start).toBe('2026-10-13T00:00:00.000Z')
    expect(Date.parse(buckets[buckets.length - 1].end)).toBeGreaterThanOrEqual(max)
    expect(coverageBuckets(min + 60_000, max + 60_000, 40)).toEqual(buckets)
  })

  it('counts times into buckets and makes bands of the buckets with values', () => {
    const buckets = coverageBuckets(ms('2026-10-01T00:00:00Z'), ms('2026-10-05T00:00:00Z'), 4)
    const bins = binTimes([ms('2026-10-01T05:00:00Z'), ms('2026-10-01T06:00:00Z'), ms('2026-10-04T01:00:00Z'), ms('2027-01-01T00:00:00Z')], buckets)
    expect(bins).toEqual([2, 0, 0, 1])
    expect(bandsFromBins(bins, buckets)).toEqual([
      { startMs: ms('2026-10-01T00:00:00Z'), endMs: ms('2026-10-02T00:00:00Z') },
      { startMs: ms('2026-10-04T00:00:00Z'), endMs: ms('2026-10-05T00:00:00Z') },
    ])
  })

  it('reads times as ISO text, seconds or milliseconds', () => {
    expect(toMs('2026-10-01T00:00:00Z')).toBe(ms('2026-10-01T00:00:00Z'))
    expect(toMs(1_790_000_000)).toBe(1_790_000_000_000)
    expect(toMs('1790000000000')).toBe(1_790_000_000_000)
    expect(toMs('2026-10-01T00:00:00Z/2026-10-02T00:00:00Z')).toBe(ms('2026-10-01T00:00:00Z'))
    expect(toMs(null)).toBeNaN()
  })
})

describe('generic sources (#1280)', () => {
  const buckets = coverageBuckets(ms('2026-10-01T00:00:00Z'), ms('2026-10-05T00:00:00Z'), 4)

  it('takes a chart\'s labels where each dataset has a value, one series per dataset', () => {
    const chart = {
      labels: ['2026-10-01T10:00:00Z', '2026-10-02T10:00:00Z', '2026-10-04T10:00:00Z'],
      datasets: [
        { label: 'pF 1', borderColor: '#9966FF', data: [1, null, 3] },
        { label: 'pF 2', data: [null, 2, null] },
      ],
    }
    const series = seriesFromChartData('i6oj', chart, buckets)
    expect(series.map((each) => [each.label, each.color, each.bins])).toEqual([
      ['pF 1', '#9966FF', [1, 0, 0, 1]],
      ['pF 2', undefined, [0, 1, 0, 0]],
    ])
  })

  it('takes a table\'s time column, from rows or from items', () => {
    const table = { headers: ['index', 'zeit'], rows: [[0, '2026-10-01T01:00:00Z'], [1, '2026-10-03T01:00:00Z']] }
    expect(seriesFromDataTable('t', table, 'zeit', buckets)[0].bins).toEqual([1, 0, 1, 0])
    const items = { headers: ['zeit'], items: [{ zeit: '2026-10-02T01:00:00Z' }], rows: [] }
    expect(seriesFromDataTable('t', items, 'zeit', buckets)[0].bins).toEqual([0, 1, 0, 0])
    expect(seriesFromDataTable('t', table, 'missing', buckets)[0].bands).toEqual([])
  })

  it('prefers the counted buckets of a coverage over its outer interval', () => {
    const answer = { series: [{ id: 'a', intervals: [{ start: '2026-10-01T00:00:00Z', end: '2026-10-05T00:00:00Z' }], bins: [3, 0, 0, 1] }] }
    expect(seriesFromTimeCoverage(answer, buckets)[0].bands).toHaveLength(2)
    expect(seriesFromTimeCoverage(answer, [])[0].bands).toHaveLength(1)
  })

  it('adds the counts of all series in the combined lane', () => {
    const combined = combineSeries([
      { id: 'a', bands: [], bins: [1, 0, 2] },
      { id: 'b', bands: [], bins: [0, 0, 5] },
    ])
    expect(combined[0].bins).toEqual([1, 0, 7])
  })
})

describe('useTimeCoverage with a style and generic sources (#1280)', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())
  const buckets = coverageBuckets(ms('2026-10-01T00:00:00Z'), ms('2026-10-05T00:00:00Z'), 4)

  it('asks for counts per bucket only when the density is shown', async () => {
    const source = fakeSource({ value: { series: [] } })
    const { style } = mountWith(source, ref(['i6oj']), { buckets })
    await vi.runAllTimersAsync()
    expect(source.getData).toHaveBeenLastCalledWith('TimeCoverage', expect.not.objectContaining({ buckets }))

    style.value = 'density'
    await vi.runAllTimersAsync()
    expect(source.getData).toHaveBeenLastCalledWith('TimeCoverage', expect.objectContaining({ buckets }))
  })

  it('reads a chart source and a table source with its time column', async () => {
    const chart = fakeSource({ value: { labels: ['2026-10-02T10:00:00Z'], datasets: [{ label: 'x', data: [1] }] } })
    const fromChart = mountWith(chart, ref(['c']), { answers: ['ChartData', 'DataTable'], buckets })
    await vi.runAllTimersAsync()
    expect(chart.getData).toHaveBeenCalledWith('ChartData', expect.anything())
    expect(fromChart.bands()).toEqual([{ startMs: ms('2026-10-02T00:00:00Z'), endMs: ms('2026-10-03T00:00:00Z') }])

    const table = fakeSource({ value: { headers: ['t'], rows: [['2026-10-04T10:00:00Z']] } })
    const fromTable = mountWith(table, ref(['t']), { answers: ['DataTable'], timeField: 't', buckets })
    await vi.runAllTimersAsync()
    expect(fromTable.bands()).toEqual([{ startMs: ms('2026-10-04T00:00:00Z'), endMs: ms('2026-10-05T00:00:00Z') }])

    // Without a time column a table says nothing
    const silent = fakeSource({ value: { headers: ['t'], rows: [['2026-10-04T10:00:00Z']] } })
    const none = mountWith(silent, ref(['t']), { answers: ['DataTable'], buckets })
    await vi.runAllTimersAsync()
    expect(silent.getData).not.toHaveBeenCalled()
    expect(none.series()).toEqual([])
  })
})
