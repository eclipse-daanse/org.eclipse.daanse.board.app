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

import { optionalArrayToArray } from './helpers'

/** A node of the answer in the former SOAP client's shape - untyped, as that client left it. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type LegacyNode = any

/*
 * A whole cellset, every axis kept: what parseMdxRequest flattens to two
 * axes stays here as it came, so the slice a widget shows can change
 * without asking the server again.
 *
 * Plain data throughout - a widget receives it through a JSON round trip.
 * The raw tuples and cells are kept as they arrived, because a slice is
 * handed to parseMdxRequest again and that reads them in the former shape.
 */

export interface CellsetMember {
  uniqueName: string
  caption: string
  hierarchy: string
  levelName: string
  levelNumber: number
  /** Null for a member at the top of its hierarchy. */
  parentUniqueName: string | null
}

export interface CellsetPosition {
  index: number
  members: CellsetMember[]
  /** The tuple's identity: its members' unique names, joined. */
  key: string
  /** The tuple as people read it: its captions, joined. */
  label: string
}

export interface CellsetAxis {
  ordinal: number
  positions: CellsetPosition[]
  /** The tuples as they arrived. */
  rawTuples: LegacyNode[]
}

export interface Cellset {
  /** COLUMNS, ROWS, PAGES, CHAPTERS - as many as the query asked for. */
  axes: CellsetAxis[]
  /** By CellOrdinal; a cell the server sent no value for is absent. */
  cells: Record<string, LegacyNode>
  /** The rest of <root>, for a slice to be rebuilt from. */
  slicerAxis: LegacyNode
  axesInfo: LegacyNode[]
  slicerAxisInfo: LegacyNode
  cellInfo: LegacyNode
}

/** Which page and chapter a table shows; -1 where the axis is absent. */
export interface SliceRef {
  axis2: number
  axis3: number
}

export interface CellValue {
  /** A number where the cell holds one, else the text it holds. */
  value: number | string
  formatted: string
  formatString: string | null
  foreColor: string | null
  backColor: string | null
}

export const KEY_SEPARATOR = '\u001f'
const LABEL_SEPARATOR = ' · '

function rootOf(response: LegacyNode): LegacyNode {
  return response?.Body?.ExecuteResponse?.return?.root ?? null
}

function textOf(value: LegacyNode): string | null {
  if (value === undefined || value === null) return null
  // An empty element arrives as an object holding only its attributes.
  if (typeof value === 'object') return null
  return String(value)
}

function memberOf(raw: LegacyNode): CellsetMember {
  return {
    uniqueName: textOf(raw.UName) ?? '',
    caption: textOf(raw.Caption) ?? textOf(raw.UName) ?? '',
    hierarchy: raw.__attrs?.Hierarchy ?? textOf(raw.HIERARCHY_UNIQUE_NAME) ?? '',
    levelName: textOf(raw.LName) ?? '',
    levelNumber: Number(textOf(raw.LNum) ?? 0),
    parentUniqueName: textOf(raw.PARENT_UNIQUE_NAME),
  }
}

function positionOf(rawTuple: LegacyNode, index: number): CellsetPosition {
  const members = optionalArrayToArray(rawTuple?.Member).map(memberOf)
  return {
    index,
    members,
    key: members.map(m => m.uniqueName).join(KEY_SEPARATOR),
    label: members.map(m => m.caption).join(LABEL_SEPARATOR),
  }
}

