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
/*
 * A SELECT as a visual builder sees it, and the edits a builder makes.
 *
 * Langium-free, so it runs beside the editor rather than in the worker.
 * The model is read from the parse tree the language server sends - the
 * same langium/ast tree the AST view shows - so the text stays the one
 * source: the builder never holds a query of its own. Every action is a
 * minimal patch to the text at the offsets the tree carries, applied as one
 * transaction, so one undo step; the server reparses and the builder
 * redraws from the new tree.
 */

import type { AstTreeNode } from 'org.eclipse.daanse.board.app.lib.api.lsp'

export interface TextEdit {
  from: number
  to: number
  insert: string
}

export interface Span {
  node: AstTreeNode
  from: number
  to: number
  text: string
}

export interface SetModel {
  /** The axis expression or slicer itself. */
  expression: Span
  /** `{a, b}` or `(a, b)`: its items, which chips stand for. */
  items: Span[]
  /** 'set' for braces, 'tuple' for parentheses, 'expression' for anything else. */
  shape: 'set' | 'tuple' | 'expression'
}

export interface AxisModel extends SetModel {
  clause: Span
  /** COLUMNS, ROWS, ... or AXIS(n) as written. */
  target: Span
  name: string
  ordinal: number
  nonEmpty: boolean
  properties?: Span
}

export interface WithModel {
  span: Span
  kind: 'member' | 'set' | 'cell' | 'measure'
  name: string
}

export interface SelectModel {
  span: Span
  with: WithModel[]
  axes: AxisModel[]
  from: Span
  /** A subselect's own SELECT, nested like the outer one. */
  inner?: SelectModel
  slicer?: SetModel
  cellProperties?: Span
  /** Where the SELECT keyword ends: an axis goes after it when there is none. */
  selectKeywordEnd: number
}

export const AXIS_NAMES = ['COLUMNS', 'ROWS', 'PAGES', 'SECTIONS', 'CHAPTERS']

function span(node: AstTreeNode, text: string): Span {
  const from = node.offset ?? 0
  const to = from + (node.length ?? 0)
  return { node, from, to, text: text.slice(from, to) }
}

function child(node: AstTreeNode, property: string): AstTreeNode | undefined {
  return node.children.find(c => c.property === property)
}

function children(node: AstTreeNode, property: string): AstTreeNode[] {
  return node.children.filter(c => c.property === property)
}

function located(node: AstTreeNode | undefined): node is AstTreeNode {
  return !!node && node.offset !== undefined && node.length !== undefined
}

function scalar(node: AstTreeNode, property: string): string | undefined {
  const value = child(node, property)?.value
  return value === undefined ? undefined : value.replace(/^"|"$/g, '')
}

function setOf(node: AstTreeNode, text: string): SetModel {
  const expression = span(node, text)
  if (node.label === 'SetExpression') {
    return { expression, items: children(node, 'items').filter(located).map(n => span(n, text)), shape: 'set' }
  }
  if (node.label === 'TupleExpression') {
    return { expression, items: children(node, 'items').filter(located).map(n => span(n, text)), shape: 'tuple' }
  }
  return { expression, items: [expression], shape: 'expression' }
}

function ordinalOf(target: AstTreeNode, text: string, index: number): { name: string; ordinal: number } {
  if (target.label === 'NamedAxis') {
    const name = (scalar(target, 'name') ?? '').toUpperCase()
    return { name, ordinal: Math.max(0, AXIS_NAMES.indexOf(name)) }
  }
  const written = span(target, text).text
  const number = Number(/\d+/.exec(written)?.[0] ?? index)
  return { name: written, ordinal: number }
}

const WITH_KINDS: Record<string, WithModel['kind']> = {
  WithMember: 'member',
  WithSet: 'set',
  WithCellCalculation: 'cell',
  WithMeasure: 'measure',
}

