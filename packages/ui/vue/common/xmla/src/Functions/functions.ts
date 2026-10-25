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
 * MDSCHEMA_FUNCTIONS rows read as functions: one entry per name with all
 * its overloads, the signature as MDX writes it, and the parameters from
 * the nested PARAMETERINFO rowset.
 */

export type FunctionRow = Record<string, unknown>

export interface FunctionParameter {
  name: string
  description: string
  optional: boolean
  repeatable: boolean
  skippable: boolean
}

export interface FunctionEntry {
  name: string
  overloads: FunctionRow[]
  /** The first overload's description - most servers repeat it. */
  description: string
}

/** ORIGIN as the spec numbers it. */
export const ORIGINS: Record<string, string> = { '1': 'MSOLAP', '2': 'UDF', '3': 'RELATIONAL', '4': 'SCALAR' }

/** RETURN_TYPE is an OLE DB VARTYPE; eMondrian answers 12 (Variant) for most. */
export const RETURN_TYPES: Record<string, string> = {
  '0': 'Empty',
  '1': 'Null',
  '2': 'Short',
  '3': 'Integer',
  '4': 'Single',
  '5': 'Double',
  '6': 'Currency',
  '7': 'Date',
  '8': 'String',
  '9': 'Object',
  '10': 'Error',
  '11': 'Boolean',
  '12': 'Variant',
  '13': 'Object',
  '14': 'Decimal',
  '16': 'Byte',
  '17': 'Byte',
  '18': 'Short',
  '19': 'Integer',
  '20': 'Long',
  '21': 'Long',
}

/** OBJECT, when a function is called on something: `Member.Children`. */
const RECEIVERS: Record<string, string> = {
  '1': 'Dimension',
  '2': 'Hierarchy',
  '3': 'Level',
  '4': 'Member',
  '5': 'Tuple',
  '6': 'Set',
}

/*
 * The functions MDX writes after a dot. Servers rarely say so - eMondrian
 * sends no OBJECT column - and list the receiver as the first parameter:
 * Members takes "Hierarchy", Lag takes "Member, Numeric Expression".
 */
const DOT_FUNCTIONS = new Set(
  [
    'AllMembers', 'Caption', 'Children', 'Count', 'Current', 'CurrentIndex', 'CurrentMember', 'CurrentOrdinal',
    'DataMember', 'DefaultMember', 'Dimension', 'FirstChild', 'FirstSibling', 'Hierarchy', 'Item', 'Lag',
    'LastChild', 'LastSibling', 'Lead', 'Level', 'Levels', 'MemberValue', 'Members', 'Name', 'NextMember',
    'Ordinal', 'Parent', 'PrevMember', 'Properties', 'Siblings', 'UniqueName', 'UnknownMember', 'Value',
  ].map(name => name.toLowerCase()),
)

/*
 * A cell's text: an empty element reads as an object with nothing in it,
 * which must not turn into "[object Object]".
 */
export function textOf(value: unknown): string {
  if (value === undefined || value === null || typeof value === 'object') return ''
  return String(value).trim()
}

export function groupFunctions(rows: FunctionRow[]): FunctionEntry[] {
  const byName = new Map<string, FunctionEntry>()
  for (const row of rows) {
    const name = textOf(row.FUNCTION_NAME)
    if (!name) continue
    const key = name.toLowerCase()
    const entry = byName.get(key) ?? { name, overloads: [], description: '' }
    entry.overloads.push(row)
    if (!entry.description) entry.description = textOf(row.DESCRIPTION)
    byName.set(key, entry)
  }
  return [...byName.values()].sort((a, b) => a.name.localeCompare(b.name))
}

export function parametersOf(row: FunctionRow): FunctionParameter[] {
  const raw = row.PARAMETERINFO
  const list = Array.isArray(raw) ? raw : raw && typeof raw === 'object' ? [raw] : []
  const flag = (value: unknown) => String(value).toLowerCase() === 'true'
  return list
    .filter((p: any) => textOf(p?.NAME))
    .map((p: any) => ({
      name: textOf(p.NAME),
      description: textOf(p.DESCRIPTION),
      optional: flag(p.OPTIONAL),
      repeatable: flag(p.REPEATABLE),
      skippable: flag(p.SKIPPABLE),
    }))
}

/*
 * PARAMETER_LIST as a list, else the names in PARAMETERINFO. "(none)" and
 * an empty cell do not mean no parameters: eMondrian answers "(none)" for
 * Crossjoin and Order, which take several. They are null - not stated.
 */
