/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

// Synthetic pivot data in the shape lib.datasource.xmla hands to the widget:
// { rows, columns, cells, propertiesRows, propertiesCols, tableState }.
// Every axis is a crossjoin of hierarchies; a hierarchy shows its top level
// plus the children of every expanded member, like DrilldownMember does.

export interface HierarchySpec {
  name: string
  // members per level: [10, 20] = 10 top members, each with 20 children
  fanout: number[]
}

export interface AxisSpec {
  hierarchies: HierarchySpec[]
}

export interface ScenarioSpec {
  rows: AxisSpec
  columns: AxisSpec
  // members expanded before the first render
  expanded?: { area: 'rows' | 'columns'; uName: string }[]
  // every n-th cell is updateable, 0 = none
  updateableEvery?: number
}

export interface Member {
  UName: string
  Caption: string
  LName: string
  LNum: string
  DisplayInfo: number
  HIERARCHY_UNIQUE_NAME: string
  PARENT_UNIQUE_NAME?: string
}

interface TreeNode {
  member: Member
  children: TreeNode[]
}

const buildTree = (h: HierarchySpec): TreeNode[] => {
  const hName = `[${h.name}]`
  const build = (level: number, parent?: Member): TreeNode[] => {
    const count = h.fanout[level]
    if (count === undefined) return []
    const nodes: TreeNode[] = []
    for (let k = 0; k < count; k++) {
      const path = parent ? `${parent.UName.slice(0, -1)}.${k}]` : `${hName}.[${k}]`
      const childCount = h.fanout[level + 1] ?? 0
      const member: Member = {
        UName: path,
        Caption: parent ? `${parent.Caption}.${k}` : `${h.name} ${k}`,
        LName: `${hName}.[L${level}]`,
        LNum: String(level),
        DisplayInfo: childCount,
        HIERARCHY_UNIQUE_NAME: hName,
      }
      if (parent) member.PARENT_UNIQUE_NAME = parent.UName
      const node: TreeNode = { member, children: [] }
      node.children = build(level + 1, member)
      nodes.push(node)
    }
    return nodes
  }
  return build(0)
}

const visibleMembers = (roots: TreeNode[], expanded: Set<string>): Member[] => {
  const out: Member[] = []
  const walk = (nodes: TreeNode[]) => {
    for (const node of nodes) {
      out.push(node.member)
      if (expanded.has(node.member.UName)) walk(node.children)
    }
  }
  walk(roots)
  return out
}

const crossjoin = (lists: Member[][]): Member[][] => {
  let result: Member[][] = [[]]
  for (const list of lists) {
    const next: Member[][] = []
    for (const prefix of result) {
      for (const m of list) next.push([...prefix, m])
    }
    result = next
  }
  return result
}

// Deterministic value per (row tuple, column tuple), stable across expands
const hash = (s: string) => {
  let h = 2166136261
  for (let k = 0; k < s.length; k++) {
    h ^= s.charCodeAt(k)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export class PivotGenerator {
  private rowTrees: TreeNode[][]
  private colTrees: TreeNode[][]
  private expanded = { rows: [] as Member[], columns: [] as Member[] }
  private index = new Map<string, Member>()

  constructor(private spec: ScenarioSpec) {
    this.rowTrees = spec.rows.hierarchies.map(buildTree)
    this.colTrees = spec.columns.hierarchies.map(buildTree)
    const register = (nodes: TreeNode[]) =>
      nodes.forEach(n => {
        this.index.set(n.member.UName, n.member)
        register(n.children)
      })
    ;[...this.rowTrees, ...this.colTrees].forEach(register)
    for (const e of spec.expanded ?? []) this.expand(e.area, e.uName)
  }

  expand(area: 'rows' | 'columns', uName: string) {
    const member = this.index.get(uName)
    if (!member || this.expanded[area].some(m => m.UName === uName)) return
    this.expanded[area].push(member)
  }

  collapse(area: 'rows' | 'columns', uName: string) {
    this.expanded[area] = this.expanded[area].filter(m => m.UName !== uName)
  }

  build() {
    const set = (area: 'rows' | 'columns') => new Set(this.expanded[area].map(m => m.UName))
    const rows = crossjoin(this.rowTrees.map(t => visibleMembers(t, set('rows'))))
    const columns = crossjoin(this.colTrees.map(t => visibleMembers(t, set('columns'))))
    const colKeys = columns.map(c => c.map(m => m.UName).join())
    const every = this.spec.updateableEvery ?? 0
    const cells = rows.map((r, j) => {
      const rowKey = r.map(m => m.UName).join()
      return colKeys.map((colKey, i) => {
        const value = (hash(rowKey + colKey) % 200000) / 100 - 500
        const cell: Record<string, any> = {
          Value: value,
          FmtValue: value.toFixed(2),
        }
        if (every && (i + j) % every === 0) cell.UPDATEABLE = 1
        return cell
      })
    })
    return {
      rows,
      columns,
      cells,
      propertiesRows: [],
      propertiesCols: [],
      tableState: {
        rowsExpandedMembers: [...this.expanded.rows],
        rowsDrilldownMembers: [],
        columnsExpandedMembers: [...this.expanded.columns],
        columnsDrilldownMembers: [],
      },
    }
  }
}
