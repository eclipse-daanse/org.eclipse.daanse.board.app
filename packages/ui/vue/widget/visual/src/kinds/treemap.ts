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

import { colourAt, inkOn, withAlpha } from '../palettes'
import { type Context, type Drawing, type Option } from '../context'
import { acrossOneRow, treeOf, depthOf, pathTooltip, type Node } from '../tree'
import { toNumber } from '../table'

const FONT_SIZE = 12
/* The smallest size a label is written at before it is left to the tooltip. */
const SMALLEST = 9
/* An average character of the label font, as a share of its size - a digit is wider than most letters. */
const LETTER = 0.52
const DIGIT = 0.6
/* What ECharts keeps clear around a label inside its tile, on either side. */
const PADDING = 10
/*
 * The lightness, as HSL counts it, of the border of a tile of the first level
 * and of every deeper one. ECharts calls it borderColorSaturation, yet sets
 * the lightness with it; the title bar of a tile with tiles inside is drawn
 * in that border colour.
 */
const BAR_LIGHTNESS = [0.6, 0.65]

export function treemap(context: Context): Drawing {
  context = acrossOneRow(context)
  const tree = treeOf(context)
  if (!tree) return { problem: missing(context) }
  const option = context.base()
  option.tooltip.formatter = pathTooltip(context)
  const depth = depthOf(tree)
  const data = coloured(context, tree, depth)
  option.series = [
    {
      type: 'treemap',
      // The root's name, which the breadcrumb starts from.
      name: context.look.title || context.table.headers[context.column(context.look.valueColumn, context.columns.numbers[0])!],
      data,
      top: context.look.title ? 36 : 8,
      bottom: 32,
      left: 8,
      right: 8,
      roam: false,
      /*
       * A click on a tile with tiles hidden beneath it (its name marked by an
       * arrow) goes into it; ECharts does that for every value of nodeClick
       * but false. Any other click it would answer with zoomToNode, which
       * scales the tile to a tenth of the chart and slides it to the middle:
       * a large tile only moved, the left of the chart left empty and its
       * neighbours cut, with no way back in a chart that cannot be dragged.
       * 'link' with no link on any tile does nothing there instead; the
       * breadcrumb still goes into any tile above the one shown.
       */
      nodeClick: 'link',
      // Two levels at a time; a click goes deeper.
      leafDepth: depth > 2 ? 2 : undefined,
      visibleMin: 200,
      breadcrumb: {
        show: true,
        bottom: 4,
        itemStyle: { color: withAlpha(context.text, 0.08), borderColor: 'transparent', shadowBlur: 0, textStyle: { color: context.text } },
        emphasis: { itemStyle: { color: withAlpha(context.text, 0.16) } },
      },
      label: {
        show: context.look.showLabels,
        formatter: (p: { name: string; value: number }) => `${p.name}\n${context.format(Number(p.value))}`,
        fontSize: FONT_SIZE,
      },
      labelLayout: fitted,
      upperLabel: { show: context.look.showLabels, height: 22 },
      itemStyle: { borderRadius: 4, borderColor: context.gap, gapWidth: 2 },
      levels: levels(data),
      animationDurationUpdate: 750,
    },
  ]
  return { option }
}

/**
 * Why there are no tiles. A year the cube holds nothing for answers every
 * cell empty, and that is a different thing to tell the reader than values
 * that are all zero or below.
 */
function missing(context: Context): 'needsNumbers' | 'noValues' | 'needsValues' {
  if (!context.columns.numbers.length) return 'needsNumbers'
  const value = context.column(context.look.valueColumn, context.columns.numbers[0])!
  const empty = context.columns.numeric.includes(value) && context.table.rows.every((row) => toNumber(row[value]) === null)
  return empty ? 'noValues' : 'needsValues'
}

interface Tile extends Node {
  children?: Tile[]
  itemStyle: { color: string }
  label: { color: string }
  upperLabel: { color: string }
}

/**
 * Each tile in its own colour, so that its label - and the title bar of a
 * tile with tiles inside - can be written in one that reads on it: white on
 * the pale yellow or green of a palette is read by nobody. A deeper level is
 * paler, so that a tile stands apart from the one it lies in.
 */
