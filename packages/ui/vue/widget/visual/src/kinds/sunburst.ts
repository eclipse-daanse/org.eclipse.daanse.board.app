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

import { type Context, type Drawing, type Option, type Problem } from '../context'
import { colourAt, inkOn } from '../palettes'
import { toNumber } from '../table'
import { acrossOneRow, treeOf, depthOf, pathTooltip, type Node } from '../tree'

/* Where the rings start and end, as shares of half the smaller side - what ECharts measures a radius in. */
const INNER = 0.14
const OUTER = 0.92
const FONT_SIZE = 11
/* An average character of the label font, as a share of its size (measured over FoodMart's names): labels are cut without a canvas to measure them. */
const CHARACTER = 0.52
/* The smaller side of the chart, in pixels, at which the labels are cut anew. */
export const SIZES = [160, 200, 240, 280, 320, 380, 440, 520, 600, 700, 820, 960, 1120, 1300, 1560]
/* An inner piece this wide, in radians, writes along its arc; a narrower one along its radius, like the rings outside it. */
const ALONG_THE_ARC = Math.PI / 4
/* A piece narrower than this, in radians, is drawn without a gap: the gaps of a run of them would be all that shows. */
const SLIVER = Math.PI / 360

export function sunburst(context: Context): Drawing {
  context = acrossOneRow(context)
  const tree = treeOf(context)
  if (!tree) return { problem: nothingDrawn(context) }
  const depth = depthOf(tree)
  const total = tree.reduce((sum, node) => sum + (node.value ?? 0), 0)
  const data = coloured(context, tree, depth, total)
  const option = context.base()
  /*
   * Below a title the rings are smaller than at the same size without one,
   * and their labels are cut to the rings that are drawn. A chart whose
   * smaller side is `size` is at least that high, and its rings at least
   * as large as below a title at that height.
   */
  const outer = (size: number) => (context.look.title ? Math.min(OUTER, belowTheTitleAt(size)) : OUTER)
  option.tooltip.formatter = pathTooltip(context)
  option.series = [
    {
      type: 'sunburst',
      data,
      radius: [`${Math.round(INNER * 100)}%`, `${Math.round(OUTER * 100)}%`],
      center: ['50%', context.look.title ? '54%' : '50%'],
      sort: 'desc',
      nodeClick: 'rootToNode',
      emphasis: { focus: 'ancestor' },
      itemStyle: { borderRadius: 6, borderWidth: 2, borderColor: context.gap },
      label: { show: context.look.showLabels, rotate: 'radial', minAngle: 8, fontSize: FONT_SIZE, formatter: cut(SIZES[0], depth, total, outer(SIZES[0])) },
      levels: levels(data, depth),
      animationDurationUpdate: 750,
    },
  ]
  /*
   * ECharts gives a ring's label no width of its own, so a long name runs
   * past its piece into the next ring. How much room a piece has depends on
   * the size of the chart, which only ECharts knows: a media query per size
   * hands it labels cut to fit there, and it picks again on every resize.
   */
  option.media = SIZES.slice(1).map((size) => ({
    query: { minWidth: size, minHeight: size },
    option: { series: [{ label: { formatter: cut(size, depth, total, outer(size)) } }] },
  }))
  if (context.look.title) option.media.push(...belowTheTitle())
  return { option }
}

/**
 * Why there is no ring: no numbers, numbers in no cell - a slice of the
 * cube nobody sold in - or numbers none of which is above zero.
 */
function nothingDrawn(context: Context): Problem {
  const { numbers } = context.columns
  if (!numbers.length) return 'needsNumbers'
  const value = context.column(context.look.valueColumn, numbers[0])!
  return context.table.rows.some((row) => toNumber(row[value]) !== null) ? 'needsValues' : 'noValues'
}

/* The height a title takes above the rings, in pixels. */
const TITLE = 30

/**
 * A low tile has the rings as high as it is, and the title on top of
 * them. Below the height where the outer ring clears the title, the rings
 * shrink until it does - judged by the lowest height of each band, the
 * smallest band last so that it wins.
 */
const BANDS = [375, 320, 260, 200, 150, 100]
/* The outer radius below the title in a band whose lowest height is `lowest`, as a share. */
const outerBelow = (lowest: number) => Math.round(200 * (0.54 - TITLE / lowest)) / 100

function belowTheTitle(): Option[] {
  return BANDS.slice(1).map((lowest, index) => ({
    query: { maxHeight: BANDS[index] - 1 },
    option: { series: [{ radius: [`${Math.round(INNER * 100)}%`, `${Math.round(outerBelow(lowest) * 100)}%`] }] },
  }))
}

