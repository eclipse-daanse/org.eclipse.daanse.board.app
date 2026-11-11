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
import * as echarts from 'echarts/core'
import { ChordChart } from 'echarts/charts'
import { SVGRenderer } from 'echarts/renderers'
import { option, problem } from './fixtures'

echarts.use([ChordChart, SVGRenderer])

/* The degrees echarts gives each arc, laid out as a browser would, by name. Names need a canvas to measure; leave them off. */
function degreesOf(drawn: ReturnType<typeof option>): Map<string, number> {
  const chart = echarts.init(null, null, { renderer: 'svg', ssr: true, width: 970, height: 440 })
  chart.setOption({ series: drawn.series }, { notMerge: true })
  type Arcs = {
    count(): number
    getName(i: number): string
    getItemLayout(i: number): { startAngle: number; endAngle: number }
  }
  const model = (chart as unknown as { getModel(): { getSeriesByIndex(i: number): { getData(): Arcs } } }).getModel()
  const data = model.getSeriesByIndex(0).getData()
  const degrees = new Map<string, number>()
  for (let i = 0; i < data.count(); i++) {
    const { startAngle, endAngle } = data.getItemLayout(i)
    degrees.set(data.getName(i), (Math.abs(endAngle - startAngle) * 180) / Math.PI)
  }
  chart.dispose()
  return degrees
}

const SALES_LIKE = { headers: ['Caption', 'Food', 'Drink'], rows: [['Drink', 5, 9], ['Food', 0, 3]] }