/** The cellset an Execute answered, or null when it holds none. */
export function parseCellset(response: LegacyNode): Cellset | null {
  const root = rootOf(response)
  if (!root) return null

  const axes: CellsetAxis[] = []
  let slicerAxis = null
  for (const axis of optionalArrayToArray(root.Axes?.Axis)) {
    const name: string = axis.__attrs?.name ?? ''
    if (name === 'SlicerAxis') {
      slicerAxis = axis
      continue
    }
    const ordinal = Number(name.replace('Axis', ''))
    if (!Number.isInteger(ordinal)) continue
    const rawTuples = optionalArrayToArray(axis.Tuples?.Tuple)
    axes[ordinal] = { ordinal, rawTuples, positions: rawTuples.map(positionOf) }
  }
  // An axis the query named but the server sent nothing for is empty, not absent.
  for (let i = 0; i < axes.length; i++) {
    axes[i] ??= { ordinal: i, rawTuples: [], positions: [] }
  }

  const cells: Record<string, LegacyNode> = {}
  for (const cell of optionalArrayToArray(root.CellData?.Cell)) {
    const ordinal = cell?.__attrs?.CellOrdinal
    if (ordinal !== undefined && cell.Value !== undefined) cells[ordinal] = cell
  }

  const axesInfo = optionalArrayToArray(root.OlapInfo?.AxesInfo?.AxisInfo)
  return {
    axes,
    cells,
    slicerAxis,
    axesInfo: axesInfo.filter((info: LegacyNode) => info.__attrs?.name !== 'SlicerAxis'),
    slicerAxisInfo: axesInfo.find((info: LegacyNode) => info.__attrs?.name === 'SlicerAxis') ?? null,
    cellInfo: root.OlapInfo?.CellInfo ?? null,
  }
}

export function axisCount(cellset: Cellset): number {
  return cellset.axes.length
}

/** The positions of an axis; none for an axis the query did not ask for. */
export function positionsOf(cellset: Cellset, axis: number): CellsetPosition[] {
  return cellset.axes[axis]?.positions ?? []
}

/**
 * Where a cell sits in CellData: axis 0 varies fastest. An axis the query
 * did not ask for counts as one position, so 2- and 3-axis cellsets are
 * addressed the same way.
 */
export function cellOrdinal(cellset: Cellset, coords: number[]): number {
  let ordinal = 0
  let stride = 1
  for (let axis = 0; axis < cellset.axes.length; axis++) {
    const size = cellset.axes[axis].positions.length
    const at = coords[axis] ?? 0
    if (at < 0 || at >= size) return -1
    ordinal += at * stride
    stride *= size
  }
  return ordinal
}

function numberOf(text: string): number | null {
  if (text.trim() === '') return null
  const value = Number(text)
  return Number.isFinite(value) ? value : null
}

/** The cell at the given position on each axis, or null when it is empty. */
export function getCell(cellset: Cellset, coords: number[]): CellValue | null {
  const ordinal = cellOrdinal(cellset, coords)
  if (ordinal < 0) return null
  const raw = cellset.cells[ordinal]
  if (!raw) return null
  const text = textOf(raw.Value)
  if (text === null) return null
  const value = numberOf(text) ?? text
  return {
    value,
    // Not every server sends FmtValue; a number then reads as the table shows it.
    formatted: textOf(raw.FmtValue) ?? (typeof value === 'number' ? value.toLocaleString() : text),
    formatString: textOf(raw.FormatString),
    foreColor: textOf(raw.FORE_COLOR) ?? textOf(raw.ForeColor),
    backColor: textOf(raw.BACK_COLOR) ?? textOf(raw.BackColor),
  }
}

/** The numeric value of a cell; null for an empty or a non-numeric one. */
export function numericValue(cell: CellValue | null): number | null {
  return cell && typeof cell.value === 'number' ? cell.value : null
}

export interface SliceMatrix {
  columns: CellsetPosition[]
  rows: CellsetPosition[]
  /** rows x columns; null where the cell is empty. */
  cells: (CellValue | null)[][]
}

/** The table of axes 0 and 1 at one page and chapter. */
export function getSlice(cellset: Cellset, slice: SliceRef): SliceMatrix {
  const columns = positionsOf(cellset, 0)
  const rows = cellset.axes.length > 1 ? positionsOf(cellset, 1) : []
  const rest = [slice.axis2, slice.axis3].slice(0, Math.max(0, cellset.axes.length - 2))
  const rowCoords = rows.length ? rows.map(r => r.index) : [0]
  const cells = rowCoords.map(row =>
    columns.map(column => getCell(cellset, [column.index, row, ...rest])),
  )
  return { columns, rows, cells }
}

