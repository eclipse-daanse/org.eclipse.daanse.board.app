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
import { mergeIntervals, placeBands, useTimeCoverage } from '../coverage'

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

function mountWith(source: ReturnType<typeof fakeSource>, ids = ref(['i6oj'])) {
  let bands: any
  const Probe = defineComponent({
    setup() {
      bands = useTimeCoverage(ids).bands
      return () => h('div')
    },
  })
  const wrapper = mount(Probe, {
    global: { provide: { [datasourceIdentifier as symbol]: { getDatasource: () => source } } },
  })
  return { wrapper, bands: () => bands.value, ids }
}

describe('useTimeCoverage', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('asks each source for TimeCoverage and follows when the source changes', async () => {
    const answer = { value: coverageOf('2026-10-01T00:00:00Z', '2026-10-05T00:00:00Z') as unknown }
    const source = fakeSource(answer)
    const { bands } = mountWith(source)
    await vi.runAllTimersAsync()

    expect(source.getData).toHaveBeenCalledWith('TimeCoverage')
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