describe('the chord', () => {
  it('ties each row to each column, one arc per name however many ends it turns up at', () => {
    const table = { headers: ['Caption', 'Food', 'Drink'], rows: [['Drink', 5, 9], ['Food', 0, 3]] }
    const drawn = option('chord', table)
    expect(drawn.series[0].type).toBe('chord')
    expect(drawn.series[0].data.map((node: { name: string }) => node.name)).toEqual(['Drink', 'Food'])
    // Drink with itself is no tie; nothing is tied by zero.
    expect(drawn.series[0].links).toEqual([
      { source: 'Drink', target: 'Food', value: 5 },
      { source: 'Food', target: 'Drink', value: 3 },
    ])
  })

  it('keeps a name apart when it means one thing on one side and another on the other', () => {
    // Gender down, Marital Status across: the "M" of male is not the "M" of married.
    const table = { headers: ['Caption', 'M', 'S'], rows: [['F', 65336, 66222], ['M', 66460, 68755]] }
    const drawn = option('chord', table)
    const arcs = drawn.series[0].data as { id: string; name: string }[]
    expect(arcs.map((arc) => arc.name)).toEqual(['F', 'M', 'M', 'S'])
    expect(new Set(arcs.map((arc) => arc.id)).size).toBe(4)
    // Male and married is a tie like any other, not one thing tied to itself.
    const links = drawn.series[0].links as { value: number }[]
    expect(links.map((link) => link.value)).toEqual([65336, 66222, 66460, 68755])
    const ids = new Set(arcs.map((arc) => arc.id))
    for (const link of drawn.series[0].links) expect(ids.has(link.source) && ids.has(link.target)).toBe(true)
  })

  it('puts the rows together and the columns together, each on its own side of the circle', () => {
    const table = {
      headers: ['Caption', '$10K', '$30K'],
      rows: [['Bachelors', 33, 53], ['Graduate', 5, 8], ['High School', 44, 1115]],
    }
    const names = option('chord', table).series[0].data.map((arc: { name: string }) => arc.name)
    expect(names).toEqual(['Bachelors', 'Graduate', 'High School', '$10K', '$30K'])
  })

  it('keeps the levels of a three-level caption in order around the circle', () => {
    const table = {
      headers: ['Caption', 'Unit Sales'],
      rows: [['F - M - Drink', 10], ['F - S - Food', 20], ['M - M - Food', 30]],
    }
    const names = option('chord', table).series[0].data.map((arc: { name: string }) => arc.name)
    expect(names).toEqual(['F', 'M', 'M', 'S', 'Drink', 'Food'])
  })

  it('names the two ends of a tie in its tooltip, not the stage they stand at', () => {
    const drawn = option('chord', { headers: ['Caption', 'M', 'S'], rows: [['F', 1, 2], ['M', 3, 4]] })
    const link = drawn.series[0].links[2]
    const tip = drawn.tooltip.formatter({ dataType: 'edge', data: link, name: '', value: link.value })
    expect(tip).toBe('M ↔ M<br/><b>3</b>')
  })

  it('leaves out the names that would overlap, for a circle of many arcs', () => {
    expect(option('chord', SALES_LIKE).series[0].labelLayout).toEqual({ hideOverlap: true })
  })

  it('leaves the names to the tooltip in a small tile, and gives the circle the room', () => {
    const series = option('chord', SALES_LIKE, { small: true }).series[0]
    expect(series.label.show).toBe(false)
    expect(series.radius).toEqual(['82%', '88%'])
    expect(option('chord', SALES_LIKE).series[0].label.show).toBe(true)
  })

  it('draws a smaller circle in a tile about as wide as it is tall, so the names beside it stay inside', () => {
    // At 420 by 400 the circle at 64% left High School Degree 70 pixels at the side, and it ran off the edge.
    const radius = (aspect: number) => option('chord', SALES_LIKE, { aspect }).series[0].radius
    expect(radius(2.5)).toEqual(['58%', '64%'])
    expect(radius(1)).toEqual(['39%', '45%'])
    expect(radius(0.75)).toEqual(['32%', '38%'])
    // Before the tile is measured, and when the names are off, the circle keeps its size.
    expect(radius(0)).toEqual(['58%', '64%'])
    expect(option('chord', SALES_LIKE, { aspect: 1, showLabels: false }).series[0].radius).toEqual(['82%', '88%'])
    // A name longer than the room is cut short; the tooltip has it whole.
    expect(option('chord', SALES_LIKE).series[0].label).toMatchObject({ width: 110, overflow: 'truncate' })
  })

  it('keeps the arcs in proportion to their values when there are many of them', () => {
    // 78 customer cities down, the three product families across: the families are half the circle.
    const cities = Array.from({ length: 78 }, (_, i) => [`City ${i}`, 300, 2400, 650])
    const degrees = degreesOf(option('chord', { headers: ['Caption', 'Drink', 'Food', 'Non-Consumable'], rows: cities }, { showLabels: false }))
    const food = degrees.get('Food')!
    expect(food / degrees.get('Non-Consumable')!).toBeCloseTo(2400 / 650, 1)
    expect(food / degrees.get('Drink')!).toBeCloseTo(2400 / 300, 1)
    expect(food).toBeGreaterThan(100)
  })

  it('widens the narrow arcs at the cost of all the wide ones alike, not of the first in the circle', () => {
    // Some cities buy a twentieth of what the others do, as Berkeley does beside Altadena.
    const cities = Array.from({ length: 78 }, (_, i) => [`City ${i}`, ...(i % 4 === 3 ? [7, 60, 16] : [150, 1200, 330])])
    const degrees = degreesOf(option('chord', { headers: ['Caption', 'Drink', 'Food', 'Non-Consumable'], rows: cities }, { showLabels: false }))
    expect(degrees.get('City 0')!).toBeCloseTo(degrees.get('City 76')!, 2)
    expect(degrees.get('City 0')! / degrees.get('City 3')!).toBeGreaterThan(5)
    expect(degrees.get('Food')! / degrees.get('Drink')!).toBeCloseTo(8, 0)
  })

  it('needs something tied to something else', () => {
    expect(problem('chord', { headers: ['Name'], rows: [['a']] })).toBe('needsNumbers')
  })
})