function parameterList(row: FunctionRow): string[] | null {
  const text = textOf(row.PARAMETER_LIST)
  if (text && !/^\(none\)$/i.test(text)) {
    const list = text.split(',').map(part => part.trim()).filter(Boolean)
    if (list.length) return list
  }
  const info = parametersOf(row).map(p => p.name)
  return info.length ? info : null
}

/* `Members("[Time].[1997]")` takes a string and is a call, though Members is also `Hierarchy.Members`. */
const isString = (parameter: string) => /^string\b/i.test(parameter)

interface Shape {
  /** Written after a dot. */
  dot: boolean
  /** What it is called on, where the server says. */
  receiver?: string
  /** The arguments in the parentheses; null where the server does not say. */
  args: string[] | null
}

/** How an overload is written: after a dot or as a call, its receiver and its arguments. */
function shapeOf(row: FunctionRow): Shape {
  const params = parameterList(row)
  const declared = RECEIVERS[textOf(row.OBJECT)]
  if (declared) return { dot: true, receiver: declared, args: params }
  if (DOT_FUNCTIONS.has(textOf(row.FUNCTION_NAME).toLowerCase())) {
    if (!params) return { dot: true, args: null }
    if (!isString(params[0]!)) return { dot: true, receiver: params[0], args: params.slice(1) }
  }
  return { dot: false, args: params }
}

/** Written after a dot: by its OBJECT where the server sends one, else by name and first parameter. */
export function isDotFunction(row: FunctionRow): boolean {
  return shapeOf(row).dot
}

/**
 * The overload as written: `Member.Lag(Numeric)`, `Hierarchy.Members`,
 * `Filter(Set, Logical)`. What the server leaves unsaid is `…`:
 * `Crossjoin(…)`, `….Properties(…)` - never `()`, which reads as "nothing".
 */
export function signatureOf(row: FunctionRow): string {
  const name = textOf(row.FUNCTION_NAME)
  const { dot, receiver, args } = shapeOf(row)
  if (!dot) return `${name}(${args ? args.join(', ') : '…'})`
  if (!receiver) return `….${name}${args ? '' : '(…)'}`
  return args?.length ? `${receiver}.${name}(${args.join(', ')})` : `${receiver}.${name}`
}

/*
 * The overload a list shows for a function: the first one the server
 * states fully - a dot overload with its receiver over one without, any
 * stated one over "(none)".
 */
export function representativeOf(entry: FunctionEntry): FunctionRow {
  const rank = (row: FunctionRow) => {
    const { dot, receiver, args } = shapeOf(row)
    if (dot && receiver) return 0
    if (!dot && args) return 1
    return 2
  }
  return entry.overloads.reduce((best, row) => (rank(row) < rank(best) ? row : best), entry.overloads[0]!)
}

/** What the return type is called; the number where it has no name. */
export function returnTypeOf(row: FunctionRow): string {
  const code = textOf(row.RETURN_TYPE)
  if (!code) return ''
  const name = RETURN_TYPES[code]
  return name ? `${name} (${code})` : code
}

/** KIND splits by how a function is written - after a dot or as a call - which every server allows. */
export type FunctionGrouping = 'KIND' | 'INTERFACE_NAME' | 'LIBRARY_NAME' | 'ORIGIN'

export function groupLabel(row: FunctionRow, by: FunctionGrouping): string {
  if (by === 'KIND') return isDotFunction(row) ? 'dot' : 'call'
  const value = textOf(row[by])
  return by === 'ORIGIN' ? (ORIGINS[value] ?? value) : value
}

/** A function's group: by its shown overload - written after a dot where any overload is. */
export function entryGroupLabel(entry: FunctionEntry, by: FunctionGrouping): string {
  if (by === 'KIND') return entry.overloads.some(isDotFunction) ? 'dot' : 'call'
  return groupLabel(representativeOf(entry), by)
}

/**
 * What to insert for a function: `.Name` after a receiver, `.Name()` where
 * it takes arguments there, `Name()` for a call. The caret goes between the
 * parentheses - `caret` is its offset in the text.
 */
export function insertionOf(entry: FunctionEntry): { text: string; caret: number } {
  const dot = entry.overloads.some(isDotFunction)
  // Over the overloads written that way; where neither receiver nor arguments are known, it may take some.
  const withArgs = entry.overloads.some(o => {
    const { dot: written, receiver, args } = shapeOf(o)
    return written === dot && (!!args?.length || (!receiver && !args))
  })
  const text = dot ? (withArgs ? `.${entry.name}()` : `.${entry.name}`) : `${entry.name}()`
  return { text, caret: text.endsWith('()') ? text.length - 1 : text.length }
}
