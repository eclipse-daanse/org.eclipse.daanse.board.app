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

import { type Context, escape, every, type Drawing } from '../context'
import { gridOf } from '../grid'

export function surface(context: Context): Drawing {
  const grid = gridOf(context)
  if (!grid) return { problem: context.columns.numbers.length ? 'noValues' : 'needsNumbers' }
  const { xs, ys } = grid
  if (xs.length < 2 || ys.length < 2) return { problem: 'needsGrid' }
  const at = new Map(grid.cells.map(([x, y, value]) => [`${x}:${y}`, value]))
  /*
   * A surface is a mesh, so every crossing needs a height: a cell nobody
   * has is laid at the floor rather than torn out of it. echarts-gl reads
   * the mesh with x running fastest. The floor is the lowest value, not
   * zero: where every value is below zero, zero is a ridge above them all.
   */
  const data: [number, number, number][] = []
  for (let y = 0; y < ys.length; y++) for (let x = 0; x < xs.length; x++) data.push([x, y, at.get(`${x}:${y}`) ?? grid.min])
  const option = context.base()
  // The floor a missing cell is laid at is not a value: its tooltip says there is none.
  option.tooltip.formatter = (p: { value: [number, number, number] }) => {
    const [x, y, z] = p.value
    const value = at.has(`${x}:${y}`) ? context.format(z) : '–'
    return `${escape(xs[x])} · ${escape(ys[y])}<br/><b>${value}</b>`
  }
  option.visualMap = context.scale(grid.min, grid.max)
  /*
   * The axes run over indices, so the label the pointer shows on hover would
   * be a bare index - month 6 read as "5" - and the height a raw number.
   * echarts-gl hands that label the point under the mouse, which is how it is
   * named instead.
   */
  const pointer = (text: (point: number[]) => string) => ({ label: { formatter: (_: string, point: number[]) => text(point) } })
  const indices = (names: string[], dimension: number) => {
    const last = names.length - 1
    // A small tile has room for a few names along a side, not for ten.
    const interval = context.look.small ? Math.max(1, Math.ceil(names.length / 5)) : every(names.length)
    /*
     * echarts names the end of the axis as well as every interval, so the
     * last name would stand on top of the one before it - month 11 under
     * month 12. The end is kept and the one too close to it left out.
     */
    const named = (v: number) => Number.isInteger(v) && (v === last || last - v > interval / 2)
    return {
      type: 'value',
      min: 0,
      max: last,
      interval,
      name: '',
      axisLabel: { formatter: (v: number) => (named(v) ? (names[v] ?? '') : ''), textStyle: { color: context.text } },
      axisPointer: pointer((point) => names[Math.round(point[dimension])] ?? ''),
    }
  }
  option.xAxis3D = context.axis3d(indices(xs, 0))
  option.yAxis3D = context.axis3d(indices(ys, 1))
  option.zAxis3D = context.axis3d({
    type: 'value',
    name: '',
    /*
     * The box is half as tall as it is wide and the camera looks down on it,
     * so the eight heights echarts would name stand on each other. In a small
     * tile even four crowd into a smudge; the scale beside the box says them,
     * where there is one.
     */
    splitNumber: 4,
    axisLabel: {
      show: !(context.look.small && context.look.showScale),
      formatter: (v: number) => context.format(v),
      textStyle: { color: context.text },
    },
    axisPointer: pointer((point) => context.format(point[2])),
  })
  option.grid3D = context.box(ys.length / xs.length)
  /*
   * A line between every crossing: with hundreds of rows the lines stand
   * closer than a pixel and cover the colours with white.
   */
  const meshed = Math.max(xs.length, ys.length) <= DENSE
  option.series = [
    {
      type: 'surface',
      data,
      shading: 'lambert',
      wireframe: { show: meshed, lineStyle: { color: 'rgba(255, 255, 255, 0.45)', width: 1 } },
      itemStyle: { opacity: 0.95 },
      animationDurationUpdate: 900,
    },
  ]
  return { option }
}

/** Crossings along a side beyond which the wireframe is left out. */
const DENSE = 60
