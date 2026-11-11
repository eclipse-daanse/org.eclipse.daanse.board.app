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
import { columnNamed, toNumber } from '../table'

const stageOf = (id: string) => Number(id.slice(0, id.indexOf(STAGE)))

/** A caption cut into its levels, the way a row's labels are. */
function levelsOf(text: string, separator: string): string[] {
  return (separator ? text.split(separator) : [text]).map((part) => part.trim()).filter(Boolean)
}

/**
 * Flows read from the headers, when the levels are there and not in the rows.
 *
 * This is what a query gives that has the measure and the crossjoin on the
 * axes the other way round: one row, and headers like Supermarket - Food.
 * Read as a matrix, that is a fan from the measure's name into fifteen
 * joined captions; read here, it is the flow from each level of the header
 * to the next. With several rows, each row is the stage before the headers'
 * first level, so that nothing is summed away.
 */
function headerFlows(context: Context): Flow[] {
  const { table, columns, look } = context
  if (table.rows.some((row) => context.path(row).length > 1)) return []
  const headers = new Map(columns.numbers.map((column) => [column, levelsOf(table.headers[column] ?? '', look.separator)]))
  if (![...headers.values()].some((levels) => levels.length > 1)) return []
  const totals = new Map<string, Flow>()
  table.rows.forEach((row) => {
    const lead = table.rows.length > 1 ? [context.label(row)] : []
    for (const [column, levels] of headers) {
      const value = toNumber(row[column])
      if (value === null || value <= 0) continue
      const path = [...lead, ...levels]
      for (let stage = 0; stage + 1 < path.length; stage++) {
        const source = `${stage}${STAGE}${path[stage]}`
        const target = `${stage + 1}${STAGE}${path[stage + 1]}`
        const key = `${source}\u0000${target}`
        const flow = totals.get(key)
        if (flow) flow.value += value
        else totals.set(key, { source, target, value })
      }
    }
  })
  return [...totals.values()]
}

/**
 * The same reading, with only the number column the settings name.
 *
 * Products down and Unit Sales and Store Sales across would otherwise flow
 * into both measures and add units to dollars in each product's node, and
 * naming Store Sales as the column to take values from would change nothing.
 */
function narrowed(context: Context): Context {
  const named = columnNamed(context.table, context.look.valueColumn)
  if (named === undefined || !context.columns.numbers.includes(named)) return context
  return Object.assign(Object.create(context) as Context, { columns: { ...context.columns, numbers: [named] } })
}

export function sankey(whole: Context): Drawing {
  const context = narrowed(whole)
  const crossed = headerFlows(context)
  const flows = crossed.length ? crossed : flowsOf(context)
  // With numbers in the table there is always a way to read flows from it;
  // when none comes out, it is because no cell holds a value above zero -
  // and where no cell holds a value at all, as for a year with no sales, that is what the tile says.
  if (!flows.length) {
    const { table, columns } = context
    if (!columns.numbers.length) return { problem: 'needsNumbers' }
    const empty = table.rows.every((row) => columns.numbers.every((column) => toNumber(row[column]) === null))
    return { problem: empty ? 'noValues' : 'needsValues' }
  }
  const ids = [...new Set(flows.flatMap((flow) => [flow.source, flow.target]))]
  const set = context.palette.set

  // ECharts keeps the gaps between the nodes of a stage whatever the height,
  // and with forty categories at ten pixels each the gaps alone are taller
  // than the tile: every node then gets a height below zero and they fall on
  // top of each other. So the gaps shrink with the most crowded stage.
  const stages = ids.map(stageOf)
  const crowd = Math.max(...[...new Set(stages)].map((stage) => stages.filter((each) => each === stage).length))
  const room = context.look.small ? 40 : 100
  const nodeGap = crowd > 1 ? Math.max(0, Math.min(10, Math.floor(room / (crowd - 1)))) : 10
  const last = Math.max(...stages)

  const option = context.base()
  option.tooltip.trigger = 'item'
  option.tooltip.formatter = (p: { dataType: string; data: Flow & { name?: string }; value: number; name: string }) =>
    p.dataType === 'edge'
      ? `${escape(shownName(p.data.source))} → ${escape(shownName(p.data.target))}<br/><b>${context.format(p.data.value)}</b>`
      : `${escape(shownName(p.name))}<br/><b>${context.format(Number(p.value))}</b>`
  option.series = [
    {
      type: 'sankey',
      // Each node stands in the column of its stage, also where a path ends early.
      data: ids.map((name, i) => ({ name, depth: stages[i], itemStyle: { color: set[i % set.length] } })),
      links: flows,
      top: context.look.title ? 40 : 16,
      bottom: 16,
      left: 16,
      // The last stage has its names on the left, over the flows coming in,
      // so that a small tile does not give a third of its width to them.
      right: 16,
      nodeGap,
      nodeWidth: 14,
      layoutIterations: 48,
      emphasis: { focus: 'adjacency' },
      lineStyle: { color: 'gradient', curveness: 0.5, opacity: 0.35 },
      itemStyle: { borderWidth: 0, borderRadius: 3 },
      label: { show: context.look.showLabels, color: context.text, formatter: (p: { name: string }) => shownName(p.name) },
      levels: last > 0 ? [{ depth: last, label: { position: 'left' } }] : [],
      // Where the nodes are too close for every name, the tooltip still has them.
      labelLayout: { hideOverlap: true },
      animationDurationUpdate: 750,
    },
  ]
  return { option }
}
