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
import { isLight } from '../palettes'

/*
 * The floor the bars stand on, measured corner to corner. The camera's home
 * is fixed, and a floor wider than the usual 200 by 100 reaches past the
 * bottom of the tile there, taking the front row and its label with it.
 */
const FLOOR_DIAGONAL = Math.hypot(200, 100)

/** How much of its slot on the floor a bar fills, so that neighbours never touch. */
const BAR_SHARE = 0.7

/** The thinnest a bar can be, in the floor's units, and still be seen in a tile. */
const THINNEST = 1

/*
 * Square, and no wider than its slot along either side: a fixed least size
 * made a thousand products a solid wall of overlapping bars. Where the
 * square would be too thin to see - a thousand employees by one measure,
 * a tenth of a unit - the bar takes the depth its other side has room for,
 * and stands as a slab.
 */
function barSize(across: number, along: number): number | [number, number] {
  const [width, depth] = [Math.min(16, across), Math.min(16, along)]
  return Math.min(width, depth) >= THINNEST ? Math.min(width, depth) : [width, depth]
}

/**
 * The longest name an axis writes out; the tooltip has the whole of it.
 * Cut in the middle, because the end of a crossjoined name is the level
 * that tells two neighbours apart: "Non-Consuma…e - WA - F", not "Non-Consumable - WA -…".
 */
const LABEL_LENGTH = 22

function shorten(name: string): string {
  if (name.length <= LABEL_LENGTH) return name
  const tail = Math.floor((LABEL_LENGTH - 1) / 2)
  return `${name.slice(0, LABEL_LENGTH - 1 - tail).trimEnd()}…${name.slice(-tail).trimStart()}`
}

/*
 * Every n-th name along a category axis. The interval alone is not enough:
 * echarts always hands the last name to echarts-gl as well, which writes it
 * on top of the one before. So the formatter blanks every name off the step.
 */
function categoryLabels(context: Context, names: string[]) {
  // In a small tile the box is a few fingers wide, and its names only pile
  // on top of each other and of the bars; the tooltip names every bar.
  // Said both ways, because the widget merges a new drawing of the same
  // kind into the last, and a tile grown back would stay without names.
  if (context.look.small) return { show: false }
  const step = every(names.length)
  return {
    show: true,
    interval: step - 1,
    formatter: (name: string, index: number) => (index % step === 0 ? shorten(name) : ''),
    textStyle: { color: context.text },
  }
}

/*
 * A scale pale in the middle and dark at both ends says "below" and "above"
 * by its colour. Where the values run from a loss to a gain, its middle has
 * to sit on zero: stretched from the lowest to the highest value, a small
 * gain is drawn in the colour of a loss.
 */
function scaleBounds(context: Context, min: number, max: number): [number, number] {
  const ramp = context.ramp
  const diverging = ramp.length > 2 && isLight(ramp[Math.floor(ramp.length / 2)]) && !isLight(ramp[0]) && !isLight(ramp[ramp.length - 1])
  if (!diverging || min >= 0 || max <= 0) return [min, max]
  const reach = Math.max(-min, max)
  return [-reach, reach]
}

export function bars3d(context: Context): Drawing {
  const grid = gridOf(context)
  // Columns of numbers with every cell empty - Canada, which sold nothing -
  // are a query that found nothing, not a table without numbers.
  if (!grid) return { problem: context.columns.numbers.length ? 'noValues' : 'needsNumbers' }
  const { xs, ys, cells } = grid
  const option = context.base()
  option.tooltip.formatter = (p: { value: [number, number, number] }) =>
    `${escape(xs[p.value[0]])} · ${escape(ys[p.value[1]])}<br/><b>${context.format(p.value[2])}</b>`
  // The bars hang from the floor where every value is a loss, so the scale
  // reaches up to it, as it reaches down to it where every value is a gain;
  // ending at the smallest loss, it drew that loss in the colour of a gain.
  option.visualMap = context.scale(...scaleBounds(context, grid.min, Math.max(0, grid.max)))
  option.xAxis3D = context.axis3d({ type: 'category', data: xs, name: '', axisLabel: categoryLabels(context, xs) })
  option.yAxis3D = context.axis3d({ type: 'category', data: ys, name: '', axisLabel: categoryLabels(context, ys) })
  option.zAxis3D = context.axis3d({
    type: 'value',
    name: '',
    // In a small tile the heights crowd into a smudge; the scale beside the box says them, where there is one.
    axisLabel: {
      show: !(context.look.small && context.look.showScale),
      formatter: (v: number) => context.format(v),
      textStyle: { color: context.text },
    },
    // The height the pointer marks on the axis, written like every other number;
    // left alone, echarts-gl writes it bare, 2727 beside a scale of 2.000 and 4.000.
    axisPointer: { label: { formatter: (_text: string, point: number[]) => context.format(point[2]) } },
  })
  const box = context.box(ys.length / xs.length)
  const fit = Math.min(1, FLOOR_DIAGONAL / Math.hypot(box.boxWidth, box.boxDepth))
  box.boxWidth = Math.round(box.boxWidth * fit)
  box.boxDepth = Math.round(box.boxDepth * fit)
  option.grid3D = box
  option.series = [
    {
      type: 'bar3D',
      data: cells.map((value) => ({ value })),
      shading: 'lambert',
      bevelSize: 0.3,
      bevelSmoothness: 4,
      barSize: barSize((BAR_SHARE * box.boxWidth) / xs.length, (BAR_SHARE * box.boxDepth) / ys.length),
      emphasis: { label: { show: false }, itemStyle: { color: '#ffd166' } },
      animationDurationUpdate: 900,
      animationEasingUpdate: 'cubicOut',
    },
  ]
  return { option }
}
