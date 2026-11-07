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

// @vitest-environment jsdom
/*
 * The chart fed by board datasources (#1286): the widget's own source as
 * table, another source as a named dataset, and a change of a source drawn
 * into the chart that is there - not into a new one.
 */
import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { identifier } from 'org.eclipse.daanse.board.app.lib.api.datasource'
import { VegawidgetPackage } from '../gen/VegawidgetPackage'
import { modelledSettings } from '../settingsModel'
import VegaWidget from '../VegaWidget.vue'

void VegawidgetPackage.eINSTANCE

const settle = async () => {
  for (let i = 0; i < 20; i++) {
    await flushPromises()
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

/** A store as the board has one: it answers, and tells its subscribers of a change. */
function fakeStore(answer: unknown) {
  const subscribers = new Set<() => void>()
  const store = {
    answer,
    asked: [] as string[],
    async getData(type: string) {
      store.asked.push(type)
      return store.answer
    },
    subscribe(subscriber: () => void) {
      subscribers.add(subscriber)
      return () => subscribers.delete(subscriber)
    },
    unsubscribe(subscriber: () => void) {
      subscribers.delete(subscriber)
    },
    callEvent: () => undefined,
    change(next: unknown) {
      store.answer = next
      for (const each of subscribers) each()
    },
    get subscribed() {
      return subscribers.size
    },
  }
  return store
}

function stores(entries: Record<string, ReturnType<typeof fakeStore>>) {
  return { getDatasource: (id: string) => {
    const held = entries[id]
    if (!held) throw new Error(`no source ${id}`)
    return held
  } }
}

const table = (rows: Array<Record<string, unknown>>) => ({ headers: Object.keys(rows[0] ?? {}), items: rows, rows: [] })

const bars = (extra: Record<string, unknown> = {}) => ({
  renderer: 'svg',
  layers: [{ mark: 'bar', encodings: [
    { channel: 'x', field: 'category', type: 'nominal' },
    { channel: 'y', field: 'amount', type: 'quantitative' },
  ] }],
  ...extra,
})

function mountWith(stored: unknown, datasourceId: string | undefined, repository: unknown) {
  return mount(VegaWidget, {
    props: { id: 'w1', datasourceId, configv: stored as any },
    global: { provide: { [identifier as symbol]: repository } },
    attachTo: document.body,
  })
}

const barsIn = (wrapper: ReturnType<typeof mountWith>) =>
  wrapper.get('[data-testid="vega-chart"]').element.querySelectorAll('.mark-rect.role-mark path').length

describe('VegaWidget with board datasources', () => {
  it('draws the rows of its own source as table, and the next ones into the same chart', async () => {
    const sales = fakeStore(table([{ category: 'A', amount: 1 }, { category: 'B', amount: 2 }]))
    const wrapper = mountWith(bars(), 'sales', stores({ sales }))
    await settle()
    expect(barsIn(wrapper)).toBe(2)
    const svg = wrapper.get('[data-testid="vega-chart"]').element.querySelector('svg')

    sales.change(table([{ category: 'A', amount: 1 }, { category: 'B', amount: 2 }, { category: 'C', amount: 3 }]))
    await settle()
    expect(barsIn(wrapper)).toBe(3)
    /* Not drawn anew: the view and its scene are the ones that were there. */
    expect(wrapper.get('[data-testid="vega-chart"]').element.querySelector('svg')).toBe(svg)
    wrapper.unmount()
    expect(sales.subscribed).toBe(0)
  })

  it('draws a named dataset from a source of its own, read as its columns say', async () => {
    const sales = fakeStore(table([{ category: 'A', amount: 1 }]))
    const targets = fakeStore({ data: [{ goal: '5' }, { goal: '7' }] })
    const stored = {
      renderer: 'svg',
      datasets: [{ name: 'targets', datasourceId: 'targets', shape: 'object', path: 'data', columnTypes: [{ column: 'goal', type: 'number' }] }],
      layers: [
        bars().layers[0],
        { mark: 'rule', dataset: 'targets', encodings: [{ channel: 'y', field: 'goal', type: 'quantitative' }] },
      ],
    }
    const wrapper = mountWith(stored, 'sales', stores({ sales, targets }))
    await settle()
    expect(targets.asked).toContain('object')
    expect(wrapper.get('[data-testid="vega-chart"]').element.querySelectorAll('.mark-rule.role-mark line').length).toBe(2)
    wrapper.unmount()
    expect(targets.subscribed).toBe(0)
  })

  it('draws the sample while it reads no source at all', async () => {
    const wrapper = mountWith(bars(), undefined, stores({}))
    await settle()
    expect(barsIn(wrapper)).toBe(6)
    wrapper.unmount()
  })

  it('draws nothing of the sample once it reads a source, even an empty one', async () => {
    const empty = fakeStore(table([]))
    const wrapper = mountWith(bars(), 'empty', stores({ empty }))
    await settle()
    expect(barsIn(wrapper)).toBe(0)
    wrapper.unmount()
  })
})