/* The outer radius those bands give a chart `height` pixels high, the smallest band that holds it winning as it does in ECharts. */
export function belowTheTitleAt(height: number): number {
  let outer = OUTER
  BANDS.slice(1).forEach((lowest, index) => {
    if (height < BANDS[index]) outer = outerBelow(lowest)
  })
  return outer
}


interface Piece extends Node {
  children?: Piece[]
  itemStyle: { color: string; borderWidth?: number; borderRadius?: number }
  label: { color: string; rotate?: 'tangential' }
}

/**
 * Each piece in its own colour, so that its label can be written in one
 * that reads on it: a deeper ring is paler, the way ECharts would draw it,
 * and white on a pale yellow is read by nobody.
 */
function coloured(context: Context, tree: Node[], depth: number, total: number): Piece[] {
  const set = context.palette.set
  const paint = (node: Node, base: string, level: number): Piece => {
    const color = level > 1 ? colourAt([base, '#ffffff'], ((level - 1) / Math.max(1, depth - 1)) * 0.5) : base
    const label: Piece['label'] = { color: inkOn(color) }
    // Only an inner piece wide enough writes along its arc, and only when rings outside it leave the radius to them.
    if (level === 1 && depth > 1 && ((node.value ?? 0) / total) * 2 * Math.PI >= ALONG_THE_ARC) label.rotate = 'tangential'
    const piece: Piece = { name: node.name, value: node.value, itemStyle: { color }, label }
    // Cut by gaps wider than itself, a run of small cities shows as a wedge of the ground's colour.
    if (((node.value ?? 0) / total) * 2 * Math.PI < SLIVER) Object.assign(piece.itemStyle, { borderWidth: 0, borderRadius: 0 })
    if (node.children) piece.children = node.children.map((child) => paint(child, base, level + 1))
    return piece
  }
  // The colours go round the circle the way the pieces are sorted, largest first, as ECharts hands them out.
  const order = tree.map((node, index) => index).sort((a, b) => (tree[b].value ?? 0) - (tree[a].value ?? 0))
  const colours = new Map(order.map((index, rank) => [index, set[rank % set.length]]))
  return tree.map((node, index) => paint(node, colours.get(index)!, 1))
}

/**
 * The gaps between pieces, ring by ring: a ring of hundreds of slivers cut
 * by the gap of a ring of three would show only the gap.
 */
function levels(tree: Piece[], depth: number): Option[] {
  const counts = new Array<number>(depth).fill(0)
  const count = (nodes: Piece[], level: number) =>
    nodes.forEach((node) => {
      counts[level]++
      if (node.children) count(node.children, level + 1)
    })
  count(tree, 0)
  // The first level is the root, which shows only once a click has gone in.
  return [
    {},
    ...counts.map((pieces) =>
      pieces > 120 ? { itemStyle: { borderWidth: 0.5, borderRadius: 1 } } : pieces > 40 ? { itemStyle: { borderWidth: 1, borderRadius: 3 } } : {},
    ),
  ]
}

interface LabelParams {
  name: string
  value: number
  data?: { label?: { rotate?: string } }
}

/**
 * Labels cut to the room their pieces have in a chart whose smaller side
 * is `size` pixels: along a ring's radius its thickness, along the inner
 * arc the chord the piece spans. `outer` is where the rings end, as a share
 * of half that side. Measured for the whole tree: a click that goes in only
 * gives every piece more room, never less.
 */
export function cut(size: number, depth: number, total: number, outer = OUTER) {
  const half = size / 2
  const thickness = ((outer - INNER) * half) / depth
  return (p: LabelParams) => {
    let room = thickness
    if (p.data?.label?.rotate === 'tangential') {
      const middle = INNER * half + thickness / 2
      const angle = Math.min(Math.PI, ((Number(p.value) || 0) / (total || 1)) * 2 * Math.PI)
      // Along the arc the ring has to be as thick as a line of text.
      room = thickness < FONT_SIZE + 4 ? 0 : 2 * middle * Math.sin(angle / 2)
    }
    const characters = Math.floor((room - 4) / (FONT_SIZE * CHARACTER))
    const name = String(p.name ?? '')
    if (name.length <= characters) return name
    // A letter and an ellipsis say nothing; the tooltip names the piece instead.
    // A space, not an empty text, which ECharts would replace by the whole name.
    return characters < 4 ? ' ' : `${name.slice(0, characters - 1).trimEnd()}…`
  }
}
