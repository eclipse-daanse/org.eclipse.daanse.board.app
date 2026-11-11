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

import { columnNamed, toNumber, type Table } from './table'
import { Context, escape } from './context'

export interface Node {
  name: string
  value?: number
  children?: Node[]
}

/**
 * The rows as a tree: each row's levels are a path from the top, and its
 * value sits at the end of it. Rows that share the start of their path
 * share those nodes, so 1997 - Q1 and 1997 - Q2 hang off one 1997.
 */
export function treeOf(context: Context): Node[] | undefined {
  const value = context.column(context.look.valueColumn, context.columns.numbers[0])
  if (value === undefined) return undefined
  const root: Node = { name: '', children: [] }
  const index = new Map<Node, Map<string, Node>>()
  const childNamed = (parent: Node, name: string) => {
    let children = index.get(parent)
    if (!children) index.set(parent, (children = new Map()))
    let child = children.get(name)
    if (!child) {
      child = { name }
      children.set(name, child)
      ;(parent.children ??= []).push(child)
    }
    return child
  }
  for (const row of context.table.rows) {
    const amount = toNumber(row[value])
    // A ring or a tile is as large as its value: none, or less than none, has no size.
    if (amount === null || amount <= 0) continue
    const path = context.path(row)
    if (!path.length) path.push(String(context.table.headers[value]))
    let node = root
    for (const part of path) node = childNamed(node, part)
    node.value = (node.value ?? 0) + amount
  }
  /*
   * A node with children of its own and a value of its own - a total row
   * above its breakdown - is as large as the larger of the two, so the
   * breakdown never spills past the ring it belongs to.
   */
  const settle = (node: Node): number => {
    if (!node.children?.length) return node.value ?? 0
    const sum = node.children.reduce((total, child) => total + settle(child), 0)
    node.value = Math.max(sum, node.value ?? 0)
    return node.value
  }
  settle(root)
  return root.children?.length ? root.children : undefined
}

export function depthOf(nodes: Node[]): number {
  return nodes.reduce((deepest, node) => Math.max(deepest, 1 + (node.children ? depthOf(node.children) : 0)), 0)
}

export function pathTooltip(context: Context) {
  return (p: { treePathInfo?: { name: string }[]; name: string; value: number }) => {
    const path = (p.treePathInfo ?? [{ name: '' }, { name: p.name }]).slice(1).map((step) => escape(step.name))
    return `${path.join(' › ')}<br/><b>${context.format(Number(p.value))}</b>`
  }
}

/**
 * A single row of several numbers - the measures on one axis, the members
 * on the other - read as one row per column, so that its columns become the
 * pieces or tiles rather than the first of them one piece filling the chart.
 */
export function acrossOneRow(context: Context): Context {
  const { table, columns, look } = context
  if (table.rows.length !== 1 || columns.numbers.length < 2 || columnNamed(table, look.valueColumn) !== undefined) return context
  const row = table.rows[0]
  const turned: Table = {
    headers: ['Caption', context.label(row) || String(table.headers[columns.numbers[0]])],
    rows: columns.numbers.map((column) => [table.headers[column], row[column]]),
  }
  return new Context(turned, look)
}