/**
 * One slice as a two-axis Execute answer in the former shape - every
 * ordinal present, renumbered - so parseMdxRequest and the pivot table
 * read it exactly as they read a two-axis query.
 */
export function sliceResponse(cellset: Cellset, slice: SliceRef): LegacyNode {
  const columns = cellset.axes[0]
  const rows = cellset.axes[1]
  const width = columns?.positions.length ?? 0
  const height = rows ? rows.positions.length : 1
  const rest = [slice.axis2, slice.axis3].slice(0, Math.max(0, cellset.axes.length - 2))

  const cells = []
  for (let row = 0; row < height; row++) {
    for (let column = 0; column < width; column++) {
      const ordinal = row * width + column
      const raw = cellset.cells[cellOrdinal(cellset, [column, row, ...rest])]
      cells.push(raw ? { ...raw, __attrs: { ...raw.__attrs, CellOrdinal: String(ordinal) } } : { __attrs: { CellOrdinal: String(ordinal) } })
    }
  }

  const axis = (a: CellsetAxis, name: string) => ({
    Tuples: { Tuple: a.rawTuples },
    __attrs: { name },
  })
  const axes = [axis(columns ?? { ordinal: 0, rawTuples: [], positions: [] }, 'Axis0')]
  if (rows) axes.push(axis(rows, 'Axis1'))
  if (cellset.slicerAxis) axes.push(cellset.slicerAxis)

  const axesInfo = cellset.axesInfo.slice(0, rows ? 2 : 1)
  if (cellset.slicerAxisInfo) axesInfo.push(cellset.slicerAxisInfo)

  return {
    Body: {
      ExecuteResponse: {
        return: {
          root: {
            OlapInfo: { AxesInfo: { AxisInfo: axesInfo }, CellInfo: cellset.cellInfo },
            Axes: { Axis: axes },
            CellData: { Cell: cells },
          },
        },
      },
    },
  }
}

export interface AxisTreeNode {
  position: CellsetPosition
  children: AxisTreeNode[]
}

/**
 * An axis as a tree: a position hangs under the one holding its parent
 * member, when that parent is on the axis too. Tuples of several
 * hierarchies, and members whose parent is not there, stay at the top -
 * which makes a flat axis a flat list.
 */
export function axisTree(positions: CellsetPosition[]): AxisTreeNode[] {
  const nodes = positions.map(position => ({ position, children: [] as AxisTreeNode[] }))
  const byKey = new Map(nodes.map(n => [n.position.key, n]))
  const roots: AxisTreeNode[] = []
  for (const node of nodes) {
    const members = node.position.members
    const parent =
      members.length === 1 && members[0].parentUniqueName
        ? byKey.get(members[0].parentUniqueName)
        : undefined
    if (parent && parent !== node) parent.children.push(node)
    else roots.push(node)
  }
  return roots
}

export interface AxisOption {
  index: number
  label: string
  /** How far under the top of the axis tree; 0 for a flat axis. */
  depth: number
}

/** An axis as one list for a dropdown: in tree order, each position with its depth. */
export function axisOptions(positions: CellsetPosition[]): AxisOption[] {
  const options: AxisOption[] = []
  const walk = (nodes: AxisTreeNode[], depth: number) => {
    for (const node of nodes) {
      options.push({ index: node.position.index, label: node.position.label, depth })
      walk(node.children, depth + 1)
    }
  }
  walk(axisTree(positions), 0)
  return options
}

/** Whether a position has a child on the same axis. */
export function hasChildren(positions: CellsetPosition[], position: CellsetPosition): boolean {
  if (position.members.length !== 1) return false
  const name = position.members[0].uniqueName
  return positions.some(p => p.members.length === 1 && p.members[0].parentUniqueName === name)
}

// MDLEVEL_TYPE_TIME: every time level type (years, quarters, months ...) carries it.
const MDLEVEL_TYPE_TIME = 0x0004
// MD_DIMTYPE_TIME
const MD_DIMTYPE_TIME = 1