export function readSelect(node: AstTreeNode, text: string): SelectModel | null {
  if (node.label !== 'SelectStatement' || !located(node)) return null
  const fromNode = child(node, 'from')
  if (!located(fromNode)) return null
  // A DMV lists a rowset's columns: nothing here - axes, slicer, subcubes - applies to it.
  if (fromNode.label === 'SystemRowsetReference') return null

  const withs = children(node, 'with')
    .filter(located)
    .map(entry => ({
      span: span(entry, text),
      kind: WITH_KINDS[entry.label] ?? 'member',
      name: scalar(entry, 'name') ?? '',
    }))

  const axes = children(node, 'axes')
    .filter(located)
    .flatMap((clause, index) => {
      const set = child(clause, 'set')
      const target = child(clause, 'target')
      if (!located(set) || !located(target)) return []
      const { name, ordinal } = ordinalOf(target, text, index)
      const properties = child(clause, 'dimensionProperties')
      return [
        {
          ...setOf(set, text),
          clause: span(clause, text),
          target: span(target, text),
          name,
          ordinal,
          nonEmpty: scalar(clause, 'nonEmpty') === 'true',
          properties: located(properties) ? span(properties, text) : undefined,
        },
      ]
    })

  const slicer = child(node, 'slicer')
  const cell = child(node, 'cellProperties')
  const select = fromNode.label === 'SubSelect' ? child(fromNode, 'select') : undefined

  const start = node.offset!
  const head = withs.length ? withs[withs.length - 1].span.to : start
  const keyword = /\bSELECT\b/i.exec(text.slice(head, fromNode.offset))
  return {
    span: span(node, text),
    with: withs,
    axes,
    from: span(fromNode, text),
    inner: select ? (readSelect(select, text) ?? undefined) : undefined,
    slicer: located(slicer) ? setOf(slicer, text) : undefined,
    cellProperties: located(cell) ? span(cell, text) : undefined,
    selectKeywordEnd: keyword ? head + keyword.index + keyword[0].length : head,
  }
}

/** The first SELECT of the document, if its tree has one. */
export function readDocument(root: AstTreeNode | undefined, text: string): SelectModel | null {
  if (!root) return null
  for (const statement of children(root, 'statements')) {
    const model = readSelect(statement, text)
    if (model) return model
  }
  return readSelect(root, text)
}

/* ---- edits -------------------------------------------------------- */

/*
 * Past PAGES the names part ways: SSAS counts SECTIONS as axis 3 and
 * CHAPTERS as 4, Mondrian the other way round. AXIS(n) means the same
 * everywhere, so that is what a new axis is written as from 3 on.
 */
const PORTABLE_AXIS_NAMES = ['COLUMNS', 'ROWS', 'PAGES']

/** The next axis nobody uses: PAGES after ROWS, then AXIS(3), AXIS(4), ... */
export function nextAxis(select: SelectModel): { name: string; ordinal: number } {
  const used = new Set(select.axes.map(a => a.ordinal))
  let ordinal = 0
  while (used.has(ordinal)) ordinal++
  return { name: PORTABLE_AXIS_NAMES[ordinal] ?? `AXIS(${ordinal})`, ordinal }
}

/** Removes one item of a set or tuple, with the comma that separated it. */
export function removeItem(model: SetModel, index: number): TextEdit[] {
  const items = model.items
  const item = items[index]
  if (!item) return []
  if (model.shape === 'expression' || items.length === 1) {
    // The last item: the container stays, empty.
    if (model.shape === 'expression') return [{ from: item.from, to: item.to, insert: '{}' }]
    return [{ from: model.expression.from + 1, to: model.expression.to - 1, insert: '' }]
  }
  if (index < items.length - 1) return [{ from: item.from, to: items[index + 1].from, insert: '' }]
  return [{ from: items[index - 1].to, to: item.to, insert: '' }]
}

/** Adds an item at the end of a set or tuple; anything else becomes a set holding both. */
export function addItem(model: SetModel, fragment: string, before?: number): TextEdit[] {
  const items = model.items
  if (model.shape === 'expression') {
    return [{ from: model.expression.from, to: model.expression.to, insert: `{${model.expression.text}, ${fragment}}` }]
  }
  if (!items.length) return [{ from: model.expression.from + 1, to: model.expression.to - 1, insert: fragment }]
  if (before !== undefined && items[before]) return [{ from: items[before].from, to: items[before].from, insert: `${fragment}, ` }]
  const last = items[items.length - 1]
  return [{ from: last.to, to: last.to, insert: `, ${fragment}` }]
}

/** The axis crossed with another set: CrossJoin(axis, fragment). */
export function crossJoin(model: SetModel, fragment: string): TextEdit[] {
  const inside = model.expression.text.trim() === '{}' ? fragment : `CrossJoin(${model.expression.text}, ${fragment})`
  return [{ from: model.expression.from, to: model.expression.to, insert: inside }]
}

export function toggleNonEmpty(axis: AxisModel, text: string): TextEdit[] {
  if (axis.nonEmpty) {
    const match = /^NON\s+EMPTY\s*/i.exec(text.slice(axis.clause.from))
    return match ? [{ from: axis.clause.from, to: axis.clause.from + match[0].length, insert: '' }] : []
  }
  return [{ from: axis.clause.from, to: axis.clause.from, insert: 'NON EMPTY ' }]
}

/** Swaps two axes by swapping what they are ON - the sets stay where they are written. */
export function swapAxes(a: AxisModel, b: AxisModel): TextEdit[] {
  return [
    { from: a.target.from, to: a.target.to, insert: b.target.text },
    { from: b.target.from, to: b.target.to, insert: a.target.text },
  ]
}

