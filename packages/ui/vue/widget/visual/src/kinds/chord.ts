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

import { type Context, escape, type Drawing } from '../context'
import { flowsOf, shownName, STAGE, type Flow } from '../flows'

/** The widest a name beside the circle is drawn. */
const NAME_WIDTH = 110

const stageOf = (id: string) => Number(id.slice(0, id.indexOf(STAGE)))

/**
 * Whether the names of every stage are one list: each stage's names all
 * among the next larger one's, as the rows and columns of a from-to matrix
 * are. Rows of Gender and columns of Marital Status share an "M" that is
 * male on one side and married on the other; those stay apart.
 */
function oneList(flows: Flow[]): boolean {
  const stages = new Map<number, Set<string>>()
  for (const flow of flows) {
    for (const id of [flow.source, flow.target]) {
      const stage = stageOf(id)
      if (!stages.has(stage)) stages.set(stage, new Set())
      stages.get(stage)!.add(shownName(id))
    }
  }
  const sets = [...stages.values()].sort((a, b) => a.size - b.size)
  return sets.every((set, i) => i + 1 === sets.length || [...set].every((name) => sets[i + 1]!.has(name)))
}

/**
 * The ties of a chord: flows as the Sankey reads them. When both sides
 * name the same things, a thing that is both a source and a target is one
 * arc - the point of a circle is that ties run both ways - and a thing
 * tied to itself is no tie. Otherwise each side keeps its own arcs, even
 * where a name turns up on both.
 */
export function tiesOf(context: Context): Flow[] {
  const flows = flowsOf(context)
  const merged = oneList(flows)
  const ties = new Map<string, Flow>()
  for (const flow of flows) {
    const source = merged ? shownName(flow.source) : flow.source
    const target = merged ? shownName(flow.target) : flow.target
    if (source === target) continue
    const key = `${source}\u0000${target}`
    const tie = ties.get(key)
    if (tie) tie.value += flow.value
    else ties.set(key, { source, target, value: flow.value })
  }
  return [...ties.values()]
}

/**
 * The arcs, in the order of the table: the rows first, then the columns,
 * so that each side sits together on its half of the circle rather than a
 * row standing among the columns it is tied to.
 */
function arcsOf(ties: Flow[]): string[] {
  const sources = ties.map((tie) => tie.source)
  const targets = ties.map((tie) => tie.target)
  return [...new Set([...sources, ...targets])].sort((a, b) =>
    a.includes(STAGE) && b.includes(STAGE) ? stageOf(a) - stageOf(b) : 0,
  )
}

export function chord(context: Context): Drawing {
  const ties = tiesOf(context)
  if (!ties.length) return { problem: context.columns.numbers.length ? 'needsFlows' : 'needsNumbers' }
  const arcs = arcsOf(ties)
  const set = context.palette.set
  // A small tile has no room around the circle for names, and they would run off its edges; the tooltip names each arc.
  const labels = context.look.showLabels && !context.look.small
  // The names stand beside the circle, and the circle is sized by the tile's shorter side: in a tile about as
  // wide as it is tall that leaves a name like High School Degree no room at the sides, and it ran off the edge.
  // The narrower the tile, the smaller the circle, so that a name of up to NAME_WIDTH pixels fits beside it.
  const aspect = context.look.aspect
  const outer = aspect > 0 ? Math.min(64, Math.max(38, Math.round((aspect - 0.55) * 100))) : 64
  // Every arc takes its gap off the circle before the values share the rest, so with many arcs the gaps
  // would eat it: 78 cities at 2 degrees each leave Food, a third of all sales, 21 degrees. Held to a fifth
  // of the circle together, the arcs stay in the proportion of their values.
  const padAngle = Math.min(2, 72 / arcs.length)
  const option = context.base()
  option.tooltip.trigger = 'item'
  option.tooltip.formatter = (p: { dataType: string; data: Flow; name: string; value: number }) =>
    p.dataType === 'edge'
      ? `${escape(shownName(p.data.source))} ↔ ${escape(shownName(p.data.target))}<br/><b>${context.format(p.data.value)}</b>`
      : `${escape(p.name)}<br/><b>${context.format(Number(p.value))}</b>`
  option.series = [
    {
      type: 'chord',
      data: arcs.map((id, i) => ({ id, name: shownName(id), itemStyle: { color: set[i % set.length] } })),
      links: ties,
      top: context.look.title ? 36 : 8,
      center: ['50%', '50%'],
      radius: labels ? [`${outer - 6}%`, `${outer}%`] : ['82%', '88%'],
      padAngle,
      // No least width: echarts widens a narrow arc by taking all it needs from the first arcs in the circle
      // (it counts the narrow arc itself among those that cannot spare it), so Altadena would end up as narrow
      // as Berkeley with a twentieth of its sales. A tie of a few customers is a thin arc, as it is in a pie.
      minAngle: 0,
      itemStyle: { borderRadius: 2 },
      lineStyle: { color: 'gradient', opacity: 0.35 },
      emphasis: { focus: 'adjacency', lineStyle: { opacity: 0.75 } },
      // A longer name is cut short, as a caption of a parent-child level can be; the tooltip has it whole.
      label: { show: labels, color: context.text, position: 'outside', distance: 6, width: NAME_WIDTH, overflow: 'truncate' },
      // Fifty arcs and more have more names than the circle has room for; the tooltip names the rest.
      labelLayout: { hideOverlap: true },
    },
  ]
  return { option }
}