export interface AxisMetadata {
  levels?: { LEVEL_UNIQUE_NAME: string; LEVEL_TYPE: string | number; DIMENSION_UNIQUE_NAME?: string }[]
  dimensions?: { DIMENSION_UNIQUE_NAME: string; DIMENSION_TYPE: string | number }[]
}

/**
 * Whether an axis runs through time. The cellset does not say - a member
 * carries its level's name, not its type - so the metadata decides.
 */
export function isTimeAxis(positions: CellsetPosition[], metadata: AxisMetadata): boolean {
  if (!positions.length) return false
  const levels = new Map((metadata.levels ?? []).map(l => [l.LEVEL_UNIQUE_NAME, l]))
  const timeDimensions = new Set(
    (metadata.dimensions ?? [])
      .filter(d => Number(d.DIMENSION_TYPE) === MD_DIMTYPE_TIME)
      .map(d => d.DIMENSION_UNIQUE_NAME),
  )
  return positions.every(position =>
    position.members.length > 0 &&
    position.members.every(member => {
      const level = levels.get(member.levelName)
      if (!level) return false
      return (
        (Number(level.LEVEL_TYPE) & MDLEVEL_TYPE_TIME) !== 0 ||
        (level.DIMENSION_UNIQUE_NAME !== undefined && timeDimensions.has(level.DIMENSION_UNIQUE_NAME))
      )
    }),
  )
}

/* ----------------------------------------------------------- slice value */

export interface SliceValue {
  value: number | null
  /**
   * total: the cellset's own cell for the whole slice; sum: the visible
   * leaf cells added up here, for want of one; none: nothing that could
   * stand for the slice - an empty slice, or a measure that does not add up.
   */
  kind: 'total' | 'sum' | 'none'
}

const NON_ADDITIVE = /avg|average|mean|durchschnitt|mittel|ratio|rate|percent|%|count distinct|distinct/i

/** The measures the cellset carries, in the order they appear. */
export function measuresOf(cellset: Cellset): CellsetMember[] {
  const seen = new Map<string, CellsetMember>()
  for (const axis of cellset.axes.slice(0, 2)) {
    for (const position of axis.positions) {
      for (const member of position.members) {
        if (member.hierarchy === '[Measures]' && !seen.has(member.uniqueName)) {
          seen.set(member.uniqueName, member)
        }
      }
    }
  }
  if (seen.size) return [...seen.values()]
  // A lone measure can stand in the WHERE clause instead; the slicer axis names it.
  return slicerMembers(cellset).filter(member => member.hierarchy === '[Measures]')
}

/** The members of the slicer axis - what the WHERE clause fixed. */
function slicerMembers(cellset: Cellset): CellsetMember[] {
  const tuples = optionalArrayToArray(cellset.slicerAxis?.Tuples?.Tuple)
  return tuples.flatMap((tuple: LegacyNode) => optionalArrayToArray(tuple?.Member).map(memberOf))
}

/**
 * Whether adding up a measure's cells means anything. An average or a
 * ratio added up does not, so nothing is summed for one. Known by its
 * name or its format, as the cellset says nothing more about it.
 */
export function isAdditive(cellset: Cellset, measure?: string): boolean {
  const name = measure ?? measuresOf(cellset)[0]?.uniqueName ?? ''
  if (!name || NON_ADDITIVE.test(name)) return false
  const positions = cellset.axes.slice(0, 2).map(a => a.positions)
  for (const [axis, list] of positions.entries()) {
    const position = list.find(p => p.members.some(m => m.uniqueName === name))
    if (!position) continue
    for (const ordinal of Object.keys(cellset.cells)) {
      const coords = coordsOf(cellset, Number(ordinal))
      if (coords[axis] === position.index) {
        return !NON_ADDITIVE.test(textOf(cellset.cells[ordinal].FormatString) ?? '')
      }
    }
  }
  // Not on an axis - in the WHERE clause - it formats every cell.
  const anyCell = Object.values(cellset.cells)[0]
  return !NON_ADDITIVE.test(textOf(anyCell?.FormatString) ?? '')
}

