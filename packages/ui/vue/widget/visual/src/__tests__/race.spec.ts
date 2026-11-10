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


import { describe, expect, it } from 'vitest'
import type { Option } from '../drawing'
import { SALES, option, problem } from './fixtures'

describe('the race', () => {
  it('steps through the columns, one frame each, bars in the order of the rows', () => {
    const drawn = option('race')
    expect(drawn.baseOption.timeline.data).toEqual(['1997', '1998'])
    expect(drawn.baseOption.yAxis.data).toEqual(['Drink', 'Food', 'Non-Consumable'])
    expect(drawn.options.map((frame: Option) => frame.series[0].data)).toEqual([
      [24597, 191940, 50236],
      [30010, 210000, 0],
    ])
    expect(drawn.options[1].graphic.elements[0].style.text).toBe('1998')
  })

  it('shows as many bars as asked and stays on a step as long as asked', () => {
    const drawn = option('race', SALES, { topN: 2, frameDuration: 800 })
    expect(drawn.baseOption.yAxis.max).toBe(1)
    expect(drawn.baseOption.timeline.playInterval).toBe(800)
  })

  it('does not play a race of one step', () => {
    const one = { headers: ['Caption', '1997'], rows: [['a', 1]] }
    expect(option('race', one).baseOption.timeline).toMatchObject({ show: false, autoPlay: false })
  })

  /* Growth over the step before, from the live cube: a department loses one quarter and gains the next. */
  const GROWTH = {
    headers: ['Caption', 'Q2', 'Q3'],
    rows: [
      ['Alcoholic Beverages', '132', '-3'],
      ['Snack Foods', '-741', '64'],
      ['Produce', '-591', '253'],
    ],
  }

  it('ranks a loss below a gain, not by the length of its bar', () => {
    const drawn = option('race', GROWTH)
    expect(drawn.baseOption.series[0].realtimeSort).toBe(false)
    expect(drawn.options.map((frame: Option) => frame.yAxis.data)).toEqual([
      ['Alcoholic Beverages', 'Produce', 'Snack Foods'],
      ['Produce', 'Snack Foods', 'Alcoholic Beverages'],
    ])
    expect(drawn.options[0].series[0].data.map((bar: { value: number }) => bar.value)).toEqual([132, -591, -741])
    // A bar keeps the colour of its row whatever place it takes.
    const colours = drawn.options.map((frame: Option) =>
      Object.fromEntries(frame.yAxis.data.map((name: string, at: number) => [name, frame.series[0].data[at].itemStyle.color])),
    )
    expect(colours[0]).toEqual(colours[1])
    expect(new Set(Object.values(colours[0])).size).toBe(3)
  })

  it('leaves the sorting to the chart while every value is at or above zero', () => {
    const drawn = option('race')
    expect(drawn.baseOption.series[0].realtimeSort).toBe(true)
    expect(drawn.options[0].yAxis).toBeUndefined()
  })

  it('leaves out a member with no value in any step', () => {
    const data = { headers: ['Caption', 'Q1', 'Q2'], rows: [['Drink', 5, 6], ['Nobody', null, ''], ['Food', 40, null]] }
    expect(option('race', data).baseOption.yAxis.data).toEqual(['Drink', 'Food'])
  })

  it('tells a query that found nothing from a table without numbers', () => {
    // Every department in 1998, which the cube holds no sales for: the columns are there, their cells empty.
    expect(problem('race', { headers: ['Caption', 'Q1', 'Q2'], rows: [['Drink', null, null], ['Food', '', null]] })).toBe('noValues')
    expect(problem('race', { headers: ['Caption'], rows: [['Drink'], ['Food']] })).toBe('needsNumbers')
  })

  it('leaves out a step no member has a value in', () => {
    // 1997 and 1998 asked together, the cube holding only 1997: the race must not end with every bar at zero.
    const data = { headers: ['Caption', '1997', '1998'], rows: [['Drink', 24597, null], ['Food', 191940, null]] }
    const drawn = option('race', data)
    expect(drawn.baseOption.timeline.data).toEqual(['1997'])
    expect(drawn.baseOption.timeline.show).toBe(false)
    expect(drawn.options).toHaveLength(1)
  })

  it('rounds a loss at its far end, not where it meets the axis', () => {
    const drawn = option('race', GROWTH)
    const styles = drawn.options[0].series[0].data.map((bar: { itemStyle: { borderRadius: number[] } }) => bar.itemStyle.borderRadius)
    expect(styles).toEqual([
      [0, 6, 6, 0],
      [6, 0, 0, 6],
      [6, 0, 0, 6],
    ])
  })

  it('shows a few bars and a slim timeline on a small tile', () => {
    const months = { headers: ['Caption', '1', '2'], rows: Array.from({ length: 12 }, (_, at) => [`d${at}`, at, at + 1]) }
    const small = option('race', months, { topN: 12, small: true })
    expect(small.baseOption.yAxis.max).toBe(4)
    expect(small.baseOption.timeline).toMatchObject({ height: 32, label: { show: false } })
    expect(small.baseOption.grid.bottom).toBe(52)
    const large = option('race', months, { topN: 12 })
    expect(large.baseOption.yAxis.max).toBe(11)
    expect(large.baseOption.timeline.label.show).toBe(true)
    expect(large.baseOption.grid.bottom).toBe(72)
  })

  it('writes a long step caption smaller and cuts it short, a year large', () => {
    const stamp = (frame: string) =>
      option('race', { headers: ['Caption', frame, 'x'], rows: [['a', 1, 2]] }).options[0].graphic.elements[0].style
    expect(stamp('1997').font).toBe('bold 40px sans-serif')
    const long = stamp('Beverly Hills - Alcoholic Beverages')
    expect(long.font).toBe('bold 18px sans-serif')
    expect(long).toMatchObject({ width: 280, overflow: 'truncate' })
  })

  it('drops a name or a value that would run into its neighbour on a small tile', () => {
    const drawn = option('race', SALES, { small: true })
    expect(drawn.baseOption.xAxis.axisLabel.hideOverlap).toBe(true)
    expect(drawn.baseOption.yAxis.axisLabel.hideOverlap).toBe(true)
    expect(drawn.baseOption.series[0].labelLayout).toEqual({ hideOverlap: true })
    expect(drawn.baseOption.timeline).toMatchObject({ left: 16, right: 16 })
  })

  it('keeps every value on a tile with room for them, while the bars swap places', () => {
    // Store sales per city and category by quarter: ECharts hid values crossed mid-swap and left them hidden.
    expect(option('race').baseOption.series[0].labelLayout).toEqual({ hideOverlap: false })
  })

  it('gives a name less room on a small tile, so the bars are not left a stub', () => {
    expect(option('race', SALES, { small: true }).baseOption.yAxis.axisLabel.width).toBe(84)
    expect(option('race').baseOption.yAxis.axisLabel.width).toBe(140)
  })

  it('ends the axis at zero in a step where every member lost', () => {
    // Growth over the quarter before, from the live cube: in Q2 every family lost, the smallest loss -19.
    const max = option('race', GROWTH).baseOption.xAxis.max
    expect(max({ min: -1565, max: -19 })).toBe(0)
    expect(max({ min: -3, max: 253 })).toBe(253)
  })

  it('leaves the losses below the bars shown out of the step, so they do not stretch its axis', () => {
    const data = {
      headers: ['Caption', 'Q2'],
      rows: [['Drink', '-19'], ['Food', '-1565'], ['Non-Consumable', '-291'], ['Snacks', '40']],
    }
    const step = option('race', data, { topN: 2 }).options[0]
    expect(step.yAxis.data).toEqual(['Snacks', 'Drink'])
    expect(step.series[0].data.map((bar: { value: number }) => bar.value)).toEqual([40, -19])
  })
})
