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
 * What the server explorer shows, from what the server says it has.
 *
 * DISCOVER_SCHEMA_ROWSETS lists every request type and the restrictions it
 * takes; that alone decides where a rowset goes. One that takes CATALOG_NAME
 * belongs inside each catalog, every other one sits at the root. Nothing
 * here knows a rowset by name beyond the few the OLAP and relational
 * branches are built from, so a server with more rowsets shows more.
 */

/*
 * A text the explorer writes itself, as a key of the language pack and its
 * values - translated when drawn, so a node built before a language switch
 * reads in the language switched to. The key is qualified, 'xmla:Explorer.olap',
 * so it is the same key wherever it is translated.
 */
export interface ExplorerText {
  key: string
  params?: Record<string, unknown>
}

export interface ExplorerNode {
  id: string
  /** What the server calls it - a catalog, a cube, a row. */
  label: string
  /** In place of label, where the explorer names the node itself. */
  text?: ExplorerText
  kind:
    | 'group'
    | 'catalog'
    | 'cube'
    | 'measure'
    | 'dimension'
    | 'hierarchy'
    | 'level'
    | 'rowset'
    | 'row'
    | 'table'
    | 'column'
    | 'more'
    | 'message'
  /** The row behind it, for the details dialog. */
  row?: Record<string, unknown>
  catalog?: string
  /** For a rowset node: what to discover and with which restrictions. */
  requestType?: string
  restrictions?: Record<string, unknown>
  badge?: string
  badgeText?: ExplorerText
  /** Shown on hover - for a rowset, the restrictions it declares. */
  hint?: ExplorerText
  lazy?: boolean
  loading?: boolean
  children?: ExplorerNode[]
}

/** Rowsets the OLAP branch covers itself; they are not listed again. */
export const STRUCTURAL_ROWSETS = new Set([
  'DBSCHEMA_CATALOGS',
  'MDSCHEMA_CUBES',
  'DISCOVER_SCHEMA_ROWSETS',
])

/** The names of the restrictions a rowset row declares, in whichever shape the server sent them. */
export function restrictionNames(row: Record<string, unknown>): string[] {
  const raw = (row.Restrictions ?? row.RESTRICTIONS) as unknown
  const list = Array.isArray(raw) ? raw : raw && typeof raw === 'object' ? [raw] : []
  return list
    .flatMap(entry => {
      if (!entry || typeof entry !== 'object') return []
      const name = (entry as Record<string, unknown>).Name ?? (entry as Record<string, unknown>).NAME
      return typeof name === 'string' ? [name] : []
    })
    .filter(Boolean)
}

export interface RowsetScopes {
  global: string[]
  catalogScoped: string[]
  declared: Set<string>
  /** Every rowset's restrictions, by request type. */
  restrictions: Map<string, string[]>
}

export function scopesOf(rowsets: Record<string, unknown>[]): RowsetScopes {
  const global: string[] = []
  const catalogScoped: string[] = []
  const declared = new Set<string>()
  const restrictions = new Map<string, string[]>()
  for (const row of rowsets) {
    const name = String(row.SchemaName ?? row.SCHEMA_NAME ?? '')
    if (!name) continue
    declared.add(name)
    restrictions.set(name, restrictionNames(row))
    if (STRUCTURAL_ROWSETS.has(name)) continue
    if (restrictionNames(row).includes('CATALOG_NAME')) catalogScoped.push(name)
    else global.push(name)
  }
  return { global: global.sort(), catalogScoped: catalogScoped.sort(), declared, restrictions }
}

/*
 * DBSCHEMA_COLUMNS gives DATA_TYPE as an OLE DB type indicator: 130 is a
 * Unicode string, 5 a double. Named where it has a name, the code otherwise.
 */
const DATA_TYPES: Record<string, string> = {
  '2': 'SMALLINT',
  '3': 'INTEGER',
  '4': 'REAL',
  '5': 'DOUBLE',
  '6': 'CURRENCY',
  '7': 'DATE',
  '11': 'BOOLEAN',
  '14': 'DECIMAL',
  '16': 'TINYINT',
  '17': 'UNSIGNED TINYINT',
  '18': 'UNSIGNED SMALLINT',
  '19': 'UNSIGNED INTEGER',
  '20': 'BIGINT',
  '21': 'UNSIGNED BIGINT',
  '72': 'GUID',
  '128': 'BINARY',
  '129': 'CHAR',
  '130': 'VARCHAR',
  '131': 'NUMERIC',
  '133': 'DATE',
  '134': 'TIME',
  '135': 'TIMESTAMP',
}

export function dataTypeName(code: unknown): string {
  const text = code === undefined || code === null || typeof code === 'object' ? '' : String(code)
  return DATA_TYPES[text] ?? text
}

const LABEL_COLUMNS = [
  /_CAPTION$/,
  /_NAME$/,
  /^SchemaName$/,
  /^PropertyName$/,
  /^Keyword$/,
  /^LiteralName$/,
  /^EnumName$/,
  /^DataSourceName$/,
]

/** What a row is called: its caption or name column, else its first value. */
export function rowLabel(row: Record<string, unknown>): string {
  const keys = Object.keys(row)
  for (const pattern of LABEL_COLUMNS) {
    const key = keys.find(k => pattern.test(k) && typeof row[k] === 'string' && row[k])
    if (key) return String(row[key])
  }
  const first = keys.find(k => typeof row[k] === 'string' && row[k])
  return first ? String(row[first]) : '—'
}

/*
 * What a table has beside its columns, where the server declares it - and
 * the restriction names each rowset knows the table by.
 */
export const TABLE_ROWSETS: Array<{ requestType: string; catalog: string; table: string; schema: string }> = [
  { requestType: 'DBSCHEMA_INDEXES', catalog: 'TABLE_CATALOG', table: 'TABLE_NAME', schema: 'TABLE_SCHEMA' },
  { requestType: 'DBSCHEMA_PRIMARY_KEYS', catalog: 'TABLE_CATALOG', table: 'TABLE_NAME', schema: 'TABLE_SCHEMA' },
  { requestType: 'DBSCHEMA_FOREIGN_KEYS', catalog: 'FK_TABLE_CATALOG', table: 'FK_TABLE_NAME', schema: 'FK_TABLE_SCHEMA' },
  { requestType: 'DBSCHEMA_TABLE_CONSTRAINTS', catalog: 'TABLE_CATALOG', table: 'TABLE_NAME', schema: 'TABLE_SCHEMA' },
  { requestType: 'DBSCHEMA_TABLE_STATISTICS', catalog: 'TABLE_CATALOG', table: 'TABLE_NAME', schema: 'TABLE_SCHEMA' },
  { requestType: 'DBSCHEMA_TABLE_PRIVILEGES', catalog: 'TABLE_CATALOG', table: 'TABLE_NAME', schema: 'TABLE_SCHEMA' },
]

/*
 * MDSCHEMA_DIMENSIONS lists the measures as a dimension of their own, type 2
 * (MD_DIMTYPE_MEASURE). The cube shows them as a group already.
 */
export function isMeasuresDimension(row: Record<string, unknown>): boolean {
  return String(row.DIMENSION_TYPE ?? '') === '2' || String(row.DIMENSION_UNIQUE_NAME ?? '').toLowerCase() === '[measures]'
}

/** How many rows of a rowset become tree nodes; the rest are in the grid. */
export const TREE_ROW_LIMIT = 100