function coordsOf(cellset: Cellset, ordinal: number): number[] {
  const coords = []
  let rest = ordinal
  for (const axis of cellset.axes) {
    const size = axis.positions.length || 1
    coords.push(rest % size)
    rest = Math.floor(rest / size)
  }
  return coords
}

/**
 * The position standing for the whole axis: the one whose every member is
 * the top of its hierarchy here, above every other position's member of it.
 * Measures do not count - they are chosen, not totalled.
 */
function totalPosition(positions: CellsetPosition[]): CellsetPosition | null {
  if (positions.length === 1) return positions[0]
  const candidates = positions.filter(p =>
    p.members.every(member => {
      if (member.hierarchy === '[Measures]') return true
      return positions.every(other =>
        other === p ||
        other.members.every(o => o.hierarchy !== member.hierarchy || o.levelNumber > member.levelNumber),
      )
    }),
  )
  return candidates.length === 1 ? candidates[0] : null
}

function leaves(positions: CellsetPosition[]): CellsetPosition[] {
  return positions.filter(p => !hasChildren(positions, p))
}

/**
 * One number for a whole slice, for a heatmap to colour it by: the
 * cellset's own total where it has one, else the visible leaf cells added
 * up - unless the measure does not add up, where a sum would mislead.
 */
export function sliceValue(cellset: Cellset, slice: SliceRef, measure?: string): SliceValue {
  // No measure named: the first one, as a heatmap without a choice shows.
  measure ??= measuresOf(cellset)[0]?.uniqueName
  const matrix = getSlice(cellset, slice)
  const withMeasure = (positions: CellsetPosition[]) =>
    measure && positions.some(p => p.members.some(m => m.uniqueName === measure))
      ? positions.filter(p => p.members.some(m => m.uniqueName === measure))
      : positions

  const columns = withMeasure(matrix.columns)
  const rows = matrix.rows.length ? withMeasure(matrix.rows) : []
  const at = (column: CellsetPosition, row?: CellsetPosition) =>
    numericValue(matrix.cells[row ? matrix.rows.indexOf(row) : 0]?.[matrix.columns.indexOf(column)] ?? null)

  const totalColumn = totalPosition(columns)
  const totalRow = rows.length ? totalPosition(rows) : null
  if (totalColumn && (totalRow || !rows.length)) {
    const value = at(totalColumn, totalRow ?? undefined)
    if (value !== null) return { value, kind: 'total' }
  }

  if (!isAdditive(cellset, measure)) return { value: null, kind: 'none' }

  let sum = 0
  let found = false
  for (const column of leaves(columns)) {
    for (const row of rows.length ? leaves(rows) : [undefined]) {
      const value = at(column, row)
      if (value !== null) {
        sum += value
        found = true
      }
    }
  }
  return found ? { value: sum, kind: 'sum' } : { value: null, kind: 'none' }
}

/* ------------------------------------------------------------- comparing */

export interface AlignedTable {
  columns: CellsetPosition[]
  rows: CellsetPosition[]
  a: (CellValue | null)[][]
  b: (CellValue | null)[][]
}

function union(first: CellsetPosition[], second: CellsetPosition[]): CellsetPosition[] {
  const keys = new Set(first.map(p => p.key))
  return [...first, ...second.filter(p => !keys.has(p.key))]
}

/**
 * Two slices side by side, rows and columns matched by their members'
 * unique names - never by position - over the union of both. A cell one
 * side does not have is empty there.
 */