function coloured(context: Context, tree: Node[], depth: number): Tile[] {
  const set = context.palette.set
  const paint = (node: Node, base: string, level: number): Tile => {
    const color = level > 1 ? colourAt([base, '#ffffff'], ((level - 1) / Math.max(1, depth - 1)) * 0.4) : base
    const ink = inkOn(color)
    // The title bar is not drawn in the tile's colour but in its border's, which ECharts lightens or darkens to a set lightness.
    const bar = inkOn(atLightness(color, BAR_LIGHTNESS[Math.min(level, 2) - 1]))
    const tile: Tile = { name: node.name, value: node.value, itemStyle: { color }, label: { color: ink }, upperLabel: { color: bar } }
    if (node.children) tile.children = node.children.map((child) => paint(child, base, level + 1))
    return tile
  }
  // ECharts lays the tiles out largest first and hands out its colours in that order; so do these.
  const order = tree.map((_, index) => index).sort((a, b) => (tree[b].value ?? 0) - (tree[a].value ?? 0))
  const colours = new Map(order.map((index, rank) => [index, set[rank % set.length]]))
  return tree.map((node, index) => paint(node, colours.get(index)!, 1))
}

/** A colour with its hue and saturation kept and its HSL lightness set, as ECharts does for a border. */
export function atLightness(color: string, lightness: number): string {
  const rgba = withAlpha(color, 1).match(/^rgba\((\d+), (\d+), (\d+)/)
  if (!rgba) return color
  const [r, g, b] = rgba.slice(1).map((channel) => Number(channel) / 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const s = max === min ? 0 : (max - min) / (1 - Math.abs(2 * l - 1))
  const h = max === min ? 0 : max === r ? ((g - b) / (max - min) + 6) % 6 : max === g ? (b - r) / (max - min) + 2 : (r - g) / (max - min) + 4
  const chroma = (1 - Math.abs(2 * lightness - 1)) * s
  const x = chroma * (1 - Math.abs((h % 2) - 1))
  const m = lightness - chroma / 2
  const [r1, g1, b1] = h < 1 ? [chroma, x, 0] : h < 2 ? [x, chroma, 0] : h < 3 ? [0, chroma, x] : h < 4 ? [0, x, chroma] : h < 5 ? [x, 0, chroma] : [chroma, 0, x]
  return `rgba(${[r1, g1, b1].map((channel) => Math.round((channel + m) * 255)).join(', ')}, 1)`
}

/**
 * The gaps and corners, level by level: a level of hundreds of tiles cut
 * by the gap and rounded by the corners of a level of three shows only
 * pills of colour. A level's gap is the one between its children, so it
 * follows how many there are one level down.
 */
function levels(tree: Tile[]): Option[] {
  const counts: number[] = []
  const count = (nodes: Tile[], level: number) =>
    nodes.forEach((node) => {
      counts[level] = (counts[level] ?? 0) + 1
      if (node.children) count(node.children, level + 1)
    })
  count(tree, 0)
  const crowded = (tiles = 0) => (tiles > 120 ? 2 : tiles > 40 ? 1 : 0)
  const gaps = [
    [4, 2, 1],
    [2, 1, 0.5],
    [1, 0.5, 0.5],
  ]
  const corners = [4, 2, 1]
  // The first level is the root, which has no name; its title bar would be an empty strip.
  return [
    { itemStyle: { borderWidth: 0, gapWidth: gaps[0][crowded(counts[0])] }, upperLabel: { show: false } },
    ...counts.map((tiles, level) => ({
      itemStyle: {
        gapWidth: gaps[Math.min(level + 1, 2)][crowded(counts[level + 1])],
        borderRadius: corners[crowded(tiles)],
        borderColorSaturation: BAR_LIGHTNESS[Math.min(level, 1)],
      },
    })),
  ]
}

interface LabelLayoutParams {
  text: string
  rect: { width: number; height: number }
}

/**
 * The size a tile's label is written at. ECharts cuts a label to its tile
 * letter by letter and line by line, so a narrow tile showed "1," or "4,7"
 * of a value in the thousands - a different number, not a shorter one. A
 * label is written smaller until its value fits whole, and its name with
 * at least a few letters; where it fits at no size the tooltip names the
 * tile instead. ECharts offers no way to hide a label here, so it is
 * written too small to be seen.
 */
export function fitted({ text, rect }: LabelLayoutParams): { fontSize: number } {
  const [name = '', value = ''] = String(text ?? '').split('\n')
  const width = rect.width - PADDING
  const height = rect.height - PADDING
  for (let size = FONT_SIZE; size >= SMALLEST; size--) {
    const lines = value ? 2 : 1
    const valueFits = value.length * DIGIT * size <= width
    const nameFits = Math.min(name.length, 5) * LETTER * size <= width
    if (valueFits && nameFits && lines * size * 1.25 <= height) return { fontSize: size }
  }
  return { fontSize: 0.01 }
}