export function addAxis(select: SelectModel, fragment = '{}'): TextEdit[] {
  const { name } = nextAxis(select)
  if (!select.axes.length) return [{ from: select.selectKeywordEnd, to: select.selectKeywordEnd, insert: `\n  ${fragment} ON ${name}` }]
  const last = select.axes[select.axes.length - 1]
  return [{ from: last.clause.to, to: last.clause.to, insert: `,\n  ${fragment} ON ${name}` }]
}

export function removeAxis(select: SelectModel, index: number): TextEdit[] {
  const axes = select.axes
  const axis = axes[index]
  if (!axis) return []
  if (axes.length === 1) return [{ from: axis.clause.from, to: axis.clause.to, insert: '' }]
  if (index < axes.length - 1) return [{ from: axis.clause.from, to: axes[index + 1].clause.from, insert: '' }]
  return [{ from: axes[index - 1].clause.to, to: axis.clause.to, insert: '' }]
}

/** Puts a member into the slicer: a WHERE where there is none, a tuple where there is one. */
export function addToSlicer(select: SelectModel, fragment: string): TextEdit[] {
  const slicer = select.slicer
  if (!slicer) {
    const at = select.from.to
    return [{ from: at, to: at, insert: `\nWHERE (${fragment})` }]
  }
  if (slicer.shape === 'tuple') return addItem(slicer, fragment)
  return [{ from: slicer.expression.from, to: slicer.expression.to, insert: `(${slicer.expression.text}, ${fragment})` }]
}

export function removeFromSlicer(select: SelectModel, text: string, index: number): TextEdit[] {
  const slicer = select.slicer
  if (!slicer) return []
  if (slicer.items.length <= 1) {
    const before = text.slice(0, slicer.expression.from)
    const keyword = /\s*\bWHERE\s*$/i.exec(before)
    const from = keyword ? slicer.expression.from - keyword[0].length : slicer.expression.from
    return [{ from, to: slicer.expression.to, insert: '' }]
  }
  return removeItem(slicer, index)
}

/** Moves an item from one set to another: removed here, appended there, in one transaction. */
export function moveItem(from: SetModel, index: number, to: SetModel): TextEdit[] {
  const item = from.items[index]
  if (!item) return []
  return [...removeItem(from, index), ...addItem(to, item.text)]
}

/** Moves an item before another one of the same set. */
export function reorder(model: SetModel, index: number, before: number): TextEdit[] {
  if (index === before || index + 1 === before) return []
  const item = model.items[index]
  const target = model.items[before]
  if (!item || !target) return []
  return [...removeItem(model, index), { from: target.from, to: target.from, insert: `${item.text}, ` }]
}

/** A calculated member or a named set at the head of the statement. */
export function addWith(select: SelectModel, definition: string): TextEdit[] {
  if (select.with.length) {
    const last = select.with[select.with.length - 1].span
    return [{ from: last.to, to: last.to, insert: `\n  ${definition}` }]
  }
  return [{ from: select.span.from, to: select.span.from, insert: `WITH\n  ${definition}\n` }]
}

export function removeWith(select: SelectModel, index: number, text: string): TextEdit[] {
  const entry = select.with[index]
  if (!entry) return []
  if (select.with.length === 1) {
    const keyword = /\bWITH\s*$/i.exec(text.slice(select.span.from, entry.span.from))
    const from = keyword ? select.span.from + keyword.index : entry.span.from
    const after = /^\s*/.exec(text.slice(entry.span.to))?.[0].length ?? 0
    return [{ from, to: entry.span.to + after, insert: '' }]
  }
  const next = select.with[index + 1]
  if (next) return [{ from: entry.span.from, to: next.span.from, insert: '' }]
  return [{ from: select.with[index - 1].span.to, to: entry.span.to, insert: '' }]
}

/** FROM [cube] becomes FROM (SELECT fragment ON COLUMNS FROM [cube]). */
export function wrapSubcube(select: SelectModel, fragment: string): TextEdit[] {
  return [{ from: select.from.from, to: select.from.to, insert: `(SELECT ${fragment} ON COLUMNS FROM ${select.from.text})` }]
}

/** A subselect gives way to what it selects from. */
export function unwrapSubcube(select: SelectModel): TextEdit[] {
  const inner = select.inner
  if (!inner) return []
  return [{ from: select.from.from, to: select.from.to, insert: inner.from.text }]
}

export function removeSpan(target: Span, text: string): TextEdit[] {
  const before = /\s*$/.exec(text.slice(0, target.from))?.[0].length ?? 0
  return [{ from: target.from - before, to: target.to, insert: '' }]
}