export function alignSlices(a: SliceMatrix, b: SliceMatrix): AlignedTable {
  const columns = union(a.columns, b.columns)
  const rows = union(a.rows, b.rows)
  const lookup = (m: SliceMatrix) => {
    const columnAt = new Map(m.columns.map((c, i) => [c.key, i]))
    const rowAt = new Map(m.rows.map((r, i) => [r.key, i]))
    return (row: CellsetPosition | undefined, column: CellsetPosition) => {
      const c = columnAt.get(column.key)
      const r = row ? rowAt.get(row.key) : 0
      if (c === undefined || r === undefined) return null
      return m.cells[r]?.[c] ?? null
    }
  }
  const inA = lookup(a)
  const inB = lookup(b)
  const rowList = rows.length ? rows : [undefined]
  return {
    columns,
    rows,
    a: rowList.map(row => columns.map(column => inA(row, column))),
    b: rowList.map(row => columns.map(column => inB(row, column))),
  }
}

export interface Difference {
  /** B - A; null when either side is empty or not a number. */
  absolute: number | null
  /** (B - A) / |A|; null as well when A is zero. */
  percent: number | null
}

export function difference(a: number | null, b: number | null): Difference {
  if (a === null || b === null || !Number.isFinite(a) || !Number.isFinite(b)) {
    return { absolute: null, percent: null }
  }
  const absolute = b - a
  const percent = a === 0 ? null : (absolute / Math.abs(a)) * 100
  return { absolute, percent: percent !== null && Number.isFinite(percent) ? percent : null }
}

/**
 * Whether a difference is worth drawing attention to. The threshold is in
 * percent where there is a percentage, else in the measure's own units.
 */
export function isSignificant(diff: Difference, threshold: number): boolean {
  if (diff.percent !== null) return Math.abs(diff.percent) >= threshold
  if (diff.absolute !== null) return Math.abs(diff.absolute) >= threshold
  return false
}

/** Whether a row or column changes anywhere, for hiding the ones that do not. */
export function changes(aligned: AlignedTable, row: number | null, column: number | null): boolean {
  const rows = row === null ? aligned.a.map((_, i) => i) : [row]
  const columns = column === null ? aligned.columns.map((_, i) => i) : [column]
  return rows.some(r =>
    columns.some(c => {
      const a = numericValue(aligned.a[r]?.[c] ?? null)
      const b = numericValue(aligned.b[r]?.[c] ?? null)
      if (a === null && b === null) return false
      return a !== b
    }),
  )
}

/* ---------------------------------------------------------------- slices */

/** The slices a cellset has: one per page and chapter, -1 where an axis is absent. */
export function slicesOf(cellset: Cellset): SliceRef[] {
  const pages = cellset.axes.length > 2 ? positionsOf(cellset, 2).map(p => p.index) : [-1]
  const chapters = cellset.axes.length > 3 ? positionsOf(cellset, 3).map(p => p.index) : [-1]
  return chapters.flatMap(axis3 => pages.map(axis2 => ({ axis2, axis3 })))
}

/** A slice by its members' unique names - what other widgets speak. */
export function sliceByKeys(cellset: Cellset, keys: { axis2?: string; axis3?: string }): SliceRef | null {
  const find = (axis: number, key?: string) => {
    if (cellset.axes.length <= axis) return -1
    if (key === undefined) return 0
    const position = positionsOf(cellset, axis).find(p => p.key === key)
    return position ? position.index : null
  }
  const axis2 = find(2, keys.axis2)
  const axis3 = find(3, keys.axis3)
  if (axis2 === null || axis3 === null) return null
  return { axis2, axis3 }
}

export function sliceKeys(cellset: Cellset, slice: SliceRef): { axis2: string | null; axis3: string | null } {
  return {
    axis2: positionsOf(cellset, 2)[slice.axis2]?.key ?? null,
    axis3: positionsOf(cellset, 3)[slice.axis3]?.key ?? null,
  }
}

/** Where each axis of an ordinal sits: the inverse of cellOrdinal. */
function coordinatesOf(sizes: number[], ordinal: number): number[] {
  const coords: number[] = []
  for (const size of sizes) {
    coords.push(size > 0 ? ordinal % size : 0)
    ordinal = size > 0 ? Math.floor(ordinal / size) : 0
  }
  return coords
}

/**
 * The same cells seen with the axes in another order: `order[i]` names the
 * axis that becomes axis i. Turning a page axis into columns is the order
 * [2, 1, 0], say. Nothing is asked again - every cell is moved to the
 * ordinal its coordinates have under the new order.
 */
export function permuteAxes(cellset: Cellset, order: number[]): Cellset {
  const count = cellset.axes.length
  if (order.length !== count || new Set(order).size !== count || order.some(i => i < 0 || i >= count)) {
    throw new Error(`permuteAxes: ${JSON.stringify(order)} is no order of ${count} axes`)
  }
  if (order.every((from, to) => from === to)) return cellset

  const sizes = cellset.axes.map(axis => axis.positions.length)
  const axes = order.map((from, to) => ({ ...cellset.axes[from], ordinal: to }))
  const turned: Cellset = { ...cellset, axes, cells: {} }
  for (const [ordinal, cell] of Object.entries(cellset.cells)) {
    const coords = coordinatesOf(sizes, Number(ordinal))
    const next = cellOrdinal(turned, order.map(from => coords[from]))
    turned.cells[next] = { ...cell, __attrs: { ...cell.__attrs, CellOrdinal: String(next) } }
  }
  const info = (from: number) => {
    const entry = cellset.axesInfo[from]
    return entry ? { ...entry, __attrs: { ...entry.__attrs, name: `Axis${order.indexOf(from)}` } } : entry
  }
  turned.axesInfo = order.map(info)
  return turned
}

/** Every combination of positions of the axes from `first` on - one per page/chapter/... */
export function combinationsOf(cellset: Cellset, first = 2): number[][] {
  let combos: number[][] = [[]]
  for (let axis = first; axis < cellset.axes.length; axis++) {
    const size = cellset.axes[axis].positions.length
    combos = combos.flatMap(combo => Array.from({ length: size }, (_, at) => [...combo, at]))
  }
  return combos
}

function csvField(value: unknown): string {
  const text = value === null || value === undefined ? '' : String(value)
  return /[",\n\r;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text
}

/** Lines of comma-separated fields, as spreadsheets read them. */
export function toCsv(rows: unknown[][]): string {
  return rows.map(row => row.map(csvField).join(',')).join('\r\n')
}

/**
 * A cellset as CSV. Up to two axes it is the table on screen - row captions
 * down the side, column captions across, raw values in the cells. With more
 * axes it is one line per cell, a column per axis, since a matrix cannot
 * hold a third dimension.
 */
/** An axis as its hierarchies: `Product × Time`; by its number where it has no tuple. */
function axisHeading(axis: CellsetAxis, index: number): string {
  const members = axis.positions[0]?.members ?? []
  const names = members.map(member => member.hierarchy.replace(/^\[|\]$/g, '').replace(/\]\.\[/g, '.')).filter(Boolean)
  return names.length ? names.join(' × ') : `Axis${index}`
}

export function cellsetToCsv(cellset: Cellset): string {
  const columns = positionsOf(cellset, 0)
  if (cellset.axes.length <= 2) {
    const rows = cellset.axes.length > 1 ? positionsOf(cellset, 1) : []
    const header = ['', ...columns.map(column => column.label)]
    const body = (rows.length ? rows : [null]).map(row => [
      row?.label ?? '',
      ...columns.map(column => getCell(cellset, [column.index, row?.index ?? 0])?.value ?? ''),
    ])
    return toCsv([header, ...body])
  }
  // Each axis is called by what it holds, so a reordered answer still reads right.
  const header = [...cellset.axes.map(axisHeading), 'Value', 'Formatted']
  const lines: unknown[][] = [header]
  const sizes = cellset.axes.map(axis => axis.positions.length)
  const total = sizes.reduce((a, b) => a * b, 1)
  for (let ordinal = 0; ordinal < total; ordinal++) {
    const coords = coordinatesOf(sizes, ordinal)
    const cell = getCell(cellset, coords)
    lines.push([...coords.map((at, axis) => cellset.axes[axis].positions[at]?.label ?? ''), cell?.value ?? '', cell?.formatted ?? ''])
  }
  return toCsv(lines)
}
